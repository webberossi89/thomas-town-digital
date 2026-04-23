/**
 * scripts/fix-metadata.mjs
 * One-shot codemod to fix SEO metadata issues flagged by the audit:
 *   1. Titles > 60ch: strip " — Thomas Town Digital" / " | Thomas Town Digital" suffix
 *   2. Descriptions > 160ch: trim at last sentence boundary under 160ch
 *   3. openGraph blocks missing images: inject default logo image
 *   4. openGraph blocks missing url: inject url derived from file path
 *
 * Runs against every app/**\/page.tsx. Pass --dry to preview without writing.
 */

import fs from 'fs';
import path from 'path';

const DRY = process.argv.includes('--dry');
const DEFAULT_OG_IMAGE = '/logos/TT-Logo-Socials_Socials-01.png';
const SITE_URL = 'https://www.thomastowndigital.com';

function walk(dir, files = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (['node_modules', '.next', '.git', 'api'].includes(entry.name)) continue;
      walk(full, files);
    } else if (entry.name === 'page.tsx') {
      files.push(full);
    }
  }
  return files;
}

function urlFromFilePath(filePath) {
  const rel = filePath.replace(/^.*?\/app\//, '/').replace(/\/page\.tsx$/, '');
  return rel === '' ? SITE_URL : `${SITE_URL}${rel}`;
}

function trimTitle(title) {
  if (!title) return null;
  return title
    .replace(/\s*[—\-|]\s*Thomas Town Digital\s*$/i, '')
    .trim();
}

function trimDescription(desc, max = 158) {
  if (!desc) return null;
  if (desc.length <= max) return desc;
  const truncated = desc.slice(0, max);
  const lastStop = Math.max(
    truncated.lastIndexOf('. '),
    truncated.lastIndexOf('! '),
    truncated.lastIndexOf('? '),
  );
  if (lastStop > max * 0.6) {
    return truncated.slice(0, lastStop + 1).trim();
  }
  const lastSpace = truncated.lastIndexOf(' ');
  return truncated.slice(0, lastSpace > 0 ? lastSpace : max).trim();
}

function replaceField(src, fieldName, newValue, { multiline = false } = {}) {
  // Only matches string-literal values (double-quoted). Skips object-valued
  // fields like `title: { default: ... }`, which is what we want.
  const re = multiline
    ? new RegExp(`(^\\s*${fieldName}:\\s*)"((?:[^"\\\\]|\\\\.)*)"`, 'm')
    : new RegExp(`(\\s${fieldName}:\\s*)"((?:[^"\\\\]|\\\\.)*)"`);
  return src.replace(re, (match, prefix) => `${prefix}${JSON.stringify(newValue)}`);
}

function extractString(src, fieldName) {
  const m = src.match(new RegExp(`\\s${fieldName}:\\s*"((?:[^"\\\\]|\\\\.)*)"`));
  return m ? m[1].replace(/\\"/g, '"') : null;
}

function fixTitle(src) {
  // Only fix the top-level metadata.title (first occurrence) — leave the nested
  // openGraph.title alone since it can afford to be longer (OG has 90ch budget).
  const topTitle = extractString(src, 'title');
  if (!topTitle || topTitle.length <= 60) return { src, changed: false };
  const trimmed = trimTitle(topTitle);
  if (!trimmed || trimmed === topTitle) return { src, changed: false };
  return {
    src: src.replace(`title: ${JSON.stringify(topTitle)}`, `title: ${JSON.stringify(trimmed)}`),
    changed: true,
    before: topTitle.length,
    after: trimmed.length,
  };
}

function fixDescription(src) {
  const topDesc = extractString(src, 'description');
  if (!topDesc || topDesc.length <= 160) return { src, changed: false };
  const trimmed = trimDescription(topDesc);
  if (!trimmed || trimmed === topDesc) return { src, changed: false };

  // Replace only the first occurrence (top-level metadata.description)
  return {
    src: src.replace(`description: ${JSON.stringify(topDesc)}`, `description: ${JSON.stringify(trimmed)}`),
    changed: true,
    before: topDesc.length,
    after: trimmed.length,
  };
}

function fixOpenGraph(src, filePath) {
  const ogMatch = src.match(/openGraph:\s*\{([\s\S]*?)\n\s*\},/);
  if (!ogMatch) return { src, changed: false };

  const ogBody = ogMatch[1];
  const hasImages = /\bimages\s*:/.test(ogBody);
  const hasUrl = /\burl\s*:/.test(ogBody);

  if (hasImages && hasUrl) return { src, changed: false };

  let additions = '';
  if (!hasUrl) {
    additions += `    url: ${JSON.stringify(urlFromFilePath(filePath))},\n`;
  }
  if (!hasImages) {
    additions += `    images: [{ url: ${JSON.stringify(DEFAULT_OG_IMAGE)} }],\n`;
  }

  // Insert before the closing brace of openGraph block
  const newSrc = src.replace(ogMatch[0], ogMatch[0].replace(/\n(\s*)\},/, `\n${additions}$1},`));
  return { src: newSrc, changed: true, addedUrl: !hasUrl, addedImages: !hasImages };
}

const files = walk('./app');
let changedCount = 0;
const report = [];

for (const f of files) {
  let src = fs.readFileSync(f, 'utf8');
  const rel = f.replace('./', '');

  const t = fixTitle(src);
  src = t.src;

  const d = fixDescription(src);
  src = d.src;

  const o = fixOpenGraph(src, f, rel);
  src = o.src;

  const changed = t.changed || d.changed || o.changed;
  if (changed) {
    if (!DRY) fs.writeFileSync(f, src);
    changedCount += 1;
    report.push({
      file: rel,
      title: t.changed ? `${t.before} → ${t.after}` : null,
      desc: d.changed ? `${d.before} → ${d.after}` : null,
      og: o.changed ? [o.addedUrl && 'url', o.addedImages && 'images'].filter(Boolean).join(', ') : null,
    });
  }
}

console.log(`${DRY ? '[DRY RUN] ' : ''}Scanned ${files.length} page.tsx files. Modified ${changedCount}.`);
console.log('');
for (const r of report) {
  const parts = [];
  if (r.title) parts.push(`title: ${r.title}`);
  if (r.desc) parts.push(`desc: ${r.desc}`);
  if (r.og) parts.push(`og: +${r.og}`);
  console.log(`  ${r.file}`);
  console.log(`    ${parts.join(' | ')}`);
}

#!/usr/bin/env node
// Inserts `alternates: { canonical: "<path>" }` into every page.tsx that
// exports a metadata object but doesn't already define alternates. The
// canonical path is derived from the file's location under app/ (e.g.
// app/contact/page.tsx => "/contact"). metadataBase is set in the root
// layout, so Next.js resolves relative paths to https://www.thomastowndigital.com.
// Skips app/layout.tsx (root layout already owns site-wide alternates and
// canonical there would incorrectly inherit to every subpage).

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const APP_DIR = path.join(ROOT, 'app');

function walk(dir, out = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, out);
    else if (entry.isFile() && entry.name === 'page.tsx') out.push(full);
  }
  return out;
}

function canonicalFromFile(file) {
  const rel = path.relative(APP_DIR, file).replace(/\\/g, '/');
  // app/page.tsx => "page.tsx" (no leading slash) so handle that case first.
  if (rel === 'page.tsx') return '/';
  const stripped = '/' + rel.replace(/\/page\.tsx$/, '');
  return stripped === '/' ? '/' : stripped;
}

const METADATA_OPEN = /(export const metadata\s*:\s*Metadata\s*=\s*\{)/;

function transform(src, canonical) {
  if (/\balternates\s*:/.test(src)) return null; // already configured
  if (!METADATA_OPEN.test(src)) return null;     // no const metadata block
  const insertion = `\n  alternates: { canonical: "${canonical}" },`;
  return src.replace(METADATA_OPEN, `$1${insertion}`);
}

const files = walk(APP_DIR);
let touched = 0;
let skipped = 0;
const results = [];

for (const file of files) {
  const src = fs.readFileSync(file, 'utf8');
  const canonical = canonicalFromFile(file);
  const next = transform(src, canonical);
  const rel = path.relative(ROOT, file);
  if (next === null) {
    skipped += 1;
    results.push({ rel, status: 'skipped', canonical });
    continue;
  }
  fs.writeFileSync(file, next);
  touched += 1;
  results.push({ rel, status: 'updated', canonical });
}

console.log(`canonicals: ${touched} updated, ${skipped} skipped, ${files.length} total`);
for (const r of results) {
  console.log(`  ${r.status === 'updated' ? '✓' : '·'} ${r.rel} -> ${r.canonical}`);
}

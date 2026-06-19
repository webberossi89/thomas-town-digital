// Generates fixed favicons: solid white background + black TT monogram.
// Google's favicon crawler ignores prefers-color-scheme, so we serve one
// unconditional icon (white bg, black logo) that renders correctly on the
// white search-results page. Run: node scripts/make-favicons.mjs
import sharp from "sharp";
import { writeFile } from "node:fs/promises";

const SRC = "public/logos/TT-Logo_MonoGram-Black-Sqaure.png";
const WHITE = { r: 255, g: 255, b: 255, alpha: 1 };
const TRANSPARENT = { r: 255, g: 255, b: 255, alpha: 0 };

// Composite the logo (flattened onto white) onto a solid white square.
async function render(size, pad) {
  const inner = Math.round(size * (1 - pad * 2));
  const logo = await sharp(SRC)
    .resize(inner, inner, { fit: "contain", background: TRANSPARENT })
    .toBuffer();
  return sharp({
    create: { width: size, height: size, channels: 4, background: WHITE },
  })
    .composite([{ input: logo, gravity: "center" }])
    .png()
    .toBuffer();
}

// Minimal ICO writer wrapping PNG-encoded entries (16/32/48).
function buildIco(entries) {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // type: icon
  header.writeUInt16LE(entries.length, 4); // image count

  const dir = Buffer.alloc(16 * entries.length);
  let offset = header.length + dir.length;
  const bodies = [];
  entries.forEach((e, i) => {
    const base = i * 16;
    dir.writeUInt8(e.size >= 256 ? 0 : e.size, base + 0); // width
    dir.writeUInt8(e.size >= 256 ? 0 : e.size, base + 1); // height
    dir.writeUInt8(0, base + 2); // palette
    dir.writeUInt8(0, base + 3); // reserved
    dir.writeUInt16LE(1, base + 4); // color planes
    dir.writeUInt16LE(32, base + 6); // bits per pixel
    dir.writeUInt32LE(e.data.length, base + 8); // size of image data
    dir.writeUInt32LE(offset, base + 12); // offset of image data
    offset += e.data.length;
    bodies.push(e.data);
  });
  return Buffer.concat([header, dir, ...bodies]);
}

async function main() {
  // App Router conventions: app/icon.png + app/apple-icon.png.
  await sharp(await render(512, 0.06)).toFile("app/icon.png");
  await sharp(await render(180, 0.1)).toFile("app/apple-icon.png");

  // Classic /favicon.ico for browsers that still request it.
  const ico = buildIco([
    { size: 16, data: await render(16, 0.04) },
    { size: 32, data: await render(32, 0.06) },
    { size: 48, data: await render(48, 0.06) },
  ]);
  await writeFile("app/favicon.ico", ico);

  console.log("Wrote app/icon.png, app/apple-icon.png, app/favicon.ico");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

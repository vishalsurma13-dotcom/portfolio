/**
 * Generates src/app/opengraph-image.png from src/data/site.ts.
 *
 * Why not ImageResponse (opengraph-image.tsx)? Its renderer (Satori) does not
 * shape Devanagari: conjuncts (स्ते, र्म), the ि matra and chandrabindu render
 * broken. A real browser engine shapes Hindi correctly, so we screenshot an
 * HTML page with headless Chrome / Edge instead.
 *
 * Usage:  npm run og
 */
import { execFileSync } from "node:child_process";
import { existsSync, mkdtempSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";
import { pathToFileURL } from "node:url";
import { hero, site } from "../src/data/site.ts";

const root = resolve(import.meta.dirname, "..");
const fontUrl = pathToFileURL(join(root, "assets/fonts/TiroDevanagariHindi-Regular.ttf")).href;
const out = join(root, "src/app/opengraph-image.png");

const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

const html = `<!doctype html>
<html lang="hi"><head><meta charset="utf-8">
<style>
  @font-face { font-family: Tiro; src: url("${fontUrl}") format("truetype"); }
  html, body { margin: 0; width: 1200px; height: 630px; overflow: hidden; }
  body {
    box-sizing: border-box; padding: 80px 96px; background: #F5F1E8; color: #1C1A17;
    font-family: Tiro, serif; display: flex; flex-direction: column; justify-content: space-between;
  }
  .name { font-size: 30px; line-height: 1.4; color: #A8432A; }
  h1 { margin: 0; font-weight: 400; font-size: 96px; line-height: 1.35; }
  .roles { margin-top: 24px; font-size: 36px; line-height: 1.5; color: #5B554C; }
  hr { margin: 0; border: 0; border-top: 1px solid #D9D1C1; }
</style></head>
<body>
  <div class="name">${esc(site.name)}</div>
  <div><h1>${esc(hero.greeting)}</h1><div class="roles">${esc(hero.topline)}</div></div>
  <hr>
</body></html>`;

const browsers = [
  process.env.CHROME_PATH,
  "C:/Program Files/Google/Chrome/Application/chrome.exe",
  "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
  "C:/Program Files/Microsoft/Edge/Application/msedge.exe",
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  "/usr/bin/google-chrome",
  "/usr/bin/chromium",
  "/usr/bin/chromium-browser",
].filter((p): p is string => Boolean(p));

const browser = browsers.find((p) => existsSync(p));
if (!browser) {
  console.error("Chrome या Edge नहीं मिला। CHROME_PATH सेट करके फिर चलाएँ।");
  process.exit(1);
}

const dir = mkdtempSync(join(tmpdir(), "og-"));
const page = join(dir, "og.html");
writeFileSync(page, html, "utf8");

try {
  execFileSync(
    browser,
    [
      "--headless=new",
      "--disable-gpu",
      "--hide-scrollbars",
      "--allow-file-access-from-files",
      "--force-device-scale-factor=1",
      "--window-size=1200,630",
      "--virtual-time-budget=3000",
      `--user-data-dir=${join(dir, "profile")}`,
      `--screenshot=${out}`,
      pathToFileURL(page).href,
    ],
    { stdio: "inherit" },
  );
  console.log(`✓ ${out}`);
} finally {
  rmSync(dir, { recursive: true, force: true });
}

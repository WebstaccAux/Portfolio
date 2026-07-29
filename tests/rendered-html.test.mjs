import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function render() {
  return readFile(new URL("../out/index.html", import.meta.url), "utf8");
}

test("renders the finished Webstacc portfolio", async () => {
  const html = await render();
  assert.match(
    html,
    /<title>Webstacc Portfolio — Webdesign &amp; Google Ads aus Augsburg<\/title>/i,
  );
  assert.match(html, /Wir bauen/);
  assert.match(html, /digitale/);
  assert.match(html, /Vorsprünge/);
  assert.match(html, /Rechtsschutzpartner24/);
  assert.match(html, /leads123/);
  assert.match(html, /beatstacc/);
  assert.match(html, /Kostenloses Erstgespräch/);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton/i);
});

test("includes production metadata", async () => {
  const html = await render();

  assert.match(html, /property="og:title"/i);
  assert.match(html, /\/og\.png/);
  assert.match(html, /name="twitter:card" content="summary_large_image"/i);
  assert.match(html, /rel="icon" href="[^"]*\/favicon\.svg"/i);
});

import assert from "node:assert/strict";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html", host: "localhost" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("renders the finished Webstacc portfolio", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
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
  const response = await render();
  const html = await response.text();

  assert.match(html, /property="og:title"/i);
  assert.match(html, /\/og\.png/);
  assert.match(html, /name="twitter:card" content="summary_large_image"/i);
  assert.match(html, /rel="icon" href="http:\/\/localhost\/favicon\.svg"/i);
});

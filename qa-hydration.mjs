export default async function run(page, ui) {
  const result = await page.evaluate(() => {
    const entries = performance.getEntriesByType("resource").map((e) => e.name);
    return {
      clientEntryLoaded: entries.some((u) => u.includes("tanstack-start-dev-client-entry")),
      hasTSR: typeof window.__TSR,
      tsrKeys: typeof window.__TSR === "object" ? Object.keys(window.__TSR) : null,
      resourceCount: entries.length,
      lastResources: entries.slice(-10),
    };
  });
  return result;
}

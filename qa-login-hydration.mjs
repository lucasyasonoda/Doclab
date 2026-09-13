export default async function run(page) {
  const consoleMessages = [];
  const pageErrors = [];
  const failed = [];
  page.on('console', (message) => consoleMessages.push({ type: message.type(), text: message.text() }));
  page.on('pageerror', (error) => pageErrors.push(String(error)));
  page.on('requestfailed', (request) => failed.push({ url: request.url(), error: request.failure()?.errorText }));
  await page.goto('https://doclab.sonodaprog.workers.dev/admin/login', { waitUntil: 'networkidle' });
  await page.waitForTimeout(1500);
  const state = await page.evaluate(() => ({
    url: location.href,
    scripts: [...document.scripts].map((s) => ({ src: s.src, type: s.type, ready: s.readyState })),
    formReactKeys: Object.keys(document.querySelector('form') || {}).filter((k) => k.startsWith('__react')),
    inputReactKeys: Object.keys(document.querySelector('input') || {}).filter((k) => k.startsWith('__react')),
    loaded: performance.getEntriesByType('resource').filter((e) => e.name.includes('/assets/')).map((e) => e.name),
  }));
  return { state, consoleMessages, pageErrors, failed };
}

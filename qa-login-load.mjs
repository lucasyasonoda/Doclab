export default async function run(page) {
  const requests = [];
  const responses = [];
  const failures = [];
  const errors = [];
  page.on('request', (request) => requests.push({ method: request.method(), url: request.url(), resource: request.resourceType() }));
  page.on('response', (response) => responses.push({ status: response.status(), url: response.url(), resource: response.request().resourceType() }));
  page.on('requestfailed', (request) => failures.push({ url: request.url(), error: request.failure()?.errorText }));
  page.on('pageerror', (error) => errors.push(String(error)));
  await page.goto('https://doclab.sonodaprog.workers.dev/admin/login', { waitUntil: 'networkidle' });
  await page.reload({ waitUntil: "networkidle" });`r`n  await page.waitForTimeout(3000);
  return { errors, failures, requests: requests.filter((r) => r.resource !== 'image' && r.resource !== 'font'), responses: responses.filter((r) => r.resource !== 'image' && r.resource !== 'font'), runtime: await page.evaluate(() => ({ tsr: typeof window.$_TSR, tss: typeof window.__TSS_START_OPTIONS__, url: location.href })) };
}

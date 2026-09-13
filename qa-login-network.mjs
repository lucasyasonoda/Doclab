export default async function run(page) {
  const requests = [];
  const responses = [];
  const failures = [];
  const errors = [];
  page.on('request', (request) => requests.push({ method: request.method(), url: request.url(), resource: request.resourceType(), postData: request.postData() }));
  page.on('response', (response) => responses.push({ status: response.status(), url: response.url(), resource: response.request().resourceType() }));
  page.on('requestfailed', (request) => failures.push({ url: request.url(), error: request.failure()?.errorText }));
  page.on('pageerror', (error) => errors.push(String(error)));
  await page.waitForTimeout(6000);
  return {
    url: page.url(),
    errors,
    failures,
    requests: requests.filter((r) => r.resource !== 'image' && r.resource !== 'font'),
    responses: responses.filter((r) => r.resource !== 'image' && r.resource !== 'font'),
  };
}

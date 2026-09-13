export default async function run(page) {
  const requests = [];
  page.on('request', (request) => requests.push({ method: request.method(), url: request.url(), resource: request.resourceType() }));
  const before = await page.evaluate(() => ({
    url: location.href,
    scripts: [...document.scripts].map((script) => ({ src: script.src, type: script.type, async: script.async })),
    inputs: [...document.querySelectorAll('input')].map((input) => ({ id: input.id, value: input.value })),
    form: document.querySelector('form')?.outerHTML.slice(0, 500),
    body: document.body.innerText.slice(0, 300),
  }));
  await page.waitForTimeout(3000);
  const afterHydrationWait = await page.evaluate(() => ({
    url: location.href,
    scripts: [...document.scripts].map((script) => script.src || script.id),
    reactKeys: Object.keys(document.querySelector('form') || {}).filter((key) => key.startsWith('__react')),
    inputKeys: Object.keys(document.querySelector('input') || {}).filter((key) => key.startsWith('__react')),
  }));
  return { before, afterHydrationWait, requests: requests.filter((request) => request.resource === 'script' || request.url.includes('_serverFn')) };
}

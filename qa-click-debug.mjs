export default async function run(page) {
  await page.waitForTimeout(3000);
  const before = await page.evaluate(() => ({
    url: location.href,
    html: document.querySelector("button.btn-primary.bg-white")?.outerHTML,
  }));
  const requests = [];
  page.on("request", (r) => {
    if (r.method() !== "GET") requests.push(`${r.method()} ${r.url()}`);
  });
  await page
    .locator('input[aria-label="E-mail para newsletter"]')
    .fill("teste-final@doclab.com.br");
  await page.locator("button").filter({ hasText: "Quero receber" }).click();
  await page.waitForTimeout(500);
  const immediate = await page.evaluate(() => ({
    text: document.querySelector("button.btn-primary.bg-white")?.textContent,
    value: document.querySelector("input[type=email]")?.value,
    url: location.href,
  }));
  await page.waitForTimeout(5000);
  const after = await page.evaluate(() => ({
    text: document.querySelector("button.btn-primary.bg-white")?.textContent,
    body: document.body.innerText.slice(-500),
    url: location.href,
  }));
  return { before, immediate, after, requests };
}

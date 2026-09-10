export default async function run(page) {
  const input = page.locator('input[aria-label="E-mail para newsletter"]');
  const button = page.locator("button").filter({ hasText: "Quero receber" });
  await input.fill("teste-final@doclab.com.br");
  await button.scrollIntoViewIfNeeded();
  await button.click({ force: true });
  await page.waitForTimeout(500);
  const immediate = await button.textContent();
  await page.waitForTimeout(3000);
  return {
    immediate,
    final: await page
      .locator("button")
      .filter({ hasText: /Quero receber|Enviando|Inscrito|Tentar/ })
      .first()
      .textContent(),
    url: page.url(),
  };
}

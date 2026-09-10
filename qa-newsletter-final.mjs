export default async function run(page) {
  await page.waitForTimeout(3000);
  const initialUrl = page.url();
  const input = page.locator('input[type="email"]');
  const button = page.getByRole("button", { name: "Quero receber" });
  await input.fill("teste-final@doclab.com.br");
  await button.click();
  const loading = await page.getByRole("button", { name: "Enviando..." }).count();
  await page.waitForTimeout(1500);
  return {
    initialUrl,
    finalUrl: page.url(),
    urlHasEmail: page.url().includes("email="),
    loadingVisibleImmediately: loading > 0,
    successVisible: (await page.getByRole("button", { name: /Inscrito com sucesso/ }).count()) > 0,
    errorVisible:
      (await page.getByText(/Não deu certo|Tentar novamente|não foi possível/).count()) > 0,
  };
}

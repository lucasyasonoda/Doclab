export default async function run(page) {
  const requests = [];
  const responses = [];
  page.on("request", (r) => {
    if (r.method() !== "GET") requests.push(`${r.method()} ${r.url()}`);
  });
  page.on("response", (r) => {
    if (r.request().method() !== "GET") responses.push(`${r.status()} ${r.url()}`);
  });
  const input = page.getByRole("textbox", { name: "E-mail para newsletter" });
  const button = page.getByRole("button", { name: "Quero receber" });
  await input.fill("lltechltda@gmail.com");
  await button.click();
  await page.waitForTimeout(5000);
  return {
    url: page.url(),
    button: await page
      .locator("button")
      .filter({ hasText: /Enviando|Inscrito|Tentar|Quero/ })
      .first()
      .textContent(),
    requests,
    responses,
    urlHasEmail: page.url().includes("email="),
  };
}

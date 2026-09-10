export default async function run(page) {
  const calls = [];
  page.on("request", (r) => {
    if (r.method() !== "GET")
      calls.push({ type: "request", method: r.method(), url: r.url(), body: r.postData() });
  });
  page.on("response", async (r) => {
    if (r.request().method() !== "GET") {
      let body = "";
      try {
        body = (await r.text()).slice(0, 500);
      } catch {}
      calls.push({
        type: "response",
        status: r.status(),
        url: r.url(),
        contentType: r.headers()["content-type"],
        body,
      });
    }
  });
  const input = page.getByRole("textbox", { name: "E-mail para newsletter" });
  const button = page.getByRole("button", { name: "Quero receber" });
  await input.fill("lltechltda@gmail.com");
  await button.click();
  await page.waitForTimeout(3000);
  return {
    url: page.url(),
    button: await page
      .locator("button")
      .filter({ hasText: /Enviando|Inscrito|Tentar|Quero/ })
      .first()
      .textContent()
      .catch(() => null),
    calls,
  };
}

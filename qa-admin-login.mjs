export default async function run(page) {
  const requests = [];
  const responses = [];
  page.on("request", (r) => {
    if (r.method() !== "GET") requests.push(`${r.method()} ${r.url()}`);
  });
  page.on("response", (r) => {
    if (r.request().method() !== "GET") responses.push(`${r.status()} ${r.url()}`);
  });
  const user = page.locator("#admin-username");
  const pass = page.locator("#admin-password");
  const button = page.getByRole("button", { name: "Entrar" });
  const before = { disabled: await button.isDisabled(), url: page.url() };
  await user.fill("doclabmktadmin");
  await pass.fill("doclabadmin2026@");
  const enabled = await button.isEnabled();
  await button.click();
  await page.waitForTimeout(2000);
  return {
    before,
    enabled,
    finalUrl: page.url(),
    body: (await page.locator("body").innerText()).slice(-500),
    requests,
    responses,
  };
}

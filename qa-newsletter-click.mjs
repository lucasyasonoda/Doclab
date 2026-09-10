export default async function run(page, ui) {
  // Intercepta network antes da interação
  const log = { posts: [], responses: [] };
  page.on("request", (r) => {
    if (r.method() !== "GET") log.posts.push(r.method() + " " + r.url());
  });
  page.on("response", (r) => {
    if (r.request().method() !== "GET") log.responses.push(r.status() + " " + r.url());
  });

  // Preenche o input de email da newsletter (via aria-label)
  await page
    .locator('input[aria-label="E-mail para newsletter"]')
    .fill("teste-validacao@doclab.com.br");

  // Clica no botão
  await page.getByRole("button", { name: "Quero receber" }).click();

  // Observa o estado imediato (loading)
  let loadingShown = false;
  try {
    await page.waitForFunction(() => document.body.innerText.includes("Enviando..."), {
      timeout: 1500,
    });
    loadingShown = true;
  } catch {
    // sem loading
  }

  // Aguarda desfecho (sucesso ou erro)
  let outcome = "timeout";
  try {
    await page.waitForFunction(
      () =>
        document.body.innerText.includes("Inscrito com sucesso") ||
        document.body.innerText.includes("Tentar novamente"),
      { timeout: 10000 },
    );
    const text = await page.evaluate(() => document.body.innerText);
    outcome = text.includes("Inscrito com sucesso") ? "success" : "error-shown";
  } catch {
    outcome = "no-state-change";
  }

  const finalText = await page.evaluate(() => document.body.innerText);
  const url = page.url();

  return {
    loadingShown,
    outcome,
    finalUrl: url,
    navigated: url.includes("functions/v1") || url.includes("/api/"),
    errorMsg:
      (finalText.match(/Tentar novamente|Não deu certo[^\n]*|não foi possível[^\n]*/i) ?? [])[0] ??
      "",
    successMsg: (finalText.match(/Inscrito com sucesso[^\n]*/i) ?? [])[0] ?? "",
    network: log,
  };
}

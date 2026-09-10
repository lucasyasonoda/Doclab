export default async function run(page, ui) {
  const log = { requests: [], responses: [] };
  page.on("request", (r) => {
    if (String(r.url).includes("newsletter") || r.method !== "GET") {
      log.requests.push(r.method + " " + r.url);
    }
  });
  page.on("response", (r) => {
    if (
      String(r.url).includes("newsletter") ||
      log.requests.some((x) => x.includes(String(r.url)))
    ) {
      log.responses.push(r.status + " " + r.url);
    }
  });

  await page.evaluate(() => {
    const emails = Array.from(document.querySelectorAll('input[type="email"]'));
    for (const el of emails) {
      el.value = "teste-validacao@doclab.com.br";
      el.dispatchEvent(new Event("input", { bubbles: true }));
    }
    const btn = Array.from(document.querySelectorAll("button")).find(
      (b) => b.textContent.trim() === "Quero receber",
    );
    if (btn) btn.dispatchEvent(new MouseEvent("click", { bubbles: true, cancelable: true }));
  });

  await page.waitForTimeout(7000);
  const final = await page.evaluate(() => ({
    url: location.href,
    body: document.body.innerText.slice(0, 1500),
  }));
  return { log, final };
}

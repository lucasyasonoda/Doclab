export default async function run(page, ui) {
  const events = [];
  page.on('request', (request) => {
    if (request.method() !== 'GET' || request.url().includes('_serverFn')) {
      events.push({ type: 'request', method: request.method(), url: request.url(), postData: request.postData() });
    }
  });
  page.on('response', async (response) => {
    if (response.url().includes('_serverFn') || response.request().method() !== 'GET') {
      events.push({ type: 'response', status: response.status(), url: response.url() });
    }
  });
  const before = await ui.snapshot();
  await page.getByLabel('Usuário').fill('teste-invalido');
  await page.getByLabel('Senha').fill('senha-invalida');
  await page.getByRole('button', { name: 'Entrar' }).click();
  await page.waitForTimeout(2500);
  return {
    url: page.url(),
    title: await page.title(),
    button: await page.getByRole('button').allTextContents(),
    errors: await page.locator('p, [role="alert"], div').allTextContents().then((items) => items.filter((text) => /erro|incorreto|configur|entrando|não deu/i.test(text)).slice(-10)),
    bodyText: (await page.locator('body').innerText()).slice(0, 1200),
    events,
    before,
  };
}

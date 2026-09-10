export default async function run(page) {
  await page.getByRole("button", { name: "Abrir menu" }).click();
  const menuOpen = await page.getByRole("button", { name: "Fechar menu" }).count();
  return { menuOpen: menuOpen > 0, url: page.url() };
}

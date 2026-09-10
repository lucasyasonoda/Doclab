export default async function run(page, ui) {
  await page.evaluate(() => {
    window.__spaMarker = true;
  });
  await page.getByRole("link", { name: "Sobre", exact: true }).first().click();
  await page.waitForTimeout(2000);
  return await page.evaluate(() => ({
    spaMarkerSurvived: window.__spaMarker === true,
    path: location.pathname,
  }));
}

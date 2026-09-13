export default async function run(page) {
  await page.waitForTimeout(3000);
  return await page.evaluate(() => ({
    url: location.href,
    ready: document.readyState,
    tsr: typeof window.$_TSR,
    tsrHydrated: window.$_TSR?.hydrated,
    tss: typeof window.__TSS_START_OPTIONS__,
    history: history.state,
    formOuter: document.querySelector('form')?.outerHTML.slice(0, 1000),
    reactFormKeys: Object.keys(document.querySelector('form') || {}),
    reactInputKeys: Object.keys(document.querySelector('input') || {}),
  }));
}

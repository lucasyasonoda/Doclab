export default async function run(page, ui) {
  const rootHasChildren = await page.evaluate(() => {
    const root = document.querySelector("#root");
    if (!root) return "no-root";
    return root.childElementCount > 0;
  });
  // Detecta marcadores de hidratação do React (comentários <!--$--> etc.)
  const markers = await page.evaluate(() => {
    const html = document.documentElement.outerHTML;
    return {
      hasSuspenseMarkers: html.includes("<!--$-->"),
      hasTanStackState: html.includes("__TSR"),
    };
  });
  return { rootHasChildren, markers };
}

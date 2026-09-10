export default async function run(page, ui) {
  const result = await page.evaluate(() => {
    const cards = document.querySelectorAll("ul[role=list] > li");
    const blogLinks = document.querySelectorAll('a[href*="/blog/"]');
    const titles = Array.from(document.querySelectorAll("ul[role=list] > li h3")).map((h) =>
      h.textContent.trim(),
    );
    return {
      cards: cards.length,
      blogLinks: blogLinks.length,
      titles,
      hasNewsletter: !!document.querySelector('input[type="email"]'),
      hasNewsletterBtn: Array.from(document.querySelectorAll("button")).some(
        (b) => b.textContent.trim() === "Quero receber",
      ),
    };
  });
  return result;
}

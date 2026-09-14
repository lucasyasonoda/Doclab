/**
 * Conteúdo dos artigos do blog.
 *
 * O painel administrativo deixa o usuário escrever HTML simples (parágrafos,
 * subtítulos, listas, destaques). Guardamos isso como um bloco único de HTML
 * dentro do mesmo formato `jsonb` já usado pela tabela `blog_articles`, para
 * não exigir migração de banco:
 *
 *   [{ "html": "<p>...</p><h2>...</h2>" }]
 *
 * Também aceitamos o formato antigo (`heading`/`paragraphs`/`list`/`callout`)
 * para que artigos já salvos continuem funcionando.
 */
export type ContentBlock = {
  html?: string;
  heading?: string;
  paragraphs?: string[];
  list?: string[];
  callout?: string;
};

/** Converte o texto digitado no painel para o formato salvo no banco. */
export function contentFromEditor(html: string): ContentBlock[] {
  const trimmed = html.trim();
  if (!trimmed) return [];
  return [{ html: trimmed }];
}

/** Extrai o HTML editável de um bloco salvo, para reabrir no editor. */
export function contentToEditor(blocks: ContentBlock[] | undefined): string {
  if (!blocks || blocks.length === 0) return "";

  const first = blocks[0];
  if (typeof first.html === "string") return first.html;

  // Compatibilidade com o formato antigo: reconstrói um HTML legível.
  return blocks
    .map((block) => {
      const parts: string[] = [];
      if (block.heading) parts.push(`<h2>${block.heading}</h2>`);
      for (const p of block.paragraphs ?? []) parts.push(`<p>${p}</p>`);
      if (block.list && block.list.length > 0) {
        parts.push(`<ul>\n${block.list.map((item) => ` <li>${item}</li>`).join("\n")}\n</ul>`);
      }
      if (block.callout) parts.push(`<blockquote>${block.callout}</blockquote>`);
      return parts.join("\n");
    })
    .filter(Boolean)
    .join("\n\n");
}

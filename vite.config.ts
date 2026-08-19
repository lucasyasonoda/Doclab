import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tsConfigPaths from "vite-tsconfig-paths";

const isGitHubPages = process.env.GITHUB_PAGES === "true";
const base = isGitHubPages ? "/Doc.lab/" : "/";

export default defineConfig({
  base,
  plugins: [
    tsConfigPaths(),
    tailwindcss(),
    tanstackStart({
      router: { basepath: base },
      server: { entry: "server" },
      pages: [
        { path: "/" },
        { path: "/sobre" },
        { path: "/servicos" },
        { path: "/cases" },
        { path: "/blog" },
        { path: "/blog/como-construir-autoridade-instagram-sem-ferir-cfm" },
        { path: "/contato" },
        { path: "/orcamento" },
        { path: "/privacidade" },
        { path: "/termos" },
      ],
      prerender: {
        enabled: true,
        crawlLinks: true,
        failOnError: true,
      },
    }),
    viteReact(),
  ],
});

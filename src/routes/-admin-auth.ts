import { createHash } from "node:crypto";
import { createServerFn } from "@tanstack/react-start";
import { getCookie, setCookie, deleteCookie } from "@tanstack/start-server-core/request-response";
import { makeSessionToken, verifySessionToken } from "./-admin-session.server";

// Lidas dentro do handler, não no topo do módulo: no Cloudflare os secrets
// chegam no objeto `env` do Worker e são copiados para process.env no entry
// (src/server.ts) durante a primeira requisição. Ler no topo do módulo pegaria
// o valor antes disso e ficaria vazio para sempre.
function adminConfig() {
  return {
    sessionSecret: process.env.SESSION_SECRET ?? "",
    username: process.env.ADMIN_USERNAME ?? "",
    passwordHash: process.env.ADMIN_PASSWORD_HASH ?? "",
  };
}

const COOKIE_NAME = "doclab_admin_session";
const COOKIE_MAX_AGE = 86400 * 7;

function sha256(str: string): string {
  return createHash("sha256").update(str).digest("hex");
}

function getCookieOptions(): Parameters<typeof setCookie>[2] {
  return {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: COOKIE_MAX_AGE,
    path: "/",
  };
}

export const adminLogin = createServerFn({
  method: "POST",
})
  .validator((raw) => {
    if (raw && typeof raw === "object" && "username" in raw && "password" in raw) {
      const value = raw as { username: unknown; password: unknown };
      if (typeof value.username === "string" && typeof value.password === "string") {
        return { username: value.username.trim(), password: value.password };
      }
    }
    throw new Error("Usuário e senha são obrigatórios");
  })
  .handler(async ({ data }) => {
    const { sessionSecret, username, passwordHash } = adminConfig();
    if (!sessionSecret || !username || !passwordHash) {
      throw new Error("Configuração de sessão não encontrada");
    }
    if (data.username !== username || sha256(data.password) !== passwordHash) {
      throw new Error("Usuário ou senha incorretos");
    }
    setCookie(COOKIE_NAME, makeSessionToken(sessionSecret), getCookieOptions());
    return { success: true };
  });

export const adminLogout = createServerFn({
  method: "POST",
}).handler(async () => {
  deleteCookie(COOKIE_NAME, { path: "/" } as Parameters<typeof deleteCookie>[1]);
  return { success: true };
});

export const getAdminSession = createServerFn({
  method: "GET",
}).handler(async () => {
  const token = getCookie(COOKIE_NAME);
  if (!token) return { admin: false };
  return verifySessionToken(token, adminConfig().sessionSecret) ?? { admin: false };
});

export const requireAdminSession = createServerFn({
  method: "GET",
}).handler(async () => {
  const session = await getAdminSession();
  if (!session?.admin) throw new Error("Não autorizado");
  return session;
});

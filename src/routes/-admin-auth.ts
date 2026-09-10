import { createHash } from "node:crypto";
import { createServerFn } from "@tanstack/react-start";
import { getCookie, setCookie, deleteCookie } from "@tanstack/start-server-core/request-response";
import { makeSessionToken, verifySessionToken } from "./-admin-session.server";

const SESSION_SECRET = process.env.SESSION_SECRET ?? "";
const ADMIN_PASSWORD_HASH = process.env.ADMIN_PASSWORD_HASH ?? "";
const COOKIE_NAME = "doclab_admin_session";
const COOKIE_MAX_AGE = 86400 * 7;

function sha256(str: string): string {
  return createHash("sha256").update(str).digest("hex");
}

function getCookieOptions() {
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
    if (raw && typeof raw === "object" && "password" in raw) {
      const p = (raw as { password: unknown }).password;
      if (typeof p === "string") return { password: p };
    }
    throw new Error("Senha é obrigatória");
  })
  .handler(async ({ data }) => {
    if (!SESSION_SECRET || !ADMIN_PASSWORD_HASH) {
      throw new Error("Configuração de sessão não encontrada");
    }
    if (sha256(data.password) !== ADMIN_PASSWORD_HASH) {
      throw new Error("Senha incorreta");
    }
    setCookie(COOKIE_NAME, makeSessionToken(SESSION_SECRET), getCookieOptions());
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
  return verifySessionToken(token, SESSION_SECRET) ?? { admin: false };
});

export const requireAdminSession = createServerFn({
  method: "GET",
}).handler(async () => {
  const session = await getAdminSession();
  if (!session?.admin) throw new Error("Não autorizado");
  return session;
});

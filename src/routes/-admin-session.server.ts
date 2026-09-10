import { createHmac, timingSafeEqual } from "node:crypto";

function hmacSign(payload: string, secret: string): string {
  return createHmac("sha256", secret).update(payload).digest("hex");
}

export function makeSessionToken(secret: string): string {
  const payload = `a=1;at=${Date.now()}`;
  return `${Buffer.from(payload).toString("base64")}.${hmacSign(payload, secret)}`;
}

export function verifySessionToken(
  token: string,
  secret: string,
): { admin: true; loginAt: number } | null {
  const dot = token.indexOf(".");
  if (dot < 1) return null;
  const payload = Buffer.from(token.slice(0, dot), "base64").toString("utf8");
  const sig = token.slice(dot + 1);
  const expected = Buffer.from(hmacSign(payload, secret));
  const received = Buffer.from(sig);
  if (received.length !== expected.length || !timingSafeEqual(received, expected)) {
    return null;
  }
  const m = payload.match(/^a=1;at=(\d+)$/);
  return m ? { admin: true, loginAt: Number(m[1]) } : null;
}

import { redis } from "@/lib/redis";

const LEAD_AUTH_HEADER = "x-mave-lead-key";

const getHeaderValue = (value) => {
  if (Array.isArray(value)) return value[0];
  return value || "";
};

export const getClientIp = (req) => {
  const forwarded = getHeaderValue(req.headers["x-forwarded-for"]);
  if (forwarded) return forwarded.split(",")[0].trim();
  const vercel = getHeaderValue(req.headers["x-vercel-forwarded-for"]);
  if (vercel) return vercel.split(",")[0].trim();
  const realIp = getHeaderValue(req.headers["x-real-ip"]);
  if (realIp) return realIp.trim();
  const socketIp = req?.socket?.remoteAddress;
  return socketIp || "unknown";
};

export const requireLeadAuth = (req) => {
  const secret = process.env.LEAD_FORM_KEY || "";
  if (!secret) {
    return {
      ok: false,
      status: 500,
      error: "Lead form authentication is not configured.",
    };
  }

  const headerKey = getHeaderValue(req.headers[LEAD_AUTH_HEADER]);
  const authHeader = getHeaderValue(req.headers.authorization);
  const bearer = authHeader.startsWith("Bearer ") ? authHeader.slice(7) : "";
  const token = headerKey || bearer;

  if (!token || token !== secret) {
    return { ok: false, status: 401, error: "Unauthorized." };
  }

  return { ok: true };
};

export const rateLimit = async (req, { key, limit, windowSec }) => {
  const redisUrl = process.env.UPSTASH_REDIS_REST_KV_REST_API_URL;
  const redisToken = process.env.UPSTASH_REDIS_REST_KV_REST_API_TOKEN;
  if (!redisUrl || !redisToken) {
    return {
      ok: false,
      status: 500,
      error: "Rate limiting is not configured.",
    };
  }

  const ip = getClientIp(req);
  const now = Date.now();
  const windowMs = windowSec * 1000;
  const bucket = Math.floor(now / windowMs);
  const redisKey = `rl:${key}:${ip}:${bucket}`;

  const count = await redis.incr(redisKey);
  if (count === 1) {
    await redis.expire(redisKey, windowSec);
  }

  const remaining = Math.max(0, limit - count);
  const reset = (bucket + 1) * windowMs;

  if (count > limit) {
    return {
      ok: false,
      status: 429,
      error: "Too many requests.",
      limit,
      remaining: 0,
      reset,
    };
  }

  return { ok: true, limit, remaining, reset };
};

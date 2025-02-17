import { auth } from "../../../lib/auth"; // 导入你的 Better Auth 实例
import type { APIRoute } from "astro";

export const ALL: APIRoute = async (ctx) => {
  return auth.handler(ctx.request);
};
import { c as createComponent, r as renderTemplate, a as renderComponent, b as renderScript, d as renderHead, e as renderSlot } from './astro/server_C_dECgBD.mjs';
import 'kleur/colors';
/* empty css                          */
import { $ as $$ClientRouter } from './ClientRouter_BzT0La-E.mjs';

const $$Admin = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<html lang="zh"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>注册 | 手语翻译</title>${renderComponent($$result, "ClientRouter", $$ClientRouter, {})}<link rel="icon" type="image/x-icon" href="/favicon.webp"><link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap" rel="stylesheet">${renderScript($$result, "/home/atp/Programs/big-create-front/camera-demo/src/layouts/Admin.astro?astro&type=script&index=0&lang.ts")}${renderHead()}</head> <body> ${renderSlot($$result, $$slots["default"])} <footer class="text-gray-500 bg-white dark:bg-gray-900 p-6 text-center"> <p>&copy; 2025 手语翻译. All rights reserved.</p> </footer> ${renderScript($$result, "/home/atp/Programs/big-create-front/camera-demo/src/layouts/Admin.astro?astro&type=script&index=1&lang.ts")} </body></html>`;
}, "/home/atp/Programs/big-create-front/camera-demo/src/layouts/Admin.astro", void 0);

export { $$Admin as $ };

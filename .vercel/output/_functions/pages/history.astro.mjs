import { c as createComponent, r as renderTemplate, m as maybeRenderHead, b as renderScript, a as renderComponent } from '../chunks/astro/server_C_dECgBD.mjs';
import 'kleur/colors';
import 'clsx';
import { $ as $$Layout } from '../chunks/Layout_DI8ojPhf.mjs';
export { renderers } from '../renderers.mjs';

const $$History$1 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="mt-6 p-4 bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-white rounded-lg shadow-lg"> <h2 class="text-2xl font-semibold mb-4">Chat History</h2> <ul id="chatHistory" class="space-y-4"> <!-- 历史记录会被动态填充在这里 --> </ul> </div> ${renderScript($$result, "/home/atp/Programs/big-create-front/camera-demo/src/components/History.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/atp/Programs/big-create-front/camera-demo/src/components/History.astro", void 0);

const $$History = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "History", $$History$1, {})} ` })}`;
}, "/home/atp/Programs/big-create-front/camera-demo/src/pages/history.astro", void 0);

const $$file = "/home/atp/Programs/big-create-front/camera-demo/src/pages/history.astro";
const $$url = "/history";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$History,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

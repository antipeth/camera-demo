import { c as createComponent, r as renderTemplate, m as maybeRenderHead, b as renderScript, a as renderComponent } from '../chunks/astro/server_C_dECgBD.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_DI8ojPhf.mjs';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$InputUrl = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="p-6"> <h1 class="text-2xl font-bold mb-4 text-gray-900 dark:text-white">设置后端 URL</h1> <form id="settingsForm" class="space-y-4"> <div> <label for="helper-text" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Backend Url</label> <input type="url" id="backendURL" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="https://your-backend.com"> </div> <button type="submit" class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">保存</button> </form> </div> ${renderScript($$result, "/home/atp/Programs/big-create-front/camera-demo/src/components/InputUrl.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/atp/Programs/big-create-front/camera-demo/src/components/InputUrl.astro", void 0);

const $$Settings = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "InputUrl", $$InputUrl, {})} ` })}`;
}, "/home/atp/Programs/big-create-front/camera-demo/src/pages/settings.astro", void 0);

const $$file = "/home/atp/Programs/big-create-front/camera-demo/src/pages/settings.astro";
const $$url = "/settings";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Settings,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

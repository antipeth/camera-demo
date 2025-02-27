import { c as createComponent, r as renderTemplate, m as maybeRenderHead, b as renderScript, a as renderComponent } from '../chunks/astro/server_C_dECgBD.mjs';
import 'kleur/colors';
import 'clsx';
import { $ as $$Layout } from '../chunks/Layout_DI8ojPhf.mjs';
export { renderers } from '../renderers.mjs';

const $$CameraStream = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`<!-- 初始黑色背景，当摄像头未开启时 -->${maybeRenderHead()}<div id="videoContainer" class="relative w-full h-72 bg-black rounded-lg overflow-hidden"> <video id="videoElement" class="w-full h-auto max-w-full object-cover rounded-lg" autoPlay playsInline style="display: none; border-radius: 8px;"></video> <!-- 摄像头开关按钮，定位在视频容器的右边 --> <button type="button" class="absolute top-3 right-3 px-6 py-3 text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" id="toggleButton"> <!-- 播放图标 --> <svg id="playIcon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-5 h-5"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3l14 9-14 9V3z"></path> </svg> <!-- 暂停图标 --> <svg id="pauseIcon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6" style="display: none;"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 19V5h4v14H6zm8 0V5h4v14h-4z"></path> </svg> </button> </div> ${renderScript($$result, "/home/atp/Programs/big-create-front/camera-demo/src/components/CameraStream.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/atp/Programs/big-create-front/camera-demo/src/components/CameraStream.astro", void 0);

const $$Display = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<!-- 用于显示后端返回文字内容的区域 -->${maybeRenderHead()}<div class="mt-4 p-2 dark:bg-gray-800 dark:text-white rounded-lg shadow-lg"> <textarea id="textArea" class="w-full h-55 p-4 text-black dark:bg-gray-700 dark:text-white rounded-md border-none resize-none" readonly>test</textarea> </div>`;
}, "/home/atp/Programs/big-create-front/camera-demo/src/components/Display.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "CameraStream", $$CameraStream, {})} ${renderComponent($$result2, "Display", $$Display, {})} ` })}`;
}, "/home/atp/Programs/big-create-front/camera-demo/src/pages/index.astro", void 0);

const $$file = "/home/atp/Programs/big-create-front/camera-demo/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

import { c as createComponent, f as createAstro, r as renderTemplate, m as maybeRenderHead, g as addAttribute, b as renderScript } from '../chunks/astro/server_C_dECgBD.mjs';
import 'kleur/colors';
import 'clsx';
import { a as auth } from '../chunks/auth_B-pecYrj.mjs';
import { u as user } from '../chunks/user_CXGS4aAw.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Test = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Test;
  const session = await auth.api.getSession({
    headers: Astro2.request.headers
  });
  return renderTemplate`${maybeRenderHead()}<button id="signup">signup</button> <button id="login">login</button> <button id="logout">logout</button> <button id="github">github</button> <p>${session?.user?.name || "Not logged in"}</p> <p>${session?.user?.email || "Not logged in"}</p> <img${addAttribute(session?.user?.image || user.src, "src")} class="h-8 me-3" alt="Logo"> ${renderScript($$result, "/home/atp/Programs/big-create-front/camera-demo/src/pages/test.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/atp/Programs/big-create-front/camera-demo/src/pages/test.astro", void 0);

const $$file = "/home/atp/Programs/big-create-front/camera-demo/src/pages/test.astro";
const $$url = "/test";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Test,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

import { c as createComponent, f as createAstro, r as renderTemplate, g as addAttribute, b as renderScript } from './astro/server_C_dECgBD.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                          */

const logo = new Proxy({"src":"/_astro/logo.dEo-XS46.png","width":512,"height":512,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/atp/Programs/big-create-front/camera-demo/src/assets/logo.png";
							}
							
							return target[name];
						}
					});

const $$Astro = createAstro();
const $$ClientRouter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ClientRouter;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${renderScript($$result, "/home/atp/Programs/big-create-front/camera-demo/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/atp/Programs/big-create-front/camera-demo/node_modules/astro/components/ClientRouter.astro", void 0);

export { $$ClientRouter as $, logo as l };

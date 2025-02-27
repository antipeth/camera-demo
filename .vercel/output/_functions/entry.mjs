import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_BdGeIvsy.mjs';
import { manifest } from './manifest_5yxig6ln.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/api/auth/_---all_.astro.mjs');
const _page2 = () => import('./pages/history.astro.mjs');
const _page3 = () => import('./pages/settings.astro.mjs');
const _page4 = () => import('./pages/signin.astro.mjs');
const _page5 = () => import('./pages/signup.astro.mjs');
const _page6 = () => import('./pages/test.astro.mjs');
const _page7 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/api/auth/[...all].ts", _page1],
    ["src/pages/history.astro", _page2],
    ["src/pages/settings.astro", _page3],
    ["src/pages/signin.astro", _page4],
    ["src/pages/signup.astro", _page5],
    ["src/pages/test.astro", _page6],
    ["src/pages/index.astro", _page7]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "7300e66d-5858-4a5f-823d-278371a72d1a",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };

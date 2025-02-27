import 'kleur/colors';
import { h as decodeKey } from './chunks/astro/server_C_dECgBD.mjs';
import 'clsx';
import 'cookie';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_jT5k10Ej.mjs';
import 'es-module-lexer';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///home/atp/Programs/big-create-front/camera-demo/","cacheDir":"file:///home/atp/Programs/big-create-front/camera-demo/node_modules/.astro/","outDir":"file:///home/atp/Programs/big-create-front/camera-demo/dist/","srcDir":"file:///home/atp/Programs/big-create-front/camera-demo/src/","publicDir":"file:///home/atp/Programs/big-create-front/camera-demo/public/","buildClientDir":"file:///home/atp/Programs/big-create-front/camera-demo/dist/client/","buildServerDir":"file:///home/atp/Programs/big-create-front/camera-demo/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/auth/[...all]","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/auth(?:\\/(.*?))?\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"auth","dynamic":false,"spread":false}],[{"content":"...all","dynamic":true,"spread":true}]],"params":["...all"],"component":"src/pages/api/auth/[...all].ts","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/signin.CGYBpLW3.css"}],"routeData":{"route":"/history","isIndex":false,"type":"page","pattern":"^\\/history\\/?$","segments":[[{"content":"history","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/history.astro","pathname":"/history","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/signin.CGYBpLW3.css"}],"routeData":{"route":"/settings","isIndex":false,"type":"page","pattern":"^\\/settings\\/?$","segments":[[{"content":"settings","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/settings.astro","pathname":"/settings","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/signin.CGYBpLW3.css"}],"routeData":{"route":"/signin","isIndex":false,"type":"page","pattern":"^\\/signin\\/?$","segments":[[{"content":"signin","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/signin.astro","pathname":"/signin","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/signin.CGYBpLW3.css"}],"routeData":{"route":"/signup","isIndex":false,"type":"page","pattern":"^\\/signup\\/?$","segments":[[{"content":"signup","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/signup.astro","pathname":"/signup","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/test","isIndex":false,"type":"page","pattern":"^\\/test\\/?$","segments":[[{"content":"test","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/test.astro","pathname":"/test","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/signin.CGYBpLW3.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/home/atp/Programs/big-create-front/camera-demo/src/pages/signin.astro",{"propagation":"none","containsHead":true}],["/home/atp/Programs/big-create-front/camera-demo/src/pages/signup.astro",{"propagation":"none","containsHead":true}],["/home/atp/Programs/big-create-front/camera-demo/src/pages/history.astro",{"propagation":"none","containsHead":true}],["/home/atp/Programs/big-create-front/camera-demo/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/home/atp/Programs/big-create-front/camera-demo/src/pages/settings.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-page:src/pages/api/auth/[...all]@_@ts":"pages/api/auth/_---all_.astro.mjs","\u0000@astro-page:src/pages/test@_@astro":"pages/test.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-page:src/pages/history@_@astro":"pages/history.astro.mjs","\u0000@astro-page:src/pages/settings@_@astro":"pages/settings.astro.mjs","\u0000@astro-page:src/pages/signin@_@astro":"pages/signin.astro.mjs","\u0000@astro-page:src/pages/signup@_@astro":"pages/signup.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","/home/atp/Programs/big-create-front/camera-demo/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_DW32bbWP.mjs","\u0000@astrojs-manifest":"manifest_5yxig6ln.mjs","@astrojs/solid-js/client.js":"_astro/client.CDanl6t7.js","/home/atp/Programs/big-create-front/camera-demo/src/pages/test.astro?astro&type=script&index=0&lang.ts":"_astro/test.astro_astro_type_script_index_0_lang.Eg6GrJyc.js","/home/atp/Programs/big-create-front/camera-demo/src/components/History.astro?astro&type=script&index=0&lang.ts":"_astro/History.astro_astro_type_script_index_0_lang.B-Cqqbmf.js","/home/atp/Programs/big-create-front/camera-demo/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts":"_astro/Layout.astro_astro_type_script_index_0_lang.DcaVsG09.js","/home/atp/Programs/big-create-front/camera-demo/src/layouts/Layout.astro?astro&type=script&index=1&lang.ts":"_astro/Layout.astro_astro_type_script_index_1_lang.CAk28AKo.js","/home/atp/Programs/big-create-front/camera-demo/src/components/InputUrl.astro?astro&type=script&index=0&lang.ts":"_astro/InputUrl.astro_astro_type_script_index_0_lang.CrfXjVNg.js","/home/atp/Programs/big-create-front/camera-demo/src/layouts/Admin.astro?astro&type=script&index=0&lang.ts":"_astro/Admin.astro_astro_type_script_index_0_lang.Bqm_kysw.js","/home/atp/Programs/big-create-front/camera-demo/src/layouts/Admin.astro?astro&type=script&index=1&lang.ts":"_astro/Admin.astro_astro_type_script_index_1_lang.CAk28AKo.js","/home/atp/Programs/big-create-front/camera-demo/src/components/Login.astro?astro&type=script&index=0&lang.ts":"_astro/Login.astro_astro_type_script_index_0_lang.BwcNkByL.js","/home/atp/Programs/big-create-front/camera-demo/src/components/CameraStream.astro?astro&type=script&index=0&lang.ts":"_astro/CameraStream.astro_astro_type_script_index_0_lang.BUapWFDG.js","/home/atp/Programs/big-create-front/camera-demo/src/components/Register.astro?astro&type=script&index=0&lang.ts":"_astro/Register.astro_astro_type_script_index_0_lang.CoMAp-ZF.js","/home/atp/Programs/big-create-front/camera-demo/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts":"_astro/ClientRouter.astro_astro_type_script_index_0_lang.BScVxmeO.js","/home/atp/Programs/big-create-front/camera-demo/src/lib/auth-client.ts":"_astro/auth-client.BsqBGTA2.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["/home/atp/Programs/big-create-front/camera-demo/src/components/History.astro?astro&type=script&index=0&lang.ts","const c=indexedDB.open(\"chat-web-store\",1);let e;c.onupgradeneeded=t=>{e=t.target.result,e.objectStoreNames.contains(\"chats\")||e.createObjectStore(\"chats\",{keyPath:\"timestamp\"}).createIndex(\"timestamp\",\"timestamp\",{unique:!0})};c.onsuccess=t=>{e=t.target.result,d()};c.onerror=t=>{console.error(\"IndexedDB Error: \",t)};function d(){const r=e.transaction(\"chats\",\"readonly\").objectStore(\"chats\").openCursor();r.onsuccess=s=>{const n=s.target.result;if(n){const i=n.value,a=document.createElement(\"li\");a.classList.add(\"p-2\",\"bg-gray-200\",\"dark:bg-gray-600\",\"rounded-lg\"),a.innerHTML=`<strong>${new Date(i.timestamp).toLocaleString()}:</strong> ${i.text}`,document.getElementById(\"chatHistory\").appendChild(a),n.continue()}}}function u(t){const r={timestamp:new Date().toISOString(),text:t},s=e.transaction(\"chats\",\"readwrite\");s.objectStore(\"chats\").put(r),s.oncomplete=()=>{console.log(\"Chat added!\"),d()}}window.addEventListener(\"newChatMessage\",t=>{const o=t.detail;u(o)});"],["/home/atp/Programs/big-create-front/camera-demo/src/layouts/Layout.astro?astro&type=script&index=1&lang.ts","localStorage.getItem(\"color-theme\")===\"dark\"||!(\"color-theme\"in localStorage)&&window.matchMedia(\"(prefers-color-scheme: dark)\").matches?document.documentElement.classList.add(\"dark\"):document.documentElement.classList.remove(\"dark\");"],["/home/atp/Programs/big-create-front/camera-demo/src/components/InputUrl.astro?astro&type=script&index=0&lang.ts","const t=localStorage.getItem(\"backendURL\");t&&(document.getElementById(\"backendURL\").value=t);document.getElementById(\"settingsForm\").addEventListener(\"submit\",n=>{n.preventDefault();const e=document.getElementById(\"backendURL\").value.trim();e?(localStorage.setItem(\"backendURL\",e),alert(\"设置已保存！\")):alert(\"请输入有效的 URL\")});"],["/home/atp/Programs/big-create-front/camera-demo/src/layouts/Admin.astro?astro&type=script&index=0&lang.ts","var e=document.getElementById(\"theme-toggle-dark-icon\"),t=document.getElementById(\"theme-toggle-light-icon\");localStorage.getItem(\"color-theme\")===\"dark\"||!(\"color-theme\"in localStorage)&&window.matchMedia(\"(prefers-color-scheme: dark)\").matches?t.classList.remove(\"hidden\"):e.classList.remove(\"hidden\");var o=document.getElementById(\"theme-toggle\");o.addEventListener(\"click\",function(){e.classList.toggle(\"hidden\"),t.classList.toggle(\"hidden\"),localStorage.getItem(\"color-theme\")?localStorage.getItem(\"color-theme\")===\"light\"?(document.documentElement.classList.add(\"dark\"),localStorage.setItem(\"color-theme\",\"dark\")):(document.documentElement.classList.remove(\"dark\"),localStorage.setItem(\"color-theme\",\"light\")):document.documentElement.classList.contains(\"dark\")?(document.documentElement.classList.remove(\"dark\"),localStorage.setItem(\"color-theme\",\"light\")):(document.documentElement.classList.add(\"dark\"),localStorage.setItem(\"color-theme\",\"dark\"))});"],["/home/atp/Programs/big-create-front/camera-demo/src/layouts/Admin.astro?astro&type=script&index=1&lang.ts","localStorage.getItem(\"color-theme\")===\"dark\"||!(\"color-theme\"in localStorage)&&window.matchMedia(\"(prefers-color-scheme: dark)\").matches?document.documentElement.classList.add(\"dark\"):document.documentElement.classList.remove(\"dark\");"],["/home/atp/Programs/big-create-front/camera-demo/src/components/CameraStream.astro?astro&type=script&index=0&lang.ts","const m=localStorage.getItem(\"backendURL\")||\"https://backend.com\",f=`${m}/api/video`,g=`${m}/api/text`;let t=null,a=null,r=!1,c=!1;const l=document.getElementById(\"videoElement\"),v=document.getElementById(\"toggleButton\"),y=document.getElementById(\"playIcon\"),u=document.getElementById(\"pauseIcon\"),d=document.getElementById(\"textArea\"),h=async()=>{try{t=await navigator.mediaDevices.getUserMedia({video:!0}),l.srcObject=t,l.style.display=\"block\",y.style.display=\"none\",u.style.display=\"block\",a=new MediaRecorder(t,{mimeType:\"video/webm\"}),a.ondataavailable=async e=>{if(e.data.size>0){const n=new FormData;n.append(\"video\",e.data),await fetch(f,{method:\"POST\",body:n})}},a.start(1e3),r=!0}catch(e){console.error(\"无法访问摄像头:\",e)}},E=()=>{a&&a.state!==\"inactive\"&&a.stop(),t&&(t.getTracks().forEach(e=>e.stop()),t=null),l.style.display=\"none\",y.style.display=\"block\",u.style.display=\"none\",r=!1,c=!1,I()};async function I(){if(c)return;let e=!1;const n=setTimeout(()=>{e=!0,d.value=\"Error: Unable to fetch text within 20 seconds.\"},2e4),i=setInterval(async()=>{try{const o=await fetch(g);if(o.ok){const s=await o.text();console.log(\"Fetched text:\",s),d.value=s,c=!0,clearTimeout(n),clearInterval(i);const p=new CustomEvent(\"newChatMessage\",{detail:s});window.dispatchEvent(p)}}catch(o){console.error(\"Fetch error:\",o)}e&&clearInterval(i)},4e3)}v.addEventListener(\"click\",()=>{r?E():h()});"]],"assets":["/_astro/user.SmeuEmFM.jpg","/_astro/logo.dEo-XS46.png","/_astro/signin.CGYBpLW3.css","/favicon.webp","/_astro/ClientRouter.astro_astro_type_script_index_0_lang.BScVxmeO.js","/_astro/Layout.astro_astro_type_script_index_0_lang.DcaVsG09.js","/_astro/Login.astro_astro_type_script_index_0_lang.BwcNkByL.js","/_astro/Register.astro_astro_type_script_index_0_lang.CoMAp-ZF.js","/_astro/auth-client.BsqBGTA2.js","/_astro/client.CDanl6t7.js","/_astro/preload-helper.CLcXU_4U.js","/_astro/store.B49nm3ky.js","/_astro/test.astro_astro_type_script_index_0_lang.Eg6GrJyc.js"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"xiE+uFGVVu9sWNPmZuxsabuaJcr3GPWNAFFQHBFpPVY="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };

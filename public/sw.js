if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let n=Promise.resolve();return s[e]||(n=new Promise((async n=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=n}else importScripts(e),n()}))),n.then((()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]}))},n=(n,s)=>{Promise.all(n.map(e)).then((e=>s(1===e.length?e[0]:e)))},s={require:Promise.resolve(n)};self.define=(n,r,i)=>{s[n]||(s[n]=Promise.resolve().then((()=>{let s={};const c={uri:location.origin+n.slice(1)};return Promise.all(r.map((n=>{switch(n){case"exports":return s;case"module":return c;default:return e(n)}}))).then((e=>{const n=i(...e);return s.default||(s.default=n),s}))})))}}define("./sw.js",["./workbox-1ca495a9"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/CDFN.jfif",revision:"ed722fa03e382fb24c08a7190c6952ce"},{url:"/Lighthouse.PNG",revision:"176af6643f052f78a9c39e916d827289"},{url:"/PISB.jfif",revision:"5fac86fb90c8cb922d48e0266de1dd53"},{url:"/Picto.jfif",revision:"f584c0612a91af17fb31c88ba4fdd63c"},{url:"/_next/server/middleware-manifest.json",revision:"E37qtHc3JnN-7_3yZy8rj"},{url:"/_next/static/E37qtHc3JnN-7_3yZy8rj/_buildManifest.js",revision:"E37qtHc3JnN-7_3yZy8rj"},{url:"/_next/static/E37qtHc3JnN-7_3yZy8rj/_middlewareManifest.js",revision:"E37qtHc3JnN-7_3yZy8rj"},{url:"/_next/static/E37qtHc3JnN-7_3yZy8rj/_ssgManifest.js",revision:"E37qtHc3JnN-7_3yZy8rj"},{url:"/_next/static/chunks/0e226fb0-8229b42c6d34d184.js",revision:"E37qtHc3JnN-7_3yZy8rj"},{url:"/_next/static/chunks/85-5ec1837e6e5b9135.js",revision:"E37qtHc3JnN-7_3yZy8rj"},{url:"/_next/static/chunks/framework-91d7f78b5b4003c8.js",revision:"E37qtHc3JnN-7_3yZy8rj"},{url:"/_next/static/chunks/main-99d2696b69bfa7df.js",revision:"E37qtHc3JnN-7_3yZy8rj"},{url:"/_next/static/chunks/pages/_app-eaaaebf39a93d4e4.js",revision:"E37qtHc3JnN-7_3yZy8rj"},{url:"/_next/static/chunks/pages/_error-2280fa386d040b66.js",revision:"E37qtHc3JnN-7_3yZy8rj"},{url:"/_next/static/chunks/pages/index-55dc632995e04c99.js",revision:"E37qtHc3JnN-7_3yZy8rj"},{url:"/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"E37qtHc3JnN-7_3yZy8rj"},{url:"/_next/static/chunks/webpack-b927671265afed5e.js",revision:"E37qtHc3JnN-7_3yZy8rj"},{url:"/about.svg",revision:"6a3966fb7a834f454712c4596dd67d99"},{url:"/about.txt",revision:"16e8d178f8abe60047aeff8b7a829ec9"},{url:"/apple-touch-icon.png",revision:"cb9ee121e34a6fbc0fbba97eb8dc6040"},{url:"/experience.svg",revision:"e018df5592ccda0cb1bed79b4382f916"},{url:"/favicon-16x16.png",revision:"5a37ae407d3b45de2c7be06205af0b72"},{url:"/favicon-32x32.png",revision:"c9dec77c01dbd6f46151a41ccf810ff4"},{url:"/favicon.ico",revision:"98e8a7e9040fa5cd961690a1a7cf9747"},{url:"/icon-192x192.png",revision:"a61cc3b350b070307583a80e4060a61b"},{url:"/icon-256x256.png",revision:"d5c3352568aab57ad56f4d0a84963e58"},{url:"/icon-384x384.png",revision:"8b5a852c0cfc5173397a44aef156eb3a"},{url:"/icon-512x512.png",revision:"5d0d0f617bfdd06c147302bde4b22811"},{url:"/landing.svg",revision:"6edb1a99e74e31a7a3f3f0eeb6250d64"},{url:"/manifest.webmanifest",revision:"714026f725c76b0481467f5c065639f1"},{url:"/profile.png",revision:"13597458ae95d90c4e68057a6cfed3be"},{url:"/projects.svg",revision:"1d6f5005e24ee7774f8a6280d75d661d"},{url:"/skill.svg",revision:"44f72ed9ce281d77f1459e47660e6c58"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));

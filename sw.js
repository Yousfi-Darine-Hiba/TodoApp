if(!self.define){let e,s={};const r=(r,n)=>(r=new URL(r+".js",n).href,s[r]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=s,document.head.appendChild(e)}else e=r,importScripts(r),s()})).then((()=>{let e=s[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(n,i)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(s[o])return;let f={};const c=e=>r(e,o),d={module:{uri:o},exports:f,require:c};s[o]=Promise.all(n.map((e=>d[e]||c(e)))).then((e=>(i(...e),f)))}}define(["./workbox-9517df1b"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-ff0e2ed4.js",revision:null},{url:"index.html",revision:"9370aa1d620f5f44322c470238fa6b2a"},{url:"logo.svg",revision:"4386aa054e214856cf8e8bf3e9b2e40f"},{url:"logo192.png",revision:"fcbca72a681f41d6c3f629b51d9074cd"},{url:"logo256.png",revision:"f66c22751907e9d4ae31a97b0bb5a8f6"},{url:"logo384.png",revision:"b94386c4f37166a3274ebde4159f1c6d"},{url:"logo512.png",revision:"b3ae483c08f231e9dddaeb212934ae6e"},{url:"manifest.webmanifest",revision:"13162842662fe4e9c7ba0dafcf61d41c"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"screenshots/1.png",revision:"cad4629f9e35c01d26750b8b4e4ce741"},{url:"screenshots/2.png",revision:"37f1a66f8be6fb2369bb7ee2158a26d8"},{url:"screenshots/3.png",revision:"f6c5983a023b31a6bdc8760defe4b20f"},{url:"screenshots/4.png",revision:"2833c821443df6e68027593daa1ff4a4"},{url:"screenshots/5.png",revision:"5a0bd7068b2ec705ad88bd65ead6c6ff"},{url:"screenshots/performance.png",revision:"cd333b203557410a62f29f0d984de069"},{url:"vite.svg",revision:"8e3a10e157f75ada21ab742c022d5430"},{url:"logo192.png",revision:"fcbca72a681f41d6c3f629b51d9074cd"},{url:"logo.svg",revision:"4386aa054e214856cf8e8bf3e9b2e40f"},{url:"logo256.png",revision:"f66c22751907e9d4ae31a97b0bb5a8f6"},{url:"logo384.png",revision:"b94386c4f37166a3274ebde4159f1c6d"},{url:"logo512.png",revision:"b3ae483c08f231e9dddaeb212934ae6e"},{url:"vite.svg",revision:"8e3a10e157f75ada21ab742c022d5430"},{url:"screenshots/1.png",revision:"cad4629f9e35c01d26750b8b4e4ce741"},{url:"screenshots/2.png",revision:"37f1a66f8be6fb2369bb7ee2158a26d8"},{url:"screenshots/3.png",revision:"f6c5983a023b31a6bdc8760defe4b20f"},{url:"screenshots/4.png",revision:"2833c821443df6e68027593daa1ff4a4"},{url:"screenshots/5.png",revision:"5a0bd7068b2ec705ad88bd65ead6c6ff"},{url:"screenshots/performance.png",revision:"cd333b203557410a62f29f0d984de069"},{url:"manifest.webmanifest",revision:"13162842662fe4e9c7ba0dafcf61d41c"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));

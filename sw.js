if(!self.define){let e,s={};const r=(r,n)=>(r=new URL(r+".js",n).href,s[r]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=s,document.head.appendChild(e)}else e=r,importScripts(r),s()})).then((()=>{let e=s[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(n,c)=>{const f=e||("document"in self?document.currentScript.src:"")||location.href;if(s[f])return;let i={};const o=e=>r(e,f),d={module:{uri:f},exports:i,require:o};s[f]=Promise.all(n.map((e=>d[e]||o(e)))).then((e=>(c(...e),i)))}}define(["./workbox-9517df1b"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"add.png",revision:"4536fdf9ad09e9fb14c585186b21d3df"},{url:"assets/index-41934b9d.js",revision:null},{url:"assets/index-4c4b02f8.css",revision:null},{url:"assets/TaskNotFound-a3ec2e3a.png",revision:null},{url:"categories.png",revision:"3d804cffb15225d1b43fd4721be7fb64"},{url:"import-export.png",revision:"75d9ef93ac84d19cf5c3a22489ead8de"},{url:"index.html",revision:"d88ead9482b3898c77cfff3ebc4715b5"},{url:"logo.svg",revision:"4386aa054e214856cf8e8bf3e9b2e40f"},{url:"logo192.png",revision:"fcbca72a681f41d6c3f629b51d9074cd"},{url:"logo256.png",revision:"f66c22751907e9d4ae31a97b0bb5a8f6"},{url:"logo384.png",revision:"b94386c4f37166a3274ebde4159f1c6d"},{url:"logo512.png",revision:"b3ae483c08f231e9dddaeb212934ae6e"},{url:"manifest.webmanifest",revision:"75662895350445e3a99a4317b4cb1ed8"},{url:"profile.png",revision:"d42cd1fee714e534228494b426782a10"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"screenshots/1.png",revision:"cad4629f9e35c01d26750b8b4e4ce741"},{url:"screenshots/2.png",revision:"37f1a66f8be6fb2369bb7ee2158a26d8"},{url:"screenshots/3.png",revision:"f6c5983a023b31a6bdc8760defe4b20f"},{url:"screenshots/4.png",revision:"2833c821443df6e68027593daa1ff4a4"},{url:"screenshots/5.png",revision:"5a0bd7068b2ec705ad88bd65ead6c6ff"},{url:"screenshots/6.png",revision:"33830a1d1f7c3ddee2079aba31426bc7"},{url:"screenshots/iPhone Mockup.png",revision:"0cf2b54cafef5de2611e36dce49b8b70"},{url:"screenshots/performance.png",revision:"cd333b203557410a62f29f0d984de069"},{url:"screenshots/ss1.png",revision:"1a13cf6359aa147dfcf70a6ce969198f"},{url:"screenshots/ss2.png",revision:"9919ed821dcbc9cf3d1f3d3ff94fff2f"},{url:"screenshots/ss3.png",revision:"58cbfb489baa0b3fa042f787ff90640f"},{url:"screenshots/ss4.png",revision:"696591f0c868f011ba12529c348523b2"},{url:"screenshots/ss5.png",revision:"c90633a9b655a77dd7a7bdf2c847acb2"},{url:"screenshots/ss6.png",revision:"c2028d9f43737c98471529bdc909faa7"},{url:"screenshots/sspc1.png",revision:"9662534aed457be629b7223a95fe8cb3"},{url:"logo192.png",revision:"fcbca72a681f41d6c3f629b51d9074cd"},{url:"add.png",revision:"4536fdf9ad09e9fb14c585186b21d3df"},{url:"categories.png",revision:"3d804cffb15225d1b43fd4721be7fb64"},{url:"import-export.png",revision:"75d9ef93ac84d19cf5c3a22489ead8de"},{url:"logo.svg",revision:"4386aa054e214856cf8e8bf3e9b2e40f"},{url:"logo256.png",revision:"f66c22751907e9d4ae31a97b0bb5a8f6"},{url:"logo384.png",revision:"b94386c4f37166a3274ebde4159f1c6d"},{url:"logo512.png",revision:"b3ae483c08f231e9dddaeb212934ae6e"},{url:"profile.png",revision:"d42cd1fee714e534228494b426782a10"},{url:"screenshots/1.png",revision:"cad4629f9e35c01d26750b8b4e4ce741"},{url:"screenshots/2.png",revision:"37f1a66f8be6fb2369bb7ee2158a26d8"},{url:"screenshots/3.png",revision:"f6c5983a023b31a6bdc8760defe4b20f"},{url:"screenshots/4.png",revision:"2833c821443df6e68027593daa1ff4a4"},{url:"screenshots/5.png",revision:"5a0bd7068b2ec705ad88bd65ead6c6ff"},{url:"screenshots/6.png",revision:"33830a1d1f7c3ddee2079aba31426bc7"},{url:"screenshots/iPhone Mockup.png",revision:"0cf2b54cafef5de2611e36dce49b8b70"},{url:"screenshots/performance.png",revision:"cd333b203557410a62f29f0d984de069"},{url:"screenshots/ss1.png",revision:"1a13cf6359aa147dfcf70a6ce969198f"},{url:"screenshots/ss2.png",revision:"9919ed821dcbc9cf3d1f3d3ff94fff2f"},{url:"screenshots/ss3.png",revision:"58cbfb489baa0b3fa042f787ff90640f"},{url:"screenshots/ss4.png",revision:"696591f0c868f011ba12529c348523b2"},{url:"screenshots/ss5.png",revision:"c90633a9b655a77dd7a7bdf2c847acb2"},{url:"screenshots/ss6.png",revision:"c2028d9f43737c98471529bdc909faa7"},{url:"screenshots/sspc1.png",revision:"9662534aed457be629b7223a95fe8cb3"},{url:"manifest.webmanifest",revision:"75662895350445e3a99a4317b4cb1ed8"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));

(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[177],{347:()=>{},954:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,8173,23)),Promise.resolve().then(r.t.bind(r,3704,23)),Promise.resolve().then(r.t.bind(r,4147,23)),Promise.resolve().then(r.t.bind(r,8489,23)),Promise.resolve().then(r.bind(r,814)),Promise.resolve().then(r.bind(r,1196)),Promise.resolve().then(r.t.bind(r,347,23))},1196:(e,t,r)=>{"use strict";r.d(t,{default:()=>u});var n=r(5155),l=r(2115),a=r(8173),o=r.n(a),i=r(6658),s=r(2888);let c=[{name:"About me",href:"/about"},{name:"Services",href:"/services"},{name:"Portfolio",href:"/portfolio"},{name:"Contact",href:"/contact"}];function u(){let[e,t]=(0,l.useState)(!1),[r,a]=(0,l.useState)(!1),u="/"===(0,i.usePathname)();return(0,l.useEffect)(()=>{let e=()=>{t(window.scrollY>50)};return window.addEventListener("scroll",e),()=>{window.removeEventListener("scroll",e)}},[]),(0,n.jsxs)("header",{className:"fixed top-4 left-1/2 transform -translate-x-1/2 w-[90%] lg:w-[80%] z-50 \n        transition-all duration-300 rounded-2xl ".concat(u?e?"bg-black shadow-2xl":"bg-transparent":e?"bg-white shadow-2xl":"bg-transparent"),children:[(0,n.jsxs)("div",{className:"max-w-7xl mx-auto px-6 py-4 flex items-center justify-between",children:[(0,n.jsx)("h1",{className:"".concat(u?"text-white":"text-black"," font-bold text-2xl"),children:(0,n.jsx)(o(),{href:"/",children:"Abel Garcia"})}),(0,n.jsx)("nav",{className:"hidden lg:flex space-x-6",children:c.map(e=>(0,n.jsx)(o(),{href:e.href,className:"".concat(u?"text-white":"text-black"," hover:text-gray-300"),children:e.name},e.href))}),(0,n.jsxs)("div",{className:"hidden lg:flex space-x-4",children:[(0,n.jsx)(o(),{href:"/services",className:"".concat(u?"btn-h-w":"btn-normal-pp btn-blue-400"," flex flex-col items-center"),children:"Get Started"}),(0,n.jsx)(o(),{href:"/contact",className:"".concat(u?"btn-h-w2":"btn-normal-pp btn-blue-400-reverse"," flex flex-col items-center"),children:"Contact Me"})]}),(0,n.jsx)("button",{onClick:()=>a(!r),className:"lg:hidden text-2xl ".concat(u?"text-white":"text-black"),children:r?(0,n.jsx)(s.yGN,{}):(0,n.jsx)(s.ND1,{})})]}),(0,n.jsxs)("div",{className:"".concat(r?"block":"hidden"," lg:hidden absolute top-full left-0 w-full shadow-lg rounded-2xl py-4 flex flex-col items-center space-y-4 ").concat(u?"bg-black":"bg-white"),children:[(0,n.jsx)("nav",{className:"flex flex-col space-y-4 text-center",children:c.map(e=>(0,n.jsx)(o(),{href:e.href,onClick:()=>a(!1),className:"".concat(u?"text-white":"text-black"," hover:text-gray-300"),children:e.name},e.href))}),(0,n.jsxs)("div",{className:"flex flex-col items-center mt-4 space-y-2 w-full",children:[(0,n.jsx)(o(),{href:"/services",className:"".concat(u?"btn-h-w":"btn-normal-pp btn-blue-400"," w-2/4 flex flex-col items-center"),onClick:()=>a(!1),children:"Get Started"}),(0,n.jsx)(o(),{href:"/contact",className:"".concat(u?"btn-h-w2":"btn-normal-pp btn-blue-400-reverse"," w-2/4 flex flex-col items-center"),onClick:()=>a(!1),children:"Contact Me"})]})]})]})}},2815:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"setAttributesFromProps",{enumerable:!0,get:function(){return a}});let r={acceptCharset:"accept-charset",className:"class",htmlFor:"for",httpEquiv:"http-equiv",noModule:"noModule"},n=["onLoad","onReady","dangerouslySetInnerHTML","children","onError","strategy","stylesheets"];function l(e){return["async","defer","noModule"].includes(e)}function a(e,t){for(let[a,o]of Object.entries(t)){if(!t.hasOwnProperty(a)||n.includes(a)||void 0===o)continue;let i=r[a]||a.toLowerCase();"SCRIPT"===e.tagName&&l(i)?e[i]=!!o:e.setAttribute(i,String(o)),(!1===o||"SCRIPT"===e.tagName&&l(i)&&(!o||"false"===o))&&(e.setAttribute(i,""),e.removeAttribute(i))}}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3435:(e,t,r)=>{"use strict";r.d(t,{k5:()=>u});var n=r(2115),l={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},a=n.createContext&&n.createContext(l),o=["attr","size","title"];function i(){return(i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach(function(t){var n,l,a;n=e,l=t,a=r[t],(l=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=typeof n)return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(l))in n?Object.defineProperty(n,l,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[l]=a}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function u(e){return t=>n.createElement(f,i({attr:c({},e.attr)},t),function e(t){return t&&t.map((t,r)=>n.createElement(t.tag,c({key:r},t.attr),e(t.child)))}(e.child))}function f(e){var t=t=>{var r,{attr:l,size:a,title:s}=e,u=function(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}(e,o),f=a||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),n.createElement("svg",i({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,l,u,{className:r,style:c(c({color:e.color||t.color},t.style),e.style),height:f,width:f,xmlns:"http://www.w3.org/2000/svg"}),s&&n.createElement("title",null,s),e.children)};return void 0!==a?n.createElement(a.Consumer,null,e=>t(e)):t(l)}},3704:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),!function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return v},handleClientScriptLoad:function(){return m},initScriptLoader:function(){return h}});let n=r(306),l=r(9955),a=r(5155),o=n._(r(7650)),i=l._(r(2115)),s=r(1147),c=r(2815),u=r(8571),f=new Map,d=new Set,b=e=>{if(o.default.preinit){e.forEach(e=>{o.default.preinit(e,{as:"style"})});return}if("undefined"!=typeof window){let t=document.head;e.forEach(e=>{let r=document.createElement("link");r.type="text/css",r.rel="stylesheet",r.href=e,t.appendChild(r)})}},p=e=>{let{src:t,id:r,onLoad:n=()=>{},onReady:l=null,dangerouslySetInnerHTML:a,children:o="",strategy:i="afterInteractive",onError:s,stylesheets:u}=e,p=r||t;if(p&&d.has(p))return;if(f.has(t)){d.add(p),f.get(t).then(n,s);return}let m=()=>{l&&l(),d.add(p)},h=document.createElement("script"),y=new Promise((e,t)=>{h.addEventListener("load",function(t){e(),n&&n.call(this,t),m()}),h.addEventListener("error",function(e){t(e)})}).catch(function(e){s&&s(e)});a?(h.innerHTML=a.__html||"",m()):o?(h.textContent="string"==typeof o?o:Array.isArray(o)?o.join(""):"",m()):t&&(h.src=t,f.set(t,y)),(0,c.setAttributesFromProps)(h,e),"worker"===i&&h.setAttribute("type","text/partytown"),h.setAttribute("data-nscript",i),u&&b(u),document.body.appendChild(h)};function m(e){let{strategy:t="afterInteractive"}=e;"lazyOnload"===t?window.addEventListener("load",()=>{(0,u.requestIdleCallback)(()=>p(e))}):p(e)}function h(e){e.forEach(m),[...document.querySelectorAll('[data-nscript="beforeInteractive"]'),...document.querySelectorAll('[data-nscript="beforePageRender"]')].forEach(e=>{let t=e.id||e.getAttribute("src");d.add(t)})}function y(e){let{id:t,src:r="",onLoad:n=()=>{},onReady:l=null,strategy:c="afterInteractive",onError:f,stylesheets:b,...m}=e,{updateScripts:h,scripts:y,getIsSsr:v,appDir:x,nonce:g}=(0,i.useContext)(s.HeadManagerContext),w=(0,i.useRef)(!1);(0,i.useEffect)(()=>{let e=t||r;w.current||(l&&e&&d.has(e)&&l(),w.current=!0)},[l,t,r]);let j=(0,i.useRef)(!1);if((0,i.useEffect)(()=>{if(!j.current){if("afterInteractive"===c)p(e);else if("lazyOnload"===c)"complete"===document.readyState?(0,u.requestIdleCallback)(()=>p(e)):window.addEventListener("load",()=>{(0,u.requestIdleCallback)(()=>p(e))});j.current=!0}},[e,c]),("beforeInteractive"===c||"worker"===c)&&(h?(y[c]=(y[c]||[]).concat([{id:t,src:r,onLoad:n,onReady:l,onError:f,...m}]),h(y)):v&&v()?d.add(t||r):v&&!v()&&p(e)),x){if(b&&b.forEach(e=>{o.default.preinit(e,{as:"style"})}),"beforeInteractive"===c)return r?(o.default.preload(r,m.integrity?{as:"script",integrity:m.integrity,nonce:g,crossOrigin:m.crossOrigin}:{as:"script",nonce:g,crossOrigin:m.crossOrigin}),(0,a.jsx)("script",{nonce:g,dangerouslySetInnerHTML:{__html:"(self.__next_s=self.__next_s||[]).push("+JSON.stringify([r,{...m,id:t}])+")"}})):(m.dangerouslySetInnerHTML&&(m.children=m.dangerouslySetInnerHTML.__html,delete m.dangerouslySetInnerHTML),(0,a.jsx)("script",{nonce:g,dangerouslySetInnerHTML:{__html:"(self.__next_s=self.__next_s||[]).push("+JSON.stringify([0,{...m,id:t}])+")"}}));"afterInteractive"===c&&r&&o.default.preload(r,m.integrity?{as:"script",integrity:m.integrity,nonce:g,crossOrigin:m.crossOrigin}:{as:"script",nonce:g,crossOrigin:m.crossOrigin})}return null}Object.defineProperty(y,"__nextScript",{value:!0});let v=y;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4147:e=>{e.exports={style:{fontFamily:"'Geist', 'Geist Fallback'",fontStyle:"normal"},className:"__className_4d318d",variable:"__variable_4d318d"}},8489:e=>{e.exports={style:{fontFamily:"'Geist Mono', 'Geist Mono Fallback'",fontStyle:"normal"},className:"__className_ea5f4b",variable:"__variable_ea5f4b"}},8571:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),!function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{cancelIdleCallback:function(){return n},requestIdleCallback:function(){return r}});let r="undefined"!=typeof self&&self.requestIdleCallback&&self.requestIdleCallback.bind(window)||function(e){let t=Date.now();return self.setTimeout(function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-t))}})},1)},n="undefined"!=typeof self&&self.cancelIdleCallback&&self.cancelIdleCallback.bind(window)||function(e){return clearTimeout(e)};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)}},e=>{var t=t=>e(e.s=t);e.O(0,[896,844,814,441,587,358],()=>t(954)),_N_E=e.O()}]);
(()=>{var e={5033:(e,t,n)=>{var o,r;void 0===(r="function"==typeof(o=function(){"use strict";var e,t,o,r,i,u,a,l,c="undefined"!=typeof window?window:null!=typeof n.g?n.g:this||{},s=c.cancelRequestAnimationFrame&&c.requestAnimationFrame||setTimeout,d=c.cancelRequestAnimationFrame||clearTimeout,f=[],m=0,b=!1,p=7,w=35,v=125,y=0,g=0,h=0,k={get didTimeout(){return!1},timeRemaining:function(){var e=p-(Date.now()-g);return e<0?0:e}},T=(i=function(){p=22,v=66,w=0},l=function(){var e=Date.now()-a;e<99?u=setTimeout(l,99-e):(u=null,i())},function(){a=Date.now(),u||(u=setTimeout(l,99))});function q(){125!=v&&(p=7,v=125,w=35,b&&(b&&(r&&d(r),o&&clearTimeout(o),b=!1),I())),T()}function C(){r=null,o=setTimeout(O,0)}function D(){o=null,s(C)}function I(){b||(t=v-(Date.now()-g),e=Date.now(),b=!0,w&&t<w&&(t=w),t>9?o=setTimeout(D,t):(t=0,D()))}function O(){var n,r,i,u=p>9?9:1;if(g=Date.now(),b=!1,o=null,m>2||g-t-50<e)for(r=0,i=f.length;r<i&&k.timeRemaining()>u;r++)n=f.shift(),h++,n&&n(k);f.length?I():m=0}function j(e){return y++,f.push(e),I(),y}function E(e){var t=e-1-h;f[t]&&(f[t]=null)}if(c.requestIdleCallback&&c.cancelIdleCallback)try{c.requestIdleCallback((function(){}),{timeout:0})}catch(e){!function(e){var t,n;if(c.requestIdleCallback=function(t,n){return n&&"number"==typeof n.timeout?e(t,n.timeout):e(t)},c.IdleCallbackDeadline&&(t=IdleCallbackDeadline.prototype)){if(!(n=Object.getOwnPropertyDescriptor(t,"timeRemaining"))||!n.configurable||!n.get)return;Object.defineProperty(t,"timeRemaining",{value:function(){return n.get.call(this)},enumerable:!0,configurable:!0})}}(c.requestIdleCallback)}else c.requestIdleCallback=j,c.cancelIdleCallback=E,c.document&&document.addEventListener&&(c.addEventListener("scroll",q,!0),c.addEventListener("resize",q),document.addEventListener("focus",q,!0),document.addEventListener("mouseover",q,!0),["click","keypress","touchstart","mousedown"].forEach((function(e){document.addEventListener(e,q,{capture:!0,passive:!0})})),c.MutationObserver&&new MutationObserver(q).observe(document.documentElement,{childList:!0,subtree:!0,attributes:!0}));return{request:j,cancel:E}})?o.apply(t,[]):o)||(e.exports=r)}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={exports:{}};return e[o](i,i.exports,n),i.exports}n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var o={};(()=>{"use strict";n.r(o),n.d(o,{createQueue:()=>t}),n(5033);const e="undefined"==typeof window?e=>{setTimeout((()=>e(Date.now())),0)}:window.requestIdleCallback,t=()=>{const t=new Map;let n=!1;const o=r=>{for(const[e,n]of t)if(t.delete(e),n(),"number"==typeof r||r.timeRemaining()<=0)break;0!==t.size?e(o):n=!1};return{add:(r,i)=>{t.set(r,i),n||(n=!0,e(o))},flush:e=>{const n=t.get(e);return void 0!==n&&(t.delete(e),n(),!0)},cancel:e=>t.delete(e),reset:()=>{t.clear(),n=!1}}}})(),(window.wp=window.wp||{}).priorityQueue=o})();
//# sourceMappingURL=index.min.js.map
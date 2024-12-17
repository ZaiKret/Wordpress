(()=>{"use strict";var e={4140:(e,t,n)=>{var r=n(5795);t.H=r.createRoot,t.c=r.hydrateRoot},5795:e=>{e.exports=window.ReactDOM}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,n),i.exports}n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var r={};n.r(r),n.d(r,{Children:()=>o.Children,Component:()=>o.Component,Fragment:()=>o.Fragment,Platform:()=>k,PureComponent:()=>o.PureComponent,RawHTML:()=>A,StrictMode:()=>o.StrictMode,Suspense:()=>o.Suspense,cloneElement:()=>o.cloneElement,concatChildren:()=>m,createContext:()=>o.createContext,createElement:()=>o.createElement,createInterpolateElement:()=>h,createPortal:()=>y.createPortal,createRef:()=>o.createRef,createRoot:()=>v.H,findDOMNode:()=>y.findDOMNode,flushSync:()=>y.flushSync,forwardRef:()=>o.forwardRef,hydrate:()=>y.hydrate,hydrateRoot:()=>v.c,isEmptyElement:()=>b,isValidElement:()=>o.isValidElement,lazy:()=>o.lazy,memo:()=>o.memo,render:()=>y.render,renderToString:()=>G,startTransition:()=>o.startTransition,switchChildrenNodeName:()=>g,unmountComponentAtNode:()=>y.unmountComponentAtNode,useCallback:()=>o.useCallback,useContext:()=>o.useContext,useDebugValue:()=>o.useDebugValue,useDeferredValue:()=>o.useDeferredValue,useEffect:()=>o.useEffect,useId:()=>o.useId,useImperativeHandle:()=>o.useImperativeHandle,useInsertionEffect:()=>o.useInsertionEffect,useLayoutEffect:()=>o.useLayoutEffect,useMemo:()=>o.useMemo,useReducer:()=>o.useReducer,useRef:()=>o.useRef,useState:()=>o.useState,useSyncExternalStore:()=>o.useSyncExternalStore,useTransition:()=>o.useTransition});const o=window.React;let i,a,s,l;const c=/<(\/)?(\w+)\s*(\/)?>/g;function u(e,t,n,r,o){return{element:e,tokenStart:t,tokenLength:n,prevOffset:r,leadingTextStart:o,children:[]}}function d(e){const t=function(){const e=c.exec(i);if(null===e)return["no-more-tokens"];const t=e.index,[n,r,o,a]=e,s=n.length;return a?["self-closed",o,t,s]:r?["closer",o,t,s]:["opener",o,t,s]}(),[n,r,d,h]=t,m=l.length,g=d>a?a:null;if(!e[r])return p(),!1;switch(n){case"no-more-tokens":if(0!==m){const{leadingTextStart:e,tokenStart:t}=l.pop();s.push(i.substr(e,t))}return p(),!1;case"self-closed":return 0===m?(null!==g&&s.push(i.substr(g,d-g)),s.push(e[r]),a=d+h,!0):(f(u(e[r],d,h)),a=d+h,!0);case"opener":return l.push(u(e[r],d,h,d+h,g)),a=d+h,!0;case"closer":if(1===m)return function(e){const{element:t,leadingTextStart:n,prevOffset:r,tokenStart:a,children:c}=l.pop(),u=e?i.substr(r,e-r):i.substr(r);u&&c.push(u),null!==n&&s.push(i.substr(n,a-n)),s.push((0,o.cloneElement)(t,null,...c))}(d),a=d+h,!0;const t=l.pop(),n=i.substr(t.prevOffset,d-t.prevOffset);t.children.push(n),t.prevOffset=d+h;const c=u(t.element,t.tokenStart,t.tokenLength,d+h);return c.children=t.children,f(c),a=d+h,!0;default:return p(),!1}}function p(){const e=i.length-a;0!==e&&s.push(i.substr(a,e))}function f(e){const{element:t,tokenStart:n,tokenLength:r,prevOffset:a,children:s}=e,c=l[l.length-1],u=i.substr(c.prevOffset,n-c.prevOffset);u&&c.children.push(u),c.children.push((0,o.cloneElement)(t,null,...s)),c.prevOffset=a||n+r}const h=(e,t)=>{if(i=e,a=0,s=[],l=[],c.lastIndex=0,!(e=>{const t="object"==typeof e,n=t&&Object.values(e);return t&&n.length&&n.every((e=>(0,o.isValidElement)(e)))})(t))throw new TypeError("The conversionMap provided is not valid. It must be an object with values that are React Elements");do{}while(d(t));return(0,o.createElement)(o.Fragment,null,...s)};function m(...e){return e.reduce(((e,t,n)=>(o.Children.forEach(t,((t,r)=>{t&&"string"!=typeof t&&(t=(0,o.cloneElement)(t,{key:[n,r].join()})),e.push(t)})),e)),[])}function g(e,t){return e&&o.Children.map(e,((e,n)=>{if("string"==typeof e?.valueOf())return(0,o.createElement)(t,{key:n},e);const{children:r,...i}=e.props;return(0,o.createElement)(t,{key:n,...i},r)}))}var y=n(5795),v=n(4140);const b=e=>"number"!=typeof e&&("string"==typeof e?.valueOf()||Array.isArray(e)?!e.length:!e),k={OS:"web",select:e=>"web"in e?e.web:e.default,isWeb:!0};function w(e){return"[object Object]"===Object.prototype.toString.call(e)}var S=function(){return S=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},S.apply(this,arguments)};function x(e){return e.toLowerCase()}Object.create,Object.create,"function"==typeof SuppressedError&&SuppressedError;var O=[/([a-z0-9])([A-Z])/g,/([A-Z])([A-Z][a-z])/g],C=/[^A-Z0-9]+/gi;function E(e,t,n){return t instanceof RegExp?e.replace(t,n):t.reduce((function(e,t){return e.replace(t,n)}),e)}function R(e,t){return void 0===t&&(t={}),function(e,t){return void 0===t&&(t={}),function(e,t){void 0===t&&(t={});for(var n=t.splitRegexp,r=void 0===n?O:n,o=t.stripRegexp,i=void 0===o?C:o,a=t.transform,s=void 0===a?x:a,l=t.delimiter,c=void 0===l?" ":l,u=E(E(e,r,"$1\0$2"),i,"\0"),d=0,p=u.length;"\0"===u.charAt(d);)d++;for(;"\0"===u.charAt(p-1);)p--;return u.slice(d,p).split("\0").map(s).join(c)}(e,S({delimiter:"."},t))}(e,S({delimiter:"-"},t))}const T=window.wp.escapeHtml;function A({children:e,...t}){let n="";return o.Children.toArray(e).forEach((e=>{"string"==typeof e&&""!==e.trim()&&(n+=e)})),(0,o.createElement)("div",{dangerouslySetInnerHTML:{__html:n},...t})}const{Provider:M,Consumer:I}=(0,o.createContext)(void 0),L=(0,o.forwardRef)((()=>null)),P=new Set(["string","boolean","number"]),j=new Set(["area","base","br","col","command","embed","hr","img","input","keygen","link","meta","param","source","track","wbr"]),H=new Set(["allowfullscreen","allowpaymentrequest","allowusermedia","async","autofocus","autoplay","checked","controls","default","defer","disabled","download","formnovalidate","hidden","ismap","itemscope","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected","typemustmatch"]),z=new Set(["autocapitalize","autocomplete","charset","contenteditable","crossorigin","decoding","dir","draggable","enctype","formenctype","formmethod","http-equiv","inputmode","kind","method","preload","scope","shape","spellcheck","translate","type","wrap"]),D=new Set(["animation","animationIterationCount","baselineShift","borderImageOutset","borderImageSlice","borderImageWidth","columnCount","cx","cy","fillOpacity","flexGrow","flexShrink","floodOpacity","fontWeight","gridColumnEnd","gridColumnStart","gridRowEnd","gridRowStart","lineHeight","opacity","order","orphans","r","rx","ry","shapeImageThreshold","stopOpacity","strokeDasharray","strokeDashoffset","strokeMiterlimit","strokeOpacity","strokeWidth","tabSize","widows","x","y","zIndex","zoom"]);function V(e,t){return t.some((t=>0===e.indexOf(t)))}function W(e){return"key"===e||"children"===e}function _(e,t){return"style"===e?function(e){if(!1===w(t=e)||void 0!==(n=t.constructor)&&(!1===w(r=n.prototype)||!1===r.hasOwnProperty("isPrototypeOf")))return e;var t,n,r;let o;for(const t in e){const n=e[t];null!=n&&(o?o+=";":o="",o+=q(t)+":"+X(t,n))}return o}(t):t}const F=["accentHeight","alignmentBaseline","arabicForm","baselineShift","capHeight","clipPath","clipRule","colorInterpolation","colorInterpolationFilters","colorProfile","colorRendering","dominantBaseline","enableBackground","fillOpacity","fillRule","floodColor","floodOpacity","fontFamily","fontSize","fontSizeAdjust","fontStretch","fontStyle","fontVariant","fontWeight","glyphName","glyphOrientationHorizontal","glyphOrientationVertical","horizAdvX","horizOriginX","imageRendering","letterSpacing","lightingColor","markerEnd","markerMid","markerStart","overlinePosition","overlineThickness","paintOrder","panose1","pointerEvents","renderingIntent","shapeRendering","stopColor","stopOpacity","strikethroughPosition","strikethroughThickness","strokeDasharray","strokeDashoffset","strokeLinecap","strokeLinejoin","strokeMiterlimit","strokeOpacity","strokeWidth","textAnchor","textDecoration","textRendering","underlinePosition","underlineThickness","unicodeBidi","unicodeRange","unitsPerEm","vAlphabetic","vHanging","vIdeographic","vMathematical","vectorEffect","vertAdvY","vertOriginX","vertOriginY","wordSpacing","writingMode","xmlnsXlink","xHeight"].reduce(((e,t)=>(e[t.toLowerCase()]=t,e)),{}),N=["allowReorder","attributeName","attributeType","autoReverse","baseFrequency","baseProfile","calcMode","clipPathUnits","contentScriptType","contentStyleType","diffuseConstant","edgeMode","externalResourcesRequired","filterRes","filterUnits","glyphRef","gradientTransform","gradientUnits","kernelMatrix","kernelUnitLength","keyPoints","keySplines","keyTimes","lengthAdjust","limitingConeAngle","markerHeight","markerUnits","markerWidth","maskContentUnits","maskUnits","numOctaves","pathLength","patternContentUnits","patternTransform","patternUnits","pointsAtX","pointsAtY","pointsAtZ","preserveAlpha","preserveAspectRatio","primitiveUnits","refX","refY","repeatCount","repeatDur","requiredExtensions","requiredFeatures","specularConstant","specularExponent","spreadMethod","startOffset","stdDeviation","stitchTiles","suppressContentEditableWarning","suppressHydrationWarning","surfaceScale","systemLanguage","tableValues","targetX","targetY","textLength","viewBox","viewTarget","xChannelSelector","yChannelSelector"].reduce(((e,t)=>(e[t.toLowerCase()]=t,e)),{}),U=["xlink:actuate","xlink:arcrole","xlink:href","xlink:role","xlink:show","xlink:title","xlink:type","xml:base","xml:lang","xml:space","xmlns:xlink"].reduce(((e,t)=>(e[t.replace(":","").toLowerCase()]=t,e)),{});function $(e){switch(e){case"htmlFor":return"for";case"className":return"class"}const t=e.toLowerCase();return N[t]?N[t]:F[t]?R(F[t]):U[t]?U[t]:t}function q(e){return e.startsWith("--")?e:V(e,["ms","O","Moz","Webkit"])?"-"+R(e):R(e)}function X(e,t){return"number"!=typeof t||0===t||D.has(e)?t:t+"px"}function B(e,t,n={}){if(null==e||!1===e)return"";if(Array.isArray(e))return Z(e,t,n);switch(typeof e){case"string":return(0,T.escapeHTML)(e);case"number":return e.toString()}const{type:r,props:i}=e;switch(r){case o.StrictMode:case o.Fragment:return Z(i.children,t,n);case A:const{children:e,...r}=i;return Y(Object.keys(r).length?"div":null,{...r,dangerouslySetInnerHTML:{__html:e}},t,n)}switch(typeof r){case"string":return Y(r,i,t,n);case"function":return r.prototype&&"function"==typeof r.prototype.render?function(e,t,n,r={}){const o=new e(t,r);"function"==typeof o.getChildContext&&Object.assign(r,o.getChildContext());return B(o.render(),n,r)}(r,i,t,n):B(r(i,n),t,n)}switch(r&&r.$$typeof){case M.$$typeof:return Z(i.children,i.value,n);case I.$$typeof:return B(i.children(t||r._currentValue),t,n);case L.$$typeof:return B(r.render(i),t,n)}return""}function Y(e,t,n,r={}){let o="";if("textarea"===e&&t.hasOwnProperty("value")){o=Z(t.value,n,r);const{value:e,...i}=t;t=i}else t.dangerouslySetInnerHTML&&"string"==typeof t.dangerouslySetInnerHTML.__html?o=t.dangerouslySetInnerHTML.__html:void 0!==t.children&&(o=Z(t.children,n,r));if(!e)return o;const i=function(e){let t="";for(const n in e){const r=$(n);if(!(0,T.isValidAttributeName)(r))continue;let o=_(n,e[n]);if(!P.has(typeof o))continue;if(W(n))continue;const i=H.has(r);if(i&&!1===o)continue;const a=i||V(n,["data-","aria-"])||z.has(r);("boolean"!=typeof o||a)&&(t+=" "+r,i||("string"==typeof o&&(o=(0,T.escapeAttribute)(o)),t+='="'+o+'"'))}return t}(t);return j.has(e)?"<"+e+i+"/>":"<"+e+i+">"+o+"</"+e+">"}function Z(e,t,n={}){let r="";e=Array.isArray(e)?e:[e];for(let o=0;o<e.length;o++)r+=B(e[o],t,n);return r}const G=B;(window.wp=window.wp||{}).element=r})();
//# sourceMappingURL=index.min.js.map
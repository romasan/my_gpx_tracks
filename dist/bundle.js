!function(D){var n=window.webpackHotUpdate;window.webpackHotUpdate=function(e,t){!function(e,t){if(!F[e]||!d[e])return;for(var n in d[e]=!1,t)Object.prototype.hasOwnProperty.call(t,n)&&(H[n]=t[n]);0==--l&&0===s&&v()}(e,t),n&&n(e,t)};var i,r=!0,k="b8d0957da324c7ca82ff",t=1e4,C={},I=[],o=[];function c(t){var n=R[t];if(!n)return q;function r(e){return n.hot.active?(R[e]?-1===R[e].parents.indexOf(t)&&R[e].parents.push(t):(I=[t],i=e),-1===n.children.indexOf(e)&&n.children.push(e)):(console.warn("[HMR] unexpected require("+e+") from disposed module "+t),I=[]),q(e)}function e(t){return{configurable:!0,enumerable:!0,get:function(){return q[t]},set:function(e){q[t]=e}}}for(var o in q)Object.prototype.hasOwnProperty.call(q,o)&&"e"!==o&&"t"!==o&&Object.defineProperty(r,o,e(o));return r.e=function(e){return"ready"===M&&T("prepare"),s++,q.e(e).then(t,function(e){throw t(),e});function t(){s--,"prepare"===M&&(f[e]||h(e),0===s&&0===l&&v())}},r.t=function(e,t){return 1&t&&(e=r(e)),q.t(e,-2&t)},r}var a=[],M="idle";function T(e){M=e;for(var t=0;t<a.length;t++)a[t].call(null,e)}var u,H,z,l=0,s=0,f={},d={},F={};function L(e){return+e+""===e?+e:e}function p(e){if("idle"!==M)throw new Error("check() is only allowed in idle status");return r=e,T("check"),function(e){return e=e||1e4,new Promise(function(t,n){if("undefined"==typeof XMLHttpRequest)return n(new Error("No browser support"));try{var r=new XMLHttpRequest,o=q.p+""+k+".hot-update.json";r.open("GET",o,!0),r.timeout=e,r.send(null)}catch(e){return n(e)}r.onreadystatechange=function(){if(4===r.readyState)if(0===r.status)n(new Error("Manifest request to "+o+" timed out."));else if(404===r.status)t();else if(200!==r.status&&304!==r.status)n(new Error("Manifest request to "+o+" failed."));else{try{var e=JSON.parse(r.responseText)}catch(e){return void n(e)}t(e)}}})}(t).then(function(e){if(!e)return T("idle"),null;d={},f={},F=e.c,z=e.h,T("prepare");var t=new Promise(function(e,t){u={resolve:e,reject:t}});H={};return h(0),"prepare"===M&&0===s&&0===l&&v(),t})}function h(e){F[e]?(d[e]=!0,l++,function(e){var t=document.createElement("script");t.charset="utf-8",t.src=q.p+""+e+"."+k+".hot-update.js",document.head.appendChild(t)}(e)):f[e]=!0}function v(){T("ready");var t=u;if(u=null,t)if(r)Promise.resolve().then(function(){return y(r)}).then(function(e){t.resolve(e)},function(e){t.reject(e)});else{var e=[];for(var n in H)Object.prototype.hasOwnProperty.call(H,n)&&e.push(L(n));t.resolve(e)}}function y(n){if("ready"!==M)throw new Error("apply() is only allowed in ready status");var e,t,r,s,o;function i(e){for(var t=[e],n={},r=t.map(function(e){return{chain:[e],id:e}});0<r.length;){var o=r.pop(),i=o.id,c=o.chain;if((s=R[i])&&!s.hot._selfAccepted){if(s.hot._selfDeclined)return{type:"self-declined",chain:c,moduleId:i};if(s.hot._main)return{type:"unaccepted",chain:c,moduleId:i};for(var a=0;a<s.parents.length;a++){var u=s.parents[a],l=R[u];if(l){if(l.hot._declinedDependencies[i])return{type:"declined",chain:c.concat([u]),moduleId:i,parentId:u};-1===t.indexOf(u)&&(l.hot._acceptedDependencies[i]?(n[u]||(n[u]=[]),f(n[u],[i])):(delete n[u],t.push(u),r.push({chain:c.concat([u]),id:u})))}}}}return{type:"accepted",moduleId:e,outdatedModules:t,outdatedDependencies:n}}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];-1===e.indexOf(r)&&e.push(r)}}n=n||{};function c(){console.warn("[HMR] unexpected require("+p.moduleId+") to disposed module")}var a={},u=[],l={};for(var d in H)if(Object.prototype.hasOwnProperty.call(H,d)){var p;o=L(d);var h=!1,v=!1,y=!1,b="";switch((p=H[d]?i(o):{type:"disposed",moduleId:d}).chain&&(b="\nUpdate propagation: "+p.chain.join(" -> ")),p.type){case"self-declined":n.onDeclined&&n.onDeclined(p),n.ignoreDeclined||(h=new Error("Aborted because of self decline: "+p.moduleId+b));break;case"declined":n.onDeclined&&n.onDeclined(p),n.ignoreDeclined||(h=new Error("Aborted because of declined dependency: "+p.moduleId+" in "+p.parentId+b));break;case"unaccepted":n.onUnaccepted&&n.onUnaccepted(p),n.ignoreUnaccepted||(h=new Error("Aborted because "+o+" is not accepted"+b));break;case"accepted":n.onAccepted&&n.onAccepted(p),v=!0;break;case"disposed":n.onDisposed&&n.onDisposed(p),y=!0;break;default:throw new Error("Unexception type "+p.type)}if(h)return T("abort"),Promise.reject(h);if(v)for(o in l[o]=H[o],f(u,p.outdatedModules),p.outdatedDependencies)Object.prototype.hasOwnProperty.call(p.outdatedDependencies,o)&&(a[o]||(a[o]=[]),f(a[o],p.outdatedDependencies[o]));y&&(f(u,[p.moduleId]),l[o]=c)}var m,g=[];for(t=0;t<u.length;t++)o=u[t],R[o]&&R[o].hot._selfAccepted&&l[o]!==c&&g.push({module:o,errorHandler:R[o].hot._selfAccepted});T("dispose"),Object.keys(F).forEach(function(e){!1===F[e]&&function(e){delete installedChunks[e]}(e)});for(var _,w,x=u.slice();0<x.length;)if(o=x.pop(),s=R[o]){var O={},j=s.hot._disposeHandlers;for(r=0;r<j.length;r++)(e=j[r])(O);for(C[o]=O,s.hot.active=!1,delete R[o],delete a[o],r=0;r<s.children.length;r++){var S=R[s.children[r]];S&&0<=(m=S.parents.indexOf(o))&&S.parents.splice(m,1)}}for(o in a)if(Object.prototype.hasOwnProperty.call(a,o)&&(s=R[o]))for(w=a[o],r=0;r<w.length;r++)_=w[r],0<=(m=s.children.indexOf(_))&&s.children.splice(m,1);for(o in T("apply"),k=z,l)Object.prototype.hasOwnProperty.call(l,o)&&(D[o]=l[o]);var A=null;for(o in a)if(Object.prototype.hasOwnProperty.call(a,o)&&(s=R[o])){w=a[o];var E=[];for(t=0;t<w.length;t++)if(_=w[t],e=s.hot._acceptedDependencies[_]){if(-1!==E.indexOf(e))continue;E.push(e)}for(t=0;t<E.length;t++){e=E[t];try{e(w)}catch(e){n.onErrored&&n.onErrored({type:"accept-errored",moduleId:o,dependencyId:w[t],error:e}),n.ignoreErrored||(A=A||e)}}}for(t=0;t<g.length;t++){var P=g[t];o=P.module,I=[o];try{q(o)}catch(t){if("function"==typeof P.errorHandler)try{P.errorHandler(t)}catch(e){n.onErrored&&n.onErrored({type:"self-accept-error-handler-errored",moduleId:o,error:e,originalError:t}),n.ignoreErrored||(A=A||e),A=A||t}else n.onErrored&&n.onErrored({type:"self-accept-errored",moduleId:o,error:t}),n.ignoreErrored||(A=A||t)}}return A?(T("fail"),Promise.reject(A)):(T("idle"),new Promise(function(e){e(u)}))}var R={};function q(e){if(R[e])return R[e].exports;var t=R[e]={i:e,l:!1,exports:{},hot:function(e){var r={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:i!==e,active:!0,accept:function(e,t){if(void 0===e)r._selfAccepted=!0;else if("function"==typeof e)r._selfAccepted=e;else if("object"==typeof e)for(var n=0;n<e.length;n++)r._acceptedDependencies[e[n]]=t||function(){};else r._acceptedDependencies[e]=t||function(){}},decline:function(e){if(void 0===e)r._selfDeclined=!0;else if("object"==typeof e)for(var t=0;t<e.length;t++)r._declinedDependencies[e[t]]=!0;else r._declinedDependencies[e]=!0},dispose:function(e){r._disposeHandlers.push(e)},addDisposeHandler:function(e){r._disposeHandlers.push(e)},removeDisposeHandler:function(e){var t=r._disposeHandlers.indexOf(e);0<=t&&r._disposeHandlers.splice(t,1)},check:p,apply:y,status:function(e){if(!e)return M;a.push(e)},addStatusHandler:function(e){a.push(e)},removeStatusHandler:function(e){var t=a.indexOf(e);0<=t&&a.splice(t,1)},data:C[e]};return i=void 0,r}(e),parents:(o=I,I=[],o),children:[]};return D[e].call(t.exports,t,t.exports,c(e)),t.l=!0,t.exports}q.m=D,q.c=R,q.d=function(e,t,n){q.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},q.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},q.t=function(t,e){if(1&e&&(t=q(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(q.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)q.d(n,r,function(e){return t[e]}.bind(null,r));return n},q.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return q.d(t,"a",t),t},q.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},q.p="/dist",q.h=function(){return k},c(55)(q.s=55)}([function(e,t,n){var o=n(13);e.exports=function(e,t,n){var r=null==e?void 0:o(e,t);return void 0===r?n:r}},function(e,t,n){var r=n(9)(Object,"create");e.exports=r},function(e,t,n){var r=n(41);e.exports=function(e,t){for(var n=e.length;n--;)if(r(e[n][0],t))return n;return-1}},function(e,t,n){var r=n(47);e.exports=function(e,t){var n=e.__data__;return r(t)?n["string"==typeof t?"string":"hash"]:n.map}},function(e,t){var n=Array.isArray;e.exports=n},function(e,t,n){var r=n(8),o=n(20);e.exports=function(e){return"symbol"==typeof e||o(e)&&"[object Symbol]"==r(e)}},function(e,t,n){var r=n(7).Symbol;e.exports=r},function(e,t,n){var r=n(16),o="object"==typeof self&&self&&self.Object===Object&&self,i=r||o||Function("return this")();e.exports=i},function(e,t,n){var r=n(6),o=n(18),i=n(19),c=r?r.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":c&&c in Object(e)?o(e):i(e)}},function(e,t,n){var r=n(28),o=n(33);e.exports=function(e,t){var n=o(e,t);return r(n)?n:void 0}},function(e,t){e.exports=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}},function(e,t,n){"use strict";(function(e){function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var n={};function i(e){return Math.floor(Math.abs(e)+.5)*(0<=e?1:-1)}function a(e,t,n){var r=(e=i(e*n))-(t=i(t*n));r<<=1,e-t<0&&(r=~r);for(var o="";32<=r;)o+=String.fromCharCode(63+(32|31&r)),r>>=5;return o+=String.fromCharCode(r+63)}function r(e){for(var t=[],n=0;n<e.length;n++)t.push(e[n].slice().reverse());return t}n.decode=function(e,t){for(var n,r=0,o=0,i=0,c=[],a=0,u=0,l=null,s=Math.pow(10,t||5);r<e.length;){for(l=null,u=a=0;u|=(31&(l=e.charCodeAt(r++)-63))<<a,a+=5,32<=l;);for(n=1&u?~(u>>1):u>>1,a=u=0;u|=(31&(l=e.charCodeAt(r++)-63))<<a,a+=5,32<=l;);o+=n,i+=1&u?~(u>>1):u>>1,c.push([o/s,i/s])}return c},n.encode=function(e,t){if(!e.length)return"";for(var n=Math.pow(10,t||5),r=a(e[0][0],0,n)+a(e[0][1],0,n),o=1;o<e.length;o++){var i=e[o],c=e[o-1];r+=a(i[0],c[0],n),r+=a(i[1],c[1],n)}return r},n.fromGeoJSON=function(e,t){if(e&&"Feature"===e.type&&(e=e.geometry),!e||"LineString"!==e.type)throw new Error("Input must be a GeoJSON LineString");return n.encode(r(e.coordinates),t)},n.toGeoJSON=function(e,t){return{type:"LineString",coordinates:r(n.decode(e,t))}},"object"===t(e)&&e.exports&&(e.exports=n)}).call(this,n(12)(e))},function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},function(e,t,n){var o=n(14),i=n(54);e.exports=function(e,t){for(var n=0,r=(t=o(t,e)).length;null!=e&&n<r;)e=e[i(t[n++])];return n&&n==r?e:void 0}},function(e,t,n){var r=n(4),o=n(15),i=n(21),c=n(51);e.exports=function(e,t){return r(e)?e:o(e,t)?[e]:i(c(e))}},function(e,t,n){var r=n(4),o=n(5),i=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,c=/^\w*$/;e.exports=function(e,t){if(r(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!o(e))||(c.test(e)||!i.test(e)||null!=t&&e in Object(t))}},function(n,e,t){(function(e){var t="object"==typeof e&&e&&e.Object===Object&&e;n.exports=t}).call(this,t(17))},function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){var r=n(6),o=Object.prototype,i=o.hasOwnProperty,c=o.toString,a=r?r.toStringTag:void 0;e.exports=function(e){var t=i.call(e,a),n=e[a];try{var r=!(e[a]=void 0)}catch(e){}var o=c.call(e);return r&&(t?e[a]=n:delete e[a]),o}},function(e,t){var n=Object.prototype.toString;e.exports=function(e){return n.call(e)}},function(e,t){e.exports=function(e){return null!=e&&"object"==typeof e}},function(e,t,n){var r=n(22),i=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,c=/\\(\\)?/g,o=r(function(e){var o=[];return 46===e.charCodeAt(0)&&o.push(""),e.replace(i,function(e,t,n,r){o.push(n?r.replace(c,"$1"):t||e)}),o});e.exports=o},function(e,t,n){var r=n(23);e.exports=function(e){var t=r(e,function(e){return 500===n.size&&n.clear(),e}),n=t.cache;return t}},function(e,t,n){var r=n(24),a="Expected a function";function u(o,i){if("function"!=typeof o||null!=i&&"function"!=typeof i)throw new TypeError(a);var c=function(){var e=arguments,t=i?i.apply(this,e):e[0],n=c.cache;if(n.has(t))return n.get(t);var r=o.apply(this,e);return c.cache=n.set(t,r)||n,r};return c.cache=new(u.Cache||r),c}u.Cache=r,e.exports=u},function(e,t,n){var r=n(25),o=n(46),i=n(48),c=n(49),a=n(50);function u(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}u.prototype.clear=r,u.prototype.delete=o,u.prototype.get=i,u.prototype.has=c,u.prototype.set=a,e.exports=u},function(e,t,n){var r=n(26),o=n(38),i=n(45);e.exports=function(){this.size=0,this.__data__={hash:new r,map:new(i||o),string:new r}}},function(e,t,n){var r=n(27),o=n(34),i=n(35),c=n(36),a=n(37);function u(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}u.prototype.clear=r,u.prototype.delete=o,u.prototype.get=i,u.prototype.has=c,u.prototype.set=a,e.exports=u},function(e,t,n){var r=n(1);e.exports=function(){this.__data__=r?r(null):{},this.size=0}},function(e,t,n){var r=n(29),o=n(30),i=n(10),c=n(32),a=/^\[object .+?Constructor\]$/,u=Function.prototype,l=Object.prototype,s=u.toString,f=l.hasOwnProperty,d=RegExp("^"+s.call(f).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");e.exports=function(e){return!(!i(e)||o(e))&&(r(e)?d:a).test(c(e))}},function(e,t,n){var r=n(8),o=n(10);e.exports=function(e){if(!o(e))return!1;var t=r(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t}},function(e,t,n){var r,o=n(31),i=(r=/[^.]+$/.exec(o&&o.keys&&o.keys.IE_PROTO||""))?"Symbol(src)_1."+r:"";e.exports=function(e){return!!i&&i in e}},function(e,t,n){var r=n(7)["__core-js_shared__"];e.exports=r},function(e,t){var n=Function.prototype.toString;e.exports=function(e){if(null!=e){try{return n.call(e)}catch(e){}try{return e+""}catch(e){}}return""}},function(e,t){e.exports=function(e,t){return null==e?void 0:e[t]}},function(e,t){e.exports=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}},function(e,t,n){var r=n(1),o=Object.prototype.hasOwnProperty;e.exports=function(e){var t=this.__data__;if(r){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return o.call(t,e)?t[e]:void 0}},function(e,t,n){var r=n(1),o=Object.prototype.hasOwnProperty;e.exports=function(e){var t=this.__data__;return r?void 0!==t[e]:o.call(t,e)}},function(e,t,n){var r=n(1);e.exports=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=r&&void 0===t?"__lodash_hash_undefined__":t,this}},function(e,t,n){var r=n(39),o=n(40),i=n(42),c=n(43),a=n(44);function u(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}u.prototype.clear=r,u.prototype.delete=o,u.prototype.get=i,u.prototype.has=c,u.prototype.set=a,e.exports=u},function(e,t){e.exports=function(){this.__data__=[],this.size=0}},function(e,t,n){var r=n(2),o=Array.prototype.splice;e.exports=function(e){var t=this.__data__,n=r(t,e);return!(n<0)&&(n==t.length-1?t.pop():o.call(t,n,1),--this.size,!0)}},function(e,t){e.exports=function(e,t){return e===t||e!=e&&t!=t}},function(e,t,n){var r=n(2);e.exports=function(e){var t=this.__data__,n=r(t,e);return n<0?void 0:t[n][1]}},function(e,t,n){var r=n(2);e.exports=function(e){return-1<r(this.__data__,e)}},function(e,t,n){var o=n(2);e.exports=function(e,t){var n=this.__data__,r=o(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this}},function(e,t,n){var r=n(9)(n(7),"Map");e.exports=r},function(e,t,n){var r=n(3);e.exports=function(e){var t=r(this,e).delete(e);return this.size-=t?1:0,t}},function(e,t){e.exports=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e}},function(e,t,n){var r=n(3);e.exports=function(e){return r(this,e).get(e)}},function(e,t,n){var r=n(3);e.exports=function(e){return r(this,e).has(e)}},function(e,t,n){var o=n(3);e.exports=function(e,t){var n=o(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this}},function(e,t,n){var r=n(52);e.exports=function(e){return null==e?"":r(e)}},function(e,t,n){var r=n(6),o=n(53),i=n(4),c=n(5),a=1/0,u=r?r.prototype:void 0,l=u?u.toString:void 0;e.exports=function e(t){if("string"==typeof t)return t;if(i(t))return o(t,e)+"";if(c(t))return l?l.call(t):"";var n=t+"";return"0"==n&&1/t==-a?"-0":n}},function(e,t){e.exports=function(e,t){for(var n=-1,r=null==e?0:e.length,o=Array(r);++n<r;)o[n]=t(e[n],n,e);return o}},function(e,t,n){var r=n(5);e.exports=function(e){if("string"==typeof e||r(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t}},function(e,t,n){"use strict";n.r(t);function p(e){var t=0<arguments.length&&void 0!==e?e:{},n=new ymaps.GeoObject({geometry:{type:"LineString",coordinates:t.coordinates},properties:{hintContent:t.label}},{strokeColor:t.color,strokeWidth:3,strokeOpacity:.5});return t.manual||(n.events.add("hover",function(e){e.originalEvent.target.options.set({strokeColor:"#0000ff",strokeOpacity:1,zIndex:999})}),n.events.add("mouseleave",function(e){e.originalEvent.target.options.set({strokeColor:"#ff0000",strokeOpacity:.5,zIndex:0})})),n}var r=n(11),h=n.n(r),o=new Promise(function(e){ymaps.ready(e)}),i=null,c=null;o.then(function(){i=new ymaps.Map("ymap",{center:[0,0],zoom:10,controls:["zoomControl","rulerControl","typeSelector"]}),ymaps.geolocation.get({provider:"browser",mapStateAutoApply:!0}).then(function(e){e.geoObjects.options.set("preset","islands#blueCircleIcon"),i.geoObjects.add(e.geoObjects)}),c=new ymaps.GeoObjectCollection,i.geoObjects.add(c)});var a=n(0),u=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function y(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var c,a=e[Symbol.iterator]();!(r=(c=a.next()).done)&&(n.push(c.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==a.return||a.return()}finally{if(o)throw i}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function f(e){var t=document.createElement("div");t.innerHTML=e,u()(t,"children[0].children[1].children[0].innerText");var n=u()(t,"children[0].children[0].children[0].innerText","").replace(/[TZ]/g," "),r=s(u()(t,"children[0].children[1].children[2].children.length")?u()(t,"children[0].children[1].children[2].children",[]):u()(t,"children[0].children[1].children[3].children",[])),o=r.map(function(e){return[parseFloat(e.attributes[0].value),parseFloat(e.attributes[1].value)]}),i=o.reduce(function(e,t){return{sum:e.prev?e.sum+function(e,t){var n=y(e,2),r=n[0],o=n[1],i=y(t,2),c=i[0],a=i[1],u=Math.sin,l=Math.cos,s=Math.acos,f=Math.PI,d=f*r/180,p=f*c/180,h=f*(o-a)/180,v=u(d)*u(p)+l(d)*l(p)*l(h);return v=60*(v=180*(v=s(v=1<v?1:v))/f)*1.1515,v*=1.60934}(e.prev,t):e.sum,prev:t}},{sum:0}).sum.toFixed(2);return{coordinates:o,label:'\n        <div style="color: grey">\n            <div>'.concat(n,"</div>\n            <div>").concat(i," км.</div>\n        </div>\n    "),date:n,distance:i,duration:((new Date(u()(r,[r.length-1,"children",1,"innerText"]))-new Date(u()(r,"[0].children[1].innerText")))/36e5).toFixed(2)}}function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function v(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var c,a=e[Symbol.iterator]();!(r=(c=a.next()).done)&&(n.push(c.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==a.return||a.return()}finally{if(o)throw i}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function b(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}new Promise(function(e){document.addEventListener("DOMContentLoaded",e)}).then(function(){document.querySelector(".upload input").addEventListener("change",function(e){(function(r){return new Promise(function(t){var e=r.target.files[0],n=new FileReader;n.onload=function(e){t(e.target.result)},e.name.includes(".gpx")&&n.readAsText(e)})})(e).then(function(e){var t=p(function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(e){l(t,e,n[e])})}return t}({},f(e),{color:"#0000ff",manual:!0}));c.add(t)})},!1)});function m(e){return _[e]||e}function g(t,e,n){e.forEach(function(e){"All"!==n&&e.type!==n||t.add(e.line)})}var _={All:"Все",Ride:"Велосипед",Walk:"Ходьба"},w=b(new URL(location.href).searchParams.entries()).reduce(function(e,t){var n=v(t,2);return function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(e){d(t,e,n[e])})}return t}({},e,d({},n[0],n[1]))},{});if(w.code){var x=null;fetch("https://www.strava.com/oauth/token?"+[{client_id:29536,client_secret:"37c9da3a9b91852ab74f08d70259d5be24ca7a48",code:w.code,grant_type:"authorization_code"}].reduce(function(e,t){return Object.entries(t)},0).map(function(e){var t=v(e,2);return t[0]+"="+t[1]}).join("&"),{method:"POST"}).then(function(e){return e.json()}).then(function(e){return x=e.access_token,function(e,t){return fetch(e,{method:"GET",headers:new Headers({Authorization:"Bearer "+t})})}("https://www.strava.com/api/v3/athlete/activities?per_page=200".replace("{id}",e.athlete.id),x)}).then(function(e){return e.json()}).then(function(e){return e.map(function(e,t){var n=e.id,r=e.name,o=e.type,i=e.start_date,c=e.distance,a=e.elapsed_time,u=e.map,l=h.a.decode(u.summary_polyline),s=new Date(i).toString().split("GMT")[0],f=parseFloat((c/1e3).toFixed(3)),d=parseFloat((a/3600).toFixed(3));return{id:n,type:o,line:p({coordinates:l,label:'\n                    <a href="https://www.strava.com/activities/'.concat(n,'" target="_blank">').concat(r,'</a>\n                    <div style="color: grey">\n                        <div>').concat(s,"</div>\n                        <div>").concat(f," км. ").concat(d," ч.</div>\n                        <div>Тип: ").concat(m(o),"</div>\n                    </div>\n                "),color:"#ff0000"})}})}).then(function(t){var e=t.reduce(function(e,t){return e.includes(t.type)?e:[].concat(b(e),[t.type])},[]);e.unshift("All");var r=e.includes("Ride")?"Ride":e[0];g(c,t,r),i.setBounds(c.getBounds());var o=document.querySelector("#types");o.children[0].remove(),e.forEach(function(n){var e=document.createElement("option");e.value=n,e.innerText=m(n)+" ("+t.reduce(function(e,t){return e+~~("All"===n||t.type===n)},0)+")",n===r&&(e.selected=!0),o.appendChild(e)}),o.addEventListener("change",function(e){c.removeAll(),g(c,t,e.target.value),i.setBounds(c.getBounds())}),document.querySelector("#showLabels").addEventListener("change",function(n){t.forEach(function(e){var t=e.line;n.target.checked?t.properties.setAll({hintContent:t.properties.getAll()._hintContent}):t.properties.setAll({_hintContent:t.properties.getAll().hintContent,hintContent:""})})})})}else location.href="https://www.strava.com/oauth/authorize?"+[{client_id:29536,redirect_uri:location.href.split("?")[0],response_type:"code",scope:"read,activity:read_all,profile:read_all,read_all"}].reduce(function(e,t){return Object.entries(t)},0).map(function(e){var t=v(e,2);return t[0]+"="+t[1]}).join("&")}]);
import{A as t,B as n,C as e,E as u,G as r}from"./index-64b5aeb5.js";function o(t,n){const e=function(t){let n=t;return Array.isArray(n)||(n=[t]),n}(t);e.forEach((t=>{const{name:e,prop:u}=t;n&&(n.config.globalProperties[e]=u)}))}function s(n){t(n)}function a(t,n,e={}){let r;return r=u(n,{...e}).mount(t),r}function c(t){return{setup(){const e=r();return n(t,e.ctx),e}}}function i(t){return{setup(){const n=e(t);return{[t]:n}}}}const f={props:{modelValue:{type:[String,Boolean],default:""}},computed:{realModelValue(){let t="";return t=this.modelValue,t}},methods:{emitModelValue(t){this.$emit("update:modelValue",t)}}};function p(t){}const l=function(){let t;return t="undefined"==typeof window,t}();function d(t){return null!=t}function m(t){return"function"==typeof t}function x(t){return null!==t&&"object"==typeof t}function $(t){return function(t){return null!==t&&"object"==typeof t&&!Array.isArray(t)}(t)&&m(t.then)&&m(t.catch)}function y(t){const n=typeof t;return null!==t&&("object"===n||"function"===n)}function b(t){return/^\d+(\.\d+)?$/.test(t)}function h(t){return/^[\u4e00-\u9fa5]+$/gi.test(t)}const g=/^-?\d+(\.\d+)?$/;function j(t){if(null!=t)return g.test(`${t}`)?`${t}px`:t}function A(t,n=!1){return function(t){return/^\d+(\.\d+)?$/.test(t)}(t)?n?`${t}px`:Number(t):/(rpx|upx)$/.test(t)?n?`${uni.upx2px(parseInt(t,10))}px`:Number(uni.upx2px(parseInt(t,10))):n?`${parseInt(t,10)}px`:parseInt(t,10)}export{l as I,j as a,d as b,h as c,y as d,a as e,x as f,A as g,c as h,o as i,$ as j,b as k,s as n,p as s,i as t,f as v};

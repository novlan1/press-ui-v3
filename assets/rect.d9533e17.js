import{i as e}from"./utils.f8cec38d.js";import{d as t}from"./version.2049afb8.js";const n=/scroll|auto|overlay/i;function o(e,t){void 0===t&&(t=window);let o=e;for(;o&&"HTML"!==o.tagName&&"BODY"!==o.tagName&&1===o.nodeType&&o!==t;){const{overflowY:e}=window.getComputedStyle(o);if(n.test(e))return o;o=o.parentNode}return t}function i(e){let t=e;return e.startsWith("#")||(t=`#${e}`),t=`${t} > .uni-scroll-view > .uni-scroll-view`,t}function r(){if(e()){return{windowWidth:Math.min(window.innerWidth,document.documentElement.clientWidth,screen.width),windowHeight:Math.min(window.innerHeight,document.documentElement.clientHeight,screen.height),windowTop:0,windowBottom:0}}const{windowWidth:t,windowHeight:n,windowTop:o,windowBottom:i}=uni.getSystemInfoSync();return{windowWidth:t,windowHeight:n,windowTop:o,windowBottom:i}}function c(){if(e())return 0;const{statusBarHeight:n}=t();return n}function s(e,t){return new Promise((n=>{const o=i(t),r=e.$el;if(r){const e=r.querySelector(o);return e||n({}),void n({scrollHeight:e.scrollHeight,scrollTop:e.scrollTop})}uni.createSelectorQuery().in(e).select(o).fields({scrollOffset:!0},(e=>{n(e)})).exec()}))}function l(e,t){return new Promise((n=>{const o=e.$el;if(o){const e=o.querySelector(t);e||n({});const i=e.getBoundingClientRect();n(i)}else uni.createSelectorQuery().in(e).select(t).boundingClientRect().exec(((e=[])=>n(e[0])))}))}function u(e,t){return new Promise((n=>{const o=e.$el;if(o){const e=[...o.querySelectorAll(t)].map((e=>e.getBoundingClientRect()));n(e)}else uni.createSelectorQuery().in(e).selectAll(t).boundingClientRect().exec(((e=[])=>{n(e[0])}))}))}export{r as a,l as b,c,o as d,i as e,s as f,u as g};

import{I as o}from"./press-component.5db9b2cc.js";import{i as t}from"./utils.f8cec38d.js";import{S as e}from"./support-passive.bc409298.js";function l(t,l,r,s=!1){o||t.addEventListener(l,r,!!e&&{capture:!1,passive:s})}function r(t,e,l){o||t.removeEventListener(e,l)}function s(o){return i(o).value||""}function i(o){var e,l,r;return t()?{value:(null==(e=null==o?void 0:o.target)?void 0:e.value)||"",scrollTop:null==(l=null==o?void 0:o.target)?void 0:l.scrollTop,scrollHeight:null==(r=null==o?void 0:o.target)?void 0:r.scrollHeight}:o.detail}export{s as a,r as b,i as g,l as o};

import{I as t}from"./add-unit.9de8b2f7.js";import{i as o}from"./utils.d8f13396.js";import{S as l}from"./support-passive.bc409298.js";function r(o,r,e,i=!1){t||o.addEventListener(r,e,!!l&&{capture:!1,passive:i})}function e(o,l,r){t||o.removeEventListener(l,r)}function i(t){return s(t).value||""}function s(t){var l,r,e;return o()?{value:(null==(l=null==t?void 0:t.target)?void 0:l.value)||"",scrollTop:null==(r=null==t?void 0:t.target)?void 0:r.scrollTop,scrollHeight:null==(e=null==t?void 0:t.target)?void 0:e.scrollHeight}:t.detail}export{i as a,e as b,s as g,r as o};

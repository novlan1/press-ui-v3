import{u as s}from"./utils.f8cec38d.js";import{_ as t,o as e,c as l,x as a,t as o,b as r,k as i,v as n}from"./index-26897e9f.js";const p=t({name:"PressCellGroup",props:{title:{type:String,default:""},border:{type:Boolean,default:!0},inset:{type:Boolean,default:!1},customClass:{type:String,default:""}},computed:{titleClass(){const{inset:t}=this;return s.bem2("cell-group__title",{inset:t})},groupClass(){const{inset:t,border:e,customClass:l}=this;return`${l} ${s.bem2("cell-group",{inset:t})} ${e?"press-hairline--top-bottom":""}`}}},[["render",function(s,t,p,u,d,c){return e(),l("div",{class:"press-cell-group-index"},[p.title?(e(),l("div",{key:0,class:a(c.titleClass)},o(p.title),3)):r("v-if",!0),i("div",{class:a(c.groupClass)},[n(s.$slots,"default",{},void 0,!0)],2)])}],["__scopeId","data-v-aa93fb71"]]);export{p as P};
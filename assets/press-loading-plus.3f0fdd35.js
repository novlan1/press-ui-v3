import{s as t,u as e}from"./utils.f8cec38d.js";import{a as s}from"./add-unit.e5b08e9d.js";import{d as r,a as i}from"./press-component.5db9b2cc.js";import{_ as a,o as n,c as o,k as l,x as d,y as p,F as c,r as y,b as u,v as S}from"./index-26897e9f.js";const f={spinnerStyle:function(e){return t({color:e.color,width:s(e.size),height:s(e.size)})},textStyle:function(e){return t({"font-size":s(e.textSize)})}};const m=a({name:"PressLoadingPlus",options:{...r},props:{...i,customStyle:{type:String,default:""},color:{type:String,default:""},vertical:{type:Boolean,default:!1},type:{type:String,default:"circular"},size:{type:String,default:""},textSize:{type:String,default:""}},emits:[],data:()=>({array12:Array.from({length:12})}),computed:{loadingClass(){const{vertical:t,customClass:s}=this;return`${s} ${e.bem2("loading",{vertical:t})}`},spinnerStyle(){const{color:t,size:e}=this;return f.spinnerStyle({color:t,size:e})},textStyle(){const{textSize:t}=this;return f.textStyle({textSize:t})}}},[["render",function(t,e,s,r,i,a){return n(),o("div",{class:"press-loading-index"},[l("div",{class:d(a.loadingClass),style:p(s.customStyle)},[l("div",{class:d("press-loading__spinner press-loading__spinner--"+s.type),style:p(a.spinnerStyle)},["spinner"===s.type?(n(!0),o(c,{key:0},y(i.array12,((t,e)=>(n(),o("div",{key:e,class:"press-loading__dot"})))),128)):u("v-if",!0)],6),l("div",{class:"press-loading__text",style:p(a.textStyle)},[S(t.$slots,"default",{},void 0,!0)],4)],6)])}],["__scopeId","data-v-e9007a58"]]);export{m as P};

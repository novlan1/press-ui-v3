import{P as e}from"./press-loading-plus.d5f0d0fb.js";import{u as o}from"./utils.527a09c0.js";import{s as t}from"./style.0f94ff97.js";import{a}from"./add-unit.9c7267ae.js";import{d as i,a as s}from"./press-component.d8ea5855.js";import{_ as l,o as c,c as n,e as r,h as d,l as u,n as h,p,q as C,j as v}from"./index-38a6aa88.js";const m={rootStyle:function(e){const o=e.checked===e.activeValue?e.activeColor:e.inactiveColor;return t({"font-size":a(e.size),"background-color":o})},loadingColor:function(e){return e.checked===e.activeValue?e.activeColor||"#1989fa":e.inactiveColor||"#969799"}};const f=l({name:"PressSwitch",options:{...i,styleIsolation:"shared"},components:{PressLoading:e},field:!0,props:{open:{type:[Boolean,null],default:null},checked:{type:Boolean,default:!1},loading:Boolean,disabled:Boolean,activeColor:{type:String,default:""},inactiveColor:{type:String,default:""},size:{type:String,default:"30"},activeValue:{type:Boolean,default:!0},inactiveValue:{type:Boolean,default:!1},nodeClass:{type:String,default:""},...s},computed:{realChecked(){const{open:e,checked:o}=this;return"boolean"==typeof e?e:o},switchClass(){const{realChecked:e,activeValue:t,disabled:a,customClass:i}=this;return`${o.bem2("switch",{on:e===t,disabled:a})} ${i}`},switchStyle(){const{size:e,realChecked:o,activeColor:t,inactiveColor:a,activeValue:i}=this;return m.rootStyle({size:e,checked:o,activeColor:t,inactiveColor:a,activeValue:i})},loadingColor(){const{realChecked:e,activeColor:o,inactiveColor:t,activeValue:a}=this;return m.loadingColor({checked:e,activeColor:o,inactiveColor:t,activeValue:a})}},methods:{onClick(){const{activeValue:e,inactiveValue:o,disabled:t,loading:a}=this,i=this.realChecked===e,s=i?o:e;this.$emit("click",i),t||a||(this.$emit("input",s),this.$emit("change",s),this.$emit("onSwitchChange",s))}}},[["render",function(e,o,t,a,i,s){const l=v("press-loading");return c(),n("div",{class:h(s.switchClass),style:p(s.switchStyle),onClick:o[0]||(o[0]=C(((...e)=>s.onClick&&s.onClick(...e)),["stop"]))},[r("div",{class:h(["press-switch__node",t.nodeClass])},[t.loading?(c(),d(l,{key:0,color:s.loadingColor,"custom-class":"press-switch__loading"},null,8,["color"])):u("v-if",!0)],2)],6)}],["__scopeId","data-v-b135ab23"]]);export{f as P};

import{s as t,u as s}from"./utils.f8cec38d.js";import{a as o}from"./add-unit.e5b08e9d.js";import{d as e,a as r}from"./press-component.5db9b2cc.js";import{C as a}from"./relation.25345683.js";import{P as i}from"./parent-map.a476e3d9.js";import{_ as p,o as u,c as m,v as n,x as f,y as d}from"./index-26897e9f.js";const l={rootStyle:function(s){return s.gutter?t({"padding-right":o(s.gutter/2),"padding-left":o(s.gutter/2)}):""}};const c=p({name:"PressCol",options:{...e,styleIsolation:"shared"},mixins:[a(i)],props:{span:{type:Number,default:0},offset:{type:Number,default:0},...r},emits:[],data:()=>({utils:s,computed:l,gutter:0})},[["render",function(t,s,o,e,r,a){return u(),m("div",{class:f([t.customClass,r.utils.bem2("col",[o.span]),o.offset?`press-col--offset-${o.offset}`:""]),style:d(r.computed.rootStyle({gutter:r.gutter}))},[n(t.$slots,"default",{},void 0,!0)],6)}],["__scopeId","data-v-5628830f"]]);export{c as P};
import{s as t}from"./style.0f94ff97.js";import{a as s}from"./add-unit.62ceb573.js";import{d as e,a as r}from"./press-component.6d1ba0d0.js";import{P as o}from"./relation.8b10893c.js";import{P as a}from"./parent-map.b443f4cc.js";import{_ as i,o as m,c as n,r as u,n as d,j as p}from"./index-64b5aeb5.js";const l={rootStyle:function(e){return e.gutter?t({"margin-right":s(-e.gutter/2),"margin-left":s(-e.gutter/2)}):""}};const c=i({name:"PressRow",options:{...e,styleIsolation:"shared"},mixins:[o(a)],props:{gutter:{type:Number,default:0},...r},emits:[],data:()=>({computed:l}),watch:{gutter:{handler(){this.setGutter()},immediate:!0}},created(){this.children=[]},mounted(){this.setGutter()},methods:{setGutter(){this.children&&this.children.forEach((t=>{t.gutter=this.gutter}))}}},[["render",function(t,s,e,r,o,a){return m(),n("div",{class:d(["press-row",t.customClass]),style:p(o.computed.rootStyle({gutter:e.gutter}))},[u(t.$slots,"default",{},void 0,!0)],6)}],["__scopeId","data-v-747ea2ba"]]);export{c as P};

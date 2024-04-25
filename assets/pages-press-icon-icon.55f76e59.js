import{P as s}from"./press-card.c0113847.js";import{P as e}from"./press-icon.2c3f3aa5.js";import{_ as o,C as i,o as t,c,F as n,g as r,I as a,B as d,d as l,w as p,k as m,e as u,t as h,a5 as f}from"./index-7b185b18.js";import{P as y}from"./handler.c9881c94.js";import{C as b}from"./clipboard-mixin.bfaf7d40.js";import"./color.3a05f6e0.js";import"./index.21924a3a.js";const I={empty:{name:"empty",unicode:"\\e03f"}};const C=o({i18n:{"zh-CN":{copied:"复制成功"},"en-US":{copied:"Copied"}},components:{PressCard:s,PressIconMusic:o({name:"PressIconMusic",props:{width:{type:String,default:"40px"},height:{type:String,default:"50px"},number:{type:Number,default:3},color:{type:String,default:"#2979ff"}},emits:[],data:()=>({}),computed:{barList(){return Array.from({length:this.number})},rootStyle(){return i([{width:this.width,height:this.height}])},barStyle(){const{width:s,number:e,color:o}=this;return i([{backgroundColor:o,width:`calc(${s} / ${+e+1})`}])}},methods:{}},[["render",function(s,e,o,i,l,p){return t(),c("div",{class:"press-icon-music",style:a(p.rootStyle)},[(t(!0),c(n,null,r(p.barList,((s,e)=>(t(),c("div",{key:e,style:a(p.barStyle),class:d(["press-icon-music__bar",`press-icon-music__bar-${e}`])},null,6)))),128))],4)}],["__scopeId","data-v-8b3ff315"]]),PressIcon:e,PressNotify:y},mixins:[b],data:()=>({pressIconList:Object.keys(I).map((s=>({name:s,unicode:I[s].unicode}))),activeIndex:-1,checked:!1}),mounted(){},methods:{switchActive(s,e){const o=`<press-icon name="${e.name}" />`;this.copyIconTag(o)},onCopyIconMusic(...s){const e=`<press-icon-music ${s.map((s=>{const{0:e,1:o}=s;return`${e}="${o}"`})).join(" ")}/>`;this.copyIconTag(e)}}},[["render",function(s,e,o,i,d,y){const b=m("press-card"),I=m("press-icon"),C=m("demo-block"),v=m("PressIconMusic");return t(),c("div",{class:"demo-wrap"},[l(b,{"is-shadow":!1,"is-full":""},{default:p((()=>[u("span",{class:"uni-h6"}," 仅保留 empty 图标，其他图标请使用 press-icon-plus。 ")])),_:1}),l(C,{title:"图标"},{default:p((()=>[u("div",{class:"icon-content"},[(t(!0),c(n,null,r(d.pressIconList,((s,e)=>(t(),c("div",{key:e,class:"icon-item",onClick:o=>y.switchActive(e,s)},[l(I,{type:s.name,color:d.activeIndex===e?"#007aff":"#5e6d82",size:"30"},null,8,["type","color"]),u("span",{style:a({color:d.activeIndex===e?"#007aff":"#5e6d82"}),class:"uni-mt-5 uni-subtitle"},h(d.checked?s.unicode:s.name),5)],8,["onClick"])))),128))])])),_:1}),l(C,{title:"icon-music"},{default:p((()=>[u("div",{class:"icon-content flex-end"},[u("div",{class:"icon-item",onClick:e[0]||(e[0]=f((s=>y.onCopyIconMusic()),["stop"]))},[l(v)]),u("div",{class:"icon-item",onClick:e[1]||(e[1]=f((()=>y.onCopyIconMusic(["color","rgb(94, 109, 130)"])),["stop"]))},[l(v,{color:"rgb(94, 109, 130)"})]),u("div",{class:"icon-item",onClick:e[2]||(e[2]=f((s=>y.onCopyIconMusic(["number","5"])),["stop"]))},[l(v,{number:5})]),u("div",{class:"icon-item",onClick:e[3]||(e[3]=f((s=>y.onCopyIconMusic(["width","60px"],["height","60px"])),["stop"]))},[l(v,{width:"60px",height:"60px"})])])])),_:1})])}],["__scopeId","data-v-cdcebec9"]]);export{C as default};
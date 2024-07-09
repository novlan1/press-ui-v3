import{u as t}from"./utils.f8cec38d.js";import{b as e}from"./rect.d9533e17.js";import{d as a,a as i}from"./press-component.fd531b70.js";import{P as o,C as s}from"./relation.25345683.js";import{j as n}from"./parent-map.b443f4cc.js";import{_ as c,o as l,c as r,k as d,m as h,n as m,p as f,b as u,a as p,F as g,j as v,d as b,w as C,l as y,t as _}from"./index-7a15811b.js";import{P as x}from"./press-icon-plus.eb48dd73.js";import{P as k}from"./press-info.b7012b43.js";import"./add-unit.e5b08e9d.js";import"./version.2049afb8.js";const I=c({i18n:{"zh-CN":{badge:"徽标提示",customIcon:"自定义图标",customColor:"自定义颜色",matchByName:"通过名称匹配",switchEvent:"监听切换事件",selectTip:"你切换到了"},"en-US":{badge:"Show Badge",customIcon:"Custom Icon",customColor:"Custom Color",matchByName:"Match by name",switchEvent:"Change Event",selectTip:"You select "}},components:{PressTabbar:c({name:"PressTabbar",options:{...a,styleIsolation:"shared"},mixins:[o(n)],props:{active:{type:[String,Number],default:""},activeColor:{type:String,default:""},inactiveColor:{type:String,default:""},fixed:{type:Boolean,default:!0},placeholder:{type:Boolean},border:{type:Boolean,default:!0},zIndex:{type:Number,default:1},safeAreaInsetBottom:{type:Boolean,default:!0},...i},emits:["change"],data:()=>({height:50,utils:t}),watch:{active:{handler(){this.updateChildren()}},activeColor:{handler(){this.updateChildren()}},inactiveColor:{handler(){this.updateChildren()}},fixed:{handler(){this.setHeight()}},placeholder:{handler(){this.setHeight()}}},created(){this.children=[]},methods:{updateChildren(){const{children:t}=this;Array.isArray(t)&&t.length&&t.forEach((t=>t.updateFromParent()))},setHeight(){this.fixed&&this.placeholder&&this.$nextTick((()=>{e(this,".press-tabbar").then((t=>{this.height=t.height}))}))}}},[["render",function(t,e,a,i,o,s){return l(),r("div",null,[d("div",{class:m([a.border?"press-hairline--top-bottom":"",o.utils.bem2("tabbar",{fixed:a.fixed,safe:a.safeAreaInsetBottom}),t.customClass]),style:f(a.zIndex?"z-index: "+a.zIndex:"")},[h(t.$slots,"default",{},void 0,!0)],6),a.fixed&&a.placeholder?(l(),r("div",{key:0,style:f("height: "+o.height+"px;")},null,4)):u("v-if",!0)])}],["__scopeId","data-v-43bad6a9"]]),PressTabbarItem:c({name:"PressTabbarItem",options:{...a,styleIsolation:"shared"},components:{PressIconPlus:x,PressInfo:k},mixins:[s(n)],props:{info:{type:[String,Number],default:""},name:{type:[String,Number],default:""},icon:{type:String,default:""},dot:Boolean,iconPrefix:{type:String,default:"press-icon-plus"},...i},emits:["click"],data:()=>({utils:t,active:!1,activeColor:"",inactiveColor:""}),mounted(){this.updateFromParent()},methods:{setData(t){Object.keys(t).forEach((e=>{this[e]=t[e]}))},onClick(){const t=this[n];if(t){const e=t.children.indexOf(this),a=this.name||e;a!==this.active&&t.$emit("change",a)}this.$emit("click")},updateFromParent(){const t=this[n];if(!t)return;const e=t.children.indexOf(this),a=t,i=(this.name||e)===a.active,o={};i!==this.active&&(o.active=i),a.activeColor!==this.activeColor&&(o.activeColor=a.activeColor),a.inactiveColor!==this.inactiveColor&&(o.inactiveColor=a.inactiveColor),Object.keys(o).length>0&&this.setData(o)}}},[["render",function(t,e,a,i,o,s){const n=b("press-icon-plus"),c=b("press-info");return l(),r("div",{class:"press-tabbar-item-index"},[d("div",{class:m([o.utils.bem2("tabbar-item",{active:o.active}),t.customClass]),style:f("color: "+(o.active?o.activeColor:o.inactiveColor)),onClick:e[0]||(e[0]=(...t)=>s.onClick&&s.onClick(...t))},[d("div",{class:"press-tabbar-item__icon"},[a.icon?(l(),p(n,{key:0,name:a.icon,"class-prefix":a.iconPrefix,"custom-class":"press-tabbar-item__icon__inner"},null,8,["name","class-prefix"])):(l(),r(g,{key:1},[o.active?h(t.$slots,"icon-active",{key:0},void 0,!0):h(t.$slots,"icon",{key:1},void 0,!0)],64)),v(c,{dot:a.dot,info:a.info,"custom-class":"press-tabbar-item__info"},null,8,["dot","info"])]),d("div",{class:"press-tabbar-item__text"},[h(t.$slots,"default",{},void 0,!0)])],6)])}],["__scopeId","data-v-1017f88f"]])},data:()=>({active:0,activeName:"home",sectionStyle:"margin: 0;",icon:{normal:"https://mike-1255355338.cos.ap-guangzhou.myqcloud.com/press%2Fimg%2Fuser-inactive.png",active:"https://mike-1255355338.cos.ap-guangzhou.myqcloud.com/press%2Fimg%2Fuser-active.png"}}),methods:{onChange(t){console.log("val",t),this.active=t},onChangeName(t){console.log("val",t),this.activeName=t}}},[["render",function(t,e,a,i,o,s){const n=b("press-tabbar-item"),c=b("press-tabbar"),h=b("demo-block");return l(),r("div",{class:"demo-wrap"},[v(h,{title:t.t("basicUsage"),"section-style":o.sectionStyle},{default:C((()=>[v(c,{fixed:!1,active:o.active,"safe-area-inset-bottom":!1,onChange:s.onChange},{default:C((()=>[v(n,{icon:"home-o"},{default:C((()=>[y(_(t.t("tag")),1)])),_:1}),v(n,{icon:"search"},{default:C((()=>[y(_(t.t("tag")),1)])),_:1}),v(n,{icon:"friends-o"},{default:C((()=>[y(_(t.t("tag")),1)])),_:1}),v(n,{icon:"setting-o"},{default:C((()=>[y(_(t.t("tag")),1)])),_:1})])),_:1},8,["active","onChange"])])),_:1},8,["title","section-style"]),v(h,{title:t.t("matchByName"),"section-style":o.sectionStyle},{default:C((()=>[v(c,{active:o.activeName,fixed:!1,"safe-area-inset-bottom":!1,onChange:s.onChangeName},{default:C((()=>[v(n,{icon:"home-o",name:"home"},{default:C((()=>[y(_(t.t("tag")),1)])),_:1}),v(n,{icon:"search",name:"search"},{default:C((()=>[y(_(t.t("tag")),1)])),_:1}),v(n,{icon:"friends-o",name:"friends"},{default:C((()=>[y(_(t.t("tag")),1)])),_:1}),v(n,{icon:"setting-o",name:"setting"},{default:C((()=>[y(_(t.t("tag")),1)])),_:1})])),_:1},8,["active","onChange"])])),_:1},8,["title","section-style"]),v(h,{title:t.t("badge"),"section-style":o.sectionStyle},{default:C((()=>[v(c,{active:o.active,fixed:!1,"safe-area-inset-bottom":!1,onChange:s.onChange},{default:C((()=>[v(n,{icon:"home-o"},{default:C((()=>[y(_(t.t("tag")),1)])),_:1}),v(n,{icon:"search",dot:""},{default:C((()=>[y(_(t.t("tag")),1)])),_:1}),v(n,{icon:"friends-o",info:"5"},{default:C((()=>[y(_(t.t("tag")),1)])),_:1}),v(n,{icon:"setting-o",info:"20"},{default:C((()=>[y(_(t.t("tag")),1)])),_:1})])),_:1},8,["active","onChange"])])),_:1},8,["title","section-style"]),v(h,{title:t.t("customIcon"),"section-style":o.sectionStyle},{default:C((()=>[v(c,{fixed:!1,active:o.active,"safe-area-inset-bottom":!1,onChange:s.onChange},{default:C((()=>[v(n,{info:"3"},{icon:C((()=>[d("img",{src:o.icon.normal,mode:"aspectFit",style:{width:"23px",height:"18px"}},null,8,["src"])])),"icon-active":C((()=>[d("img",{src:o.icon.active,mode:"aspectFit",style:{width:"23px",height:"18px"}},null,8,["src"])])),default:C((()=>[y(" "+_(t.t("custom")),1)])),_:1}),v(n,{icon:"search"},{default:C((()=>[y(_(t.t("tag")),1)])),_:1}),v(n,{icon:"setting-o"},{default:C((()=>[y(_(t.t("tag")),1)])),_:1})])),_:1},8,["active","onChange"])])),_:1},8,["title","section-style"]),v(h,{title:t.t("customColor"),"section-style":o.sectionStyle},{default:C((()=>[v(c,{active:o.active,fixed:!1,"active-color":"#07c160","inactive-color":"#000","safe-area-inset-bottom":!1,onChange:s.onChange},{default:C((()=>[v(n,{icon:"home-o"},{default:C((()=>[y(_(t.t("tag"))+"A ",1)])),_:1}),v(n,{icon:"search"},{default:C((()=>[y(_(t.t("tag"))+"B ",1)])),_:1}),v(n,{icon:"friends-o"},{default:C((()=>[y(_(t.t("tag"))+"C ",1)])),_:1}),v(n,{icon:"setting-o"},{default:C((()=>[y(_(t.t("tag"))+"D ",1)])),_:1})])),_:1},8,["active","onChange"])])),_:1},8,["title","section-style"])])}]]);export{I as default};

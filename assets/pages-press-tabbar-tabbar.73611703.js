import{G as e,H as t,J as a,af as i,_ as o,o as s,c as n,e as c,z as l,B as r,I as d,j as h,y as m,ao as f,h as u,F as g,d as v,k as p,w as C,v as b,t as y}from"./index-ed1f827b.js";import{P as _,C as x}from"./relation.25345683.js";import{j as k}from"./parent-map.a476e3d9.js";const I=o({i18n:{"zh-CN":{badge:"徽标提示",customIcon:"自定义图标",customColor:"自定义颜色",matchByName:"通过名称匹配",switchEvent:"监听切换事件",selectTip:"你切换到了"},"en-US":{badge:"Show Badge",customIcon:"Custom Icon",customColor:"Custom Color",matchByName:"Match by name",switchEvent:"Change Event",selectTip:"You select "}},components:{PressTabbar:o({name:"PressTabbar",options:{...e,styleIsolation:"shared"},mixins:[_(k)],props:{active:{type:[String,Number],default:""},activeColor:{type:String,default:""},inactiveColor:{type:String,default:""},fixed:{type:Boolean,default:!0},placeholder:{type:Boolean},border:{type:Boolean,default:!0},zIndex:{type:Number,default:1},safeAreaInsetBottom:{type:Boolean,default:!0},...t},emits:["change"],data:()=>({height:50,utils:a}),watch:{active:{handler(){this.updateChildren()}},activeColor:{handler(){this.updateChildren()}},inactiveColor:{handler(){this.updateChildren()}},fixed:{handler(){this.setHeight()}},placeholder:{handler(){this.setHeight()}}},created(){this.children=[]},methods:{updateChildren(){const{children:e}=this;Array.isArray(e)&&e.length&&e.forEach((e=>e.updateFromParent()))},setHeight(){this.fixed&&this.placeholder&&this.$nextTick((()=>{i(this,".press-tabbar").then((e=>{this.height=e.height}))}))}}},[["render",function(e,t,a,i,o,m){return s(),n("div",null,[c("div",{class:r([a.border?"press-hairline--top-bottom":"",o.utils.bem2("tabbar",{fixed:a.fixed,safe:a.safeAreaInsetBottom}),e.customClass]),style:d(a.zIndex?"z-index: "+a.zIndex:"")},[l(e.$slots,"default",{},void 0,!0)],6),a.fixed&&a.placeholder?(s(),n("div",{key:0,style:d("height: "+o.height+"px;")},null,4)):h("v-if",!0)])}],["__scopeId","data-v-c48abc21"]]),PressTabbarItem:o({name:"PressTabbarItem",options:{...e,styleIsolation:"shared"},components:{PressIconPlus:m,PressInfo:f},mixins:[x(k)],props:{info:{type:[String,Number],default:""},name:{type:[String,Number],default:""},icon:{type:String,default:""},dot:Boolean,iconPrefix:{type:String,default:"press-icon-plus"},...t},emits:["click"],data:()=>({utils:a,active:!1,activeColor:"",inactiveColor:""}),mounted(){this.updateFromParent()},methods:{setData(e){Object.keys(e).forEach((t=>{this[t]=e[t]}))},onClick(){const e=this[k];if(e){const t=e.children.indexOf(this),a=this.name||t;a!==this.active&&e.$emit("change",a)}this.$emit("click")},updateFromParent(){const e=this[k];if(!e)return;const t=e.children.indexOf(this),a=e,i=(this.name||t)===a.active,o={};i!==this.active&&(o.active=i),a.activeColor!==this.activeColor&&(o.activeColor=a.activeColor),a.inactiveColor!==this.inactiveColor&&(o.inactiveColor=a.inactiveColor),Object.keys(o).length>0&&this.setData(o)}}},[["render",function(e,t,a,i,o,h){const m=p("press-icon-plus"),f=p("press-info");return s(),n("div",{class:"press-tabbar-item-index"},[c("div",{class:r([o.utils.bem2("tabbar-item",{active:o.active}),e.customClass]),style:d("color: "+(o.active?o.activeColor:o.inactiveColor)),onClick:t[0]||(t[0]=(...e)=>h.onClick&&h.onClick(...e))},[c("div",{class:"press-tabbar-item__icon"},[a.icon?(s(),u(m,{key:0,name:a.icon,"class-prefix":a.iconPrefix,"custom-class":"press-tabbar-item__icon__inner"},null,8,["name","class-prefix"])):(s(),n(g,{key:1},[o.active?l(e.$slots,"icon-active",{key:0},void 0,!0):l(e.$slots,"icon",{key:1},void 0,!0)],64)),v(f,{dot:a.dot,info:a.info,"custom-class":"press-tabbar-item__info"},null,8,["dot","info"])]),c("div",{class:"press-tabbar-item__text"},[l(e.$slots,"default",{},void 0,!0)])],6)])}],["__scopeId","data-v-fc470674"]])},data:()=>({active:0,activeName:"home",sectionStyle:"margin: 0;",icon:{normal:"https://mike-1255355338.cos.ap-guangzhou.myqcloud.com/press%2Fimg%2Fuser-inactive.png",active:"https://mike-1255355338.cos.ap-guangzhou.myqcloud.com/press%2Fimg%2Fuser-active.png"}}),methods:{onChange(e){console.log("val",e),this.active=e},onChangeName(e){console.log("val",e),this.activeName=e}}},[["render",function(e,t,a,i,o,l){const r=p("press-tabbar-item"),d=p("press-tabbar"),h=p("demo-block");return s(),n("div",{class:"demo-wrap"},[v(h,{title:e.t("basicUsage"),"section-style":o.sectionStyle},{default:C((()=>[v(d,{fixed:!1,active:o.active,"safe-area-inset-bottom":!1,onChange:l.onChange},{default:C((()=>[v(r,{icon:"home-o"},{default:C((()=>[b(y(e.t("tag")),1)])),_:1}),v(r,{icon:"search"},{default:C((()=>[b(y(e.t("tag")),1)])),_:1}),v(r,{icon:"friends-o"},{default:C((()=>[b(y(e.t("tag")),1)])),_:1}),v(r,{icon:"setting-o"},{default:C((()=>[b(y(e.t("tag")),1)])),_:1})])),_:1},8,["active","onChange"])])),_:1},8,["title","section-style"]),v(h,{title:e.t("matchByName"),"section-style":o.sectionStyle},{default:C((()=>[v(d,{active:o.activeName,fixed:!1,"safe-area-inset-bottom":!1,onChange:l.onChangeName},{default:C((()=>[v(r,{icon:"home-o",name:"home"},{default:C((()=>[b(y(e.t("tag")),1)])),_:1}),v(r,{icon:"search",name:"search"},{default:C((()=>[b(y(e.t("tag")),1)])),_:1}),v(r,{icon:"friends-o",name:"friends"},{default:C((()=>[b(y(e.t("tag")),1)])),_:1}),v(r,{icon:"setting-o",name:"setting"},{default:C((()=>[b(y(e.t("tag")),1)])),_:1})])),_:1},8,["active","onChange"])])),_:1},8,["title","section-style"]),v(h,{title:e.t("badge"),"section-style":o.sectionStyle},{default:C((()=>[v(d,{active:o.active,fixed:!1,"safe-area-inset-bottom":!1,onChange:l.onChange},{default:C((()=>[v(r,{icon:"home-o"},{default:C((()=>[b(y(e.t("tag")),1)])),_:1}),v(r,{icon:"search",dot:""},{default:C((()=>[b(y(e.t("tag")),1)])),_:1}),v(r,{icon:"friends-o",info:"5"},{default:C((()=>[b(y(e.t("tag")),1)])),_:1}),v(r,{icon:"setting-o",info:"20"},{default:C((()=>[b(y(e.t("tag")),1)])),_:1})])),_:1},8,["active","onChange"])])),_:1},8,["title","section-style"]),v(h,{title:e.t("customIcon"),"section-style":o.sectionStyle},{default:C((()=>[v(d,{fixed:!1,active:o.active,"safe-area-inset-bottom":!1,onChange:l.onChange},{default:C((()=>[v(r,{info:"3"},{icon:C((()=>[c("img",{src:o.icon.normal,mode:"aspectFit",style:{width:"23px",height:"18px"}},null,8,["src"])])),"icon-active":C((()=>[c("img",{src:o.icon.active,mode:"aspectFit",style:{width:"23px",height:"18px"}},null,8,["src"])])),default:C((()=>[b(" "+y(e.t("custom")),1)])),_:1}),v(r,{icon:"search"},{default:C((()=>[b(y(e.t("tag")),1)])),_:1}),v(r,{icon:"setting-o"},{default:C((()=>[b(y(e.t("tag")),1)])),_:1})])),_:1},8,["active","onChange"])])),_:1},8,["title","section-style"]),v(h,{title:e.t("customColor"),"section-style":o.sectionStyle},{default:C((()=>[v(d,{active:o.active,fixed:!1,"active-color":"#07c160","inactive-color":"#000","safe-area-inset-bottom":!1,onChange:l.onChange},{default:C((()=>[v(r,{icon:"home-o"},{default:C((()=>[b(y(e.t("tag"))+"A ",1)])),_:1}),v(r,{icon:"search"},{default:C((()=>[b(y(e.t("tag"))+"B ",1)])),_:1}),v(r,{icon:"friends-o"},{default:C((()=>[b(y(e.t("tag"))+"C ",1)])),_:1}),v(r,{icon:"setting-o"},{default:C((()=>[b(y(e.t("tag"))+"D ",1)])),_:1})])),_:1},8,["active","onChange"])])),_:1},8,["title","section-style"])])}]]);export{I as default};
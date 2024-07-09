import{s as t,u as e}from"./utils.f8cec38d.js";import{a as o}from"./add-unit.e5b08e9d.js";import{d as i,a as r}from"./press-component.fd531b70.js";import{_ as s,o as n,c as l,k as d,m as a,n as c,p as u,j as f,w as p,d as m,l as x,t as S}from"./index-7a15811b.js";const h={rootStyle:function(e){return t([{"border-color":e.borderColor,color:e.textColor,"font-size":o(e.fontSize)},e.customStyle])}};const C=s({i18n:{"zh-CN":{text:"文本",dashed:"虚线",withText:"展示文本",contentPosition:"内容位置",customStyle:"自定义样式",customProps:"自定义属性",hairline:"使用 hairline",textColor:"文本颜色",borderColor:"border 颜色",textSize:"字体大小"},"en-US":{text:"Text",dashed:"Dashed",withText:"With Text",contentPosition:"Content Position",customStyle:"Custom Style",customProps:"Custom Props",hairline:"Hairline",textColor:"Text Color",borderColor:"Border Color",textSize:"Text Size"}},components:{PressDivider:s({name:"PressDivider",options:{...i},props:{dashed:Boolean,hairline:Boolean,contentPosition:{type:String,default:""},fontSize:{type:String,default:""},borderColor:{type:String,default:""},textColor:{type:String,default:""},customStyle:{type:String,default:""},...r},computed:{dividerClass(){const{dashed:t,hairline:o,contentPosition:i,customClass:r}=this;return`${r} ${e.bem2("divider",[{dashed:t,hairline:o},i])}`},dividerStyle(){const{borderColor:t,textColor:e,fontSize:o,customStyle:i}=this;return h.rootStyle({borderColor:t,textColor:e,fontSize:o,customStyle:i})}}},[["render",function(t,e,o,i,r,s){return n(),l("div",{class:"press-divider-index"},[d("div",{class:c(s.dividerClass),style:u(s.dividerStyle)},[a(t.$slots,"default",{},void 0,!0)],6)])}],["__scopeId","data-v-bc8c02ab"]])},data:()=>({}),methods:{}},[["render",function(t,e,o,i,r,s){const d=m("press-divider"),a=m("demo-block");return n(),l("div",{class:"demo-wrap"},[f(a,{title:t.t("basicUsage")},{default:p((()=>[f(d)])),_:1},8,["title"]),f(a,{title:t.t("hairline")},{default:p((()=>[f(d,{hairline:""})])),_:1},8,["title"]),f(a,{title:t.t("dashed")},{default:p((()=>[f(d,{dashed:""})])),_:1},8,["title"]),f(a,{title:t.t("contentPosition")},{default:p((()=>[f(d,{"content-position":"center"},{default:p((()=>[x(S(t.t("text")),1)])),_:1}),f(d,{"content-position":"left"},{default:p((()=>[x(S(t.t("text")),1)])),_:1}),f(d,{"content-position":"right"},{default:p((()=>[x(S(t.t("text")),1)])),_:1})])),_:1},8,["title"]),f(a,{title:t.t("customProps")},{default:p((()=>[f(d,{"content-position":"center","text-color":"#1989fa"},{default:p((()=>[x(S(t.t("textColor")),1)])),_:1}),f(d,{"content-position":"center","border-color":"#1989fa"},{default:p((()=>[x(S(t.t("borderColor")),1)])),_:1}),f(d,{"content-position":"center","font-size":"18"},{default:p((()=>[x(S(t.t("textSize")),1)])),_:1})])),_:1},8,["title"]),f(a,{title:t.t("customStyle")},{default:p((()=>[f(d,{"content-position":"center","custom-style":"color: #1989fa; border-color: #1989fa; font-size: 18px;"},{default:p((()=>[x(S(t.t("text")),1)])),_:1})])),_:1},8,["title"])])}]]);export{C as default};

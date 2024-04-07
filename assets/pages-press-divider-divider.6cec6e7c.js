import{E as t,G as e,_ as o,H as i,I as r,K as s,o as n,c as l,e as d,A as a,C as c,J as u,d as f,w as p,l as x,x as S,t as h}from"./index-a6ed3ec5.js";const C={rootStyle:function(o){return t([{"border-color":o.borderColor,color:o.textColor,"font-size":e(o.fontSize)},o.customStyle])}};const m=o({i18n:{"zh-CN":{text:"文本",dashed:"虚线",withText:"展示文本",contentPosition:"内容位置",customStyle:"自定义样式",customProps:"自定义属性",hairline:"使用 hairline",textColor:"文本颜色",borderColor:"border 颜色",textSize:"字体大小"},"en-US":{text:"Text",dashed:"Dashed",withText:"With Text",contentPosition:"Content Position",customStyle:"Custom Style",customProps:"Custom Props",hairline:"Hairline",textColor:"Text Color",borderColor:"Border Color",textSize:"Text Size"}},components:{PressDivider:o({name:"PressDivider",options:{...i},props:{dashed:Boolean,hairline:Boolean,contentPosition:{type:String,default:""},fontSize:{type:String,default:""},borderColor:{type:String,default:""},textColor:{type:String,default:""},customStyle:{type:String,default:""},...r},computed:{dividerClass(){const{dashed:t,hairline:e,contentPosition:o,customClass:i}=this;return`${i} ${s.bem2("divider",[{dashed:t,hairline:e},o])}`},dividerStyle(){const{borderColor:t,textColor:e,fontSize:o,customStyle:i}=this;return C.rootStyle({borderColor:t,textColor:e,fontSize:o,customStyle:i})}}},[["render",function(t,e,o,i,r,s){return n(),l("div",{class:"press-divider-index"},[d("div",{class:c(s.dividerClass),style:u(s.dividerStyle)},[a(t.$slots,"default",{},void 0,!0)],6)])}],["__scopeId","data-v-f1a4e021"]])},data:()=>({}),methods:{}},[["render",function(t,e,o,i,r,s){const d=x("press-divider"),a=x("demo-block");return n(),l("div",{class:"demo-wrap"},[f(a,{title:t.t("basicUsage")},{default:p((()=>[f(d)])),_:1},8,["title"]),f(a,{title:t.t("hairline")},{default:p((()=>[f(d,{hairline:""})])),_:1},8,["title"]),f(a,{title:t.t("dashed")},{default:p((()=>[f(d,{dashed:""})])),_:1},8,["title"]),f(a,{title:t.t("contentPosition")},{default:p((()=>[f(d,{"content-position":"center"},{default:p((()=>[S(h(t.t("text")),1)])),_:1}),f(d,{"content-position":"left"},{default:p((()=>[S(h(t.t("text")),1)])),_:1}),f(d,{"content-position":"right"},{default:p((()=>[S(h(t.t("text")),1)])),_:1})])),_:1},8,["title"]),f(a,{title:t.t("customProps")},{default:p((()=>[f(d,{"content-position":"center","text-color":"#1989fa"},{default:p((()=>[S(h(t.t("textColor")),1)])),_:1}),f(d,{"content-position":"center","border-color":"#1989fa"},{default:p((()=>[S(h(t.t("borderColor")),1)])),_:1}),f(d,{"content-position":"center","font-size":"18"},{default:p((()=>[S(h(t.t("textSize")),1)])),_:1})])),_:1},8,["title"]),f(a,{title:t.t("customStyle")},{default:p((()=>[f(d,{"content-position":"center","custom-style":"color: #1989fa; border-color: #1989fa; font-size: 18px;"},{default:p((()=>[S(h(t.t("text")),1)])),_:1})])),_:1},8,["title"])])}]]);export{m as default};

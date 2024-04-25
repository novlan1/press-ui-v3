import{P as e}from"./press-image.ccb1350c.js";import{P as s}from"./press-col.06dd9383.js";import{_ as t,A as a,o as i,c as l,d as o,w as d,k as n,F as r,g as c,h as m,e as g,B as p,t as u}from"./index-7b185b18.js";import{P as h}from"./press-row.e9c3d7d7.js";import{I as f,i as w}from"./index.f8d48b2b.js";import"./relation.25345683.js";import"./parent-map.a476e3d9.js";const _=[[{mode:"aspectFit",titleClass:"image-title--gap",span:8},{mode:"aspectFill",titleClass:"image-title--gap",span:8},{mode:"center",titleClass:"",span:8}],[{mode:"widthFix",titleClass:"image-title--gap",span:8},{mode:"heightFix",titleClass:"image-title--long",span:16}]];const k=t({i18n:{"zh-CN":{error:"加载失败提示",loading:"加载中提示",defaultTip:"默认提示",customTip:"自定义提示",mode:"模式",round:"圆形"},"en-US":{error:"Error",loading:"Loading",defaultTip:"Default",customTip:"Custom",mode:"Mode",round:"Round"}},components:{PressCol:s,PressRow:h,PressImage:e,PressLoadingPlus:a,ImagePreview:f},data:()=>({src:"https://mike-1255355338.cos.ap-guangzhou.myqcloud.com/article/2023/10/own_mike_a17f94292a34e9f644.jpeg",MODE_LIST:_}),methods:{click(){console.log("[click]"),w({selector:"#imagePreviewRef",images:[this.src]}).then((()=>{}))},getIndex:(e,s)=>`${e}-${s}`}},[["render",function(e,s,t,a,h,f){const w=n("PressImage"),_=n("demo-block"),k=n("PressCol"),C=n("PressRow"),P=n("PressLoadingPlus"),x=n("ImagePreview");return i(),l("div",{class:"demo-wrap"},[o(_,{title:e.t("basicUsage")},{default:d((()=>[o(w,{"show-loading":!0,src:h.src,width:"100",height:"100",onClick:f.click},null,8,["src","onClick"])])),_:1},8,["title"]),o(_,{title:e.t("mode")},{default:d((()=>[(i(!0),l(r,null,c(h.MODE_LIST,((e,s)=>(i(),m(C,{key:f.getIndex(s,"row")},{default:d((()=>[(i(!0),l(r,null,c(e,((e,s)=>(i(),m(k,{key:f.getIndex(s,"col"),span:e.span},{default:d((()=>[g("div",{class:"demo-grid"},[o(w,{"show-loading":!0,width:"100",height:"100",src:h.src,mode:e.mode,onClick:f.click},null,8,["src","mode","onClick"]),g("span",{class:p(["image-title",e.titleClass])},u(e.mode),3)])])),_:2},1032,["span"])))),128))])),_:2},1024)))),128))])),_:1},8,["title"]),o(_,{title:e.t("round")},{default:d((()=>[(i(!0),l(r,null,c(h.MODE_LIST,((e,s)=>(i(),m(C,{key:f.getIndex(s,"row")},{default:d((()=>[(i(!0),l(r,null,c(e,((e,s)=>(i(),m(k,{key:f.getIndex(s,"col"),span:e.span},{default:d((()=>[g("div",{class:"demo-grid"},[o(w,{"show-loading":!0,width:"100",height:"100",src:h.src,round:"",mode:e.mode,onClick:f.click},null,8,["src","mode","onClick"]),g("span",{class:p(["image-title",e.titleClass])},u(e.mode),3)])])),_:2},1032,["span"])))),128))])),_:2},1024)))),128))])),_:1},8,["title"]),o(_,{title:e.t("loading")},{default:d((()=>[o(C,null,{default:d((()=>[o(k,{span:8},{default:d((()=>[g("div",{class:"demo-grid"},[o(w,{"show-loading":!0,width:"100",height:"100"}),g("span",{class:"image-title"},u(e.t("defaultTip")),1)])])),_:1}),o(k,{span:8},{default:d((()=>[g("div",{class:"demo-grid"},[o(w,{"show-loading":!0,width:"100",height:"100"},{loading:d((()=>[o(P,{type:"spinner",size:"20"})])),_:1}),g("span",{class:"image-title"},u(e.t("customTip")),1)])])),_:1})])),_:1})])),_:1},8,["title"]),o(_,{title:e.t("error")},{default:d((()=>[o(C,null,{default:d((()=>[o(k,{span:8},{default:d((()=>[g("div",{class:"demo-grid"},[o(w,{"show-loading":!0,src:"src",width:"100px",height:"100px"}),g("span",{class:"image-title"},u(e.t("defaultTip")),1)])])),_:1}),o(k,{span:8},{default:d((()=>[g("div",{class:"demo-grid"},[o(w,{"show-loading":!0,src:"src",width:"100px",height:"100px"},{error:d((()=>[g("span",{style:{"font-size":"14px"}},"加载失败")])),_:1}),g("span",{class:"image-title"},u(e.t("customTip")),1)])])),_:1})])),_:1})])),_:1},8,["title"]),o(x,{ref:"imagePreviewRef",mode:"functional"},null,512)])}],["__scopeId","data-v-4f0a74c8"]]);export{k as default};
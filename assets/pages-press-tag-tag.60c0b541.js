import{P as t}from"./press-tag.8d501b3b.js";import{_ as e,o as s,c as a,F as o,p as l,h as i,w as r,e as d,q as m,v as p,t as c,i as u,f as n}from"./index-66fd861e.js";import"./press-icon-plus.a1094e70.js";import"./style.0f94ff97.js";import"./add-unit.9de8b2f7.js";import"./press-info.8563e54c.js";import"./utils.d8f13396.js";import"./press-component.573dfcec.js";const y=e({i18n:{"zh-CN":{type:"类型",mark:"标记样式",plain:"空心样式",round:"圆角样式",tagStyle:"样式风格",closeable:"可关闭标签",smallSize:"小号标签",largeSize:"大号标签",mediumSize:"中号标签",customSize:"标签大小",customColor:"自定义颜色",customBgColor:"背景颜色",customTextColor:"文字颜色",customPlainColor:"空心颜色"},"en-US":{mark:"Mark style",plain:"Plain style",round:"Round style",tagStyle:"Tag Style",closeable:"Closeable",smallSize:"Small Size",largeSize:"Large Size",mediumSize:"Medium Size",customColor:"Custom Color",customSize:"Custom Size",customBgColor:"Background Color",customTextColor:"Text Color",customPlainColor:"Plain Color"}},components:{PressTag:t},data(){return{list:[{type:"primary"},{type:"success"},{type:"danger"},{type:"warning"}],demoList:[{key:"basic",title:this.t("basicUsage")},{key:"plain",title:this.t("plain"),plain:!0},{key:"round",title:this.t("round"),round:!0},{key:"mark",title:this.t("mark"),mark:!0}],show:{primary:!0,success:!0}}},methods:{onClose(t){console.log("type",t),this.show[t]=!1}}},[["render",function(t,e,y,g,f,C){const k=d("press-tag"),S=d("demo-block");return s(),a("div",{class:"demo-wrap"},[(s(!0),a(o,null,l(f.demoList,(e=>(s(),m(S,{key:e.key,title:e.title},{default:r((()=>[(s(!0),a(o,null,l(f.list,((o,l)=>(s(),a("div",{key:l,class:"demo-part"},[i(k,{type:o.type,plain:e.plain||!1,round:e.round||!1,mark:e.mark||!1},{default:r((()=>[p(c(t.t("tag")),1)])),_:2},1032,["type","plain","round","mark"])])))),128))])),_:2},1032,["title"])))),128)),i(S,{title:t.t("customColor")},{default:r((()=>[u("div",{class:"demo-part"},[i(k,{color:"#f2826a"},{default:r((()=>[p(c(t.t("tag")),1)])),_:1})]),u("div",{class:"demo-part"},[i(k,{color:"#7232dd"},{default:r((()=>[p(c(t.t("tag")),1)])),_:1})]),u("div",{class:"demo-part"},[i(k,{color:"#7232dd",plain:""},{default:r((()=>[p(c(t.t("tag")),1)])),_:1})]),u("div",{class:"demo-part"},[i(k,{color:"#ffe1e1","text-color":"#ad0000"},{default:r((()=>[p(c(t.t("tag")),1)])),_:1})])])),_:1},8,["title"]),i(S,{title:t.t("customSize")},{default:r((()=>[u("div",{class:"demo-part"},[i(k,{type:"danger"},{default:r((()=>[p(c(t.t("tag")),1)])),_:1})]),u("div",{class:"demo-part"},[i(k,{type:"danger",size:"medium"},{default:r((()=>[p(c(t.t("tag")),1)])),_:1})]),u("div",{class:"demo-part"},[i(k,{type:"danger",size:"large"},{default:r((()=>[p(c(t.t("tag")),1)])),_:1})])])),_:1},8,["title"]),i(S,{title:t.t("closeable")},{default:r((()=>[f.show.primary?(s(),a("div",{key:0,class:"demo-part"},[i(k,{type:"primary",closeable:"",onClose:e[0]||(e[0]=t=>C.onClose("primary"))},{default:r((()=>[p(c(t.t("tag")),1)])),_:1})])):n("v-if",!0),u("div",{class:"demo-part"},[f.show.success?(s(),m(k,{key:0,type:"success",closeable:"",onClose:e[1]||(e[1]=t=>C.onClose("success"))},{default:r((()=>[p(c(t.t("tag")),1)])),_:1})):n("v-if",!0)])])),_:1},8,["title"])])}],["__scopeId","data-v-334858eb"]]);export{y as default};

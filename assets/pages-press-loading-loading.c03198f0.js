import{P as o}from"./press-loading.59b8bf61.js";import{_ as t,o as s,c as e,j as a,w as i,a as n,b as d,d as p,k as l,u as c,t as r,z as g}from"./index-26897e9f.js";const h=t({i18n:{"zh-CN":{buttonMode:"按钮模式",pageMode:"页面模式",customBackground:"指定背景色",click:"点击加载",disappear:"三秒后消失"},"en-US":{buttonMode:"Button Mode",pageMode:"Page Mode",customBackground:"Custom Background",click:"Check",disappear:"Check"}},components:{PressLoading:o},data:()=>({options:{btn:{show:!1},page:{show:!1},bg:{show:!1}}}),methods:{onShowLoading(o){this.options[o].show=!0,setTimeout((()=>{this.options[o].show=!1}),3e3)}}},[["render",function(o,t,h,u,m,b){const k=p("press-loading"),f=p("demo-block");return s(),e("div",{class:"demo-wrap"},[a(f,{title:o.t("buttonMode")},{default:i((()=>[l("div",{class:"primary-btn",style:{position:"relative","margin-left":"10px"},onClick:t[0]||(t[0]=g((o=>b.onShowLoading("btn")),["stop"]))},[c(r(m.options.btn.show?"":o.t("click"))+" ",1),m.options.btn.show?(s(),n(k,{key:0,"loading-scenes":"btn"})):d("v-if",!0)])])),_:1},8,["title"]),a(f,{title:o.t("pageMode")},{default:i((()=>[l("div",{class:"primary-btn",style:{position:"relative","margin-left":"10px"},onClick:t[1]||(t[1]=g((o=>b.onShowLoading("page")),["stop"]))},r(o.t("check")),1)])),_:1},8,["title"]),a(f,{title:o.t("customBackground")},{default:i((()=>[l("div",{class:"primary-btn",style:{position:"relative","margin-left":"10px"},onClick:t[2]||(t[2]=g((o=>b.onShowLoading("bg")),["stop"]))},r(o.t("disappear")),1)])),_:1},8,["title"]),m.options.page.show?(s(),n(k,{key:0})):d("v-if",!0),m.options.bg.show?(s(),n(k,{key:1,"loading-bg":"#eee"})):d("v-if",!0)])}],["__scopeId","data-v-b756aff8"]]);export{h as default};
import{P as e}from"./press-sticky.d33d84fe.js";import{P as t}from"./press-button.89b775d3.js";import{P as s}from"./press-notice-bar.ca72ae3a.js";import{r as o}from"./version.4c093b8d.js";import{_ as i,o as r,c as n,h as a,w as d,e as p,i as l,t as c,v as m}from"./index-5ce068d6.js";import"./utils.29d4c09b.js";import"./add-unit.39434bfe.js";import"./style.0f94ff97.js";import"./rect.b47c0dff.js";import"./bind-event.b0b7601b.js";import"./event.eea0932c.js";import"./support-passive.bc409298.js";import"./press-component.7a68e6d8.js";import"./press-icon-plus.86d78210.js";import"./press-info.be4091c7.js";import"./press-loading-plus.1b232e65.js";import"./press-loading.322f640d.js";import"./button.c391421e.js";const h=i({i18n:{"zh-CN":{offsetTop:"吸顶距离",setContainer:"指定容器",hide:"隐藏头部",show:"显示头部"},"en-US":{offsetTop:"Offset Top",setContainer:"Set Container",hide:"Hide Head",show:"Show Head"}},components:{PressSticky:e,PressButton:t,PressNoticeBar:s},mixins:[{data:()=>({showHeader:!0}),mounted(){this.showHeader||this.setHeaderStyle("none")},methods:{onToggleShowHeader(){this.showHeader=!this.showHeader;let e="none";this.showHeader&&(e="block"),this.setHeaderStyle(e)},setHeaderStyle(e){const t=document.querySelector("uni-page-head")||document.querySelector(".uni-page-head-wrap");t&&(t.style.display=e)}}}],data(){const e=this;return{container(){var t;return null==(t=e.$refs)?void 0:t.container}}},mounted(){o((()=>{this.container=()=>this.$refs.container}))},methods:{}},[["render",function(e,t,s,o,i,h){const u=p("press-sticky"),f=p("demo-block"),j=p("press-button");return r(),n("div",{class:"demo-wrap"},[a(f,{title:e.t("basicUsage"),"section-style":"margin: 0;"},{default:d((()=>[a(u,null,{default:d((()=>[l("div",{class:"btn1"},c(e.t("basicUsage")),1)])),_:1})])),_:1},8,["title"]),a(f,{title:e.t("offsetTop"),"section-style":"margin: 0;"},{default:d((()=>[a(u,{"offset-top":50},{default:d((()=>[l("div",{class:"btn2"},c(e.t("offsetTop")),1)])),_:1})])),_:1},8,["title"]),a(f,{title:e.t("setContainer"),"section-style":"margin: 0;"},{default:d((()=>[l("div",{id:"container",ref:"container",style:{height:"150px",background:"#eee"}},[a(u,{container:i.container},{default:d((()=>[l("div",{class:"btn3"},c(e.t("setContainer")),1)])),_:1},8,["container"])],512)])),_:1},8,["title"]),a(j,{type:"e-sport-primary","custom-style":"position:relative;margin: 10px;padding: 0;",onClick:e.onToggleShowHeader},{default:d((()=>[m(c(e.showHeader?e.t("hide"):e.t("show")),1)])),_:1},8,["onClick"])])}],["__scopeId","data-v-6aa95ac5"]]);export{h as default};
import{P as o}from"./press-popover.eda9a4c0.js";import{_ as s,a as e,o as t,c as i,d as a,w as n,e as l,g as c,l as p,F as r,h as d,j as m,t as h}from"./index-a6ed3ec5.js";const v=s({i18n:{"zh-CN":{options:o=>`选项${o}`},"en-US":{options:o=>`Options ${o}`}},components:{PressPopover:o,PressCell:e},data:()=>({list:["Top","Bottom","Left","Right"],dataList:[1,2,3],direction:"",show:!1}),methods:{onShowPopover(o){this.direction=o.toLowerCase(),this.show=!0},onClickPage(){this.direction&&(this.show=!1)},noop(){}}},[["render",function(o,s,e,v,k,w){const P=p("press-cell"),u=p("demo-block"),C=p("PressPopover");return t(),i("div",{class:"demo-wrap",onClick:s[1]||(s[1]=c(((...o)=>w.onClickPage&&w.onClickPage(...o)),["stop"]))},[a(u,{title:o.t("basicUsage")},{default:n((()=>[(t(!0),i(r,null,d(k.list,((o,s)=>(t(),m(P,{key:s,title:o,"is-link":"",onClick:s=>w.onShowPopover(o)},null,8,["title","onClick"])))),128))])),_:1},8,["title"]),l("div",{class:"demo-block-wrap"},[l("div",{class:"demo-block"},[a(C,{show:k.show,placement:k.direction,"custom-class":`demo-nav-popover demo-nav-popover--${k.direction}`},{default:n((()=>[(t(!0),i(r,null,d(k.dataList,((e,a)=>(t(),i("div",{key:a,class:"demo-nav-item",onClick:s[0]||(s[0]=c(((...o)=>w.noop&&w.noop(...o)),["stop"]))},h(o.t("options",e)),1)))),128))])),_:1},8,["show","placement","custom-class"])])])])}],["__scopeId","data-v-4699c495"]]);export{v as default};

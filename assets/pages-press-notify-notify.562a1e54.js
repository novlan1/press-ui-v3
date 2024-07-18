import{P as t}from"./press-notify.65916939.js";import{W as o}from"./color.3a05f6e0.js";import{g as s}from"./h5-handler.e662945a.js";import{_ as e,o as i,c as n,f as r,w as l,j as a}from"./index-43eb3ea0.js";import"./validator.84caa8d5.js";import{P as m}from"./press-cell.a0845ac7.js";import"./press-transition.e8aeacc8.js";import"./style.0f94ff97.js";import"./version.7ee5c281.js";import"./utils.bb2d8d10.js";import"./add-unit.0c57c089.js";import"./press-component.181873fd.js";import"./rect.23461412.js";import"./event.1c00601d.js";import"./support-passive.bc409298.js";import"./dialog-mixin.6ac42ef3.js";import"./component-handler.9abe3b3e.js";import"./press-icon-plus.43efdcdd.js";import"./press-info.68d3dd51.js";import"./link.82331220.js";let c;c=s({defaultOptions:{selector:"#press-notify",type:"danger",message:"",background:"",duration:3e3,show:!0,zIndex:110,top:0,color:o,safeAreaInsetTop:!1,onClick:()=>{},onOpened:()=>{},onClose:()=>{},animationDuration:300},component:t});const p=c;const u=e({i18n:{"zh-CN":{primary:"主要通知",success:"成功通知",danger:"危险通知",warning:"警告通知",content:"通知内容",notifyType:"通知类型",customColor:"自定义颜色",customNotify:"自定义配置",componentCall:"组件调用",customDuration:"自定义时长"},"en-US":{primary:"Primary",success:"Success",danger:"Danger",warning:"Warning",content:"Notify Message",notifyType:"Notify Type",customColor:"Custom Color",customNotify:"Custom Notify",componentCall:"Component Call",customDuration:"Custom Duration"}},components:{PressNotify:t,PressCell:m},data:()=>({}),mounted(){},methods:{showNotify(t){let o=t;"object"!=typeof t&&(o={message:t}),p({...o,top:44})}}},[["render",function(t,o,s,e,m,c){const p=a("press-cell"),u=a("demo-block");return i(),n("div",{class:"demo-wrap"},[r(u,{title:t.t("basicUsage")},{default:l((()=>[r(p,{title:t.t("basicUsage"),"is-link":"",onClick:o[0]||(o[0]=o=>c.showNotify(t.t("content")))},null,8,["title"])])),_:1},8,["title"]),r(u,{title:t.t("notifyType")},{default:l((()=>[r(p,{title:t.t("primary"),"is-link":"",onClick:o[1]||(o[1]=o=>c.showNotify({type:"primary",message:t.t("content")}))},null,8,["title"]),r(p,{title:t.t("success"),"is-link":"",onClick:o[2]||(o[2]=o=>c.showNotify({type:"success",message:t.t("content")}))},null,8,["title"]),r(p,{title:t.t("danger"),"is-link":"",onClick:o[3]||(o[3]=o=>c.showNotify({type:"danger",message:t.t("content")}))},null,8,["title"]),r(p,{title:t.t("warning"),"is-link":"",onClick:o[4]||(o[4]=o=>c.showNotify({type:"warning",message:t.t("content")}))},null,8,["title"])])),_:1},8,["title"]),r(u,{title:t.t("customNotify")},{default:l((()=>[r(p,{title:t.t("customColor"),"is-link":"",onClick:o[5]||(o[5]=o=>c.showNotify({message:t.t("customColor"),color:"#ad0000",background:"#ffe1e1"}))},null,8,["title"]),r(p,{title:t.t("customDuration"),"is-link":"",onClick:o[6]||(o[6]=o=>c.showNotify({message:t.t("customDuration"),duration:1e3}))},null,8,["title"])])),_:1},8,["title"])])}]]);export{u as default};

import{P as t,a as o}from"./handler.3ebe0f48.js";import{_ as e,a as s,o as i,c as n,d as l,w as a,k as c}from"./index-69342aaa.js";import"./color.3a05f6e0.js";const r=e({i18n:{"zh-CN":{primary:"主要通知",success:"成功通知",danger:"危险通知",warning:"警告通知",content:"通知内容",notifyType:"通知类型",customColor:"自定义颜色",customNotify:"自定义配置",componentCall:"组件调用",customDuration:"自定义时长"},"en-US":{primary:"Primary",success:"Success",danger:"Danger",warning:"Warning",content:"Notify Message",notifyType:"Notify Type",customColor:"Custom Color",customNotify:"Custom Notify",componentCall:"Component Call",customDuration:"Custom Duration"}},components:{PressNotify:t,PressCell:s},data:()=>({}),mounted(){},methods:{showNotify(t){let e=t;"object"!=typeof t&&(e={message:t}),o({...e,top:44})}}},[["render",function(t,o,e,s,r,u){const m=c("press-cell"),y=c("demo-block");return i(),n("div",{class:"demo-wrap"},[l(y,{title:t.t("basicUsage")},{default:a((()=>[l(m,{title:t.t("basicUsage"),"is-link":"",onClick:o[0]||(o[0]=o=>u.showNotify(t.t("content")))},null,8,["title"])])),_:1},8,["title"]),l(y,{title:t.t("notifyType")},{default:a((()=>[l(m,{title:t.t("primary"),"is-link":"",onClick:o[1]||(o[1]=o=>u.showNotify({type:"primary",message:t.t("content")}))},null,8,["title"]),l(m,{title:t.t("success"),"is-link":"",onClick:o[2]||(o[2]=o=>u.showNotify({type:"success",message:t.t("content")}))},null,8,["title"]),l(m,{title:t.t("danger"),"is-link":"",onClick:o[3]||(o[3]=o=>u.showNotify({type:"danger",message:t.t("content")}))},null,8,["title"]),l(m,{title:t.t("warning"),"is-link":"",onClick:o[4]||(o[4]=o=>u.showNotify({type:"warning",message:t.t("content")}))},null,8,["title"])])),_:1},8,["title"]),l(y,{title:t.t("customNotify")},{default:a((()=>[l(m,{title:t.t("customColor"),"is-link":"",onClick:o[5]||(o[5]=o=>u.showNotify({message:t.t("customColor"),color:"#ad0000",background:"#ffe1e1"}))},null,8,["title"]),l(m,{title:t.t("customDuration"),"is-link":"",onClick:o[6]||(o[6]=o=>u.showNotify({message:t.t("customDuration"),duration:1e3}))},null,8,["title"])])),_:1},8,["title"])])}]]);export{r as default};

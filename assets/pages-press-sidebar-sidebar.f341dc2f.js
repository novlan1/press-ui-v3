import{P as t,a as e}from"./press-sidebar-item.f43dd42c.js";import{_ as l,M as i,o as a,c as s,d as n,w as d,l as o}from"./index-a6ed3ec5.js";import"./relation.25345683.js";import"./parent-map.a476e3d9.js";const c=l({i18n:{"zh-CN":{title:"标签名",showBadge:"徽标提示",disabled:"禁用选项",changeEvent:"监听切换事件",selectTip:"你切换到了"},"en-US":{showBadge:"Show Badge",disabled:"Disabled",changeEvent:"Change Event",selectTip:"You select "}},components:{PressSidebar:t,PressSidebarItem:e,PressToast:i},data:()=>({activeKey:0}),methods:{onChange(t){console.log("[onChange] val: ",t),this.onGTip(`${this.t("selectTip")}${t+1}`)}}},[["render",function(t,e,l,i,c,r){const u=o("press-sidebar-item"),v=o("press-sidebar"),g=o("demo-block");return a(),s("div",{class:"demo-wrap"},[n(g,{title:t.t("basicUsage")},{default:d((()=>[n(v,{"active-key":c.activeKey},{default:d((()=>[n(u,{title:t.t("title")},null,8,["title"]),n(u,{title:t.t("title")},null,8,["title"]),n(u,{title:t.t("title")},null,8,["title"])])),_:1},8,["active-key"])])),_:1},8,["title"]),n(g,{title:t.t("showBadge")},{default:d((()=>[n(v,{"active-key":c.activeKey},{default:d((()=>[n(u,{title:t.t("title"),dot:""},null,8,["title"]),n(u,{title:t.t("title"),badge:"5"},null,8,["title"]),n(u,{title:t.t("title"),badge:"99+"},null,8,["title"])])),_:1},8,["active-key"])])),_:1},8,["title"]),n(g,{title:t.t("disabled")},{default:d((()=>[n(v,{"active-key":c.activeKey},{default:d((()=>[n(u,{title:t.t("title")},null,8,["title"]),n(u,{title:t.t("title"),disabled:""},null,8,["title"]),n(u,{title:t.t("title")},null,8,["title"])])),_:1},8,["active-key"])])),_:1},8,["title"]),n(g,{title:t.t("changeEvent")},{default:d((()=>[n(v,{"active-key":c.activeKey,onChange:r.onChange},{default:d((()=>[n(u,{title:`${t.t("title")} 1`},null,8,["title"]),n(u,{title:`${t.t("title")} 2`},null,8,["title"]),n(u,{title:`${t.t("title")} 3`},null,8,["title"])])),_:1},8,["active-key","onChange"])])),_:1},8,["title"])])}]]);export{c as default};

import{P as t,a as e}from"./press-sidebar-item.b0a69ce9.js";import{P as i}from"./press-toast.b3c30ef4.js";import{_ as l,o as s,c as a,h as o,w as n,e as r}from"./index-66fd861e.js";import"./press-component.573dfcec.js";import"./add-unit.9de8b2f7.js";import"./relation.8b10893c.js";import"./parent-map.b443f4cc.js";import"./press-info.8563e54c.js";import"./utils.d8f13396.js";import"./press-icon-plus.a1094e70.js";import"./style.0f94ff97.js";import"./press-loading-plus.6ff974e3.js";import"./press-overlay.1835b372.js";import"./press-transition.8a179cbe.js";import"./version.0d1ce575.js";import"./dialog-mixin.5160f0f1.js";import"./component-handler.45abef67.js";const d=l({i18n:{"zh-CN":{title:"标签名",showBadge:"徽标提示",disabled:"禁用选项",changeEvent:"监听切换事件",selectTip:"你切换到了"},"en-US":{showBadge:"Show Badge",disabled:"Disabled",changeEvent:"Change Event",selectTip:"You select "}},components:{PressSidebar:t,PressSidebarItem:e,PressToast:i},data:()=>({activeKey:0}),methods:{onChange(t){console.log("[onChange] val: ",t),this.onGTip(`${this.t("selectTip")}${t+1}`)}}},[["render",function(t,e,i,l,d,p){const m=r("press-sidebar-item"),c=r("press-sidebar"),u=r("demo-block");return s(),a("div",{class:"demo-wrap"},[o(u,{title:t.t("basicUsage")},{default:n((()=>[o(c,{"active-key":d.activeKey},{default:n((()=>[o(m,{title:t.t("title")},null,8,["title"]),o(m,{title:t.t("title")},null,8,["title"]),o(m,{title:t.t("title")},null,8,["title"])])),_:1},8,["active-key"])])),_:1},8,["title"]),o(u,{title:t.t("showBadge")},{default:n((()=>[o(c,{"active-key":d.activeKey},{default:n((()=>[o(m,{title:t.t("title"),dot:""},null,8,["title"]),o(m,{title:t.t("title"),badge:"5"},null,8,["title"]),o(m,{title:t.t("title"),badge:"99+"},null,8,["title"])])),_:1},8,["active-key"])])),_:1},8,["title"]),o(u,{title:t.t("disabled")},{default:n((()=>[o(c,{"active-key":d.activeKey},{default:n((()=>[o(m,{title:t.t("title")},null,8,["title"]),o(m,{title:t.t("title"),disabled:""},null,8,["title"]),o(m,{title:t.t("title")},null,8,["title"])])),_:1},8,["active-key"])])),_:1},8,["title"]),o(u,{title:t.t("changeEvent")},{default:n((()=>[o(c,{"active-key":d.activeKey,onChange:p.onChange},{default:n((()=>[o(m,{title:`${t.t("title")} 1`},null,8,["title"]),o(m,{title:`${t.t("title")} 2`},null,8,["title"]),o(m,{title:`${t.t("title")} 3`},null,8,["title"])])),_:1},8,["active-key","onChange"])])),_:1},8,["title"])])}]]);export{d as default};

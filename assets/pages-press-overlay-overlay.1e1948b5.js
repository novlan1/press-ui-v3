import{P as o}from"./press-cell.182b41b4.js";import{P as s}from"./press-overlay.1835b372.js";import{_ as t,o as e,c as i,h as n,w as l,e as r,i as p}from"./index-66fd861e.js";import"./press-icon-plus.a1094e70.js";import"./style.0f94ff97.js";import"./add-unit.9de8b2f7.js";import"./press-info.8563e54c.js";import"./utils.d8f13396.js";import"./press-component.573dfcec.js";import"./link.af741451.js";import"./event.b5c3f8af.js";import"./support-passive.bc409298.js";import"./press-transition.8a179cbe.js";import"./version.0d1ce575.js";const a=t({i18n:{"zh-CN":{embeddedContent:"嵌入内容"},"en-US":{embeddedContent:"Embedded"}},components:{PressCell:o,PressOverlay:s},data:()=>({options:{normal:!1,content:!1}}),methods:{onClickShow(o){this.options[o]=!0},onClickHide(o){this.options[o]=!1},noop(){}}},[["render",function(o,s,t,a,c,d){const m=r("press-cell"),k=r("demo-block"),h=r("press-overlay");return e(),i("div",{class:"demo-wrap"},[n(k,{title:o.t("basicUsage")},{default:l((()=>[n(m,{title:o.t("check"),"is-link":"",onClick:s[0]||(s[0]=o=>d.onClickShow("normal"))},null,8,["title"])])),_:1},8,["title"]),n(k,{title:o.t("embeddedContent")},{default:l((()=>[n(m,{title:o.t("check"),"is-link":"",onClick:s[1]||(s[1]=o=>d.onClickShow("content"))},null,8,["title"])])),_:1},8,["title"]),n(h,{show:c.options.normal,onClick:s[2]||(s[2]=o=>d.onClickHide("normal"))},null,8,["show"]),n(h,{show:c.options.content,onClick:s[3]||(s[3]=o=>d.onClickHide("content"))},{default:l((()=>[p("div",{class:"wrapper"},[p("div",{class:"block","catch:tap":"noop"})])])),_:1},8,["show"])])}],["__scopeId","data-v-f0875d9f"]]);export{a as default};

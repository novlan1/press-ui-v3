import{P as o}from"./press-cell.09949a8d.js";import{P as s}from"./press-overlay.024e8d5d.js";import{_ as t,o as e,c as i,j as n,w as l,d as r,k as p}from"./index-26897e9f.js";import"./press-icon-plus.cec3bc23.js";import"./utils.f8cec38d.js";import"./add-unit.e5b08e9d.js";import"./press-info.8af1a743.js";import"./press-component.5db9b2cc.js";import"./link.9c6737a1.js";import"./event.ab14895d.js";import"./support-passive.bc409298.js";import"./press-transition.05dfd399.js";import"./version.066ec1d4.js";const a=t({i18n:{"zh-CN":{embeddedContent:"嵌入内容"},"en-US":{embeddedContent:"Embedded"}},components:{PressCell:o,PressOverlay:s},data:()=>({options:{normal:!1,content:!1}}),methods:{onClickShow(o){this.options[o]=!0},onClickHide(o){this.options[o]=!1},noop(){}}},[["render",function(o,s,t,a,c,d){const m=r("press-cell"),k=r("demo-block"),j=r("press-overlay");return e(),i("div",{class:"demo-wrap"},[n(k,{title:o.t("basicUsage")},{default:l((()=>[n(m,{title:o.t("check"),"is-link":"",onClick:s[0]||(s[0]=o=>d.onClickShow("normal"))},null,8,["title"])])),_:1},8,["title"]),n(k,{title:o.t("embeddedContent")},{default:l((()=>[n(m,{title:o.t("check"),"is-link":"",onClick:s[1]||(s[1]=o=>d.onClickShow("content"))},null,8,["title"])])),_:1},8,["title"]),n(j,{show:c.options.normal,onClick:s[2]||(s[2]=o=>d.onClickHide("normal"))},null,8,["show"]),n(j,{show:c.options.content,onClick:s[3]||(s[3]=o=>d.onClickHide("content"))},{default:l((()=>[p("div",{class:"wrapper"},[p("div",{class:"block","catch:tap":"noop"})])])),_:1},8,["show"])])}],["__scopeId","data-v-4187ddf0"]]);export{a as default};

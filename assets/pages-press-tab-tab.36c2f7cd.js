import{P as t,a as e}from"./press-tab.0a6f1ba7.js";import{P as a}from"./press-icon-plus.d8bee82b.js";import{_ as l,o as i,c as n,h as s,w as o,e as d,F as c,p as b,q as u,i as f,t as r,an as p,f as m}from"./index-64b5aeb5.js";import"./press-info.07976493.js";import"./utils.28df66fa.js";import"./add-unit.62ceb573.js";import"./press-sticky.726739a7.js";import"./style.0f94ff97.js";import"./rect.8c325831.js";import"./version.e043cae6.js";import"./bind-event.7ef0af23.js";import"./event.c5c037f6.js";import"./support-passive.bc409298.js";import"./press-component.6d1ba0d0.js";import"./touch.bcbb2f5b.js";import"./relation.8b10893c.js";import"./parent-map.b443f4cc.js";import"./scroll-view.59c60677.js";const h=l({i18n:{"zh-CN":{tab:"标签 ",title2:"标签栏滚动",title3:"禁用标签",title4:"样式风格",title5:"点击事件",title6:"粘性布局",title7:"自定义标签",title8:"切换动画",title9:"滑动切换",title10:"滚动导航",horTitle:"HOR",disabled:" 已被禁用",matchByName:"通过名称匹配",beforeChange:"异步切换",lazyTab:"延迟加载",slot:"插槽"},"en-US":{tab:"Tab ",content:"content of tab",title2:"Swipe Tabs",title3:"Disabled Tab",title4:"Card Style",title5:"Click Event",title6:"Sticky",title7:"Custom Tab",title8:"Switch Animation",title9:"Swipeable",title10:"Scrollspy",horTitle:"HOR",disabled:" is disabled",matchByName:"Match By Name",beforeChange:"Before Change",lazyTab:"LAZY TAB",slot:"Slot"}},components:{PressTabs:t,PressTab:e,pressIconPlus:a},data:()=>({showLazyTab:!1,active:3,activeName:"c",tabs2:[1,2],tabs4:[1,2,3,4],tabs7:[1,2,3,4,5,6,7],tabsDisabled:[{dot:!0},{},{disabled:!0},{}],tabsWithName:[{name:"a"},{name:"b"},{name:"c"}]}),mounted(){setTimeout((()=>{this.tabs4=[1,2,3],this.active=2,setTimeout((()=>{this.showLazyTab=!0}),1e3)}),2e3)},methods:{onChange(t){console.log("[onChange] val: ",t)},onInput(t){console.log("[onInput] val: ",t)},onClickDisabled(t){console.log("[onClickDisabled] val: ",t)},onClick(t){console.log("[onClick] val: ",t);const{index:e,name:a,title:l}=t;this.onGTip(`index: ${e}, name: ${a}, tile: ${l}`)},onScroll(t){console.log("[onScroll] val: ",t)}}},[["render",function(t,e,a,l,h,v){const y=d("press-tab"),k=d("press-tabs"),_=d("demo-block"),g=d("press-icon-plus");return i(),n("div",{class:"demo-wrap"},[s(_,{title:t.t("basicUsage"),"header-style":"background: #f7f8fa;"},{default:o((()=>[s(k,{active:h.active,onChange:v.onChange,onInput:v.onInput},{default:o((()=>[(i(!0),n(c,null,b(h.tabs4,((e,a)=>(i(),u(y,{key:a,title:`${t.t("tab")} ${a+1}`},{default:o((()=>[f("div",{class:"content"},r(t.t("content"))+" "+r(a+1),1)])),_:2},1032,["title"])))),128))])),_:1},8,["active","onChange","onInput"])])),_:1},8,["title"]),s(_,{title:t.t("matchByName"),"header-style":"background: #f7f8fa;"},{default:o((()=>[s(k,{active:h.activeName},{default:o((()=>[(i(!0),n(c,null,b(h.tabsWithName,((e,a)=>(i(),u(y,{key:a,title:`${t.t("tab")} ${a+1}`,name:e.name},{default:o((()=>[f("div",{class:"content"},r(t.t("content"))+" "+r(a+1),1)])),_:2},1032,["title","name"])))),128))])),_:1},8,["active"])])),_:1},8,["title"]),s(_,{title:t.t("title6"),"header-style":"background: #f7f8fa;"},{default:o((()=>[s(k,{sticky:""},{default:o((()=>[(i(!0),n(c,null,b(h.tabs4,((e,a)=>(i(),u(y,{key:a,title:`${t.t("tab")} ${a+1}`},{default:o((()=>[f("div",{class:"content"},r(t.t("content"))+" "+r(a+1),1)])),_:2},1032,["title"])))),128))])),_:1})])),_:1},8,["title"]),s(_,{title:t.t("title2"),"header-style":"background: #f7f8fa;"},{default:o((()=>[s(k,{onScroll:v.onScroll},{default:o((()=>[(i(!0),n(c,null,b(h.tabs7,((e,a)=>(i(),u(y,{key:a,title:`${t.t("tab")} ${a+1}`},{default:o((()=>[f("div",{class:"content"},r(t.t("content"))+" "+r(a+1),1)])),_:2},1032,["title"])))),128))])),_:1},8,["onScroll"])])),_:1},8,["title"]),s(_,{title:t.t("title3"),"header-style":"background: #f7f8fa;"},{default:o((()=>[s(k,{onDisabled:v.onClickDisabled},{default:o((()=>[(i(!0),n(c,null,b(h.tabsDisabled,((e,a)=>(i(),u(y,{key:a,title:`${t.t("tab")} ${a+1}`,dot:e.dot,disabled:!!e.disabled},{default:o((()=>[f("div",{class:"content"},r(t.t("content"))+" "+r(a+1),1)])),_:2},1032,["title","dot","disabled"])))),128))])),_:1},8,["onDisabled"])])),_:1},8,["title"]),s(_,{title:t.t("title4"),"header-style":"background: #f7f8fa;"},{default:o((()=>[s(k,{type:"card"},{default:o((()=>[(i(!0),n(c,null,b(h.tabs4,((e,a)=>(i(),u(y,{key:a,title:`${t.t("tab")} ${a+1}`},{default:o((()=>[f("div",{class:"content"},r(t.t("content"))+" "+r(a+1),1)])),_:2},1032,["title"])))),128))])),_:1})])),_:1},8,["title"]),s(_,{title:t.t("title5"),"header-style":"background: #f7f8fa;"},{default:o((()=>[s(k,{onClick:v.onClick},{default:o((()=>[(i(!0),n(c,null,b(h.tabs2,((e,a)=>(i(),u(y,{key:a,title:`${t.t("tab")} ${a+1}`},{default:o((()=>[f("div",{class:"content"},r(t.t("content"))+" "+r(a+1),1)])),_:2},1032,["title"])))),128))])),_:1},8,["onClick"])])),_:1},8,["title"]),s(_,{title:t.t("title8"),"header-style":"background: #f7f8fa;"},{default:o((()=>[s(k,{animated:""},{default:o((()=>[(i(!0),n(c,null,b(h.tabs4,((e,a)=>(i(),u(y,{key:a,title:`${t.t("tab")} ${a+1}`},{default:o((()=>[f("div",{class:"content"},r(t.t("content"))+" "+r(a+1),1)])),_:2},1032,["title"])))),128))])),_:1})])),_:1},8,["title"]),s(_,{title:t.t("title9"),"header-style":"background: #f7f8fa;"},{default:o((()=>[s(k,{swipeable:""},{default:o((()=>[(i(!0),n(c,null,b(h.tabs4,((e,a)=>(i(),u(y,{key:a,title:`${t.t("tab")} ${a+1}`},{default:o((()=>[f("div",{class:"content"},r(t.t("content"))+" "+r(a+1),1)])),_:2},1032,["title"])))),128))])),_:1})])),_:1},8,["title"]),s(_,{title:t.t("slot"),"header-style":"background: #f7f8fa;"},{default:o((()=>[s(k,{swipeable:"","use-title-slot":""},{"title-0":o((()=>[f("span",{class:"title"},r(t.t("tab")),1),s(g,{name:"like-o"})])),"title-1":o((()=>[f("span",{class:"title"},r(t.t("tab"))+" 1",1),s(g,{name:"friends-o"})])),"title-2":o((()=>[f("span",{class:"title"},r(t.t("tab"))+" 2",1)])),"title-3":o((()=>[f("span",{class:"title"},"Custom Title")])),default:o((()=>[(i(!0),n(c,null,b(h.tabs4,((e,a)=>(i(),u(y,{key:a,title:`${t.t("tab")} ${a+1}`},{default:o((()=>[f("div",{class:"content"},r(t.t("content"))+" "+r(a+1),1)])),_:2},1032,["title"])))),128))])),_:1}),s(k,{swipeable:"","use-title-slot":""},p({default:o((()=>[(i(!0),n(c,null,b(h.tabs4,((e,a)=>(i(),u(y,{key:a,title:`${t.t("tab")} ${a+1}`},{default:o((()=>[f("div",{class:"content"},r(t.t("content"))+" "+r(a+1),1)])),_:2},1032,["title"])))),128))])),_:2},[b(Array(4),((e,a)=>({name:`title-${a}`,fn:o((()=>[m(" 为了兼容 Vue3，不能在 div 上加 key "),f("div",null,[f("span",{class:"title"},r(t.t("tab"))+" "+r(a),1),s(g,{name:"like-o"})])]))})))]),1024)])),_:1},8,["title"]),s(_,{title:t.t("lazyTab"),"header-style":"background: #f7f8fa;"},{default:o((()=>[s(k,{swipeable:""},{default:o((()=>[h.showLazyTab?(i(),u(y,{key:"tabA","sort-index":0,title:`${t.t("tab")} A`},{default:o((()=>[f("div",{class:"content"},r(t.t("content"))+" A ",1)])),_:1},8,["title"])):m("v-if",!0),s(y,{key:"tabB","sort-index":1,title:`${t.t("tab")} B`},{default:o((()=>[f("div",{class:"content"},r(t.t("content"))+" B ",1)])),_:1},8,["title"]),s(y,{key:"tabC",title:`${t.t("tab")} C`,"sort-index":2},{default:o((()=>[f("div",{class:"content"},r(t.t("content"))+" C ",1)])),_:1},8,["title"])])),_:1})])),_:1},8,["title"]),s(_,{title:t.t("horTitle"),"header-style":"background: #f7f8fa;","section-style":"background: #192841;color: #fff;margin: 0;padding: 10px 0;"},{default:o((()=>[s(k,{active:h.active,mode:"hor",onChange:v.onChange,onInput:v.onInput},{default:o((()=>[(i(!0),n(c,null,b(h.tabs4,((e,a)=>(i(),u(y,{key:a,dot:"",title:`${t.t("tab")} ${a+1}`},{default:o((()=>[f("div",{class:"content"},r(t.t("content"))+" "+r(a+1),1)])),_:2},1032,["title"])))),128))])),_:1},8,["active","onChange","onInput"])])),_:1},8,["title"]),s(_,{title:"E-SPORT"},{default:o((()=>[s(k,{active:h.active,mode:"e-sport",onChange:v.onChange,onInput:v.onInput},{default:o((()=>[(i(!0),n(c,null,b(h.tabs4,((e,a)=>(i(),u(y,{key:a,title:`${t.t("tab")} ${a+1}`},{default:o((()=>[f("div",{class:"content"},r(t.t("content"))+" "+r(a+1),1)])),_:2},1032,["title"])))),128))])),_:1},8,["active","onChange","onInput"])])),_:1})])}],["__scopeId","data-v-95c2ac66"]]);export{h as default};

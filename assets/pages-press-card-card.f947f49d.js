import{P as t}from"./press-card.183f0e85.js";import{_ as e,z as s,y as a,a as i,o as c,c as l,d as o,w as n,l as r,e as d,t as p}from"./index-a6ed3ec5.js";const u=e({i18n:{"zh-CN":{content:"代码是写出来给人看的，附带能在机器上运行",subtitle:"副标题",description:"描述",noMargin:"没有外边距",cover:"封面图",customTitle:"自定义标题",actionBar:"操作栏",share:"分享",star:"点赞",comment:"评论"},"en-US":{content:"Content",subtitle:"SubTitle",description:"Description",noMargin:"No Margin",cover:"Cover",customTitle:"Custom Title",actionBar:"Action Bar",share:"Share",star:"Star",comment:"Comment"}},components:{PressCard:t,PressIconPlus:s,PressSwitch:a,PressCell:i},data:()=>({cover:"https://mike-1255355338.cos.ap-guangzhou.myqcloud.com/press/img/card-cover.jpeg",avatar:"https://mike-1255355338.cos.ap-guangzhou.myqcloud.com/press%2Fimg%2Fpress-ui-avatar.png",extraIcon:{color:"#4cd964",size:"22",type:"gear-filled"},checked:!0}),methods:{onClick(t){console.log(t)},actionsClick(t){this.onGTip(t)}}},[["render",function(t,e,s,a,i,u){const m=r("press-card"),k=r("demo-block"),h=r("press-icon-plus"),C=r("press-switch"),b=r("press-cell");return c(),l("div",{class:"demo-wrap"},[o(k,{title:t.t("basicUsage")},{default:n((()=>[o(m,null,{default:n((()=>[d("span",{class:"press-body"},p(t.t("content")),1)])),_:1})])),_:1},8,["title"]),o(k,{title:t.t("title")},{default:n((()=>[o(m,{title:t.t("title"),extra:t.t("description")},{default:n((()=>[d("span",{class:"press-body"},p(t.t("content")),1)])),_:1},8,["title","extra"])])),_:1},8,["title"]),o(k,{title:t.t("subtitle")},{default:n((()=>[o(m,{title:t.t("title"),"sub-title":t.t("subtitle"),extra:t.t("description"),thumbnail:i.avatar,onClick:u.onClick},{default:n((()=>[d("span",{class:"press-body"},p(t.t("content")),1)])),_:1},8,["title","sub-title","extra","thumbnail","onClick"])])),_:1},8,["title"]),o(k,{title:t.t("noMargin")},{default:n((()=>[o(m,{title:t.t("title"),"sub-title":t.t("subtitle"),extra:t.t("description"),"is-full":!0,thumbnail:i.avatar},{default:n((()=>[d("span",{class:"press-body"},p(t.t("content")),1)])),_:1},8,["title","sub-title","extra","thumbnail"])])),_:1},8,["title"]),o(k,{title:t.t("cover")},{default:n((()=>[o(m,{cover:i.cover,onClick:u.onClick},{default:n((()=>[d("span",{class:"press-body"},p(t.t("content")),1)])),_:1},8,["cover","onClick"])])),_:1},8,["title"]),o(k,{title:t.t("actionBar")},{default:n((()=>[o(m,{onClick:u.onClick},{actions:n((()=>[d("div",{class:"card-actions"},[d("div",{class:"card-actions-item",onClick:e[0]||(e[0]=e=>u.actionsClick(t.t("share")))},[o(h,{name:"share-o",size:"18",color:"#999"}),d("span",{class:"card-actions-item-text"},p(t.t("share")),1)]),d("div",{class:"card-actions-item",onClick:e[1]||(e[1]=e=>u.actionsClick(t.t("star")))},[o(h,{name:"like-o",size:"18",color:"#999"}),d("span",{class:"card-actions-item-text"},p(t.t("star")),1)]),d("div",{class:"card-actions-item",onClick:e[2]||(e[2]=e=>u.actionsClick(t.t("comment")))},[o(h,{name:"chat-o",size:"18",color:"#999"}),d("span",{class:"card-actions-item-text"},p(t.t("comment")),1)])])])),default:n((()=>[d("span",{class:"press-body"},p(t.t("content")),1)])),_:1},8,["onClick"])])),_:1},8,["title"]),o(k,{title:t.t("customTitle")},{default:n((()=>[o(m,{padding:"10px 0"},{title:n((()=>[o(b,{title:t.t("title"),clickable:"",onClick:e[4]||(e[4]=t=>i.checked=!i.checked)},{"right-icon":n((()=>[o(C,{size:"22px",checked:i.checked,onChange:e[3]||(e[3]=t=>i.checked=!i.checked)},null,8,["checked"])])),_:1},8,["title"])])),default:n((()=>[d("span",{class:"press-body uni-mt-5"},p(t.t("content")),1)])),_:1})])),_:1},8,["title"])])}],["__scopeId","data-v-6a3f2835"]]);export{u as default};

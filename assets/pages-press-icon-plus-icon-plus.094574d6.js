import{P as o}from"./press-notify.b5111357.js";import{_ as e,o as a,c as t,t as i,b as s,v as l,j as n,w as c,d as r,F as d,r as p,a as m,k as u}from"./index-26897e9f.js";import{P as f,a as g}from"./press-tab.3a9336fb.js";import{P as b}from"./press-col.38835097.js";import{P as h}from"./press-icon-plus.cec3bc23.js";import{R as y}from"./color.3a05f6e0.js";import{C as k}from"./clipboard-mixin.cdd7bd9c.js";import"./press-transition.05dfd399.js";import"./utils.f8cec38d.js";import"./add-unit.e5b08e9d.js";import"./version.066ec1d4.js";import"./press-component.5db9b2cc.js";import"./rect.783e615e.js";import"./event.ab14895d.js";import"./support-passive.bc409298.js";import"./dialog-mixin.97cae8f4.js";import"./component-handler.a3e6e2e9.js";import"./press-info.8af1a743.js";import"./press-sticky.1fc7f7c2.js";import"./bind-event.54722d7f.js";import"./touch.bcbb2f5b.js";import"./relation.25345683.js";import"./parent-map.a476e3d9.js";import"./index.99e77b04.js";const v={name:"DemoBlock",props:{card:{type:Boolean,default:!1},title:{type:String,default:""}}};const w={name:"press-icon-plus",basic:["arrow","arrow-left","arrow-up","arrow-down","success","cross","plus","minus","fail","circle"],outline:["location-o","like-o","star-o","phone-o","setting-o","fire-o","coupon-o","cart-o","shopping-cart-o","cart-circle-o","friends-o","comment-o","gem-o","gift-o","point-gift-o","send-gift-o","service-o","bag-o","todo-list-o","balance-list-o","close","clock-o","question-o","passed","add-o","gold-coin-o","info-o","play-circle-o","pause-circle-o","stop-circle-o","warning-o","phone-circle-o","music-o","smile-o","thumb-circle-o","comment-circle-o","browsing-history-o","underway-o","more-o","video-o","shop-o","shop-collect-o","share-o","chat-o","smile-comment-o","vip-card-o","award-o","diamond-o","volume-o","cluster-o","wap-home-o","photo-o","gift-card-o","expand-o","medal-o","good-job-o","manager-o","label-o","bookmark-o","bill-o","hot-o","hot-sale-o","new-o","new-arrival-o","goods-collect-o","eye-o","delete-o","font-o","balance-o","refund-o","birthday-cake-o","user-o","orders-o","tv-o","envelop-o","flag-o","flower-o","filter-o","bar-chart-o","chart-trending-o","brush-o","bullhorn-o","hotel-o","cashier-o","newspaper-o","warn-o","notes-o","calendar-o","bulb-o","user-circle-o","desktop-o","apps-o","home-o","back-top","search","points","edit","qr","qr-invalid","closed-eye","down","scan","revoke","free-postage","certificate","logistics","contact","cash-back-record","after-sale","exchange","upgrade","ellipsis","description","records","sign","completed","failure","ecard-pay","peer-pay","balance-pay","credit-pay","debit-pay","cash-on-deliver","other-pay","tosend","pending-payment","paid","aim","discount","idcard","replay","shrink"],filled:["location","like","star","phone","setting","fire","coupon","cart","shopping-cart","cart-circle","friends","comment","gem","gift","point-gift","send-gift","service","bag","todo-list","balance-list","clear","clock","question","checked","add","gold-coin","info","play-circle","pause-circle","stop-circle","warning","phone-circle","music","smile","thumb-circle","comment-circle","browsing-history","underway","more","video","shop","shop-collect","share","chat","smile-comment","vip-card","award","diamond","volume","cluster","wap-home","photo","gift-card","expand","medal","good-job","manager","label","bookmark","bill","hot","hot-sale","new","new-arrival","goods-collect","eye","delete","font","alipay","wechat","photograph","youzan-shield","umbrella-circle","bell","printer","map-marked","card","add-square","live","lock","audio","graphic","column","invition","play","pause","stop","weapp-nav","ascending","descending","bars","wap-nav","enlarge","photo-fail","sort"]};const _=e({i18n:{"zh-CN":{copied:"复制成功",title:"图标列表",badge:"徽标提示",basic:"基础图标",outline:"线框风格",filled:"实底风格",demo:"用法示例",color:"图标颜色",size:"图标大小"},"en-US":{copied:"Copied",title:"Icon List",badge:"Show Badge",basic:"Basic",outline:"Outline",filled:"Filled",demo:"Demo",color:"Icon Color",size:"Icon Size"}},components:{PressTabs:f,PressTab:g,PressCol:b,PressIconPlus:h,PressNotify:o,DemoBlockPlus:e(v,[["render",function(o,e,n,c,r,d){return a(),t("div",{class:"press-doc-demo-block"},[n.title?(a(),t("h2",{key:0,class:"press-doc-demo-block__title"},i(n.title),1)):s("v-if",!0),n.card?(a(),t("div",{key:1,class:"press-doc-demo-block__card"},[l(o.$slots,"default",{},void 0,!0)])):l(o.$slots,"default",{key:2},void 0,!0)])}],["__scopeId","data-v-855e582f"]])},mixins:[k],options:{styleIsolation:"shared"},data:()=>({RED:y,demoIcon:"chat-o",demoImage:"https://mike-1255355338.cos.ap-guangzhou.myqcloud.com/article/2023/5/own_mike_ce77489af93cb34c4b.png",icons:{basic:[],outline:[],filled:[]}}),mounted(){setTimeout((()=>{this.icons={...this.icons,...w||{}}}),1e3)},methods:{copy(o,e={}){let a=`<press-icon-plus name="${o}"`;"dot"in e&&(a=`${a} ${e.dot?"dot":""}`),"badge"in e&&(a=`${a} badge="${e.badge}"`),"color"in e&&(a=`${a} color="${e.color}"`),"size"in e&&(a=`${a} size="${e.size}"`),a=`${a} />`,console.log("[tag] ",a),this.copyIconTag(a)}}},[["render",function(o,e,s,l,f,g){const b=r("press-icon-plus"),h=r("press-col"),y=r("demo-block-plus"),k=r("press-tab"),v=r("press-tabs");return a(),t("div",{class:"demo-wrap demo-wrap--gray"},[n(v,{"offset-top":o.offsetTop,sticky:"",swipeable:""},{default:c((()=>[n(k,{title:o.t("demo")},{default:c((()=>[n(y,{title:o.t("basicUsage")},{default:c((()=>[n(h,{span:6},{default:c((()=>[n(b,{name:f.demoIcon,onClick:e[0]||(e[0]=o=>g.copy(f.demoIcon))},null,8,["name"])])),_:1}),n(h,{span:6},{default:c((()=>[n(b,{name:f.demoImage,onClick:e[1]||(e[1]=o=>g.copy(f.demoImage))},null,8,["name"])])),_:1})])),_:1},8,["title"]),n(y,{title:o.t("badge")},{default:c((()=>[n(h,{span:6},{default:c((()=>[n(b,{name:f.demoIcon,dot:"",onClick:e[2]||(e[2]=o=>g.copy(f.demoIcon,{dot:!0}))},null,8,["name"])])),_:1}),n(h,{span:6},{default:c((()=>[n(b,{name:f.demoIcon,info:"9",onClick:e[3]||(e[3]=o=>g.copy(f.demoIcon,{badge:"9"}))},null,8,["name"])])),_:1}),n(h,{span:6},{default:c((()=>[n(b,{name:f.demoIcon,info:"99+",onClick:e[4]||(e[4]=o=>g.copy(f.demoIcon,{badge:"99+"}))},null,8,["name"])])),_:1})])),_:1},8,["title"]),n(y,{title:o.t("color")},{default:c((()=>[n(h,{span:6},{default:c((()=>[n(b,{name:"cart-o",color:"#1989fa",onClick:e[5]||(e[5]=o=>g.copy("cart-o",{color:"#1989fa"}))})])),_:1}),n(h,{span:6},{default:c((()=>[n(b,{name:"fire-o",color:f.RED,onClick:e[6]||(e[6]=o=>g.copy("fire-o",{color:f.RED}))},null,8,["color"])])),_:1})])),_:1},8,["title"]),n(y,{title:o.t("size")},{default:c((()=>[n(h,{span:6},{default:c((()=>[n(b,{name:f.demoIcon,size:"40",onClick:e[7]||(e[7]=o=>g.copy(f.demoIcon,{size:"40"}))},null,8,["name"])])),_:1}),n(h,{span:6},{default:c((()=>[n(b,{name:f.demoIcon,size:"1rem",onClick:e[8]||(e[8]=o=>g.copy(f.demoIcon,{size:"3rem"}))},null,8,["name"])])),_:1})])),_:1},8,["title"])])),_:1},8,["title"]),n(k,{title:o.t("basic")},{default:c((()=>[(a(!0),t(d,null,p(f.icons.basic,(o=>(a(),m(h,{key:o,span:6},{default:c((()=>[n(b,{name:o,onClick:e=>g.copy(o)},null,8,["name","onClick"]),u("span",null,i(o),1)])),_:2},1024)))),128))])),_:1},8,["title"]),n(k,{title:o.t("outline")},{default:c((()=>[(a(!0),t(d,null,p(f.icons.outline,(o=>(a(),m(h,{key:o,span:6},{default:c((()=>[n(b,{name:o,onClick:e=>g.copy(o)},null,8,["name","onClick"]),u("span",null,i(o),1)])),_:2},1024)))),128))])),_:1},8,["title"]),n(k,{title:o.t("filled")},{default:c((()=>[(a(!0),t(d,null,p(f.icons.filled,(o=>(a(),m(h,{key:o,span:6},{default:c((()=>[n(b,{name:o,onClick:e=>g.copy(o)},null,8,["name","onClick"]),u("span",null,i(o),1)])),_:2},1024)))),128))])),_:1},8,["title"])])),_:1},8,["offset-top"])])}],["__scopeId","data-v-5367cb4e"]]);export{_ as default};

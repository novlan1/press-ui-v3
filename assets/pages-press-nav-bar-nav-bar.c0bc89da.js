import{C as e,_ as t,y as s,J as a,am as i,af as l,o as r,c as o,I as n,j as c,e as h,F as d,h as f,t as p,z as g,B as y,v,k as u,d as k,w as x}from"./index-ed1f827b.js";const m={barStyle:function(t){return e({"z-index":t.zIndex,"padding-top":t.safeAreaInsetTop?`${t.statusBarHeight}px`:0})}};const b=t({i18n:{"zh-CN":{useSlot:"使用插槽"},"en-US":{useSlot:"Use Slot"}},components:{PressNavBar:t({name:"PressNavBar",components:{PressIconPlus:s},props:{title:{type:String,default:""},fixed:{type:Boolean},placeholder:{type:Boolean},leftText:{type:String,default:""},rightText:{type:String,default:""},customStyle:{type:String,default:""},leftArrow:Boolean,border:{type:Boolean,default:!0},zIndex:{type:Number,default:1},safeAreaInsetTop:{type:Boolean,default:!0},titleClass:{type:String,default:""}},emits:["click-left","click-right"],data:()=>({height:46}),computed:{navBarClass(){const{border:e,fixed:t}=this;return`${a.bem2("nav-bar",{fixed:t})} custom-class ${e?"press-hairline--bottom":""}`},navBarStyle(){const{zIndex:e,statusBarHeight:t,safeAreaInsetTop:s,customStyle:a}=this;return`${m.barStyle({zIndex:e,statusBarHeight:t,safeAreaInsetTop:s})}; ${a}`}},watch:{fixed:{handler(){this.setHeight()}},placeholder:{handler(){this.setHeight()}}},created(){const e=i();this.statusBarHeight=e,this.height=46+e},mounted(){this.setHeight()},methods:{onClickLeft(){this.$emit("click-left")},onClickRight(){this.$emit("click-right")},setHeight(){this.fixed&&this.placeholder&&this.$nextTick((()=>{l(this,".press-nav-bar").then((e=>{e&&"height"in e&&(this.height=e.height)}))}))}}},[["render",function(e,t,s,a,i,l){const k=u("press-icon-plus");return r(),o("div",{class:"press-nav-bar-index"},[s.fixed&&s.placeholder?(r(),o("div",{key:0,style:n("height: "+i.height+"px;")},null,4)):c("v-if",!0),h("div",{class:y(l.navBarClass),style:n(l.navBarStyle)},[h("div",{class:"press-nav-bar__content"},[h("div",{class:"press-nav-bar__left",onClick:t[0]||(t[0]=(...e)=>l.onClickLeft&&l.onClickLeft(...e))},[s.leftArrow||s.leftText?(r(),o(d,{key:0},[s.leftArrow?(r(),f(k,{key:0,size:"16px",name:"arrow-left","custom-class":"press-nav-bar__arrow"})):c("v-if",!0),s.leftText?(r(),o("div",{key:1,class:"press-nav-bar__text","hover-class":"press-nav-bar__text--hover","hover-stay-time":"70"},p(s.leftText),1)):c("v-if",!0)],64)):g(e.$slots,"left",{key:1},void 0,!0)]),h("div",{class:y(["press-nav-bar__title",s.titleClass,"press-ellipsis"])},[s.title?(r(),o(d,{key:0},[v(p(s.title),1)],64)):g(e.$slots,"title",{key:1},void 0,!0)],2),h("div",{class:"press-nav-bar__right",onClick:t[1]||(t[1]=(...e)=>l.onClickRight&&l.onClickRight(...e))},[s.rightText?(r(),o("div",{key:0,class:"press-nav-bar__text","hover-class":"press-nav-bar__text--hover","hover-stay-time":"70"},p(s.rightText),1)):g(e.$slots,"right",{key:1},void 0,!0)])])],6)])}],["__scopeId","data-v-fcae2a58"]]),PressIconPlus:s},data:()=>({sectionStyle:"margin: 0;background: #f7f8fa;",headerStyle:"background: #f7f8fa;"}),methods:{onClickLeft(){console.log("onClickLeft")},onClickRight(){console.log("onClickRight")}}},[["render",function(e,t,s,a,i,l){const n=u("press-nav-bar"),c=u("demo-block"),h=u("press-icon-plus");return r(),o("div",{class:"demo-wrap demo-wrap--gray"},[k(c,{title:e.t("basicUsage"),"section-style":i.sectionStyle,"header-style":i.headerStyle},{default:x((()=>[k(n,{title:e.t("title"),"left-text":e.t("back"),"right-text":e.t("button"),"left-arrow":"","safe-area-inset-top":!1,onClickLeft:l.onClickLeft,onClickRight:l.onClickRight},null,8,["title","left-text","right-text","onClickLeft","onClickRight"])])),_:1},8,["title","section-style","header-style"]),k(c,{title:e.t("useSlot"),"section-style":i.sectionStyle,"header-style":i.headerStyle},{default:x((()=>[k(n,{title:e.t("title"),"left-text":e.t("back"),"left-arrow":"","safe-area-inset-top":!1},{right:x((()=>[k(h,{name:"search"})])),_:1},8,["title","left-text"])])),_:1},8,["title","section-style","header-style"])])}]]);export{b as default};

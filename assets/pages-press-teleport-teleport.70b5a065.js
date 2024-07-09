import{_ as e,o as t,c as s,m as o,n as r,a as i,w as a,d,k as n,j as l,t as h}from"./index-7a15811b.js";const b=e({i18n:{"zh-CN":{toggle:"切换"},"en-US":{toggle:"Toggle"}},components:{PressTeleport:e({name:"PressTeleport",options:{virtualHost:!0,styleIsolation:"shared"},components:{PressTeleportWeb:e({name:"PressTeleportWeb",props:{to:{type:String,required:!0},where:{type:String,default:"after"},disabled:Boolean},data:()=>({nodes:[],waiting:!1,observer:null,parent:null}),computed:{classes(){return this.disabled?["teleporter"]:["teleporter","hidden"]}},watch:{to:"maybeMove",where:"maybeMove",disabled(e){e?(this.disable(),this.teardownObserver()):(this.bootObserver(),this.move())}},mounted(){this.nodes=Array.from(this.$el.childNodes),this.disabled||this.bootObserver(),this.maybeMove()},beforeDestroy(){this.disable(),this.teardownObserver()},methods:{maybeMove(){this.disabled||this.move()},move(){if(this.waiting=!1,this.to&&(this.parent=document.querySelector(this.to)),!this.parent)return this.disable(),void(this.waiting=!0);"before"===this.where?this.parent.prepend(this.getFragment()):this.parent.appendChild(this.getFragment())},disable(){this.$el.appendChild(this.getFragment()),this.parent=null},getFragment(){const e=document.createDocumentFragment();return this.nodes.forEach((t=>e.appendChild(t))),e},onMutations(e){let t=!1;for(let s=0;s<e.length;s++){const o=e[s],r=Array.from(o.addedNodes).filter((e=>!this.nodes.includes(e)));Array.from(o.removedNodes).includes(this.parent)?(this.disable(),this.waiting=!this.disabled):this.waiting&&r.length>0&&(t=!0)}t&&this.move()},bootObserver(){this.observer||(this.observer=new MutationObserver((e=>this.onMutations(e))),this.observer.observe(document.body,{childList:!0,subtree:!0,attributes:!1,characterData:!1}))},teardownObserver(){this.observer&&(this.observer.disconnect(),this.observer=null)}}},[["render",function(e,i,a,d,n,l){return t(),s("div",{class:r(l.classes)},[o(e.$slots,"default",{},void 0,!0)],2)}],["__scopeId","data-v-570a4b18"]])},props:{to:{type:String,default:"body"},where:{type:String,default:"after"},disabled:Boolean},data:()=>({}),mounted(){},methods:{}},[["render",function(e,s,r,n,l,h){const b=d("PressTeleportWeb");return t(),i(b,{to:r.to,where:r.where,disabled:r.disabled},{default:a((()=>[o(e.$slots,"default")])),_:3},8,["to","where","disabled"])}]])},data:()=>({disabled:!1}),methods:{onToggle(){this.disabled=!this.disabled}}},[["render",function(e,o,r,i,b,p){const c=d("press-cell"),u=d("demo-block"),m=d("PressTeleport");return t(),s("div",{class:"demo-wrap"},[n("div",{class:"demo-inner"},[l(u,{title:e.t("basicUsage")},{default:a((()=>[l(c,{title:e.t("toggle"),"is-link":"",onClick:p.onToggle},null,8,["title","onClick"])])),_:1},8,["title"]),l(m,{to:"body",disabled:b.disabled},{default:a((()=>[n("div",{class:"demo-text"},h(b.disabled?"不使用 Teleport， 阴影部分在页面":"使用 Teleport，阴影部分在 body 下"),1)])),_:1},8,["disabled"])])])}],["__scopeId","data-v-43b92d17"]]);export{b as default};
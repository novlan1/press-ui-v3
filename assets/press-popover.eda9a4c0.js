import{H as e,I as t,_ as s,o,c as a,A as i,J as r,C as n,k as p}from"./index-a6ed3ec5.js";const h=s({name:"PressPopover",options:{...e,virtualHost:!0},props:{show:{type:Boolean,default:!0},placement:{type:String,default:"right"},popperClass:{type:String,default:""},...t,customStyle:{type:String,default:""}},emits:[],data:()=>({innerShow:!1,isEnter:!1,watchShowTimer:null}),computed:{},watch:{show:{handler(e){e?(clearTimeout(this.watchShowTimer),this.innerShow=e,this.isEnter=e):(this.isEnter=e,clearTimeout(this.watchShowTimer),this.watchShowTimer=setTimeout((()=>{this.innerShow=e}),300))},immediate:!0}},methods:{}},[["render",function(e,t,s,h,l,m){return l.innerShow?(o(),a("div",{key:0,style:r(s.customStyle),class:n(["press-popover",`press-popover--${s.placement}`,s.popperClass,e.customClass,l.isEnter?"press--animation__fade-in":"press--animation__fade-out"])},[i(e.$slots,"default",{},void 0,!0)],6)):p("v-if",!0)}],["__scopeId","data-v-c30b2fb0"]]);export{h as P};

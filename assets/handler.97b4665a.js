import{E as t,G as o,H as e,N as a,a9 as s,ao as n,a2 as r,_ as l,I as d,o as i,c as p,d as c,w as u,e as y,J as f,k as m,t as g,C as h,l as k,ap as x}from"./index-a6ed3ec5.js";import{W as I}from"./color.3a05f6e0.js";const S={rootStyle:function(e){return t({"z-index":e.zIndex,top:o(e.top)})},notifyStyle:function(o){return t({background:o.background,color:o.color})}},C={show:{type:Boolean,default:!1},message:{type:String,default:""},background:{type:String,default:""},type:{type:String,default:"danger"},color:{type:String,default:I},zIndex:{type:Number,default:110},safeAreaInsetTop:{type:Boolean,default:!1},top:{type:[null,String,Number],default:null},...d};const w=l({name:"PressNotify",options:{...e,styleIsolation:"shared"},components:{PressTransition:a},mixins:[s(C)],props:C,emits:[],data:()=>({onOpened:null,onClose:null,onClick:null,computed:S}),watch:{},created(){const t=n();this.statusBarHeight=t},methods:{onTap(t){const{onClick:o}=this;o&&o(r(t))}}},[["render",function(t,o,e,a,s,n){const r=k("press-transition");return i(),p("div",{class:"press-notify-index"},[c(r,{name:"slide-down",show:t.dataShow,"custom-class":"press-notify__container","custom-style":s.computed.rootStyle({zIndex:t.dataZIndex,top:t.dataTop}),onClick:n.onTap},{default:u((()=>[y("div",{class:h("press-notify press-notify--"+t.dataType),style:f(s.computed.notifyStyle({background:t.dataBackground,color:t.dataColor}))},[t.dataSafeAreaInsetTop?(i(),p("div",{key:0,style:f("height: "+t.statusBarHeight+"px")},null,4)):m("v-if",!0),y("span",null,g(t.dataMessage),1)],6)])),_:1},8,["show","custom-style","onClick"])])}],["__scopeId","data-v-4ef56693"]]);let T;T=x({defaultOptions:{selector:"#press-notify",type:"danger",message:"",background:"",duration:3e3,show:!0,zIndex:110,top:0,color:I,safeAreaInsetTop:!1,onClick:()=>{},onOpened:()=>{},onClose:()=>{},animationDuration:300},component:w});const b=T;export{w as P,b as a};

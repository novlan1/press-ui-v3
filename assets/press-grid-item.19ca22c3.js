import{s as e,u as t}from"./utils.f8cec38d.js";import{a as i}from"./add-unit.e5b08e9d.js";import{d as r,a as s}from"./press-component.fd531b70.js";import{P as o,C as n}from"./relation.25345683.js";import{f as a}from"./parent-map.b443f4cc.js";import{_ as l,o as d,c as u,m as c,n as m,p,k as h,F as f,a as g,t as y,d as S}from"./index-7a15811b.js";import{P as b}from"./press-icon-plus.eb48dd73.js";import{l as C}from"./link.d4e234c5.js";const k={rootStyle:function(t){return e([t.customStyle,{"padding-left":i(t.gutter)}])}};const v=l({name:"PressGrid",options:{...r,styleIsolation:"shared"},mixins:[o(a)],props:{square:{type:Boolean},gutter:{type:[Number,null],default:0},clickable:{type:Boolean},columnNum:{type:Number,default:4},center:{type:Boolean,default:!0},border:{type:Boolean,default:!0},direction:{type:String,default:""},iconSize:{type:String,default:""},reverse:{type:Boolean,default:!1},customStyle:{type:String,default:""},...s},emits:[],data:()=>({computed:k}),watch:{square:{handler(){this.updateChildren()},immediate:!0},gutter:{handler(){this.updateChildren()},immediate:!0},clickable:{handler(){this.updateChildren()},immediate:!0},columnNum:{handler(){this.updateChildren()},immediate:!0},center:{handler(){this.updateChildren()},immediate:!0},border:{handler(){this.updateChildren()},immediate:!0},direction:{handler(){this.updateChildren()},immediate:!0},iconSize:{handler(){this.updateChildren()},immediate:!0},reverse:{handler(){this.updateChildren()},immediate:!0}},created(){this.children=[]},methods:{updateChildren(){this.children&&this.children.forEach((e=>{e.updateStyle()}))}}},[["render",function(e,t,i,r,s,o){return d(),u("div",{class:m(`press-grid ${e.customClass} `+(i.border&&!i.gutter?"press-hairline--top":"")),style:p(s.computed.rootStyle({customStyle:i.customStyle,gutter:i.gutter}))},[c(e.$slots,"default",{},void 0,!0)],6)}],["__scopeId","data-v-afe7f0b4"]]);const q={wrapperStyle:function(t){const r=100/t.columnNum+"%";return e({width:r,"padding-top":t.square?r:null,"padding-right":i(t.gutter),"margin-top":t.index>=t.columnNum&&!t.square?i(t.gutter):null})},contentStyle:function(t){return t.square?e({right:i(t.gutter),bottom:i(t.gutter),height:"auto",position:"absolute"}):""}};const x=l({name:"PressGridItem",options:{...r,styleIsolation:"shared",virtualHost:!0},components:{PressIconPlus:b},mixins:[n(a),C],props:{icon:{type:String,default:""},iconColor:{type:String,default:""},iconPrefix:{type:String,default:"press-icon-plus"},dot:Boolean,info:{type:String,default:""},badge:{type:String,default:""},text:{type:String,default:""},useSlot:Boolean,...s},emits:["click"],data:()=>({viewStyle:"",computed:q,utils:t,square:!1,gutter:0,clickable:!1,columnNum:4,center:!0,border:!0,direction:"",iconSize:"",reverse:!1}),computed:{gridContentClass(){const{direction:e,center:i,square:r,reverse:s,clickable:o,border:n,gutter:a}=this;return`${t.bem2("grid-item__content",[e,{center:i,square:r,reverse:s,clickable:o,surround:n&&a}])} ${n?"press-hairline--surround":""}`}},mounted(){this.updateStyle()},methods:{updateStyle(){if(!this[a])return;const{columnNum:e,border:t,square:i,gutter:r,clickable:s,center:o,direction:n,reverse:l,iconSize:d}=this[a];this.center=o,this.border=t,this.square=i,this.gutter=r,this.clickable=s,this.direction=n,this.reverse=l,this.iconSize=d,this.columnNum=e},onClick(){this.$emit("click"),this.jumpLink()}}},[["render",function(e,t,i,r,s,o){const n=S("press-icon-plus");return d(),u("div",{class:m(`${e.customClass} `+s.utils.bem2("grid-item",{square:s.square})),style:p(s.computed.wrapperStyle({square:s.square,gutter:s.gutter,columnNum:s.columnNum,index:e.index})),onClick:t[0]||(t[0]=(...e)=>o.onClick&&o.onClick(...e))},[h("div",{class:m(o.gridContentClass),style:p(s.computed.contentStyle({square:s.square,gutter:s.gutter}))},[i.useSlot?c(e.$slots,"default",{key:0},void 0,!0):(d(),u(f,{key:1},[h("div",{class:"press-grid-item__icon"},[i.icon?(d(),g(n,{key:0,name:i.icon,color:i.iconColor,"class-prefix":i.iconPrefix,dot:i.dot,info:i.badge||i.info,size:s.iconSize},null,8,["name","color","class-prefix","dot","info","size"])):c(e.$slots,"icon",{key:1},void 0,!0)]),h("div",{class:"press-grid-item__text"},[i.text?(d(),u("span",{key:0},y(i.text),1)):c(e.$slots,"text",{key:1},void 0,!0)])],64))],6)],6)}],["__scopeId","data-v-17fbb90a"]]);export{x as P,v as a};

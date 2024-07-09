import{_ as e,o as t,c as s,k as n,p as a,n as i,m as l,b as o,j as u,I as r,w as h,d as p}from"./index-7a15811b.js";import{b as c}from"./press-component.fd531b70.js";import{s as d,u as m}from"./utils.f8cec38d.js";import{a as g}from"./add-unit.e5b08e9d.js";import{g as b,a as f}from"./event.fe25d607.js";import{P as v}from"./press-toast.66948507.js";import{P as C}from"./press-cell.fbb64f1a.js";import"./support-passive.bc409298.js";import"./press-icon-plus.eb48dd73.js";import"./press-info.b7012b43.js";import"./press-loading-plus.1f19fb52.js";import"./press-overlay.90919dc1.js";import"./press-transition.4baf6de8.js";import"./version.2049afb8.js";import"./dialog-mixin.972593d2.js";import"./component-handler.0dac4a4b.js";import"./link.d4e234c5.js";const y={buttonStyle:function(e){return d({width:g(e.buttonSize),height:g(e.buttonSize)})},inputStyle:function(e){return d({width:g(e.inputWidth),height:g(e.buttonSize)})}};function S(e,t){return String(e)===String(t)}const T=e({i18n:{"zh-CN":{step:"步长设置",range:"限制输入范围",integer:"限制输入整数",roundTheme:"圆角风格",asyncChange:"异步变更",customSize:"自定义大小",disableInput:"禁用输入框",decimalLength:"固定小数位数",closeLongPress:"关闭长按"},"en-US":{step:"Step",range:"Range",integer:"Integer",roundTheme:"Round Theme",asyncChange:"Async Change",customSize:"Custom Size",disableInput:"Disable Input",decimalLength:"Decimal Length",closeLongPress:"Close Long Press"}},components:{PressStepper:e({name:"PressStepper",field:!0,props:{value:{type:[Number,String],default:0},integer:{type:Boolean},disabled:Boolean,inputWidth:{type:String,default:""},buttonSize:{type:String,default:""},asyncChange:Boolean,disableInput:Boolean,decimalLength:{type:Number,default:0},min:{type:Number,default:1},max:{type:Number,default:Number.MAX_SAFE_INTEGER},step:{type:Number,default:1},showPlus:{type:Boolean,default:!0},showMinus:{type:Boolean,default:!0},disablePlus:Boolean,disableMinus:Boolean,longPress:{type:Boolean,default:!0},theme:{type:String,default:""},alwaysEmbed:Boolean,customClass:{type:String,default:""},inputClass:{type:String,default:""},minusClass:{type:String,default:""},plusClass:{type:String,default:""}},emits:["focus","blur","change","overlimit","minus","plus"],data:()=>({currentValue:"",focus:!1,utils:m,computed:y}),watch:{value:{handler(){this.observeValue()}},integer:{handler(){this.check()}},decimalLength:{handler(){this.check()}},min:{handler(){this.check()}},max:{handler(){this.check()}}},created(){this.currentValue=this.format(this.value)},methods:{observeValue(){const{value:e,currentValue:t}=this;S(e,t)||(this.currentValue=this.format(e))},check(){const e=this.format(this.currentValue);S(e,this.currentValue)||(this.currentValue=e)},isDisabled(e){const{disabled:t,disablePlus:s,disableMinus:n,currentValue:a,max:i,min:l}=this;return"plus"===e?t||s||a>=i:t||n||a<=l},onFocus(e){this.$emit("focus",b(e))},onBlur(e){const t=this.format(f(e));this.emitChange(t),this.$emit("blur",Object.assign(Object.assign({},b(e)),{value:t}))},filter(e){return e=String(e).replace(/[^0-9.-]/g,""),this.integer&&-1!==e.indexOf(".")&&(e=e.split(".")[0]),e},format(e){return e=""===(e=this.filter(e))?0:+e,e=Math.max(Math.min(this.max,e),this.min),c(this.decimalLength)&&(e=e.toFixed(this.decimalLength)),e},onInput(e){const t=f(e);if(""===t)return;let s=this.filter(t);if(c(this.decimalLength)&&-1!==s.indexOf(".")){const e=s.split(".");s=`${e[0]}.${e[1].slice(0,this.decimalLength)}`}this.emitChange(s)},emitChange(e){this.asyncChange||(this.currentValue=e),this.$emit("change",e)},onChange(){const{type:e}=this;if(this.isDisabled(e))return void this.$emit("overlimit",e);const t="minus"===e?-this.step:+this.step,s=this.format(function(e,t){const s=Math.pow(10,10);return Math.round((e+t)*s)/s}(+this.currentValue,t));this.emitChange(s),this.$emit(e)},longPressStep(){this.longPressTimer=setTimeout((()=>{this.onChange(),this.longPressStep()}),200)},onTap(e){const{type:t}=e.currentTarget.dataset;this.type=t,this.onChange()},onTouchStart(e){if(!this.longPress)return;clearTimeout(this.longPressTimer);const{type:t}=e.currentTarget.dataset;this.type=t,this.isLongPress=!1,this.longPressTimer=setTimeout((()=>{this.isLongPress=!0,this.onChange(),this.longPressStep()}),600)},onTouchEnd(){this.longPress&&clearTimeout(this.longPressTimer)}}},[["render",function(e,h,p,c,d,m){const g=r;return t(),s("div",{class:"press-stepper-index"},[n("div",{class:i([d.utils.bem2("stepper",[p.theme]),p.customClass])},[p.showMinus?(t(),s("div",{key:0,"data-type":"minus",style:a(""+d.computed.buttonStyle({buttonSize:p.buttonSize})),class:i([p.minusClass,d.utils.bem2("stepper__minus",{disabled:p.disabled||p.disableMinus||d.currentValue<=p.min})]),"hover-class":"press-stepper__minus--hover","hover-stay-time":"70",onClick:h[0]||(h[0]=(...e)=>m.onTap&&m.onTap(...e)),onTouchstart:h[1]||(h[1]=(...e)=>m.onTouchStart&&m.onTouchStart(...e)),onTouchend:h[2]||(h[2]=(...e)=>m.onTouchEnd&&m.onTouchEnd(...e))},[l(e.$slots,"minus",{},void 0,!0)],38)):o("v-if",!0),u(g,{"always-embed":!1,type:p.integer?"number":"digit",class:i(p.inputClass+" "+d.utils.bem2("stepper__input",{disabled:p.disabled||p.disableInput})),style:a(""+d.computed.inputStyle({buttonSize:p.buttonSize,inputWidth:p.inputWidth})),value:d.currentValue,focus:d.focus,disabled:p.disabled||p.disableInput,onInput:m.onInput,onFocus:m.onFocus,onBlur:m.onBlur},null,8,["type","class","style","value","focus","disabled","onInput","onFocus","onBlur"]),p.showPlus?(t(),s("div",{key:1,"data-type":"plus",style:a(""+d.computed.buttonStyle({buttonSize:p.buttonSize})),class:i(p.plusClass+" "+d.utils.bem2("stepper__plus",{disabled:p.disabled||p.disablePlus||d.currentValue>=p.max})),"hover-class":"press-stepper__plus--hover","hover-stay-time":"70",onClick:h[3]||(h[3]=(...e)=>m.onTap&&m.onTap(...e)),onTouchstart:h[4]||(h[4]=(...e)=>m.onTouchStart&&m.onTouchStart(...e)),onTouchend:h[5]||(h[5]=(...e)=>m.onTouchEnd&&m.onTouchEnd(...e))},[l(e.$slots,"plus",{},void 0,!0)],38)):o("v-if",!0)],2)])}],["__scopeId","data-v-6dc895cf"]]),PressToast:v,PressCell:C},data:()=>({value:1,asyncValue:1}),methods:{onChange(e){console.log("onChange.val",e)},onSyncChange(e){this.$toast.loading({duration:1e3}),setTimeout((()=>{console.log("onSyncChange.val",e),this.asyncValue=e}),1e3)}}},[["render",function(e,n,a,i,l,o){const r=p("press-stepper"),c=p("press-cell");return t(),s("div",{class:"demo-wrap"},[u(c,{title:e.t("basicUsage")},{default:h((()=>[u(r,{value:l.value,onChange:o.onChange},null,8,["value","onChange"])])),_:1},8,["title"]),u(c,{title:e.t("step")},{default:h((()=>[u(r,{value:l.value,step:2,onChange:o.onChange},null,8,["value","onChange"])])),_:1},8,["title"]),u(c,{title:e.t("range")},{default:h((()=>[u(r,{value:l.value,min:5,max:8,onChange:o.onChange},null,8,["value","onChange"])])),_:1},8,["title"]),u(c,{title:e.t("integer")},{default:h((()=>[u(r,{value:l.value,integer:"",onChange:o.onChange},null,8,["value","onChange"])])),_:1},8,["title"]),u(c,{title:e.t("disabled")},{default:h((()=>[u(r,{disabled:"",value:l.value,onChange:o.onChange},null,8,["value","onChange"])])),_:1},8,["title"]),u(c,{title:e.t("closeLongPress")},{default:h((()=>[u(r,{"long-press":!1,value:l.value,onChange:o.onChange},null,8,["value","onChange"])])),_:1},8,["title"]),u(c,{title:e.t("decimalLength")},{default:h((()=>[u(r,{step:.2,"decimal-length":1,value:l.value,onChange:o.onChange},null,8,["step","value","onChange"])])),_:1},8,["title"]),u(c,{title:e.t("asyncChange")},{default:h((()=>[u(r,{"async-change":"",value:l.asyncValue,onChange:o.onSyncChange},null,8,["value","onChange"])])),_:1},8,["title"]),u(c,{title:e.t("customSize")},{default:h((()=>[u(r,{"input-width":"40px","button-size":"32px",value:l.value,onChange:o.onChange},null,8,["value","onChange"])])),_:1},8,["title"])])}]]);export{T as default};

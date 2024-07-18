import{_ as e,o as t,c as s,h as n,i as a,n as i,r as l,e as o,f as u,I as r,w as h,j as p}from"./index-43eb3ea0.js";import{a as d}from"./validator.84caa8d5.js";import{u as c}from"./utils.bb2d8d10.js";import{s as m}from"./style.0f94ff97.js";import{a as g}from"./add-unit.0c57c089.js";import{g as f,a as v}from"./event.1c00601d.js";import{P as b}from"./press-toast.a8e97081.js";import{P as C}from"./press-cell.a0845ac7.js";import"./support-passive.bc409298.js";import"./press-icon-plus.43efdcdd.js";import"./press-info.68d3dd51.js";import"./press-component.181873fd.js";import"./press-loading-plus.e7ffc3ab.js";import"./press-overlay.4c76514c.js";import"./press-transition.e8aeacc8.js";import"./version.7ee5c281.js";import"./dialog-mixin.6ac42ef3.js";import"./component-handler.9abe3b3e.js";import"./link.82331220.js";const y={buttonStyle:function(e){return m({width:g(e.buttonSize),height:g(e.buttonSize)})},inputStyle:function(e){return m({width:g(e.inputWidth),height:g(e.buttonSize)})}};function S(e,t){return String(e)===String(t)}const T=e({i18n:{"zh-CN":{step:"步长设置",range:"限制输入范围",integer:"限制输入整数",roundTheme:"圆角风格",asyncChange:"异步变更",customSize:"自定义大小",disableInput:"禁用输入框",decimalLength:"固定小数位数",closeLongPress:"关闭长按"},"en-US":{step:"Step",range:"Range",integer:"Integer",roundTheme:"Round Theme",asyncChange:"Async Change",customSize:"Custom Size",disableInput:"Disable Input",decimalLength:"Decimal Length",closeLongPress:"Close Long Press"}},components:{PressStepper:e({name:"PressStepper",field:!0,props:{value:{type:[Number,String],default:0},integer:{type:Boolean},disabled:Boolean,inputWidth:{type:String,default:""},buttonSize:{type:String,default:""},asyncChange:Boolean,disableInput:Boolean,decimalLength:{type:Number,default:0},min:{type:Number,default:1},max:{type:Number,default:Number.MAX_SAFE_INTEGER},step:{type:Number,default:1},showPlus:{type:Boolean,default:!0},showMinus:{type:Boolean,default:!0},disablePlus:Boolean,disableMinus:Boolean,longPress:{type:Boolean,default:!0},theme:{type:String,default:""},alwaysEmbed:Boolean,customClass:{type:String,default:""},inputClass:{type:String,default:""},minusClass:{type:String,default:""},plusClass:{type:String,default:""}},emits:["focus","blur","change","overlimit","minus","plus"],data:()=>({currentValue:"",focus:!1,utils:c,computed:y}),watch:{value:{handler(){this.observeValue()}},integer:{handler(){this.check()}},decimalLength:{handler(){this.check()}},min:{handler(){this.check()}},max:{handler(){this.check()}}},created(){this.currentValue=this.format(this.value)},methods:{observeValue(){const{value:e,currentValue:t}=this;S(e,t)||(this.currentValue=this.format(e))},check(){const e=this.format(this.currentValue);S(e,this.currentValue)||(this.currentValue=e)},isDisabled(e){const{disabled:t,disablePlus:s,disableMinus:n,currentValue:a,max:i,min:l}=this;return"plus"===e?t||s||a>=i:t||n||a<=l},onFocus(e){this.$emit("focus",f(e))},onBlur(e){const t=this.format(v(e));this.emitChange(t),this.$emit("blur",Object.assign(Object.assign({},f(e)),{value:t}))},filter(e){return e=String(e).replace(/[^0-9.-]/g,""),this.integer&&-1!==e.indexOf(".")&&(e=e.split(".")[0]),e},format(e){return e=""===(e=this.filter(e))?0:+e,e=Math.max(Math.min(this.max,e),this.min),d(this.decimalLength)&&(e=e.toFixed(this.decimalLength)),e},onInput(e){const t=v(e);if(""===t)return;let s=this.filter(t);if(d(this.decimalLength)&&-1!==s.indexOf(".")){const e=s.split(".");s=`${e[0]}.${e[1].slice(0,this.decimalLength)}`}this.emitChange(s)},emitChange(e){this.asyncChange||(this.currentValue=e),this.$emit("change",e)},onChange(){const{type:e}=this;if(this.isDisabled(e))return void this.$emit("overlimit",e);const t="minus"===e?-this.step:+this.step,s=this.format(function(e,t){const s=Math.pow(10,10);return Math.round((e+t)*s)/s}(+this.currentValue,t));this.emitChange(s),this.$emit(e)},longPressStep(){this.longPressTimer=setTimeout((()=>{this.onChange(),this.longPressStep()}),200)},onTap(e){const{type:t}=e.currentTarget.dataset;this.type=t,this.onChange()},onTouchStart(e){if(!this.longPress)return;clearTimeout(this.longPressTimer);const{type:t}=e.currentTarget.dataset;this.type=t,this.isLongPress=!1,this.longPressTimer=setTimeout((()=>{this.isLongPress=!0,this.onChange(),this.longPressStep()}),600)},onTouchEnd(){this.longPress&&clearTimeout(this.longPressTimer)}}},[["render",function(e,h,p,d,c,m){const g=r;return t(),s("div",{class:"press-stepper-index"},[n("div",{class:i([c.utils.bem2("stepper",[p.theme]),p.customClass])},[p.showMinus?(t(),s("div",{key:0,"data-type":"minus",style:a(""+c.computed.buttonStyle({buttonSize:p.buttonSize})),class:i([p.minusClass,c.utils.bem2("stepper__minus",{disabled:p.disabled||p.disableMinus||c.currentValue<=p.min})]),"hover-class":"press-stepper__minus--hover","hover-stay-time":"70",onClick:h[0]||(h[0]=(...e)=>m.onTap&&m.onTap(...e)),onTouchstart:h[1]||(h[1]=(...e)=>m.onTouchStart&&m.onTouchStart(...e)),onTouchend:h[2]||(h[2]=(...e)=>m.onTouchEnd&&m.onTouchEnd(...e))},[l(e.$slots,"minus",{},void 0,!0)],38)):o("v-if",!0),u(g,{"always-embed":!1,type:p.integer?"number":"digit",class:i(p.inputClass+" "+c.utils.bem2("stepper__input",{disabled:p.disabled||p.disableInput})),style:a(""+c.computed.inputStyle({buttonSize:p.buttonSize,inputWidth:p.inputWidth})),value:c.currentValue,focus:c.focus,disabled:p.disabled||p.disableInput,onInput:m.onInput,onFocus:m.onFocus,onBlur:m.onBlur},null,8,["type","class","style","value","focus","disabled","onInput","onFocus","onBlur"]),p.showPlus?(t(),s("div",{key:1,"data-type":"plus",style:a(""+c.computed.buttonStyle({buttonSize:p.buttonSize})),class:i(p.plusClass+" "+c.utils.bem2("stepper__plus",{disabled:p.disabled||p.disablePlus||c.currentValue>=p.max})),"hover-class":"press-stepper__plus--hover","hover-stay-time":"70",onClick:h[3]||(h[3]=(...e)=>m.onTap&&m.onTap(...e)),onTouchstart:h[4]||(h[4]=(...e)=>m.onTouchStart&&m.onTouchStart(...e)),onTouchend:h[5]||(h[5]=(...e)=>m.onTouchEnd&&m.onTouchEnd(...e))},[l(e.$slots,"plus",{},void 0,!0)],38)):o("v-if",!0)],2)])}],["__scopeId","data-v-adffcf64"]]),PressToast:b,PressCell:C},data:()=>({value:1,asyncValue:1}),methods:{onChange(e){console.log("onChange.val",e)},onSyncChange(e){this.$toast.loading({duration:1e3}),setTimeout((()=>{console.log("onSyncChange.val",e),this.asyncValue=e}),1e3)}}},[["render",function(e,n,a,i,l,o){const r=p("press-stepper"),d=p("press-cell");return t(),s("div",{class:"demo-wrap"},[u(d,{title:e.t("basicUsage")},{default:h((()=>[u(r,{value:l.value,onChange:o.onChange},null,8,["value","onChange"])])),_:1},8,["title"]),u(d,{title:e.t("step")},{default:h((()=>[u(r,{value:l.value,step:2,onChange:o.onChange},null,8,["value","onChange"])])),_:1},8,["title"]),u(d,{title:e.t("range")},{default:h((()=>[u(r,{value:l.value,min:5,max:8,onChange:o.onChange},null,8,["value","onChange"])])),_:1},8,["title"]),u(d,{title:e.t("integer")},{default:h((()=>[u(r,{value:l.value,integer:"",onChange:o.onChange},null,8,["value","onChange"])])),_:1},8,["title"]),u(d,{title:e.t("disabled")},{default:h((()=>[u(r,{disabled:"",value:l.value,onChange:o.onChange},null,8,["value","onChange"])])),_:1},8,["title"]),u(d,{title:e.t("closeLongPress")},{default:h((()=>[u(r,{"long-press":!1,value:l.value,onChange:o.onChange},null,8,["value","onChange"])])),_:1},8,["title"]),u(d,{title:e.t("decimalLength")},{default:h((()=>[u(r,{step:.2,"decimal-length":1,value:l.value,onChange:o.onChange},null,8,["step","value","onChange"])])),_:1},8,["title"]),u(d,{title:e.t("asyncChange")},{default:h((()=>[u(r,{"async-change":"",value:l.asyncValue,onChange:o.onSyncChange},null,8,["value","onChange"])])),_:1},8,["title"]),u(d,{title:e.t("customSize")},{default:h((()=>[u(r,{"input-width":"40px","button-size":"32px",value:l.value,onChange:o.onChange},null,8,["value","onChange"])])),_:1},8,["title"])])}]]);export{T as default};

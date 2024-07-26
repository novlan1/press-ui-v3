import{a as e,c as t}from"./add-unit.9de8b2f7.js";import{b as r}from"./press-component.573dfcec.js";import{_ as s,o as n,c as i,r as o,i as a,f as l,j as u,h as d,t as f,e as c,w as p,F as m,p as h,q as g,v as y}from"./index-66fd861e.js";import{g as b}from"./parent.59fa8a22.js";import{s as v}from"./style.0f94ff97.js";import{P as _}from"./press-icon-plus.a1094e70.js";import{P as w}from"./press-field.6ee9424f.js";import{P as q}from"./press-checkbox.9021ed5c.js";import{P as x}from"./press-checkbox-group.ba748ee3.js";import{P,a as j}from"./press-radio-group.91066b2c.js";import{P as k}from"./press-button.2236d5eb.js";import{P as F}from"./press-action-sheet.7d3f005a.js";import{P as C}from"./press-count-down.78163958.js";import"./press-info.8563e54c.js";import"./utils.d8f13396.js";import"./press-cell.182b41b4.js";import"./link.af741451.js";import"./event.b5c3f8af.js";import"./support-passive.bc409298.js";import"./relation.8b10893c.js";import"./parent-map.b443f4cc.js";import"./version.0d1ce575.js";import"./press-loading-plus.6ff974e3.js";import"./press-loading.084df768.js";import"./button.e606098b.js";import"./press-popup-plus.c2e56d09.js";import"./press-overlay.1835b372.js";import"./press-transition.8a179cbe.js";const S={props:{model:{type:Object,default:()=>({})},rules:{type:[Object,Function,Array],default:()=>({})},errorType:{type:String,default:"message"},borderBottom:{type:Boolean,default:!0},labelPosition:{type:String,default:"left"},labelWidth:{type:[String,Number],default:45},labelAlign:{type:String,default:"left"},labelStyle:{type:Object,default:()=>({})}}},O=/%[sdj%]/g;let I=function(){};function A(e){if(!e||!e.length)return null;const t={};return e.forEach((e=>{const{field:r}=e;t[r]=t[r]||[],t[r].push(e)})),t}function $(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];let s=1;const n=t[0],i=t.length;if("function"==typeof n)return n.apply(null,t.slice(1));if("string"==typeof n){let e=String(n).replace(O,(e=>{if("%%"===e)return"%";if(s>=i)return e;switch(e){case"%s":return String(t[s++]);case"%d":return Number(t[s++]);case"%j":try{return JSON.stringify(t[s++])}catch(r){return"[Circular]"}break;default:return e}}));for(let r=t[s];s<i;r=t[++s])e+=` ${r}`;return e}return n}function D(e,t){return null==e||(!("array"!==t||!Array.isArray(e)||e.length)||!(!function(e){return"string"===e||"url"===e||"hex"===e||"email"===e||"pattern"===e}(t)||"string"!=typeof e||e))}function T(e,t,r){let s=0;const n=e.length;!function i(o){if(o&&o.length)return void r(o);const a=s;s+=1,a<n?t(e[a],i):r([])}([])}function V(e,t,r,s){if(t.first){const t=new Promise(((t,n)=>{const i=function(e){const t=[];return Object.keys(e).forEach((r=>{t.push.apply(t,e[r])})),t}(e);T(i,r,(function(e){return s(e),e.length?n({errors:e,fields:A(e)}):t()}))}));return t.catch((e=>e)),t}let n=t.firstFields||[];!0===n&&(n=Object.keys(e));const i=Object.keys(e),o=i.length;let a=0;const l=[],u=new Promise(((t,u)=>{const d=function(e){if(l.push.apply(l,e),a++,a===o)return s(l),l.length?u({errors:l,fields:A(l)}):t()};i.length||(s(l),t()),i.forEach((t=>{const s=e[t];-1!==n.indexOf(t)?T(s,r,d):function(e,t,r){const s=[];let n=0;const i=e.length;function o(e){s.push.apply(s,e),n++,n===i&&r(s)}e.forEach((e=>{t(e,o)}))}(s,r,d)}))}));return u.catch((e=>e)),u}function R(e){return function(t){return t&&t.message?(t.field=t.field||e.fullField,t):{message:"function"==typeof t?t():t,field:t.field||e.fullField}}}function E(e,t){if(t)for(const r in t)if(t.hasOwnProperty(r)){const s=t[r];"object"==typeof s&&"object"==typeof e[r]?e[r]={...e[r],...s}:e[r]=s}return e}function B(e,t,r,s,n,i){!e.required||r.hasOwnProperty(e.field)&&!D(t,i||e.type)||s.push($(n.messages.required,e.fullField))}"undefined"!=typeof process&&process.env;const M={email:/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,url:new RegExp("^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$","i"),hex:/^#?([a-f0-9]{6}|[a-f0-9]{3})$/i};var z={integer:function(e){return/^(-)?\d+$/.test(e)},float:function(e){return/^(-)?\d+(\.\d+)?$/.test(e)},array:function(e){return Array.isArray(e)},regexp:function(e){if(e instanceof RegExp)return!0;try{return!!new RegExp(e)}catch(t){return!1}},date:function(e){return"function"==typeof e.getTime&&"function"==typeof e.getMonth&&"function"==typeof e.getYear},number:function(e){return!isNaN(e)&&"number"==typeof+e},object:function(e){return"object"==typeof e&&!z.array(e)},method:function(e){return"function"==typeof e},email:function(e){return"string"==typeof e&&!!e.match(M.email)&&e.length<255},url:function(e){return"string"==typeof e&&!!e.match(M.url)},hex:function(e){return"string"==typeof e&&!!e.match(M.hex)}};const N="enum";const W={required:B,whitespace:function(e,t,r,s,n){(/^\s+$/.test(t)||""===t)&&s.push($(n.messages.whitespace,e.fullField))},type:function(e,t,r,s,n){if(e.required&&void 0===t)return void B(e,t,r,s,n);const i=e.type;["integer","float","array","regexp","object","method","email","number","date","url","hex"].indexOf(i)>-1?z[i](t)||s.push($(n.messages.types[i],e.fullField,e.type)):i&&typeof t!==e.type&&s.push($(n.messages.types[i],e.fullField,e.type))},range:function(e,t,r,s,n){const i="number"==typeof e.len,o="number"==typeof e.min,a="number"==typeof e.max,l=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g;let u=t,d=null;const f="number"==typeof t,c="string"==typeof t,p=Array.isArray(t);if(f?d="number":c?d="string":p&&(d="array"),!d)return!1;p&&(u=t.length),c&&(u=t.replace(l,"_").length),i?u!==e.len&&s.push($(n.messages[d].len,e.fullField,e.len)):o&&!a&&u<e.min?s.push($(n.messages[d].min,e.fullField,e.min)):a&&!o&&u>e.max?s.push($(n.messages[d].max,e.fullField,e.max)):o&&a&&(u<e.min||u>e.max)&&s.push($(n.messages[d].range,e.fullField,e.min,e.max))},enum:function(e,t,r,s,n){e[N]=Array.isArray(e[N])?e[N]:[],-1===e[N].indexOf(t)&&s.push($(n.messages[N],e.fullField,e[N].join(", ")))},pattern:function(e,t,r,s,n){if(e.pattern)if(e.pattern instanceof RegExp)e.pattern.lastIndex=0,e.pattern.test(t)||s.push($(n.messages.pattern.mismatch,e.fullField,t,e.pattern));else if("string"==typeof e.pattern){new RegExp(e.pattern).test(t)||s.push($(n.messages.pattern.mismatch,e.fullField,t,e.pattern))}}};function G(e,t,r,s,n){const i=e.type,o=[];if(e.required||!e.required&&s.hasOwnProperty(e.field)){if(D(t,i)&&!e.required)return r();W.required(e,t,s,o,n,i),D(t,i)||W.type(e,t,s,o,n)}r(o)}const L={string:function(e,t,r,s,n){const i=[];if(e.required||!e.required&&s.hasOwnProperty(e.field)){if(D(t,"string")&&!e.required)return r();W.required(e,t,s,i,n,"string"),D(t,"string")||(W.type(e,t,s,i,n),W.range(e,t,s,i,n),W.pattern(e,t,s,i,n),!0===e.whitespace&&W.whitespace(e,t,s,i,n))}r(i)},method:function(e,t,r,s,n){const i=[];if(e.required||!e.required&&s.hasOwnProperty(e.field)){if(D(t)&&!e.required)return r();W.required(e,t,s,i,n),void 0!==t&&W.type(e,t,s,i,n)}r(i)},number:function(e,t,r,s,n){const i=[];if(e.required||!e.required&&s.hasOwnProperty(e.field)){if(""===t&&(t=void 0),D(t)&&!e.required)return r();W.required(e,t,s,i,n),void 0!==t&&(W.type(e,t,s,i,n),W.range(e,t,s,i,n))}r(i)},boolean:function(e,t,r,s,n){const i=[];if(e.required||!e.required&&s.hasOwnProperty(e.field)){if(D(t)&&!e.required)return r();W.required(e,t,s,i,n),void 0!==t&&W.type(e,t,s,i,n)}r(i)},regexp:function(e,t,r,s,n){const i=[];if(e.required||!e.required&&s.hasOwnProperty(e.field)){if(D(t)&&!e.required)return r();W.required(e,t,s,i,n),D(t)||W.type(e,t,s,i,n)}r(i)},integer:function(e,t,r,s,n){const i=[];if(e.required||!e.required&&s.hasOwnProperty(e.field)){if(D(t)&&!e.required)return r();W.required(e,t,s,i,n),void 0!==t&&(W.type(e,t,s,i,n),W.range(e,t,s,i,n))}r(i)},float:function(e,t,r,s,n){const i=[];if(e.required||!e.required&&s.hasOwnProperty(e.field)){if(D(t)&&!e.required)return r();W.required(e,t,s,i,n),void 0!==t&&(W.type(e,t,s,i,n),W.range(e,t,s,i,n))}r(i)},array:function(e,t,r,s,n){const i=[];if(e.required||!e.required&&s.hasOwnProperty(e.field)){if(D(t,"array")&&!e.required)return r();W.required(e,t,s,i,n,"array"),D(t,"array")||(W.type(e,t,s,i,n),W.range(e,t,s,i,n))}r(i)},object:function(e,t,r,s,n){const i=[];if(e.required||!e.required&&s.hasOwnProperty(e.field)){if(D(t)&&!e.required)return r();W.required(e,t,s,i,n),void 0!==t&&W.type(e,t,s,i,n)}r(i)},enum:function(e,t,r,s,n){const i=[];if(e.required||!e.required&&s.hasOwnProperty(e.field)){if(D(t)&&!e.required)return r();W.required(e,t,s,i,n),void 0!==t&&W.enum(e,t,s,i,n)}r(i)},pattern:function(e,t,r,s,n){const i=[];if(e.required||!e.required&&s.hasOwnProperty(e.field)){if(D(t,"string")&&!e.required)return r();W.required(e,t,s,i,n),D(t,"string")||W.pattern(e,t,s,i,n)}r(i)},date:function(e,t,r,s,n){const i=[];if(e.required||!e.required&&s.hasOwnProperty(e.field)){if(D(t)&&!e.required)return r();if(W.required(e,t,s,i,n),!D(t)){let r;r="number"==typeof t?new Date(t):t,W.type(e,r,s,i,n),r&&W.range(e,r.getTime(),s,i,n)}}r(i)},url:G,hex:G,email:G,required:function(e,t,r,s,n){const i=[],o=Array.isArray(t)?"array":typeof t;W.required(e,t,s,i,n,o),r(i)},any:function(e,t,r,s,n){const i=[];if(e.required||!e.required&&s.hasOwnProperty(e.field)){if(D(t)&&!e.required)return r();W.required(e,t,s,i,n)}r(i)}};function U(){return{default:"Validation error on field %s",required:"%s is required",enum:"%s must be one of %s",whitespace:"%s cannot be empty",date:{format:"%s date %s is invalid for format %s",parse:"%s date could not be parsed, %s is invalid ",invalid:"%s date %s is invalid"},types:{string:"%s is not a %s",method:"%s is not a %s (function)",array:"%s is not an %s",object:"%s is not an %s",number:"%s is not a %s",date:"%s is not a %s",boolean:"%s is not a %s",integer:"%s is not an %s",float:"%s is not a %s",regexp:"%s is not a valid %s",email:"%s is not a valid %s",url:"%s is not a valid %s",hex:"%s is not a valid %s"},string:{len:"%s must be exactly %s characters",min:"%s must be at least %s characters",max:"%s cannot be longer than %s characters",range:"%s must be between %s and %s characters"},number:{len:"%s must equal %s",min:"%s cannot be less than %s",max:"%s cannot be greater than %s",range:"%s must be between %s and %s"},array:{len:"%s must be exactly %s in length",min:"%s cannot be less than %s in length",max:"%s cannot be greater than %s in length",range:"%s must be between %s and %s in length"},pattern:{mismatch:"%s value %s does not match pattern %s"},clone:function(){const e=JSON.parse(JSON.stringify(this));return e.clone=this.clone,e}}}const K=U();function H(e){this.rules=null,this._messages=K,this.define(e)}function J(e,t){if(e){if("string"!=typeof t||""===t)return"";if(-1!==t.indexOf(".")){const r=t.split(".");let s=e[r[0]]||{};for(let e=1;e<r.length;e++)s&&(s=s[r[e]]);return s}return e[t]}}function Y(e,t,r){if(!e)return;const s=function(e,t,r){if(1!==t.length)for(;t.length>1;){const n=t[0];e[n]&&"object"==typeof e[n]||(e[n]={}),t.shift(),s(e[n],t,r)}else e[t[0]]=r};if("string"!=typeof t||""===t);else if(-1!==t.indexOf(".")){const n=t.split(".");s(e,n,r)}else e[t]=r}H.prototype={messages:function(e){return e&&(this._messages=E(U(),e)),this._messages},define:function(e){if(!e)throw new Error("Cannot configure a schema with no rules");if("object"!=typeof e||Array.isArray(e))throw new Error("Rules must be an object");let t,r;for(t in this.rules={},e)e.hasOwnProperty(t)&&(r=e[t],this.rules[t]=Array.isArray(r)?r:[r])},validate:function(e,t,r){const s=this;void 0===t&&(t={}),void 0===r&&(r=function(){});let n,i,o=e,a=t,l=r;if("function"==typeof a&&(l=a,a={}),!this.rules||0===Object.keys(this.rules).length)return l&&l(),Promise.resolve();if(a.messages){let e=this.messages();e===K&&(e=U()),E(e,a.messages),a.messages=e}else a.messages=this.messages();const u={};(a.keys||Object.keys(this.rules)).forEach((t=>{n=s.rules[t],i=o[t],n.forEach((r=>{let n=r;"function"==typeof n.transform&&(o===e&&(o={...o}),i=o[t]=n.transform(i)),n="function"==typeof n?{validator:n}:{...n},n.validator=s.getValidationMethod(n),n.field=t,n.fullField=n.fullField||t,n.type=s.getType(n),n.validator&&(u[t]=u[t]||[],u[t].push({rule:n,value:i,source:o,field:t}))}))}));const d={};return V(u,a,((e,t)=>{const{rule:r}=e;let s,n=!("object"!==r.type&&"array"!==r.type||"object"!=typeof r.fields&&"object"!=typeof r.defaultField);function i(e,t){return{...t,fullField:`${r.fullField}.${e}`}}function o(s){void 0===s&&(s=[]);let o=s;if(Array.isArray(o)||(o=[o]),!a.suppressWarning&&o.length&&H.warning("async-validator:",o),o.length&&r.message&&(o=[].concat(r.message)),o=o.map(R(r)),a.first&&o.length)return d[r.field]=1,t(o);if(n){if(r.required&&!e.value)return o=r.message?[].concat(r.message).map(R(r)):a.error?[a.error(r,$(a.messages.required,r.field))]:[],t(o);let s={};if(r.defaultField)for(const t in e.value)e.value.hasOwnProperty(t)&&(s[t]=r.defaultField);s={...s,...e.rule.fields};for(const e in s)if(s.hasOwnProperty(e)){const t=Array.isArray(s[e])?s[e]:[s[e]];s[e]=t.map(i.bind(null,e))}const n=new H(s);n.messages(a.messages),e.rule.options&&(e.rule.options.messages=a.messages,e.rule.options.error=a.error),n.validate(e.value,e.rule.options||a,(e=>{const r=[];o&&o.length&&r.push.apply(r,o),e&&e.length&&r.push.apply(r,e),t(r.length?r:null)}))}else t(o)}n=n&&(r.required||!r.required&&e.value),r.field=e.field,r.asyncValidator?s=r.asyncValidator(r,e.value,o,e.source,a):r.validator&&(s=r.validator(r,e.value,o,e.source,a),!0===s?o():!1===s?o(r.message||`${r.field} fails`):s instanceof Array?o(s):s instanceof Error&&o(s.message)),s&&s.then&&s.then((()=>o()),(e=>o(e)))}),(e=>{!function(e){let t,r=[],s={};function n(e){if(Array.isArray(e)){let t;r=(t=r).concat.apply(t,e)}else r.push(e)}for(t=0;t<e.length;t++)n(e[t]);r.length?s=A(r):(r=null,s=null),l(r,s)}(e)}))},getType:function(e){if(void 0===e.type&&e.pattern instanceof RegExp&&(e.type="pattern"),"function"!=typeof e.validator&&e.type&&!L.hasOwnProperty(e.type))throw new Error($("Unknown rule type %s",e.type));return e.type||"string"},getValidationMethod:function(e){if("function"==typeof e.validator)return e.validator;const t=Object.keys(e),r=t.indexOf("message");return-1!==r&&t.splice(r,1),1===t.length&&"required"===t[0]?L.required:L[this.getType(e)]||!1}},H.register=function(e,t){if("function"!=typeof t)throw new Error("Cannot register a validator by type, validator is not a function");L[e]=t},H.warning=I,H.messages=K,H.warning=function(){};const Z={name:"PressForm",mixins:[S],provide(){return{uForm:this}},data:()=>({formRules:{},validator:{},originalModel:null}),computed:{propsChange(){return[this.errorType,this.borderBottom,this.labelPosition,this.labelWidth,this.labelAlign,this.labelStyle]}},watch:{rules:{immediate:!0,handler(e){this.setRules(e)}},propsChange(){var e;(null==(e=this.children)?void 0:e.length)&&this.children.map((e=>{"function"==typeof e.updateParentData&&e.updateParentData()}))},model:{immediate:!0,deep:!0,handler(e){this.originalModel||(this.originalModel=r(e))}}},created(){this.children=[]},methods:{setRules(e){0!==Object.keys(e).length&&(this.formRules=e,this.validator=new H(e),console.log("validator",this.validator))},resetFields(){this.resetModel()},resetModel(){this.children.map((e=>{const t=null==e?void 0:e.prop,r=J(this.originalModel,t);Y(this.model,t,r)}))},clearValidate(e){e=[].concat(e),this.children.map((t=>{(void 0===e[0]||e.includes(t.prop))&&(t.message=null)}))},async validateField(e,t,r=null){this.$nextTick((()=>{const s=[];e=[].concat(e),this.children.map((t=>{const n=[];if(e.includes(t.prop)){const e=J(this.model,t.prop),i=t.prop.split("."),o=i[i.length-1],a=this.formRules[t.prop];if(!a)return;const l=[].concat(a);for(let u=0;u<l.length;u++){const i=l[u],a=[].concat(null==i?void 0:i.trigger);if(r&&!a.includes(r))continue;new H({[o]:i}).validate({[o]:e},(e=>{var r;Array.isArray(e)&&(s.push(...e),n.push(...e)),t.message=(null==(r=n[0])?void 0:r.message)??null}))}}})),"function"==typeof t&&t(s)}))},validate(){return new Promise(((e,t)=>{this.$nextTick((()=>{const r=this.children.map((e=>e.prop));this.validateField(r,(r=>{r.length?("toast"===this.errorType&&uni.showToast({title:r[0].message}),t(r)):e(!0)}))}))}))}}};const Q={props:{customStyle:{type:String,default:""},label:{type:String,default:""},prop:{type:String,default:""},borderBottom:{type:Boolean,default:!0},labelPosition:{type:String,default:""},labelWidth:{type:[String,Number],default:""},rightIcon:{type:String,default:""},leftIcon:{type:String,default:""},required:{type:Boolean,default:!1},leftIconStyle:{type:[String,Object],default:""}}};const X=s({components:{PressForm:s(Z,[["render",function(e,t,r,s,a,l){return n(),i("div",{class:"press-form"},[o(e.$slots,"default")])}]]),PressFormItem:s({name:"PressFormItem",components:{PressIconPlus:_},mixins:[Q],emits:["click"],data:()=>({message:"",parentData:{labelPosition:"left",labelAlign:"left",labelStyle:{},labelWidth:45,errorType:"message"}}),computed:{propsLine:()=>({color:"#d6d7d9",length:"100%",direction:"row",hairline:!0,margin:0,dashed:!1}),bodyStyle(){return v([{flexDirection:"left"===(this.labelPosition||this.parentData.labelPosition)?"row":"column"},this.customStyle])},lineStyle(){const{message:e,parentData:t,propsLine:r}=this;return v({marginTop:e&&"message"===t.errorType?"5px":0,color:e&&"border-bottom"===t.errorType?"#fa3534":r.color})}},mounted(){this.init()},methods:{init(){this.updateParentData(),this.parent},updateParentData(){b.call(this,"PressForm")},clearValidate(){this.message=null},resetField(){const e=J(this.parent.originalModel,this.prop);Y(this.parent.model,this.prop,e),this.message=null},clickHandler(){this.$emit("click")},addUnit:e}},[["render",function(e,t,r,s,p,m){const h=c("PressIconPlus");return n(),i("div",{class:"press-form-item"},[a("div",{class:"press-form-item__body",style:u(m.bodyStyle),onClick:t[0]||(t[0]=(...e)=>m.clickHandler&&m.clickHandler(...e))},[l(' 微信小程序中，将一个参数设置空字符串，结果会变成字符串"true" '),o(e.$slots,"label",{},(()=>[l(" {{required}} "),e.required||e.leftIcon||e.label?(n(),i("div",{key:0,class:"press-form-item__body__left",style:u({width:m.addUnit(e.labelWidth||p.parentData.labelWidth),marginBottom:"left"===p.parentData.labelPosition?0:"5px"})},[l(" 为了块对齐 "),a("div",{class:"press-form-item__body__left__content"},[l(" nvue不支持伪元素before "),e.required?(n(),i("span",{key:0,class:"press-form-item__body__left__content__required"}," * ")):l("v-if",!0),e.leftIcon?(n(),i("div",{key:1,class:"press-form-item__body__left__content__icon"},[d(h,{name:e.leftIcon,"custom-style":e.leftIconStyle},null,8,["name","custom-style"])])):l("v-if",!0),a("span",{class:"press-form-item__body__left__content__label",style:u([p.parentData.labelStyle,{justifyContent:"left"===p.parentData.labelAlign?"flex-start":"center"===p.parentData.labelAlign?"center":"flex-end"}])},f(e.label),5)])],4)):l("v-if",!0)]),!0),a("div",{class:"press-form-item__body__right"},[a("div",{class:"press-form-item__body__right__content"},[a("div",{class:"press-form-item__body__right__content__slot"},[o(e.$slots,"default",{},void 0,!0)]),e.$slots.right?(n(),i("div",{key:0,class:"item__body__right__content__icon"},[o(e.$slots,"right",{},void 0,!0)])):l("v-if",!0)])])],4),o(e.$slots,"error",{},(()=>[p.message&&"message"===p.parentData.errorType?(n(),i("span",{key:0,class:"press-form-item__body__right__message",style:u({marginLeft:m.addUnit("top"===p.parentData.labelPosition?0:e.labelWidth||p.parentData.labelWidth)})},f(p.message),5)):l("v-if",!0)]),!0),e.borderBottom?(n(),i("div",{key:0,style:u(m.lineStyle),class:"press-form-item__line"},null,4)):l("v-if",!0)])}],["__scopeId","data-v-0f0974f8"]]),PressField:w,PressIconPlus:_,PressCheckbox:q,PressCheckboxGroup:x,PressRadio:P,PressRadioGroup:j,PressButton:k,PressActionSheet:F,PressCountDown:C},onReady(){this.$refs.form1.setRules(this.rules)},data:()=>({time:-1,timeData:{},fileList1:[],disabled1:!1,tips:"",value:"",showCalendar:!1,showBirthday:!1,showSex:!1,birthday:Number(new Date),model1:{userInfo:{name:"楼兰",sex:"",birthday:""},radiovalue1:"苹果",checkboxValue1:[],intro:"",code:""},actions:[{name:"男"},{name:"女"},{name:"保密"}],rules:{"userInfo.name":[{type:"string",required:!0,message:"请填写姓名",trigger:["blur","change"]},{validator:(e,r)=>t(r),message:"姓名必须为中文",trigger:["change","blur"]}],code:{type:"string",required:!0,len:4,message:"请填写4位验证码",trigger:["blur"]},"userInfo.sex":{type:"string",max:1,required:!0,message:"请选择男或女",trigger:["blur","change"]},radiovalue1:{type:"string",min:1,max:2,message:"橙子有毒",trigger:["change"]},checkboxValue1:{type:"array",min:2,required:!0,message:"不能太宅，至少选两项",trigger:["change"]},intro:{type:"string",min:3,required:!0,message:"不低于3个字",trigger:["change"]},hotel:{type:"string",min:2,required:!0,message:"请选择住店时间",trigger:["change"]},"userInfo.birthday":{type:"string",required:!0,message:"请选择生日",trigger:["change"]}},radiolist1:[{name:"苹果",disabled:!1},{name:"香蕉",disabled:!1},{name:"毒橙子",disabled:!1}],checkboxList1:[{name:"羽毛球",disabled:!1},{name:"跑步",disabled:!1},{name:"爬山",disabled:!1}]}),computed:{isMp:()=>!1},methods:{onChange(e){console.log("value",e),this.model1.userInfo.name=e},afterRead(e){this.fileList1.push({url:e.file,status:"uploading",message:"上传中"})},groupChange(){},radioChange(){},navigateBack(){uni.navigateBack()},sexSelect(e){this.model1.userInfo.sex=e.name,this.$refs.form1.validateField("userInfo.sex")},change(e){this.model1.checkboxValue1=e},formatter(e){const t=new Date,r=t.getMonth()+1,s=t.getDate();return e.month==r&&e.day==s+3&&(e.bottomInfo="有优惠",e.dot=!0),e},calendarConfirm(e){this.showCalendar=!1,this.model1.hotel=`${e[0]} / ${e[e.length-1]}`,this.$refs.form1.validateField("hotel")},codeChange(e){this.tips=e},getCode(){this.time<=0||this.timeData.seconds<=0?(this.onGTip("验证码已发送"),this.time=0,setTimeout((()=>{this.time=3e4}))):this.onGTip("倒计时结束后再发送")},onChangeTime(e){this.timeData=e},calendarClose(){this.showCalendar=!1,this.$refs.form1.validateField("hotel")},birthdayClose(){this.showBirthday=!1,this.$refs.form1.validateField("userInfo.birthday")},birthdayConfirm(e){this.showBirthday=!1,this.model1.userInfo.birthday=uni.$u.timeFormat(e.value,"yyyy-mm-dd"),this.$refs.form1.validateField("userInfo.birthday")},submit(){this.$refs.form1.validate().then((e=>{console.log("[submit]",e),this.onGTip("校验通过")})).catch((e=>{console.log("[errors]",e),this.onGTip("校验失败")}))},reset(){const e=["userInfo.name","userInfo.sex","radiovalue1","checkboxValue1","intro","hotel","code","userInfo.birthday"];this.$refs.form1.resetFields(),this.$refs.form1.clearValidate(),setTimeout((()=>{this.$refs.form1.clearValidate(e)}),10)},hideKeyboard(){uni.hideKeyboard()}}},[["render",function(e,t,r,s,o,l){const u=c("PressField"),b=c("PressFormItem"),v=c("PressIconPlus"),_=c("PressRadio"),w=c("PressRadioGroup"),q=c("PressCheckbox"),x=c("PressCheckboxGroup"),P=c("press-count-down"),j=c("PressButton"),k=c("PressForm"),F=c("press-action-sheet");return n(),i("div",{class:"demo-wrap"},[d(k,{ref:"form1","label-position":"left",rules:o.rules,model:o.model1},{default:p((()=>[d(b,{ref:"item1",label:"大名",prop:"userInfo.name","border-bottom":""},{default:p((()=>[d(u,{value:o.model1.userInfo.name,"model-value":o.model1.userInfo.name,border:!1,onChange:l.onChange},null,8,["value","model-value","onChange"])])),_:1},512),d(b,{ref:"item1",label:"性别",prop:"userInfo.sex","border-bottom":"",onClick:t[2]||(t[2]=e=>{o.showSex=!0,l.hideKeyboard()})},{right:p((()=>[d(v,{name:"arrow"})])),default:p((()=>[d(u,{modelValue:o.model1.userInfo.sex,"onUpdate:modelValue":t[0]||(t[0]=e=>o.model1.userInfo.sex=e),"disabled-color":"#ffffff",placeholder:"请选择性别",border:!1,readonly:l.isMp,onClickInput:t[1]||(t[1]=e=>{o.showSex=!0,l.hideKeyboard()})},null,8,["modelValue","readonly"])])),_:1},512),d(b,{ref:"item2",label:"水果",prop:"radiovalue1","border-bottom":""},{default:p((()=>[d(w,{value:o.model1.radiovalue1,direction:"horizontal",onChange:t[3]||(t[3]=e=>o.model1.radiovalue1=e)},{default:p((()=>[(n(!0),i(m,null,h(o.radiolist1,((e,t)=>(n(),g(_,{key:t,"custom-style":"margin-right: 16px",label:e.name,name:e.name},{default:p((()=>[y(f(e.name),1)])),_:2},1032,["label","name"])))),128))])),_:1},8,["value"])])),_:1},512),d(b,{ref:"item3",label:"兴趣爱好",prop:"checkboxValue1","border-bottom":"","label-width":"80"},{default:p((()=>[d(x,{value:o.model1.checkboxValue1,shape:"square",direction:"horizontal",onChange:l.change},{default:p((()=>[(n(!0),i(m,null,h(o.checkboxList1,((e,t)=>(n(),g(q,{key:t,"custom-style":"margin-right: 16px",name:e.name},{default:p((()=>[y(f(e.name),1)])),_:2},1032,["name"])))),128))])),_:1},8,["value","onChange"])])),_:1},512),d(b,{ref:"item3",label:"简介",prop:"intro","border-bottom":""},{default:p((()=>[d(u,{modelValue:o.model1.intro,"onUpdate:modelValue":t[4]||(t[4]=e=>o.model1.intro=e),placeholder:"不低于3个字",count:"",type:"textarea","show-word-limit":"","always-embed":!0,maxlength:100,autosize:"",border:!1,"wrapper-style":"width: 100%"},null,8,["modelValue"])])),_:1},512),d(b,{label:"验证码",prop:"code","label-width":"80","border-bottom":""},{right:p((()=>[d(j,{type:"primary",size:"mini",disabled:o.disabled1,onClick:l.getCode},{default:p((()=>[d(P,{"use-slot":"",time:o.time,onChange:l.onChangeTime},{default:p((()=>[a("span",{class:"countdown-wrap"},[Object.keys(o.timeData).length?o.timeData.seconds<=0?(n(),i(m,{key:1},[y("重新获取")],64)):(n(),i(m,{key:2},[a("span",{class:"item"},f(o.timeData.seconds),1),a("span",null,"秒重新获取")],64)):(n(),i(m,{key:0},[y("获取信息")],64))])])),_:1},8,["time","onChange"])])),_:1},8,["disabled","onClick"])])),default:p((()=>[d(u,{modelValue:o.model1.code,"onUpdate:modelValue":t[5]||(t[5]=e=>o.model1.code=e),border:!1,placeholder:"请填写验证码"},null,8,["modelValue"])])),_:1})])),_:1},8,["rules","model"]),d(F,{show:o.showSex,actions:o.actions,onClose:t[6]||(t[6]=e=>o.showSex=!1),onSelect:l.sexSelect},null,8,["show","actions","onSelect"]),a("div",{class:"submit-wrap"},[d(j,{type:"primary","custom-style":"margin-right: 20px;width: 100px;",onClick:l.submit},{default:p((()=>[y(" 提交 ")])),_:1},8,["onClick"]),d(j,{"custom-style":"width: 100px;",onClick:l.reset},{default:p((()=>[y(" 重置 ")])),_:1},8,["onClick"])])])}],["__scopeId","data-v-2c16e8c8"]]);export{X as default};

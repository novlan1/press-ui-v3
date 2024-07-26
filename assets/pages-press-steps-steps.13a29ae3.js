import{P as t}from"./press-icon-plus.a1094e70.js";import{a as e,b as s}from"./color.3a05f6e0.js";import{d as i,a as c}from"./press-component.573dfcec.js";import{u as o}from"./utils.d8f13396.js";import{_ as a,o as n,c as l,i as p,F as r,p as u,n as v,j as d,t as m,q as h,f as y,e as S,h as f,w as C,v as _}from"./index-66fd861e.js";import{P as x}from"./press-button.2236d5eb.js";import"./style.0f94ff97.js";import"./add-unit.9de8b2f7.js";import"./press-info.8563e54c.js";import"./press-loading-plus.6ff974e3.js";import"./press-loading.084df768.js";import"./button.e606098b.js";import"./version.0d1ce575.js";function I(t,e){return t<e?"finish":t===e?"process":"inactive"}const g=a({i18n:{"zh-CN":{nextStep:"下一步",step1:"买家下单",step2:"商家接单",step3:"买家提货",step4:"交易完成",title2:"描述信息",title3:"竖向步骤条",status1:"【城市】物流状态1",status2:"【城市】物流状态",status3:"快件已发货",customStyle:"自定义样式",customIcon:"自定义图标"},"en-US":{nextStep:"Next Step",step1:"Step1",step2:"Step2",step3:"Step3",step4:"Step4",title2:"Description",title3:"Vertical Steps",status1:"【City】Status1",status2:"【City】Status2",status3:"【City】Status3",customStyle:"Custom Style",customIcon:"Custom Icon"}},components:{PressSteps:a({name:"PressSteps",options:{...i,styleIsolation:"shared"},components:{PressIconPlus:t},props:{icon:{type:String,default:""},steps:{type:Array,default:()=>[]},active:{type:Number,default:-1},direction:{type:String,default:"horizontal"},activeColor:{type:String,default:e},inactiveColor:{type:String,default:s},activeIcon:{type:String,default:"checked"},inactiveIcon:{type:String,default:""},descClass:{type:String,default:""},...c},emits:["click-step"],data:()=>({status:I}),computed:{stepsClass(){const{direction:t,customClass:e}=this;return`${e} ${o.bem2("steps",[t])}`}},methods:{onClick(t){const{index:e}=t.currentTarget.dataset;this.$emit("click-step",e)},getStepClass(t){const{direction:e,active:s}=this;return`${o.bem2("step",[e,I(t,s)])} press-hairline`},getStepStyle(t){const{active:e,inactiveColor:s}=this;return"inactive"===I(t,e)?`color: ${s}`:""}}},[["render",function(t,e,s,i,c,o){const a=S("press-icon-plus");return n(),l("div",{class:"press-steps-index"},[p("div",{class:v(o.stepsClass)},[p("div",{class:"press-step__wrapper"},[(n(!0),l(r,null,u(s.steps,((t,i)=>(n(),l("div",{key:i,"data-index":i,class:v(o.getStepClass(i)),style:d(o.getStepStyle(i)),onClick:e[0]||(e[0]=(...t)=>o.onClick&&o.onClick(...t))},[p("div",{class:"press-step__title",style:d(i===s.active?"color: "+s.activeColor:"")},[p("div",null,m(t.text),1),p("div",{class:v(["press-step__desc",s.descClass])},m(t.desc),3)],4),p("div",{class:"press-step__circle-container"},[i!==s.active?(n(),l(r,{key:0},[t.inactiveIcon||s.inactiveIcon?(n(),h(a,{key:0,color:"inactive"===c.status(i,s.active)?s.inactiveColor:s.activeColor,name:t.inactiveIcon||s.inactiveIcon,"custom-class":"press-step__icon"},null,8,["color","name"])):(n(),l("div",{key:1,class:"press-step__circle",style:d("background-color: "+(i<s.active?s.activeColor:s.inactiveColor))},null,4))],64)):(n(),h(a,{key:1,name:t.activeIcon||s.activeIcon,color:s.activeColor,"custom-class":"press-step__icon"},null,8,["name","color"]))]),i!==s.steps.length-1?(n(),l("div",{key:0,class:"press-step__line",style:d("background-color: "+(i<s.active?s.activeColor:s.inactiveColor))},null,4)):y("v-if",!0)],14,["data-index"])))),128))])],2)])}],["__scopeId","data-v-5469f2ae"]]),PressButton:x},data(){return{steps:[{text:this.t("step1"),desc:this.t("title2")},{text:this.t("step2"),desc:this.t("title2")},{text:this.t("step3"),desc:this.t("title2")},{text:this.t("step4"),desc:this.t("title2")}],stepsCustom:[{text:this.t("step1"),desc:this.t("title2"),inactiveIcon:"location-o",activeIcon:"success"},{text:this.t("step2"),desc:this.t("title2"),inactiveIcon:"like-o",activeIcon:"plus"},{text:this.t("step3"),desc:this.t("title2"),inactiveIcon:"star-o",activeIcon:"cross"},{text:this.t("step4"),desc:this.t("title2"),inactiveIcon:"phone-o",activeIcon:"fail"}],active:1}},methods:{onNextStep(){this.active!==this.steps.length-1?this.active+=1:this.active=0}}},[["render",function(t,e,s,i,c,o){const a=S("press-steps"),p=S("PressButton"),r=S("demo-block");return n(),l("div",{class:"demo-wrap"},[f(r,{title:t.t("basicUsage")},{default:C((()=>[f(a,{steps:c.steps,active:c.active},null,8,["steps","active"]),f(p,{type:"e-sport-primary","custom-style":"margin: 8px 0 8px 0;",onClick:o.onNextStep},{default:C((()=>[_(m(t.t("nextStep")),1)])),_:1},8,["onClick"])])),_:1},8,["title"]),f(r,{title:t.t("customStyle")},{default:C((()=>[f(a,{steps:c.steps,active:c.active,"active-icon":"success","active-color":"#38f"},null,8,["steps","active"])])),_:1},8,["title"]),f(r,{title:t.t("customIcon")},{default:C((()=>[f(a,{steps:c.stepsCustom,active:c.active},null,8,["steps","active"])])),_:1},8,["title"]),f(r,{title:t.t("title3")},{default:C((()=>[f(a,{steps:c.steps,active:c.active,direction:"vertical","active-color":"#ee0a24"},null,8,["steps","active"])])),_:1},8,["title"])])}]]);export{g as default};

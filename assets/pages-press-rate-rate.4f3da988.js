import{P as e}from"./press-icon-plus.c3bdd182.js";import{g as t}from"./rect.6dcbbb2d.js";import{u as o}from"./utils.72ed65ea.js";import{s as a}from"./style.0f94ff97.js";import{n as l}from"./add-unit.b5ba58ff.js";import{_ as n,o as s,c as i,i as u,F as r,p as c,n as d,j as m,h,q as C,f as g,e as f,w as p}from"./index-dd603bd1.js";import"./press-info.8a9789b6.js";import"./press-component.fa6a167d.js";import"./version.43f2b945.js";const v=n({i18n:{"zh-CN":{halfStar:"半星",disabled:"禁用状态",customIcon:"自定义图标",customImage:"自定义图片",customStyle:"自定义样式",customCount:"自定义数量",readonly:"只读状态",changeEvent:"监听 change 事件",toastContent:e=>`当前值：${e}`},"en-US":{halfStar:"Half Star",disabled:"Disabled",customImage:"Custom Image",customIcon:"Custom Icon",customStyle:"Custom Style",customCount:"Custom Count",readonly:"Readonly",changeEvent:"Change Event",toastContent:e=>`current value：${e}`}},components:{PressRate:n({name:"PressRate",components:{PressIconPlus:e},field:!0,props:{value:{type:Number,default:0},readonly:Boolean,disabled:Boolean,allowHalf:Boolean,size:{type:[String,Number],default:""},icon:{type:String,default:"star"},voidIcon:{type:String,default:"star-o"},color:{type:String,default:""},voidColor:{type:String,default:""},disabledColor:{type:String,default:""},count:{type:Number,default:5},gutter:{type:[Number,String],default:""},touchable:{type:Boolean,default:!0},customClass:{type:String,default:""},iconClass:{type:String,default:""}},emits:["input","change"],data:()=>({innerValue:0,innerCountArray:Array.from({length:5}),utils:o,style:a}),computed:{iconStyle(){return a({fontSize:o.addUnit(this.size)})},iconCustomStyle:()=>""},watch:{value:{handler(e){e!==this.innerValue&&(this.innerValue=e)},immediate:!0},count:{handler(e){this.innerCountArray=Array.from({length:e})},immediate:!0}},methods:{onSelect(e){this.disabled||this.readonly||(this.innerValue=e+1,l((()=>{this.$emit("input",e+1),this.$emit("change",e+1)})))},onTouchMove(e){const{touchable:o}=this;if(!o)return;const{clientX:a}=e.touches[0];t(this,".press-rate__icon").then((e=>{const t=e.sort(((e,t)=>e.x-t.x)).find((e=>a>=e.left&&a<=e.right)),o=e.indexOf(t);null!=t&&this.onSelect(o)}))},getIconBaseClass(e){const{disabled:t,innerValue:a}=this;return o.bem2("rate__icon",[{disabled:t,full:e+1<=a}])},getIconHalfClass(e){const{disabled:t,innerValue:a}=this;return o.bem2("rate__icon",["half",{disabled:t,full:e+.5<=a}])},getIconBaseCustomClass(e){return this.iconClass},getIconHalfCustomClass(e){return this.iconClass}}},[["render",function(e,t,o,a,l,n){const p=f("press-icon-plus");return s(),i("div",{class:"press-rate-index"},[u("div",{class:d([l.utils.bem2("rate"),o.customClass]),onTouchmove:t[0]||(t[0]=(...e)=>n.onTouchMove&&n.onTouchMove(...e))},[(s(!0),i(r,null,c(l.innerCountArray,((e,t)=>(s(),i("div",{key:t,class:d([l.utils.bem2("rate__item")]),style:m(""+l.style({paddingRight:t!==o.count-1?l.utils.addUnit(o.gutter):null}))},[h(p,{name:t+1<=l.innerValue?o.icon:o.voidIcon,class:d([n.getIconBaseClass(t)]),style:m(""+n.iconStyle),"custom-class":n.getIconBaseCustomClass(t),"custom-style":n.iconCustomStyle,"data-score":t,color:o.disabled?o.disabledColor:t+1<=l.innerValue?o.color:o.voidColor,onClick:e=>n.onSelect(t)},null,8,["name","class","style","custom-class","custom-style","data-score","color","onClick"]),o.allowHalf?(s(),C(p,{key:0,name:t+.5<=l.innerValue?o.icon:o.voidIcon,class:d([n.getIconHalfClass(t)]),style:m(""+n.iconStyle),"custom-class":n.getIconHalfCustomClass(t),"custom-style":n.iconCustomStyle,"data-score":t-.5,color:o.disabled?o.disabledColor:t+.5<=l.innerValue?o.color:o.voidColor,onClick:e=>n.onSelect(t-.5)},null,8,["name","class","style","custom-class","custom-style","data-score","color","onClick"])):g("v-if",!0)],6)))),128))],34)])}],["__scopeId","data-v-f9bc9802"]])},data:()=>({value:3,half:2.5}),methods:{onChange(e){this.onGTip(`value: ${e}`)}}},[["render",function(e,t,o,a,l,n){const u=f("press-rate"),r=f("demo-block");return s(),i("div",{class:"wrap"},[h(r,{title:e.t("basicUsage")},{default:p((()=>[h(u,{value:3,"custom-class":"press-rate--demo-class",onChange:n.onChange},null,8,["onChange"])])),_:1},8,["title"]),h(r,{title:e.t("customIcon")},{default:p((()=>[h(u,{value:l.value,icon:"like","void-icon":"like-o",onChange:n.onChange},null,8,["value","onChange"])])),_:1},8,["title"]),h(r,{title:e.t("customImage")},{default:p((()=>[h(u,{value:l.value,"void-icon":"https://image-1251917893.file.myqcloud.com/Esports/new/user/star.png",icon:"https://image-1251917893.file.myqcloud.com/Esports/new/user/sel-star.png",onChange:n.onChange},null,8,["value","onChange"])])),_:1},8,["title"]),h(r,{title:e.t("customStyle")},{default:p((()=>[h(u,{value:l.value,size:25,color:"#ffd21e","void-icon":"star","void-color":"#eee",onChange:n.onChange},null,8,["value","onChange"])])),_:1},8,["title"]),h(r,{title:e.t("halfStar")},{default:p((()=>[h(u,{value:l.half,"allow-half":"","void-icon":"star","void-color":"#eee",onChange:n.onChange},null,8,["value","onChange"])])),_:1},8,["title"]),h(r,{title:e.t("customCount")},{default:p((()=>[h(u,{value:l.value,count:6,onChange:n.onChange},null,8,["value","onChange"])])),_:1},8,["title"]),h(r,{title:e.t("disabled")},{default:p((()=>[h(u,{value:l.value,disabled:"",onChange:n.onChange},null,8,["value","onChange"])])),_:1},8,["title"]),h(r,{title:e.t("readonly")},{default:p((()=>[h(u,{value:l.value,readonly:"",onChange:n.onChange},null,8,["value","onChange"])])),_:1},8,["title"])])}],["__scopeId","data-v-585b4bf7"]]);export{v as default};

import{a as e}from"./unit.c0b3f61b.js";import{a as t,b as o}from"./rect.23461412.js";import{u as s}from"./utils.bb2d8d10.js";import{d as i,a as l}from"./press-component.181873fd.js";import{P as n,C as a}from"./relation.8b10893c.js";import{c as r}from"./parent-map.b443f4cc.js";import{_ as p,o as d,c as u,h as c,F as h,v as m,n as v,i as y,t as w,r as C,f,w as g,x as b,e as x,j as P,y as S}from"./index-43eb3ea0.js";import{P as k}from"./press-popup-plus.974d6763.js";import{P as T}from"./press-cell.a0845ac7.js";import{P as _}from"./press-icon-plus.43efdcdd.js";import{P as O}from"./press-switch.3a23dc52.js";import{P as j}from"./press-button.1db29ede.js";import"./validator.84caa8d5.js";import"./version.7ee5c281.js";import"./add-unit.0c57c089.js";import"./press-overlay.4c76514c.js";import"./press-transition.e8aeacc8.js";import"./style.0f94ff97.js";import"./link.82331220.js";import"./event.1c00601d.js";import"./support-passive.bc409298.js";import"./press-info.68d3dd51.js";import"./press-loading-plus.e7ffc3ab.js";import"./press-loading.bae3cb19.js";import"./button.49122d4f.js";const D={displayTitle:function(e){if(e.title)return e.title;const t=e.options.filter((t=>t.value===e.value));return t.length?t[0].text:""}};let I=[];const $=p({i18n:{"zh-CN":{disableMenu:"禁用菜单",switchTitle1:"包邮",switchTitle2:"团购",itemTitle:"筛选",expandDirection:"向上展开",customContent:"自定义菜单内容",customActiveColor:"自定义选中态颜色",option1:[{text:"全部商品",value:0},{text:"新款商品",value:1},{text:"活动商品",value:2}],option2:[{text:"默认排序",value:"a"},{text:"好评排序",value:"b"},{text:"销量排序",value:"c"}]},"en-US":{disableMenu:"Disable Menu",switchTitle1:"Title",switchTitle2:"Title",itemTitle:"Title",expandDirection:"Expand Direction",customContent:"Custom Content",customActiveColor:"Custom Active Color",option1:[{text:"Option1",value:0},{text:"Option2",value:1},{text:"Option3",value:2}],option2:[{text:"Option A",value:"a"},{text:"Option B",value:"b"},{text:"Option C",value:"c"}]}},options:{styleIsolation:"shared"},components:{PressDropdownMenu:p({name:"PressDropdownMenu",options:{...i,styleIsolation:"shared"},mixins:[n(r)],props:{activeColor:{type:String,default:""},overlay:{type:Boolean,default:!0},zIndex:{type:Number,default:10},duration:{type:Number,default:200},direction:{type:String,default:"down"},closeOnClickOverlay:{type:Boolean,default:!0},closeOnClickOutside:{type:Boolean,default:!0},...l},emits:[],data:()=>({itemListData:[],utils:s,computed:D}),watch:{activeColor:{handler(){this.updateChildrenData()}},overlay:{handler(){this.updateChildrenData()}},duration:{handler(){this.updateChildrenData()}},direction:{handler(){this.updateChildrenData()}},closeOnClickOverlay:{handler(){this.updateChildrenData()}}},beforeCreate(){I.push(this)},created(){const{windowHeight:e,windowTop:o}=t();this.windowHeight=e,this.windowTop=o||0,this.children=[]},destroyed(){this.onDestroyed()},unmounted(){this.onDestroyed()},methods:{onDestroyed(){I=I.filter((e=>e!==this))},updateItemListData(){this.itemListData=this.children.map((e=>{const{titleClass:t,showPopup:o,disabled:s,innerValue:i,title:l,text:n,options:a}=e;return{titleClass:t,showPopup:o,disabled:s,value:i,title:l,text:n,options:a}}))},updateChildrenData(){this.children.forEach((e=>{e.updateDataFromParent()}))},toggleItem(e){this.children.forEach(((t,o)=>{const{showPopup:s}=t;o===e?t.toggle():s&&t.toggle(!1,{immediate:!0})}))},close(){this.children.forEach((e=>{e.toggle(!1,{immediate:!0})}))},getChildWrapperStyle(){const{zIndex:t,direction:s}=this;return o(this,".press-dropdown-menu").then((o=>{const{top:i=0,bottom:l=0}=o,n="down"===s?l:this.windowHeight-i+this.windowTop;let a=`z-index: ${t};`;return a+="down"===s?`top: ${e(n)};`:`bottom: ${e(n)};`,a}))},onTitleTap(e){this.children[e].disabled||(I.forEach((e=>{e&&e.closeOnClickOutside&&e!==this&&e.close()})),this.toggleItem(e))}}},[["render",function(e,t,o,s,i,l){return d(),u("div",null,[c("div",{class:v(["press-dropdown-menu press-dropdown-menu--top-bottom",e.customClass])},[(d(!0),u(h,null,m(i.itemListData,((e,t)=>(d(),u("div",{key:t,class:v(i.utils.bem2("dropdown-menu__item",{disabled:e.disabled})),onClick:e=>l.onTitleTap(t)},[c("div",{class:v(e.titleClass+" "+i.utils.bem2("dropdown-menu__title",{active:e.showPopup,down:e.showPopup===("down"===o.direction)})),style:y(e.showPopup?"color:"+o.activeColor:"")},[c("div",{class:"press-ellipsis"},w(i.computed.displayTitle(e)),1)],6)],10,["onClick"])))),128)),C(e.$slots,"default",{},void 0,!0)],2)])}],["__scopeId","data-v-a83283f2"]]),PressDropdownItem:p({name:"PressDropdownItem",options:{...i,styleIsolation:"shared"},components:{PressPopup:k,PressCell:T,PressIconPlus:_},mixins:[a(r)],props:{value:{type:[String,Number],default:""},title:{type:String,default:""},disabled:Boolean,titleClass:{type:String,default:""},options:{type:Array,default:()=>[]},popupStyle:{type:String,default:""},...l},emits:["open","opened","close","closed","change"],data(){return{transition:!0,showPopup:!1,showWrapper:!1,displayTitle:"",utils:s,innerValue:this.value,direction:"down",closeOnClickOverlay:!0,activeColor:"",duration:200,overlay:!0,wrapperStyle:""}},computed:{iconCustomClass:()=>""},watch:{value:{handler(e){this.innerValue=e,this.rerender()}},title:{handler(){this.rerender()}},titleClass:{handler(){this.rerender()}},options:{handler(){this.rerender()}}},mounted(){this.rerender(),this.updateDataFromParent()},methods:{rerender(){this.$nextTick((()=>{var e;null==(e=this[r])||e.updateItemListData()}))},updateDataFromParent(){if(this[r]){const{overlay:e,duration:t,activeColor:o,closeOnClickOverlay:s,direction:i}=this[r];this.overlay=e,this.duration=t,this.activeColor=o,this.closeOnClickOverlay=s,this.direction=i}},onOpen(){this.$emit("open")},onOpened(){this.$emit("opened")},onClose(){this.$emit("close")},onClosed(){this.$emit("closed"),this.showWrapper=!1},onOptionTap(e){const{value:t}=e,o=this.innerValue!==t;this.showPopup=!1,this.innerValue=t,this.$emit("close"),this.rerender(),o&&this.$emit("change",t)},toggle(e,t={}){var o;const{showPopup:s}=this;"boolean"!=typeof e&&(e=!s),e!==s&&(this.transition=!t.immediate,this.showPopup=e,e?null==(o=this[r])||o.getChildWrapperStyle().then((e=>{this.wrapperStyle=e,this.showWrapper=!0,this.rerender()})):this.rerender())},getCellClass(e){return s.bem2("dropdown-item__option",{active:e.value===this.innerValue})},getCellCustomClass:e=>""}},[["render",function(e,t,o,s,i,l){const n=P("press-icon-plus"),a=P("press-cell"),r=P("press-popup");return i.showWrapper?(d(),u("div",{key:0,class:v(i.utils.bem2("dropdown-item",i.direction)),style:y(i.wrapperStyle)},[f(r,{show:i.showPopup,"custom-style":"position: absolute;"+o.popupStyle,"overlay-style":"position: absolute;",overlay:i.overlay,position:"down"===i.direction?"top":"bottom",duration:i.transition?i.duration:0,"close-on-click-overlay":i.closeOnClickOverlay,"safe-area-inset-bottom":"down"===i.direction,onEnter:l.onOpen,onLeave:l.onClose,onClose:l.toggle,onAfterEnter:l.onOpened,onAfterLeave:l.onClosed},{default:g((()=>[(d(!0),u(h,null,m(o.options,((e,t)=>(d(),b(a,{key:t,class:v([l.getCellClass(e)]),"custom-class":l.getCellCustomClass(e),clickable:"",icon:e.icon,onClick:t=>l.onOptionTap(e)},{title:g((()=>[c("div",{class:"press-dropdown-item__title",style:y(e.value===i.innerValue?"color:"+i.activeColor:"")},w(e.text),5)])),default:g((()=>[e.value===i.innerValue?(d(),b(n,{key:0,name:"success",class:"press-dropdown-item__icon","custom-class":l.iconCustomClass,color:i.activeColor},null,8,["custom-class","color"])):x("v-if",!0)])),_:2},1032,["class","custom-class","icon","onClick"])))),128)),C(e.$slots,"default",{},void 0,!0)])),_:3},8,["show","custom-style","overlay","position","duration","close-on-click-overlay","safe-area-inset-bottom","onEnter","onLeave","onClose","onAfterEnter","onAfterLeave"])],6)):x("v-if",!0)}],["__scopeId","data-v-41302dd9"]]),PressSwitch:O,PressCell:T,PressButton:j},data(){return{option1:this.t("option1"),option2:this.t("option2"),value1:0,value2:"a",switchTitle1:this.t("switchTitle1"),switchTitle2:this.t("switchTitle2"),itemTitle:this.t("itemTitle"),switch1:!0,switch2:!0,headerStyle:"background: #f7f8fa;",sectionStyle:"background: #f7f8fa;margin: 0 0 6px;padding: 0;"}},methods:{onConfirm(){this.$refs.item.toggle()},onSwitch1Change(e){console.log("onSwitch1Change.detail",e),this.switch1=e},onSwitch2Change(e){console.log("onSwitch2Change.detail",e),this.switch2=e}}},[["render",function(e,t,o,s,i,l){const n=P("press-dropdown-item"),a=P("press-dropdown-menu"),r=P("demo-block"),p=P("press-switch"),h=P("press-cell"),m=P("press-button");return d(),u("div",{class:"demo-wrap demo-wrap--gray"},[f(r,{title:e.t("basicUsage"),"header-style":i.headerStyle,"section-style":i.sectionStyle},{default:g((()=>[f(a,null,{default:g((()=>[f(n,{value:i.value1,options:i.option1,"title-class":"demo-title"},null,8,["value","options"]),f(n,{value:i.value2,options:i.option2},null,8,["value","options"])])),_:1})])),_:1},8,["title","header-style","section-style"]),f(r,{title:e.t("customContent"),"header-style":i.headerStyle,"section-style":i.sectionStyle},{default:g((()=>[f(a,null,{default:g((()=>[f(n,{value:i.value1,options:i.option1},null,8,["value","options"]),f(n,{id:"item",ref:"item",title:i.itemTitle},{default:g((()=>[f(h,{title:i.switchTitle1},{"right-icon":g((()=>[f(p,{size:"24px",style:{height:"26px"},checked:i.switch1,"active-color":"#ee0a24",onChange:l.onSwitch1Change},null,8,["checked","onChange"])])),_:1},8,["title"]),f(h,{title:i.switchTitle2},{"right-icon":g((()=>[f(p,{size:"24px",style:{height:"26px"},checked:i.switch2,"active-color":"#ee0a24",onChange:l.onSwitch2Change},null,8,["checked","onChange"])])),_:1},8,["title"]),c("div",{style:{padding:"5px 16px"}},[f(m,{type:"danger",block:"",round:"",onClick:l.onConfirm},{default:g((()=>[S(w(e.t("confirm")),1)])),_:1},8,["onClick"])])])),_:1},8,["title"])])),_:1})])),_:1},8,["title","header-style","section-style"]),f(r,{title:e.t("customActiveColor"),"header-style":i.headerStyle,"section-style":i.sectionStyle},{default:g((()=>[f(a,{"active-color":"#1989fa"},{default:g((()=>[f(n,{value:i.value1,options:i.option1},null,8,["value","options"]),f(n,{value:i.value2,options:i.option2},null,8,["value","options"])])),_:1})])),_:1},8,["title","header-style","section-style"]),f(r,{title:e.t("expandDirection"),"header-style":i.headerStyle,"section-style":i.sectionStyle},{default:g((()=>[f(a,{direction:"up"},{default:g((()=>[f(n,{value:i.value1,options:i.option1},null,8,["value","options"]),f(n,{value:i.value2,options:i.option2},null,8,["value","options"])])),_:1})])),_:1},8,["title","header-style","section-style"]),f(r,{title:e.t("disableMenu"),"header-style":i.headerStyle,"section-style":i.sectionStyle},{default:g((()=>[f(a,null,{default:g((()=>[f(n,{value:i.value1,disabled:"",options:i.option1},null,8,["value","options"]),f(n,{value:i.value2,disabled:"",options:i.option2},null,8,["value","options"])])),_:1})])),_:1},8,["title","header-style","section-style"])])}]]);export{$ as default};

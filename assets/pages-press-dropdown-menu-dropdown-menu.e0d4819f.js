import{a as e}from"./unit.8cd428a9.js";import{_ as t,G as o,H as i,J as s,ae as l,af as n,o as a,c as r,e as d,F as p,g as u,B as c,I as h,t as m,z as v,a as y,y as C,d as w,w as f,h as g,j as b,k as x,x as S,u as k,v as _}from"./index-69342aaa.js";import{P as O,C as P}from"./relation.25345683.js";import{c as T}from"./parent-map.a476e3d9.js";import{P as D}from"./press-popup-plus.028aeb3b.js";const I={displayTitle:function(e){if(e.title)return e.title;const t=e.options.filter((t=>t.value===e.value));return t.length?t[0].text:""}};let $=[];const A=t({i18n:{"zh-CN":{disableMenu:"禁用菜单",switchTitle1:"包邮",switchTitle2:"团购",itemTitle:"筛选",expandDirection:"向上展开",customContent:"自定义菜单内容",customActiveColor:"自定义选中态颜色",option1:[{text:"全部商品",value:0},{text:"新款商品",value:1},{text:"活动商品",value:2}],option2:[{text:"默认排序",value:"a"},{text:"好评排序",value:"b"},{text:"销量排序",value:"c"}]},"en-US":{disableMenu:"Disable Menu",switchTitle1:"Title",switchTitle2:"Title",itemTitle:"Title",expandDirection:"Expand Direction",customContent:"Custom Content",customActiveColor:"Custom Active Color",option1:[{text:"Option1",value:0},{text:"Option2",value:1},{text:"Option3",value:2}],option2:[{text:"Option A",value:"a"},{text:"Option B",value:"b"},{text:"Option C",value:"c"}]}},components:{PressDropdownMenu:t({name:"PressDropdownMenu",options:{...o,styleIsolation:"shared"},mixins:[O(T)],props:{activeColor:{type:String,default:""},overlay:{type:Boolean,default:!0},zIndex:{type:Number,default:10},duration:{type:Number,default:200},direction:{type:String,default:"down"},closeOnClickOverlay:{type:Boolean,default:!0},closeOnClickOutside:{type:Boolean,default:!0},...i},emits:[],data:()=>({itemListData:[],utils:s,computed:I}),watch:{activeColor:{handler(){this.updateChildrenData()}},overlay:{handler(){this.updateChildrenData()}},duration:{handler(){this.updateChildrenData()}},direction:{handler(){this.updateChildrenData()}},closeOnClickOverlay:{handler(){this.updateChildrenData()}}},beforeCreate(){$.push(this)},created(){const{windowHeight:e}=l();this.windowHeight=e,this.children=[]},destroyed(){this.onDestroyed()},unmounted(){this.onDestroyed()},methods:{onDestroyed(){$=$.filter((e=>e!==this))},updateItemListData(){this.itemListData=this.children.map((e=>{const{titleClass:t,showPopup:o,disabled:i,innerValue:s,title:l,text:n,options:a}=e;return{titleClass:t,showPopup:o,disabled:i,value:s,title:l,text:n,options:a}}))},updateChildrenData(){this.children.forEach((e=>{e.updateDataFromParent()}))},toggleItem(e){this.children.forEach(((t,o)=>{const{showPopup:i}=t;o===e?t.toggle():i&&t.toggle(!1,{immediate:!0})}))},close(){this.children.forEach((e=>{e.toggle(!1,{immediate:!0})}))},getChildWrapperStyle(){const{zIndex:t,direction:o}=this;return n(this,".press-dropdown-menu").then((i=>{const{top:s=0,bottom:l=0}=i,n="down"===o?l:this.windowHeight-s;let a=`z-index: ${t};`;return a+="down"===o?`top: ${e(n)};`:`bottom: ${e(n)};`,a}))},onTitleTap(e){this.children[e].disabled||($.forEach((e=>{e&&e.closeOnClickOutside&&e!==this&&e.close()})),this.toggleItem(e))}}},[["render",function(e,t,o,i,s,l){return a(),r("div",null,[d("div",{class:c(["press-dropdown-menu press-dropdown-menu--top-bottom",e.customClass])},[(a(!0),r(p,null,u(s.itemListData,((e,t)=>(a(),r("div",{key:t,class:c(s.utils.bem2("dropdown-menu__item",{disabled:e.disabled})),onClick:e=>l.onTitleTap(t)},[d("div",{class:c(e.titleClass+" "+s.utils.bem2("dropdown-menu__title",{active:e.showPopup,down:e.showPopup===("down"===o.direction)})),style:h(e.showPopup?"color:"+o.activeColor:"")},[d("div",{class:"press-ellipsis"},m(s.computed.displayTitle(e)),1)],6)],10,["onClick"])))),128)),v(e.$slots,"default",{},void 0,!0)],2)])}],["__scopeId","data-v-5897a92e"]]),PressDropdownItem:t({name:"PressDropdownItem",options:{...o,styleIsolation:"shared"},components:{PressPopup:D,PressCell:y,PressIconPlus:C},mixins:[P(T)],props:{value:{type:[String,Number],default:""},title:{type:String,default:""},disabled:Boolean,titleClass:{type:String,default:""},options:{type:Array,default:()=>[]},popupStyle:{type:String,default:""},...i},emits:["open","opened","close","closed","change"],data(){return{transition:!0,showPopup:!1,showWrapper:!1,displayTitle:"",utils:s,innerValue:this.value,direction:"down",closeOnClickOverlay:!0,activeColor:"",duration:200,overlay:!0,wrapperStyle:""}},computed:{iconCustomClass:()=>""},watch:{value:{handler(e){this.innerValue=e,this.rerender()}},title:{handler(){this.rerender()}},titleClass:{handler(){this.rerender()}},options:{handler(){this.rerender()}}},mounted(){this.rerender(),this.updateDataFromParent()},methods:{rerender(){this.$nextTick((()=>{var e;null==(e=this[T])||e.updateItemListData()}))},updateDataFromParent(){if(this[T]){const{overlay:e,duration:t,activeColor:o,closeOnClickOverlay:i,direction:s}=this[T];this.overlay=e,this.duration=t,this.activeColor=o,this.closeOnClickOverlay=i,this.direction=s}},onOpen(){this.$emit("open")},onOpened(){this.$emit("opened")},onClose(){this.$emit("close")},onClosed(){this.$emit("closed"),this.showWrapper=!1},onOptionTap(e){const{value:t}=e,o=this.innerValue!==t;this.showPopup=!1,this.innerValue=t,this.$emit("close"),this.rerender(),o&&this.$emit("change",t)},toggle(e,t={}){var o;const{showPopup:i}=this;"boolean"!=typeof e&&(e=!i),e!==i&&(this.transition=!t.immediate,this.showPopup=e,e?null==(o=this[T])||o.getChildWrapperStyle().then((e=>{this.wrapperStyle=e,this.showWrapper=!0,this.rerender()})):this.rerender())},getCellClass(e){return s.bem2("dropdown-item__option",{active:e.value===this.innerValue})},getCellCustomClass:e=>""}},[["render",function(e,t,o,i,s,l){const n=x("press-icon-plus"),y=x("press-cell"),C=x("press-popup");return s.showWrapper?(a(),r("div",{key:0,class:c(s.utils.bem2("dropdown-item",s.direction)),style:h(s.wrapperStyle)},[w(C,{show:s.showPopup,"custom-style":"position: absolute;"+o.popupStyle,"overlay-style":"position: absolute;",overlay:s.overlay,position:"down"===s.direction?"top":"bottom",duration:s.transition?s.duration:0,"close-on-click-overlay":s.closeOnClickOverlay,onEnter:l.onOpen,onLeave:l.onClose,onClose:l.toggle,onAfterEnter:l.onOpened,onAfterLeave:l.onClosed},{default:f((()=>[(a(!0),r(p,null,u(o.options,((e,t)=>(a(),g(y,{key:t,class:c([l.getCellClass(e)]),"custom-class":l.getCellCustomClass(e),clickable:"",icon:e.icon,onClick:t=>l.onOptionTap(e)},{title:f((()=>[d("div",{class:"press-dropdown-item__title",style:h(e.value===s.innerValue?"color:"+s.activeColor:"")},m(e.text),5)])),default:f((()=>[e.value===s.innerValue?(a(),g(n,{key:0,name:"success",class:"press-dropdown-item__icon","custom-class":l.iconCustomClass,color:s.activeColor},null,8,["custom-class","color"])):b("v-if",!0)])),_:2},1032,["class","custom-class","icon","onClick"])))),128)),v(e.$slots,"default",{},void 0,!0)])),_:3},8,["show","custom-style","overlay","position","duration","close-on-click-overlay","onEnter","onLeave","onClose","onAfterEnter","onAfterLeave"])],6)):b("v-if",!0)}],["__scopeId","data-v-a726d3bb"]]),PressSwitch:S,PressCell:y,PressButton:k},data(){return{option1:this.t("option1"),option2:this.t("option2"),value1:0,value2:"a",switchTitle1:this.t("switchTitle1"),switchTitle2:this.t("switchTitle2"),itemTitle:this.t("itemTitle"),switch1:!0,switch2:!0,headerStyle:"background: #f7f8fa;",sectionStyle:"background: #f7f8fa;margin: 0 0 6px;padding: 0;"}},methods:{onConfirm(){this.$refs.item.toggle()},onSwitch1Change(e){console.log("onSwitch1Change.detail",e),this.switch1=e},onSwitch2Change(e){console.log("onSwitch2Change.detail",e),this.switch2=e}}},[["render",function(e,t,o,i,s,l){const n=x("press-dropdown-item"),p=x("press-dropdown-menu"),u=x("demo-block"),c=x("press-switch"),h=x("press-cell"),v=x("press-button");return a(),r("div",{class:"demo-wrap demo-wrap--gray"},[w(u,{title:e.t("basicUsage"),"header-style":s.headerStyle,"section-style":s.sectionStyle},{default:f((()=>[w(p,null,{default:f((()=>[w(n,{value:s.value1,options:s.option1},null,8,["value","options"]),w(n,{value:s.value2,options:s.option2},null,8,["value","options"])])),_:1})])),_:1},8,["title","header-style","section-style"]),w(u,{title:e.t("customContent"),"header-style":s.headerStyle,"section-style":s.sectionStyle},{default:f((()=>[w(p,null,{default:f((()=>[w(n,{value:s.value1,options:s.option1},null,8,["value","options"]),w(n,{id:"item",ref:"item",title:s.itemTitle},{default:f((()=>[w(h,{title:s.switchTitle1},{"right-icon":f((()=>[w(c,{size:"24px",style:{height:"26px"},checked:s.switch1,"active-color":"#ee0a24",onChange:l.onSwitch1Change},null,8,["checked","onChange"])])),_:1},8,["title"]),w(h,{title:s.switchTitle2},{"right-icon":f((()=>[w(c,{size:"24px",style:{height:"26px"},checked:s.switch2,"active-color":"#ee0a24",onChange:l.onSwitch2Change},null,8,["checked","onChange"])])),_:1},8,["title"]),d("div",{style:{padding:"5px 16px"}},[w(v,{type:"danger",block:"",round:"",onClick:l.onConfirm},{default:f((()=>[_(m(e.t("confirm")),1)])),_:1},8,["onClick"])])])),_:1},8,["title"])])),_:1})])),_:1},8,["title","header-style","section-style"]),w(u,{title:e.t("customActiveColor"),"header-style":s.headerStyle,"section-style":s.sectionStyle},{default:f((()=>[w(p,{"active-color":"#1989fa"},{default:f((()=>[w(n,{value:s.value1,options:s.option1},null,8,["value","options"]),w(n,{value:s.value2,options:s.option2},null,8,["value","options"])])),_:1})])),_:1},8,["title","header-style","section-style"]),w(u,{title:e.t("expandDirection"),"header-style":s.headerStyle,"section-style":s.sectionStyle},{default:f((()=>[w(p,{direction:"up"},{default:f((()=>[w(n,{value:s.value1,options:s.option1},null,8,["value","options"]),w(n,{value:s.value2,options:s.option2},null,8,["value","options"])])),_:1})])),_:1},8,["title","header-style","section-style"]),w(u,{title:e.t("disableMenu"),"header-style":s.headerStyle,"section-style":s.sectionStyle},{default:f((()=>[w(p,null,{default:f((()=>[w(n,{value:s.value1,disabled:"",options:s.option1},null,8,["value","options"]),w(n,{value:s.value2,disabled:"",options:s.option2},null,8,["value","options"])])),_:1})])),_:1},8,["title","header-style","section-style"])])}]]);export{A as default};

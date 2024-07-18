import{b as t,a as o}from"./rect.23461412.js";import{P as i}from"./press-icon-plus.43efdcdd.js";import{_ as e,o as s,c as n,n as r,i as c,h as a,e as h,F as l,v as p,t as d,r as f,f as u,z as m,j as g,w as b}from"./index-43eb3ea0.js";import{P as w}from"./press-cell.a0845ac7.js";import{i as _}from"./utils.bb2d8d10.js";import"./version.7ee5c281.js";import"./style.0f94ff97.js";import"./add-unit.0c57c089.js";import"./validator.84caa8d5.js";import"./press-info.68d3dd51.js";import"./press-component.181873fd.js";import"./link.82331220.js";import"./event.1c00601d.js";import"./support-passive.bc409298.js";const P=e({i18n:{"zh-CN":{toggleDirection:"切换方向",changeColor:"修改颜色",prompt:"提示",you:"您",image:"相册",home:"首页",star:"收藏",modalContent:(t,o)=>`你${o?"选中了":"取消了"}${t}`},"en-US":{toggleDirection:"Direction",changeColor:"Color",prompt:"Prompt",selected:"selected",cancelled:"cancelled",you:"You",image:"image",home:"home",star:"star",modalContent:(t,o)=>`You ${o?"selected":"cancelled"} ${t}`}},components:{PressFab:e({name:"PressFab",components:{PressIconPlus:i},props:{pattern:{type:Object,default:()=>({})},horizontal:{type:String,default:"left"},vertical:{type:String,default:"bottom"},direction:{type:String,default:"horizontal"},content:{type:Array,default:()=>[]},show:{type:Boolean,default:!1},popMenu:{type:Boolean,default:!0},top:{type:Number,default:0},bottomThreshold:{type:Number,default:20},initX:{type:Number,default:12},initY:{type:Number,default:62}},emits:["fabClick","trigger"],data:()=>({fabShow:!1,isShow:!1,isAndroidNVue:!1,styles:{color:"#3c3e49",selectedColor:"#007AFF",backgroundColor:"#fff",buttonColor:"#007AFF",iconColor:"#fff",iconFontSize:32},btnSwitchPos:{x:0,y:0},fabSize:{width:55,height:55},switchPos:{hasMoved:!1,x:0,y:0,startX:0,startY:0,endX:0,endY:0}}),computed:{contentWidth(){return 55*(this.content.length+1)+15+"px"},contentWidthMin:()=>"55px",boxWidth(){return this.getPosition(3,"horizontal")},boxHeight(){return this.getPosition(3,"vertical")},leftBottom(){return this.getPosition(0,"left","bottom")},rightBottom(){return this.getPosition(0,"right","bottom")},leftTop(){return this.getPosition(0,"left","top")},rightTop(){return this.getPosition(0,"right","top")},flexDirectionStart(){return this.getPosition(1,"vertical","top")},flexDirectionEnd(){return this.getPosition(1,"vertical","bottom")},horizontalLeft(){return this.getPosition(2,"horizontal","left")},horizontalRight(){return this.getPosition(2,"horizontal","right")}},watch:{pattern:{handler(t){this.styles=Object.assign({},this.styles,t)},deep:!0}},created(){this.isShow=this.show,0===this.top&&(this.fabShow=!0),this.styles=Object.assign({},this.styles,this.pattern),this.btnSwitchPos={x:this.initX,y:this.initY},this.switchPos.x=this.btnSwitchPos.x,this.switchPos.y=this.btnSwitchPos.y},mounted(){t(this,".press-fab__plus").then((t=>{this.fabSize.width=t.width,this.fabSize.height=t.height}))},methods:{getSwitchButtonSafeAreaXY(t,i){const{fabSize:e,top:s,bottomThreshold:n}=this,{windowWidth:r,windowHeight:c,windowTop:a,windowBottom:h}=o(),l=r,p=c-s;return t+e.width>l&&(t=l-e.width),i+e.height-a>p&&(i=p-e.height+a),t<0&&(t=0),i<n+h&&(i=n+h),[t,i]},onClick(){this.$emit("fabClick"),this.popMenu&&(this.isShow=!this.isShow)},open(){this.isShow=!0},close(){this.isShow=!1},onItemClick(t,o){this.isShow&&this.$emit("trigger",{index:t,item:o})},getPosition(t,o,i){return 0===t?this.horizontal===o&&this.vertical===i:1===t?this.direction===o&&this.vertical===i:2===t?this.direction===o&&this.horizontal===i:this.isShow&&this.direction===o?this.contentWidth:this.contentWidthMin},onTouchStart(t){this.switchPos.startX=t.touches[0].pageX,this.switchPos.startY=t.touches[0].pageY},onTouchEnd(){this.switchPos.hasMoved&&(this.switchPos.startX=0,this.switchPos.startY=0,this.switchPos.hasMoved=!1,this.setSwitchPosition(this.switchPos.endX,this.switchPos.endY))},onTouchMove(t){if(t.touches.length<=0)return;const o=t.touches[0].pageX-this.switchPos.startX,i=t.touches[0].pageY-this.switchPos.startY;let e=Math.floor(this.switchPos.x-o),s=Math.floor(this.switchPos.y-i);[e,s]=this.getSwitchButtonSafeAreaXY(e,s),this.btnSwitchPos.x=e,this.btnSwitchPos.y=s,this.switchPos.endX=e,this.switchPos.endY=s,this.switchPos.hasMoved=!0,t.preventDefault(),t.stopPropagation()},setSwitchPosition(t,o){[t,o]=this.getSwitchButtonSafeAreaXY(t,o),this.switchPos.x=t,this.switchPos.y=o,this.btnSwitchPos.x=t,this.btnSwitchPos.y=o}}},[["render",function(t,o,i,e,b,w){const _=g("press-icon-plus");return s(),n("div",{class:"press-cursor-point"},[i.popMenu&&(w.leftBottom||w.rightBottom||w.leftTop||w.rightTop)&&i.content.length>0?(s(),n("div",{key:0,class:r(["press-fab",{"press-fab--leftBottom":w.leftBottom,"press-fab--rightBottom":w.rightBottom,"press-fab--leftTop":w.leftTop,"press-fab--rightTop":w.rightTop}]),style:c({right:`${b.btnSwitchPos.x}px`,bottom:`${b.btnSwitchPos.y}px`})},[a("div",{class:r([{"press-fab__content--left":"left"===i.horizontal,"press-fab__content--right":"right"===i.horizontal,"press-fab__content--flexDirection":"vertical"===i.direction,"press-fab__content--flexDirectionStart":w.flexDirectionStart,"press-fab__content--flexDirectionEnd":w.flexDirectionEnd,"press-fab__content--other-platform":!b.isAndroidNVue},"press-fab__content"]),style:c({width:w.boxWidth,height:w.boxHeight,backgroundColor:b.styles.backgroundColor}),elevation:"5"},[w.flexDirectionStart||w.horizontalLeft?(s(),n("div",{key:0,class:"press-fab__item press-fab__item--first"})):h("v-if",!0),(s(!0),n(l,null,p(i.content,((t,o)=>(s(),n("div",{key:o,class:r([{"press-fab__item--active":b.isShow},"press-fab__item"]),onClick:i=>w.onItemClick(o,t)},[a("img",{src:t.active?t.selectedIconPath:t.iconPath,class:"press-fab__item-image",mode:"aspectFit"},null,8,["src"]),a("span",{class:"press-fab__item-text",style:c({color:t.active?b.styles.selectedColor:b.styles.color})},d(t.text),5)],10,["onClick"])))),128)),w.flexDirectionEnd||w.horizontalRight?(s(),n("div",{key:1,class:"press-fab__item press-fab__item--first"})):h("v-if",!0)],6)],6)):h("v-if",!0),a("div",{class:r([{"press-fab__content--other-platform":!b.isAndroidNVue},"press-fab__circle press-fab__plus"]),style:c({"background-color":b.styles.buttonColor,right:`${b.btnSwitchPos.x}px`,bottom:`${b.btnSwitchPos.y}px`}),onClick:o[0]||(o[0]=(...t)=>w.onClick&&w.onClick(...t)),onTouchstart:o[1]||(o[1]=(...t)=>w.onTouchStart&&w.onTouchStart(...t)),onTouchend:o[2]||(o[2]=(...t)=>w.onTouchEnd&&w.onTouchEnd(...t)),onTouchmove:o[3]||(o[3]=m(((...t)=>w.onTouchMove&&w.onTouchMove(...t)),["stop","prevent"]))},[f(t.$slots,"default",{},(()=>[u(_,{name:"cross",color:b.styles.iconColor,size:b.styles.iconFontSize,class:r(["press-fab-circle-icon",{"press-fab__plus--active":b.isShow&&i.content.length>0}])},null,8,["color","size","class"])]),!0)],38)])}],["__scopeId","data-v-cc979661"]]),PressCell:w},data(){var t;return{title:"press-fab",horizontal:"right",vertical:"bottom",direction:"horizontal",pattern:{color:"#7A7E83",backgroundColor:"#fff",selectedColor:"#007AFF",buttonColor:"#007AFF",iconColor:"#fff"},is_color_type:!1,content:[{iconPath:"https://mike-1255355338.cos.ap-guangzhou.myqcloud.com/article/2023/5/own_mike_394e9b73a2b402c417.png",selectedIconPath:"https://mike-1255355338.cos.ap-guangzhou.myqcloud.com/article/2023/5/own_mike_ddaf193c855d2d4b93.png",text:this.t("image"),active:!1},{iconPath:"https://mike-1255355338.cos.ap-guangzhou.myqcloud.com/article/2023/5/own_mike_48f3dce2ae13561480.png",selectedIconPath:"https://mike-1255355338.cos.ap-guangzhou.myqcloud.com/article/2023/5/own_mike_119ad562534f721c7f.png",text:this.t("home"),active:!1},{iconPath:"https://mike-1255355338.cos.ap-guangzhou.myqcloud.com/article/2023/5/own_mike_069e81d6aae9e308e1.png",selectedIconPath:"https://mike-1255355338.cos.ap-guangzhou.myqcloud.com/article/2023/5/own_mike_eda1e7d95cb62dc6e1.png",text:this.t("star"),active:!1}],top:_()?44:0,slotInitX:Math.max((null==(t=o())?void 0:t.windowWidth)-66,0)}},onBackPress(){return!!this.$refs.fabRef.isShow&&(this.$refs.fabRef.close(),!0)},methods:{trigger(t){const o=this,{t:i,content:e}=this;console.log("[trigger] e: ",t),this.content[t.index].active=!t.item.active,uni.showModal({title:i("prompt"),content:this.t("modalContent",t.item.text,e[t.index].active),confirmText:i("confirm"),cancelText:i("cancel"),success(t){t.confirm?o.onGTip("confirm"):t.cancel&&o.onGTip("cancel")}})},fabClick(){console.log("[fabClick]"),this.onGTip("[click]")},fabClickSlot(){console.log("[fabClickSlot]"),this.onGTip("[click]")},switchBtn(t,o){const{onClick:i,isShow:e}=this.$refs.fabRef;e||null==i||i(),0===t?this.direction="horizontal"===this.direction?"vertical":"horizontal":(this.horizontal=t,this.vertical=o)},switchColor(){this.is_color_type=!this.is_color_type,this.is_color_type?(this.pattern.iconColor="#aaa",this.pattern.buttonColor="#fff"):(this.pattern.iconColor="#fff",this.pattern.buttonColor="#007AFF")}}},[["render",function(t,o,i,e,r,c){const h=g("press-cell"),l=g("demo-block"),p=g("PressFab");return s(),n("div",{class:"demo-wrap"},[u(l,{title:t.t("basicUsage")},{default:b((()=>[u(h,{title:t.t("toggleDirection"),"is-link":"",onClick:o[0]||(o[0]=t=>c.switchBtn(0))},null,8,["title"]),u(h,{title:t.t("changeColor"),"is-link":"",onClick:c.switchColor},null,8,["title","onClick"])])),_:1},8,["title"]),u(p,{ref:"fabRef",pattern:r.pattern,content:r.content,horizontal:r.horizontal,vertical:r.vertical,direction:r.direction,top:r.top,onTrigger:c.trigger,onFabClick:c.fabClick},null,8,["pattern","content","horizontal","vertical","direction","top","onTrigger","onFabClick"]),u(p,{"init-x":r.slotInitX,onFabClick:c.fabClickSlot},{default:b((()=>[a("span",{class:"debug"},"OK")])),_:1},8,["init-x","onFabClick"])])}],["__scopeId","data-v-b4122a1f"]]);export{P as default};

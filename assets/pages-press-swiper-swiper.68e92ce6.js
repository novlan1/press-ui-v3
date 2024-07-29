import{_ as t,o as i,q as e,w as a,r as n,Y as r,X as o,c as s,i as l,h as d,t as u,e as c}from"./index-64b5aeb5.js";import{S as p}from"./swiper.2bd5335f.js";import{P as m}from"./press-switch.2a6a3c9f.js";import{P as g}from"./press-slider.dff0abf7.js";import"./utils.28df66fa.js";import"./add-unit.62ceb573.js";import"./press-loading-plus.b0c8e882.js";import"./style.0f94ff97.js";import"./press-component.6d1ba0d0.js";import"./touch.bcbb2f5b.js";import"./version.e043cae6.js";import"./rect.8c325831.js";import"./unit.52baf4f6.js";const v=t({components:{Swiper:t({name:"PressSwiper",components:{},mixins:[p],props:{...{indicatorDots:{type:[Boolean,String],default:!1},vertical:{type:[Boolean,String],default:!1},autoplay:{type:[Boolean,String],default:!1},circular:{type:[Boolean,String],default:!1},interval:{type:[Number,String],default:5e3},duration:{type:[Number,String],default:500},current:{type:[Number,String],default:0},indicatorColor:{type:String,default:""},indicatorActiveColor:{type:String,default:""},previousMargin:{type:String,default:""},nextMargin:{type:String,default:""},currentItemId:{type:String,default:""},skipHiddenItemLayout:{type:[Boolean,String],default:!1},displayMultipleItems:{type:[Number,String],default:1},disableTouch:{type:[Boolean,String],default:!1},navigation:{type:[Boolean,String],default:!1},navigationColor:{type:String,default:"#fff"},navigationActiveColor:{type:String,default:"rgba(53, 53, 53, 0.6)"}}},methods:{updateCurrent(...t){this.$emit("updateCurrent",...t)},updateCurrentItemId(...t){this.$emit("updateCurrentItemId",...t)},change(...t){this.$emit("change",...t)},animationfinish(...t){this.$emit("animationfinish",...t)},transition(...t){this.$emit("transition",...t)}}},[["render",function(t,o,s,l,d,u){const c=r;return i(),e(c,{"indicator-dots":t.indicatorDots,vertical:t.vertical,autoplay:t.autoplay,circular:t.circular,interval:t.interval,duration:t.duration,current:t.current,"indicator-color":t.indicatorColor,"indicator-active-color":t.indicatorActiveColor,"previous-margin":t.previousMargin,"next-margin":t.nextMargin,"current-item-id":t.currentItemId,"skip-hidden-item-layout":t.skipHiddenItemLayout,"display-multiple-items":t.displayMultipleItems,"disable-touch":t.disableTouch,navigation:t.navigation,"navigation-color":t.navigationColor,"navigation-active-color":t.navigationActiveColor,"onUpdate:current":u.updateCurrent,"onUpdate:currentItemId":u.updateCurrentItemId,onChange:u.change,onAnimationfinish:u.animationfinish,onTransition:u.transition},{default:a((()=>[n(t.$slots,"default")])),_:3},8,["indicator-dots","vertical","autoplay","circular","interval","duration","current","indicator-color","indicator-active-color","previous-margin","next-margin","current-item-id","skip-hidden-item-layout","display-multiple-items","disable-touch","navigation","navigation-color","navigation-active-color","onUpdate:current","onUpdate:currentItemId","onChange","onAnimationfinish","onTransition"])}]]),SwiperItem:t({name:"PressSwiperItem",components:{},mixins:[p],props:{...{itemId:{type:String,default:""}}},data:()=>({})},[["render",function(t,r,s,l,d,u){const c=o;return i(),e(c,{"item-id":t.itemId},{default:a((()=>[n(t.$slots,"default")])),_:3},8,["item-id"])}]]),PressSwitch:m,PressSlider:g},data:()=>({background:["color1","color2","color3"],indicatorDots:!0,autoplay:!0,interval:2e3,duration:500}),methods:{changeIndicatorDots(){this.indicatorDots=!this.indicatorDots},changeAutoplay(){this.autoplay=!this.autoplay},intervalChange(t){console.log("e",t),this.interval=t},durationChange(t){console.log("e",t),this.duration=t}}},[["render",function(t,e,n,p,m,g){const v=o,h=r,f=c("PressSwitch"),y=c("PressSlider");return i(),s("div",{class:"demo-wrap"},[l("div",{class:"swiper-wrap"},[d(h,{class:"swiper",circular:"","indicator-dots":m.indicatorDots,autoplay:m.autoplay,interval:m.interval,duration:m.duration},{default:a((()=>[d(v,null,{default:a((()=>[l("div",{class:"swiper-item swiper-item--big-red"}," A ")])),_:1}),d(v,null,{default:a((()=>[l("div",{class:"swiper-item swiper-item--big-green"}," B ")])),_:1}),d(v,null,{default:a((()=>[l("div",{class:"swiper-item swiper-item--big-blue"}," C ")])),_:1})])),_:1},8,["indicator-dots","autoplay","interval","duration"])]),l("div",{class:"swiper-list"},[l("div",{class:"swiper-list-cell swiper-list-cell--pd"},[l("div",{class:"uni-list-cell-db"}," 指示点 "),d(f,{checked:m.indicatorDots,size:"20px",onChange:g.changeIndicatorDots},null,8,["checked","onChange"])]),l("div",{class:"swiper-list-cell swiper-list-cell--pd"},[l("div",{class:"uni-list-cell-db"}," 自动播放 "),d(f,{checked:m.autoplay,size:"20px",onChange:g.changeAutoplay},null,8,["checked","onChange"])])]),l("div",{class:"slider-wrap"},[l("div",{class:"slider-item"},[l("span",null,"幻灯片切换时长(ms)"),l("span",{class:"info"},u(m.duration),1)]),d(y,{value:m.duration,min:500,max:2e3,onChange:g.durationChange},null,8,["value","onChange"]),l("div",{class:"slider-item"},[l("span",null,"自动播放间隔时长(ms)"),l("span",{class:"info"},u(m.interval),1)]),d(y,{value:m.interval,min:2e3,max:1e4,onChange:g.intervalChange},null,8,["value","onChange"])])])}],["__scopeId","data-v-eedd013d"]]);export{v as default};

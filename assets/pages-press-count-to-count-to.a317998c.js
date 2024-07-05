import{_ as t,C as e,E as a,o as s,c as i,z as l,I as n,t as o,d as r,w as u,k as h,e as d}from"./index-69342aaa.js";import{a as m,P as c}from"./press-grid-item.dee854bf.js";import"./relation.25345683.js";import"./parent-map.a476e3d9.js";const p=t({i18n:{"zh-CN":{customStyle:"自定义样式",decimals:"小数位",separator:"千分位分隔符",duration:"自定义持续时间",animation:"禁用缓慢动画",control:"自定义控制",resume:"继续",pause:"暂停",start:"开始",countdown:"倒计时",slot:"插槽"},"en-US":{customStyle:"Custom Style",decimals:"Decimal",separator:"Separator",duration:"Duration",animation:"Animation",control:"Control",resume:"Resume",pause:"Pause",start:"Start",countdown:"Countdown",slot:"Slot"}},components:{PressCountTo:t({name:"PressCountTo",options:{virtualHost:!0,styleIsolation:"shared"},mixins:[{props:{startValue:{type:[String,Number],default:0},endValue:{type:[String,Number],default:0},duration:{type:[String,Number],default:2e3},autoplay:{type:Boolean,default:!0},decimals:{type:[String,Number],default:0},useEasing:{type:Boolean,default:!0},decimal:{type:[String,Number],default:"."},color:{type:String,default:"#606266"},fontSize:{type:[String,Number],default:22},bold:{type:Boolean,default:!1},separator:{type:String,default:","},customStyle:{type:String,default:""},useSlot:{type:Boolean,default:!1}}}],emits:["change","end"],data(){return{localStartVal:this.startValue,displayValue:this.formatNumber(this.startValue),printVal:null,paused:!1,localDuration:Number(this.duration),startTime:null,timestamp:null,remaining:null,rAF:null,lastTime:0}},computed:{countToStyle(){const{customStyle:t,fontSize:s,bold:i,color:l}=this;return`${t} ${e({fontSize:a(s),fontWeight:i?"bold":"normal",color:l})}}`},countDown(){return this.startValue>this.endValue}},watch:{startValue(){this.autoplay&&this.start()},endValue(){this.autoplay&&this.start()}},mounted(){this.autoplay&&this.start()},methods:{addUnit:a,easingFn:(t,e,a,s)=>a*(1-Math.pow(2,-10*t/s))*1024/1023+e,requestAnimationFrame(t){const e=(new Date).getTime(),a=Math.max(0,16-(e-this.lastTime)),s=setTimeout((()=>{t(e+a)}),a);return this.lastTime=e+a,s},cancelAnimationFrame(t){clearTimeout(t)},start(){this.localStartVal=this.startValue,this.startTime=null,this.localDuration=this.duration,this.paused=!1,this.rAF=this.requestAnimationFrame(this.count)},reStart(){this.paused?(this.resume(),this.paused=!1):(this.stop(),this.paused=!0)},stop(){this.cancelAnimationFrame(this.rAF)},resume(){this.remaining&&(this.startTime=0,this.localDuration=this.remaining,this.localStartVal=this.printVal,this.requestAnimationFrame(this.count))},reset(){this.startTime=null,this.cancelAnimationFrame(this.rAF),this.displayValue=this.formatNumber(this.startValue),this.$emit("change",this.displayValue)},count(t){this.startTime||(this.startTime=t),this.timestamp=t;const e=t-this.startTime;this.remaining=this.localDuration-e,this.useEasing?this.countDown?this.printVal=this.localStartVal-this.easingFn(e,0,this.localStartVal-this.endValue,this.localDuration):this.printVal=this.easingFn(e,this.localStartVal,this.endValue-this.localStartVal,this.localDuration):this.countDown?this.printVal=this.localStartVal-(this.localStartVal-this.endValue)*(e/this.localDuration):this.printVal=this.localStartVal+(this.endValue-this.localStartVal)*(e/this.localDuration),this.countDown?this.printVal=this.printVal<this.endValue?this.endValue:this.printVal:this.printVal=this.printVal>this.endValue?this.endValue:this.printVal,this.displayValue=this.formatNumber(this.printVal)||0,this.$emit("change",this.displayValue),e<this.localDuration?this.rAF=this.requestAnimationFrame(this.count):this.$emit("end")},isNumber:t=>!isNaN(parseFloat(t)),formatNumber(t){t=(t=Number(t)).toFixed(Number(this.decimals));const e=(t+="").split(".");let a=e[0];const s=e.length>1?this.decimal+e[1]:"",i=/(\d+)(\d{3})/;if(this.separator&&!this.isNumber(this.separator))for(;i.test(a);)a=a.replace(i,`$1${this.separator}$2`);return a+s},destroyed(){this.cancelAnimationFrame(this.rAF)}}},[["render",function(t,e,a,r,u,h){return s(),i("span",{class:"press-count-to"},[t.useSlot?l(t.$slots,"default",{key:0},void 0,!0):(s(),i("span",{key:1,class:"press-count-to__number",style:n(h.countToStyle)},o(u.displayValue),5))])}],["__scopeId","data-v-cf4f4e9f"]]),PressGrid:m,PressGridItem:c},data:()=>({customStyle:"margin-right: 16px;",autoplay:!1,slotValue:""}),methods:{start(){this.$refs.pressCountToRef.start()},pause(){this.$refs.pressCountToRef.stop()},resume(){this.$refs.pressCountToRef.resume()},onEnd(){this.onGTip("[end]")},onChange(t){this.slotValue=t}}},[["render",function(t,e,a,l,n,m){const c=h("PressCountTo"),p=h("demo-block"),f=h("press-grid-item"),V=h("press-grid");return s(),i("div",{class:"demo-wrap"},[r(p,{title:t.t("basicUsage")},{default:u((()=>[r(c,{"start-value":30,"end-value":500,onEnd:m.onEnd},null,8,["onEnd"])])),_:1},8,["title"]),r(p,{title:t.t("customStyle")},{default:u((()=>[r(c,{"end-value":3e3,color:"#909399","font-size":30,bold:!0})])),_:1},8,["title"]),r(p,{title:t.t("duration")},{default:u((()=>[r(c,{"start-value":30,"end-value":500,duration:5e3,onEnd:m.onEnd},null,8,["onEnd"])])),_:1},8,["title"]),r(p,{title:t.t("animation")},{default:u((()=>[r(c,{"start-value":30,"end-value":500,"use-easing":!1})])),_:1},8,["title"]),r(p,{title:t.t("countdown")},{default:u((()=>[r(c,{"start-value":500,"end-value":0})])),_:1},8,["title"]),r(p,{title:t.t("decimals")},{default:u((()=>[r(c,{"start-value":30,"end-value":500,decimals:2,decimal:1})])),_:1},8,["title"]),r(p,{title:t.t("separator")},{default:u((()=>[r(c,{"end-value":5e3,separator:","})])),_:1},8,["title"]),r(p,{title:t.t("slot")},{default:u((()=>[r(c,{"end-value":5e3,"use-slot":!0,onChange:m.onChange},{default:u((()=>[d("span",{style:{color:"red"}},o(n.slotValue),1)])),_:1},8,["onChange"])])),_:1},8,["title"]),r(p,{title:t.t("control")},{default:u((()=>[r(c,{ref:"pressCountToRef","end-value":5e3,autoplay:n.autoplay,onEnd:m.onEnd},null,8,["autoplay","onEnd"])])),_:1},8,["title"]),r(V,{clickable:"","column-num":3},{default:u((()=>[r(f,{text:t.t("start"),icon:"play-circle-o",onClick:m.start},null,8,["text","onClick"]),r(f,{text:t.t("pause"),icon:"pause-circle-o",onClick:m.pause},null,8,["text","onClick"]),r(f,{text:t.t("resume"),icon:"replay",onClick:m.resume},null,8,["text","onClick"])])),_:1})])}]]);export{p as default};

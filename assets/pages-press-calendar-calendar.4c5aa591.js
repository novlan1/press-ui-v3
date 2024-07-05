import{P as t}from"./press-popup-plus.4276f099.js";import{P as e}from"./press-toast.bd9fd821.js";import{_ as o,o as a,c as i,F as s,b as n,t as l,v as r,k as c,r as u,y as m,x as d,u as f,d as h,j as p,w as y,a as D,S as g}from"./index-26897e9f.js";import{i as w,r as k}from"./version.066ec1d4.js";import{t as b}from"./index.5eeb9268.js";import{u as C}from"./utils.f8cec38d.js";import{P as v}from"./press-button.68ee5a84.js";import{T as x}from"./handler.2ac35d88.js";import{d as S,a as T}from"./press-component.5db9b2cc.js";import{P as _}from"./press-cell.09949a8d.js";import{t as I}from"./time.81a17f1c.js";import"./press-icon-plus.cec3bc23.js";import"./add-unit.e5b08e9d.js";import"./press-info.8af1a743.js";import"./press-overlay.024e8d5d.js";import"./press-transition.05dfd399.js";import"./press-loading-plus.3f0fdd35.js";import"./dialog-mixin.97cae8f4.js";import"./component-handler.a3e6e2e9.js";import"./press-loading.59b8bf61.js";import"./button.3e831465.js";import"./h5-handler.f46c847a.js";import"./link.9c6737a1.js";import"./event.ab14895d.js";import"./support-passive.bc409298.js";function O(t){return t instanceof Date||(t=new Date(t)),b("calendar.monthTitle",t.getFullYear(),t.getMonth()+1)}function M(t,e){t instanceof Date||(t=new Date(t)),e instanceof Date||(e=new Date(e));const o=t.getFullYear(),a=e.getFullYear(),i=t.getMonth(),s=e.getMonth();return o===a?i===s?0:i>s?1:-1:o>a?1:-1}function V(t,e){t instanceof Date||(t=new Date(t)),e instanceof Date||(e=new Date(e));const o=M(t,e);if(0===o){const o=t.getDate(),a=e.getDate();return o===a?0:o>a?1:-1}return o}function R(t,e){return(t=new Date(t)).setDate(t.getDate()+e),t}function j(t){return R(t,-1)}function $(t){return R(t,1)}function A(){const t=new Date;return t.setHours(0,0,0,0),t}function B(t){return Array.isArray(t)?t.map((t=>null===t?t:new Date(t))):new Date(t)}function W(t,e){return 32-new Date(t,e-1,32).getDate()}const P=A().getTime(),F=(()=>{const t=A();return new Date(t.getFullYear(),t.getMonth()+6,t.getDate()).getTime()})(),H={title:{type:String,default:b("calendar.title")},color:{type:String,default:""},formatter:{type:Function,default:null},confirmText:{type:String,default:b("calendar.confirm")},confirmDisabledText:{type:String,default:b("calendar.confirm")},allowSameDay:Boolean,type:{type:String,default:"single",observer:"reset"},minDate:{type:Number,default:P},maxDate:{type:Number,default:F},rowHeight:{type:null,default:64},showMark:{type:Boolean,default:!0},showTitle:{type:Boolean,default:!0},showConfirm:{type:Boolean,default:!0},showSubtitle:{type:Boolean,default:!0},safeAreaInsetBottom:{type:Boolean,default:!0},poppable:{type:Boolean,default:!0},firstDayOfWeek:{type:Number,default:0}};function N(t){return new Date(t)}const Y={getMark:function(t){return N(t).getMonth()+1},getDayStyle:function(t,e,o,a,i,s){const n=[],l=N(o).getDay()||7,r=l<s?7-s+l:7===l&&0===s?0:l-s;return 0===e&&n.push(["margin-left",100*r/7+"%"]),64!==a&&n.push(["height",`${a}px`]),i&&("start"===t||"end"===t||"start-end"===t||"multiple-selected"===t||"multiple-middle"===t?n.push(["background",i]):"middle"===t&&n.push(["color",i])),n.map((t=>t.join(":"))).join(";")},formatMonthTitle:function(t){return`${(t=N(t)).getFullYear()}年${t.getMonth()+1}月`},getMonthStyle:function(t,e,o){if(!t){const t=W((e=N(e)).getFullYear(),e.getMonth()+1),a=N(e).getDay();return`padding-bottom:${Math.ceil((t+a)/7)*o}px`}}},E={props:{date:{type:[String,Number],default:""},type:{type:String,default:""},color:H.color,minDate:H.minDate,maxDate:H.maxDate,showMark:H.showMark,rowHeight:H.rowHeight,formatter:H.formatter,currentDate:{type:[String,Number,Array],default:""},firstDayOfWeek:H.firstDayOfWeek,allowSameDay:H.allowSameDay,showSubtitle:H.showSubtitle,showMonthTitle:Boolean},emits:["click"],data:()=>({visible:!0,days:[],computed:Y,utils:C}),watch:{date:{handler(){this.setDays()}},type:{handler(){this.setDays()}},minDate:{handler(){this.setDays()}},maxDate:{handler(){this.setDays()}},formatter:{handler(){this.setDays()}},currentDate:{handler(){this.setDays()}},firstDayOfWeek:{handler(){this.setDays()}}},mounted(){this.setDays()},methods:{onClick(t){const e=this.days[t];"disabled"!==e.type&&this.$emit("click",e,this.days)},setDays(){const t=[],e=new Date(this.date),o=e.getFullYear(),a=e.getMonth(),i=W(e.getFullYear(),e.getMonth()+1);for(let s=1;s<=i;s++){const e=new Date(o,a,s),i=this.getDayType(e);let n={date:e,type:i,text:s,bottomInfo:this.getBottomInfo(i)};this.formatter&&(n=this.formatter(n)),t.push(n)}this.days=t},getMultipleDayType(t){const{currentDate:e}=this;if(!Array.isArray(e))return"";const o=t=>e.some((e=>0===V(e,t)));if(o(t)){const e=j(t),a=$(t),i=o(e),s=o(a);return i&&s?"multiple-middle":i?"end":s?"start":"multiple-selected"}return""},getRangeDayType(t){const{currentDate:e,allowSameDay:o}=this;if(!Array.isArray(e))return"";const[a,i]=e;if(!a)return"";const s=V(t,a);if(!i)return 0===s?"start":"";const n=V(t,i);return 0===s&&0===n&&o?"start-end":0===s?"start":0===n?"end":s>0&&n<0?"middle":""},getDayType(t){const{type:e,minDate:o,maxDate:a,currentDate:i}=this;return V(t,o)<0||V(t,a)>0?"disabled":"single"===e?0===V(t,i)?"selected":"":"multiple"===e?this.getMultipleDayType(t):"range"===e?this.getRangeDayType(t):""},getBottomInfo(t){if("range"===this.type){if("start"===t)return b("calendar.start");if("end"===t)return b("calendar.end");if("start-end"===t)return b("calendar.startEnd")}}}};function q(t){return new Date(t)}const L={getMonths:function(t,e){const o=[],a=q(t);a.setDate(1);do{o.push(a.getTime()),a.setMonth(a.getMonth()+1)}while(1!==M(a,q(e)));return o},getButtonDisabled:function(t,e){return null==e||("range"===t?!e[0]||!e[1]:"multiple"===t?!e.length:!e)}},z={options:{styleIsolation:"shared"},components:{CalendarHeader:o({props:{title:H.title,subtitle:{type:String,default:""},showTitle:H.showTitle,showSubtitle:H.showSubtitle,firstDayOfWeek:H.firstDayOfWeek},emits:["click-subtitle"],data:()=>({weekdays:[]}),watch:{firstDayOfWeek:{handler(){this.initWeekDay()}}},created(){this.initWeekDay()},methods:{initWeekDay(){const t=b("calendar.weekdays"),e=this.firstDayOfWeek||0;this.weekdays=[...t.slice(e,7),...t.slice(0,e)]},onClickSubtitle(t){this.$emit("click-subtitle",t)}}},[["render",function(t,e,o,m,d,f){return a(),i("div",{class:"press-calendar__header"},[o.showTitle?(a(),i(s,{key:0},[n(" 【修改点】小程序用empty判断无效，改成v-if/else "),o.title?(a(),i("div",{key:0,class:"press-calendar__header-title"},l(o.title),1)):(a(),i("div",{key:1,class:"press-calendar__header-title"},[r(t.$slots,"title",{},void 0,!0)]))],64)):n("v-if",!0),o.showSubtitle?(a(),i("div",{key:1,class:"press-calendar__header-subtitle",onClick:e[0]||(e[0]=(...t)=>f.onClickSubtitle&&f.onClickSubtitle(...t))},l(o.subtitle),1)):n("v-if",!0),c("div",{class:"press-calendar__weekdays"},[(a(!0),i(s,null,u(d.weekdays,((t,e)=>(a(),i("div",{key:e,class:"press-calendar__weekday"},l(t),1)))),128))])])}],["__scopeId","data-v-e60d99e2"]]),Month:o(E,[["render",function(t,e,o,r,c,h){return a(),i("div",{class:"press-calendar__month",style:m(c.computed.getMonthStyle(c.visible,o.date,o.rowHeight)),"data-date":o.date},[o.showMonthTitle?(a(),i("div",{key:0,class:"press-calendar__month-title"},l(c.computed.formatMonthTitle(o.date)),1)):n("v-if",!0),c.visible?(a(),i("div",{key:1,class:"press-calendar__days"},[o.showMark?(a(),i("div",{key:0,class:"press-calendar__month-mark"},l(c.computed.getMark(o.date)),1)):n("v-if",!0),(a(!0),i(s,null,u(c.days,((t,e)=>(a(),i("div",{key:e,style:m(c.computed.getDayStyle(t.type,e,o.date,o.rowHeight,o.color,o.firstDayOfWeek)),class:d(c.utils.bem2("calendar__day",[t.type])+" "+t.className),"data-index":e,onClick:t=>h.onClick(e)},["selected"===t.type?(a(),i("div",{key:0,class:"press-calendar__selected-day",style:m("width: "+o.rowHeight+"px; height: "+o.rowHeight+"px; background: "+o.color)},[t.topInfo?(a(),i("div",{key:0,class:"press-calendar__top-info"},l(t.topInfo),1)):n("v-if",!0),f(" "+l(t.text)+" ",1),t.bottomInfo?(a(),i("div",{key:1,class:"press-calendar__bottom-info"},l(t.bottomInfo),1)):n("v-if",!0)],4)):(a(),i("div",{key:1},[t.topInfo?(a(),i("div",{key:0,class:"press-calendar__top-info"},l(t.topInfo),1)):n("v-if",!0),f(" "+l(t.text)+" ",1),t.bottomInfo?(a(),i("div",{key:1,class:"press-calendar__bottom-info"},l(t.bottomInfo),1)):n("v-if",!0)]))],14,["data-index","onClick"])))),128))])):n("v-if",!0)],12,["data-date"])}],["__scopeId","data-v-d1e371da"]]),PressButton:v},props:{...H,scrollIntoViewData:{type:String,default:""},currentDate:{type:[String,Number,Array],default:null}},emits:["onConfirm","onClickSubtitle","scrollIntoView","onClickDay"],data:()=>({computed:L,utils:C,subtitle:""}),computed:{},mounted(){this.initRect()},methods:{onConfirm(...t){this.$emit("onConfirm",...t)},onClickSubtitle(...t){this.$emit("onClickSubtitle",...t)},scrollIntoView(...t){this.$emit("scrollIntoView",...t)},onClickDay(...t){this.$emit("onClickDay",...t)},initRect(){null!=this.contentObserver&&this.contentObserver.disconnect();const t=".press-calendar__body";let e=".month";const o=[0,.1,.9,1];if(w({selector:e,options:{threshold:o,observeAll:true,root:document.querySelector(t)},callback:t=>{for(const e of t)if(e.boundingClientRect.top<=e.rootBounds.top){this.subtitle=O(+e.target.dataset.date);break}}}))return;const a=uni.createIntersectionObserver(this,{thresholds:o,observeAll:true,dataset:!0});this.contentObserver=a,a.relativeTo(t),a.observe(e,(t=>{t.boundingClientRect.top<=t.relativeRect.top&&(this.subtitle=O(+t.dataset.date))}))}}};const K=t=>t instanceof Date?t.getTime():t;const Q=o({name:"PressCalendar",options:{...S,styleIsolation:"shared"},components:{Calendar:o(z,[["render",function(t,e,o,m,w,k){const b=h("CalendarHeader"),C=h("month"),v=g,x=h("press-button");return a(),i("div",{class:"press-calendar"},[p(b,{title:t.title,"show-title":t.showTitle,subtitle:w.subtitle,"show-subtitle":t.showSubtitle,"first-day-of-week":t.firstDayOfWeek,onClickSubtitle:k.onClickSubtitle},{title:y((()=>[r(t.$slots,"title",{},void 0,!0)])),_:3},8,["title","show-title","subtitle","show-subtitle","first-day-of-week","onClickSubtitle"]),p(v,{class:"press-calendar__body","scroll-y":"","scroll-into-view":o.scrollIntoViewData},{default:y((()=>[(a(!0),i(s,null,u(w.computed.getMonths(t.minDate,t.maxDate),((e,i)=>(a(),D(C,{id:"month"+i,key:i,class:"month","data-date":e,date:e,type:t.type,color:t.color,"min-date":t.minDate,"max-date":t.maxDate,"show-mark":t.showMark,formatter:t.formatter,"row-height":t.rowHeight,"current-date":o.currentDate,"show-subtitle":t.showSubtitle,"allow-same-day":t.allowSameDay,"show-month-title":0!==i||!t.showSubtitle,"first-day-of-week":t.firstDayOfWeek,onClick:k.onClickDay},null,8,["id","data-date","date","type","color","min-date","max-date","show-mark","formatter","row-height","current-date","show-subtitle","allow-same-day","show-month-title","first-day-of-week","onClick"])))),128))])),_:1},8,["scroll-into-view"]),c("div",{class:d(w.utils.bem2("calendar__footer",{safeAreaInsetBottom:t.safeAreaInsetBottom}))},[r(t.$slots,"footer",{},void 0,!0)],2),c("div",{class:d(w.utils.bem2("calendar__footer",{safeAreaInsetBottom:t.safeAreaInsetBottom}))},[t.showConfirm?(a(),D(x,{key:0,round:"",block:"",type:"danger",color:t.color,"custom-class":"press-calendar__confirm",disabled:w.computed.getButtonDisabled(t.type,o.currentDate),"native-type":"text",onClick:k.onConfirm},{default:y((()=>[f(l(w.computed.getButtonDisabled(t.type,o.currentDate)?t.confirmDisabledText:t.confirmText),1)])),_:1},8,["color","disabled","onClick"])):n("v-if",!0)],2)])}],["__scopeId","data-v-54d11b9e"]]),PressPopup:t,PressToast:e},props:{...H,show:{type:Boolean,default:!1},rangePrompt:{type:String,default:""},showRangePrompt:{type:Boolean,default:!0},defaultDate:{type:[String,Number],default:""},position:{type:String,default:"bottom"},round:{type:Boolean,default:!0},closeOnClickOverlay:{type:Boolean,default:!0},maxRange:{type:[String,Number],default:null},readonly:Boolean,...T},emits:["open","opened","close","closed","unselect","select","over-range","confirm","click-subtitle"],data:()=>({subtitle:"",currentDate:null,scrollIntoViewData:""}),watch:{show:{handler(t){t&&this.scrollIntoView()}},defaultDate:{handler(t){this.currentDate=t,this.scrollIntoView()}},type:{handler(){this.reset()}}},created(){this.currentDate=this.getInitialDate(this.defaultDate)},mounted(){!this.show&&this.poppable||this.scrollIntoView()},methods:{reset(){this.currentDate=this.getInitialDate(),this.scrollIntoView()},limitDateRange(t,e=null,o=null){return e=e||this.minDate,o=o||this.maxDate,-1===V(t,e)?e:1===V(t,o)?o:t},getInitialDate(t=null){const{type:e,minDate:o,maxDate:a}=this,i=A().getTime();if("range"===e){Array.isArray(t)||(t=[]);const[e,s]=t||[];return[this.limitDateRange(e||i,o,j(new Date(a)).getTime()),this.limitDateRange(s||i,$(new Date(o)).getTime())]}return"multiple"===e?Array.isArray(t)?t.map((t=>this.limitDateRange(t))):[this.limitDateRange(i)]:(t&&!Array.isArray(t)||(t=i),this.limitDateRange(t))},scrollIntoView(){k((()=>{const{currentDate:t,type:e,show:o,poppable:a,minDate:i,maxDate:s}=this,n="single"===e?t:t[0];if(!n||!(o||!a))return;const l=function(t,e){const o=[],a=new Date(t);a.setDate(1);do{o.push(a.getTime()),a.setMonth(a.getMonth()+1)}while(1!==M(a,e));return o}(i,s);l.some(((t,e)=>0===M(t,n)&&(this.scrollIntoViewData=`month${e}`,!0)))}))},onOpen(){this.$emit("open")},onOpened(){this.$emit("opened")},onClose(){this.$emit("close")},onClosed(){this.$emit("closed")},onClickDay({date:t},e){if(this.readonly)return;const{type:o,currentDate:a,allowSameDay:i}=this;if("range"===o){const[o,s]=a;if(o&&!s){const a=V(t,o);1===a?(e.some(((a,i)=>{const s="disabled"===a.type&&K(o)<K(a.date)&&K(a.date)<K(t);return s&&({date:t}=e[i-1]),s})),this.select([o,t],!0)):-1===a?this.select([t,null]):i&&this.select([t,t])}else this.select([t,null])}else if("multiple"===o){let e;if(a.some(((o,a)=>{const i=0===V(o,t);return i&&(e=a),i}))){const t=a.splice(e,1);this.currentDate=a,this.unselect(t)}else this.select([...a,t])}else this.select(t,!0)},unselect(t){const e=t[0];e&&this.$emit("unselect",B(e))},select(t,e){if(e&&"range"===this.type){if(!this.checkRange(t))return void(this.showConfirm?this.emit([t[0],R(t[0],this.maxRange-1)]):this.emit(t))}this.emit(t),e&&!this.showConfirm&&this.onConfirm()},emit(t){this.currentDate=Array.isArray(t)?t.map(K):K(t),this.$emit("select",B(t))},checkRange(t){const{maxRange:e,rangePrompt:o,showRangePrompt:a}=this;return!(e&&function(t){const e=new Date(t[0]).getTime();return(new Date(t[1]).getTime()-e)/864e5+1}(t)>e)||(a&&x({context:this,message:o||b("calendar.rangePrompt",e)}),this.$emit("over-range"),!1)},onConfirm(){("range"!==this.type||this.checkRange(this.currentDate))&&this.$nextTick((()=>{this.$emit("confirm",B(this.currentDate))}))},onClickSubtitle(t){this.$emit("click-subtitle",t)}}},[["render",function(t,e,o,s,n,l){const r=h("Calendar"),c=h("press-popup");return a(),i("div",{class:d(["press-calendar-index",t.customClass])},[t.poppable?(a(),D(c,{key:0,"custom-class":"press-calendar__popup--"+o.position,"close-icon-class":"press-calendar__close-icon",show:o.show,round:o.round,position:o.position,closeable:t.showTitle||t.showSubtitle,"close-on-click-overlay":o.closeOnClickOverlay,onEnter:l.onOpen,onClose:l.onClose,onAfterEnter:l.onOpened,onAfterLeave:l.onClosed},{default:y((()=>[p(r,{title:t.title,color:t.color,formatter:t.formatter,"confirm-text":t.confirmText,"confirm-disabled-text":t.confirmDisabledText,"allow-same-day":t.allowSameDay,type:t.type,"min-date":t.minDate,"max-date":t.maxDate,"row-height":t.rowHeight,"show-mark":t.showMark,"show-title":t.showTitle,"show-confirm":t.showConfirm,"show-subtitle":t.showSubtitle,"safe-area-inset-bottom":t.safeAreaInsetBottom,"first-day-of-week":t.firstDayOfWeek,"scroll-into-view-data":n.scrollIntoViewData,"current-date":n.currentDate,subtitle:n.subtitle,poppable:t.poppable,onOnConfirm:l.onConfirm,onOnClickSubtitle:l.onClickSubtitle,onScrollIntoView:l.scrollIntoView,onOnClickDay:l.onClickDay},null,8,["title","color","formatter","confirm-text","confirm-disabled-text","allow-same-day","type","min-date","max-date","row-height","show-mark","show-title","show-confirm","show-subtitle","safe-area-inset-bottom","first-day-of-week","scroll-into-view-data","current-date","subtitle","poppable","onOnConfirm","onOnClickSubtitle","onScrollIntoView","onOnClickDay"])])),_:1},8,["custom-class","show","round","position","closeable","close-on-click-overlay","onEnter","onClose","onAfterEnter","onAfterLeave"])):(a(),D(r,{key:1,"max-date":t.maxDate,"row-height":t.rowHeight,"show-mark":t.showMark,"show-title":t.showTitle,"show-confirm":t.showConfirm,"show-subtitle":t.showSubtitle,title:t.title,color:t.color,formatter:t.formatter,"confirm-text":t.confirmText,"confirm-disabled-text":t.confirmDisabledText,"allow-same-day":t.allowSameDay,type:t.type,"min-date":t.minDate,"safe-area-inset-bottom":t.safeAreaInsetBottom,"first-day-of-week":t.firstDayOfWeek,"scroll-into-view-data":n.scrollIntoViewData,"current-date":n.currentDate,subtitle:n.subtitle,poppable:t.poppable,onScrollIntoView:l.scrollIntoView,onOnClickDay:l.onClickDay,onOnConfirm:l.onConfirm,onOnClickSubtitle:l.onClickSubtitle},null,8,["max-date","row-height","show-mark","show-title","show-confirm","show-subtitle","title","color","formatter","confirm-text","confirm-disabled-text","allow-same-day","type","min-date","safe-area-inset-bottom","first-day-of-week","scroll-into-view-data","current-date","subtitle","poppable","onScrollIntoView","onOnClickDay","onOnConfirm","onOnClickSubtitle"]))],2)}],["__scopeId","data-v-e43bfd78"]]),U={color:"",minDate:P,maxDate:F,confirmText:b("calendar.confirm"),confirmDisabledText:b("calendar.confirm"),useFormatter:!1,position:"bottom",maxRange:null,firstDayOfWeek:0};let G=null;const J=o({i18n:{"zh-CN":{in:"入店",out:"离店",today:"今天",laborDay:"劳动节",youthDay:"青年节",calendar:"日历",maxRange:"日期区间最大范围",selectCount:t=>`选择了 ${t} 个日期`,selectSingle:"选择单个日期",selectMultiple:"选择多个日期",selectRange:"选择日期区间",quickSelect:"快捷选择",confirmText:"完成",customColor:"自定义颜色",customRange:"自定义日期范围",customConfirm:"自定义按钮文字",customDayText:"自定义日期文案",customPosition:"自定义弹出位置",customCalendar:"自定义日历",confirmDisabledText:"请选择结束时间",firstDayOfWeek:"自定义周起始日",tiledDisplay:"平铺展示"},"en-US":{in:"In",out:"Out",today:"Today",laborDay:"Labor day",youthDay:"Youth Day",calendar:"Calendar",maxRange:"Max Range",selectCount:t=>`${t} dates selected`,selectSingle:"Select Single Date",selectMultiple:"Select Multiple Date",selectRange:"Select Date Range",quickSelect:"Quick Select",confirmText:"OK",customColor:"Custom Color",customRange:"Custom Date Range",customConfirm:"Custom Confirm Text",customDayText:"Custom Day Text",customPosition:"Custom Position",customCalendar:"Custom Calendar",firstDayOfWeek:"Custom First Day Of Week",confirmDisabledText:"Select End Time",tiledDisplay:"Tiled display"}},components:{PressCalendar:Q,PressCell:_},data(){return G=this,{show:!1,ifShow:!1,type:"single",singleValue:"",multipleValue:"",rangeValue:"",showConfirm:!0,...U}},methods:{tFormatter(t){const e=t.date.getMonth()+1,o=t.date.getDate();return 5===e&&(1===o?t.topInfo=G.t("laborDay"):4===o?t.topInfo=G.t("youthDay"):11===o&&(t.topInfo=G.t("today"))),"start"===t.type?t.bottomInfo=G.t("in"):"end"===t.type&&(t.bottomInfo=G.t("out")),t},onDisplay(t,e=!0,o={}){this.type=t,this.showConfirm=e,Object.keys(U).forEach((t=>{this[t]=o[t]||U[t]})),this.show=!0,this.ifShow=!0},onClose(){this.show=!1,setTimeout((()=>{this.ifShow=!1}),500)},formatDate:t=>`${(t=new Date(t)).getMonth()+1}/${t.getDate()}`,onConfirm(t){if(console.log("[onConfirm] result: ",t),this.onClose(),"range"===this.type){const[e,o]=t;this.rangeValue=`${this.formatDate(e)} - ${this.formatDate(o)}`,this.onTip([e,o]," - ")}else"multiple"===this.type?(this.multipleValue=this.t("selectCount",t.length),this.onTip(t)):"single"===this.type&&(this.singleValue=this.formatDate(t),this.onTip([t]))},onTip(t,e=", "){const o=t.map((t=>(t=>I(t.getTime(),"yyyy-MM-dd"))(t))).join(e);this.onGTip(o,3e3)}}},[["render",function(t,e,o,s,l,r){const c=h("press-cell"),u=h("demo-block"),m=h("press-calendar");return a(),i("div",{class:"demo-wrap"},[p(u,{title:t.t("basicUsage")},{default:y((()=>[p(c,{title:t.t("selectSingle"),"is-link":"",value:l.singleValue,onClick:e[0]||(e[0]=t=>r.onDisplay("single"))},null,8,["title","value"]),p(c,{title:t.t("selectMultiple"),"is-link":"",value:l.multipleValue,onClick:e[1]||(e[1]=t=>r.onDisplay("multiple"))},null,8,["title","value"]),p(c,{title:t.t("selectRange"),"is-link":"",value:l.rangeValue,onClick:e[2]||(e[2]=t=>r.onDisplay("range"))},null,8,["title","value"])])),_:1},8,["title"]),p(u,{title:t.t("quickSelect")},{default:y((()=>[p(c,{title:t.t("selectSingle"),"is-link":"",value:l.singleValue,onClick:e[3]||(e[3]=t=>r.onDisplay("single",!1))},null,8,["title","value"]),p(c,{title:t.t("selectRange"),"is-link":"",value:l.rangeValue,onClick:e[4]||(e[4]=t=>r.onDisplay("range",!1))},null,8,["title","value"])])),_:1},8,["title"]),p(u,{title:t.t("customCalendar")},{default:y((()=>[p(c,{title:t.t("customColor"),"is-link":"",value:l.singleValue,onClick:e[5]||(e[5]=t=>r.onDisplay("single",!0,{color:"#07c160"}))},null,8,["title","value"]),p(c,{title:t.t("customRange"),"is-link":"",value:l.singleValue,onClick:e[6]||(e[6]=t=>r.onDisplay("single",!0,{minDate:new Date(2010,0,1).getTime(),maxDate:new Date(2010,0,31).getTime()}))},null,8,["title","value"]),p(c,{title:t.t("customConfirm"),"is-link":"",value:l.rangeValue,onClick:e[7]||(e[7]=e=>r.onDisplay("range",!0,{confirmText:t.t("confirmText"),confirmDisabledText:t.t("confirmDisabledText")}))},null,8,["title","value"]),p(c,{title:t.t("customDayText"),"is-link":"",value:l.rangeValue,onClick:e[8]||(e[8]=t=>r.onDisplay("range",!0,{useFormatter:!0}))},null,8,["title","value"]),p(c,{title:t.t("customPosition"),"is-link":"",value:l.singleValue,onClick:e[9]||(e[9]=t=>r.onDisplay("single",!0,{position:"right"}))},null,8,["title","value"]),p(c,{title:t.t("maxRange"),"is-link":"",value:l.rangeValue,onClick:e[10]||(e[10]=t=>r.onDisplay("range",!0,{maxRange:3}))},null,8,["title","value"]),p(c,{title:t.t("firstDayOfWeek"),"is-link":"",value:l.singleValue,onClick:e[11]||(e[11]=t=>r.onDisplay("single",!0,{firstDayOfWeek:1}))},null,8,["title","value"])])),_:1},8,["title"]),l.ifShow?(a(),D(m,{key:0,show:l.show,type:l.type,"show-confirm":l.showConfirm,color:t.color,"min-date":t.minDate,"max-date":t.maxDate,"confirm-text":t.confirmText,"confirm-disabled-text":t.confirmDisabledText,formatter:t.useFormatter?r.tFormatter:null,position:t.position,"max-range":t.maxRange,"first-day-of-week":t.firstDayOfWeek,onClose:r.onClose,onConfirm:r.onConfirm},null,8,["show","type","show-confirm","color","min-date","max-date","confirm-text","confirm-disabled-text","formatter","position","max-range","first-day-of-week","onClose","onConfirm"])):n("v-if",!0),p(u,{title:t.t("tiledDisplay")},{default:y((()=>[p(m,{poppable:!1,"show-confirm":!1,"custom-class":"calendar"})])),_:1},8,["title"])])}],["__scopeId","data-v-8df588fa"]]);export{J as default};

import{_ as e,b as t,J as s,aG as i,aH as r,ak as a,o as l,c as o,e as n,d as c,I as d,z as u,F as h,t as v,h as p,w as y,v as m,aI as C,aJ as f,u as x,k as g}from"./index-69342aaa.js";import{W as S,B as w}from"./color.3a05f6e0.js";function k(e){return Object.assign(e,{setStrokeStyle(t){e.strokeStyle=t},setLineWidth(t){e.lineWidth=t},setLineCap(t){e.lineCap=t},setFillStyle(t){e.fillStyle=t},setFontSize(t){e.font=String(t)},setGlobalAlpha(t){e.globalAlpha=t},setLineJoin(t){e.lineJoin=t},setTextAlign(t){e.textAlign=t},setMiterLimit(t){e.miterLimit=t},setShadow(t,s,i,r){e.shadowOffsetX=t,e.shadowOffsetY=s,e.shadowBlur=i,e.shadowColor=r},setTextBaseline(t){e.textBaseline=t},createCircularGradient(){},draw(){}})}let I=0;const _=2*Math.PI,b=-Math.PI/2;const V=e({i18n:{"zh-CN":{gradient:"渐变色",customSize:"大小定制",customStyle:"样式定制",customColor:"颜色定制",customWidth:"宽度定制",counterClockwise:"逆时针"},"en-US":{gradient:"Gradient",customSize:"Size",customStyle:"Custom Style",customColor:"Color",customWidth:"Width",counterClockwise:"Direction"}},components:{PressCircle:e({name:"PressCircle",props:{text:{type:String,default:""},lineCap:{type:String,default:"round"},value:{type:Number,default:0},speed:{type:Number,default:50},size:{type:Number,default:100},fill:{type:String,default:""},layerColor:{type:String,default:S},color:{type:null,default:w},type:{type:String,default:""},strokeWidth:{type:Number,default:4},clockwise:{type:Boolean,default:!0}},emits:[],data:()=>({hoverColor:w,id:1,isNotInUni:t()}),computed:{circleStyle(){const{size:e}=this;return`width: ${s.addUnit(e)};height: ${s.addUnit(e)}`},canvasId(){return`press-circle-${this.id}`}},watch:{value:{handler(){this.reRender()}},size:{handler(){this.drawCircle(this.currentValue)}},color:{handler(){this.setHoverColor().then((()=>{this.drawCircle(this.currentValue)}))}}},created(){I+=1,this.id=I},mounted(){this.currentValue=this.value,this.setHoverColor().then((()=>{this.drawCircle(this.currentValue)}))},destroyed(){this.onDestroyed()},unmounted(){this.onDestroyed()},methods:{onDestroyed(){this.clearMockInterval()},getContext(){const{type:e,size:s}=this;if(t()){const e=window.devicePixelRatio,t=document.getElementById(this.canvasId),i=t.getContext("2d");return this.inited||(this.inited=!0,t.width=s*e,t.height=s*e,i.scale(e,e)),Promise.resolve(k(i))}if(""===e||!i()){const e=uni.createCanvasContext(this.canvasId,this);return Promise.resolve(e)}const a=r().pixelRatio;return new Promise((t=>{uni.createSelectorQuery().in(this).select(`#${this.canvasId}`).node().exec((i=>{const r=i[0].node,l=r.getContext(e);this.inited||(this.inited=!0,r.width=s*a,r.height=s*a,l.scale(a,a)),t(k(l))}))}))},setHoverColor(){const{color:e,size:t}=this;return a(e)?this.getContext().then((s=>{const i=s.createLinearGradient(t,0,0,0);Object.keys(e).sort(((e,t)=>parseFloat(e)-parseFloat(t))).map((t=>i.addColorStop(parseFloat(t)/100,e[t]))),this.hoverColor=i})):(this.hoverColor=e,Promise.resolve())},presetCanvas(e,t,s,i,r){const{strokeWidth:a,lineCap:l,clockwise:o,size:n}=this,c=n/2,d=c-a/2;e.setStrokeStyle(t),e.setLineWidth(a),e.setLineCap(l),e.beginPath(),e.arc(c,c,d,s,i,!o),e.stroke(),r&&(e.setFillStyle(r),e.fill())},renderLayerCircle(e){const{layerColor:t,fill:s}=this;this.presetCanvas(e,t,0,_,s)},renderHoverCircle(e,t){const{clockwise:s}=this,i=_*(t/100),r=s?b+i:3*Math.PI-(b+i);this.presetCanvas(e,this.hoverColor,b,r)},drawCircle(e){const{size:t}=this;this.getContext().then((s=>{s.clearRect(0,0,t,t),this.renderLayerCircle(s);const i=(r=e,Math.min(Math.max(r,0),100));var r;0!==i&&this.renderHoverCircle(s,i),s.draw()}))},reRender(){const{value:e,speed:t}=this;if(t<=0||t>1e3)return void this.drawCircle(e);this.clearMockInterval(),this.currentValue=this.currentValue||0;const s=()=>{this.interval=setTimeout((()=>{this.currentValue!==e?(Math.abs(this.currentValue-e)<1?this.currentValue=e:this.currentValue<e?this.currentValue+=1:this.currentValue-=1,this.drawCircle(this.currentValue),s()):this.clearMockInterval()}),1e3/t)};s()},clearMockInterval(){this.interval&&(clearTimeout(this.interval),this.interval=null)}}},[["render",function(e,t,s,i,r,a){const x=C,g=f;return l(),o("div",{class:"press-circle-index"},[n("div",{class:"press-circle"},[c(x,{id:a.canvasId,class:"press-circle__canvas",type:s.type,style:d(a.circleStyle),"canvas-id":a.canvasId},null,8,["id","type","style","canvas-id"]),s.text?(l(),o(h,{key:1},[r.isNotInUni?(l(),o("div",{key:0,class:"press-circle__text"},v(s.text),1)):(l(),p(g,{key:1,class:"press-circle__text"},{default:y((()=>[m(v(s.text),1)])),_:1}))],64)):(l(),o("div",{key:0,class:"press-circle__text"},[u(e.$slots,"default",{},void 0,!0)]))])])}],["__scopeId","data-v-660c16f6"]]),PressButton:x},data:()=>({value:20,headerStyle:"background: #f7f8fa;",sectionStyle:"background: #f7f8fa;margin: 0;padding: 0 12px;",gradientColor:{"0%":"#3fecff","100%":"#6149f6"}}),methods:{onChangeCircleValue(e){if("plus"===e){if(this.value>=100)return;this.value+=20}else if("minus"===e){if(this.value<=0)return;this.value-=20}}}},[["render",function(e,t,s,i,r,a){const d=g("press-circle"),u=g("demo-block"),h=g("press-button");return l(),o("div",{class:"demo-wrap demo-wrap--gray"},[c(u,{title:e.t("basicUsage"),"header-style":r.headerStyle,"section-style":r.sectionStyle},{default:y((()=>[c(d,{value:r.value,text:`${r.value}%`},null,8,["value","text"])])),_:1},8,["title","header-style","section-style"]),c(u,{title:e.t("customStyle"),"header-style":r.headerStyle,"section-style":r.sectionStyle},{default:y((()=>[n("div",{class:"demo-part"},[c(d,{value:r.value,"stroke-width":6,text:e.t("customWidth")},null,8,["value","text"])]),n("div",{class:"demo-part"},[c(d,{value:r.value,"stroke-width":6,"layer-color":"#eeeeee",color:"#ee0a24",text:e.t("customColor")},null,8,["value","text"])]),n("div",{class:"demo-part"},[c(d,{value:r.value,"stroke-width":6,color:r.gradientColor,text:e.t("gradient")},null,8,["value","color","text"])]),n("div",{class:"demo-part"},[c(d,{value:r.value,"stroke-width":6,color:"#07c160",clockwise:!1,text:e.t("counterClockwise")},null,8,["value","text"])]),n("div",{class:"demo-part"},[c(d,{value:r.value,size:120,text:e.t("customSize")},null,8,["value","text"])]),n("div",null,[c(h,{type:"e-sport-primary","custom-style":"margin-right:8px;",onClick:t[0]||(t[0]=e=>a.onChangeCircleValue("plus"))},{default:y((()=>[m(v(e.t("add")),1)])),_:1}),c(h,{type:"e-sport-primary",onClick:t[1]||(t[1]=e=>a.onChangeCircleValue("minus"))},{default:y((()=>[m(v(e.t("decrease")),1)])),_:1})])])),_:1},8,["title","header-style","section-style"])])}],["__scopeId","data-v-86f0d4e6"]]);export{V as default};

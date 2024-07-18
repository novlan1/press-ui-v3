import{P as s}from"./press-cell.a0845ac7.js";import{P as t}from"./press-transition.e8aeacc8.js";import{_ as e,o,c as i,F as n,v as a,x as r,j as l,w as c}from"./index-43eb3ea0.js";import"./press-icon-plus.43efdcdd.js";import"./style.0f94ff97.js";import"./add-unit.0c57c089.js";import"./validator.84caa8d5.js";import"./press-info.68d3dd51.js";import"./utils.bb2d8d10.js";import"./press-component.181873fd.js";import"./link.82331220.js";import"./event.1c00601d.js";import"./support-passive.bc409298.js";import"./version.7ee5c281.js";let p=null;const m=s=>s.toLowerCase().replace(/\s+/,"-");const u=e({components:{PressCell:s,PressTransition:t},data(){const s=[{title:"Fade",list:["Fade","Fade Up","Fade Down","Fade Left","Fade Right"]},{title:"Slide",list:["Slide Up","Slide Down","Slide Left","Slide Right"]},{title:"Custom",list:["Custom"]}],t=s.reduce(((s,t)=>s.concat(t.list)),[]);return{customStyle:"",curTransitionType:"fade",transitionDemoList:s,options:t.reduce(((s,t)=>(s[m(t)]=!1,s)),{}),showCustom:!1}},methods:{onShowTransition(s){const t=m(s);this.curTransitionType=t,Object.keys(this.options).forEach((s=>{this.options[s]=!1})),setTimeout((()=>{this.options[t]=!0,clearTimeout(p);p=setTimeout((()=>{this.options[t]=!1}),"custom"===t?2e3:1e3)}))}}},[["render",function(s,t,e,p,m,u){const d=l("press-cell"),h=l("demo-block"),j=l("press-transition");return o(),i("div",{class:"demo-wrap"},[(o(!0),i(n,null,a(m.transitionDemoList,((s,t)=>(o(),r(h,{key:t,title:s.title},{default:c((()=>[(o(!0),i(n,null,a(s.list,(s=>(o(),r(d,{key:s,title:s,"is-link":"",onClick:t=>u.onShowTransition(s)},null,8,["title","onClick"])))),128))])),_:2},1032,["title"])))),128)),"custom"!==m.curTransitionType?(o(),r(j,{key:0,name:m.curTransitionType,show:m.options[m.curTransitionType]||!1,duration:300,"custom-class":"block"},null,8,["name","show"])):(o(),r(j,{key:1,show:m.options.custom||!1,duration:{enter:1e3,leave:1e3},"custom-class":"block",name:"","enter-class":"press-enter-class","enter-active-class":"press-enter-active-class","leave-active-class":"press-leave-active-class","leave-to-class":"press-leave-to-class"},null,8,["show"]))])}],["__scopeId","data-v-38777e04"]]);export{u as default};

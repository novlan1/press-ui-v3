import{P as s}from"./press-cell.c8fe1713.js";import{P as t}from"./press-toast.a88e7472.js";import{T as i}from"./handler.9a8e74b0.js";import{_ as o,o as l,c as e,h as n,w as a,e as r}from"./index-5ce068d6.js";import"./press-icon-plus.86d78210.js";import"./style.0f94ff97.js";import"./add-unit.39434bfe.js";import"./press-info.be4091c7.js";import"./utils.29d4c09b.js";import"./press-component.7a68e6d8.js";import"./link.2803ba37.js";import"./event.eea0932c.js";import"./support-passive.bc409298.js";import"./press-loading-plus.1b232e65.js";import"./press-overlay.cd574c53.js";import"./press-transition.760eb1f9.js";import"./version.4c093b8d.js";import"./dialog-mixin.042e72b2.js";import"./component-handler.80f67983.js";import"./h5-handler.fc39670d.js";const c=o({i18n:{"zh-CN":{customTip:"自定义提示",text:"文字提示",loading:"加载提示",default:"默认",success:"成功提示",fail:"失败提示",dynamic:"动态更新提示",html:"HTML提示",toastTip:"我是提示文案，建议不超过十五字~",loadingTip:"加载中...",successTip:"成功文案",failTip:"失败文案",htmlTip:'我是提示文案，建议不超过<span style="color: #07A872">十五字</span>~',dynamicTip:s=>`倒计时 ${s} 秒`,noDestroy:"不消失"},"en-US":{customTip:"Custom Tip",text:"Show",loading:"Loading",default:"Default",success:"Success",fail:"Fail",dynamic:"Dynamic",html:"HTML",toastTip:"Some messages",loadingTip:"Loading...",successTip:"Success",failTip:"Fail",htmlTip:'Some <span style="color: #07A872">messages</span>',dynamicTip:s=>`${s} seconds`,noDestroy:"Not Destroy"}},components:{PressCell:s,PressToast:t},data:()=>({customStyle:"",timer:null}),methods:{onShowToast(){i(this.t("toastTip"))},onShowToastLoading(s,t=3e3){i.clear(),"normal"!==s?i.loading({message:this.t("loadingTip"),forbidClick:!!t,loadingType:"spinner",duration:t}):i.loading({message:this.t("loadingTip"),forbidClick:!!t,duration:t})},onShowToastSuccess(s){"success"!==s?i.fail(this.t("failTip")):i.success(this.t("successTip"))},onShowDynamicToast(){const s=i.loading({duration:0,forbidClick:!0,message:this.t("dynamicTip",3)});let t=3;clearInterval(this.timer),this.timer=setInterval((()=>{t-=1,t?s.set("dataMessage",this.t("dynamicTip",t)):(clearInterval(this.timer),i.clear())}),1e3)},onShowHtmlToast(){i({message:this.t("htmlTip"),duration:3e3,type:"html"})}}},[["render",function(s,t,i,o,c,p){const m=r("press-cell"),d=r("demo-block"),u=r("press-toast");return l(),e("div",{class:"demo-wrap"},[n(d,{title:s.t("text")},{default:a((()=>[n(m,{title:s.t("check"),"is-link":"",onClick:p.onShowToast},null,8,["title","onClick"])])),_:1},8,["title"]),n(d,{title:s.t("loading")},{default:a((()=>[n(m,{title:s.t("default"),"is-link":"",onClick:t[0]||(t[0]=s=>p.onShowToastLoading("normal"))},null,8,["title"]),n(m,{title:"Spinner","is-link":"",onClick:t[1]||(t[1]=s=>p.onShowToastLoading("spinner"))}),n(m,{title:s.t("noDestroy"),"is-link":"",onClick:t[2]||(t[2]=s=>p.onShowToastLoading("normal",0))},null,8,["title"])])),_:1},8,["title"]),n(d,{title:s.t("customTip")},{default:a((()=>[n(m,{title:s.t("success"),"is-link":"",onClick:t[3]||(t[3]=s=>p.onShowToastSuccess("success"))},null,8,["title"]),n(m,{title:s.t("fail"),"is-link":"",onClick:t[4]||(t[4]=s=>p.onShowToastSuccess("fail"))},null,8,["title"]),n(m,{title:s.t("dynamic"),"is-link":"",onClick:p.onShowDynamicToast},null,8,["title","onClick"]),n(m,{title:s.t("html"),"is-link":"",onClick:p.onShowHtmlToast},null,8,["title","onClick"])])),_:1},8,["title"]),n(u,{id:"press-toast",ref:"press-toast"},null,512)])}]]);export{c as default};
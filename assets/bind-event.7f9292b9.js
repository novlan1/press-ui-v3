import{o as t,b as n}from"./event.fe25d607.js";let e=0;function o(o){const c=`binded_${e}`;function s(){const n=this;n[c]||(o.call(n,t,!0),n[c]=!0)}function a(){const t=this;t[c]&&(o.call(t,n,!1),t[c]=!1)}return e+=1,{mounted:s,activated:s,deactivated:a,beforeDestroy:a}}export{o as B};
function t(t){return/^[+-]?(\d+\.?\d*|\.\d+|\d\.\d+e\+\d+)$/.test(t)}function n(t){return"function"==typeof t}function e(t){return function(t){return"[object Object]"===Object.prototype.toString.call(t)}(t)&&n(t.then)&&n(t.catch)}function r(t){const n=t.split("?")[0];return/\.(jpeg|jpg|gif|png|svg|webp|jfif|bmp|dpg)/i.test(n)}function i(t){return/\.(mp4|mpg|mpeg|dat|asf|avi|rm|rmvb|mov|wmv|flv|mkv|m3u8)/i.test(t)}export{n as f,r as i,t as n,e as p,i as v};

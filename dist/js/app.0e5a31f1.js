(function(t){function e(e){for(var r,o,a=e[0],u=e[1],s=e[2],f=0,l=[];f<a.length;f++)o=a[f],Object.prototype.hasOwnProperty.call(c,o)&&c[o]&&l.push(c[o][0]),c[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);p&&p(e);while(l.length)l.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,o=1;o<n.length;o++){var a=n[o];0!==c[a]&&(r=!1)}r&&(i.splice(e--,1),t=u(u.s=n[0]))}return t}var r={},o={app:0},c={app:0},i=[];function a(t){return u.p+"js/"+({}[t]||t)+"."+{"chunk-01791f1f":"f73b03f8","chunk-2d0c4643":"294e7d79","chunk-2d2163ab":"3cd943d8","chunk-2d21a3d2":"f746ab02"}[t]+".js"}function u(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(t){var e=[],n={"chunk-01791f1f":1};o[t]?e.push(o[t]):0!==o[t]&&n[t]&&e.push(o[t]=new Promise((function(e,n){for(var r="css/"+({}[t]||t)+"."+{"chunk-01791f1f":"77f5f112","chunk-2d0c4643":"31d6cfe0","chunk-2d2163ab":"31d6cfe0","chunk-2d21a3d2":"31d6cfe0"}[t]+".css",c=u.p+r,i=document.getElementsByTagName("link"),a=0;a<i.length;a++){var s=i[a],f=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(f===r||f===c))return e()}var l=document.getElementsByTagName("style");for(a=0;a<l.length;a++){s=l[a],f=s.getAttribute("data-href");if(f===r||f===c)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var r=e&&e.target&&e.target.src||c,i=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete o[t],p.parentNode.removeChild(p),n(i)},p.href=c;var d=document.getElementsByTagName("head")[0];d.appendChild(p)})).then((function(){o[t]=0})));var r=c[t];if(0!==r)if(r)e.push(r[2]);else{var i=new Promise((function(e,n){r=c[t]=[e,n]}));e.push(r[2]=i);var s,f=document.createElement("script");f.charset="utf-8",f.timeout=120,u.nc&&f.setAttribute("nonce",u.nc),f.src=a(t);var l=new Error;s=function(e){f.onerror=f.onload=null,clearTimeout(p);var n=c[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+r+": "+o+")",l.name="ChunkLoadError",l.type=r,l.request=o,n[1](l)}c[t]=void 0}};var p=setTimeout((function(){s({type:"timeout",target:f})}),12e4);f.onerror=f.onload=s,document.head.appendChild(f)}return Promise.all(e)},u.m=t,u.c=r,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)u.d(n,r,function(e){return t[e]}.bind(null,r));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="/",u.oe=function(t){throw console.error(t),t};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],f=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var p=f;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},2872:function(t,e,n){t.exports=n.p+"img/shopcart.c68224ce.svg"},"3b53":function(t,e,n){"use strict";n("5426")},5426:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("main-tab-bar"),n("router-view")],1)},c=[],i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("tabbar",[r("tabbaritem",{attrs:{path:"home"},scopedSlots:t._u([{key:"itemicon",fn:function(){return[r("img",{attrs:{src:n("9443"),alt:""}})]},proxy:!0},{key:"itemicon-active",fn:function(){return[r("img",{attrs:{src:n("b508"),alt:""}})]},proxy:!0},{key:"itemtext",fn:function(){return[r("div",[t._v("首页")])]},proxy:!0}])}),r("tabbaritem",{attrs:{path:"category",color:"red"},scopedSlots:t._u([{key:"itemicon",fn:function(){return[r("img",{attrs:{src:n("57cd"),alt:""}})]},proxy:!0},{key:"itemicon-active",fn:function(){return[r("img",{attrs:{src:n("a5ef"),alt:""}})]},proxy:!0},{key:"itemtext",fn:function(){return[r("div",[t._v("分类")])]},proxy:!0}])}),r("tabbaritem",{attrs:{path:"cart",color:"yellow"},scopedSlots:t._u([{key:"itemicon",fn:function(){return[r("img",{attrs:{src:n("2872"),alt:""}})]},proxy:!0},{key:"itemicon-active",fn:function(){return[r("img",{attrs:{src:n("c3f8"),alt:""}})]},proxy:!0},{key:"itemtext",fn:function(){return[r("div",[t._v("购物车")])]},proxy:!0}])}),r("tabbaritem",{attrs:{path:"profile"},scopedSlots:t._u([{key:"itemicon",fn:function(){return[r("img",{attrs:{src:n("e55d"),alt:""}})]},proxy:!0},{key:"itemicon-active",fn:function(){return[r("img",{attrs:{src:n("d151"),alt:""}})]},proxy:!0},{key:"itemtext",fn:function(){return[r("div",[t._v("我的")])]},proxy:!0}])})],1)},a=[],u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"tabbar"}},[t._t("default")],2)},s=[],f={},l=f,p=(n("adc1"),n("2877")),d=Object(p["a"])(l,u,s,!1,null,null,null),h=d.exports,m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tabbaritem",on:{click:t.itemclick}},[t.active?n("div",[t._t("itemicon-active")],2):n("div",[t._t("itemicon")],2),n("div",{style:t.activestyle},[t._t("itemtext")],2)])},v=[],b={props:{path:String,color:{type:String,default:"red"}},methods:{itemclick(){return this.$router.push(this.path)}},computed:{active(){return-1!==this.$route.path.indexOf(this.path)},activestyle(){return this.active?{color:this.color}:{}}}},y=b,g=(n("3b53"),Object(p["a"])(y,m,v,!1,null,null,null)),x=g.exports,k={components:{tabbar:h,tabbaritem:x}},_=k,w=Object(p["a"])(_,i,a,!1,null,null,null),O=w.exports,S={components:{MainTabBar:O}},j=S,E=(n("034f"),Object(p["a"])(j,o,c,!1,null,null,null)),P=E.exports,T=n("8c4f");const C=T["a"].prototype.push;T["a"].prototype.push=function(t){return C.call(this,t).catch(t=>t)},r["a"].use(T["a"]);const $=()=>n.e("chunk-01791f1f").then(n.bind(null,"b3d7")),A=()=>n.e("chunk-2d21a3d2").then(n.bind(null,"bb51")),L=()=>n.e("chunk-2d2163ab").then(n.bind(null,"c228")),M=()=>n.e("chunk-2d0c4643").then(n.bind(null,"3b42")),N=[{path:"",redirect:"/home"},{path:"/home",component:$},{path:"/category",component:A},{path:"/cart",component:L},{path:"/profile",component:M}],B=new T["a"]({mode:"history",base:"/",routes:N});var q=B,D=n("2f62");r["a"].use(D["a"]);var J=new D["a"].Store({state:{},mutations:{},actions:{},modules:{}});r["a"].config.productionTip=!1,new r["a"]({router:q,store:J,render:function(t){return t(P)}}).$mount("#app")},"57cd":function(t,e,n){t.exports=n.p+"img/category.12bedb89.svg"},"85ec":function(t,e,n){},9443:function(t,e,n){t.exports=n.p+"img/home.7210ddcb.svg"},a43b:function(t,e,n){},a5ef:function(t,e,n){t.exports=n.p+"img/category_active.cb2cc09f.svg"},adc1:function(t,e,n){"use strict";n("a43b")},b508:function(t,e,n){t.exports=n.p+"img/home_active.cc40b6f2.svg"},c3f8:function(t,e,n){t.exports=n.p+"img/shopcart_active.3f0a2016.svg"},d151:function(t,e,n){t.exports=n.p+"img/profile_active.fd66b281.svg"},e55d:function(t,e,n){t.exports=n.p+"img/profile.42d7cf12.svg"}});
//# sourceMappingURL=app.0e5a31f1.js.map
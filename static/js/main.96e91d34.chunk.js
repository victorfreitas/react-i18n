(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,function(e){e.exports={"App.description":"Edit src/components/App and save to reload.","App.linkTitle":"Learn React"}},function(e){e.exports={"App.description":"Editar src/components/App y guardar para recargar.","App.linkTitle":"Aprender React"}},function(e){e.exports={"App.description":"Edite src/components/App e salve para recarregar.","App.linkTitle":"Aprenda React"}},function(e){e.exports={"App.description":"Sayfay\u0131 yenilemek icin src/components/App dosyas\u0131nda de\u011fi\u015fiklik yap\u0131n ve kaydedin.","App.linkTitle":"React \xd6\u011frenin"}},function(e,n,t){e.exports=t.p+"static/media/logo.5d5d9eef.svg"},,,function(e,n,t){e.exports=t(18)},,,,,,function(e,n,t){},function(e,n,t){},function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(2),c=t.n(o),i=(t(16),t(9)),p=t(8),l={en:t(3),es:t(4),pt:t(5),tr:t(6)},s=Object.keys(l),u=window.localStorage.getItem("current_language")||"en",d=function(e){return function(n){return l[e][n]||n}},g=function(e,n){switch(n.type){case"change/language":return window.localStorage.setItem("current_language",n.payload),{lang:n.payload,t:d(n.payload)};default:return e}},m={lang:u,t:d(u)},f=Object(a.createContext)(m),A=(t(17),t(7)),v=t.n(A),h=function(){var e=Object(a.useContext)(f),n=e.lang,t=e.dispatch;return r.a.createElement("select",{defaultValue:n,onChange:function(e){var n=e.currentTarget.value;t({type:"change/language",payload:n})}},s.map(function(e){return r.a.createElement("option",{key:e,value:e},e)}))};var k=function(){var e=Object(a.useContext)(f).t;return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("img",{src:v.a,className:"App-logo",alt:"logo"}),r.a.createElement(h,null),r.a.createElement("p",null,e("App.description")),r.a.createElement("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer"},e("App.linkTitle"))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(function(e){var n=e.children,t=Object(a.useReducer)(g,m),o=Object(p.a)(t,2),c=o[0],l=o[1];return r.a.createElement(f.Provider,{value:Object(i.a)({},c,{dispatch:l})},n)},null,r.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[10,1,2]]]);
//# sourceMappingURL=main.96e91d34.chunk.js.map
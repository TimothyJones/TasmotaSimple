(this.webpackJsonphomebuttons=this.webpackJsonphomebuttons||[]).push([[0],{14:function(n,t,e){n.exports=e(26)},19:function(n,t,e){},20:function(n,t,e){},26:function(n,t,e){"use strict";e.r(t);var o=e(0),r=e.n(o),a=e(6),i=e.n(a),s=(e(19),e(20),[{displayName:"Christmas Lights",host:"tv.fritz.box"},{displayName:"Lamp",host:"lamp.fritz.box"},{displayName:"Shower towel rail",host:"shower.fritz.box"},{displayName:"Toilet towel rail",host:"toilet.fritz.box"},{displayName:"Spa",host:"spa.fritz.box"}]),c={title:"Jones Family House"},u=e(4),l=e(7),m=e(8),f=e.n(m),h=function(n,t){return e="http://".concat(n,"/cm?cmnd=").concat(t),o={method:"GET",headers:{Accept:"application/json"}},f()(e,o).then((function(n){return n.ok?n.json():(console.log("Error response",n),{error:n.statusText+JSON.stringify(n.json())})}));var e,o},d=function(n){return"ON"===n.POWER};function p(){var n=Object(l.a)(["\n  background: ",";\n  border-radius: 3px;\n  border: 2px solid ",";\n  color: #fff;\n  margin: 1em;\n  padding: 0.25em 1em;\n  font-size: 1.2em;\n  display: block;\n  width: 90%;\n"]);return p=function(){return n},n}var b=e(9).a.button(p(),(function(n){return n.isOn?"green":"black"}),(function(n){return n.isOn?"green":"black"})),g=function(n){var t,e=n.host,a=n.displayName,i=Object(o.useState)(!1),s=Object(u.a)(i,2),c=s[0],l=s[1],m=Object(o.useState)(!1),f=Object(u.a)(m,2),p=f[0],g=f[1],w=(t=e,{toggle:function(n){return h(t,"POWER TOGGLE").then(d)},isPowerOn:function(n){return h(t,"Power").then(d)}});return Object(o.useEffect)((function(){var n=!1;return w.isPowerOn().then((function(t){n||(l(t),g(!0))})),function(){n=!0}}),[c,p,l,g]),r.a.createElement(b,{isOn:c,hasLoaded:p,onClick:function(){return w.toggle().then((function(n){return l(n)}))}},p?a:"loading")};var w=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-Header"},c.title),s.map((function(n){var t=n.displayName,e=n.host;return r.a.createElement(g,{displayName:t,host:e,key:e})})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()}))}},[[14,1,2]]]);
//# sourceMappingURL=main.5a1d4f07.chunk.js.map
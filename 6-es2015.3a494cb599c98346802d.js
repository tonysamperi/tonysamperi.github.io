(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{bLDZ:function(e,t,n){"undefined"!=typeof self&&self,e.exports=(()=>{var e={75:function(e){(function(){var t,n,o,i,r,s;"undefined"!=typeof performance&&null!==performance&&performance.now?e.exports=function(){return performance.now()}:"undefined"!=typeof process&&null!==process&&process.hrtime?(e.exports=function(){return(t()-r)/1e6},n=process.hrtime,i=(t=function(){var e;return 1e9*(e=n())[0]+e[1]})(),s=1e9*process.uptime(),r=i-s):Date.now?(e.exports=function(){return Date.now()-o},o=Date.now()):(e.exports=function(){return(new Date).getTime()-o},o=(new Date).getTime())}).call(this)},4087:(e,t,n)=>{for(var o=n(75),i="undefined"==typeof window?n.g:window,r=["moz","webkit"],s="AnimationFrame",a=i["request"+s],c=i["cancel"+s]||i["cancelRequest"+s],l=0;!a&&l<r.length;l++)a=i[r[l]+"Request"+s],c=i[r[l]+"Cancel"+s]||i[r[l]+"CancelRequest"+s];if(!a||!c){var p=0,u=0,d=[];a=function(e){if(0===d.length){var t=o(),n=Math.max(0,16.666666666666668-(t-p));p=n+t,setTimeout((function(){var e=d.slice(0);d.length=0;for(var t=0;t<e.length;t++)if(!e[t].cancelled)try{e[t].callback(p)}catch(e){setTimeout((function(){throw e}),0)}}),Math.round(n))}return d.push({handle:++u,callback:e,cancelled:!1}),u},c=function(e){for(var t=0;t<d.length;t++)d[t].handle===e&&(d[t].cancelled=!0)}}e.exports=function(e){return a.call(i,e)},e.exports.cancel=function(){c.apply(i,arguments)},e.exports.polyfill=function(e){e||(e=i),e.requestAnimationFrame=a,e.cancelAnimationFrame=c}}},t={};function n(o){var i=t[o];if(void 0!==i)return i.exports;var r=t[o]={exports:{}};return e[o].call(r.exports,r,r.exports,n),r.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var o={};return(()=>{"use strict";n.d(o,{default:()=>_});var e=n(4087),t=n.n(e);const i=function(e){return new RegExp(/<[a-z][\s\S]*>/i).test(e)},r=function(e){var t=document.createElement("div");return t.innerHTML=e,t.childNodes},s=function(e,t){return Math.floor(Math.random()*(t-e+1))+e};var a="TYPE_CHARACTER",c="REMOVE_CHARACTER",l="REMOVE_ALL",p="REMOVE_LAST_VISIBLE_NODE",u="PAUSE_FOR",d="CALL_FUNCTION",m="ADD_HTML_TAG_ELEMENT",b="CHANGE_DELETE_SPEED",g="CHANGE_DELAY",f="CHANGE_CURSOR",v="PASTE_STRING",h="HTML_TAG";function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function T(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(Object(n),!0).forEach((function(t){P(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function w(e){return function(e){if(Array.isArray(e))return C(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return C(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?C(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function C(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function P(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const _=function(){function n(o,y){var C=this;if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),P(this,"state",{cursorAnimation:null,lastFrameTime:null,pauseUntil:null,eventQueue:[],eventLoop:null,eventLoopPaused:!1,reverseCalledEvents:[],calledEvents:[],visibleNodes:[],initialOptions:null,elements:{container:null,wrapper:document.createElement("span"),cursor:document.createElement("span")}}),P(this,"options",{strings:null,cursor:"|",delay:"natural",pauseFor:1500,deleteSpeed:"natural",loop:!1,autoStart:!1,devMode:!1,skipAddStyles:!1,wrapperClassName:"Typewriter__wrapper",cursorClassName:"Typewriter__cursor",stringSplitter:null,onCreateTextNode:null,onRemoveNode:null}),P(this,"setupWrapperElement",(function(){C.state.elements.container&&(C.state.elements.wrapper.className=C.options.wrapperClassName,C.state.elements.cursor.className=C.options.cursorClassName,C.state.elements.cursor.innerHTML=C.options.cursor,C.state.elements.container.innerHTML="",C.state.elements.container.appendChild(C.state.elements.wrapper),C.state.elements.container.appendChild(C.state.elements.cursor))})),P(this,"start",(function(){return C.state.eventLoopPaused=!1,C.runEventLoop(),C})),P(this,"pause",(function(){return C.state.eventLoopPaused=!0,C})),P(this,"stop",(function(){return C.state.eventLoop&&((0,e.cancel)(C.state.eventLoop),C.state.eventLoop=null),C})),P(this,"pauseFor",(function(e){return C.addEventToQueue(u,{ms:e}),C})),P(this,"typeOutAllStrings",(function(){return"string"==typeof C.options.strings?(C.typeString(C.options.strings).pauseFor(C.options.pauseFor),C):(C.options.strings.forEach((function(e){C.typeString(e).pauseFor(C.options.pauseFor).deleteAll(C.options.deleteSpeed)})),C)})),P(this,"typeString",(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(i(e))return C.typeOutHTMLString(e,t);if(e){var n=C.options||{},o=n.stringSplitter,r="function"==typeof o?o(e):e.split("");C.typeCharacters(r,t)}return C})),P(this,"pasteString",(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return i(e)?C.typeOutHTMLString(e,t,!0):(e&&C.addEventToQueue(v,{character:e,node:t}),C)})),P(this,"typeOutHTMLString",(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2?arguments[2]:void 0,o=r(e);if(o.length>0)for(var i=0;i<o.length;i++){var s=o[i],a=s.innerHTML;s&&3!==s.nodeType?(s.innerHTML="",C.addEventToQueue(m,{node:s,parentNode:t}),n?C.pasteString(a,s):C.typeString(a,s)):s.textContent&&(n?C.pasteString(s.textContent,t):C.typeString(s.textContent,t))}return C})),P(this,"deleteAll",(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"natural";return C.addEventToQueue(l,{speed:e}),C})),P(this,"changeDeleteSpeed",(function(e){if(!e)throw new Error("Must provide new delete speed");return C.addEventToQueue(b,{speed:e}),C})),P(this,"changeDelay",(function(e){if(!e)throw new Error("Must provide new delay");return C.addEventToQueue(g,{delay:e}),C})),P(this,"changeCursor",(function(e){if(!e)throw new Error("Must provide new cursor");return C.addEventToQueue(f,{cursor:e}),C})),P(this,"deleteChars",(function(e){if(!e)throw new Error("Must provide amount of characters to delete");for(var t=0;t<e;t++)C.addEventToQueue(c);return C})),P(this,"callFunction",(function(e,t){if(!e||"function"!=typeof e)throw new Error("Callbak must be a function");return C.addEventToQueue(d,{cb:e,thisArg:t}),C})),P(this,"typeCharacters",(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(!e||!Array.isArray(e))throw new Error("Characters must be an array");return e.forEach((function(e){C.addEventToQueue(a,{character:e,node:t})})),C})),P(this,"removeCharacters",(function(e){if(!e||!Array.isArray(e))throw new Error("Characters must be an array");return e.forEach((function(){C.addEventToQueue(c)})),C})),P(this,"addEventToQueue",(function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return C.addEventToStateProperty(e,t,n,"eventQueue")})),P(this,"addReverseCalledEvent",(function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],o=C.options.loop;return o?C.addEventToStateProperty(e,t,n,"reverseCalledEvents"):C})),P(this,"addEventToStateProperty",(function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],o=arguments.length>3?arguments[3]:void 0,i={eventName:e,eventArgs:t||{}};return C.state[o]=n?[i].concat(w(C.state[o])):[].concat(w(C.state[o]),[i]),C})),P(this,"runEventLoop",(function(){C.state.lastFrameTime||(C.state.lastFrameTime=Date.now());var e=Date.now(),n=e-C.state.lastFrameTime;if(!C.state.eventQueue.length){if(!C.options.loop)return;C.state.eventQueue=w(C.state.calledEvents),C.state.calledEvents=[],C.options=T({},C.state.initialOptions)}if(C.state.eventLoop=t()(C.runEventLoop),!C.state.eventLoopPaused){if(C.state.pauseUntil){if(e<C.state.pauseUntil)return;C.state.pauseUntil=null}var o,i=w(C.state.eventQueue),r=i.shift();if(!(n<=(o=r.eventName===p||r.eventName===c?"natural"===C.options.deleteSpeed?s(40,80):C.options.deleteSpeed:"natural"===C.options.delay?s(120,160):C.options.delay))){var y=r.eventName,P=r.eventArgs;switch(C.logInDevMode({currentEvent:r,state:C.state,delay:o}),y){case v:case a:var _=P.character,E=P.node,O=document.createTextNode(_),M=O;C.options.onCreateTextNode&&"function"==typeof C.options.onCreateTextNode&&(M=C.options.onCreateTextNode(_,O)),M&&(E?E.appendChild(M):C.state.elements.wrapper.appendChild(M)),C.state.visibleNodes=[].concat(w(C.state.visibleNodes),[{type:"TEXT_NODE",character:_,node:M}]);break;case c:i.unshift({eventName:p,eventArgs:{removingCharacterNode:!0}});break;case u:var S=r.eventArgs.ms;C.state.pauseUntil=Date.now()+parseInt(S);break;case d:var A=r.eventArgs;A.cb.call(A.thisArg,{elements:C.state.elements});break;case m:var U=r.eventArgs,x=U.node,k=U.parentNode;k?k.appendChild(x):C.state.elements.wrapper.appendChild(x),C.state.visibleNodes=[].concat(w(C.state.visibleNodes),[{type:h,node:x,parentNode:k||C.state.elements.wrapper}]);break;case l:var N=C.state.visibleNodes,L=P.speed,j=[];L&&j.push({eventName:b,eventArgs:{speed:L,temp:!0}});for(var D=0,R=N.length;D<R;D++)j.push({eventName:p,eventArgs:{removingCharacterNode:!1}});L&&j.push({eventName:b,eventArgs:{speed:C.options.deleteSpeed,temp:!0}}),i.unshift.apply(i,j);break;case p:var I=r.eventArgs.removingCharacterNode;if(C.state.visibleNodes.length){var Q=C.state.visibleNodes.pop(),F=Q.type,H=Q.node;C.options.onRemoveNode&&"function"==typeof C.options.onRemoveNode&&C.options.onRemoveNode({node:H,character:Q.character}),H&&H.parentNode.removeChild(H),F===h&&I&&i.unshift({eventName:p,eventArgs:{}})}break;case b:C.options.deleteSpeed=r.eventArgs.speed;break;case g:C.options.delay=r.eventArgs.delay;break;case f:C.options.cursor=r.eventArgs.cursor,C.state.elements.cursor.innerHTML=r.eventArgs.cursor}C.options.loop&&(r.eventName===p||r.eventArgs&&r.eventArgs.temp||(C.state.calledEvents=[].concat(w(C.state.calledEvents),[r]))),C.state.eventQueue=i,C.state.lastFrameTime=e}}})),o)if("string"==typeof o){var _=document.querySelector(o);if(!_)throw new Error("Could not find container element");this.state.elements.container=_}else this.state.elements.container=o;y&&(this.options=T(T({},this.options),y)),this.state.initialOptions=T({},this.options),this.init()}var o,y;return o=n,(y=[{key:"init",value:function(){var e;this.setupWrapperElement(),this.addEventToQueue(f,{cursor:this.options.cursor},!0),this.addEventToQueue(l,null,!0),!window||window.___TYPEWRITER_JS_STYLES_ADDED___||this.options.skipAddStyles||((e=document.createElement("style")).appendChild(document.createTextNode(".Typewriter__cursor{-webkit-animation:Typewriter-cursor 1s infinite;animation:Typewriter-cursor 1s infinite;margin-left:1px}@-webkit-keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}@keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}")),document.head.appendChild(e),window.___TYPEWRITER_JS_STYLES_ADDED___=!0),!0===this.options.autoStart&&this.options.strings&&this.typeOutAllStrings().start()}},{key:"logInDevMode",value:function(e){this.options.devMode&&console.log(e)}}])&&function(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}(o.prototype,y),Object.defineProperty(o,"prototype",{writable:!1}),n}()})(),o.default})()},nW4h:function(e,t,n){"use strict";n.r(t),n.d(t,"SmpAboutPageModule",(function(){return b}));var o=n("d2mR"),i=n("sEIs"),r=n("kPQm"),s=n("wgY5"),a=n("bLDZ"),c=n.n(a),l=n("EM62"),p=n("s2Ay"),u=n("PBFl");const d=[{path:"",component:(()=>{class e{constructor(e){this._translateSrv=e,this.experienceAmount=Object(s.parseZone)().get("year")-2011,this.links=r.b,this._translateSrv.onLangChange.subscribe(()=>{this._tw instanceof c.a&&(this._tw.stop().deleteAll(),this.ngAfterViewInit())})}ngAfterViewInit(){this._tw=new c.a("[about]",{strings:[this._translateSrv.instant("aboutPage.aboutMe")],autoStart:!0,loop:!0,delay:"natural"})}}return e.\u0275fac=function(t){return new(t||e)(l.Ob(p.d))},e.\u0275cmp=l.Ib({type:e,selectors:[["smp-about"]],decls:108,vars:9,consts:[[1,"smp-main-section"],[1,"container"],[1,"row"],[1,"col-sm-12","text-center"],[1,"route-animations-elements","smp-capitalize-first"],[1,"route-animations-elements","smp-text-bold","smp-margin-bottom-2x"],[1,"smp-generic-section","smp-generic-section-bg"],[1,"container","d-flex","flex-column","flex-md-row","flex-lg-row"],[1,"smp-profile-text"],[1,"route-animations-elements","smp-margin-bottom-2x"],["about",""],[1,"route-animations-elements","smp-margin-bottom-2x","smp-margin-top-2x"],["mat-raised-button","","color","primary",1,"smp-margin-right-1x",3,"routerLink"],[1,"fas","fa-arrow-alt-circle-right"],["mat-raised-button","","color","accent",3,"routerLink"],[1,"fas","fa-user"],[1,"route-animations-elements","smp-profile-image","smp-padding-1x"],["src","assets/images/profile-large.png","alt",""],[1,"smp-generic-section","smp-skills-section"],[1,"smp-section-title","route-animations-elements","smp-capitalize-first"],[1,"smp-margin-bottom-2x","route-animations-elements"],[1,"item","col-6","col-lg-3"],[1,"item-inner","route-animations-elements"],[1,"item-icon"],[1,"fab","fa-js-square"],[1,"item-title"],[1,"item-desc"],["src","assets/images/typescript-logo.svg","alt","TS",1,"smp-margin-right-1x"],["src","assets/images/webpack-logo.svg","alt","WP"],[1,"fab","fa-angular","smp-margin-right-1x"],["src","assets/images/ionic-logo.svg","alt","Ionic"],["target","_blank","href","https://play.google.com/store/apps/details?id=io.tonysamperi.datescalculator",1,"smp-color-primary"],[1,"fab","fa-node-js","smp-margin-right-1x"],["src","assets/images/express-logo.svg","alt","Express"],[1,"fab","fa-grunt"],[1,"fab","fa-html5","smp-margin-right-1x"],[1,"fab","fa-css3-alt","smp-margin-right-1x"],[1,"fab","fa-sass"],["src","assets/images/mysql-logo.svg","alt","MySQL"],["src","assets/images/sqlite-logo.svg","alt","SQLite"],[1,"fab","fa-php","smp-margin-right-1x"],[1,"fab","fa-java"]],template:function(e,t){1&e&&(l.Ub(0,"div",0),l.Ub(1,"div",1),l.Ub(2,"div",2),l.Ub(3,"div",3),l.Ub(4,"h1",4),l.Ec(5),l.hc(6,"translate"),l.Tb(),l.Ub(7,"h2",5),l.Ec(8,"Senior Software Engineer"),l.Tb(),l.Tb(),l.Tb(),l.Tb(),l.Tb(),l.Ub(9,"div",6),l.Ub(10,"div",7),l.Ub(11,"div",8),l.Ub(12,"div",9),l.Pb(13,"span",10),l.Tb(),l.Ub(14,"div",11),l.Ub(15,"a",12),l.Pb(16,"i",13),l.Ec(17," Portfolio "),l.Tb(),l.Ub(18,"a",14),l.Pb(19,"i",15),l.Ec(20," Resume "),l.Tb(),l.Tb(),l.Tb(),l.Ub(21,"div",16),l.Pb(22,"img",17),l.Tb(),l.Tb(),l.Tb(),l.Ub(23,"div",18),l.Ub(24,"div",1),l.Ub(25,"h2",19),l.Ec(26),l.hc(27,"translate"),l.Tb(),l.Ub(28,"div",20),l.Ec(29),l.Pb(30,"br"),l.Ec(31," Below is a quick overview of my main technical skill sets and technologies I use. "),l.Tb(),l.Ub(32,"div",2),l.Ub(33,"div",21),l.Ub(34,"div",22),l.Ub(35,"div",23),l.Pb(36,"i",24),l.Tb(),l.Ub(37,"h3",25),l.Ec(38,"Vanilla JavaScript"),l.Tb(),l.Ub(39,"div",26),l.Ec(40," A basic knowledge of JavaScript and the JS Object Notation is essential in every project. I have more than 10 years experience with this technology which comes handy in many scenarios, including the use of TypeScript. "),l.Tb(),l.Tb(),l.Tb(),l.Ub(41,"div",21),l.Ub(42,"div",22),l.Ub(43,"div",23),l.Pb(44,"img",27),l.Pb(45,"img",28),l.Tb(),l.Ub(46,"h3",25),l.Ec(47,"Typescript + Webpack"),l.Tb(),l.Ub(48,"div",26),l.Ec(49," Modern applications with latest tecnologies, but transpiled to have the best compatibility. This combo is a winning choice for Node applications as well: write everything with the solidity of a typed language and compile it to execute plain javascript. "),l.Tb(),l.Tb(),l.Tb(),l.Ub(50,"div",21),l.Ub(51,"div",22),l.Ub(52,"div",23),l.Pb(53,"i",29),l.Pb(54,"img",30),l.Tb(),l.Ub(55,"h3",25),l.Ec(56,"Angular + Ionic"),l.Tb(),l.Ub(57,"div",26),l.Ec(58," Development of single page applications, reusable components and libraries with Angular 8+. "),l.Pb(59,"br"),l.Ec(60," Angular can also be combined with Ionic to build hybrid applications, such as my "),l.Ub(61,"a",31),l.Ec(62,"Dates Calculator"),l.Tb(),l.Tb(),l.Tb(),l.Tb(),l.Ub(63,"div",21),l.Ub(64,"div",22),l.Ub(65,"div",23),l.Pb(66,"i",32),l.Pb(67,"img",33),l.Tb(),l.Ub(68,"h3",25),l.Ec(69,"Node.js + Express"),l.Tb(),l.Ub(70,"div",26),l.Ec(71," Lightweight server-side applications: REST API or server-side pages with routing. I usually write everything in TypeScript and compile on serve. "),l.Tb(),l.Tb(),l.Tb(),l.Ub(72,"div",21),l.Ub(73,"div",22),l.Ub(74,"div",23),l.Pb(75,"i",34),l.Tb(),l.Ub(76,"h3",25),l.Ec(77,"npm, Gulp & Grunt"),l.Tb(),l.Ub(78,"div",26),l.Ec(79," Automation of common processes to save time and creation of custom processes, to handle project files or builds. "),l.Tb(),l.Tb(),l.Tb(),l.Ub(80,"div",21),l.Ub(81,"div",22),l.Ub(82,"div",23),l.Pb(83,"i",35),l.Pb(84,"i",36),l.Pb(85,"i",37),l.Tb(),l.Ub(86,"h3",25),l.Ec(87,"HTML5 + CSS3 + SASS"),l.Tb(),l.Ub(88,"div",26),l.Ec(89," Knowledge of HTML and CSS with SASS (Syntactically Awesome StyleSheets) on top where possible. Stylesheets written in SCSS for a faster development and re-usable markups, with mixins and functions. "),l.Tb(),l.Tb(),l.Tb(),l.Ub(90,"div",21),l.Ub(91,"div",22),l.Ub(92,"div",23),l.Pb(93,"img",38),l.Pb(94,"img",39),l.Tb(),l.Ub(95,"h3",25),l.Ec(96,"MySQL / SQLite"),l.Tb(),l.Ub(97,"div",26),l.Ec(98," Server or serverless storage, with optional use of ORM. "),l.Tb(),l.Tb(),l.Tb(),l.Ub(99,"div",21),l.Ub(100,"div",22),l.Ub(101,"div",23),l.Pb(102,"i",40),l.Pb(103,"i",41),l.Tb(),l.Ub(104,"h3",25),l.Ec(105,"PHP / Java"),l.Tb(),l.Ub(106,"div",26),l.Ec(107," Consistent experience with PHP 5 and 7 and CMS like Wordpress or Joomla. Some experience with Java and Spring Boot. "),l.Tb(),l.Tb(),l.Tb(),l.Tb(),l.Tb(),l.Tb()),2&e&&(l.Cb(5),l.Fc(l.ic(6,5,"aboutPage.title")),l.Cb(10),l.nc("routerLink","/",t.links.portfolio,""),l.Cb(3),l.nc("routerLink","/",t.links.resume,""),l.Cb(8),l.Fc(l.ic(27,7,"aboutPage.whatIDo")),l.Cb(3),l.Gc("I have about ",t.experienceAmount," years of experience, building software as an employee or as a freelancer. "))},directives:[u.a,i.f],pipes:[p.c],styles:[".smp-profile-text[_ngcontent-%COMP%]{width:calc(100% - 400px)}@media (min-width:960px){.smp-profile-text[_ngcontent-%COMP%]{width:calc(100% - 250px)}}.smp-profile-image[_ngcontent-%COMP%]{max-width:400px}@media (min-width:960px){.smp-profile-image[_ngcontent-%COMP%]{max-width:250px}}.smp-profile-image[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{width:100%}.smp-skills-section[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]{margin-bottom:2rem}.smp-skills-section[_ngcontent-%COMP%]   .item-desc[_ngcontent-%COMP%]{font-size:.875rem}.smp-skills-section[_ngcontent-%COMP%]   .item-icon[_ngcontent-%COMP%]{font-size:1.875rem;color:#54b689}.smp-skills-section[_ngcontent-%COMP%]   .item-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{vertical-align:middle}.smp-skills-section[_ngcontent-%COMP%]   .item-icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:1.875rem}.smp-skills-section[_ngcontent-%COMP%]   .item-icon[_ngcontent-%COMP%]   .fa-angular[_ngcontent-%COMP%]{color:#ca3327}.smp-skills-section[_ngcontent-%COMP%]   .item-icon[_ngcontent-%COMP%]   .fa-js-square[_ngcontent-%COMP%]{color:#f1de4f}.smp-skills-section[_ngcontent-%COMP%]   .item-icon[_ngcontent-%COMP%]   .fa-react[_ngcontent-%COMP%]{color:#62d4fa}.smp-skills-section[_ngcontent-%COMP%]   .item-icon[_ngcontent-%COMP%]   .fa-vuejs[_ngcontent-%COMP%]{color:#64b687}.smp-skills-section[_ngcontent-%COMP%]   .item-icon[_ngcontent-%COMP%]   .nodejs[_ngcontent-%COMP%]{color:#55ac63}.smp-skills-section[_ngcontent-%COMP%]   .item-icon[_ngcontent-%COMP%]   .fa-python[_ngcontent-%COMP%]{color:#456e9c}.smp-skills-section[_ngcontent-%COMP%]   .item-icon[_ngcontent-%COMP%]   .fa-php[_ngcontent-%COMP%]{color:#777baf}.smp-skills-section[_ngcontent-%COMP%]   .item-icon[_ngcontent-%COMP%]   .fa-java[_ngcontent-%COMP%]{color:#2e68ab}.smp-skills-section[_ngcontent-%COMP%]   .item-icon[_ngcontent-%COMP%]   .fa-html5[_ngcontent-%COMP%], .smp-skills-section[_ngcontent-%COMP%]   .item-icon[_ngcontent-%COMP%]   .fa-html5-alt[_ngcontent-%COMP%]{color:#de6e3c}.smp-skills-section[_ngcontent-%COMP%]   .item-icon[_ngcontent-%COMP%]   .fa-css3[_ngcontent-%COMP%], .smp-skills-section[_ngcontent-%COMP%]   .item-icon[_ngcontent-%COMP%]   .fa-css3-alt[_ngcontent-%COMP%]{color:#53a7dc}.smp-skills-section[_ngcontent-%COMP%]   .item-icon[_ngcontent-%COMP%]   .fa-sass[_ngcontent-%COMP%]{color:#bf6b97}.smp-skills-section[_ngcontent-%COMP%]   .item-icon[_ngcontent-%COMP%]   .fa-less[_ngcontent-%COMP%]{color:#324b7c}.smp-skills-section[_ngcontent-%COMP%]   .item-icon[_ngcontent-%COMP%]   .fa-gulp[_ngcontent-%COMP%]{color:#c9514e}.smp-skills-section[_ngcontent-%COMP%]   .item-icon[_ngcontent-%COMP%]   .fa-grunt[_ngcontent-%COMP%]{color:#efac42}.smp-skills-section[_ngcontent-%COMP%]   .item-icon[_ngcontent-%COMP%]   .fa-npm[_ngcontent-%COMP%]{color:#bb443e}.smp-skills-section[_ngcontent-%COMP%]   .item-title[_ngcontent-%COMP%]{font-weight:700;font-size:1rem}"]}),e})(),data:{title:"routes.about"}}];let m=(()=>{class e{}return e.\u0275mod=l.Mb({type:e}),e.\u0275inj=l.Lb({factory:function(t){return new(t||e)},imports:[[i.g.forChild(d)],i.g]}),e})(),b=(()=>{class e{}return e.\u0275mod=l.Mb({type:e}),e.\u0275inj=l.Lb({factory:function(t){return new(t||e)},imports:[[o.a,m]]}),e})()}}]);
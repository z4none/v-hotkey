!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.VueHotkey=t():e.VueHotkey=t()}(this,function(){return function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=1)}([function(e,t,n){var o,r,a;!function(n,u){r=[t],o=u,void 0!==(a="function"==typeof o?o.apply(t,r):o)&&(e.exports=a)}(0,function(e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};e.default=function(e){if(e&&"object"===(void 0===e?"undefined":t(e))){var r=e.which||e.keyCode||e.charCode;r&&(e=r)}var a=String(e),u=n[a.toLowerCase()];return u||(o[a.toLowerCase()]||(1===a.length?a.charCodeAt(0):void 0))};for(var n=e.codes={backspace:8,tab:9,enter:13,shift:16,ctrl:17,alt:18,"pause/break":19,"caps lock":20,esc:27,space:32,"page up":33,"page down":34,end:35,home:36,left:37,up:38,right:39,down:40,insert:45,delete:46,command:91,"left command":91,"right command":93,"numpad *":106,"numpad +":43,"numpad add":43,"numpad -":109,"numpad .":110,"numpad /":111,"num lock":144,"scroll lock":145,"my computer":182,"my calculator":183,";":186,"=":187,",":188,"-":189,".":190,"/":191,"`":192,"[":219,"\\":220,"]":221,"'":222},o=e.aliases={windows:91,"⇧":16,"⌥":18,"⌃":17,"⌘":91,ctl:17,control:17,option:18,pause:19,break:19,caps:20,return:13,escape:27,spc:32,pgup:33,pgdn:34,ins:45,del:46,cmd:91},r=97;r<123;r++)n[String.fromCharCode(r)]=r-32;for(var a=48;a<58;a++)n[a-48]=a;for(var u=1;u<13;u++)n["f"+u]=u+111;for(var c=0;c<10;c++)n["numpad "+c]=c+96})},function(e,t,n){var o,r,a;!function(u,c){r=[e,t,n(0)],o=c,void 0!==(a="function"==typeof o?o.apply(t,r):o)&&(e.exports=a)}(0,function(e,t,n){"use strict";function o(e,t){e._keymap=u(t.value),e._keyHandler=function(t){var n=!0,o=!1,r=void 0;try{for(var a,u=e._keymap[Symbol.iterator]();!(n=(a=u.next()).done);n=!0){var c=a.value,i=c.keyCode===t.keyCode&&!!c.ctrl===t.ctrlKey&&!!c.alt===t.altKey&&!!c.shift===t.shiftKey&&!!c.meta===t.metaKey&&c.callback[t.type];if(i){var f=c.callback.filter;if(f){if(!0===f){var l=t.target||t.srcElement;if(l.isContentEditable||"INPUT"===l.tagName||"SELECT"===l.tagName||"TEXTAREA"===l.tagName)return}if("function"==typeof f&&f(t))return}i(t)}}}catch(e){o=!0,r=e}finally{try{!n&&u.return&&u.return()}finally{if(o)throw r}}},document.addEventListener("keydown",e._keyHandler),document.addEventListener("keyup",e._keyHandler)}function r(e){document.removeEventListener("keydown",e._keyHandler),document.removeEventListener("keyup",e._keyHandler)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(e){return e&&e.__esModule?e:{default:e}}(n),u=function(e){return Object.keys(e).map(function(t){var n={},o=e[t],r=o.keyup,u=o.keydown,c=o.filter;return t.replace("numpad +","numpad add").split("+").forEach(function(e){switch(e.toLowerCase()){case"ctrl":case"alt":case"shift":case"meta":n[e]=!0;break;default:n.keyCode=(0,a.default)(e)}}),n.callback={keydown:u||e[t],keyup:r,filter:c},n})};t.default={install:function(e){e.directive("hotkey",{bind:o,componentUpdated:function(e,t){t.value!==t.oldValue&&(r.apply(this,arguments),o.apply(this,arguments))},unbind:r})}},e.exports=t.default})}])});
(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";var messages=document.getElementById("gameMessages"),sendMsg=document.getElementById("gameSendMsg"),appendMsg=function(e,n){var s=document.createElement("li");s.innerHTML='\n        <span class="author '.concat(n?"anyone":"self",'">\n        ').concat(n||"You",":</span> ").concat(e,"\n    "),messages.appendChild(s)},handleSendMessage=function(e){e.preventDefault();var n=sendMsg.querySelector("input"),s=n.value;n.value="",appendMsg(s)};sendMsg&&sendMsg.addEventListener("submit",handleSendMessage);

},{}],2:[function(require,module,exports){
"use strict";var _sockets=require("./sockets.js"),body=document.querySelector("body"),loginForm=document.getElementById("gameLogin"),NICKNAME="nickname",nickname=localStorage.getItem(NICKNAME),logIn=function(e){var n=io("/");n.emit(window.events.setNickname,{nickname:e}),(0,_sockets.initSockets)(n)};null===nickname?body.className="loggedOut":(body.className="loggedIn",logIn(nickname));var handleLoginSubmit=function(e){e.preventDefault();var n=loginForm.querySelector("input"),o=n.value;n.value="",localStorage.setItem(NICKNAME,o),body.className="loggedIn",logIn(o)};loginForm&&loginForm.addEventListener("submit",handleLoginSubmit);

},{"./sockets.js":5}],3:[function(require,module,exports){
"use strict";require("./login.js"),require("./sockets.js"),require("./chat.js");

},{"./chat.js":1,"./login.js":2,"./sockets.js":5}],4:[function(require,module,exports){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.handleNewUser=exports.handleDisconnect=void 0;var body=document.getElementById("body"),firstNotification=function(e,n){var t=document.createElement("div");t.innerText=e,t.style.background=n,t.className="notification",body.appendChild(t)},handleNewUser=function(e){var n=e.nickname;firstNotification("".concat(n," joined"),"rgb(0, 122, 255)")};exports.handleNewUser=handleNewUser;var handleDisconnect=function(e){var n=e.nickname;firstNotification("".concat(n," log out!"),"rgb(255, 149, 0)")};exports.handleDisconnect=handleDisconnect;

},{}],5:[function(require,module,exports){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.updateSocket=exports.initSockets=exports.getSocket=void 0;var _notifications=require("./notifications.js"),socket=null,getSocket=function(){return socket};exports.getSocket=getSocket;var updateSocket=function(t){return socket=t};exports.updateSocket=updateSocket;var initSockets=function(t){var e=window.events;updateSocket(t),t.on(e.newUser,_notifications.handleNewUser),t.on(e.disconnected,_notifications.handleDisconnect)};exports.initSockets=initSockets;

},{"./notifications.js":4}]},{},[3]);

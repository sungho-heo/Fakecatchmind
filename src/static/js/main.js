(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.handleNewMessage=void 0;var _sockets=require("./sockets"),messages=document.getElementById("gameMessages"),sendMsg=document.getElementById("gameSendMsg"),appendMsg=function(e,s){var n=document.createElement("li");n.innerHTML='\n        <span class="author '.concat(s?"anyone":"self",'">\n        ').concat(s||"You",":</span> ").concat(e,"\n    "),messages.appendChild(n)},handleSendMessage=function(e){e.preventDefault();var s=sendMsg.querySelector("input"),n=s.value;(0,_sockets.getSocket)().emit(window.events.sendMessage,{message:n}),s.value="",appendMsg(n)},handleNewMessage=function(e){var s=e.message,n=e.nickname;appendMsg(s,n)};exports.handleNewMessage=handleNewMessage,sendMsg&&sendMsg.addEventListener("submit",handleSendMessage);

},{"./sockets":6}],2:[function(require,module,exports){
"use strict";var _sockets=require("./sockets.js"),body=document.querySelector("body"),loginForm=document.getElementById("gameLogin"),NICKNAME="nickname",nickname=localStorage.getItem(NICKNAME),logIn=function(e){var n=io("/");n.emit(window.events.setNickname,{nickname:e}),(0,_sockets.initSockets)(n)};null===nickname?body.className="loggedOut":(body.className="loggedIn",logIn(nickname));var handleLoginSubmit=function(e){e.preventDefault();var n=loginForm.querySelector("input"),o=n.value;n.value="",localStorage.setItem(NICKNAME,o),body.className="loggedIn",logIn(o)};loginForm&&loginForm.addEventListener("submit",handleLoginSubmit);

},{"./sockets.js":6}],3:[function(require,module,exports){
"use strict";require("./login.js"),require("./sockets.js"),require("./chat.js"),require("./paint.js");

},{"./chat.js":1,"./login.js":2,"./paint.js":5,"./sockets.js":6}],4:[function(require,module,exports){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.handleNewUser=exports.handleDisconnect=void 0;var body=document.querySelector("body"),firstNotification=function(e,n){var o=document.createElement("div");o.innerText=e,o.style.backgroundColor=n,o.className="notification",body.appendChild(o)},handleNewUser=function(e){var n=e.nickname;firstNotification("".concat(n," joined"),"rgb(0, 122, 255)")};exports.handleNewUser=handleNewUser;var handleDisconnect=function(e){var n=e.nickname;firstNotification("".concat(n," log out!"),"rgb(255, 149, 0)")};exports.handleDisconnect=handleDisconnect;

},{}],5:[function(require,module,exports){
"use strict";var canvas=document.querySelector("canvas"),context=canvas.getContext("2d");canvas.width=800,canvas.height=800,context.fillRect(50,50,100,100);

},{}],6:[function(require,module,exports){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.updateSocket=exports.initSockets=exports.getSocket=void 0;var _notifications=require("./notifications.js"),_chat=require("./chat.js"),socket=null,getSocket=function(){return socket};exports.getSocket=getSocket;var updateSocket=function(e){return socket=e};exports.updateSocket=updateSocket;var initSockets=function(e){var t=window.events;updateSocket(e),e.on(t.newUser,_notifications.handleNewUser),e.on(t.disconnected,_notifications.handleDisconnect),e.on(t.newMessage,_chat.handleNewMessage)};exports.initSockets=initSockets;

},{"./chat.js":1,"./notifications.js":4}]},{},[3]);

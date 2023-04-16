(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";var _sockets=require("./sockets.js"),body=document.querySelector("body"),loginForm=document.getElementById("gameLogin"),NICKNAME="nickname",nickname=localStorage.getItem(NICKNAME),logIn=function(e){var n=io("/");n.emit(window.events.setNickname,{nickname:e}),(0,_sockets.initSockets)(n)};null===nickname?body.className="loggedOut":(body.className="loggedIn",logIn(nickname));var handleLoginSubmit=function(e){e.preventDefault();var n=loginForm.querySelector("input"),o=n.value;n.value="",localStorage.setItem(NICKNAME,o),body.className="loggedIn",logIn(o)};loginForm&&loginForm.addEventListener("submit",handleLoginSubmit);

},{"./sockets.js":4}],2:[function(require,module,exports){
"use strict";require("./sockets.js"),require("./login.js"),require("./notifications.js");

},{"./login.js":1,"./notifications.js":3,"./sockets.js":4}],3:[function(require,module,exports){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.handleNewUser=void 0;var notifications=document.getElementById("gameNotifications"),handleNewUser=function(e){var n=e.nickname;console.log(n,"joined")};exports.handleNewUser=handleNewUser;

},{}],4:[function(require,module,exports){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.updateSocket=exports.initSockets=exports.getSocket=void 0;var _notifications=require("./notifications.js"),socket=null,getSocket=function(){return socket};exports.getSocket=getSocket;var updateSocket=function(t){return socket=t};exports.updateSocket=updateSocket;var initSockets=function(t){var e=window.events;updateSocket(t),t.on(e.newUser,_notifications.handleNewUser)};exports.initSockets=initSockets;

},{"./notifications.js":3}]},{},[2]);

(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const credentials = localStorage.setItem("Trevan", "Young");

const sessionStorageDelete = () => {
  document.querySelector("#logOut").addEventListener("click", () => {
    localStorage.clear(credentials);
    location = location;
  });
};

var _default = sessionStorageDelete;
exports.default = _default;

},{}],2:[function(require,module,exports){
"use strict";

var _logout = _interopRequireDefault(require("./logout"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import createLogoutButtonHTML from "./logout"
alert("Alert ALERT Main js");
(0, _logout.default)();

},{"./logout":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi9zY3JpcHRzL2xvZ291dC5qcyIsIi4uL3NjcmlwdHMvbWFpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQ0FBLE1BQU0sV0FBVyxHQUFHLFlBQVksQ0FBQyxPQUFiLENBQXFCLFFBQXJCLEVBQStCLE9BQS9CLENBQXBCOztBQUVBLE1BQU0sb0JBQW9CLEdBQUcsTUFBTTtBQUMvQixFQUFBLFFBQVEsQ0FBQyxhQUFULENBQXVCLFNBQXZCLEVBQWtDLGdCQUFsQyxDQUFtRCxPQUFuRCxFQUE0RCxNQUFNO0FBQzlELElBQUEsWUFBWSxDQUFDLEtBQWIsQ0FBbUIsV0FBbkI7QUFDQSxJQUFBLFFBQVEsR0FBRyxRQUFYO0FBQ0YsR0FIRjtBQUtILENBTkQ7O2VBUWUsb0I7Ozs7OztBQ1ZmOzs7O0FBRUE7QUFDQSxLQUFLLENBQUMscUJBQUQsQ0FBTDtBQUVBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiY29uc3QgY3JlZGVudGlhbHMgPSBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIlRyZXZhblwiLCBcIllvdW5nXCIpXHJcblxyXG5jb25zdCBzZXNzaW9uU3RvcmFnZURlbGV0ZSA9ICgpID0+IHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbG9nT3V0XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLmNsZWFyKGNyZWRlbnRpYWxzKVxyXG4gICAgICAgIGxvY2F0aW9uID0gbG9jYXRpb247XHJcbiAgICAgfVxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzZXNzaW9uU3RvcmFnZURlbGV0ZSIsImltcG9ydCBzZXNzaW9uU3RvcmFnZURlbGV0ZSBmcm9tIFwiLi9sb2dvdXRcIlxyXG5cclxuLy8gaW1wb3J0IGNyZWF0ZUxvZ291dEJ1dHRvbkhUTUwgZnJvbSBcIi4vbG9nb3V0XCJcclxuYWxlcnQoXCJBbGVydCBBTEVSVCBNYWluIGpzXCIpXHJcblxyXG5zZXNzaW9uU3RvcmFnZURlbGV0ZSgpIl19

(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = void 0;
  
  const createLoginForm = () => {
    document.querySelector("#loginFormContainer").innerHTML = `
          <h1>Login</h1>
          <label for="name">Username: </label>
          <input id="name" type="text">
          <label for="password">Password:</label>
          <input type="password" id="password" name="password">
          <button id="loginButton">Submit</button>
      `;
  };
  
  var _default = createLoginForm;
  exports.default = _default;
  
  },{}],2:[function(require,module,exports){
  "use strict";
  
  var _createLoginForm = _interopRequireDefault(require("./createLoginForm"));
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  (0, _createLoginForm.default)();
  
  },{"./createLoginForm":1}]},{},[2])
  //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi9zY3JpcHRzL2NyZWF0ZUxvZ2luRm9ybS5qcyIsIi4uL3NjcmlwdHMvbWFpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUNDQSxNQUFNLGVBQWUsR0FBRyxNQUFNO0FBQzFCLEVBQUEsUUFBUSxDQUFDLGFBQVQsQ0FBdUIscUJBQXZCLEVBQThDLFNBQTlDLEdBQTJEOzs7Ozs7O0tBQTNEO0FBUUgsQ0FURDs7ZUFXZSxlOzs7Ozs7QUNaZjs7OztBQUVBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiXG5jb25zdCBjcmVhdGVMb2dpbkZvcm0gPSAoKSA9PiB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNsb2dpbkZvcm1Db250YWluZXJcIikuaW5uZXJIVE1MID0gYFxuICAgICAgICA8aDE+TG9naW48L2gxPlxuICAgICAgICA8bGFiZWwgZm9yPVwibmFtZVwiPlVzZXJuYW1lOiA8L2xhYmVsPlxuICAgICAgICA8aW5wdXQgaWQ9XCJuYW1lXCIgdHlwZT1cInRleHRcIj5cbiAgICAgICAgPGxhYmVsIGZvcj1cInBhc3N3b3JkXCI+UGFzc3dvcmQ6PC9sYWJlbD5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIGlkPVwicGFzc3dvcmRcIiBuYW1lPVwicGFzc3dvcmRcIj5cbiAgICAgICAgPGJ1dHRvbiBpZD1cImxvZ2luQnV0dG9uXCI+U3VibWl0PC9idXR0b24+XG4gICAgYFxufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVMb2dpbkZvcm0iLCJpbXBvcnQgY3JlYXRlTG9naW5Gb3JtIGZyb20gXCIuL2NyZWF0ZUxvZ2luRm9ybVwiXG5cbmNyZWF0ZUxvZ2luRm9ybSgpIl19
(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

let createRegistrationForm = location => {
  location = document.querySelector(".output");
  let contactFormHTML = `
<form>
<fieldset>
    <label for="userName">User Name</label>
    <input type="text" name="userName" id="userName">
</fieldset>
<fieldset>
    <label for="userEmail">Email</label>
    <input type="text" name="userEmail" id="userEmail">
</fieldset>
<fieldset>
    <label for="userPassword">Password</label>
    <input type="password" name="userPassword" id="userPassword">
</fieldset>

<button id="createCustomerObject" class="btn btn-info people">
    Add Customer
</button>
</form>
`;
  location.innerHTML = contactFormHTML;
};

var _default = createRegistrationForm;
exports.default = _default;

},{}],2:[function(require,module,exports){
"use strict";

var _createRegistrationForm = _interopRequireDefault(require("./createRegistrationForm"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log("hi");
(0, _createRegistrationForm.default)();

},{"./createRegistrationForm":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi9zY3JpcHRzL2NyZWF0ZVJlZ2lzdHJhdGlvbkZvcm0uanMiLCIuLi9zY3JpcHRzL21haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0FDQ0EsSUFBSSxzQkFBc0IsR0FBSSxRQUFELElBQWM7QUFDdkMsRUFBQSxRQUFRLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsU0FBdkIsQ0FBWDtBQUNBLE1BQUksZUFBZSxHQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBQXZCO0FBb0JKLEVBQUEsUUFBUSxDQUFDLFNBQVQsR0FBcUIsZUFBckI7QUFDQyxDQXZCRDs7ZUF5QmUsc0I7Ozs7OztBQzFCZjs7OztBQUVBLE9BQU8sQ0FBQyxHQUFSLENBQVksSUFBWjtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiXG5sZXQgY3JlYXRlUmVnaXN0cmF0aW9uRm9ybSA9IChsb2NhdGlvbikgPT4ge1xuICAgIGxvY2F0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vdXRwdXRcIilcbiAgICBsZXQgY29udGFjdEZvcm1IVE1MID0gYFxuPGZvcm0+XG48ZmllbGRzZXQ+XG4gICAgPGxhYmVsIGZvcj1cInVzZXJOYW1lXCI+VXNlciBOYW1lPC9sYWJlbD5cbiAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwidXNlck5hbWVcIiBpZD1cInVzZXJOYW1lXCI+XG48L2ZpZWxkc2V0PlxuPGZpZWxkc2V0PlxuICAgIDxsYWJlbCBmb3I9XCJ1c2VyRW1haWxcIj5FbWFpbDwvbGFiZWw+XG4gICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInVzZXJFbWFpbFwiIGlkPVwidXNlckVtYWlsXCI+XG48L2ZpZWxkc2V0PlxuPGZpZWxkc2V0PlxuICAgIDxsYWJlbCBmb3I9XCJ1c2VyUGFzc3dvcmRcIj5QYXNzd29yZDwvbGFiZWw+XG4gICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIG5hbWU9XCJ1c2VyUGFzc3dvcmRcIiBpZD1cInVzZXJQYXNzd29yZFwiPlxuPC9maWVsZHNldD5cblxuPGJ1dHRvbiBpZD1cImNyZWF0ZUN1c3RvbWVyT2JqZWN0XCIgY2xhc3M9XCJidG4gYnRuLWluZm8gcGVvcGxlXCI+XG4gICAgQWRkIEN1c3RvbWVyXG48L2J1dHRvbj5cbjwvZm9ybT5cbmBcbmxvY2F0aW9uLmlubmVySFRNTCA9IGNvbnRhY3RGb3JtSFRNTFxufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVSZWdpc3RyYXRpb25Gb3JtIiwiaW1wb3J0IGNyZWF0ZVJlZ2lzdHJhdGlvbkZvcm0gZnJvbSBcIi4vY3JlYXRlUmVnaXN0cmF0aW9uRm9ybVwiXG5cbmNvbnNvbGUubG9nKFwiaGlcIilcbmNyZWF0ZVJlZ2lzdHJhdGlvbkZvcm0oKSJdfQ==

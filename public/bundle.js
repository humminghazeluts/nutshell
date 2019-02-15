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

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

//userdID will be stored as an argument, and stored in a variable
// const credentials = localStorage.setItem("Trevan", "Young")
// //Logout Button
// function logOutButtonFunction () {
//     const logOutButton = document.createElement("button")
//           logOutButton.id = "logOutButtonId"
//           logOutButton.innerHTML = "Logout"
//           document.body.appendChild(logOutButton)
// }
const logOutButtonFunction = () => {
  outputEl = document.querySelector(".output");
  let buttonHTML = `
    <button id="logOutButtonId>Logout</button>
    `;
  outputEl.innerHTML = buttonHTML;
};

outputEl.innerHTML += logOutButton(); // //Function will clear sessionStorage after the logout buttin is clicked
// const sessionStorageDelete = () => {
//     document.querySelector("#logOut").addEventListener("click", () => {
//         localStorage.clear(credentials)
//         location = location;
//      }
//     )
// }
// export default sessionStorageDelete

var _default = logOutButtonFunction;
exports.default = _default;

},{}],3:[function(require,module,exports){
"use strict";

var _logout = _interopRequireDefault(require("./logout"));

var _createLoginForm = _interopRequireDefault(require("./createLoginForm"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import createRegistrationForm from "./createRegistrationForm"
alert(TEST);
// import sessionStorageDelete from "./logout"
createRegistrationForm();
sessionStorageDelete();
(0, _createLoginForm.default)();
(0, _logout.default)();

},{"./createLoginForm":1,"./logout":2}]},{},[3])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi9zY3JpcHRzL2NyZWF0ZUxvZ2luRm9ybS5qcyIsIi4uL3NjcmlwdHMvbG9nb3V0LmpzIiwiLi4vc2NyaXB0cy9tYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztBQ0NBLE1BQU0sZUFBZSxHQUFHLE1BQU07QUFDMUIsRUFBQSxRQUFRLENBQUMsYUFBVCxDQUF1QixxQkFBdkIsRUFBOEMsU0FBOUMsR0FBMkQ7Ozs7Ozs7S0FBM0Q7QUFRSCxDQVREOztlQVdlLGU7Ozs7Ozs7Ozs7O0FDWmY7QUFDQTtBQUdBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsTUFBTSxvQkFBb0IsR0FBRyxNQUFNO0FBQy9CLEVBQUEsUUFBUSxHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLFNBQXZCLENBQVg7QUFDQSxNQUFJLFVBQVUsR0FBSTs7S0FBbEI7QUFHQSxFQUFBLFFBQVEsQ0FBQyxTQUFULEdBQXFCLFVBQXJCO0FBQ0gsQ0FORDs7QUFTQSxRQUFRLENBQUMsU0FBVCxJQUFzQixZQUFZLEVBQWxDLEMsQ0FHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O2VBQ2Usb0I7Ozs7OztBQ2xDZjs7QUFPQTs7OztBQVRBO0FBQ0EsS0FBSyxDQUFDLElBQUQsQ0FBTDtBQUVBO0FBS0Esc0JBQXNCO0FBR3RCLG9CQUFvQjtBQUNwQjtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiXHJcbmNvbnN0IGNyZWF0ZUxvZ2luRm9ybSA9ICgpID0+IHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbG9naW5Gb3JtQ29udGFpbmVyXCIpLmlubmVySFRNTCA9IGBcclxuICAgICAgICA8aDE+TG9naW48L2gxPlxyXG4gICAgICAgIDxsYWJlbCBmb3I9XCJuYW1lXCI+VXNlcm5hbWU6IDwvbGFiZWw+XHJcbiAgICAgICAgPGlucHV0IGlkPVwibmFtZVwiIHR5cGU9XCJ0ZXh0XCI+XHJcbiAgICAgICAgPGxhYmVsIGZvcj1cInBhc3N3b3JkXCI+UGFzc3dvcmQ6PC9sYWJlbD5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgaWQ9XCJwYXNzd29yZFwiIG5hbWU9XCJwYXNzd29yZFwiPlxyXG4gICAgICAgIDxidXR0b24gaWQ9XCJsb2dpbkJ1dHRvblwiPlN1Ym1pdDwvYnV0dG9uPlxyXG4gICAgYFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVMb2dpbkZvcm0iLCIvL3VzZXJkSUQgd2lsbCBiZSBzdG9yZWQgYXMgYW4gYXJndW1lbnQsIGFuZCBzdG9yZWQgaW4gYSB2YXJpYWJsZVxyXG4vLyBjb25zdCBjcmVkZW50aWFscyA9IGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiVHJldmFuXCIsIFwiWW91bmdcIilcclxuXHJcblxyXG4vLyAvL0xvZ291dCBCdXR0b25cclxuXHJcblxyXG4vLyBmdW5jdGlvbiBsb2dPdXRCdXR0b25GdW5jdGlvbiAoKSB7XHJcbi8vICAgICBjb25zdCBsb2dPdXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpXHJcbi8vICAgICAgICAgICBsb2dPdXRCdXR0b24uaWQgPSBcImxvZ091dEJ1dHRvbklkXCJcclxuLy8gICAgICAgICAgIGxvZ091dEJ1dHRvbi5pbm5lckhUTUwgPSBcIkxvZ291dFwiXHJcbi8vICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGxvZ091dEJ1dHRvbilcclxuLy8gfVxyXG5cclxuY29uc3QgbG9nT3V0QnV0dG9uRnVuY3Rpb24gPSAoKSA9PiB7XHJcbiAgICBvdXRwdXRFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub3V0cHV0XCIpXHJcbiAgICBsZXQgYnV0dG9uSFRNTCA9IGBcclxuICAgIDxidXR0b24gaWQ9XCJsb2dPdXRCdXR0b25JZD5Mb2dvdXQ8L2J1dHRvbj5cclxuICAgIGBcclxuICAgIG91dHB1dEVsLmlubmVySFRNTCA9IGJ1dHRvbkhUTUxcclxufVxyXG5cclxuXHJcbm91dHB1dEVsLmlubmVySFRNTCArPSBsb2dPdXRCdXR0b24oKVxyXG5cclxuXHJcbi8vIC8vRnVuY3Rpb24gd2lsbCBjbGVhciBzZXNzaW9uU3RvcmFnZSBhZnRlciB0aGUgbG9nb3V0IGJ1dHRpbiBpcyBjbGlja2VkXHJcbi8vIGNvbnN0IHNlc3Npb25TdG9yYWdlRGVsZXRlID0gKCkgPT4ge1xyXG4vLyAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNsb2dPdXRcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuLy8gICAgICAgICBsb2NhbFN0b3JhZ2UuY2xlYXIoY3JlZGVudGlhbHMpXHJcbi8vICAgICAgICAgbG9jYXRpb24gPSBsb2NhdGlvbjtcclxuLy8gICAgICB9XHJcbi8vICAgICApXHJcbi8vIH1cclxuXHJcbi8vIGV4cG9ydCBkZWZhdWx0IHNlc3Npb25TdG9yYWdlRGVsZXRlXHJcbmV4cG9ydCBkZWZhdWx0IGxvZ091dEJ1dHRvbkZ1bmN0aW9uIiwiLy8gaW1wb3J0IGNyZWF0ZVJlZ2lzdHJhdGlvbkZvcm0gZnJvbSBcIi4vY3JlYXRlUmVnaXN0cmF0aW9uRm9ybVwiXHJcbmFsZXJ0KFRFU1QpXHJcbmltcG9ydCBsb2dPdXRCdXR0b25GdW5jdGlvbiBmcm9tIFwiLi9sb2dvdXRcIlxyXG4vLyBpbXBvcnQgc2Vzc2lvblN0b3JhZ2VEZWxldGUgZnJvbSBcIi4vbG9nb3V0XCJcclxuXHJcblxyXG5cclxuXHJcbmNyZWF0ZVJlZ2lzdHJhdGlvbkZvcm0oKVxyXG5pbXBvcnQgY3JlYXRlTG9naW5Gb3JtIGZyb20gXCIuL2NyZWF0ZUxvZ2luRm9ybVwiXHJcblxyXG5zZXNzaW9uU3RvcmFnZURlbGV0ZSgpXHJcbmNyZWF0ZUxvZ2luRm9ybSgpXHJcbmxvZ091dEJ1dHRvbkZ1bmN0aW9uKCkiXX0=

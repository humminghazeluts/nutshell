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

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
//userdID will be stored as an argument, and stored in a variable
const credentials = localStorage.setItem("Trevan", "Young"); //Function will clear sessionStorage after the logout buttin is clicked

const sessionStorageDelete = () => {
  document.querySelector("#logOut").addEventListener("click", () => {
    localStorage.clear(credentials);
    location = location;
  });
};

var _default = sessionStorageDelete;
exports.default = _default;

},{}],4:[function(require,module,exports){
"use strict";

var _createRegistrationForm = _interopRequireDefault(require("./createRegistrationForm"));

var _logout = _interopRequireDefault(require("./logout"));

var _createLoginForm = _interopRequireDefault(require("./createLoginForm"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log("hi");
(0, _createRegistrationForm.default)();
(0, _logout.default)();
(0, _createLoginForm.default)();

},{"./createLoginForm":1,"./createRegistrationForm":2,"./logout":3}]},{},[4])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi9zY3JpcHRzL2NyZWF0ZUxvZ2luRm9ybS5qcyIsIi4uL3NjcmlwdHMvY3JlYXRlUmVnaXN0cmF0aW9uRm9ybS5qcyIsIi4uL3NjcmlwdHMvbG9nb3V0LmpzIiwiLi4vc2NyaXB0cy9tYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztBQ0NBLE1BQU0sZUFBZSxHQUFHLE1BQU07QUFDMUIsRUFBQSxRQUFRLENBQUMsYUFBVCxDQUF1QixxQkFBdkIsRUFBOEMsU0FBOUMsR0FBMkQ7Ozs7Ozs7S0FBM0Q7QUFRSCxDQVREOztlQVdlLGU7Ozs7Ozs7Ozs7O0FDWGYsSUFBSSxzQkFBc0IsR0FBSSxRQUFELElBQWM7QUFDdkMsRUFBQSxRQUFRLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsU0FBdkIsQ0FBWDtBQUNBLE1BQUksZUFBZSxHQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBQXZCO0FBb0JKLEVBQUEsUUFBUSxDQUFDLFNBQVQsR0FBcUIsZUFBckI7QUFDQyxDQXZCRDs7ZUF5QmUsc0I7Ozs7Ozs7Ozs7QUMxQmY7QUFDQSxNQUFNLFdBQVcsR0FBRyxZQUFZLENBQUMsT0FBYixDQUFxQixRQUFyQixFQUErQixPQUEvQixDQUFwQixDLENBQ0E7O0FBQ0EsTUFBTSxvQkFBb0IsR0FBRyxNQUFNO0FBQy9CLEVBQUEsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsU0FBdkIsRUFBa0MsZ0JBQWxDLENBQW1ELE9BQW5ELEVBQTRELE1BQU07QUFDOUQsSUFBQSxZQUFZLENBQUMsS0FBYixDQUFtQixXQUFuQjtBQUNBLElBQUEsUUFBUSxHQUFHLFFBQVg7QUFDRixHQUhGO0FBS0gsQ0FORDs7ZUFRZSxvQjs7Ozs7O0FDWGY7O0FBQ0E7O0FBTUE7Ozs7QUFGQSxPQUFPLENBQUMsR0FBUixDQUFZLElBQVo7QUFDQTtBQUdBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJcclxuY29uc3QgY3JlYXRlTG9naW5Gb3JtID0gKCkgPT4ge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNsb2dpbkZvcm1Db250YWluZXJcIikuaW5uZXJIVE1MID0gYFxyXG4gICAgICAgIDxoMT5Mb2dpbjwvaDE+XHJcbiAgICAgICAgPGxhYmVsIGZvcj1cIm5hbWVcIj5Vc2VybmFtZTogPC9sYWJlbD5cclxuICAgICAgICA8aW5wdXQgaWQ9XCJuYW1lXCIgdHlwZT1cInRleHRcIj5cclxuICAgICAgICA8bGFiZWwgZm9yPVwicGFzc3dvcmRcIj5QYXNzd29yZDo8L2xhYmVsPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBpZD1cInBhc3N3b3JkXCIgbmFtZT1cInBhc3N3b3JkXCI+XHJcbiAgICAgICAgPGJ1dHRvbiBpZD1cImxvZ2luQnV0dG9uXCI+U3VibWl0PC9idXR0b24+XHJcbiAgICBgXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUxvZ2luRm9ybSIsIlxyXG5sZXQgY3JlYXRlUmVnaXN0cmF0aW9uRm9ybSA9IChsb2NhdGlvbikgPT4ge1xyXG4gICAgbG9jYXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm91dHB1dFwiKVxyXG4gICAgbGV0IGNvbnRhY3RGb3JtSFRNTCA9IGBcclxuPGZvcm0+XHJcbjxmaWVsZHNldD5cclxuICAgIDxsYWJlbCBmb3I9XCJ1c2VyTmFtZVwiPlVzZXIgTmFtZTwvbGFiZWw+XHJcbiAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwidXNlck5hbWVcIiBpZD1cInVzZXJOYW1lXCI+XHJcbjwvZmllbGRzZXQ+XHJcbjxmaWVsZHNldD5cclxuICAgIDxsYWJlbCBmb3I9XCJ1c2VyRW1haWxcIj5FbWFpbDwvbGFiZWw+XHJcbiAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwidXNlckVtYWlsXCIgaWQ9XCJ1c2VyRW1haWxcIj5cclxuPC9maWVsZHNldD5cclxuPGZpZWxkc2V0PlxyXG4gICAgPGxhYmVsIGZvcj1cInVzZXJQYXNzd29yZFwiPlBhc3N3b3JkPC9sYWJlbD5cclxuICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBuYW1lPVwidXNlclBhc3N3b3JkXCIgaWQ9XCJ1c2VyUGFzc3dvcmRcIj5cclxuPC9maWVsZHNldD5cclxuXHJcbjxidXR0b24gaWQ9XCJjcmVhdGVDdXN0b21lck9iamVjdFwiIGNsYXNzPVwiYnRuIGJ0bi1pbmZvIHBlb3BsZVwiPlxyXG4gICAgQWRkIEN1c3RvbWVyXHJcbjwvYnV0dG9uPlxyXG48L2Zvcm0+XHJcbmBcclxubG9jYXRpb24uaW5uZXJIVE1MID0gY29udGFjdEZvcm1IVE1MXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVJlZ2lzdHJhdGlvbkZvcm0iLCIvL3VzZXJkSUQgd2lsbCBiZSBzdG9yZWQgYXMgYW4gYXJndW1lbnQsIGFuZCBzdG9yZWQgaW4gYSB2YXJpYWJsZVxyXG5jb25zdCBjcmVkZW50aWFscyA9IGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiVHJldmFuXCIsIFwiWW91bmdcIilcclxuLy9GdW5jdGlvbiB3aWxsIGNsZWFyIHNlc3Npb25TdG9yYWdlIGFmdGVyIHRoZSBsb2dvdXQgYnV0dGluIGlzIGNsaWNrZWRcclxuY29uc3Qgc2Vzc2lvblN0b3JhZ2VEZWxldGUgPSAoKSA9PiB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2xvZ091dFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5jbGVhcihjcmVkZW50aWFscylcclxuICAgICAgICBsb2NhdGlvbiA9IGxvY2F0aW9uO1xyXG4gICAgIH1cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgc2Vzc2lvblN0b3JhZ2VEZWxldGUiLCJpbXBvcnQgY3JlYXRlUmVnaXN0cmF0aW9uRm9ybSBmcm9tIFwiLi9jcmVhdGVSZWdpc3RyYXRpb25Gb3JtXCJcclxuaW1wb3J0IHNlc3Npb25TdG9yYWdlRGVsZXRlIGZyb20gXCIuL2xvZ291dFwiXHJcblxyXG5cclxuXHJcbmNvbnNvbGUubG9nKFwiaGlcIilcclxuY3JlYXRlUmVnaXN0cmF0aW9uRm9ybSgpXHJcbmltcG9ydCBjcmVhdGVMb2dpbkZvcm0gZnJvbSBcIi4vY3JlYXRlTG9naW5Gb3JtXCJcclxuXHJcbnNlc3Npb25TdG9yYWdlRGVsZXRlKClcclxuY3JlYXRlTG9naW5Gb3JtKClcclxuIl19

(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _submitAddTask = _interopRequireDefault(require("./submitAddTask"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const addTask = () => {
  document.querySelector(".output").innerHTML = `
        <div id="taskFormOutput">

            <input type="hidden" id="userID">

        <fieldset>
            <label for="task"></label>
            <h1> Add Task !</h1>
            <input type="text" name="taskName" id="taskName__input" placeholder="Please Add Task Name...">
        </fieldset>

        <fieldset>
            <form action="/action_page.php">
            <input type="date" name="" id="taskDate__input">
            </form>
        </fieldset>

        <form>
            <input type="checkbox" name="completed" value="" id="completed__input">Completed<br>
        </form>

        <button id="addTaskButton">Add Task!</button>
        </div>
        `;
  document.querySelector("#addTaskButton").addEventListener("click", event => {
    (0, _submitAddTask.default)();
  });
};

var _default = addTask;
exports.default = _default;

},{"./submitAddTask":4}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

const createTask = (taskName, expectedCompletionDate, completed) => {
  return {
    taskName: taskName,
    expectedCompletionDate: expectedCompletionDate,
    completed: completed
  };
};

var _default = createTask;
exports.default = _default;

},{}],3:[function(require,module,exports){
"use strict";

var _addTaskForm = _interopRequireDefault(require("./addTaskForm"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import {createLandingPage, changePage} from "./createLandingPage"
// import logOutButton from "./logout"
// import sessionStorageDelete from "./sessionStorage"
// import createTask from  "./submitAddTask"
// createLandingPage()
// changePage.listenForEvent()
// logOutButton()
// sessionStorageDelete()
(0, _addTaskForm.default)(); // createTask()

},{"./addTaskForm":1}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _addTaskObjectCreate = _interopRequireDefault(require("./addTaskObjectCreate"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//Creates addTask Object and sends to JSON
let postNewTask = () => {
  // Input is gathered from the selected IDs and stored in a variable
  const taskName = document.querySelector("#taskName__input").value;
  const taskDate = document.querySelector("#taskDate__input").value;
  const completed = document.querySelector("#completed__input").checked;
  const newTaskObject = (0, _addTaskObjectCreate.default)(taskName, taskDate, completed);
  console.log(newTaskObject); // apiManager.postSubmit(newTaskObject)
};

var _default = postNewTask;
exports.default = _default;

},{"./addTaskObjectCreate":2}]},{},[3])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi9zY3JpcHRzL2FkZFRhc2tGb3JtLmpzIiwiLi4vc2NyaXB0cy9hZGRUYXNrT2JqZWN0Q3JlYXRlLmpzIiwiLi4vc2NyaXB0cy9tYWluLmpzIiwiLi4vc2NyaXB0cy9zdWJtaXRBZGRUYXNrLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztBQ0FBOzs7O0FBRUEsTUFBTSxPQUFPLEdBQUcsTUFBTTtBQUNsQixFQUFBLFFBQVEsQ0FBQyxhQUFULENBQXVCLFNBQXZCLEVBQWtDLFNBQWxDLEdBQ0U7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1NBREY7QUEwQkksRUFBQSxRQUFRLENBQUMsYUFBVCxDQUF1QixnQkFBdkIsRUFBeUMsZ0JBQXpDLENBQTBELE9BQTFELEVBQW9FLEtBQUQsSUFBVztBQUMxRTtBQUNQLEdBRkc7QUFHUCxDQTlCRDs7ZUFnQ2UsTzs7Ozs7Ozs7Ozs7QUNsQ2YsTUFBTSxVQUFVLEdBQUcsQ0FBQyxRQUFELEVBQVcsc0JBQVgsRUFBbUMsU0FBbkMsS0FBaUQ7QUFDaEUsU0FBTztBQUNMLElBQUEsUUFBUSxFQUFHLFFBRE47QUFFTCxJQUFBLHNCQUFzQixFQUFFLHNCQUZuQjtBQUdMLElBQUEsU0FBUyxFQUFHO0FBSFAsR0FBUDtBQUtELENBTkg7O2VBT2UsVTs7Ozs7O0FDSGY7Ozs7QUFIQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFHQTtBQUNBO0FBQ0EsNEIsQ0FDQTs7Ozs7Ozs7OztBQ2RBOzs7O0FBRUE7QUFFSSxJQUFJLFdBQVcsR0FBRyxNQUFNO0FBQ3hCO0FBQ0EsUUFBTSxRQUFRLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsa0JBQXZCLEVBQTJDLEtBQTVEO0FBQ0EsUUFBTSxRQUFRLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsa0JBQXZCLEVBQTJDLEtBQTVEO0FBQ0EsUUFBTSxTQUFTLEdBQUUsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsbUJBQXZCLEVBQTRDLE9BQTdEO0FBRUEsUUFBTSxhQUFhLEdBQUcsa0NBQVcsUUFBWCxFQUFxQixRQUFyQixFQUErQixTQUEvQixDQUF0QjtBQUNBLEVBQUEsT0FBTyxDQUFDLEdBQVIsQ0FBWSxhQUFaLEVBUHdCLENBUXhCO0FBRUgsQ0FWRzs7ZUFhVyxXIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiaW1wb3J0IHBvc3ROZXdUYXNrIGZyb20gXCIuL3N1Ym1pdEFkZFRhc2tcIlxyXG5cclxuY29uc3QgYWRkVGFzayA9ICgpID0+IHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub3V0cHV0XCIpLmlubmVySFRNTCA9XHJcbiAgICAgYFxyXG4gICAgICAgIDxkaXYgaWQ9XCJ0YXNrRm9ybU91dHB1dFwiPlxyXG5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBpZD1cInVzZXJJRFwiPlxyXG5cclxuICAgICAgICA8ZmllbGRzZXQ+XHJcbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJ0YXNrXCI+PC9sYWJlbD5cclxuICAgICAgICAgICAgPGgxPiBBZGQgVGFzayAhPC9oMT5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInRhc2tOYW1lXCIgaWQ9XCJ0YXNrTmFtZV9faW5wdXRcIiBwbGFjZWhvbGRlcj1cIlBsZWFzZSBBZGQgVGFzayBOYW1lLi4uXCI+XHJcbiAgICAgICAgPC9maWVsZHNldD5cclxuXHJcbiAgICAgICAgPGZpZWxkc2V0PlxyXG4gICAgICAgICAgICA8Zm9ybSBhY3Rpb249XCIvYWN0aW9uX3BhZ2UucGhwXCI+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZGF0ZVwiIG5hbWU9XCJcIiBpZD1cInRhc2tEYXRlX19pbnB1dFwiPlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPC9maWVsZHNldD5cclxuXHJcbiAgICAgICAgPGZvcm0+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwiY29tcGxldGVkXCIgdmFsdWU9XCJcIiBpZD1cImNvbXBsZXRlZF9faW5wdXRcIj5Db21wbGV0ZWQ8YnI+XHJcbiAgICAgICAgPC9mb3JtPlxyXG5cclxuICAgICAgICA8YnV0dG9uIGlkPVwiYWRkVGFza0J1dHRvblwiPkFkZCBUYXNrITwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIGBcclxuXHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGRUYXNrQnV0dG9uXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgcG9zdE5ld1Rhc2soKVxyXG4gICAgfSApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFkZFRhc2tcclxuIiwiY29uc3QgY3JlYXRlVGFzayA9ICh0YXNrTmFtZSwgZXhwZWN0ZWRDb21wbGV0aW9uRGF0ZSwgY29tcGxldGVkKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB0YXNrTmFtZSA6IHRhc2tOYW1lLFxyXG4gICAgICBleHBlY3RlZENvbXBsZXRpb25EYXRlOiBleHBlY3RlZENvbXBsZXRpb25EYXRlLFxyXG4gICAgICBjb21wbGV0ZWQgOiBjb21wbGV0ZWRcclxuICAgIH1cclxuICB9XHJcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVRhc2siLCJcclxuLy8gaW1wb3J0IHtjcmVhdGVMYW5kaW5nUGFnZSwgY2hhbmdlUGFnZX0gZnJvbSBcIi4vY3JlYXRlTGFuZGluZ1BhZ2VcIlxyXG4vLyBpbXBvcnQgbG9nT3V0QnV0dG9uIGZyb20gXCIuL2xvZ291dFwiXHJcbi8vIGltcG9ydCBzZXNzaW9uU3RvcmFnZURlbGV0ZSBmcm9tIFwiLi9zZXNzaW9uU3RvcmFnZVwiXHJcbmltcG9ydCBhZGRUYXNrIGZyb20gXCIuL2FkZFRhc2tGb3JtXCJcclxuLy8gaW1wb3J0IGNyZWF0ZVRhc2sgZnJvbSAgXCIuL3N1Ym1pdEFkZFRhc2tcIlxyXG5cclxuLy8gY3JlYXRlTGFuZGluZ1BhZ2UoKVxyXG4vLyBjaGFuZ2VQYWdlLmxpc3RlbkZvckV2ZW50KClcclxuXHJcblxyXG4vLyBsb2dPdXRCdXR0b24oKVxyXG4vLyBzZXNzaW9uU3RvcmFnZURlbGV0ZSgpXHJcbmFkZFRhc2soKVxyXG4vLyBjcmVhdGVUYXNrKCkiLCJpbXBvcnQgY3JlYXRlVGFzayBmcm9tIFwiLi9hZGRUYXNrT2JqZWN0Q3JlYXRlXCJcclxuXHJcbi8vQ3JlYXRlcyBhZGRUYXNrIE9iamVjdCBhbmQgc2VuZHMgdG8gSlNPTlxyXG5cclxuICAgIGxldCBwb3N0TmV3VGFzayA9ICgpID0+IHtcclxuICAgIC8vIElucHV0IGlzIGdhdGhlcmVkIGZyb20gdGhlIHNlbGVjdGVkIElEcyBhbmQgc3RvcmVkIGluIGEgdmFyaWFibGVcclxuICAgIGNvbnN0IHRhc2tOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrTmFtZV9faW5wdXRcIikudmFsdWVcclxuICAgIGNvbnN0IHRhc2tEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrRGF0ZV9faW5wdXRcIikudmFsdWVcclxuICAgIGNvbnN0IGNvbXBsZXRlZD0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb21wbGV0ZWRfX2lucHV0XCIpLmNoZWNrZWRcclxuXHJcbiAgICBjb25zdCBuZXdUYXNrT2JqZWN0ID0gY3JlYXRlVGFzayh0YXNrTmFtZSwgdGFza0RhdGUsIGNvbXBsZXRlZClcclxuICAgIGNvbnNvbGUubG9nKG5ld1Rhc2tPYmplY3QpXHJcbiAgICAvLyBhcGlNYW5hZ2VyLnBvc3RTdWJtaXQobmV3VGFza09iamVjdClcclxuXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBwb3N0TmV3VGFzayJdfQ==

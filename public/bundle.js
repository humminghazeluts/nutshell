(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

const addEvent = () => {
  document.querySelector(".eventFormOutput").innerHTML = `
    <div>
    <fieldset>
        <label for="eventName">Name of Event: </label>
        <input type="text" name="eventName" id="eventName">
    </fieldset>
    <fieldset>
        <label for="eventDate">Date of Event: </label>
        <input type="text" name="eventDate" id="eventDate">
    </fieldset>
    <fieldset>
        <label for="eventLocation">Event Location: </label>
        <input type="text" name="eventLocation" id="eventLocation">
    </fieldset>
    <button id="addEvent">Add Event!</button>
    </div>
    `;
};

var _default = addEvent;
exports.default = _default;

},{}],2:[function(require,module,exports){
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

},{"./submitAddTask":12}],3:[function(require,module,exports){
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

},{}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.changePage = exports.createLandingPage = void 0;

var _createLoginForm = _interopRequireDefault(require("./createLoginForm"));

var _createRegistrationForm = _interopRequireDefault(require("./createRegistrationForm"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
    Author: Abbey
    Name: createLandingPage.js
    Purpose: landing page that allows the user to choose between registering as a new member or logging in
*/
const createLandingPage = () => {
  document.querySelector(".output").innerHTML += `
        <h1>🌰 Welcome to Humming Hazelnuts Dashboard Page 🌰</h1>
        <div class="buttonSection">
        <button id="loginButton">Login</button>
        <button id="registerButton">Register</button>
        </div>
    `;
};

exports.createLandingPage = createLandingPage;
const changePage = {
  listenForEvent: () => {
    document.querySelector(".output").addEventListener("click", () => {
      if (event.target.id.startsWith("loginButton")) {
        (0, _createLoginForm.default)(); //should the submit Login.js just be a function here??
      } else if (event.target.id.startsWith("registerButton")) {
        (0, _createRegistrationForm.default)();
      }
    });
  }
};
exports.changePage = changePage;

},{"./createLoginForm":5,"./createRegistrationForm":6}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _dataManager = _interopRequireDefault(require("./dataManager"));

var _user = _interopRequireDefault(require("./user"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
    Author: Abbey
    Name: createLoginForm.js
    Purpose: creates the HTML for the login form and the listening event to verify correct username and password 
            was entered. Then executes the user.js based off the current user logged in.
*/
const printCurrentUser = currentUserHTML => {
  document.querySelector(".output").innerHTML = currentUserHTML;
  let id = sessionStorage.getItem("userId");
  alert(id);
};

const createLoginForm = () => {
  document.querySelector(".output").innerHTML = `
        <h1>🌰 Login! Who needs Facebook when you have Humming Hazelnuts 🌰</h1>
        <label for="name">Username: </label>
        <input id="username" type="text">
        <label for="password">Password:</label>
        <input type="password" id="password" name="password">
        <button id="loginButton">Submit</button>
    `;
  document.querySelector("#loginButton").addEventListener("click", () => {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    _dataManager.default.getUsers().then(users => {
      users.forEach(user => {
        if (user.username === username && user.password === password) {
          sessionStorage.setItem("userId", user.id);
          let currentUserHTML = (0, _user.default)(user);
          printCurrentUser(currentUserHTML);
        }
      });
    });
  });
};

var _default = createLoginForm;
exports.default = _default;

},{"./dataManager":7,"./user":14}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

let createRegistrationForm = location => {
  location = document.querySelector(".output");
  let contactFormHTML = `
<div>
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

<button id="registerUser">
Register!
</button>
    </form>
`;
  location.innerHTML = contactFormHTML;
};

var _default = createRegistrationForm;
exports.default = _default;

},{}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
// Object that holds all the methods for accessing API
const APIManager = {
  // general see all users function
  getUsers: () => {
    return fetch("http://localhost:8088/users").then(res => res.json());
  },
  // add new user to the API
  postNewUser: newUser => {
    return fetch("http://localhost:8088/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newUser)
    });
  },
  // edit existing user
  editUser: (userId, userObj) => {
    return fetch(`http://localhost:8088/${userId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(userObj)
    });
  },
  // delete user
  deleteUser: userId => {
    return fetch(`http://localhost:8088/${userId}`, {
      method: "DELETE"
    });
  },
  // general see all articles function
  getArticles: () => {
    return fetch("http://localhost:8088/articles").then(res => res.json());
  },
  // add new article
  postNewArticle: newArticle => {
    return fetch("http://localhost:8088/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newArticle)
    });
  },
  // edit existing user
  editArticle: (articleId, articleObj) => {
    return fetch(`http://localhost8088/${articleId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(articleObj)
    });
  },
  // delete article
  deleteArticle: articleId => {
    return fetch(`http://localhost:8088/${articleId}`, {
      method: "DELETE"
    });
  },
  // general get all events function
  getEvents: () => {
    return fetch("http://localhost:8088/events").then(res => res.json());
  },
  // add new event
  postNewEvent: newEvent => {
    return fetch("http://localhost:8088/events", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newEvent)
    });
  },
  // edit existing event
  editEvent: (eventId, eventObj) => {
    return fetch(`http://localhost:8088/${eventId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(eventObj)
    });
  },
  // delete event
  deleteEvent: eventId => {
    return fetch(`http://localhost:8088/${eventId}`, {
      method: "DELETE"
    });
  },
  // general see all tasks function
  getTasks: () => {
    return fetch("http://localhost:8088/tasks").then(res => res.json());
  },
  // add new task
  postNewTask: newTask => {
    return fetch("http://localhost:8088/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newTask)
    });
  },
  // edit an existing task
  editTask: (taskId, taskObj) => {
    return fetch(`http://localhost:8088/${taskId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(taskObj)
    });
  },
  // delete task
  deleteTask: taskId => {
    return fetch(`http://localhost:8088/${taskId}`, {
      method: "DELETE"
    });
  },
  // general see all friendships function
  getfriendShip: () => {
    return fetch("http://localhost:8088/friendShips").then(res => res.json());
  },
  // add new friendship
  postNewFriendShip: newfriendShip => {
    return fetch("http://localhost:8088/friendShips", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newfriendShip)
    });
  },
  // edit and existing friendship
  editFriendShips: (friendShipId, friendShipObj) => {
    return fetch(`http://localhost:8088/${friendShipId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(friendShipObj)
    });
  },
  // delete a friendship
  deleteFriendShip: friendShipId => {
    return fetch(`http://localhost:8088/${friendShipId}`, {
      method: "DELETE"
    });
  }
};
var _default = APIManager;
exports.default = _default;

},{}],8:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

//Logout Button
let logOutButton = () => {
  let putButtonHere = document.querySelector("#logUserOut");
  putButtonHere.innerHTML = "<button id='logOutButton'>Logout</button>";
};

var _default = logOutButton;
exports.default = _default;

},{}],9:[function(require,module,exports){
"use strict";

var _createRegistrationForm = _interopRequireDefault(require("./createRegistrationForm"));

var _registerNewUser = _interopRequireDefault(require("./registerNewUser"));

var _dataManager = _interopRequireDefault(require("./dataManager"));

var _addEventForm = _interopRequireDefault(require("./addEventForm"));

var _createLandingPage = require("./createLandingPage");

var _logout = _interopRequireDefault(require("./logout"));

var _sessionStorage = _interopRequireDefault(require("./sessionStorage"));

var _addTaskForm = _interopRequireDefault(require("./addTaskForm"));

var _submitAddTask = _interopRequireDefault(require("./submitAddTask"));

var _taskPrintToDom = _interopRequireDefault(require("./taskPrintToDom"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// console.log("hi")
// createRegistrationForm()
// document.querySelector("#registerUser").addEventListener("click", event => {
//     addNewUser()
// })
// addEvent()
// import createLoginForm from "./createLoginForm"
// createLoginForm()
// createLandingPage()
// changePage.listenForEvent()
// let id = sessionStorage.getItem("userId")
// alert(id)
// logOutButton()
// sessionStorageDelete()
// addTask()
// createTask()
(0, _taskPrintToDom.default)();

},{"./addEventForm":1,"./addTaskForm":2,"./createLandingPage":4,"./createRegistrationForm":6,"./dataManager":7,"./logout":8,"./registerNewUser":10,"./sessionStorage":11,"./submitAddTask":12,"./taskPrintToDom":13}],10:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

// import APIManager from "./dataManager"
let addNewUser = () => {
  let newUser = {};
  let userName = document.querySelector("#userName").value;
  let userEmail = document.querySelector("#userEmail").value;
  let userPassword = document.querySelector("#userPassword").value;
  APIManager.getUsers().then(userArray => {
    if (userName === "" || userEmail === "" || userPassword === "") {
      alert("Please fill in all information");
    } else {
      newUser.username = userName;
      newUser.emailAddress = userEmail;
      newUser.password = userPassword;
      APIManager.postNewUser(newUser);
      document.querySelector("#userName").value = "";
      document.querySelector("#userEmail").value = "";
      document.querySelector("#userPassword").value = "";
    }
  });
};

var _default = addNewUser; // let newCustomerObject = () => {
//     let newUser = {}
//     let userName = document.querySelector("#userName").value
//     let userEmail = document.querySelector("#userEmail").value
//     let userPassword = document.querySelector("#userPassword").value
//     newUser.userName = userName
//     newUser.emailAddress = userEmail
//     newUser.password = userPassword
//     APIManager.postNewUser(newUser)
// }
// export default newCustomerObject

exports.default = _default;

},{}],11:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

//userdID will be stored as an argument, and stored in a variable
// const credentials = localStorage.setItem("Trevan", "Young")
//Function will clear sessionStorage after the logout buttin is clicked
const sessionStorageDelete = () => {
  document.querySelector("#logOutButton").addEventListener("click", () => {
    localStorage.clear();
    location = location;
  });
};

var _default = sessionStorageDelete;
exports.default = _default;

},{}],12:[function(require,module,exports){
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

},{"./addTaskObjectCreate":3}],13:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _dataManager = _interopRequireDefault(require("./dataManager"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function printTasksToDom() {
  _dataManager.default.getTasks().then(tasks => {
    console.log(tasks);
    let printPlace = document.querySelector(".output");
    tasks.forEach(task => {
      console.log(task);
      printPlace.innerHTML += `
                    <h1>${task.taskName}</h1>
                    <p>${task.expectedCompletionDate}</p>
                    <p>${task.completed}</p>

                                `;
    });
  });
}

var _default = printTasksToDom;
exports.default = _default;

},{"./dataManager":7}],14:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

const userHTML = userObject => {
  return `
        <section>
        <h3>HELLO ${userObject.username}! Welcome to Your DashBoard!</h3>
    `;
};

var _default = userHTML;
exports.default = _default;

},{}]},{},[9])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi9zY3JpcHRzL2FkZEV2ZW50Rm9ybS5qcyIsIi4uL3NjcmlwdHMvYWRkVGFza0Zvcm0uanMiLCIuLi9zY3JpcHRzL2FkZFRhc2tPYmplY3RDcmVhdGUuanMiLCIuLi9zY3JpcHRzL2NyZWF0ZUxhbmRpbmdQYWdlLmpzIiwiLi4vc2NyaXB0cy9jcmVhdGVMb2dpbkZvcm0uanMiLCIuLi9zY3JpcHRzL2NyZWF0ZVJlZ2lzdHJhdGlvbkZvcm0uanMiLCIuLi9zY3JpcHRzL2RhdGFNYW5hZ2VyLmpzIiwiLi4vc2NyaXB0cy9sb2dvdXQuanMiLCIuLi9zY3JpcHRzL21haW4uanMiLCIuLi9zY3JpcHRzL3JlZ2lzdGVyTmV3VXNlci5qcyIsIi4uL3NjcmlwdHMvc2Vzc2lvblN0b3JhZ2UuanMiLCIuLi9zY3JpcHRzL3N1Ym1pdEFkZFRhc2suanMiLCIuLi9zY3JpcHRzL3Rhc2tQcmludFRvRG9tLmpzIiwiLi4vc2NyaXB0cy91c2VyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztBQ0FBLE1BQU0sUUFBUSxHQUFHLE1BQU07QUFDdkIsRUFBQSxRQUFRLENBQUMsYUFBVCxDQUF1QixrQkFBdkIsRUFBMkMsU0FBM0MsR0FDRTs7Ozs7Ozs7Ozs7Ozs7OztLQURGO0FBa0JDLENBbkJEOztlQXFCZSxROzs7Ozs7Ozs7OztBQ3JCZjs7OztBQUVBLE1BQU0sT0FBTyxHQUFHLE1BQU07QUFDbEIsRUFBQSxRQUFRLENBQUMsYUFBVCxDQUF1QixTQUF2QixFQUFrQyxTQUFsQyxHQUNFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztTQURGO0FBMEJJLEVBQUEsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsZ0JBQXZCLEVBQXlDLGdCQUF6QyxDQUEwRCxPQUExRCxFQUFvRSxLQUFELElBQVc7QUFDMUU7QUFDUCxHQUZHO0FBR1AsQ0E5QkQ7O2VBZ0NlLE87Ozs7Ozs7Ozs7O0FDbENmLE1BQU0s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QUk7QUFDbEIsTUFBQSxPQUFPLENBQUMsR0FBUixDQUFZLElBQVo7QUFDQSxNQUFBLFVBQVUsQ0FBQyxTQUFYLElBQXlCOzBCQUNYLElBQUksQ0FBQyxRQUFTO3lCQUNmLElBQUksQ0FBQyxzQkFBdUI7eUJBQzVCLElBQUksQ0FBQyxTQUFVOztpQ0FINUI7QUFNSCxLQVJEO0FBV1AsR0FkRztBQWVDOztlQUlVLGU7Ozs7Ozs7Ozs7O0FDckJmLE1BQU0sUUFBUSxHQUFJLFVBQUQsSUFBZ0I7QUFDN0IsU0FBUTs7b0JBRVEsVUFBVSxDQUFDLFFBQVM7S0FGcEM7QUFJSCxDQUxEOztlQU1lLFEiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJjb25zdCBhZGRFdmVudCA9ICgpID0+IHtcclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ldmVudEZvcm1PdXRwdXRcIikuaW5uZXJIVE1MID1cclxuIGBcclxuICAgIDxkaXY+XHJcbiAgICA8ZmllbGRzZXQ+XHJcbiAgICAgICAgPGxhYmVsIGZvcj1cImV2ZW50TmFtZVwiPk5hbWUgb2YgRXZlbnQ6IDwvbGFiZWw+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImV2ZW50TmFtZVwiIGlkPVwiZXZlbnROYW1lXCI+XHJcbiAgICA8L2ZpZWxkc2V0PlxyXG4gICAgPGZpZWxkc2V0PlxyXG4gICAgICAgIDxsYWJlbCBmb3I9XCJldmVudERhdGVcIj5EYXRlIG9mIEV2ZW50OiA8L2xhYmVsPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJldmVudERhdGVcIiBpZD1cImV2ZW50RGF0ZVwiPlxyXG4gICAgPC9maWVsZHNldD5cclxuICAgIDxmaWVsZHNldD5cclxuICAgICAgICA8bGFiZWwgZm9yPVwiZXZlbnRMb2NhdGlvblwiPkV2ZW50IExvY2F0aW9uOiA8L2xhYmVsPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJldmVudExvY2F0aW9uXCIgaWQ9XCJldmVudExvY2F0aW9uXCI+XHJcbiAgICA8L2ZpZWxkc2V0PlxyXG4gICAgPGJ1dHRvbiBpZD1cImFkZEV2ZW50XCI+QWRkIEV2ZW50ITwvYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbiAgICBgXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFkZEV2ZW50XHJcbiIsImltcG9ydCBwb3N0TmV3VGFzayBmcm9tIFwiLi9zdWJtaXRBZGRUYXNrXCJcclxuXHJcbmNvbnN0IGFkZFRhc2sgPSAoKSA9PiB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm91dHB1dFwiKS5pbm5lckhUTUwgPVxyXG4gICAgIGBcclxuICAgICAgICA8ZGl2IGlkPVwidGFza0Zvcm1PdXRwdXRcIj5cclxuXHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgaWQ9XCJ1c2VySURcIj5cclxuXHJcbiAgICAgICAgPGZpZWxkc2V0PlxyXG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwidGFza1wiPjwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxoMT4gQWRkIFRhc2sgITwvaDE+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJ0YXNrTmFtZVwiIGlkPVwidGFza05hbWVfX2lucHV0XCIgcGxhY2Vob2xkZXI9XCJQbGVhc2UgQWRkIFRhc2sgTmFtZS4uLlwiPlxyXG4gICAgICAgIDwvZmllbGRzZXQ+XHJcblxyXG4gICAgICAgIDxmaWVsZHNldD5cclxuICAgICAgICAgICAgPGZvcm0gYWN0aW9uPVwiL2FjdGlvbl9wYWdlLnBocFwiPlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cImRhdGVcIiBuYW1lPVwiXCIgaWQ9XCJ0YXNrRGF0ZV9faW5wdXRcIj5cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDwvZmllbGRzZXQ+XHJcblxyXG4gICAgICAgIDxmb3JtPlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cImNvbXBsZXRlZFwiIHZhbHVlPVwiXCIgaWQ9XCJjb21wbGV0ZWRfX2lucHV0XCI+Q29tcGxldGVkPGJyPlxyXG4gICAgICAgIDwvZm9ybT5cclxuXHJcbiAgICAgICAgPGJ1dHRvbiBpZD1cImFkZFRhc2tCdXR0b25cIj5BZGQgVGFzayE8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBgXHJcblxyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkVGFza0J1dHRvblwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIHBvc3ROZXdUYXNrKClcclxuICAgIH0gKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhZGRUYXNrXHJcbiIsImNvbnN0IGNyZWF0ZVRhc2sgPSAodGFza05hbWUsIGV4cGVjdGVkQ29tcGxldGlvbkRhdGUsIGNvbXBsZXRlZCkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdGFza05hbWUgOiB0YXNrTmFtZSxcclxuICAgICAgZXhwZWN0ZWRDb21wbGV0aW9uRGF0ZTogZXhwZWN0ZWRDb21wbGV0aW9uRGF0ZSxcclxuICAgICAgY29tcGxldGVkIDogY29tcGxldGVkXHJcbiAgICB9XHJcbiAgfVxyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVUYXNrIiwiLypcclxuICAgIEF1dGhvcjogQWJiZXlcclxuICAgIE5hbWU6IGNyZWF0ZUxhbmRpbmdQYWdlLmpzXHJcbiAgICBQdXJwb3NlOiBsYW5kaW5nIHBhZ2UgdGhhdCBhbGxvd3MgdGhlIHVzZXIgdG8gY2hvb3NlIGJldHdlZW4gcmVnaXN0ZXJpbmcgYXMgYSBuZXcgbWVtYmVyIG9yIGxvZ2dpbmcgaW5cclxuKi9cclxuXHJcbmltcG9ydCBjcmVhdGVMb2dpbkZvcm0gZnJvbSBcIi4vY3JlYXRlTG9naW5Gb3JtXCJcclxuaW1wb3J0IGNyZWF0ZVJlZ2lzdHJhdGlvbkZvcm0gZnJvbSBcIi4vY3JlYXRlUmVnaXN0cmF0aW9uRm9ybVwiXHJcblxyXG5jb25zdCBjcmVhdGVMYW5kaW5nUGFnZSA9ICgpID0+IHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub3V0cHV0XCIpLmlubmVySFRNTCArPSBgXHJcbiAgICAgICAgPGgxPvCfjLAgV2VsY29tZSB0byBIdW1taW5nIEhhemVsbnV0cyBEYXNoYm9hcmQgUGFnZSDwn4ywPC9oMT5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiYnV0dG9uU2VjdGlvblwiPlxyXG4gICAgICAgIDxidXR0b24gaWQ9XCJsb2dpbkJ1dHRvblwiPkxvZ2luPC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvbiBpZD1cInJlZ2lzdGVyQnV0dG9uXCI+UmVnaXN0ZXI8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIGBcclxufVxyXG5cclxuY29uc3QgY2hhbmdlUGFnZSA9IHtcclxuXHJcbiAgICBsaXN0ZW5Gb3JFdmVudDogKCkgPT4ge1xyXG5cclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm91dHB1dFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZXZlbnQudGFyZ2V0LmlkLnN0YXJ0c1dpdGgoXCJsb2dpbkJ1dHRvblwiKSkge1xyXG4gICAgICAgICAgICAgICAgY3JlYXRlTG9naW5Gb3JtKCkgLy9zaG91bGQgdGhlIHN1Ym1pdCBMb2dpbi5qcyBqdXN0IGJlIGEgZnVuY3Rpb24gaGVyZT8/XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZXZlbnQudGFyZ2V0LmlkLnN0YXJ0c1dpdGgoXCJyZWdpc3RlckJ1dHRvblwiKSkge1xyXG4gICAgICAgICAgICAgICAgY3JlYXRlUmVnaXN0cmF0aW9uRm9ybSgpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG5cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHsgY3JlYXRlTGFuZGluZ1BhZ2UsIGNoYW5nZVBhZ2UgfSIsIi8qXHJcbiAgICBBdXRob3I6IEFiYmV5XHJcbiAgICBOYW1lOiBjcmVhdGVMb2dpbkZvcm0uanNcclxuICAgIFB1cnBvc2U6IGNyZWF0ZXMgdGhlIEhUTUwgZm9yIHRoZSBsb2dpbiBmb3JtIGFuZCB0aGUgbGlzdGVuaW5nIGV2ZW50IHRvIHZlcmlmeSBjb3JyZWN0IHVzZXJuYW1lIGFuZCBwYXNzd29yZCBcclxuICAgICAgICAgICAgd2FzIGVudGVyZWQuIFRoZW4gZXhlY3V0ZXMgdGhlIHVzZXIuanMgYmFzZWQgb2ZmIHRoZSBjdXJyZW50IHVzZXIgbG9nZ2VkIGluLlxyXG4qL1xyXG5cclxuaW1wb3J0IEFQSU1hbmFnZXIgZnJvbSBcIi4vZGF0YU1hbmFnZXJcIlxyXG5pbXBvcnQgdXNlckhUTUwgZnJvbSBcIi4vdXNlclwiXHJcblxyXG5jb25zdCBwcmludEN1cnJlbnRVc2VyID0gY3VycmVudFVzZXJIVE1MID0+IHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub3V0cHV0XCIpLmlubmVySFRNTCA9IGN1cnJlbnRVc2VySFRNTFxyXG4gICAgbGV0IGlkID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcInVzZXJJZFwiKVxyXG4gICAgYWxlcnQoaWQpXHJcbn1cclxuXHJcbmNvbnN0IGNyZWF0ZUxvZ2luRm9ybSA9ICgpID0+IHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub3V0cHV0XCIpLmlubmVySFRNTCA9IGBcclxuICAgICAgICA8aDE+8J+MsCBMb2dpbiEgV2hvIG5lZWRzIEZhY2Vib29rIHdoZW4geW91IGhhdmUgSHVtbWluZyBIYXplbG51dHMg8J+MsDwvaDE+XHJcbiAgICAgICAgPGxhYmVsIGZvcj1cIm5hbWVcIj5Vc2VybmFtZTogPC9sYWJlbD5cclxuICAgICAgICA8aW5wdXQgaWQ9XCJ1c2VybmFtZVwiIHR5cGU9XCJ0ZXh0XCI+XHJcbiAgICAgICAgPGxhYmVsIGZvcj1cInBhc3N3b3JkXCI+UGFzc3dvcmQ6PC9sYWJlbD5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgaWQ9XCJwYXNzd29yZFwiIG5hbWU9XCJwYXNzd29yZFwiPlxyXG4gICAgICAgIDxidXR0b24gaWQ9XCJsb2dpbkJ1dHRvblwiPlN1Ym1pdDwvYnV0dG9uPlxyXG4gICAgYFxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNsb2dpbkJ1dHRvblwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHVzZXJuYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1c2VybmFtZVwiKS52YWx1ZVxyXG4gICAgICAgIGNvbnN0IHBhc3N3b3JkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwYXNzd29yZFwiKS52YWx1ZVxyXG5cclxuICAgICAgICBBUElNYW5hZ2VyLmdldFVzZXJzKClcclxuICAgICAgICAgICAgLnRoZW4odXNlcnMgPT4ge1xyXG4gICAgICAgICAgICAgICAgdXNlcnMuZm9yRWFjaCh1c2VyID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodXNlci51c2VybmFtZSA9PT0gdXNlcm5hbWUgJiYgdXNlci5wYXNzd29yZCA9PT0gcGFzc3dvcmQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcInVzZXJJZFwiLCB1c2VyLmlkKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgY3VycmVudFVzZXJIVE1MID0gdXNlckhUTUwodXNlcilcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJpbnRDdXJyZW50VXNlcihjdXJyZW50VXNlckhUTUwpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSlcclxuICAgIH0pXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUxvZ2luRm9ybSAgIiwiXHJcbmxldCBjcmVhdGVSZWdpc3RyYXRpb25Gb3JtID0gKGxvY2F0aW9uKSA9PiB7XHJcbiAgICBsb2NhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub3V0cHV0XCIpXHJcbiAgICBsZXQgY29udGFjdEZvcm1IVE1MID0gYFxyXG48ZGl2PlxyXG48ZmllbGRzZXQ+XHJcbiAgICA8bGFiZWwgZm9yPVwidXNlck5hbWVcIj5Vc2VyIE5hbWU8L2xhYmVsPlxyXG4gICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInVzZXJOYW1lXCIgaWQ9XCJ1c2VyTmFtZVwiPlxyXG48L2ZpZWxkc2V0PlxyXG48ZmllbGRzZXQ+XHJcbiAgICA8bGFiZWwgZm9yPVwidXNlckVtYWlsXCI+RW1haWw8L2xhYmVsPlxyXG4gICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInVzZXJFbWFpbFwiIGlkPVwidXNlckVtYWlsXCI+XHJcbjwvZmllbGRzZXQ+XHJcbjxmaWVsZHNldD5cclxuICAgIDxsYWJlbCBmb3I9XCJ1c2VyUGFzc3dvcmRcIj5QYXNzd29yZDwvbGFiZWw+XHJcbiAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgbmFtZT1cInVzZXJQYXNzd29yZFwiIGlkPVwidXNlclBhc3N3b3JkXCI+XHJcbjwvZmllbGRzZXQ+XHJcblxyXG48YnV0dG9uIGlkPVwicmVnaXN0ZXJVc2VyXCI+XHJcblJlZ2lzdGVyIVxyXG48L2J1dHRvbj5cclxuICAgIDwvZm9ybT5cclxuYFxyXG5sb2NhdGlvbi5pbm5lckhUTUwgPSBjb250YWN0Rm9ybUhUTUxcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlUmVnaXN0cmF0aW9uRm9ybSIsIi8vIE9iamVjdCB0aGF0IGhvbGRzIGFsbCB0aGUgbWV0aG9kcyBmb3IgYWNjZXNzaW5nIEFQSVxyXG5jb25zdCBBUElNYW5hZ2VyID0ge1xyXG4gICAgLy8gZ2VuZXJhbCBzZWUgYWxsIHVzZXJzIGZ1bmN0aW9uXHJcbiAgICBnZXRVc2VyczogKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4OC91c2Vyc1wiKVxyXG4gICAgICAgICAgICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcclxuICAgIH0sXHJcbiAgICAvLyBhZGQgbmV3IHVzZXIgdG8gdGhlIEFQSVxyXG4gICAgcG9zdE5ld1VzZXI6IChuZXdVc2VyKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDo4MDg4L3VzZXJzXCIsIHtcclxuICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkobmV3VXNlcilcclxuICAgICAgICB9KVxyXG4gICAgfSxcclxuICAgIC8vIGVkaXQgZXhpc3RpbmcgdXNlclxyXG4gICAgZWRpdFVzZXI6ICh1c2VySWQsIHVzZXJPYmopID0+IHtcclxuICAgICAgICByZXR1cm4gZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6ODA4OC8ke3VzZXJJZH1gLCB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogXCJQVVRcIixcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkodXNlck9iailcclxuICAgICAgICB9KVxyXG4gICAgfSxcclxuICAgIC8vIGRlbGV0ZSB1c2VyXHJcbiAgICBkZWxldGVVc2VyOiAodXNlcklkKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjgwODgvJHt1c2VySWR9YCwge1xyXG4gICAgICAgICAgICBtZXRob2Q6IFwiREVMRVRFXCIsXHJcbiAgICAgICAgfSlcclxuICAgIH0sXHJcbiAgICAgLy8gZ2VuZXJhbCBzZWUgYWxsIGFydGljbGVzIGZ1bmN0aW9uXHJcbiAgICBnZXRBcnRpY2xlczogKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4OC9hcnRpY2xlc1wiKVxyXG4gICAgICAgICAgICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcclxuICAgIH0sXHJcbiAgICAvLyBhZGQgbmV3IGFydGljbGVcclxuICAgIHBvc3ROZXdBcnRpY2xlOiAobmV3QXJ0aWNsZSkgPT4ge1xyXG4gICAgICAgIHJldHVybiBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4OC91c2Vyc1wiLCB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KG5ld0FydGljbGUpXHJcbiAgICAgICAgfSlcclxuICAgIH0sXHJcbiAgICAvLyBlZGl0IGV4aXN0aW5nIHVzZXJcclxuICAgIGVkaXRBcnRpY2xlOiAoYXJ0aWNsZUlkLCBhcnRpY2xlT2JqKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGZldGNoKGBodHRwOi8vbG9jYWxob3N0ODA4OC8ke2FydGljbGVJZH1gLCB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogXCJQVVRcIixcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoYXJ0aWNsZU9iailcclxuICAgICAgICB9KVxyXG4gICAgfSxcclxuICAgIC8vIGRlbGV0ZSBhcnRpY2xlXHJcbiAgICBkZWxldGVBcnRpY2xlOiAoYXJ0aWNsZUlkKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjgwODgvJHthcnRpY2xlSWR9YCwge1xyXG4gICAgICAgICAgICBtZXRob2Q6IFwiREVMRVRFXCIsXHJcbiAgICAgICAgfSlcclxuICAgIH0sXHJcbiAgICAvLyBnZW5lcmFsIGdldCBhbGwgZXZlbnRzIGZ1bmN0aW9uXHJcbiAgICBnZXRFdmVudHM6ICgpID0+IHtcclxuICAgICAgICByZXR1cm4gZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjgwODgvZXZlbnRzXCIpXHJcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxyXG4gICAgfSxcclxuICAgIC8vIGFkZCBuZXcgZXZlbnRcclxuICAgIHBvc3ROZXdFdmVudDogKG5ld0V2ZW50KSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDo4MDg4L2V2ZW50c1wiLCB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KG5ld0V2ZW50KVxyXG4gICAgICAgIH0pXHJcbiAgICB9LFxyXG4gICAgLy8gZWRpdCBleGlzdGluZyBldmVudFxyXG4gICAgZWRpdEV2ZW50OiAoZXZlbnRJZCwgZXZlbnRPYmopID0+IHtcclxuICAgICAgICByZXR1cm4gZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6ODA4OC8ke2V2ZW50SWR9YCwge1xyXG4gICAgICAgICAgICBtZXRob2Q6IFwiUFVUXCIsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGV2ZW50T2JqKVxyXG4gICAgICAgIH0pXHJcbiAgICB9LFxyXG4gICAgLy8gZGVsZXRlIGV2ZW50XHJcbiAgICBkZWxldGVFdmVudDogKGV2ZW50SWQpID0+IHtcclxuICAgICAgICByZXR1cm4gZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6ODA4OC8ke2V2ZW50SWR9YCwge1xyXG4gICAgICAgICAgICBtZXRob2Q6IFwiREVMRVRFXCIsXHJcbiAgICAgICAgfSlcclxuICAgIH0sXHJcbiAgICAvLyBnZW5lcmFsIHNlZSBhbGwgdGFza3MgZnVuY3Rpb25cclxuICAgIGdldFRhc2tzOiAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGZldGNoIChcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4OC90YXNrc1wiKVxyXG4gICAgICAgIC50aGVuIChyZXMgPT4gcmVzLmpzb24oKSlcclxuICAgIH0sXHJcbiAgICAvLyBhZGQgbmV3IHRhc2tcclxuICAgIHBvc3ROZXdUYXNrOiAobmV3VGFzaykgPT4ge1xyXG4gICAgICAgIHJldHVybiBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4OC90YXNrc1wiLCB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KG5ld1Rhc2spXHJcbiAgICAgICAgfSlcclxuICAgIH0sXHJcbiAgICAvLyBlZGl0IGFuIGV4aXN0aW5nIHRhc2tcclxuICAgIGVkaXRUYXNrOiAodGFza0lkLCB0YXNrT2JqKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjgwODgvJHt0YXNrSWR9YCwge1xyXG4gICAgICAgICAgICBtZXRob2Q6IFwiUFVUXCIsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHRhc2tPYmopXHJcbiAgICAgICAgfSlcclxuICAgIH0sXHJcbiAgICAvLyBkZWxldGUgdGFza1xyXG4gICAgZGVsZXRlVGFzazogKHRhc2tJZCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDo4MDg4LyR7dGFza0lkfWAsIHtcclxuICAgICAgICAgICAgbWV0aG9kOiBcIkRFTEVURVwiLFxyXG4gICAgICAgIH0pXHJcbiAgICB9LFxyXG4gICAgLy8gZ2VuZXJhbCBzZWUgYWxsIGZyaWVuZHNoaXBzIGZ1bmN0aW9uXHJcbiAgICBnZXRmcmllbmRTaGlwOiAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDo4MDg4L2ZyaWVuZFNoaXBzXCIpXHJcbiAgICAgICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXHJcbiAgICB9LFxyXG4gICAgLy8gYWRkIG5ldyBmcmllbmRzaGlwXHJcbiAgICBwb3N0TmV3RnJpZW5kU2hpcDogKG5ld2ZyaWVuZFNoaXApID0+IHtcclxuICAgICAgICByZXR1cm4gZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjgwODgvZnJpZW5kU2hpcHNcIiwge1xyXG4gICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShuZXdmcmllbmRTaGlwKVxyXG4gICAgICAgIH0pXHJcbiAgICB9LFxyXG4gICAgLy8gZWRpdCBhbmQgZXhpc3RpbmcgZnJpZW5kc2hpcFxyXG4gICAgZWRpdEZyaWVuZFNoaXBzOiAoZnJpZW5kU2hpcElkLCBmcmllbmRTaGlwT2JqKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjgwODgvJHtmcmllbmRTaGlwSWR9YCwge1xyXG4gICAgICAgICAgICBtZXRob2Q6IFwiUFVUXCIsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGZyaWVuZFNoaXBPYmopXHJcbiAgICAgICAgfSlcclxuICAgIH0sXHJcbiAgICAvLyBkZWxldGUgYSBmcmllbmRzaGlwXHJcbiAgICBkZWxldGVGcmllbmRTaGlwOiAoZnJpZW5kU2hpcElkKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjgwODgvJHtmcmllbmRTaGlwSWR9YCwge1xyXG4gICAgICAgICAgICBtZXRob2Q6IFwiREVMRVRFXCIsXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBBUElNYW5hZ2VyXHJcbiIsIi8vTG9nb3V0IEJ1dHRvblxyXG5sZXQgbG9nT3V0QnV0dG9uID0gKCkgPT4ge1xyXG4gICAgbGV0IHB1dEJ1dHRvbkhlcmU9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbG9nVXNlck91dFwiKVxyXG4gICAgcHV0QnV0dG9uSGVyZS5pbm5lckhUTUwgPSBcIjxidXR0b24gaWQ9J2xvZ091dEJ1dHRvbic+TG9nb3V0PC9idXR0b24+XCJcclxufVxyXG5leHBvcnQgZGVmYXVsdCBsb2dPdXRCdXR0b24iLCJcclxuaW1wb3J0IGNyZWF0ZVJlZ2lzdHJhdGlvbkZvcm0gZnJvbSBcIi4vY3JlYXRlUmVnaXN0cmF0aW9uRm9ybVwiXHJcbmltcG9ydCBhZGROZXdVc2VyIGZyb20gXCIuL3JlZ2lzdGVyTmV3VXNlclwiXHJcbmltcG9ydCBBUElNYW5hZ2VyIGZyb20gXCIuL2RhdGFNYW5hZ2VyXCJcclxuaW1wb3J0IGFkZEV2ZW50IGZyb20gXCIuL2FkZEV2ZW50Rm9ybVwiXHJcblxyXG5cclxuLy8gY29uc29sZS5sb2coXCJoaVwiKVxyXG4vLyBjcmVhdGVSZWdpc3RyYXRpb25Gb3JtKClcclxuXHJcbi8vIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcmVnaXN0ZXJVc2VyXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBldmVudCA9PiB7XHJcbi8vICAgICBhZGROZXdVc2VyKClcclxuLy8gfSlcclxuXHJcbi8vIGFkZEV2ZW50KClcclxuLy8gaW1wb3J0IGNyZWF0ZUxvZ2luRm9ybSBmcm9tIFwiLi9jcmVhdGVMb2dpbkZvcm1cIlxyXG5cclxuLy8gY3JlYXRlTG9naW5Gb3JtKClcclxuXHJcblxyXG5pbXBvcnQge2NyZWF0ZUxhbmRpbmdQYWdlLCBjaGFuZ2VQYWdlfSBmcm9tIFwiLi9jcmVhdGVMYW5kaW5nUGFnZVwiXHJcbmltcG9ydCBsb2dPdXRCdXR0b24gZnJvbSBcIi4vbG9nb3V0XCJcclxuaW1wb3J0IHNlc3Npb25TdG9yYWdlRGVsZXRlIGZyb20gXCIuL3Nlc3Npb25TdG9yYWdlXCJcclxuaW1wb3J0IGFkZFRhc2sgZnJvbSBcIi4vYWRkVGFza0Zvcm1cIlxyXG5pbXBvcnQgY3JlYXRlVGFzayBmcm9tICBcIi4vc3VibWl0QWRkVGFza1wiXHJcbmltcG9ydCBwcmludFRhc2tzVG9Eb20gZnJvbSBcIi4vdGFza1ByaW50VG9Eb21cIlxyXG5cclxuXHJcbi8vIGNyZWF0ZUxhbmRpbmdQYWdlKClcclxuLy8gY2hhbmdlUGFnZS5saXN0ZW5Gb3JFdmVudCgpXHJcblxyXG4vLyBsZXQgaWQgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwidXNlcklkXCIpXHJcbi8vIGFsZXJ0KGlkKVxyXG5cclxuXHJcbi8vIGxvZ091dEJ1dHRvbigpXHJcbi8vIHNlc3Npb25TdG9yYWdlRGVsZXRlKClcclxuLy8gYWRkVGFzaygpXHJcbi8vIGNyZWF0ZVRhc2soKVxyXG5cclxuXHJcbnByaW50VGFza3NUb0RvbSgpIiwiLy8gaW1wb3J0IEFQSU1hbmFnZXIgZnJvbSBcIi4vZGF0YU1hbmFnZXJcIlxyXG5sZXQgYWRkTmV3VXNlciA9ICgpID0+IHtcclxuXHJcblxyXG4gICAgbGV0IG5ld1VzZXIgPSB7fVxyXG4gICAgbGV0IHVzZXJOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN1c2VyTmFtZVwiKS52YWx1ZVxyXG4gICAgbGV0IHVzZXJFbWFpbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdXNlckVtYWlsXCIpLnZhbHVlXHJcbiAgICBsZXQgdXNlclBhc3N3b3JkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN1c2VyUGFzc3dvcmRcIikudmFsdWVcclxuICAgIEFQSU1hbmFnZXIuZ2V0VXNlcnMoKS50aGVuKCh1c2VyQXJyYXkpID0+IHtcclxuICAgICAgICBpZiAodXNlck5hbWUgPT09IFwiXCIgfHwgdXNlckVtYWlsID09PSBcIlwiIHx8IHVzZXJQYXNzd29yZCA9PT0gXCJcIikge1xyXG4gICAgICAgICAgICBhbGVydChcIlBsZWFzZSBmaWxsIGluIGFsbCBpbmZvcm1hdGlvblwiKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICBuZXdVc2VyLnVzZXJuYW1lID0gdXNlck5hbWVcclxuICAgICAgICAgICAgbmV3VXNlci5lbWFpbEFkZHJlc3MgPSB1c2VyRW1haWxcclxuICAgICAgICAgICAgbmV3VXNlci5wYXNzd29yZCA9IHVzZXJQYXNzd29yZFxyXG4gICAgICAgICAgICBBUElNYW5hZ2VyLnBvc3ROZXdVc2VyKG5ld1VzZXIpXHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdXNlck5hbWVcIikudmFsdWUgPSBcIlwiXHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdXNlckVtYWlsXCIpLnZhbHVlID0gXCJcIlxyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3VzZXJQYXNzd29yZFwiKS52YWx1ZSA9IFwiXCJcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IGFkZE5ld1VzZXJcclxuLy8gbGV0IG5ld0N1c3RvbWVyT2JqZWN0ID0gKCkgPT4ge1xyXG5cclxuLy8gICAgIGxldCBuZXdVc2VyID0ge31cclxuLy8gICAgIGxldCB1c2VyTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdXNlck5hbWVcIikudmFsdWVcclxuLy8gICAgIGxldCB1c2VyRW1haWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3VzZXJFbWFpbFwiKS52YWx1ZVxyXG4vLyAgICAgbGV0IHVzZXJQYXNzd29yZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdXNlclBhc3N3b3JkXCIpLnZhbHVlXHJcbi8vICAgICBuZXdVc2VyLnVzZXJOYW1lID0gdXNlck5hbWVcclxuLy8gICAgIG5ld1VzZXIuZW1haWxBZGRyZXNzID0gdXNlckVtYWlsXHJcbi8vICAgICBuZXdVc2VyLnBhc3N3b3JkID0gdXNlclBhc3N3b3JkXHJcbi8vICAgICBBUElNYW5hZ2VyLnBvc3ROZXdVc2VyKG5ld1VzZXIpXHJcbi8vIH1cclxuXHJcblxyXG4vLyBleHBvcnQgZGVmYXVsdCBuZXdDdXN0b21lck9iamVjdFxyXG5cclxuIiwiLy91c2VyZElEIHdpbGwgYmUgc3RvcmVkIGFzIGFuIGFyZ3VtZW50LCBhbmQgc3RvcmVkIGluIGEgdmFyaWFibGVcclxuLy8gY29uc3QgY3JlZGVudGlhbHMgPSBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIlRyZXZhblwiLCBcIllvdW5nXCIpXHJcblxyXG4vL0Z1bmN0aW9uIHdpbGwgY2xlYXIgc2Vzc2lvblN0b3JhZ2UgYWZ0ZXIgdGhlIGxvZ291dCBidXR0aW4gaXMgY2xpY2tlZFxyXG5jb25zdCBzZXNzaW9uU3RvcmFnZURlbGV0ZSA9ICgpID0+IHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbG9nT3V0QnV0dG9uXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLmNsZWFyKClcclxuICAgICAgICBsb2NhdGlvbiA9IGxvY2F0aW9uO1xyXG4gICAgIH1cclxuICAgIClcclxufVxyXG5leHBvcnQgZGVmYXVsdCBzZXNzaW9uU3RvcmFnZURlbGV0ZSIsImltcG9ydCBjcmVhdGVUYXNrIGZyb20gXCIuL2FkZFRhc2tPYmplY3RDcmVhdGVcIlxyXG5cclxuLy9DcmVhdGVzIGFkZFRhc2sgT2JqZWN0IGFuZCBzZW5kcyB0byBKU09OXHJcblxyXG4gICAgbGV0IHBvc3ROZXdUYXNrID0gKCkgPT4ge1xyXG4gICAgLy8gSW5wdXQgaXMgZ2F0aGVyZWQgZnJvbSB0aGUgc2VsZWN0ZWQgSURzIGFuZCBzdG9yZWQgaW4gYSB2YXJpYWJsZVxyXG4gICAgY29uc3QgdGFza05hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2tOYW1lX19pbnB1dFwiKS52YWx1ZVxyXG4gICAgY29uc3QgdGFza0RhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2tEYXRlX19pbnB1dFwiKS52YWx1ZVxyXG4gICAgY29uc3QgY29tcGxldGVkPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbXBsZXRlZF9faW5wdXRcIikuY2hlY2tlZFxyXG5cclxuICAgIGNvbnN0IG5ld1Rhc2tPYmplY3QgPSBjcmVhdGVUYXNrKHRhc2tOYW1lLCB0YXNrRGF0ZSwgY29tcGxldGVkKVxyXG4gICAgY29uc29sZS5sb2cobmV3VGFza09iamVjdClcclxuICAgIC8vIGFwaU1hbmFnZXIucG9zdFN1Ym1pdChuZXdUYXNrT2JqZWN0KVxyXG5cclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHBvc3ROZXdUYXNrIiwiaW1wb3J0IEFQSU1hbmFnZXIgZnJvbSBcIi4vZGF0YU1hbmFnZXJcIlxyXG5cclxuZnVuY3Rpb24gcHJpbnRUYXNrc1RvRG9tKCl7XHJcblxyXG4gICAgQVBJTWFuYWdlci5nZXRUYXNrcygpLnRoZW4oKHRhc2tzKT0+e1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRhc2tzKVxyXG4gICAgICAgIGxldCBwcmludFBsYWNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vdXRwdXRcIilcclxuICAgICAgICB0YXNrcy5mb3JFYWNoKHRhc2sgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0YXNrKVxyXG4gICAgICAgICAgICBwcmludFBsYWNlLmlubmVySFRNTCArPSBgXHJcbiAgICAgICAgICAgICAgICAgICAgPGgxPiR7dGFzay50YXNrTmFtZX08L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPiR7dGFzay5leHBlY3RlZENvbXBsZXRpb25EYXRlfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8cD4ke3Rhc2suY29tcGxldGVkfTwvcD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYFxyXG4gICAgICAgIH0pXHJcblxyXG5cclxufSlcclxuICAgIH1cclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcHJpbnRUYXNrc1RvRG9tIiwiXHJcblxyXG5jb25zdCB1c2VySFRNTCA9ICh1c2VyT2JqZWN0KSA9PiB7XHJcbiAgICByZXR1cm4gYFxyXG4gICAgICAgIDxzZWN0aW9uPlxyXG4gICAgICAgIDxoMz5IRUxMTyAke3VzZXJPYmplY3QudXNlcm5hbWV9ISBXZWxjb21lIHRvIFlvdXIgRGFzaEJvYXJkITwvaDM+XHJcbiAgICBgXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgdXNlckhUTUxcclxuIl19

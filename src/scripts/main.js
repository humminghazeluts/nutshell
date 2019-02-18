
import createRegistrationForm from "./createRegistrationForm"
import addNewUser from "./registerNewUser"
import APIManager from "./dataManager"
import displayUserView from "./UserView"
import displayNewsForm from "./displayNewForm"
import addEvent from "./addEventForm"
import displayEvent from "./displayEvent"
import printEventToDOM from "./printEventToDom"

// displayUserView()
// displayNewsForm()
// displayNewsForm()
// console.log("hi")
// createRegistrationForm()

// document.querySelector("#registerUser").addEventListener("click", event => {
//     addNewUser()
//     console.log("New user added!")
// })

// addEvent()
// document.querySelector("#registerUser").addEventListener("click", event => {
//     addNewUser()
// })

// import createLoginForm from "./createLoginForm"

// createLoginForm()


import {createLandingPage, changePage} from "./createLandingPage"
import logOutButton from "./logout"
import sessionStorageDelete from "./sessionStorage"
import addTask from "./addTaskForm"
import createTask from  "./submitAddTask"
import printTasksToDom from "./taskPrintToDom"

// createLandingPage()
// changePage.listenForEvent()


createLandingPage()
changePage.listenForEvent()



// logOutButton()
// sessionStorageDelete()
// addTask()
// createTask()
// addEvent()
// displayEvent()
// logOutButton()
// sessionStorageDelete()
// addTask()
// createTask()

printTasksToDom()
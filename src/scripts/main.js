
import createRegistrationForm from "./createRegistrationForm"
import addNewUser from "./registerNewUser"
import APIManager from "./dataManager"
import displayUserView from "./UserView"
import displayNewsForm from "./displayNewForm"
import addEvent from "./addEventForm"

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
// import createLoginForm from "./createLoginForm"

// createLoginForm()


import {createLandingPage, changePage} from "./createLandingPage"
import logOutButton from "./logout"
import sessionStorageDelete from "./sessionStorage"
import addTask from "./addTaskForm"
import createTask from  "./submitAddTask"

// createLandingPage()
// changePage.listenForEvent()

createLandingPage()
changePage.listenForEvent()

let id = sessionStorage.getItem("userId")
alert(id)


logOutButton()
sessionStorageDelete()
addTask()
createTask()
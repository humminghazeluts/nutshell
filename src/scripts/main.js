
import createRegistrationForm from "./createRegistrationForm"
import addNewUser from "./registerNewUser"
import APIManager from "./dataManager"
import addEvent from "./addEventForm"


console.log("hi")
createRegistrationForm()

document.querySelector("#registerUser").addEventListener("click", event => {
    addNewUser()
})

addEvent()
// import createLoginForm from "./createLoginForm"

// createLoginForm()


import {createLandingPage, changePage} from "./createLandingPage"
import logOutButton from "./logout"
import sessionStorageDelete from "./sessionStorage"
import addTask from "./addTaskForm"
import createTask from  "./submitAddTask"
import printTasksToDom from "./taskPrintToDom"


createLandingPage()
changePage.listenForEvent()

let id = sessionStorage.getItem("userId")
alert(id)


logOutButton()
sessionStorageDelete()
addTask()
createTask()



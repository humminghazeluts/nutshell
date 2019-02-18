
import createRegistrationForm from "./createRegistrationForm"
import addNewUser from "./registerNewUser"
import APIManager from "./dataManager"
import addEvent from "./addEventForm"
import displayEvent from "./displayEvent"


console.log("hi")
createRegistrationForm()

document.querySelector("#registerUser").addEventListener("click", event => {
    addNewUser()
})

// import createLoginForm from "./createLoginForm"

// createLoginForm()


import {createLandingPage, changePage} from "./createLandingPage"
import logOutButton from "./logout"
import sessionStorageDelete from "./sessionStorage"
import addTask from "./addTaskForm"
import createTask from  "./submitAddTask"



createLandingPage()
changePage.listenForEvent()


addEvent()
displayEvent()
logOutButton()
sessionStorageDelete()
addTask()
createTask()

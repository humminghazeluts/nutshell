
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



createLandingPage()
changePage.listenForEvent()

let id = sessionStorage.getItem("userId")
alert(id)



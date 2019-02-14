import createRegistrationForm from "./createRegistrationForm"
import addNewUser from "./registerNewUser"


console.log("hi")
createRegistrationForm()

document.querySelector("#registerUser").addEventListener("click", event => {
    addNewUser()
})

// import createLoginForm from "./createLoginForm"

// createLoginForm()

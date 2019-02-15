/*
    Author: Abbey
    Name: createLandingPage.js
    Purpose: landing page that allows the user to choose between registering as a new member or logging in
*/

import createLoginForm from "./createLoginForm"
import createRegistrationForm from "./createRegistrationForm"

const createLandingPage = () => {
    document.querySelector(".output").innerHTML += `
        <h1>Welcome to Humming Hazelnuts Dashboard Page </h1>
        <div class="buttonSection">
        <button id="loginButton">Login</button>
        <button id="registerButton">Register</button>
        </div>
    `
}


const changePage = {

    listenForEvent: () => {

        document.querySelector(".output").addEventListener("click", () => { 
            if (event.target.id.startsWith("loginButton")) {
                createLoginForm() //should the submit Login.js just be a function here??
            } else if (event.target.id.startsWith("registerButton")) {
                createRegistrationForm()
            }
        })

    }
}


export { createLandingPage, changePage }
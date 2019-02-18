/*
    Author: Abbey
    Name: createLoginForm.js
    Purpose: creates the HTML for the login form and the listening event to verify correct username and password 
            was entered. Then executes the user.js based off the current user logged in.
*/
import displayUserView from "./UserView"
import APIManager from "./dataManager"
import userHTML from "./user"

const printCurrentUser = currentUserHTML => {
    document.querySelector(".output").innerHTML = currentUserHTML
    let id = sessionStorage.getItem("userId")
    alert(id)
}

const createLoginForm = () => {
    document.querySelector(".output").innerHTML = `
    <section class= "loginContainer">
    <div id="loginForm">
        <h1>🌰 Login! Who needs Facebook when you have Humming Hazelnuts 🌰</h1>
        <label for="name">Username: </label>
        <input id="username" type="text">
        <label for="password">Password:</label>
        <input type="password" id="password" name="password">
        <button id="loginButton">Submit</button>
        </div>
        </section>
    `
    document.querySelector("#loginButton").addEventListener("click", () => {
        const username = document.getElementById("username").value
        const password = document.getElementById("password").value

        APIManager.getUsers()
            .then(users => {
                users.forEach(user => {
                    if (user.username === username && user.password === password) {
                        sessionStorage.setItem("userId", user.id)
                        let currentUserHTML = userHTML(user)
                        printCurrentUser(currentUserHTML)
                        displayUserView()
                    }
                })
            })
    })
}

export default createLoginForm  
/*
    Author: Abbey
    Name: createLoginForm.js
    Purpose: creates the HTML for the login form and the listening event to verify correct username and password was entered
*/

import APIManager from "./dataManager"

const createLoginForm = () => {
    document.querySelector(".output").innerHTML = `
        <h1>Login</h1>
        <label for="name">Username: </label>
        <input id="username" type="text">
        <label for="password">Password:</label>
        <input type="password" id="password" name="password">
        <button id="loginButton">Submit</button>
    `
        document.querySelector("#loginButton").addEventListener("click", () => {
            const username = document.getElementById("username").value
            const password = document.getElementById("password").value

            APIManager.getUsers() 
                .then(users => {
                    users.forEach(user => {
                        console.log(user)
                        if (user.username === username && user.password === password)  {
                            console.log("logged in")
                            sessionStorage.setItem(user.username, user.password)
                        } else {
                            alert("Please enter valid username and password")
                        }
                    })
                })
        })
    }


export default createLoginForm  
/*
    Author: Abbey
    Name: createLoginForm.js
    Purpose: creates the HTML for the login form
*/

const createLoginForm = () => {
    document.querySelector(".output").innerHTML = `
        <h1>Login</h1>
        <label for="name">Username: </label>
        <input id="username" type="text">
        <label for="password">Password:</label>
        <input type="password" id="password" name="password">
        <button id="loginButton">Submit</button>
    `
}

export default createLoginForm
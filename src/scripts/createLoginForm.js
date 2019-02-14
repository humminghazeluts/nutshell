//add comment
const createLoginForm = () => {
    document.querySelector("#loginFormContainer").innerHTML = `
        <h1>Login</h1>
        <label for="name">Username: </label>
        <input id="name" type="text">
        <label for="password">Password:</label>
        <input type="password" id="password" name="password">
        <button id="loginButton">Submit</button>
    `
}

export default createLoginForm
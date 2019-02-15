
let createRegistrationForm = (location) => {
    location = document.querySelector(".output")
    let contactFormHTML = `
<div>
<fieldset>
    <label for="userName">User Name</label>
    <input type="text" name="userName" id="userName">
</fieldset>
<fieldset>
    <label for="userEmail">Email</label>
    <input type="text" name="userEmail" id="userEmail">
</fieldset>
<fieldset>
    <label for="userPassword">Password</label>
    <input type="password" name="userPassword" id="userPassword">
</fieldset>

<button id="registerUser">
Register!
</button>
    </div>
`
location.innerHTML = contactFormHTML
document.querySelector("#registerUser").addEventListener("click", event => {
    addNewUser()
    console.log("New user added!")
})
}

export default createRegistrationForm
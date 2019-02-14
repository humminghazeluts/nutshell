
let createRegistrationForm = (location) => {
    location = document.querySelector(".output")
    let contactFormHTML = `
<form>
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

<button id="createCustomerObject" class="btn btn-info people">
    Add Customer
</button>
</form>
`
location.innerHTML = contactFormHTML
}

export default createRegistrationForm
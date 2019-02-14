import APIManager from "./dataManager"

let newCustomerObject = () => {

    let newUser = {}
    let userName = document.querySelector("#userName").value
    let userEmail = document.querySelector("#userEmail").value
    let userPassword = document.querySelector("#userPassword").value
    if (userName !== "" && userEmail !== "" ) {
        newUser.userName = userName
        newUser.emailAddress = userEmail
        newUser.password = userPassword
        APIManager.postNewUser(newUser)
    } 
    
}
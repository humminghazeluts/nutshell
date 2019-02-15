import APIManager from "./dataManager"

let addNewUser = () => {


    let newUser = {}
    let userName = document.querySelector("#userName").value
    let userEmail = document.querySelector("#userEmail").value
    let userPassword = document.querySelector("#userPassword").value
    APIManager.getUsers().then((userArray) => {
        if (userName === "" || userEmail === "" || userPassword === "") {
            alert("Please fill in all information")
        } else {

            newUser.username = userName
            newUser.emailAddress = userEmail
            newUser.password = userPassword
            APIManager.postNewUser(newUser)
            document.querySelector("#userName").value = ""
            document.querySelector("#userEmail").value = ""
            document.querySelector("#userPassword").value = ""
        }
    })
}
export default addNewUser
import APIManager from "./dataManager"
let addNewUser = () => {


    let newUser = {}
    let userName = document.querySelector("#userName").value
    let userEmail = document.querySelector("#userEmail").value
    let userPassword = document.querySelector("#userPassword").value
    let allFilledIn = false
    let uniqueUserName = false
    let uniqueEmail = false
    APIManager.getUsers().then((userArray) => {
        if (userName === "" || userEmail === "" || userPassword === "") {
            alert("Please fill in all information")
        } else {
            allFilledIn = true
        }
        for (let i = 0; i < userArray.length; i++) {
            let theUserName = userArray[i].username;
            let theEmail = userArray[i].emailAddress;
            if (theUserName === userName) {
                alert("Please use a different usernsame")
                uniqueUserName === false
                uniqueEmail === false
                return

            } else {
                uniqueUserName = true
            }
            if (theEmail === userEmail) {
                alert("Please use a different email address")
                uniqueEmail === false
                uniqueUserName === false
                return

            } else {
                uniqueEmail = true
            }
        }

        console.log(allFilledIn, uniqueEmail, uniqueUserName)
        if (allFilledIn === true && uniqueUserName === true && uniqueEmail === true) {
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



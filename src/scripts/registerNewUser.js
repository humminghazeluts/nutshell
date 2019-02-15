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
        // userArray.forEach(user => {
        //     let USERNAME = user.username
        //     let EMAIL = user.emailAddress
        //     if (USERNAME === userName) {
        //         alert("name already in use")
                
        //     } if (EMAIL === userEmail) {
        //         alert("email already in use")
                
        //     } else if (userName !== "" || userEmail !== "" || userPassword === "") {

        //     }
        // });
        // console.log(userArray)
        // for (let i = 0; i < userArray.length; i++) {
        //     if (userName === "" || userEmail === "" || userPassword === "") {
        //         alert("Please fill in all information")
        //     let USERNAME = userArray[i].username;
        //     let EMAIL = userArray[i].emailAddress
        //     // console.log(USERNAME)
        //     // console.log(EMAIL)

        //     }
        //     // else {
        //     //     break

        //     // }

        // }
    })
}
export default addNewUser
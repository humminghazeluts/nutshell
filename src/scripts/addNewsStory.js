import APIManager from "./dataManager"
let postNewsStory = () => {

    let today = new Date()
    let date = today.getFullYear()+ "-" +(today.getMonth()+1)+"-"+today.getDate()
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()
    let dateTime = date+" " + time
    console.log(dateTime)

    let newStory = {}
    let synopsis = document.querySelector("#synopsis").value
    let URL = document.querySelector("#storyURL").value

    newStory.url = URL
    newStory.synopsis = synopsis
    newStory.currentTimeStamp = dateTime
    newStory.userId = 1
    APIManager.postNewArticle(newStory)
    // let userPassword = document.querySelector("#userPassword").value
    // APIManager.postNewArticle().then((userArray) => {
    //     if (userName === "" || userEmail === "" || userPassword === "") {
    //         alert("Please fill in all information")
    //     } else {

    //         newUser.username = userName
    //         newUser.emailAddress = userEmail
    //         newUser.password = userPassword
    //         APIManager.postNewUser(newUser)
    //         document.querySelector("#userName").value = ""
    //         document.querySelector("#userEmail").value = ""
    //         document.querySelector("#userPassword").value = ""
    //     }
    // })
}
export default postNewsStory
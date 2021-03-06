import APIManager from "./dataManager"
import displayNewsStories from "./displayNewStories";
let postNewsStory = () => {
    

    let today = new Date()
    let date = today.getFullYear()+ "-" +(today.getMonth()+1)+"-"+today.getDate()
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()
    let dateTime = date+" " + time
    console.log(dateTime)

    let newStory = {}
    let newsTitle = document.querySelector("#newsTitle").value
    let synopsis = document.querySelector("#synopsis").value
    let URL = document.querySelector("#storyURL").value
    
    newStory.newsTitle = newsTitle
    newStory.url = URL
    newStory.synopsis = synopsis
    newStory.currentTimeStamp = dateTime
    newStory.userId = Number(sessionStorage.getItem("userId"))
    APIManager.postNewArticle(newStory).then(displayNewsStories)
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
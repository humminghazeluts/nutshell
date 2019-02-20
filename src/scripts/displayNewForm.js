import displayUserView from "./UserView"
import postNewsStory from "./addNewsStory"
import displayNewStories from "./displayNewStories"
import changeNews from "./editAndDeleteNews";
import APIManager from "./dataManager";

let displayNewsForm = () => {
    // let today = new Date()
    // let date = today.getFullYear()+ "-" +(today.getMonth()+1)+"-"+today.getDate()
    // var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()
    // let dateTime = date+" " + time
    // console.log(dateTime)
    let newsFormDisplayBox = document.querySelector("#newsFormOutput")
    // let newsFormDisplayBox = document.querySelector(".output")
    let newsFormHTML = `
    <div>
    <fieldset id="newsContainer">
    <input type="hidden" id="articleId">
    <label for="newsTitle">News Title</label>
    <input type="text" name="newsTitle" id="newsTitle">
        <label for="synopsis">Story Synposis</label>
        <textarea type="text" name="synopsis" id="synopsis"></textarea>
        <label for="storyURL">Story URL</label>
        <input type="text" name="storyURL" id="storyURL">
    </fieldset>


<button id="addNewStory">
Add News Story!
</button>
    </div>
    `
    newsFormDisplayBox.innerHTML = newsFormHTML
    document.querySelector("#addNewStory").addEventListener("click", event => {
        let articledId = document.querySelector("#articleId").value
        console.log(articledId)
        let buttonText = document.querySelector("#addNewStory").textContent
        console.log(articledId)
        if (buttonText === "Update") {  
            let today = new Date()
            let date = today.getFullYear()+ "-" +(today.getMonth()+1)+"-"+today.getDate()
            var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()
            let dateTime = date+" " + time
            
           let newsTitle = document.getElementById("newsTitle").value
           let synopsis =  document.getElementById("synopsis").value 
           let url = document.getElementById("storyURL").value 
           let userId = Number(sessionStorage.getItem("userId"))
        
            const newArticleObject = {
                newsTitle : newsTitle,
                synopsis : synopsis, 
                url: url,
                currentTimeStamp: dateTime,
                userId: userId
            }
            console.log(newArticleObject)
            console.log(newArticleObject)
            APIManager.editArticle(articledId, newArticleObject)
            .then(() => {
                displayNewStories()
            }).then(()=> {
                document.querySelector("#addNewStory").textContent = "Add News Story"
            })
            
        } else {
            postNewsStory()
            event.preventDefault()
            console.log("New story added!")
        }


    })
   
}

export default displayNewsForm
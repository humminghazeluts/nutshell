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
    <fieldset>
    <input type="hidden" id="articleId">
        <label for="synopsis">Story Synposis</label>
        <textarea type="text" name="synopsis" id="synopsis"></textarea>
    </fieldset>
<fieldset>
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
           let synopsis =  document.getElementById("synopsis").value 
           let url = document.getElementById("storyURL").value 
            
            //capture the values of the new fields and store it into a new object
            const newArticleObject = {
                synopsis : synopsis, 
                url: url,
                currentTimeStamp: "12345",
                userId: 2
            }
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
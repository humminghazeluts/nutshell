import displayUserView from "./UserView"

let displayNewsForm = () => {
    let today = new Date()
    let date = today.getFullYear()+ "-" +(today.getMonth()+1)+"-"+today.getDate()
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()
    let dateTime = date+" " + time
    console.log(dateTime)
    let newsFormDisplayBox = document.querySelector("#newsFormOutput")
    // let newsFormDisplayBox = document.querySelector(".output")
    let newsFormHTML = `
    <div>
    <fieldset>
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
    
}

export default displayNewsForm
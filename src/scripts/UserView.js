import displayNewsForm from "./displayNewForm"
import addEvent from "./addEventForm"
import addTask from "./addTaskForm";
import logOutButton from "./logout"
import sessionStorageDelete from "./sessionStorage"
import displayNewsStories from "./displayNewStories"
import printTasksToDom from "./taskPrintToDom"

let displayUserView = () => {
    let output = document.querySelector(".output")
    let userViewHTML = `
    <h1>Hi user!</h1>
    <div id="eventFormOutput"></div>
    <div id="newsFormOutput"></div>
    <div id="taskFormOutput"></div>
    <div id="logUserOut"></div>
    <div id="newsStoriesDisplay">Stories go here</div>
    <div id="taskDisplay"></div>
    <div id="eventDisplay"></div>`
    output.innerHTML = userViewHTML
    displayNewsForm()
    addEvent()
    addTask()
    logOutButton()
    sessionStorageDelete()
    displayNewsStories()
    printTasksToDom()

    
}

export default displayUserView
import displayNewsForm from "./displayNewForm"
import addEvent from "./addEventForm"
import addTask from "./addTaskForm";
import logOutButton from "./logout"
import sessionStorageDelete from "./sessionStorage"
import displayNewsStories from "./displayNewStories"
import printTasksToDom from "./taskPrintToDom"
import createChatRoom from "./messageForm"
import editMessage from "./editMessage"
import addFriend from "./addFriend";
import displayFriendsList from "./displayFriendList";
import changeNews from "./editAndDeleteNews";

import seeEvents from "./printEventToDom"
import changeEvent from "./changeEvent"
import searchForFriendDisplay from "./searchForFriend";

let displayUserView = () => {
    let output = document.querySelector(".output")
    let userViewHTML = `
    <h1>Hi ${sessionStorage.getItem("userName")}!</h1>
    <div id="eventFormOutput"></div>
    <div id="newsFormOutput"></div>
    <div id="taskFormOutput"></div>
    <div id="logUserOut"></div>
    <div id="newsStoriesDisplay" class="displays">Stories go here</div>
    <div id="taskDisplay" class="displays">Tasks</div>
    <div id="eventDisplay" class="displays">Events</div>
    <div id="messageDisplay"></div>
    <div id="searchForFriend"></div>
    <div id="friendList"></div>`
    output.innerHTML = userViewHTML
    seeEvents()
    changeEvent()
    displayNewsForm()
    addEvent()
    addTask()
    logOutButton()
    sessionStorageDelete()
    displayNewsStories()
    createChatRoom()
    printTasksToDom()
    editMessage()
    addFriend()
    displayFriendsList()
    searchForFriendDisplay()
    changeNews()
    

}

export default displayUserView
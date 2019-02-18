
//new message should post in the chat area, prepended with the user's name
//the most recent message should always be made visible at the bottom of the chat history
//include scroll down?
//there should be an affordance to edit logged in user's chat message and save
import APIManager from "./dataManager"

const printMessage = currentMessageHTML => {
    document.querySelector(".output").innerHTML = currentMessageHTML
}


const createMessageForm = () => {
    document.querySelector(".output").innerHTML = `
    <section class= "chatRoomContainer">
    <div id="messageForm">
        <h1>Chat Room</h1>
        <h2>Hello (username here) </h2>
        <label for="message">Enter New Message:</label>
        <textarea id="messageText" rows="4" cols="50" placeholder="Enter text here"></textarea>
        <button id="messageButton">Submit</button>
        </div>
        </section>
    `
    document.querySelector("#messageButton").addEventListener("click", () => {
        const message = document.getElementById("messageText").value

        const newMessage = {
            message: message
        }
        APIManager.postNewMessage(newMessage)
        APIManager.getMessages()
        printMessage(newMessage)
    })
}

export default createMessageForm
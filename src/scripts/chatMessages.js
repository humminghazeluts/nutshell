//message form with a new message text area ..include placeholder
//new message should post in the chat area, prepended with the user's name
//the most recent message should always be made visible at the bottom of the chat history
//include scroll down?
//there should be an affordance to edit logged in user's chat message and save
//by public, it should be able to display off the messages within the API?
const printMessage = currentMessageHTML => {
    document.querySelector(".output").innerHTML = currentMessageHTML
}

const createMessageForm = () => {
    document.querySelector(".output").innerHTML = `
    <section class= "chatRoomContainer">
    <div id="messageForm">
        <h1>Chat Room</h1>
        <label for="message">Enter New Message:</label>
        <textarea id="messageText" rows="4" cols="50" placeholder="Enter text here"></textarea>
        <button id="messageButton">Submit</button>
        </div>
        </section>
    `
    document.querySelector("#messageButton").addEventListener("click", () => {
        //is there another variable I need to call??
        const message = document.getElementById("messageText").value
        printMessage(message)
    })
}

export default createMessageForm
/*
    Author: Abbey
    Name: messageForm.js
    Purpose: displays form, posts input to database, gets all messages from database, plus put and delete methods
*/

//new message should post in the chat area, prepended with the user's name
//the most recent message should always be made visible at the bottom of the chat history
//there should be an affordance to edit logged in user's chat message and save

// import APIManager from "./dataManager"
// import messageHTML from "./message"




// const createChatRoom = () => {
    
//     document.querySelector(".output").innerHTML = `
//     <section class= "chatRoomContainer">
//     <div id="messageList">These are the messages</div>
//     <div id="messageForm">
//     <h1>Chat Room</h1>
//     <h2>Hello (username here) </h2>
//     <label for="message">Enter New Message:</label>
//     <textarea id="messageText" rows="4" cols="50" placeholder="Enter text here"></textarea>
//     <button id="messageButton">Submit</button>
//     </div>
//     </section>
//     `
//     const printMessageToDom = message => {  
//         const messageEl = document.querySelector("#messageList")
        
//         messageEl.innerHTML += message
//     }
    
//    let putMessagesinDom = () => {
//     const messageEl = document.querySelector("#messageList")
//     messageEl.innerHTML = ""
//        APIManager.getMessages()
//     .then(messages => {
//         messages.forEach(message => {
//             const html = messageHTML.createMessageListHTML(message)
//             printMessageToDom(html)
//         })
    
//     })
// }
// putMessagesinDom()
//     document.querySelector("#messageButton").addEventListener("click", () => {
//         const message = document.getElementById("messageText").value

//         const newMessage = {
//             messages: message,
//             userId: 1
//         }

//         APIManager.postNewMessage(newMessage).then(()=> {
//             putMessagesinDom()
//         })
//     })
// }

// export default createChatRoom
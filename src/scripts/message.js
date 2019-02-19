/*
    Author: Abbey
    Name: message.js
    Purpose: creates the HTML for the chat room message list
*/
import APIManager from "./dataManager"
const messageHTML = {
    createMessageListHTML: function (newMessage) {
        let userName = sessionStorage.getItem("userName")
        


        return `

        <section id="message--${newMessage.id}"> 
            
            <div id="--${newMessage.user.id}"><strong>${newMessage.user.username}:</strong> ${newMessage.messages}</div>
            <button id="--${newMessage.id}">Edit Message</button>
            
        </section>
        
    `
    }
}

export default messageHTML
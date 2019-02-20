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

        <section> 
            
            <div><strong id="--friend${newMessage.user.id}">${newMessage.user.username}:</strong></div>
            <div>${newMessage.messages}</div>
            <button id="edit--${newMessage.id}">Edit Message</button>
            
        </section>
        
    `
    }
}

export default messageHTML
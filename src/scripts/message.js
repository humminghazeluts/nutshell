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
            
            <div><strong>${newMessage.user.username}:</strong> ${newMessage.messages}</div>
            <button>Edit Message</button>
        </section>
        </hr>
    `
    }
}

export default messageHTML
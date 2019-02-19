/*
    Author: Abbey
    Name: message.js
    Purpose: creates the HTML for the chat room message list
*/

const messageHTML = {
    createMessageListHTML: function (newMessage) { 
        return `

        <section id="message-${newMessage.id}"> 
            <div>${newMessage.messages}</div>
            
        </section>
        </hr>
    `
    }
}

export default messageHTML
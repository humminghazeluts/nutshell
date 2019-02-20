
//new message should post in the chat area, prepended with the user's name
//the most recent message should always be made visible at the bottom of the chat history
//include scroll down?
//there should be an affordance to edit logged in user's chat message and save
import APIManager from "./dataManager"
import messageHTML from "./message"
import buttonText from "./messageButtonStatus"




const createChatRoom = () => {

    let userName = sessionStorage.getItem("userName")
    document.querySelector("#messageDisplay").innerHTML = `
    <section class= "chatRoomContainer">
    <div id="messageList">These are the messages</div>
    <div id="messageForm">
    <h1>Chat Room</h1>
    <h2>Hello ${userName} </h2>
    <label for="message">Enter New Message:</label>
    <textarea id="messageText" rows="4" cols="50" placeholder="Enter text here"></textarea>
    <input type="hidden" id="messageId">
    <button id="messageButton">Post Message</button>
    </div>
    </section>
    `


    const printMessageToDom = message => {
        const messageEl = document.querySelector("#messageList")

        messageEl.innerHTML += message
    }


    let putMessagesinDom = () => {
        const messageEl = document.querySelector("#messageList")
        messageEl.innerHTML = ""
        APIManager.getMessages()
            .then(messages => {
                for (let i = 0; i < messages.length; i++) {
                    let message = messages[i];
                    // console.log(messages.length)
                    if (message.id >= (messages.length-4)) {
                        const html = messageHTML.createMessageListHTML(message)
                        printMessageToDom(html)
                    }

                }
                // messages.forEach(message => {
                //     const html = messageHTML.createMessageListHTML(message)
                //     printMessageToDom(html)
                // })

            })
    }

    putMessagesinDom()



    document.querySelector("#messageButton").addEventListener("click", () => {
        let messagedId = document.getElementById("messageId").value


        const message = document.getElementById("messageText").value

        let userId = Number(sessionStorage.getItem("userId"))
        const newMessage = {
            messages: message,
            userId: userId
        }
        if (messagedId === "") {

            console.log("boop")

            APIManager.postNewMessage(newMessage).then(() => {
                putMessagesinDom()
            }).then(()=> {
                document.querySelector("#messageText").value= ""
            })
        } else {

            console.log("not empty")
            APIManager.editMessage(messageId.value, newMessage).then(putMessagesinDom).then(() => {
                document.getElementById("messageId").value = ""
                
            }).then(()=> {
                document.querySelector("#messageButton").textContent = "Post Message"
            })

        }
    })


}
// else {
//     APIManager.editMessage(newMessage).then(putMessagesinDom)

// }


export default createChatRoom
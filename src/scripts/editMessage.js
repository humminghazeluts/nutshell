import APIManager from "./dataManager"
import buttonText from "./messageButtonStatus"

let editMessage = () => {
    let messageDisplay = document.querySelector("#messageList")
    let messagedId = document.getElementById("messageId")
    let userId = Number(sessionStorage.getItem("userId"))

    messageDisplay.addEventListener("click", event => {
        // buttonText()
        
        if (event.target.id.startsWith("edit--")) {
            console.log("edit clicked")
            
            let messageId = event.target.id.split("--")[1]
            console.log(messageId)
            APIManager.getindividualMessages(messageId).then(response => {
                // console.log(userId)
                // console.log(response.userId)
                if (userId === response.userId) {
                // console.log(response)
                document.getElementById("messageText").value = response.messages;
                document.getElementById("messageId").value = response.id;
                } 
                else {
                    alert("You can't edit another user's messages!")
                }
            })
        }
    })
}

export default editMessage 
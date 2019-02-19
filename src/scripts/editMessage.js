import APIManager from "./dataManager"
import buttonText from "./messageButtonStatus"

let editMessage = () => {
    let messageDisplay = document.querySelector("#messageList")
    let messagedId = document.getElementById("messageId")
    

    messageDisplay.addEventListener("click", event => {
        // buttonText()
        if (event.target.id.startsWith("--")) {
            console.log("edit clicked")
            let messageId = event.target.id.split("--")[1]
            console.log(messageId)
            APIManager.getindividualMessages(messageId).then(response => {
                console.log(response)
                document.getElementById("messageText").value = response.messages;
                document.getElementById("messageId").value = response.id;
            })
        }
    })
}

export default editMessage 
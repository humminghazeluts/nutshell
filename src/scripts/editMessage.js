import APIManager from "./dataManager"

let editMessage = () => {
    let messageDisplay = document.querySelector("#messageList")
    messageDisplay.addEventListener("click", event => {
        if (event.target.id.startsWith("--")) {
            console.log("edit clicked")
            let messageId = event.target.id.split("--")[1]
            console.log(messageId)
            APIManager.getindividualMessages(messageId).then(response => {
                console.log(response)
                document.getElementById("messageText").value = response.messages;
            })
        }
    })
}

export default editMessage 
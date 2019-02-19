
let messagedId = document.getElementById("messageId")


// const message = document.getElementById("messageText")
let buttonText = () => {
    if (messagedId.value === "") {
        document.querySelector("#messageButton").innerHTML = "Submit"
    } else if (messagedId.value !== "") {
        document.querySelector("#messageButton").textContent = "Edit"
    }
}
export default buttonText
const displayEvent = () => {
    document.querySelector(".addEvent").addEventListener("click", () => {
        document.querySelector("#eventName").value
        document.querySelector("#eventDate").value
        document.querySelector("#eventLocation").value
    })
}
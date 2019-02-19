import displayEvent from "./displayEvent";
import APIManager from "./dataManager";
import seeEvents from "./printEventToDOM";

let changeEvent = () => {
    let eventOutputEl = document.querySelector("#eventDisplay")
    eventOutputEl.innerHTML = ""
    eventOutputEl.addEventListener("click", () => {
        if (event.target.id.startsWith("deleteButton--")) {
            let editEventInfo = event.target.id.split("--")[1]
            APIManager
                .deleteEvent(editEventInfo)
                .then(seeEvents)
        } else if (event.target.id.startsWith("editButton--")) {
            let editEventInfo = event.target.id.split("--")[1]

            APIManager.getTasks(editEventInfo).then(response => {
                document.querySelector("#eventName").value = response.nameOfEvent
                document.querySelector("#eventDate").value = response.dateOfEvent
                document.querySelector("#eventLocation").value = response.locationOfEvent
            })
        }
    })
}

export default changeEvent
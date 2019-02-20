
import APIManager from "./dataManager";
import seeEvents from "./printEventToDOM";
import displayEvent from "./displayEvent";

let changeEvent = () => {
    let eventOutputEl = document.querySelector("#eventDisplay")
    eventOutputEl.addEventListener("click", () => {
        if (event.target.id.startsWith("deleteButton--")) {
            eventOutputEl.innerHTML = ""
            let nukeEvent = event.target.id.split("--")[1]
            APIManager
            .deleteEvent(nukeEvent)
            .then(seeEvents)
        } else if (event.target.id.startsWith("editButton--")) {
            let editEventInfo = event.target.id.split("--")[1]

            APIManager.getEvents(editEventInfo).then(response => {
                document.querySelector("#eventName").value = response[0].nameOfEvent
                document.querySelector("#eventDate").value = response[0].dateOfEvent
                document.querySelector("#eventLocation").value = response[0].locationOfEvent
            })
        }
    })
}

export default changeEvent
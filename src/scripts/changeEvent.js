
import APIManager from "./dataManager";
import seeEvents from "./printEventToDOM";

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
            let editEventId = event.target.id.split("--")[1]

            APIManager.getEvents(editEventId).then(response => {
                document.querySelector("#hiddenEventId").value = response.id
                document.querySelector("#eventName").value = response.nameOfEvent
                document.querySelector("#eventDate").value = response.dateOfEvent
                document.querySelector("#eventLocation").value = response.locationOfEvent
                // Change Text Content of Button
                document.querySelector("#addEvent").textContent = "Update Event"
            })
        }
    })
}

export default changeEvent
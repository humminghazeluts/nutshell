import displayEvent from "./displayEvent";
import APIManager from "./dataManager";
import seeEvents from "./printEventToDom"



const addEvent = () => {
    document.querySelector("#eventFormOutput").innerHTML =
        `
    <div>
    <input type="hidden" id="hiddenEventId">
    <fieldset>
        <label for="eventName">Name of Event: </label>
        <input type="text" name="eventName" id="eventName">
    </fieldset>
    <fieldset>
        <label for="eventDate">Date of Event: </label>
        <input type="date" name="eventDate" id="eventDate">
    </fieldset>
    <fieldset>
        <label for="eventLocation">Event Location: </label>
        <input type="text" name="eventLocation" id="eventLocation">
    </fieldset>
    <button id="addEvent">Add Event!</button>
    </div>
    `
    // Click event on the button to add event
    document.querySelector("#addEvent").addEventListener("click", () => {
        // calls function to display info grabbed from the input fields on the click event
        if (event.target.textContent === "Add Event!") {
            displayEvent()
            // prevents buttons from multiplying on refresh
            event.preventDefault()
            alert("New event added")
        } else if
            (event.target.textContent === "Update Event") {
            let eventId = document.querySelector("#hiddenEventId").value
            let userId = parseInt(sessionStorage.getItem("userId"))
        let eventName = document.querySelector("#eventName").value
        let eventDate = document.querySelector("#eventDate").value
        let eventLocation = document.querySelector("#eventLocation").value
        let newEventObject = {
            userId: userId,
            nameOfEvent: eventName,
            dateOfEvent: eventDate,
            locationOfEvent: eventLocation
        }
        APIManager.editEvent(eventId, newEventObject).then(()=>{
            let printEvent = document.querySelector("#eventDisplay")
            printEvent.innerHTML = ""
        }).then(seeEvents)
            }
    }
    )
}


export default addEvent

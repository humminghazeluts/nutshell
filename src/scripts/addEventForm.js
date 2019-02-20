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
            (event.target.textContent === "Update Event")
            let eventId = document.querySelector("#hiddenEventId").value
        let eventName = document.querySelector("#nameOfEvent").value
        let eventDate = document.querySelector("#dateOfEvent").value
        let eventLocation = document.querySelector("#locationOfEvent").value
        let newEventObject = displayEvent(eventName, eventDate, eventLocation)
        APIManager.editEvent(eventId, newEventObject)
        console.log(newEvent).then(seeEvents)
    }
    )
}


export default addEvent

import displayEvent from "./displayEvent";

const addEvent = () => {
document.querySelector(".output").innerHTML =
 `
    <div>
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
    document.querySelector("#addEvent").addEventListener("click", () => {
        displayEvent()
        alert("New event added")
    })
}


export default addEvent

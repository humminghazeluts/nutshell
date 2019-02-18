const addEvent = () => {
document.querySelector("#eventFormOutput").innerHTML =
 `
    <div>
    <fieldset>
        <label for="eventName">Name of Event: </label>
        <input type="text" name="eventName" id="eventName">
    </fieldset>
    <fieldset>
        <label for="eventDate">Date of Event: </label>
        <input type="text" name="eventDate" id="eventDate">
    </fieldset>
    <fieldset>
        <label for="eventLocation">Event Location: </label>
        <input type="text" name="eventLocation" id="eventLocation">
    </fieldset>
    <button id="addEvent">Add Event!</button>
    </div>
    `
}

export default addEvent

import displayEvent from "./displayEvent"
import APIManager from "./dataManager"


APIManager.getEvents()
.then(events => {
    return events
})
.then(events => {
    events.forEach(event => {
        eventOutputEl.innerHTML = printEventToDOM(event)
    });
})


// Function to print Event to the DOM
let eventOutputEl = document.querySelector(".output")
const printEventToDOM = (newEvent) => {
return `
<h3>User Id: ${newEvent.userId}</h3>
<p>Event Name: ${newEvent.eventName}</p>
<p>Event Date: ${newEvent.eventDate}</p>
<p>Event Location:${newEvent.eventLocation}</p>
`
}

export default printEventToDOM
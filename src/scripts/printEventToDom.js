
import APIManager from "./dataManager"

let seeEvents = () => {
APIManager.getEvents()
.then(events => {
    events.forEach(event => {
    console.log(event)
    });
})
}


// Function to print Event to the DOM
let eventOutputEl = document.querySelector("#eventDisplay")

const printEventToDOM = (newEvent) => {
return `
<h3>User Id: ${newEvent.userId}</h3>
<p>Event Name: ${newEvent.nameOfEvent}</p>
<p>Event Date: ${newEvent.dateOfEvent}</p>
<p>Event Location:${newEvent.locationOfEvent}</p>
`
}



export default { seeEvents, printEventToDOM }
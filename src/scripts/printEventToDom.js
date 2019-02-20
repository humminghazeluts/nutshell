
import APIManager from "./dataManager"

let seeEvents = () => {
APIManager.getEvents()
.then(events => {
    events.forEach(event => {
    let printEvent = document.querySelector("#eventDisplay")
    
    if (event.userId === Number(sessionStorage.getItem("userId"))) {
        let eventHTML = `
        <h1>${event.nameOfEvent}</h1>
        <p>${event.dateOfEvent}</p>
        <p>${event.locationOfEvent}</p>
        <button id="editButton--${event.id}">Edit ${event.nameOfEvent}</button>
        <button id="deleteButton--${event.id}">Delete ${event.nameOfEvent}</button>
        `
        printEvent.innerHTML += eventHTML
    }
});
})
}






export default seeEvents
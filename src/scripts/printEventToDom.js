
import APIManager from "./dataManager"

let seeEvents = () => {
APIManager.getEvents()
.then(events => {
    console.log(events)
    events.forEach(event => {
    let printEvent = document.querySelector("#eventDisplay")
    if (event.userId === Number(sessionStorage.getItem("userId")))
    console.log(event)

        printEvent.innerHTML += `
        <h1>${event.nameOfEvent}</h1>
        <p>${event.dateOfEvent}</p>
        <p>${event.locationOfEvent}</p>
        `
    });
})
}






export default seeEvents
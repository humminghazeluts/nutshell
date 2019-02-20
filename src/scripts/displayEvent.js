import APIManager from "./dataManager"
import seeEvents from "./printEventToDOM"


// Event listener on the Add button to get values from the input fields
const displayEvent = () => {
    let outputEventEl = document.querySelector("#eventDisplay")
    let nameOfEvent = document.querySelector("#eventName").value
    let dateOfEvent = document.querySelector("#eventDate").value
    let locationOfEvent = document.querySelector("#eventLocation").value



    // Object saved from click event
    const newEvent = {
        nameOfEvent: nameOfEvent,
        dateOfEvent: dateOfEvent,
        locationOfEvent: locationOfEvent
    }
    
    APIManager.postNewEvent(newEvent).then(() => {
        outputEventEl.innerHTML = ""
        seeEvents()
    })

    }








export default displayEvent
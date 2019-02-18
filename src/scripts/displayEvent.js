import APIManager from "./dataManager"

// Event listener on the Add button to get values from the input fields
    const displayEvent = () => {
            let eventName = document.querySelector("#eventName").value
            let eventDate = document.querySelector("#eventDate").value
            let eventLocation = document.querySelector("#eventLocation").value



            // Object saved from click event
            const newEvent= {
                userId: 1,
                eventName: eventName,
                eventDate: eventDate,
                eventLocation: eventLocation
            }
            APIManager.postNewEvent(newEvent)


    }



export default displayEvent
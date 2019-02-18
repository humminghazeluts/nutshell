import displayNewsForm from "./displayNewForm"
import addEvent from "./addEventForm"

let displayUserView = () => {
    let output = document.querySelector(".output")
    let userViewHTML = `
    <h1>Hi user!</h1>
    <div id="eventFormOutput"></div>
    <div id="newsFormOutput"></div>
    <div id="taskFormOutput"></div>
    <div id="logUserOut"</div>`
    output.innerHTML = userViewHTML
    displayNewsForm()
    addEvent()
    
}

export default displayUserView
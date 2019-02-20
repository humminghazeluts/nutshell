import createTask from "./addTaskObjectCreate"
import APIManager from "./dataManager"
import printTasksToDom from "./taskPrintToDom"

//Creates addTask Object and sends to JSON

    let postNewTask = () => {
    // Input is gathered from the selected IDs and stored in a variable
    // Input fields are queried and based on ID
    const taskName = document.querySelector("#taskName__input").value
    const taskDate = document.querySelector("#taskDate__input").value
    const completed= document.querySelector("#completed__input").checked
    const newTaskObject = createTask(taskName, taskDate, completed)
    APIManager.postNewTask(newTaskObject)
}


export default postNewTask
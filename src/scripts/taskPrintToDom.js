import APIManager from "./dataManager"


function printTasksToDom(){

    APIManager.getTasks().then((tasks)=>{
        let printPlace = document.querySelector("#taskDisplay")
        tasks.forEach(task => {
            if (task.userId === Number(sessionStorage.getItem("userId"))){

                printPlace.innerHTML += `
                        <h1>${task.taskName}</h1>
                        <p>${task.expectedCompletionDate}</p>
                        <p>${task.completed}</p>
                        <button id="deleteTaskButton--${task.id}">Delete</button>
                        <button id="editTaskButton--${task.id}">Edit</button>
                                        `
            }
        })
    })

    document.querySelector("#taskDisplay").addEventListener("click", () => {
        if (event.target.id.startsWith("deleteTaskButton")) {
            const taskId = event.target.id.split("--")[1]
            APIManager.deleteTask(taskId)
            location = location;
        }
    })

    document.querySelector("#taskDisplay").addEventListener("click", () => {
        if (event.target.id.startsWith("editTaskButton")) {
            const taskId = event.target.id.split("--")[1]
            APIManager.getSingleTask(taskId).then(task => {

                //input is stored in event.id in browser
                document.querySelector("#hiddenTaskInput").value = task.id
                document.querySelector("#taskName__input").value = task.taskName
                document.querySelector("#taskDate__input").value = task.expectedCompletionDate
                document.querySelector("#completed__input").value = task.completed
                //Changes buttons add button to say update task when clicked
                document.querySelector("#addTaskButton").textContent = "Update Task"

            })
        }
    })
}


//Get Object user wants to edit, fetch call single object
//take values of objects, insert in inputs
//Change add task button to update task
//user clicks update button, new object is created from edited values, and a PUT replaces the current object



export default printTasksToDom


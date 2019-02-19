import APIManager from "./dataManager"


function printTasksToDom(){

    APIManager.getTasks().then((tasks)=>{
        let printPlace = document.querySelector("#taskDisplay")
        tasks.forEach(task => {
            if (task.userId === Number(sessionStorage.getItem("userId"))){
                console.log(task)

                printPlace.innerHTML += `
                        <h1>${task.taskName}</h1>
                        <p>${task.expectedCompletionDate}</p>
                        <p>${task.completed}</p>
                        <button id="deleteContactButton--${task.userId}">Delete</button>
                                        `

            }
        })
    })

    document.querySelector("#taskDisplay").addEventListener("click", () => {
        if (event.target.id.startsWith("deleteContactButton--")) {
            console.log("success")
            const taskId = event.target.id.split("--")[1]
            console.log(taskId)
            APIManager.deleteTask(taskId)
        }
    })
}




export default printTasksToDom


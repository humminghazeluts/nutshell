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

                                    `
            }
        })
    })
}



export default printTasksToDom
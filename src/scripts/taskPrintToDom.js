import APIManager from "./dataManager"

function printTasksToDom(){

    APIManager.getTasks().then((tasks)=>{
        console.log(tasks)
        let printPlace = document.querySelector(".output")
        tasks.forEach(task => {
            if (task.userId ===){

            }

            console.log(task)
            printPlace.innerHTML += `
                    <h1>${task.taskName}</h1>
                    <p>${task.expectedCompletionDate}</p>
                    <p>${task.completed}</p>

                                `
        })


})
    }



export default printTasksToDom
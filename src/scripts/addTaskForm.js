import APIManager from "./dataManager"
import postNewTask from "./submitAddTask"
import createTask from "./addTaskObjectCreate"
import printTasksToDom from "./taskPrintToDom"

const addTask = () => {
    document.querySelector("#taskFormOutput").innerHTML =
     `
        <div id="taskFormOutput">

            <input type="hidden" id="hiddenTaskInput">

        <fieldset>
            <label for="task"></label>
            <h1> Add Task !</h1>
            <input type="text" name="taskName" id="taskName__input" placeholder="Please Add Task Name...">
        </fieldset>

        <fieldset>
            <form action="/action_page.php">
            <input type="date" name="" id="taskDate__input">
            </form>
        </fieldset>

        <form>
            <input type="checkbox" name="completed" value="" id="completed__input">Completed<br>
        </form>

        <button id="addTaskButton">Add Task!</button>
        </div>
        `
        //Will Post New Obect if button says task
        document.querySelector("#addTaskButton").addEventListener("click", (event) => {
            if(event.target.textContent === "Add Task!"){
                postNewTask()
            }
            //Will edit selected task, and then
            else if (event.target.textContent === "Update Task"){
                const taskId = document.querySelector("#hiddenTaskInput").value
                const taskName = document.querySelector("#taskName__input").value
                const taskDate = document.querySelector("#taskDate__input").value
                const completed= document.querySelector("#completed__input").checked
                const newTaskObject = createTask(taskName, taskDate, completed)
                event.target.textContent = "Add Task!"
                APIManager.editTask(Number(taskId), newTaskObject).then(()=>{
                printTasksToDom()

                })
            }
    } )


}

export default addTask

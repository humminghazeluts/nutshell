import postNewTask from "./submitAddTask"

const addTask = () => {
    document.querySelector("#taskFormOutput").innerHTML =
     `
        <div id="taskFormOutput">

            <input type="hidden" id="userID">

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

        document.querySelector("#addTaskButton").addEventListener("click", (event) => {
            postNewTask()
    } )
}

export default addTask

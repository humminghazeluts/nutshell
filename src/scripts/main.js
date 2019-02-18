
import {createLandingPage, changePage} from "./createLandingPage"
import logOutButton from "./logout"
import sessionStorageDelete from "./sessionStorage"
import addTask from "./addTaskForm"
import createTask from  "./submitAddTask"

createLandingPage()
changePage.listenForEvent()


logOutButton()
sessionStorageDelete()
addTask()
createTask()
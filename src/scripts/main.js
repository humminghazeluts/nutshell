
import {createLandingPage, changePage} from "./createLandingPage"



createLandingPage()
changePage.listenForEvent()

let id = sessionStorage.getItem("userId")
alert(id)



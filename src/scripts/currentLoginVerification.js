import {createLandingPage, changePage} from "./createLandingPage"
import displayUserView from "./UserView"
import sessionStorageDelete from "./sessionStorage"


const currentLoginVerification = () =>{
    if (sessionStorage.getItem("userId") !== null ) {
       displayUserView()
    }
    else {
        createLandingPage()
        changePage.listenForEvent()
    }
}

export default currentLoginVerification
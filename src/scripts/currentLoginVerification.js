import {createLandingPage, changePage} from "./createLandingPage"

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
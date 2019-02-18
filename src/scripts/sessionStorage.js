//userdID will be stored as an argument, and stored in a variable
// const credentials = localStorage.setItem("Trevan", "Young")

//Function will clear sessionStorage after the logout buttin is clicked
const sessionStorageDelete = () => {
    document.querySelector("#logOutButton").addEventListener("click", () => {
        sessionStorage.clear()
        location = location;
     }
    )
}
export default sessionStorageDelete
//userdID will be stored as an argument, and stored in a variable
// const credentials = localStorage.setItem("Trevan", "Young")


// //Logout Button


// function logOutButtonFunction () {
//     const logOutButton = document.createElement("button")
//           logOutButton.id = "logOutButtonId"
//           logOutButton.innerHTML = "Logout"
//           document.body.appendChild(logOutButton)
// }

const logOutButtonFunction = () => {
    outputEl = document.querySelector(".output")
    let buttonHTML = `
    <button id="logOutButtonId>Logout</button>
    `
    outputEl.innerHTML = buttonHTML
}


outputEl.innerHTML += logOutButton()


// //Function will clear sessionStorage after the logout buttin is clicked
// const sessionStorageDelete = () => {
//     document.querySelector("#logOut").addEventListener("click", () => {
//         localStorage.clear(credentials)
//         location = location;
//      }
//     )
// }

// export default sessionStorageDelete
export default logOutButtonFunction
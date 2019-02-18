// import APIManager from "./dataManager";

// const printMessage = currentmessageHTML => {
//     document.querySelector(".output").innerHTML = currentmessageHTML
// }

// const message = (messageObject) => {
//     return `
//         <section>
//             <h3>${messageObject.userId}</h3>
//             <div>${messageObject.message}</div>
//             <button id="deleteButton--${messageObject.id}">Delete ${messageObject.message}</button>
//             <button id="editButton--${messageObject.id}">Edit ${messageObject.message}</button>
//         </section>`
// }

// const messageList = () => {

//     //session storage? 
//     //const userId = document.getElementById("userId").value
//     APIManager.getMessages()
//         .then(
//             (parsedMessages) => {
//                 console.log(parsedMessages)
//             }
//         )
// }

// export default messageList
import APIManager from "./dataManager"
import buttonText from "./messageButtonStatus"

let addFriend = () => {
    // let messageDisplay = document.querySelector("#messageList")
    // let messagedId = document.getElementById("messageId")
    let userId = Number(sessionStorage.getItem("userId"))

    messageDisplay.addEventListener("click", event => {
        // buttonText()

        if (event.target.id.startsWith("--friend")) {
            console.log("add clicked")

            let newFriendId = Number(event.target.id.split("--friend")[1])
            console.log(newFriendId)
            let newFriendship = {
                "friend_1Id": userId,
                "friend_2Id": newFriendId
            }
            APIManager.getfriendShip().then(friendships => {
                console.log(friendships)
                let previousMatch = false
                let alreadyLoggedIn = false
                for (let i = 0; i < friendships.length; i++) {
                    let friend_1 = friendships[i].friend_1Id;
                    let friend_2 = friendships[i].friend_2Id;
                    if ((friend_1 === userId && friend_2 === newFriendId) || (friend_2 === userId && friend_1 === newFriendId)) {
                        alert("Friendship already exists!")
                        previousMatch = true
                        return
                    } else {
                        previousMatch = false
                    }
                    console.log(previousMatch)
                    if (userId === newFriendId) {
                        alert("You can't add yourself!")
                        alreadyLoggedIn = true
                        return
                    } else {
                        alreadyLoggedIn = false
                    }
                } if (previousMatch === false && alreadyLoggedIn === false) {
                    let answer = prompt("Are you sure you want to add this person as a friend?, Yes or No")
                    if (answer === "Yes") {
                    APIManager.postNewFriendShip(newFriendship).then(() => {
                        alert("new friend added")
                        
                        // return
                    })
                }





                }
            })
        }
    })
}

export default addFriend
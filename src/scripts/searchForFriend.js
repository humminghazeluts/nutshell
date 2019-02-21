import APIManager from "./dataManager"
import displayFriendsList from "./displayFriendList";

let searchForFriendDisplay = () => {
    let userId = Number(sessionStorage.getItem("userId"))
    let searchForFriend = document.querySelector("#searchForFriend")
    searchForFriend.innerHTML +=
        `
    <fieldset>
    <label for="findAFriend">Find A Friend </label>
    <input type="text" name="findAFriend" id="findAFriend"></input>
</fieldset>
<button id="searchForFriendButton">Search!</button>
`

    document.querySelector("#searchForFriend").addEventListener("click", (event) => {
        let friendSearched = document.querySelector("#findAFriend").value
        if (event.target.id === "searchForFriendButton") {
            let newFriendId = 0
            console.log(friendSearched)
            APIManager.getUsers().then((users) => {
                let friendFound = false
                for (let i = 0; i < users.length; i++) {
                    let user = users[i]
                    console.log(user)
                    if (user.username === friendSearched) {
                        // alert("You friend is here! Would you like to add them as a friend?")
                        friendFound = true
                        newFriendId = user.id
                    }
                }
                let newFriendship = {
                    "friend_1Id": userId,
                    "friend_2Id": newFriendId
                }
                let previousMatch = false
                let alreadyLoggedIn = false
                APIManager.getfriendShip().then(friendships => {
                    console.log(friendships)
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

                    }
                }).then(() => {

                    if (friendFound === true && previousMatch === false) {
                        let answer = prompt("You friend is here! Would you like to add them as a friend? Yes or No")
                        if (answer === "Yes") {
                            APIManager.postNewFriendShip(newFriendship).then(() => {
                                alert("Your friend was added.")
                                displayFriendsList()
                            }).then(() => {
                                document.querySelector("#findAFriend").innerHTML = ""
                            })
                            console.log(newFriendship)
                            return
                        }
                        return
                    } else if (friendFound === true && previousMatch === true) {
                            return
                    }
                    else {
                        alert("You friend is not a member of Nutshell")
                        return
                    }
                })
            })
        }
    })


}

export default searchForFriendDisplay
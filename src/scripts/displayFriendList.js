import APIManager from "./dataManager"
let displayFriendsList = () => {
    let display = document.querySelector("#friendList")
    let id = Number(sessionStorage.getItem("userId"))
    let friendShipsArray = []
    display.innerHTML = ""
    


        APIManager.getfriendShip().then((friendShips) => {
            // console.log(articles)

            friendShips.forEach(friendship => {
                if (friendship.friend_1Id === Number(sessionStorage.getItem("userId"))|| friendship.friend_2Id === Number(sessionStorage.getItem("userId")) ){

                    console.log(friendship)
                    friendShipsArray.push(friendship)
                    

                    // let htmlRep = `
                    // <h1>${friendShips.synopsis}</h1>
                    // <h2>${article.url}</h2> `
                    // display.innerHTML += htmlRep
                }
            });
            return friendShipsArray
        }).then(()=> {
            console.log(friendShipsArray)
        }).then(()=> {
            friendShipsArray.forEach(friendship => {
                APIManager.getSpecificUser(friendship.friend_2Id).then((friend) => {
                    if (friend.username !== sessionStorage.getItem("userName")) {
                    console.log(friend.username)
                    let htmlRep = `
                    <p>${friend.username}`
                    display.innerHTML += htmlRep
                    }
                    return friend
                }).then((friend) => {
                    APIManager.getSpecificUser(friendship.friend_1Id).then((friend2 => {
                        if (friend2.username !== friend.username && friend2.username !== sessionStorage.getItem("userName") ) {
                            let htmlRep = `
                            <p>${friend2.username}`
                            display.innerHTML += htmlRep
                        }
                    }))
                })
            })
        })
    }


export default displayFriendsList
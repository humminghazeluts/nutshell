import APIManager from "./dataManager"
let displayFriendsList = () => {
    let display = document.querySelector("#friendList")
    let id = Number(sessionStorage.getItem("userId"))
    APIManager.getUsers(users => {
        return users
    }).then(users => {
        users.forEach(user => {
            if (user.id !== id) {
                console.log(user)
            }
        });
    })
    //     APIManager.getArticles(id).then((friendShips) => {
    //         // console.log(articles)

    //         friendShips.forEach(friendship => {
    //             if (friendship.friend_1Id === Number(sessionStorage.getItem("userId"))|| friendship.friend_2Id === Number(sessionStorage.getItem("userId")) ){


    //                 let htmlRep = `
    //                 <h1>${friendShips.synopsis}</h1>
    //                 <h2>${article.url}</h2> `
    //                 display.innerHTML += htmlRep
    //             }
    //         });
    //     })
}

export default displayFriendsList
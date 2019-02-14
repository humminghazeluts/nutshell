const APIManager = {
    getUsers: () => {
        return fetch("http://localhost:8088/users")
            .then(res => res.json())
},
    postNewUser: (newUser) => {
        return fetch("http://localhost:8088/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newUser)
    })
    },
editUser: (userId, userObj) => {
    return fetch(`http://localhost:8088/${userId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userObj)
    })
},
    deleteUser: (userId) => {
        return fetch(`http://localhost:8088/${userId}`, {
            method: "DELETE",
        })
    },
}

export default APIManager

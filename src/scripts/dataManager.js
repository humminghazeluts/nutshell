// Object that holds all the methods for accessing API
const APIManager = {
    // general see all users function
    getUsers: () => {
        return fetch("http://localhost:8088/users")
            .then(res => res.json())
    },
    // add new user to the API
    postNewUser: (newUser) => {
        return fetch("http://localhost:8088/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newUser)
        })
    },
    // edit existing user
    editUser: (userId, userObj) => {
        return fetch(`http://localhost:8088/${userId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userObj)
        })
    },
    // delete user
    deleteUser: (userId) => {
        return fetch(`http://localhost:8088/${userId}`, {
            method: "DELETE",
        })
    },
     // general see all articles function
    getArticles: () => {
        return fetch("http://localhost:8088/articles")
            .then(res => res.json())
    },
    // add new article
    postNewArticle: (newArticle) => {
        return fetch("http://localhost:8088/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newArticle)
        })
    },
    // edit existing user
    editArticle: (articleId, articleObj) => {
        return fetch(`http://localhost8088/${articleId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(articleObj)
        })
    },
    // delete article
    deleteArticle: (articleId) => {
        return fetch(`http://localhost:8088/${articleId}`, {
            method: "DELETE",
        })
    },
    // general get all events function
    getEvents: () => {
        return fetch("http://localhost:8088/events")
            .then(res => res.json())
    },
    // add new event
    postNewEvent: (newEvent) => {
        return fetch("http://localhost:8088/events", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newEvent)
        })
    },
    // edit existing event
    editEvent: (eventId, eventObj) => {
        return fetch(`http://localhost:8088/${eventId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(eventObj)
        })
    },
    // delete event
    deleteEvent: (eventId) => {
        return fetch(`http://localhost:8088/${eventId}`, {
            method: "DELETE",
        })
    },
    // general see all tasks function
    getTasks: () => {
        return fetch ("http://localhost:8088/tasks")
        .then (res => res.json())
    },
    // add new task
    postNewTask: (newTask) => {
        return fetch("http://localhost:8088/tasks", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newTask)
        })
    },
    // edit an existing task
    editTask: (taskId, taskObj) => {
        return fetch(`http://localhost:8088/${taskId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(taskObj)
        })
    },
    // delete task
    deleteTask: (taskId) => {
        return fetch(`http://localhost:8088/${taskId}`, {
            method: "DELETE",
        })
    },
    // general see all friendships function
    getfriendShip: () => {
        return fetch("http://localhost:8088/friendShips")
        .then(res => res.json())
    },
    // add new friendship
    postNewFriendShip: (newfriendShip) => {
        return fetch("http://localhost:8088/friendShips", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newfriendShip)
        })
    },
    // edit and existing friendship
    editFriendShips: (friendShipId, friendShipObj) => {
        return fetch(`http://localhost:8088/${friendShipId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(friendShipObj)
        })
    },
    // delete a friendship
    deleteFriendShip: (friendShipId) => {
        return fetch(`http://localhost:8088/${friendShipId}`, {
            method: "DELETE",
        })
    }
}
export default APIManager

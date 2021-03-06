// Object that holds all the methods for accessing API
const APIManager = {
    // general see all users function
    getUsers: () => {
        return fetch("http://localhost:8088/users")
            .then(res => res.json())
    },
    getSpecificUser: (id) => {
        return fetch(`http://localhost:8088/users/${id}`)
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
        return fetch(`http://localhost:8088/users/${userId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userObj)
        })
    },
    // delete user
    deleteUser: (userId) => {
        return fetch(`http://localhost:8088/users/${userId}`, {
            method: "DELETE",
        })
    },
    // general see all articles function
    getArticles: () => {
        return fetch("http://localhost:8088/articles")
            .then(res => res.json())
    },
    getOneArticles: (id) => {
        return fetch(`http://localhost:8088/articles/${id}`)
            .then(res => res.json())
    },
    // add new article
    postNewArticle: (newArticle) => {
        return fetch("http://localhost:8088/articles", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newArticle)
        })
    },
    // edit existing user
    editArticle: (articleId, newArticleObject) => {
        console.log("editArticle")
        return fetch(`http://localhost:8088/articles/${articleId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newArticleObject)
        })
    },
    // delete article
    deleteArticle: (articleId) => {
        return fetch(`http://localhost:8088/articles/${articleId}`, {
            method: "DELETE",
        })
    },
    // general get all events function
    getEvents: () => {
        return fetch("http://localhost:8088/events?_sort=dateOfEvent&_order=asc")
            .then(res => res.json())
    },
    // general get all events function
    getSingleEvent: (eventId) => {
        return fetch(`http://localhost:8088/events/${eventId}`)
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
        return fetch(`http://localhost:8088/events/${eventId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(eventObj)
        })
    },
    // delete event
    deleteEvent: (eventId) => {
        return fetch(`http://localhost:8088/events/${eventId}`, {
            method: "DELETE",
        })
    },
    // general see all tasks function
    getTasks: () => {
        return fetch("http://localhost:8088/tasks")
            .then(res => res.json())
    },

     // Get single Task fucntion
     getSingleTask: (taskId) => {
        return fetch (`http://localhost:8088/tasks/${taskId}`)
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
        return fetch(`http://localhost:8088/tasks/${taskId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(taskObj)
        })
    },
    // delete task
    deleteTask: (taskId) => {
        return fetch(`http://localhost:8088/tasks/${taskId}`, {
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
    },
    // delete a message
    deleteMessage: (messageId) => {
        return fetch(`http://localhost:8088/${messageId}`, {
            method: "DELETE",
        })
    }, //retrieve messages
    getMessages: () => {
        return fetch("http://localhost:8088/messages?_expand=user")
            .then(res => res.json())
    },
    getindividualMessages: (messageId) => {
        return fetch(`http://localhost:8088/messages/${messageId}?_expand=user`)
            .then(res => res.json())
    },
    // add messages
    postNewMessage: (newMessage) => {
        return fetch("http://localhost:8088/messages", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newMessage)
        })
    },
    // edit and existing messages
    editMessage: (messageId, messageObject) => {
        return fetch(`http://localhost:8088/messages/${messageId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(messageObject)
        })
    }
}
export default APIManager

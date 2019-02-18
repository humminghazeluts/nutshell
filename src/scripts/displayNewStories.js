import APIManager from "./dataManager"
let displayNewStories = () => {
    let id = Number(sessionStorage.getItem("userId"))
    APIManager.getArticles(id).then((articles) => {
        console.log(articles)
    })
}

export default displayNewStories
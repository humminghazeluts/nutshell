import APIManager from "./dataManager"
let displayNewsStories = () => {
    let display = document.querySelector("#newsStoriesDisplay")
    let id = Number(sessionStorage.getItem("userId"))
    APIManager.getArticles(id).then((articles) => {
        // console.log(articles)
        articles.forEach(article => {
            let htmlRep = `
            <h1>${article.synopsis}</h1>
            <h2>${article.url}</h2> `
            display.innerHTML += htmlRep
        });
    })
}

export default displayNewsStories
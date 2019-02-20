import APIManager from "./dataManager"

let displayNewsStories = () => {
    let display = document.querySelector("#newsStoriesDisplay")
    let id = Number(sessionStorage.getItem("userId"))
    display.innerHTML = "Stories go here"
    APIManager.getArticles(id).then((articles) => {
        // console.log(articles)
        // display.innerHTML = "News goes here"
        
        articles.forEach(article => {
            if (article.userId === Number(sessionStorage.getItem("userId"))){

                let htmlRep = `
                <section id="newsContainer">
                <h1>${article.synopsis}</h1>
                <h2>${article.url}</h2> 
                <button id="deleteNewsButton--${article.id}">Delete ${article.synopsis}</button>
                <button id="editNewsButton--${article.id}">Edit ${article.synopsis}</button>
                </section>
                `

                display.innerHTML += htmlRep
            }
            
        })
        
    })
    
    
}


export default displayNewsStories
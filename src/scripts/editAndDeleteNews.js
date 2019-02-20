import APIManager from "./dataManager"
import displayNewsStories from "./displayNewStories"




let changeNews = () => {
  document.querySelector("#newsStoriesDisplay").addEventListener("click", () => {

    if (event.target.id.startsWith("deleteNewsButton--")) {

      console.log("delete button clicked")

      let newsId = event.target.id.split("--")[1];
      console.log(newsId)

        APIManager
          .deleteArticle(newsId)

          .then(displayNewsStories);
      } else if (event.target.id.startsWith("editNewsButton--")) {
        let articleId = event.target.id.split("--")[1];
        APIManager.getOneArticles(articleId).then(article => {
          document.querySelector("#addNewStory").textContent = "Update"
          console.log("edit button clicked")
          document.getElementById("synopsis").value = article.synopsis
          document.getElementById("storyURL").value = article.url
          document.getElementById("articleId").value = article.id
          
        })

    }
  });
};

export default changeNews
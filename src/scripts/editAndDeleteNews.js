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

        console.log("edit button clicked")

        let newsId = event.target.id.split("--")[1];

        APIManager
        .getArticles(newsId)
        .then(displayNewsStories())
    }
  });
};

export default changeNews
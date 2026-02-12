import "./style.css";
import articlesJSON from './assets/articles.json';

function init() {
    console.log("Hello! The resources index.js/main.js has been run!");
    populateArticles();
}
init();



function populateArticles() {
    const containerDiv = document.querySelector("#articles .container");

    // apparently, webpack automatically converts imported JSON strings into JS Objects, so no need for JSON.parse()
    const articlesList = articlesJSON.articles;
    console.log(articlesList);

    for(let i in articlesList) {
        const articleDiv = document.createElement("div");
        articleDiv.classList.add("article");
        containerDiv.appendChild(articleDiv);

        const title = document.createElement("a");
        title.textContent = articlesList[i].title;
        title.setAttribute("href", `${articlesList[i].link}`);
        articleDiv.appendChild(title);

        const date = document.createElement("p");
        date.textContent = articlesList[i].date;
        articleDiv.appendChild(date);
    }
}

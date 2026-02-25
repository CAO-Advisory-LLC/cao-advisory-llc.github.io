import "./style.css";
import articlesJSON from './assets/articles.json';
import eventsJSON from './assets/events.json';
import menteesJSON from './assets/mentees.json';

function init() {
    console.log("Hello! The resources index.js/main.js has been run!");
    populateArticles();
    populateEvents();
    populateMentees();


    // setting up tab functionality
    const storiesTab = document.querySelector("#tab-bar .stories");
    const articlesTab = document.querySelector("#tab-bar .articles");
    const eventsTab = document.querySelector("#tab-bar .events");
    const menteesTab = document.querySelector("#tab-bar .mentees");

    storiesTab.addEventListener("click", (e) => openSection(e, "stories"));
    articlesTab.addEventListener("click", (e) => openSection(e, "articles"));
    eventsTab.addEventListener("click", (e) => openSection(e, "events"));
    menteesTab.addEventListener("click", (e) => openSection(e, "mentees"));


    // default initial state: only showing stories section
    // const storiesSect = document.querySelector("#stories");
    const articlesSect = document.querySelector("#articles");
    const eventsSect = document.querySelector("#events");
    const menteesSect = document.querySelector("#mentees");

    storiesTab.classList.add("active");
    articlesSect.style.display = "none";
    eventsSect.style.display = "none";
    menteesSect.style.display = "none";


    // setting up sub-tab (articles) functionality
    const allTab = document.querySelector("#articles .sub-tab-bar .all");
    const boardTab = document.querySelector("#articles .sub-tab-bar .board");
    const cdaoTab = document.querySelector("#articles .sub-tab-bar .cdao");

    allTab.addEventListener("click", (e) => openArticleTab(e, "all"));
    boardTab.addEventListener("click", (e) => openArticleTab(e, "board"));
    cdaoTab.addEventListener("click", (e) => openArticleTab(e, "cdao"));

    allTab.classList.add("active");
}
init();



function populateArticles() {
    const containerDiv = document.querySelector("#articles .article-list");

    // apparently, webpack automatically converts imported JSON strings into JS Objects, so no need for JSON.parse()
    const articlesList = articlesJSON.articles;
    // console.log(articlesList);

    for(let i in articlesList) {
        const articleDiv = document.createElement("div");
        articleDiv.classList.add("article");
        // articleDiv.classList.add("all");
        articleDiv.classList.add(`${articlesList[i].tag}`);
        containerDiv.appendChild(articleDiv);

        const title = document.createElement("a");
        title.classList.add("title");
        title.textContent = articlesList[i].title;
        title.setAttribute("href", `${articlesList[i].link}`);
        title.setAttribute("target", "_blank");
        articleDiv.appendChild(title);

        const date = document.createElement("p");
        date.classList.add("date");
        date.textContent = articlesList[i].date;
        articleDiv.appendChild(date);
    }
}

function populateEvents() {
    const containerDiv = document.querySelector("#events .events-list");

    const eventsList = eventsJSON.events;
    // console.log(eventsList);

    for(let i in eventsList) {
        const eventDiv = document.createElement("div");
        eventDiv.classList.add("event");
        containerDiv.appendChild(eventDiv);

        const name = document.createElement("p");
        name.classList.add("name");
        name.textContent = eventsList[i].name;
        eventDiv.appendChild(name);

        const date = document.createElement("p");
        date.classList.add("date");
        date.textContent = eventsList[i].date;
        eventDiv.appendChild(date);

        // add details link or record link if they exist
        if(eventsList[i].details_link !== "") {
            const details = document.createElement("a");
            details.classList.add("details");
            details.textContent = "Details";
            details.setAttribute("href", `${eventsList[i].details_link}`);
            details.setAttribute("target", "_blank");
            eventDiv.appendChild(details);
        }
        if(eventsList[i].record_link !== "") {
            const record = document.createElement("a");
            record.classList.add("record");
            record.textContent = "Record";
            record.setAttribute("href", `${eventsList[i].record_link}`);
            record.setAttribute("target", "_blank");
            eventDiv.appendChild(record);
        }
        
    }
}

function populateMentees() {
    const containerDiv = document.querySelector("#mentees .mentees-list");

    const menteesList = menteesJSON.mentees;
    // console.log(menteesList);

    for(let i in menteesList) {
        const articleDiv = document.createElement("div");
        articleDiv.classList.add("mentee");
        containerDiv.appendChild(articleDiv);

        const course = document.createElement("p");
        course.classList.add("course");
        course.textContent = menteesList[i].course;
        articleDiv.appendChild(course);

        const organization = document.createElement("p");
        organization.classList.add("organization");
        organization.textContent = menteesList[i].organization;
        articleDiv.appendChild(organization);

        const date = document.createElement("p");
        date.classList.add("date");
        date.textContent = menteesList[i].date;
        articleDiv.appendChild(date);

        const link = document.createElement("a");
        link.classList.add("link");
        link.textContent = "Link";
        link.setAttribute("href", `${menteesList[i].link}`);
        link.setAttribute("target", "_blank");
        articleDiv.appendChild(link);
    }
}

function openSection(e, section) {
    // Get all elements (all the content sections) with class="hideable" and hide them
    const hidableSects = document.getElementsByClassName("hideable");
    for (let i = 0; i < hidableSects.length; i++) {
        hidableSects[i].style.display = "none";
    }

    // Get all elements with class="tab-link" and remove the class "active"
    const tabBarSect = document.querySelector("#tab-bar");
    const tabLinks = tabBarSect.getElementsByClassName("tab-link");
    for (let i = 0; i < tabLinks.length; i++) {
        tabLinks[i].classList.remove("active");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(section).style.display = "block";
    e.currentTarget.classList.add("active");
}

function openArticleTab(e, tag) {
    // Go through each article in .article-list
    // if tag = "all", make all articles visible
    // otherwise, for each article, make visible if it has tag as a class, otherwise disable
    const articlesContainerDiv = document.querySelector("#articles .article-list");
    const articles = articlesContainerDiv.getElementsByClassName("article");
    for (let i = 0; i < articles.length; i++) {
        if(tag === "all") {
            articles[i].style.display = "block";
        }
        else {
            if(articles[i].classList.contains(tag)) {
                articles[i].style.display = "block";
            }
            else {
                articles[i].style.display = "none";
            }
        }
    }

    // Get all elements with class="tab-link" and remove the class "active"
    const articlesTabBar = document.querySelector("#articles .sub-tab-bar");
    const tabLinks = articlesTabBar.getElementsByClassName("tab-link");
    for (let i = 0; i < tabLinks.length; i++) {
        tabLinks[i].classList.remove("active");
    }

    // mark event target (the tab just clicked) as active
    e.currentTarget.classList.add("active");
}

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
    const storiesSect = document.querySelector("#stories");
    const articlesSect = document.querySelector("#articles");
    const eventsSect = document.querySelector("#events");
    const menteesSect = document.querySelector("#mentees");

    storiesTab.className += " active";
    articlesSect.style.display = "none";
    eventsSect.style.display = "none";
    menteesSect.style.display = "none";
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
    // Get all elements with class="can-hide" and hide them
    const hidableSects = document.getElementsByClassName("hideable");
    for (let i = 0; i < hidableSects.length; i++) {
        hidableSects[i].style.display = "none";
    }

    // Get all elements with class="tab-link" and remove the class "active"
    const tabLinks = document.getElementsByClassName("tab-link");
    for (let i = 0; i < tabLinks.length; i++) {
        tabLinks[i].className = tabLinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(section).style.display = "block";
    e.currentTarget.className += " active";
}

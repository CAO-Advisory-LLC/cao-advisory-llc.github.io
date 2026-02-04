import "./styles/fonts.css";
import "./styles/theme.css";
import "./styles/common.css";
import "./styles/header.css";
import "./styles/footer.css";

import "./styles/home.css";
import "./styles/about.css";

function init() {
    console.log("Hello! The index.js (aka main.js) has been run!");
}
init();


// reference: https://www.w3tutorials.net/blog/make-header-and-footer-files-to-be-included-in-multiple-html-pages/
// Function to load header & footer content into a target element
async function loadHeaderFooter() {
    try {
        // Fetch the external HTML files
        // Note: the path here should be the expected path in the built dist, not the path in src, you can see/configure this path in webpack.common.js in the const header_footer (filename)
        // let headerFile;
        // let footerFile;

        const headerFile = await fetch("/header_footer/header.html");
        const footerFile = await fetch("/header_footer/footer.html");

        // kinda scuffed ngl, but if it works...
        // const urlPath = window.location.pathname;
        // const regex = new RegExp("/", "g");
        // const matches = urlPath.match(regex).length;

        // home/root page
        // if(matches === 1) {
        //     headerFile = await fetch("header_footer/header.html");
        //     footerFile = await fetch("header_footer/footer.html");
        // }
        // first degree subpages
        // Notes: dev server interacts with this strangely, and only counts 1 "/", but still functions correctly
        // else if(matches === 2) {
        //     headerFile = await fetch("../header_footer/header.html");
        //     footerFile = await fetch("../header_footer/footer.html");
        // }
        
        
        // Extract HTML text from the responses
        const headerHTML = await headerFile.text();
        const footerHTML = await footerFile.text();
        
        // Insert the HTML into the target elements
        const headerElement = document.getElementById("header");
        headerElement.innerHTML = headerHTML;
        const footerElement = document.getElementById("footer");
        footerElement.innerHTML = footerHTML;
    }
    catch (error) {
        console.error('Error loading content:', error);
        // Optional: Display a fallback message in the UI
        // document.getElementById(elementId)?.innerHTML = `<p>Error loading content.</p>`;
    }
}
 
// Load header and footer when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    loadHeaderFooter();
});

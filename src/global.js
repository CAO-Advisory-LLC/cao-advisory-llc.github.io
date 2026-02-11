import "./global-assets/styles/fonts.css";
import "./global-assets/styles/theme.css";
import "./global-assets/styles/common.css";

import "./header-footer/header.css";
import "./header-footer/footer.css";


function init() {
    console.log("Hello! The global index.js/main.js has been run!");
}
init();


// reference: https://www.w3tutorials.net/blog/make-header-and-footer-files-to-be-included-in-multiple-html-pages/
// Function to load header & footer content into a target element
async function loadHeaderFooter() {
    try {
        // Fetch the external HTML files
        // Note: the path here should be the expected path in the built dist, not the path in src, you can see/configure this path in webpack.common.js in the const header_footer (filename)
        const headerFile = await fetch("/header-footer/header.html");
        const footerFile = await fetch("/header-footer/footer.html");
        
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

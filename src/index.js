import "./styles/fonts.css";
import "./styles/common.css";
import "./styles/home.css";
import "./styles/header.css";
import "./styles/footer.css";

function init() {
    console.log("Hello world!");
}
init();


// reference: https://www.w3tutorials.net/blog/make-header-and-footer-files-to-be-included-in-multiple-html-pages/
// Function to load header & footer content into a target element
async function loadHeaderFooter() {
    try {
        // Fetch the external HTML files
        const headerFile = await fetch("src/header_footer/header.html");
        const footerFile = await fetch("src/header_footer/footer.html");
        
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

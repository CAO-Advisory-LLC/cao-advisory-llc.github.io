import "./styles/fonts.css";
import "./styles/theme.css";
import "./styles/common.css";
import "./styles/header.css";
import "./styles/footer.css";

import "./styles/home.css";
import "./styles/about.css";

function init() {
    console.log("Hello world!");
}
init();


// reference: https://www.w3tutorials.net/blog/make-header-and-footer-files-to-be-included-in-multiple-html-pages/
// Function to load header & footer content into a target element
async function loadHeaderFooter() {
    try {
        // Fetch the external HTML files
        // Note: the path here should be the expected path in the built dist, not the path in src, you can see/configure this path in webpack.common.js in the const header_footer (filename)
        let headerFile = await fetch("header_footer/header.html");
        let footerFile = await fetch("header_footer/footer.html");

        // if failed, try another possible path
        if (!response.ok) {
            headerFile = await fetch("../header_footer/header.html");
            footerFile = await fetch("../header_footer/footer.html");

            // if still failed, IDK what the problem is
            if(!response.ok) {
                throw new Error(`Failed to load ${filePath}: ${response.statusText}`);
            }
        }
        
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

// Import necessary functions from the library
import { getJSON } from "https://cdn.jsdelivr.net/gh/jscroot/api@0.0.7/croot.js";
import { renderHTML, setInner } from "https://cdn.jsdelivr.net/gh/jscroot/element@0.1.5/croot.js";

const targetUrl = "https://t.if.co.id/json/Fauzi.json";

// Fetch JSON data from the provided URL
getJSON(targetUrl, "null", "null", responseFunction);

// Function to handle the response and render the content
function responseFunction(response) {
    console.log('HTTP Status:', response.status);
    console.log('Response Data:', response.data);


   // renderHTML('loading', staticHTML);

    // Prepare the dynamic HTML content (skills, rate, social icons)
    //const additionalHTML = `

    // Insert the dynamic content using setInner
   // setInner("cardbenar", additionalHTML);

    // Hide the loading message and show the main content
    //document.getElementById('loading').style.display = 'none';
    //document.getElementById('main-content').style.display = 'block';
}

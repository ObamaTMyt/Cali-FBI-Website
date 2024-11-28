// Highlight the active navigation link
document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll("nav a"); // Select all navigation links
    let currentUrl = window.location.pathname; // Get the current path

    // Normalize the root path ("/") to match "/index.html"
    if (currentUrl === "/") {
        currentUrl = "/index.html";
    }

    console.log("Current URL:", currentUrl); // Debug: Log the current URL

    links.forEach((link) => {
        const linkPath = new URL(link.href).pathname; // Get the normalized path of each link
        console.log("Checking link:", link.href, "| Path:", linkPath); // Debug: Log the link path being checked

        // Add the "active" class if the link matches the current URL
        if (linkPath === currentUrl) {
            console.log("Match found! Adding 'active' class to:", link.href); // Debug: Log when a match is found
            link.classList.add("active");
        } else {
            console.log("No match for:", link.href); // Debug: Log when no match is found
        }
    });
});

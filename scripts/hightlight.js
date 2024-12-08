document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll("nav a"); 
    let currentUrl = window.location.pathname; 

    if (currentUrl === "/") {
        currentUrl = "/index.html";
    }



    links.forEach((link) => {
        const linkPath = new URL(link.href).pathname; 

        if (linkPath === currentUrl) {
            link.classList.add("active");
        }
    });
});

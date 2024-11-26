document.querySelectorAll('.dropdown-btn').forEach(button => {
    button.addEventListener('click', function () {
        const dropdown = this.nextElementSibling;
        const isVisible = dropdown.classList.toggle('visible');  

        this.textContent = isVisible ? "▲" : "▼";
        this.setAttribute('aria-expanded', isVisible);

        const anyDropdownVisible = Array.from(document.querySelectorAll('.dropdown.visible')).length > 0;
        const imagesContainer = document.querySelector('.images');
        if (anyDropdownVisible) {
            imagesContainer.style.marginBottom = '200px';  
        } else {
            imagesContainer.style.marginBottom = '0';  
        }
    });
});

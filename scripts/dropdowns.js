document.querySelectorAll('.dropdown-btn').forEach(button => {
    button.addEventListener('click', function () {
        const parentItem = this.closest('.item');  // Get the parent item (containing image and dropdown)
        const image = parentItem.querySelector('img');  // Get the image inside the item
        const dropdown = this.nextElementSibling;  // The actual dropdown content
        const isVisible = dropdown.classList.toggle('visible');

        // Toggle the text content of the button
        this.textContent = isVisible ? "▲" : "▼";

        // Set aria-expanded for accessibility
        this.setAttribute('aria-expanded', isVisible);

        // Apply margin to the image or the parent item without affecting the arrow button
        if (isVisible) {
            image.style.marginBottom = '50px';  // Add margin to the image itself when dropdown is visible
        } else {
            image.style.marginBottom = '0';  // Remove margin from the image when dropdown is hidden
        }
    });
});

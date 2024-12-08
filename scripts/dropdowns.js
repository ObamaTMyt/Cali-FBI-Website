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

    function openModal() {
        const scrollY = window.scrollY;
        document.documentElement.style.position = 'fixed';
        document.documentElement.style.top = `-${scrollY}px`;
        document.getElementById('formModal').style.display = 'block';
    }

    function closeModal() {
        const scrollY = Math.abs(parseInt(document.documentElement.style.top || '0', 10));
        document.documentElement.style.position = '';
        document.documentElement.style.top = '';
        window.scrollTo(0, scrollY);
        document.getElementById('formModal').style.display = 'none';
    }
});

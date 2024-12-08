let lastScrollY = 0;
let scrollUpOffset = 0; 
const scrollThreshold = 50;
const scrollUpThreshold = 30; 

window.addEventListener('scroll', () => {
    const header = document.querySelector('.sticky-header');
    const currentScrollY = window.scrollY;

    if (currentScrollY > scrollThreshold && currentScrollY > lastScrollY) {
        header.classList.add('hidden');
        scrollUpOffset = 0;
    } else if (currentScrollY < lastScrollY) {
        scrollUpOffset += lastScrollY - currentScrollY;

        if (scrollUpOffset >= scrollUpThreshold) {
            header.classList.remove('hidden');
        }
    }

    lastScrollY = currentScrollY;
});


const navLinks = document.querySelectorAll('.sticky-header nav a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.forEach(nav => nav.classList.remove('active'));
        link.classList.add('active');
    });
});
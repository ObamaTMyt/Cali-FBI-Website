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
// Funkcja do wysuwania i chowania menu
function toggleMenu() {
    const menu = document.querySelector('nav');
    menu.classList.toggle('active');
}

// Event listener dla przycisku menu
document.querySelector('.menu-btn').addEventListener('click', toggleMenu);

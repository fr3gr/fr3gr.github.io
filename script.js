function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('active');
}

document.querySelector('.menu-btn').addEventListener('click', toggleMenu);

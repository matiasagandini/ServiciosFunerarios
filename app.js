const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
const navItems = document.querySelectorAll('#navLinks a');

if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

navItems.forEach((item) => {
    item.addEventListener('click', () => {
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
        }
    });
});

const carousels = document.querySelectorAll('[data-carousel]');

carousels.forEach((carousel) => {
    const track = carousel.querySelector('.carousel-track');
    const slides = track.querySelectorAll('img');
    let index = 0;

    if (slides.length > 1) {
        setInterval(() => {
            index = (index + 1) % slides.length;
            track.style.transform = `translateX(-${index * 100}%)`;
        }, 4000);
    }
});
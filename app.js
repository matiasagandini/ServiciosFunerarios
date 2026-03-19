const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
const navItems = document.querySelectorAll('#navLinks a');
const wspTooltip = document.getElementById('wspTooltip');
const closeWspTooltip = document.getElementById('closeWspTooltip');

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

const revealElements = document.querySelectorAll('.reveal');

if (revealElements.length > 0) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, {
        threshold: 0.15
    });

    revealElements.forEach((element) => {
        observer.observe(element);
    });
}

if (wspTooltip) {
    setTimeout(() => {
        wspTooltip.classList.add('show');

        setTimeout(() => {
            wspTooltip.classList.remove('show');
        }, 6000);
    }, 5000);
}

if (closeWspTooltip && wspTooltip) {
    closeWspTooltip.addEventListener('click', () => {
        wspTooltip.classList.remove('show');
    });
}
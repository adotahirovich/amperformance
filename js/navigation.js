navigadocument.addEventListener('DOMContentLoaded', () => {
    const burgerMenu = document.querySelector('.burger-menu');
    const mobileNav = document.querySelector('.mobile-nav');

    burgerMenu.addEventListener('click', () => {
        burgerMenu.classList.toggle('active');
        mobileNav.classList.toggle('active');
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!burgerMenu.contains(e.target) && !mobileNav.contains(e.target)) {
            burgerMenu.classList.remove('active');
            mobileNav.classList.remove('active');
        }
    });

    // Close mobile menu when window is resized above mobile breakpoint
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            burgerMenu.classList.remove('active');
            mobileNav.classList.remove('active');
        }
    });
});
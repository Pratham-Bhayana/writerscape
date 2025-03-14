
document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.querySelector('.menu-btn');
    const menu = document.querySelector('.menu');
    const menuItems = document.querySelectorAll('.menu-item');

    menuBtn.addEventListener('click', () => {
        menuBtn.classList.toggle('active');
        menu.classList.toggle('active');

        if (menu.classList.contains('active')) {
            gsap.to(menu, { right: 0, duration: 0.5, ease: 'power2.out' });
            gsap.fromTo(menuItems, 
                { x: 100, y: (i) => i * 20, opacity: 0 },
                { x: 0, y: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: 'power2.out', delay: 0.2 }
            );
        } else {
            gsap.to(menu, { right: '-100%', duration: 0.5, ease: 'power2.in' });
            gsap.to(menuItems, { x: 100, opacity: 0, duration: 0.3, stagger: 0.05, ease: 'power2.in' });
        }
    });

    // Toggle Signup Fields on Login Page
    if (window.location.pathname.includes('login.html')) {
        document.getElementById('signupBtn').addEventListener('click', () => {
            document.querySelectorAll('.signup-field').forEach(field => field.style.display = 'block');
        });
        document.getElementById('loginBtn').addEventListener('click', () => {
            document.querySelectorAll('.signup-field').forEach(field => field.style.display = 'none');
        });
    }
});

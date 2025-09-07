function animateOnScroll() {
    const elements = document.querySelectorAll('.fade-in, .fade-in-up');
    const triggerBottom = window.innerHeight * 0.92;
    elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < triggerBottom) {
            el.style.animationPlayState = 'running';
        }
    });
}
window.addEventListener('scroll', animateOnScroll);
window.addEventListener('DOMContentLoaded', animateOnScroll);

window.addEventListener('scroll', function() {
    const landing = document.querySelector('.landing');
    const navProfile = document.querySelector('.nav-profile');
    if (!landing || !navProfile) return;
    const landingRect = landing.getBoundingClientRect();
    if (landingRect.bottom <= 80) {
        navProfile.classList.remove('hidden');
    } else {
        navProfile.classList.add('hidden');
    }
});
window.addEventListener('DOMContentLoaded', function() {
    const landingName = document.querySelector('.landing .name');
    const navProfileName = document.querySelector('.nav-profile-name');
    if (landingName && navProfileName) {
        navProfileName.textContent = landingName.textContent || '';
    }
    const navProfile = document.querySelector('.nav-profile');
    if (navProfile) navProfile.classList.add('hidden');
});

document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    if (navToggle && navLinks) {
        navToggle.addEventListener('click', function() {
            navLinks.classList.toggle('open');
        });
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('open');
            });
        });
    }
});

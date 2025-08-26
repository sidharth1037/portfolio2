document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    // TODO: Replace with your email address
    const yourEmail = "your@email.com";
    const name = this.name.value;
    const email = this.email.value;
    const message = this.message.value;

    // For demo: just show a message
    document.getElementById('formMessage').textContent = 
        "Thank you, " + name + "! Your message will be sent to " + yourEmail + ".";

    this.reset();
});

// Animation on scroll for fade-in and fade-in-up
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

// Navbar profile show/hide on scroll
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
    // Set nav-profile name to match landing name
    const landingName = document.querySelector('.landing .name');
    const navProfileName = document.querySelector('.nav-profile-name');
    if (landingName && navProfileName) {
        navProfileName.textContent = landingName.textContent || '';
    }
    // Hide nav-profile initially
    const navProfile = document.querySelector('.nav-profile');
    if (navProfile) navProfile.classList.add('hidden');
});

// Mobile nav toggle
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    if (navToggle && navLinks) {
        navToggle.addEventListener('click', function() {
            navLinks.classList.toggle('open');
        });
        // Optional: close menu when a link is clicked
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('open');
            });
        });
    }
});

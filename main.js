// Function to load the header
function loadHeader() {
    fetch('/header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header-placeholder').innerHTML = data;

            // --- Header Scroll Effect ---
            window.addEventListener('scroll', function() {
                const header = document.getElementById('main-header');
                if (window.scrollY > 50) {
                    header.classList.add('scrolled');
                } else {
                    header.classList.remove('scrolled');
                }
            });

            // --- Mobile Navigation ---
            const navToggle = document.querySelector('.nav-toggle');
            const mainNav = document.querySelector('.main-nav');
            const navLinks = document.querySelectorAll('.main-nav a');

            navToggle.addEventListener('click', () => {
                document.body.classList.toggle('nav-open');
                mainNav.classList.toggle('open');
            });

            // Close nav when a link is clicked
            navLinks.forEach(link => {
                link.addEventListener('click', () => {
                    if (document.body.classList.contains('nav-open')) {
                        document.body.classList.remove('nav-open');
                        mainNav.classList.remove('open');
                    }
                });
            });
        });
}

// --- High-Performance Scroll Animation ---
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.2
});

const elementsToReveal = document.querySelectorAll('.reveal');
elementsToReveal.forEach((el) => {
    if (el.dataset.delay) {
        el.style.transitionDelay = el.dataset.delay + 'ms';
    }
    observer.observe(el);
});


// Load the header when the page loads
document.addEventListener('DOMContentLoaded', loadHeader);
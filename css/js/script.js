// ========================================
// HB 1605 Dashboard - Interactive Features
// ========================================

// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const navSection = document.getElementById('nav-section');
    
    if (menuToggle && navSection) {
        menuToggle.addEventListener('click', function() {
            navSection.classList.toggle('open');
            const isOpen = navSection.classList.contains('open');
            menuToggle.setAttribute('aria-expanded', isOpen);
        });
        
        // Close menu when a link is clicked
        const navLinks = navSection.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navSection.classList.remove('open');
                menuToggle.setAttribute('aria-expanded', 'false');
            });
        });
    }
});

// Smooth Scroll for anchor links (enhancement)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Print functionality
function printPage() {
    window.print();
}

// Add print button to page (optional)
document.addEventListener('DOMContentLoaded', function() {
    // You can add a print button if desired
    // Example: Create a print button in the header
});

// Accessibility: Add keyboard navigation support
document.addEventListener('keydown', function(e) {
    // Close mobile menu on Escape key
    if (e.key === 'Escape') {
        const navSection = document.getElementById('nav-section');
        if (navSection && navSection.classList.contains('open')) {
            navSection.classList.remove('open');
            const menuToggle = document.getElementById('menu-toggle');
            menuToggle.setAttribute('aria-expanded', 'false');
        }
    }
});

// Track user interactions (analytics ready)
function trackEvent(eventName, eventData) {
    // Placeholder for analytics tracking
    // You can integrate Google Analytics or similar here
    console.log(`Event: ${eventName}`, eventData);
}

// Initialize analytics tracking on links
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('a[target="_blank"]').forEach(link => {
        link.addEventListener('click', function() {
            trackEvent('external_link_click', {
                url: this.href,
                title: this.textContent
            });
        });
    });
});

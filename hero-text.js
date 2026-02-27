/**
 * JEWAR RESORT - Main Interactive Script
 * Handles: Custom Cursor Visibility, Hero Reveal, and Horizontal Scrolling
 */

const cursor = document.getElementById('custom-cursor');
const bg = document.getElementById('bg');
const interactiveSections = document.querySelectorAll('.hero, .horizontal-scroll-container');

// --- 1. MOUSE INTERACTION (Cursor & Background Glow) ---
window.addEventListener('mousemove', (e) => {
    // Update cursor position
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    
    // Update the radial gradient background glow in the hero section
    if (bg) {
        const xPct = (e.clientX / window.innerWidth) * 100;
        const yPct = (e.clientY / window.innerHeight) * 100;
        bg.style.background = `radial-gradient(circle at ${xPct}% ${yPct}%, rgba(193, 161, 98, 0.15) 0%, transparent 60%)`;
    }
});

// Toggle cursor visibility based on specific sections
interactiveSections.forEach(section => {
    section.addEventListener('mouseenter', () => cursor.classList.add('visible'));
    section.addEventListener('mouseleave', () => cursor.classList.remove('visible'));
});


// --- 2. SCROLL REVEAL ANIMATION (Hero Section) ---
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Reveal text lines with a stagger effect
            entry.target.querySelectorAll('.reveal').forEach((el, index) => {
                setTimeout(() => { el.classList.add('active'); }, index * 300);
            });
            
            // Reveal sub-text
            const subText = document.getElementById('sub');
            if (subText) subText.classList.add('active');
            
            // Stop observing once animation has triggered
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.6 });

const heroSection = document.querySelector('.hero');
if (heroSection) revealObserver.observe(heroSection);


// --- 3. HORIZONTAL SCROLL LOGIC ---
window.addEventListener('scroll', () => {
    const horizontalSection = document.querySelector('.horizontal-scroll-container');
    const horizontalContent = document.querySelector('.horizontal-content');

    if (!horizontalSection || !horizontalContent) return;

    const offsetTop = horizontalSection.offsetTop;
    const sectionHeight = horizontalSection.offsetHeight;
    const windowHeight = window.innerHeight;

    let scrollDistance = window.pageYOffset - offsetTop;

    // Boundary checks
    if (scrollDistance < 0) scrollDistance = 0;
    if (scrollDistance > (sectionHeight - windowHeight)) scrollDistance = sectionHeight - windowHeight;

    // Calculate translation
    const contentWidth = horizontalContent.scrollWidth;
    const maxHorizontalScroll = contentWidth - window.innerWidth + (window.innerWidth * 0.1); 
    
    const percentage = scrollDistance / (sectionHeight - windowHeight);
    const horizontalMove = percentage * maxHorizontalScroll;

    horizontalContent.style.transform = `translateX(-${horizontalMove}px)`;
});
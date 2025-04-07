// Initialize state
let currentLang = 'en';
let lastScrollTop = 0;
// --- Preloader Hiding on Window Load ---
window.addEventListener('load', () => {
    // Force scroll to top AFTER everything is loaded
    window.scrollTo(0, 0);

    const preloader = document.getElementById('preloader');
    // Don't fade if reduced motion is preferred - hide immediately via CSS
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        if (preloader) {
             // Add hidden class (starts fade-out transition defined in CSS)
             preloader.classList.add('hidden');
        }
    } else {
         // If reduced motion, ensure it's hidden (CSS should also handle this)
         if (preloader) {
            preloader.style.display = 'none';
         }
    }
    // Reset scroll position again just in case preloader hiding caused a shift
    // Might be redundant, but safe.
    setTimeout(() => window.scrollTo(0, 0), 0);
});
// --- Language Toggle ---
function toggleLanguage() {
    const enContent = document.querySelector('.content.en');
    const grContent = document.querySelector('.content.gr');
    const activeContent = (currentLang === 'en') ? enContent : grContent;
    const inactiveContent = (currentLang === 'en') ? grContent : enContent;
    // const transitionDuration = 400; // No longer needed for timeout

    // Start hiding the currently active content by adding 'hidden' class
    activeContent.classList.add('hidden');
    activeContent.classList.remove('active'); // Mark as inactive immediately

    // Prepare the inactive content for display
    inactiveContent.classList.remove('hidden'); // Remove hidden to start fade-in
    inactiveContent.classList.add('active');    // Mark as active

    // Update current language and button text
    currentLang = (currentLang === 'en') ? 'gr' : 'en';
    document.getElementById('language-text').textContent = (currentLang === 'en') ? 'GR/EN' : 'EN/GR';

    // No setTimeout needed as positioning is not changing complexly
}


// --- Theme Toggle ---
function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    if (currentTheme === 'dark') {
        document.documentElement.removeAttribute('data-theme');
        document.querySelector('.theme-toggle').innerHTML = '<i class="fas fa-moon" style="color: var(--icon-color);"></i><span>Night Mode</span>';
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        document.querySelector('.theme-toggle').innerHTML = '<i class="fas fa-sun" style="color: var(--icon-color);"></i><span>Light Mode</span>';
    }
    updateThemeColorMeta(); // Update meta tag after theme change
}

// --- Theme Color Meta Tag Update ---
function updateThemeColorMeta() {
    const metaThemeColor = document.querySelector("meta[name=theme-color]");
    if (metaThemeColor) {
        // Get the computed background color from the body
        const bodyBgColor = getComputedStyle(document.body).getPropertyValue('--bg-color').trim();
        if (bodyBgColor) {
             metaThemeColor.setAttribute('content', bodyBgColor);
        }
    } else {
        console.warn("Meta tag theme-color not found!");
    }
}

// --- Scroll Event Handling (Scroll-to-top and Hide Toggles) ---
let scrollToTopButton = document.getElementById("scrollToTopBtn");
const scrollThreshold = 600; // Show button after scrolling 600px
const scrollBuffer = 5; // Buffer for hiding toggles

function handleScroll() {
    // Scroll-to-top button visibility
    if (document.body.scrollTop > scrollThreshold || document.documentElement.scrollTop > scrollThreshold) {
        scrollToTopButton.classList.add('show');
    } else {
        scrollToTopButton.classList.remove('show');
    }

    // Hide/show theme/lang toggles
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const themeToggle = document.querySelector('.theme-toggle');
    const langToggle = document.querySelector('.lang-toggle');

    if (scrollTop > lastScrollTop + scrollBuffer) { // Scrolling down
        themeToggle?.classList.add('hide-on-scroll');
        langToggle?.classList.add('hide-on-scroll');
    } else if (scrollTop < lastScrollTop - scrollBuffer || scrollTop === 0) { // Scrolling up or at top
        themeToggle?.classList.remove('hide-on-scroll');
        langToggle?.classList.remove('hide-on-scroll');
    }
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
}

window.addEventListener('scroll', handleScroll);

// Scroll to Top Button Click
scrollToTopButton.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Native smooth scroll
    });
});

// --- "See More" Toggle ---
function setupSeeMoreToggle(buttonId, contentId, moreText, lessText) {
    const button = document.getElementById(buttonId);
    const content = document.getElementById(contentId);
    if (button && content) {
        button.addEventListener('click', function() {
            if (content.classList.contains('expanded')) {
                content.classList.remove('expanded');
                this.innerHTML = `${moreText} <i class="fas fa-arrow-down"></i>`;
            } else {
                content.classList.add('expanded');
                this.innerHTML = `${lessText} <i class="fas fa-arrow-up"></i>`;
            }
        });
    }
}

// --- Button Click Feedback ---
function addButtonFeedback(buttonElement) {
    buttonElement.addEventListener('click', () => {
        // Prevent adding class if reduced motion is preferred
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            return;
        }
        buttonElement.classList.add('button-feedback');
        setTimeout(() => {
            buttonElement.classList.remove('button-feedback');
        }, 200); // Match animation duration
    });
}

// --- Initialization on DOMContentLoaded ---
document.addEventListener('DOMContentLoaded', () => {
    // Set initial theme color
    updateThemeColorMeta();

    // Setup "See More" toggles
    setupSeeMoreToggle('see-more-btn-en', 'more-experience-en', 'See More', 'See Less');
    setupSeeMoreToggle('see-more-btn-gr', 'more-experience-gr', 'Δείτε Περισσότερα', 'Δείτε Λιγότερα');

    // --- Intersection Observer for Scroll-Triggered Animations ---
    const sectionsToFade = document.querySelectorAll('.fade-in-section');
    if ('IntersectionObserver' in window) {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1 // Trigger when 10% is visible
        };

        const observerCallback = (entries, observer) => {
            entries.forEach(entry => {
                // Don't animate if reduced motion is preferred
                if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
                   entry.target.classList.add('is-visible'); // Make visible immediately
                   observer.unobserve(entry.target);
                   return;
                }

                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target); // Stop observing once visible
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);
        sectionsToFade.forEach(section => {
            observer.observe(section);
        });
    } else {
         // Fallback for browsers without IntersectionObserver: make sections visible
         sectionsToFade.forEach(section => section.classList.add('is-visible'));
    }

    // --- Add Click Feedback to Buttons ---
    const buttonsToAnimate = document.querySelectorAll(
        '.download-btn, .see-more-btn, .theme-toggle, .lang-toggle, #scrollToTopBtn, .project-links a'
    );
    buttonsToAnimate.forEach(button => {
        addButtonFeedback(button);
    });

}); // End DOMContentLoaded


// --- Preloader Hiding on Window Load ---
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    // Don't fade if reduced motion is preferred - hide immediately via CSS
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        if (preloader) {
             // Add hidden class (starts fade-out transition defined in CSS)
             preloader.classList.add('hidden');
        }
    } else {
         // If reduced motion, ensure it's hidden (CSS should also handle this)
         if (preloader) {
            preloader.style.display = 'none';
         }
    }
});
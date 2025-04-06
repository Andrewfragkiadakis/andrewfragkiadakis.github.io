// Initialize current language and scroll position - Tracks state
let currentLang = 'en';       // Starts with English
let lastScrollTop = 0;        // Tracks last scroll position

// Function to toggle between English and Greek content
function toggleLanguage() {
    const enContent = document.querySelector('.content.en'); // English content div
    const grContent = document.querySelector('.content.gr'); // Greek content div
    if (currentLang === 'en') { // If English is active
        enContent.classList.add('hidden');      // Hide English
        enContent.classList.remove('active');   // Remove active state
        grContent.classList.remove('hidden');   // Show Greek
        grContent.classList.add('active');      // Set Greek as active
        currentLang = 'gr';                     // Update language
        document.getElementById('language-text').textContent = 'EN/GR'; // Update button text
    } else { // If Greek is active
        grContent.classList.add('hidden');      // Hide Greek
        grContent.classList.remove('active');   // Remove active state
        enContent.classList.remove('hidden');   // Show English
        enContent.classList.add('active');      // Set English as active
        currentLang = 'en';                     // Update language
        document.getElementById('language-text').textContent = 'GR/EN'; // Update button text
    }
}

// Function to toggle between light and dark themes
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

// --- START: Updated Scroll to Top Button Logic ---
// Get the button
let scrollToTopButton = document.getElementById("scrollToTopBtn");
// Increase the scroll threshold - button appears later
const scrollThreshold = 600; // Show button after scrolling 600px (increased from 200)

// Define the scrollFunction separately to attach/detach if needed,
// though window.onscroll is simple enough here.
function scrollFunction() {
    // Check scroll position - Removed the mobile check
    if (document.body.scrollTop > scrollThreshold || document.documentElement.scrollTop > scrollThreshold) {
        scrollToTopButton.classList.add('show');
    } else {
        scrollToTopButton.classList.remove('show');
    }

    // Also handle hiding/showing theme/lang toggles (existing logic)
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop; // Current scroll position
    // Use a small buffer to prevent hiding on slight upward scrolls during momentum scrolling
    const scrollBuffer = 5;
    if (scrollTop > lastScrollTop + scrollBuffer) { // Scrolling down
        document.querySelector('.theme-toggle').classList.add('hide-on-scroll');
        document.querySelector('.lang-toggle').classList.add('hide-on-scroll');
    } else if (scrollTop < lastScrollTop - scrollBuffer) { // Scrolling up
        document.querySelector('.theme-toggle').classList.remove('hide-on-scroll');
        document.querySelector('.lang-toggle').classList.remove('hide-on-scroll');
    }
    // Update lastScrollTop, ensuring it's not negative
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
}

// Assign the function to the scroll event
window.onscroll = scrollFunction;


// When the user clicks on the button, scroll to the top of the document
scrollToTopButton.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Standard smooth scroll
    });
    // Note: The exact speed/duration of 'smooth' is browser-dependent.
    // Custom JavaScript animation would be needed for precise control.
});
// --- END: Updated Scroll to Top Button Logic ---

// Animate skill bars on page load - Triggers progress bar animation
window.onload = function() {
    const fills = document.querySelectorAll('.skill-fill'); // All skill bars
    fills.forEach(fill => fill.classList.add('animate'));   // Add animation class
};

// Toggle "see more" for English experience - Expands/collapses extra content
document.getElementById('see-more-btn-en').addEventListener('click', function() {
    const moreExperience = document.getElementById('more-experience-en'); // Extra experience div
    if (moreExperience.classList.contains('expanded')) { // If expanded
        moreExperience.classList.remove('expanded');     // Collapse it
        this.innerHTML = 'See More <i class="fas fa-arrow-down"></i>'; // Update button text
    } else { // If collapsed
        moreExperience.classList.add('expanded');        // Expand it
        this.innerHTML = 'See Less <i class="fas fa-arrow-up"></i>'; // Update button text
    }
});

// Toggle "see more" for Greek experience - Expands/collapses extra content
document.getElementById('see-more-btn-gr').addEventListener('click', function() {
    const moreExperience = document.getElementById('more-experience-gr'); // Extra experience div
    if (moreExperience.classList.contains('expanded')) { // If expanded
        moreExperience.classList.remove('expanded');     // Collapse it
        this.innerHTML = 'Δείτε Περισσότερα <i class="fas fa-arrow-down"></i>'; // Update button text
    } else { // If collapsed
        moreExperience.classList.add('expanded');        // Expand it
        this.innerHTML = 'Δείτε Λιγότερα <i class="fas fa-arrow-up"></i>'; // Update button text
    }
});

// Note: Merged the original scroll listener for theme/lang toggles with the new one for the scroll-to-top button.

// Function to update the theme-color meta tag
function updateThemeColorMeta() {
    const metaThemeColor = document.querySelector("meta[name=theme-color]");
    if (metaThemeColor) {
        // Get the computed background color from the body
        // .trim() removes potential leading/trailing whitespace
        const bodyBgColor = getComputedStyle(document.body).getPropertyValue('--bg-color').trim();
        if (bodyBgColor) {
             metaThemeColor.setAttribute('content', bodyBgColor);
             // console.log("Theme color meta updated to:", bodyBgColor); // For debugging
        }
    } else {
        console.warn("Meta tag theme-color not found!");
    }
}

// --- ADD THIS LINE AT THE END OF THE SCRIPT ---
// Set the initial theme color based on the default theme
document.addEventListener('DOMContentLoaded', updateThemeColorMeta);
// --- END ADD ---
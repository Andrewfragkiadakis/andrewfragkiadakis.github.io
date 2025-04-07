/**
 * script.js - Consolidated script for Andreas Fragkiadakis Portfolio
 */

(function() {
    'use strict';

    // --- State Variables ---
    let activeLinkObserver = null;
    let intersectingSections = {};
    let navElement = null;
    let navLinksNodeList = null;
    let navHeight = 60; // Default nav height
    const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // --- Early Setup ---
    if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0); // Force scroll to top on initial load

    // --- Core Functions ---

    /** Updates the theme-color meta tag based on computed background color. */
    function updateThemeColorMeta() {
        const metaThemeColor = document.querySelector("meta[name=theme-color]");
        if (metaThemeColor) {
            // Use timeout to ensure CSS variables are applied after theme change
            setTimeout(() => {
                const bodyBgColor = getComputedStyle(document.documentElement).getPropertyValue('--bg-color').trim();
                if (bodyBgColor) {
                    metaThemeColor.setAttribute('content', bodyBgColor);
                }
            }, 0);
        } else {
            console.warn("Meta tag theme-color not found!");
        }
    }

    /**
     * Applies the specified theme (light/dark) to the document and updates UI.
     * @param {string} theme - 'light' or 'dark'.
     */
    function applyTheme(theme) {
        const themeToggle = document.querySelector('.theme-toggle');
        const themeIcon = themeToggle?.querySelector('i');
        const themeSpan = themeToggle?.querySelector('span');

        if (theme === 'dark') {
            document.documentElement.setAttribute('data-theme', 'dark');
            if (themeIcon) themeIcon.className = 'fas fa-sun'; // Use class assignment
            if (themeSpan) themeSpan.textContent = 'Light Mode';
        } else {
            document.documentElement.removeAttribute('data-theme');
            if (themeIcon) themeIcon.className = 'fas fa-moon'; // Use class assignment
            if (themeSpan) themeSpan.textContent = 'Night Mode';
        }
        updateThemeColorMeta();
    }

    /** Toggles the theme and saves preference. */
    function toggleTheme() {
        const currentTheme = document.documentElement.getAttribute('data-theme') || 'light'; // Default to light if attribute missing
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        applyTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    }

    /**
     * Applies the specified language (en/gr) to the document and updates UI.
     * @param {string} lang - 'en' or 'gr'.
     */
    function applyLanguage(lang) {
        document.documentElement.lang = lang; // Set lang attribute on <html>

        // Toggle content visibility using 'active' and 'hidden' classes
        document.querySelectorAll('.language-content').forEach(content => {
            const contentLang = content.classList.contains('en') ? 'en' : 'gr';
            content.classList.toggle('hidden', contentLang !== lang);
            content.classList.toggle('active', contentLang === lang);
        });

        // Toggle nav link text spans
        document.querySelectorAll('.nav-item span').forEach(span => {
            const spanLang = span.classList.contains('lang-en') ? 'en' : 'gr';
            span.classList.toggle('hidden', spanLang !== lang);
        });

        // Update language toggle button text
        const langText = document.getElementById('language-text');
        if (langText) {
            langText.textContent = lang === 'en' ? 'GR/EN' : 'EN/GR';
        }

        // Update "See More" button visibility and reset its text based on current state
        const seeMoreBtnEn = document.getElementById('see-more-btn-en');
        const seeMoreBtnGr = document.getElementById('see-more-btn-gr');
        const moreExperienceEn = document.getElementById('more-experience-en');
        const moreExperienceGr = document.getElementById('more-experience-gr');

        if (seeMoreBtnEn && moreExperienceEn) {
            seeMoreBtnEn.style.display = (lang === 'en') ? 'flex' : 'none';
            seeMoreBtnEn.innerHTML = moreExperienceEn.classList.contains('expanded')
                ? `See Less <i class="fas fa-arrow-up"></i>`
                : `See More <i class="fas fa-arrow-down"></i>`;
        }
        if (seeMoreBtnGr && moreExperienceGr) {
            seeMoreBtnGr.style.display = (lang === 'gr') ? 'flex' : 'none';
            seeMoreBtnGr.innerHTML = moreExperienceGr.classList.contains('expanded')
                ? `Δείτε Λιγότερα <i class="fas fa-arrow-up"></i>`
                : `Δείτε Περισσότερα <i class="fas fa-arrow-down"></i>`;
        }

        // Reset the Intersection Observer for active nav links
        setupActiveLinkObserver();
        // Ensure scroll position is reasonable after content swap
         window.scrollTo(window.scrollX, window.scrollY); // Maintain current scroll y-pos if possible
         setTimeout(setupActiveLinkObserver, 50); // Re-run observer setup after a tiny delay for DOM updates
    }

    /** Toggles the language and saves preference. */
    function toggleLanguage() {
        const currentLang = document.documentElement.lang || 'en'; // Default to 'en' if not set
        const newLang = currentLang === 'en' ? 'gr' : 'en';
        applyLanguage(newLang);
        localStorage.setItem('language', newLang);
    }

    /**
     * Sets up the toggle functionality for "See More" sections.
     */
    function setupSeeMoreToggle(buttonId, contentId, moreText, lessText) {
        const button = document.getElementById(buttonId);
        const content = document.getElementById(contentId);
        console.log(`Setting up See More: Button ID: ${buttonId}, Found:`, button, `Content ID: ${contentId}, Found:`, content); // DEBUG

        if (button && content) {
            // Set initial text based on current state (e.g., if HTML has 'expanded' class already)
            button.innerHTML = content.classList.contains('expanded')
                ? `${lessText} <i class="fas fa-arrow-up"></i>`
                : `${moreText} <i class="fas fa-arrow-down"></i>`;

            button.addEventListener('click', function() {
                console.log(`See More Button Clicked: ${buttonId}`); // DEBUG
                const isExpanded = content.classList.toggle('expanded');
                console.log(`Content ${contentId} is now expanded: ${isExpanded}`); // DEBUG
                // Set text based on the NEW state AFTER toggling
                this.innerHTML = isExpanded
                    ? `${lessText} <i class="fas fa-arrow-up"></i>`
                    : `${moreText} <i class="fas fa-arrow-down"></i>`;
            });
            console.log(`Event listener added for button: ${buttonId}`); // DEBUG
        } else {
            console.warn(`Could not setup See More for ${buttonId} or ${contentId} - Elements not found.`); // DEBUG
        }
    }

    /** Adds click feedback animation class. */
    function addButtonFeedback(buttonElement) {
        if (!buttonElement) return;
        buttonElement.addEventListener('click', () => {
            if (isReducedMotion) return;
            buttonElement.classList.add('button-feedback');
            setTimeout(() => buttonElement.classList.remove('button-feedback'), 200);
        });
    }

    /** Sets the 'active' class on the correct navigation link. */
    function setActiveLink(targetId) {
        navLinksNodeList?.forEach(link => {
            link.classList.remove('active');
            if (targetId && link.getAttribute('href') === `#${targetId}`) {
                link.classList.add('active');
            }
        });
    }

    /** Gets section elements with IDs within the currently active language block. */
    function getActiveLanguageSections() {
        const activeContent = document.querySelector('.language-content.active');
        return activeContent ? activeContent.querySelectorAll('section[id]') : [];
    }

    /** Sets up/resets the Intersection Observer for nav link highlighting. */
    function setupActiveLinkObserver() {
        if (activeLinkObserver) {
            activeLinkObserver.disconnect(); // Disconnect old observer
            // console.log("Disconnected old observer."); // DEBUG
        }

        const sections = getActiveLanguageSections();
        intersectingSections = {}; // Reset state

        if (sections.length === 0 || !('IntersectionObserver' in window) || !navElement) {
             // console.log(`Observer setup skipped: Sections: ${sections.length}, Supported: ${'IntersectionObserver' in window}, Nav: ${!!navElement}`); // DEBUG
            setActiveLink(null); // Clear active link if setup fails
            return;
        }

        navHeight = navElement.offsetHeight || 60;
        const rootMargin = `-${navHeight + 50}px 0px -40% 0px`; // Adjust calculation logic if needed

        const observerOptions = {
            root: null,
            rootMargin: rootMargin,
            threshold: 0 // Trigger near boundary
        };

        const observerCallback = (entries) => {
            entries.forEach(entry => {
                intersectingSections[entry.target.id] = entry.isIntersecting;
            });

            let latestVisibleSectionId = null;
            const currentSections = getActiveLanguageSections(); // Use current sections

            for (const section of currentSections) { // Iterate in document order
                if (intersectingSections[section.id]) {
                    latestVisibleSectionId = section.id;
                    break; // Found the topmost visible
                }
            }

            // Fallback: If scrolled near top, before first section is "intersecting" based on rootMargin
            if (!latestVisibleSectionId && currentSections.length > 0 && window.pageYOffset < (currentSections[0].offsetTop - navHeight) ) {
                latestVisibleSectionId = currentSections[0].id;
            }

            // console.log("Setting active link to:", latestVisibleSectionId); // DEBUG
            setActiveLink(latestVisibleSectionId);
        };

        try {
            activeLinkObserver = new IntersectionObserver(observerCallback, observerOptions);
            sections.forEach(section => {
                 // console.log(`Observing section: #${section.id}`); // DEBUG
                activeLinkObserver.observe(section);
            });
        } catch (e) {
            console.error("Failed to create or start IntersectionObserver:", e);
            activeLinkObserver = null;
        }
    }

   // --- DOMContentLoaded Event Listener (Single Setup Point) ---
document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM Content Loaded - Initializing Setup");

    // Cache static elements
    navElement = document.getElementById('main-nav');
    navLinksNodeList = navElement?.querySelectorAll('.nav-item');
    const themeToggle = document.querySelector('.theme-toggle');
    const langToggle = document.querySelector('.lang-toggle');
    const scrollToTopBtn = document.getElementById("scrollToTopBtn");
    const sectionsToFade = document.querySelectorAll('.fade-in-section');
    const allButtons = document.querySelectorAll(
        '.btn, .download-btn, .see-more-btn, .theme-toggle, .lang-toggle, #scrollToTopBtn'
    );

    // --- Initial State Application ---
    // Theme
    const storedTheme = localStorage.getItem('theme') || 'light';
    applyTheme(storedTheme);
    // Language
    const storedLang = localStorage.getItem('language') || 'en';
    applyLanguage(storedLang); // This calls setupActiveLinkObserver internally

    // --- Setup Component Logic ---
    // See More Toggles (Includes console logs for debugging)
    setupSeeMoreToggle('see-more-btn-en', 'more-experience-en', 'See More', 'See Less');
    setupSeeMoreToggle('see-more-btn-gr', 'more-experience-gr', 'Δείτε Περισσότερα', 'Δείτε Λιγότερα');

    // Fade-In Observer Setup
    if ('IntersectionObserver' in window && !isReducedMotion) {
        const fadeObserverOptions = { root: null, rootMargin: '0px', threshold: 0.1 };
        const fadeObserverCallback = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        };
        const fadeObserver = new IntersectionObserver(fadeObserverCallback, fadeObserverOptions);
        sectionsToFade.forEach(section => fadeObserver.observe(section));
    } else {
        sectionsToFade.forEach(section => section.classList.add('is-visible')); // Show immediately
    }

    // Add Click Feedback to Buttons
    allButtons.forEach(button => addButtonFeedback(button));

    // Initial setup of Active Link Highlighting Observer
    setupActiveLinkObserver(); // Initial call

    // --- Attach Core Event Listeners ---
    themeToggle?.addEventListener('click', toggleTheme);
    langToggle?.addEventListener('click', toggleLanguage); // Observer reset handled within toggle->apply->setup

    scrollToTopBtn?.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: isReducedMotion ? 'auto' : 'smooth' });
    });

    // Scroll listener ONLY for scroll-to-top button visibility
    window.addEventListener('scroll', () => {
        const scrollThreshold = 300; // Show after scrolling down this much
        if (window.pageYOffset > scrollThreshold) {
            scrollToTopBtn?.classList.add('show');
        } else {
            scrollToTopBtn?.classList.remove('show');
        }
        // Active link highlighting is handled by the Intersection Observer
    });

    // *** MODIFIED Nav Link Click Listener (Handles Scrolling Manually) ***
    navLinksNodeList?.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); // <-- **PREVENT default anchor jump**
            const targetId = link.getAttribute('href')?.substring(1); // Get ID like "education"
            console.log(`Nav link clicked for: #${targetId}`); // DEBUG

            // Set active class immediately for visual feedback
            setActiveLink(targetId);

            // Find the target element *within the currently active language container*
            const activeContent = document.querySelector('.language-content.active');
            // Ensure we only search within the active container for the specific ID
            const targetElement = activeContent ? activeContent.querySelector(`#${targetId}`) : null;

            if (targetElement) {
                 console.log(`Target element found:`, targetElement); // DEBUG
                // Update navHeight right before scrolling (more accurate if dynamic)
                navHeight = navElement?.offsetHeight || 60;

                // Calculate the position to scroll to
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navHeight;
                console.log(`Calculated scroll position: ${targetPosition}`); // DEBUG

                try {
                    // Perform the scroll using JS
                    window.scrollTo({
                        top: targetPosition,
                        behavior: isReducedMotion ? 'auto' : 'smooth' // Respect motion preference
                    });
                } catch (error) {
                    console.error("Error during scrollTo:", error); // DEBUG
                     // Fallback for very old browsers maybe?
                     window.scrollTo(0, targetPosition);
                }

            } else {
                console.warn(`Target element #${targetId} not found within .language-content.active container.`); // DEBUG
            }
        });
    });
    // *** END OF MODIFIED Nav Link Click Listener ***

    console.log("DOM Setup Complete.");
}); // --- END DOMContentLoaded ---


    // --- Window Load Event Listener (Preloader Hiding) ---
    window.addEventListener('load', () => {
        console.log("Window Loaded - Hiding Preloader.");
        window.scrollTo(0, 0); // Ensure scrolled top right before hiding preloader

        const preloader = document.getElementById('preloader');
        if (preloader) {
            if (!isReducedMotion) {
                preloader.classList.add('hidden');
                preloader.addEventListener('transitionend', () => preloader.remove(), { once: true });
            } else {
                preloader.remove(); // Remove instantly if reduced motion
            }
        }

        // Optional final observer setup after all images/assets load
        setTimeout(setupActiveLinkObserver, 100); // Delay slightly after load
    }); // --- END Window Load ---

})(); // --- END IIFE ---
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

    // --- CORE FUNCTIONS ---
    // (Moved setupActiveLinkObserver here, outside event listeners)

    /** Gets section elements with IDs within the currently active language block. */
    function getActiveLanguageSections() {
        const activeContent = document.querySelector('.language-content.active');
        return activeContent ? activeContent.querySelectorAll('section[id]') : [];
    }

    /** Sets the 'active' class on the correct navigation link. */
    function setActiveLink(targetId) {
        navLinksNodeList?.forEach(link => { // Ensure navLinksNodeList is available
            link.classList.remove('active');
            if (targetId && link.getAttribute('href') === `#${targetId}`) {
                link.classList.add('active');
            }
        });
    }

    /** Sets up/resets the Intersection Observer for nav link highlighting. */
    function setupActiveLinkObserver() {
        if (activeLinkObserver) {
            activeLinkObserver.disconnect();
            // console.log("Disconnected old observer."); // DEBUG
        }

        // Ensure navElement and navLinksNodeList are cached before calling this
        if (!navElement || !navLinksNodeList) {
             console.warn("setupActiveLinkObserver called before nav elements cached."); // DEBUG
             return;
        }

        const sections = getActiveLanguageSections();
        intersectingSections = {}; // Reset state

        if (sections.length === 0 || !('IntersectionObserver' in window)) {
            // console.log(`Observer setup skipped: Sections: ${sections.length}, Supported: ${'IntersectionObserver' in window}`); // DEBUG
            setActiveLink(null); // Clear active link if setup fails
            return;
        }

        navHeight = navElement.offsetHeight || 60;
        const rootMargin = `-${navHeight + 50}px 0px -40% 0px`;

        const observerOptions = {
            root: null,
            rootMargin: rootMargin,
            threshold: 0
        };

        const observerCallback = (entries) => {
            entries.forEach(entry => {
                intersectingSections[entry.target.id] = entry.isIntersecting;
            });

            let latestVisibleSectionId = null;
            const currentSections = getActiveLanguageSections();

            for (const section of currentSections) {
                if (intersectingSections[section.id]) {
                    latestVisibleSectionId = section.id;
                    break;
                }
            }

            if (!latestVisibleSectionId && currentSections.length > 0 && window.pageYOffset < (currentSections[0].offsetTop - navHeight)) {
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
    } // --- END setupActiveLinkObserver ---


    /** Updates the theme-color meta tag based on computed background color. */
    function updateThemeColorMeta() {
        const metaThemeColor = document.querySelector("meta[name=theme-color]");
        if (metaThemeColor) {
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

    /** Applies the specified theme (light/dark) to the document and updates UI. */
    function applyTheme(theme) {
        const themeToggle = document.querySelector('.theme-toggle');
        const themeIcon = themeToggle?.querySelector('i');
        const themeSpan = themeToggle?.querySelector('span');

        if (theme === 'dark') {
            document.documentElement.setAttribute('data-theme', 'dark');
            if (themeIcon) themeIcon.className = 'fas fa-sun';
            if (themeSpan) themeSpan.textContent = 'Light Mode';
        } else {
            document.documentElement.removeAttribute('data-theme');
            if (themeIcon) themeIcon.className = 'fas fa-moon';
            if (themeSpan) themeSpan.textContent = 'Night Mode';
        }
        updateThemeColorMeta();
    }

    /** Toggles the theme and saves preference. */
    function toggleTheme() {
        const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        applyTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    }

    /** Applies the specified language (en/gr) to the document and updates UI. */
    function applyLanguage(lang) {
        document.documentElement.lang = lang;

        document.querySelectorAll('.language-content').forEach(content => {
            const contentLang = content.classList.contains('en') ? 'en' : 'gr';
            content.classList.toggle('hidden', contentLang !== lang);
            content.classList.toggle('active', contentLang === lang);
        });

        document.querySelectorAll('.nav-item span').forEach(span => {
            const spanLang = span.classList.contains('lang-en') ? 'en' : 'gr';
            span.classList.toggle('hidden', spanLang !== lang);
        });

        const langText = document.getElementById('language-text');
        if (langText) {
            langText.textContent = lang === 'en' ? 'GR/EN' : 'EN/GR';
        }

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

        // Reset observer AFTER language is applied and elements are potentially visible/cached
        // Ensure nav elements are cached before calling
        if (navElement && navLinksNodeList) {
             setupActiveLinkObserver();
        } else {
             // If called before DOMContentLoaded caches them, defer it slightly
             setTimeout(() => {
                 if (navElement && navLinksNodeList) {
                    setupActiveLinkObserver();
                 }
             }, 50);
        }
        window.scrollTo(window.scrollX, window.scrollY);
    }

    /** Toggles the language and saves preference. */
    function toggleLanguage() {
        const currentLang = document.documentElement.lang || 'en';
        const newLang = currentLang === 'en' ? 'gr' : 'en';
        applyLanguage(newLang);
        localStorage.setItem('language', newLang);
    }

    /** Sets up the toggle functionality for "See More" sections. */
    function setupSeeMoreToggle(buttonId, contentId, moreText, lessText) {
        const button = document.getElementById(buttonId);
        const content = document.getElementById(contentId);
        // console.log(`Setting up See More: Button ID: ${buttonId}, Found:`, button, `Content ID: ${contentId}, Found:`, content); // DEBUG

        if (button && content) {
            button.innerHTML = content.classList.contains('expanded')
                ? `${lessText} <i class="fas fa-arrow-up"></i>`
                : `${moreText} <i class="fas fa-arrow-down"></i>`;

            button.addEventListener('click', function() {
                // console.log(`See More Button Clicked: ${buttonId}`); // DEBUG
                const isExpanded = content.classList.toggle('expanded');
                // console.log(`Content ${contentId} is now expanded: ${isExpanded}`); // DEBUG
                this.innerHTML = isExpanded
                    ? `${lessText} <i class="fas fa-arrow-up"></i>`
                    : `${moreText} <i class="fas fa-arrow-down"></i>`;
            });
            // console.log(`Event listener added for button: ${buttonId}`); // DEBUG
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


    // --- DOMContentLoaded Event Listener (Setup that needs the DOM ready) ---
    document.addEventListener('DOMContentLoaded', () => {
        console.log("DOM Content Loaded - Initializing Setup");

        // Cache static elements needed by multiple functions/listeners
        navElement = document.getElementById('main-nav');
        navLinksNodeList = navElement?.querySelectorAll('.nav-item'); // Cache node list
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
        // Language (This calls setupActiveLinkObserver internally if elements are ready)
        const storedLang = localStorage.getItem('language') || 'en';
        applyLanguage(storedLang);

        // --- Setup Component Logic ---
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

        // Initial setup of Active Link Highlighting Observer (call after elements cached)
         setupActiveLinkObserver(); // First call now elements are definitely cached

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
        });

        // Nav Link Click Listener (Handles Scrolling Manually)
        navLinksNodeList?.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault(); // Prevent default anchor jump
                const targetId = link.getAttribute('href')?.substring(1);
                // console.log(`Nav link clicked for: #${targetId}`); // DEBUG

                setActiveLink(targetId); // Set active class immediately

                const activeContent = document.querySelector('.language-content.active');
                const targetElement = activeContent ? activeContent.querySelector(`#${targetId}`) : null;

                if (targetElement) {
                    // console.log(`Target element found:`, targetElement); // DEBUG
                    navHeight = navElement?.offsetHeight || 60; // Update navHeight

                    const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navHeight;
                    // console.log(`Calculated scroll position: ${targetPosition}`); // DEBUG

                    try {
                        window.scrollTo({
                            top: targetPosition,
                            behavior: isReducedMotion ? 'auto' : 'smooth'
                        });
                    } catch (error) {
                        console.error("Error during scrollTo:", error); // DEBUG
                         window.scrollTo(0, targetPosition);
                    }

                } else {
                    console.warn(`Target element #${targetId} not found within .language-content.active container.`); // DEBUG
                }
            });
        });

        console.log("DOM Setup Complete.");
    }); // --- END DOMContentLoaded ---


    // --- Window Load Event Listener (Tasks needing all assets loaded) ---
    window.addEventListener('load', () => {
        console.log("Window Loaded - Hiding Preloader and Registering Service Worker.");
        window.scrollTo(0, 0); // Ensure scrolled top right before hiding preloader

        // Preloader Hiding Logic
        const preloader = document.getElementById('preloader');
        if (preloader) {
            if (!isReducedMotion) {
                preloader.classList.add('hidden');
                // Use 'transitionend' which waits for the opacity transition
                preloader.addEventListener('transitionend', () => {
                   if(preloader.classList.contains('hidden')) { // Double check it's hidden before removing
                       preloader.remove();
                   }
                }, { once: true });
                 // Fallback timeout in case transitionend doesn't fire (e.g., display:none happens first)
                 setTimeout(() => {
                    if(preloader) preloader.remove();
                 }, 800); // Should match or exceed transition duration + delay
            } else {
                preloader.remove(); // Remove instantly if reduced motion
            }
        }

        // Optional final observer setup after all images/assets load
        // Ensure nav elements are cached before calling
        if (navElement && navLinksNodeList) {
             setTimeout(setupActiveLinkObserver, 100); // Delay slightly after load
        }


        // --- Service Worker Registration ---
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('/service-worker.js') // Path relative to origin (root)
                .then(registration => {
                    console.log('Service Worker registered successfully with scope:', registration.scope);
                })
                .catch(error => {
                    console.error('Service Worker registration failed:', error);
                });
        } else {
            console.log('Service workers are not supported in this browser.');
        }
        // --- End Service Worker Registration ---

    }); // --- END Window Load ---

})(); // --- END IIFE ---
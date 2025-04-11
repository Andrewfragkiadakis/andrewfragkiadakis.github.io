/**
 * script.js - Consolidated script for Andreas Fragkiadakis Portfolio
 * Updated: [Date of update] - Added automatic night mode based on local time (if no preference saved).
 */

(function() {
    'use strict';

    // --- State Variables ---
    let activeLinkObserver = null;
    let intersectingSections = {};
    let navElement = null;
    let navLinksNodeList = null;
    let navHeight = 60;
    const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // --- Early Setup ---
    if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);

    // --- CORE FUNCTIONS ---

    /** Gets section elements with IDs within the currently active language block. */
    function getActiveLanguageSections() {
        const activeContent = document.querySelector('.language-content.active');
        return activeContent ? activeContent.querySelectorAll('section[id]') : [];
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

    /** Sets up/resets the Intersection Observer for nav link highlighting. */
    function setupActiveLinkObserver() {
        if (activeLinkObserver) {
            activeLinkObserver.disconnect();
        }

        if (!navElement || !navLinksNodeList) {
             console.warn("Observer: Setup skipped - nav elements not cached yet.");
             return;
        }

        const sections = getActiveLanguageSections();
        intersectingSections = {};

        if (sections.length === 0 || !('IntersectionObserver' in window)) {
            setActiveLink(null);
            return;
        }

        navHeight = navElement.offsetHeight || 60;
        const rootMargin = `-${navHeight + 10}px 0px -40% 0px`;

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
            else if (!latestVisibleSectionId && currentSections.length > 0 && window.pageYOffset >= (currentSections[currentSections.length - 1].offsetTop - navHeight)) {
                 latestVisibleSectionId = currentSections[currentSections.length - 1].id;
             }

            setActiveLink(latestVisibleSectionId);
        };

        try {
            activeLinkObserver = new IntersectionObserver(observerCallback, observerOptions);
            sections.forEach(section => {
                activeLinkObserver.observe(section);
            });
        } catch (e) {
            console.error("Observer: Failed to create or start IntersectionObserver:", e);
            activeLinkObserver = null;
        }
    }

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
        // *** Save the user's explicit choice to localStorage ***
        localStorage.setItem('theme', newTheme);
        console.log("User toggled theme, preference saved:", newTheme); // Optional debug log
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

        if (navElement && navLinksNodeList) {
             setupActiveLinkObserver();
        } else {
             setTimeout(() => {
                 if (navElement && navLinksNodeList) {
                    setupActiveLinkObserver();
                 } else {
                    console.warn("Language Applied: Observer setup deferred but elements still not found.");
                 }
             }, 50);
        }
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

        if (button && content) {
            button.innerHTML = content.classList.contains('expanded')
                ? `${lessText} <i class="fas fa-arrow-up"></i>`
                : `${moreText} <i class="fas fa-arrow-down"></i>`;

            button.addEventListener('click', function() {
                const isExpanded = content.classList.toggle('expanded');
                this.innerHTML = isExpanded
                    ? `${lessText} <i class="fas fa-arrow-up"></i>`
                    : `${moreText} <i class="fas fa-arrow-down"></i>`;
            });
        } else {
            console.warn(`Could not setup See More for ${buttonId} or ${contentId} - Elements not found.`);
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

        // Language (Apply saved preference or default)
        const storedLang = localStorage.getItem('language') || 'en';
        applyLanguage(storedLang); // This also calls setupActiveLinkObserver

        // --- Theme Application Logic (NEW) ---
        const storedTheme = localStorage.getItem('theme');

        if (!storedTheme) {
            // No preference saved - check time for automatic theme
            const currentHour = new Date().getHours(); // Get user's local hour (0-23)
            // --- Define Night Hours (Adjust as needed) ---
            const nightStartHour = 21; // 9 PM
            const morningEndHour = 6;  // 6 AM
            // --- End Define Night Hours ---

            const isNightTime = currentHour >= nightStartHour || currentHour < morningEndHour;

            if (isNightTime) {
                console.log("No theme preference found. Applying dark theme based on local time.");
                applyTheme('dark');
                // We intentionally DO NOT save this to localStorage
                // to allow it to re-evaluate on the next visit.
            } else {
                 console.log("No theme preference found. Applying light theme based on local time.");
                 applyTheme('light');
                 // Also do not save this automatic light theme.
            }
        } else {
            // Preference IS saved - apply the stored theme
            console.log("Applying stored theme preference:", storedTheme);
            applyTheme(storedTheme);
        }
        // --- End Theme Application Logic ---


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
            sectionsToFade.forEach(section => section.classList.add('is-visible'));
        }

        // Add Click Feedback to Buttons
        allButtons.forEach(button => addButtonFeedback(button));

        // Initial setup of Active Link Highlighting Observer (called again for safety)
         setupActiveLinkObserver();

        // --- Attach Core Event Listeners ---
        themeToggle?.addEventListener('click', toggleTheme); // Toggles AND saves preference
        langToggle?.addEventListener('click', toggleLanguage); // Toggles AND saves preference

        scrollToTopBtn?.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: isReducedMotion ? 'auto' : 'smooth' });
        });

        // Scroll listener ONLY for scroll-to-top button visibility
        window.addEventListener('scroll', () => {
            const scrollThreshold = 300;
            if (scrollToTopBtn) {
                 if (window.pageYOffset > scrollThreshold) {
                    scrollToTopBtn.classList.add('show');
                } else {
                    scrollToTopBtn.classList.remove('show');
                }
            }
        }, { passive: true });

        // Nav Link Click Listener (Handles Scrolling Manually)
        navLinksNodeList?.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href')?.substring(1);
                if (!targetId) return;

                setActiveLink(targetId);

                const activeContent = document.querySelector('.language-content.active');
                const targetElement = activeContent ? activeContent.querySelector(`#${targetId}`) : null;

                if (targetElement) {
                    navHeight = navElement?.offsetHeight || 60;
                    const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navHeight;

                    try {
                        window.scrollTo({
                            top: targetPosition,
                            behavior: isReducedMotion ? 'auto' : 'smooth'
                        });
                    } catch (error) {
                        console.error("Error during scrollTo:", error);
                         window.scrollTo(0, targetPosition);
                    }

                } else {
                    console.warn(`Target element #${targetId} not found within .language-content.active container.`);
                }
            });
        });

        console.log("DOM Setup Complete.");
    }); // --- END DOMContentLoaded ---


    // --- Window Load Event Listener (Tasks needing all assets loaded) ---
    window.addEventListener('load', () => {
        console.log("Window Loaded - Hiding Preloader and Final Observer Check.");
        window.scrollTo(0, 0);

        // Preloader Hiding Logic
        const preloader = document.getElementById('preloader');
        if (preloader) {
            if (!isReducedMotion) {
                preloader.classList.add('hidden');
                preloader.addEventListener('transitionend', () => {
                   if(preloader.classList.contains('hidden')) {
                       preloader.remove();
                   }
                }, { once: true });
                 setTimeout(() => {
                    if(preloader) preloader.remove();
                 }, 800);
            } else {
                preloader.remove();
            }
        }

        // Optional final observer setup after all images/assets load
        if (navElement && navLinksNodeList) {
             setTimeout(setupActiveLinkObserver, 100);
        }

        // --- Service Worker Registration ---
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('/service-worker.js')
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
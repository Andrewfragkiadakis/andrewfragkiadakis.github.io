// Initialize state
let currentLang = 'en';
let lastScrollTop = 0;

// --- Language Toggle ---
function toggleLanguage() {
    const mainEnContent = document.querySelector('.content.en');
    const mainGrContent = document.querySelector('.content.gr');
    const navLangEn = document.querySelectorAll('.nav-item .lang-en');
    const navLangGr = document.querySelectorAll('.nav-item .lang-gr');

    if (currentLang === 'en') {
        // Hide English, Show Greek
        mainEnContent?.classList.add('hidden');
        mainEnContent?.classList.remove('active');
        navLangEn.forEach(el => el.classList.add('hidden'));

        mainGrContent?.classList.remove('hidden');
        mainGrContent?.classList.add('active');
        navLangGr.forEach(el => el.classList.remove('hidden'));

        currentLang = 'gr';
        document.getElementById('language-text').textContent = 'EN/GR';
    } else {
        // Hide Greek, Show English
        mainGrContent?.classList.add('hidden');
        mainGrContent?.classList.remove('active');
        navLangGr.forEach(el => el.classList.add('hidden'));

        mainEnContent?.classList.remove('hidden');
        mainEnContent?.classList.add('active');
        navLangEn.forEach(el => el.classList.remove('hidden'));

        currentLang = 'en';
        document.getElementById('language-text').textContent = 'GR/EN';
    }
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
    updateThemeColorMeta();
}

// --- Theme Color Meta Tag Update ---
function updateThemeColorMeta() {
    const metaThemeColor = document.querySelector("meta[name=theme-color]");
    if (metaThemeColor) {
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
const scrollThreshold = 600;
const scrollBuffer = 5;

function handleScroll() {
    // Scroll-to-top button visibility
    if (document.body.scrollTop > scrollThreshold || document.documentElement.scrollTop > scrollThreshold) {
        scrollToTopButton?.classList.add('show');
    } else {
        scrollToTopButton?.classList.remove('show');
    }

    // Hide/show theme/lang toggles
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const themeToggle = document.querySelector('.theme-toggle');
    const langToggle = document.querySelector('.lang-toggle');

    if (scrollTop > lastScrollTop + scrollBuffer && scrollTop > 100) {
        themeToggle?.classList.add('hide-on-scroll');
        langToggle?.classList.add('hide-on-scroll');
    } else if (scrollTop < lastScrollTop - scrollBuffer || scrollTop <= 100) {
        themeToggle?.classList.remove('hide-on-scroll');
        langToggle?.classList.remove('hide-on-scroll');
    }
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
}

window.addEventListener('scroll', handleScroll);

// Scroll to Top Button Click
scrollToTopButton?.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// --- "See More" Toggle ---
function setupSeeMoreToggle(buttonId, contentId, moreText, lessText) {
    const button = document.getElementById(buttonId);
    const content = document.getElementById(contentId);
    if (button && content) {
        button.addEventListener('click', function() {
            const isExpanded = content.classList.toggle('expanded');
            this.innerHTML = isExpanded
                ? `${lessText} <i class="fas fa-arrow-up"></i>`
                : `${moreText} <i class="fas fa-arrow-down"></i>`;
        });
    }
}

// --- Button Click Feedback ---
function addButtonFeedback(buttonElement) {
    buttonElement?.addEventListener('click', () => {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
        buttonElement.classList.add('button-feedback');
        setTimeout(() => buttonElement.classList.remove('button-feedback'), 200);
    });
}

// --- Initialization on DOMContentLoaded ---
document.addEventListener('DOMContentLoaded', () => {
    // Set initial theme color
    updateThemeColorMeta();

    // Setup "See More" toggles
    setupSeeMoreToggle('see-more-btn-en', 'more-experience-en', 'See More', 'See Less');
    setupSeeMoreToggle('see-more-btn-gr', 'more-experience-gr', 'Δείτε Περισσότερα', 'Δείτε Λιγότερα');

    // --- Intersection Observer for Scroll-Triggered Fades ---
    const sectionsToFade = document.querySelectorAll('.fade-in-section');
    if ('IntersectionObserver' in window) {
        const fadeObserverOptions = { root: null, rootMargin: '0px', threshold: 0.1 };
        const fadeObserverCallback = (entries, observer) => {
            entries.forEach(entry => {
                if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
                   entry.target.classList.add('is-visible');
                   observer.unobserve(entry.target);
                   return;
                }
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

    // --- Add Click Feedback to Buttons ---
    const buttonsToAnimate = document.querySelectorAll(
        '.btn', '.download-btn', '.see-more-btn',
        '.theme-toggle', '.lang-toggle', '#scrollToTopBtn'
    );
    buttonsToAnimate.forEach(button => addButtonFeedback(button));

    // --- Sticky Nav & Active Link Highlighting ---
    const nav = document.getElementById('main-nav');
    const navLinks = nav?.querySelectorAll('.nav-item');
    const sections = document.querySelectorAll('#about-skills, #education, #experience, #projects'); // Sections linked in nav

    if (nav && navLinks && sections.length > 0) {

        // Function to set active link
        const setActiveLink = (targetId) => {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (targetId && link.getAttribute('href') === `#${targetId}`) {
                    link.classList.add('active');
                }
            });
        };

        // Add click listener for immediate feedback
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                // Prevent default if needed, though smooth scroll CSS handles it
                // e.preventDefault();
                const targetId = link.getAttribute('href')?.substring(1);
                setActiveLink(targetId);
                // No need for manual scroll if CSS `scroll-behavior: smooth` is active
            });
        });


        // Intersection Observer for scroll-based highlighting
        if ('IntersectionObserver' in window) {
            const navHeight = nav.offsetHeight;
             // Adjust margin: Trigger when section top is ~150px below nav top, up to 40% from bottom
            const rootMargin = `-${navHeight + 50}px 0px -40% 0px`;

            const activeLinkObserverOptions = {
                root: null,
                rootMargin: rootMargin,
                threshold: 0 // Trigger slightly before/after boundary crossing
            };

             let intersectingSections = {}; // Keep track of currently intersecting sections

            const activeLinkCallback = (entries) => {
                 entries.forEach(entry => {
                     intersectingSections[entry.target.id] = entry.isIntersecting;
                 });

                 let latestVisibleSectionId = null;
                 // Find the ID of the section closest to the top that is intersecting
                 for (const section of sections) { // Iterate in document order
                     if (intersectingSections[section.id]) {
                         latestVisibleSectionId = section.id;
                         break; // Found the topmost visible one
                     }
                 }
                 setActiveLink(latestVisibleSectionId); // Highlight the determined section
            };

            const activeLinkObserver = new IntersectionObserver(activeLinkCallback, activeLinkObserverOptions);
            sections.forEach(section => activeLinkObserver.observe(section));

        } // End if IntersectionObserver

    } // End if (nav && navLinks...)

}); // End DOMContentLoaded


// --- Preloader Hiding on Window Load ---
window.addEventListener('load', () => {
    window.scrollTo(0, 0); // Force scroll to top
    const preloader = document.getElementById('preloader');
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        if (preloader) preloader.classList.add('hidden');
    } else {
        if (preloader) preloader.style.display = 'none';
    }
    setTimeout(() => window.scrollTo(0, 0), 0);
});
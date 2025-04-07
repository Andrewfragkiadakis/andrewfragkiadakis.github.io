// Initialize state
let currentLang = 'en';
let lastScrollTop = 0;
// Add these lines at the VERY TOP of your JS/script.js file
if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual'; // Disable browser's automatic scroll restoration
  }
  window.scrollTo(0, 0); // Force scroll to top as early as possible
  
  document.addEventListener('DOMContentLoaded', function() {
    // --- Start: Existing Preloader Logic might be here or in 'load' event ---
    const preloader = document.getElementById('preloader');
  
    // Find where you hide the preloader (e.g., inside window.load or similar)
    // If it's directly in DOMContentLoaded, the structure might be like this:
    if (preloader) {
      // It's often better to hide the preloader on 'load' to ensure images etc., are ready
      // For example purposes, let's assume hiding happens on 'load'
    }
  
    // --- Other existing DOMContentLoaded code ---
    const themeToggle = document.querySelector('.theme-toggle');
    const langToggle = document.querySelector('.lang-toggle');
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');
    const nav = document.getElementById('main-nav');
    const navHeight = nav ? nav.offsetHeight : 60; // Get nav height or use default
  
    // Function to toggle theme
    function toggleTheme() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme); // Store preference
  
        // Update icon (Example assumes you switch between moon and sun)
        const themeIcon = themeToggle.querySelector('i');
        if (newTheme === 'dark') {
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
            themeToggle.querySelector('span').textContent = 'Light Mode';
        } else {
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
            themeToggle.querySelector('span').textContent = 'Night Mode';
        }
        themeToggle.classList.add('button-feedback');
        setTimeout(() => themeToggle.classList.remove('button-feedback'), 200);
        // Update GTag theme color meta tag if needed
        const themeColorMeta = document.querySelector('meta[name="theme-color"]');
         if (themeColorMeta) {
             themeColorMeta.content = newTheme === 'dark' ? '#121D16' : '#f5fbf8';
         }
    }
  
    // Function to toggle language
    function toggleLanguage() {
      const currentLang = document.documentElement.lang;
      const newLang = currentLang === 'en' ? 'gr' : 'en';
      document.documentElement.lang = newLang;
      localStorage.setItem('language', newLang); // Store preference
  
      // Toggle content visibility
      document.querySelectorAll('.language-content').forEach(content => {
          content.classList.toggle('hidden', !content.classList.contains(newLang));
          content.classList.toggle('active', content.classList.contains(newLang));
      });
  
      // Toggle nav link text
      document.querySelectorAll('.nav-item span').forEach(span => {
          span.classList.toggle('hidden', !span.classList.contains(`lang-${newLang}`));
      });
  
      // Update language toggle button text/icon if needed
      const langText = document.getElementById('language-text');
      if (langText) {
          langText.textContent = newLang === 'en' ? 'EN/GR' : 'GR/EN'; // Adjust as needed
      }
       langToggle.classList.add('button-feedback');
        setTimeout(() => langToggle.classList.remove('button-feedback'), 200);
  
      // Update "See More" button visibility if necessary
      toggleSeeMoreButtonVisibility(newLang);
  
      // Update active nav link based on currently visible sections
      handleScroll(); // Re-check active section after language switch
    }
  
    // Function to toggle "See More" button based on language
    function toggleSeeMoreButtonVisibility(lang) {
        const seeMoreBtnEn = document.getElementById('see-more-btn-en');
        const seeMoreBtnGr = document.getElementById('see-more-btn-gr');
        if (seeMoreBtnEn) seeMoreBtnEn.style.display = (lang === 'en') ? 'flex' : 'none';
        if (seeMoreBtnGr) seeMoreBtnGr.style.display = (lang === 'gr') ? 'flex' : 'none';
    }
  
  
    // Apply stored theme and language on load
    const storedTheme = localStorage.getItem('theme');
    const storedLang = localStorage.getItem('language');
  
    // Set initial theme
    if (storedTheme) {
      document.documentElement.setAttribute('data-theme', storedTheme);
      const themeIcon = themeToggle.querySelector('i');
       if (storedTheme === 'dark') {
          themeIcon.classList.remove('fa-moon');
          themeIcon.classList.add('fa-sun');
          themeToggle.querySelector('span').textContent = 'Light Mode';
        } else {
          themeIcon.classList.remove('fa-sun');
          themeIcon.classList.add('fa-moon');
          themeToggle.querySelector('span').textContent = 'Night Mode';
        }
        const themeColorMeta = document.querySelector('meta[name="theme-color"]');
         if (themeColorMeta) {
             themeColorMeta.content = storedTheme === 'dark' ? '#121D16' : '#f5fbf8';
         }
    } else {
        // Default to light or check system preference if desired
        document.documentElement.setAttribute('data-theme', 'light');
    }
  
    // Set initial language
    const initialLang = storedLang || 'en'; // Default to English if nothing stored
    document.documentElement.lang = initialLang;
    document.querySelectorAll('.language-content').forEach(content => {
        content.classList.toggle('hidden', !content.classList.contains(initialLang));
        content.classList.toggle('active', content.classList.contains(initialLang));
    });
    document.querySelectorAll('.nav-item span').forEach(span => {
        span.classList.toggle('hidden', !span.classList.contains(`lang-${initialLang}`));
    });
    const langText = document.getElementById('language-text');
      if (langText) {
          langText.textContent = initialLang === 'en' ? 'EN/GR' : 'GR/EN';
      }
    toggleSeeMoreButtonVisibility(initialLang);
  
  
    // Event listeners for toggles
    if (themeToggle) themeToggle.addEventListener('click', toggleTheme);
    if (langToggle) langToggle.addEventListener('click', toggleLanguage);
  
  
    // --- Scroll to Top Button Logic ---
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) { // Show button after scrolling down 300px
            scrollToTopBtn.classList.add('show');
        } else {
            scrollToTopBtn.classList.remove('show');
        }
    });
  
    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        scrollToTopBtn.classList.add('button-feedback');
        setTimeout(() => scrollToTopBtn.classList.remove('button-feedback'), 200);
    });
  
    // --- "See More" Button Logic ---
    function setupSeeMore(btnId, contentId) {
        const seeMoreBtn = document.getElementById(btnId);
        const moreContent = document.getElementById(contentId);
  
        if (seeMoreBtn && moreContent) {
            seeMoreBtn.addEventListener('click', function() {
                const isExpanded = moreContent.classList.contains('expanded');
                moreContent.classList.toggle('expanded');
                seeMoreBtn.innerHTML = isExpanded ?
                    `See More <i class="fas fa-arrow-down"></i>` : // Or Greek version
                    `See Less <i class="fas fa-arrow-up"></i>`;     // Or Greek version
                  // Update Greek text based on current language if needed here
                   seeMoreBtn.classList.add('button-feedback');
                   setTimeout(() => seeMoreBtn.classList.remove('button-feedback'), 200);
            });
        }
    }
    setupSeeMore('see-more-btn-en', 'more-experience-en');
    setupSeeMore('see-more-btn-gr', 'more-experience-gr');
    // Initialize button text based on language (needs refinement if text is dynamic)
     const seeMoreBtnEn = document.getElementById('see-more-btn-en');
     const seeMoreBtnGr = document.getElementById('see-more-btn-gr');
     if (seeMoreBtnEn) seeMoreBtnEn.innerHTML = `See More <i class="fas fa-arrow-down"></i>`;
     if (seeMoreBtnGr) seeMoreBtnGr.innerHTML = `Δείτε Περισσότερα <i class="fas fa-arrow-down"></i>`;
  
  
    // --- Active Nav Link Highlighting ---
    const sections = document.querySelectorAll('.section'); // Target sections to track
    const navLinks = document.querySelectorAll('#main-nav .nav-item');
  
    function handleScroll() {
        let current = '';
        const scrollPosition = window.pageYOffset;
        const currentLang = document.documentElement.lang; // Get current language
  
        sections.forEach(section => {
            // Only consider sections visible in the current language
            const langContent = section.closest('.language-content');
            if (langContent && langContent.classList.contains(currentLang)) {
                const sectionTop = section.offsetTop - navHeight - 50; // Adjusted offset
                const sectionHeight = section.offsetHeight;
                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    current = section.getAttribute('id');
                }
            }
        });
  
        // Fallback for top of the page or sections without specific IDs in nav
         if (!current) {
             // Check if near the top before the first real section
              const aboutSkillsSection = document.querySelector('#about-skills');
              if (aboutSkillsSection && scrollPosition < (aboutSkillsSection.offsetTop - navHeight - 50)) {
                   current = 'about-skills'; // Highlight 'About' if above it
              }
             // Add more fallbacks if needed
         }
  
        navLinks.forEach(link => {
            link.classList.remove('active');
            // Check if the link's href matches the current section ID
            // Need to adjust for potential language differences if IDs change
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
            // Special case for about-skills if it maps to the ABOUT nav item
            else if (current === 'about-skills' && link.getAttribute('href') === '#about-skills') {
                 link.classList.add('active');
            }
        });
    }
  
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
  
  
    // --- Intersection Observer for Fade-In Animation ---
    const fadeElements = document.querySelectorAll('.fade-in-section');
  
    const observerOptions = {
      root: null, // relative to the viewport
      rootMargin: '0px',
      threshold: 0.1 // Trigger when 10% of the element is visible
    };
  
    const observerCallback = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target); // Optional: stop observing once visible
        }
      });
    };
  
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    fadeElements.forEach(el => observer.observe(el));
  
  
  }); // End of DOMContentLoaded
  
  
  // --- Preloader Hiding Logic (Likely needs to be WINDOW LOAD) ---
  // It's best to hide the preloader on 'load' to ensure all assets (images!) are loaded
  window.addEventListener('load', function() {
    const preloader = document.getElementById('preloader');
    if (preloader) {
      // **** ADD THIS LINE ****
      window.scrollTo(0, 0); // Ensure scrolled top RIGHT BEFORE hiding preloader
      // **** END OF ADDED LINE ****
  
      preloader.classList.add('hidden'); // Add hidden class to trigger CSS transition
      // Optional: Remove preloader from DOM after transition if desired
      // preloader.addEventListener('transitionend', () => {
      //   preloader.remove();
      // });
    }
  
    // Re-run scroll check after everything loads, in case layout shifted
    handleScroll(); // Needs handleScroll to be accessible here or defined globally
  
  }); // End of window.load
  
  // Make handleScroll globally accessible if needed by 'load' event listener
  // (Alternatively, define it outside DOMContentLoaded or pass it)
  function handleScroll() {
      const nav = document.getElementById('main-nav');
      const navHeight = nav ? nav.offsetHeight : 60;
      const sections = document.querySelectorAll('.section');
      const navLinks = document.querySelectorAll('#main-nav .nav-item');
      let current = '';
      const scrollPosition = window.pageYOffset;
      const currentLang = document.documentElement.lang;
  
      sections.forEach(section => {
          const langContent = section.closest('.language-content');
          if (langContent && langContent.classList.contains(currentLang)) {
              const sectionTop = section.offsetTop - navHeight - 50;
              const sectionHeight = section.offsetHeight;
              // Ensure section ID exists before checking scroll position
               const sectionId = section.getAttribute('id');
               if (sectionId && scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                   current = sectionId;
               }
          }
      });
  
       if (!current) {
             const aboutSkillsSection = document.querySelector('#about-skills');
              if (aboutSkillsSection && scrollPosition < (aboutSkillsSection.offsetTop - navHeight - 50)) {
                   current = 'about-skills';
              }
         }
  
      navLinks.forEach(link => {
          link.classList.remove('active');
          const linkHref = link.getAttribute('href');
          if (linkHref === `#${current}`) {
               link.classList.add('active');
           }
      });
  }
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
    // Re-evaluate active link after content switch if needed
    // (The intersection observer should handle this automatically on next scroll/paint)
}


// --- Theme Toggle ---
function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const themeToggleButton = document.querySelector('.theme-toggle'); // Get the button element
    if (currentTheme === 'dark') {
        document.documentElement.removeAttribute('data-theme');
        if (themeToggleButton) {
             themeToggleButton.innerHTML = '<i class="fas fa-moon" style="color: var(--icon-color);"></i><span>Night Mode</span>';
        }
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
         if (themeToggleButton) {
            themeToggleButton.innerHTML = '<i class="fas fa-sun" style="color: var(--icon-color);"></i><span>Light Mode</span>';
         }
    }
    updateThemeColorMeta();
}

// --- Theme Color Meta Tag Update ---
function updateThemeColorMeta() {
    const metaThemeColor = document.querySelector("meta[name=theme-color]");
    if (metaThemeColor) {
        // Need to get the computed style *after* the theme attribute might have changed
        setTimeout(() => {
            const bodyBgColor = getComputedStyle(document.documentElement).getPropertyValue('--bg-color').trim();
             if (bodyBgColor) {
                  metaThemeColor.setAttribute('content', bodyBgColor);
             }
        }, 0); // Timeout allows the browser to apply theme changes
    } else {
        console.warn("Meta tag theme-color not found!");
    }
}

// --- Scroll Event Handling (Scroll-to-top ONLY) ---
let scrollToTopButton = document.getElementById("scrollToTopBtn");
const scrollThreshold = 600;
const scrollBuffer = 5; // Keep buffer for scroll direction detection if needed elsewhere

function handleScroll() {
    // Scroll-to-top button visibility
    if (document.body.scrollTop > scrollThreshold || document.documentElement.scrollTop > scrollThreshold) {
        scrollToTopButton?.classList.add('show');
    } else {
        scrollToTopButton?.classList.remove('show');
    }

    // REMOVED Hide/show theme/lang toggles logic
    // let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    // const themeToggle = document.querySelector('.theme-toggle'); // No longer needed here
    // const langToggle = document.querySelector('.lang-toggle'); // No longer needed here

    // if (scrollTop > lastScrollTop + scrollBuffer && scrollTop > 100) {
    //     // themeToggle?.classList.add('hide-on-scroll'); // REMOVED
    //     // langToggle?.classList.add('hide-on-scroll'); // REMOVED
    // } else if (scrollTop < lastScrollTop - scrollBuffer || scrollTop <= 100) {
    //     // themeToggle?.classList.remove('hide-on-scroll'); // REMOVED
    //     // langToggle?.classList.remove('hide-on-scroll'); // REMOVED
    // }
    // lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Still useful if needed for other scroll logic
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
    // Note: theme/lang toggles are now selected even though they moved in HTML
    const buttonsToAnimate = document.querySelectorAll(
        '.btn', '.download-btn', '.see-more-btn',
        '.theme-toggle', '.lang-toggle', '#scrollToTopBtn'
    );
    buttonsToAnimate.forEach(button => addButtonFeedback(button));

    // --- Sticky Nav & Active Link Highlighting ---
    const nav = document.getElementById('main-nav');
    const navLinks = nav?.querySelectorAll('.nav-item');
    // Select sections within the *active* language container for observation
    const getActiveSections = () => {
        const activeContent = document.querySelector('.language-content.active');
        return activeContent ? activeContent.querySelectorAll('#about-skills, #education, #experience, #projects') : [];
    };

    if (nav && navLinks) { // Check nav and links exist

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
                const targetId = link.getAttribute('href')?.substring(1);
                setActiveLink(targetId);
                // Smooth scroll is handled by CSS
            });
        });


        // Intersection Observer for scroll-based highlighting
        if ('IntersectionObserver' in window) {
            const navHeight = nav.offsetHeight;
            // Adjust margin: Trigger when section top is ~50px below nav top, up to 40% from bottom
            const rootMargin = `-${navHeight + 50}px 0px -40% 0px`;

            const activeLinkObserverOptions = {
                root: null,
                rootMargin: rootMargin,
                threshold: 0 // Trigger slightly before/after boundary crossing
            };

            let intersectingSections = {}; // Keep track of currently intersecting sections
            let currentObserver = null; // Variable to hold the current observer instance

            const activeLinkCallback = (entries) => {
                 entries.forEach(entry => {
                     intersectingSections[entry.target.id] = entry.isIntersecting;
                 });

                 let latestVisibleSectionId = null;
                 const currentlyActiveSections = getActiveSections(); // Get sections for the *current* language
                 // Find the ID of the section closest to the top that is intersecting
                 for (const section of currentlyActiveSections) { // Iterate in document order
                     if (intersectingSections[section.id]) {
                         latestVisibleSectionId = section.id;
                         break; // Found the topmost visible one
                     }
                 }
                 setActiveLink(latestVisibleSectionId); // Highlight the determined section
            };

            // Function to setup or reset the observer
            const setupObserver = () => {
                // Disconnect previous observer if exists
                if (currentObserver) {
                    currentObserver.disconnect();
                }
                // Clear old intersection state
                intersectingSections = {};

                // Create and start new observer
                currentObserver = new IntersectionObserver(activeLinkCallback, activeLinkObserverOptions);
                const sections = getActiveSections();
                if (sections.length > 0) {
                    sections.forEach(section => currentObserver.observe(section));
                } else {
                    // If no sections found (e.g., during language switch transition), clear active link
                    setActiveLink(null);
                }
            };

            // Initial setup
            setupObserver();

            // Re-setup observer when language changes (listen for clicks on the lang toggle)
             const langToggleButton = document.querySelector('.lang-toggle');
             if (langToggleButton) {
                langToggleButton.addEventListener('click', () => {
                    // Use a short timeout to allow the DOM to update (classes 'hidden'/'active' to change)
                    setTimeout(setupObserver, 50);
                });
             }


        } // End if IntersectionObserver

    } // End if (nav && navLinks...)

}); // End DOMContentLoaded


// --- Preloader Hiding on Window Load ---
window.addEventListener('load', () => {
    // It's generally better practice to not force scroll position unless necessary
    // window.scrollTo(0, 0);
    const preloader = document.getElementById('preloader');
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        if (preloader) preloader.classList.add('hidden');
    } else {
        if (preloader) preloader.style.display = 'none';
    }
    // setTimeout(() => window.scrollTo(0, 0), 0); // Avoid if possible
});
# Andreas Fragkiadakis - Personal Portfolio (React Version)

Hello! This repository hosts my dynamic personal CV and portfolio website, rebuilt from the ground up using React. It showcases my skills, education, work experience, and projects in IT and Computer Engineering with a modern, interactive user experience.

This project represents a significant transformation from its original static HTML, CSS, and JavaScript implementation to a robust, component-based React application.

## Live Site
Visit the live portfolio at: <a href="https://andrewfragkiadakis.github.io" target="_blank" rel="noopener noreferrer">https://andrewfragkiadakis.github.io</a> <i class="fas fa-external-link-alt"></i>


[![React](https://img.shields.io/badge/React-Used-blue?logo=react)](https://reactjs.org/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow?logo=javascript)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![CSS3](https://img.shields.io/badge/CSS3-Styled-orange?logo=css3)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![Framer Motion](https://img.shields.io/badge/Framer%20Motion-Animations-purple)](https://www.framer.com/motion/)

## Original Static Version
This project was originally a static website built with HTML, CSS, and vanilla JavaScript. You can see details of that version in previous commits or a separate branch if maintained. The transformation to React aimed to enhance interactivity, maintainability, and implement more dynamic features.

## Key Features & Enhancements in the React Version

The React version retains all the core functionalities of the original site while introducing significant improvements and new features:

* **Component-Based Architecture:** Built with React, offering a modular, scalable, and maintainable codebase.
* **Dynamic "Story Mode" CV:**
    * Education and Experience sections are presented as an interactive timeline.
    * Items animate into view on scroll using **Framer Motion**, creating a scroll-telling experience.
* **AI-Powered Chatbot Assistant:**
    * An integrated chatbot (UI: `ChatbotIcon.js`, `ChatWindow.js`) to answer common questions about my skills, experience, and projects.
    * Uses a keyword-based knowledge system (`chatbotData.js`) and provides responses in the selected language.
* **Gamified & Interactive Skills Section:**
    * Core skills are displayed as interactive cards (`AboutSkills.js`).
    * On desktop, skill details pop out on hover.
    * On mobile, presents a streamlined view for better usability.
* **Responsive Design with Enhanced Mobile Experience:**
    * Fully mobile-friendly.
    * Includes dedicated mobile navigation controls for theme and language that appear/disappear dynamically on scroll (`Navigation.js`).
* **Advanced State Management:** Utilizes React Hooks for managing application state like theme, language, active navigation section, and component-local states.
* **Intersection Observer for Animations:** Custom hook `useIntersectionObserver.js` implemented for scroll-triggered fade-in animations on sections, enhancing visual appeal.
* **3D Elements (Experimental/Fun):**
    * Includes a "Fun Stuff!" section featuring an interactive 3D Fidget Spinner built with **React Three Fiber** (`FidgetSpinner3D.js`).
* **Core Portfolio Features (Modernized):**
    * Downloadable PDF version of my CV (English and Greek).
    * Light/Dark Theme Toggle with dynamic color switching using CSS variables and React state.
    * Bilingual support (English/Greek) with centralized content management (`translations.js`) and smooth language switching.
    * Sticky Navigation Bar (desktop) with active section highlighting.
    * Loading Preloader.
    * Project Showcase Grid (`Projects.js`).
    * Scroll-to-Top button.
* **PWA Capabilities:** Retains offline support and installability via Service Worker (`service-worker.js`) and `manifest.json` (assuming these are configured in your `public` folder for the React app).

## Built With

* **React:** A JavaScript library for building user interfaces.
* **JavaScript (ES6+):** For application logic.
* **CSS3:** For styling, using variables for theming and responsive design. (Your custom `styles.css` from `public` folder).
* **Framer Motion:** For "Story Mode" CV animations and potentially other UI animations.
* **React Three Fiber & Drei:** For rendering 3D graphics (e.g., `FidgetSpinner3D.js`).
* **React Hooks:** For state management and side effects (e.g., `useState`, `useEffect`, custom hooks).
* **Font Awesome:** For icons.

## Screenshot
![Website Screenshot](screenshot.png)

## About Me
I’m an IT & Computer Engineering student with expertise in networking, system administration, and web development. This site is a creative and dynamic representation of my professional journey, showcasing my ability to work with modern web technologies like React to build engaging user experiences.

---
Built with ❤️ and React.
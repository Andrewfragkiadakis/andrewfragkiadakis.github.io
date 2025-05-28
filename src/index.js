// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// If you decide to import styles.css here instead of public/index.html:
// import './index.css'; // or './App.css' if you rename/move styles.css

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Handle preloader (simple version, can be refined)
const preloader = document.getElementById('preloader');
if (preloader) {
    window.addEventListener('load', () => {
        preloader.classList.add('hidden'); // Assumes 'hidden' class has opacity: 0, pointer-events: none
        preloader.addEventListener('transitionend', () => {
           if(preloader.classList.contains('hidden')) {
             if (preloader.parentNode) { // Check if it's still in the DOM
                preloader.parentNode.removeChild(preloader);
             }
           }
        }, { once: true });
        // Fallback to remove preloader if transitionend doesn't fire
        setTimeout(() => {
            if (preloader && preloader.parentNode && preloader.classList.contains('hidden')) {
                preloader.parentNode.removeChild(preloader);
            }
        }, 800); // Match your original script's timeout
    });
}
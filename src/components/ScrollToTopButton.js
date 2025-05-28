// src/components/ScrollToTopButton.js
import React, { useState, useEffect } from 'react';

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility, { passive: true });
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <button
            id="scrollToTopBtn"
            title="Go to top"
            onClick={scrollToTop}
            className={isVisible ? 'show' : ''} // Your CSS handles opacity/visibility based on .show
            // style={{ display: isVisible ? 'flex' : 'none' }} // Alternative to CSS class for display
        >
            <i className="fas fa-arrow-up"></i>
        </button>
    );
};

export default ScrollToTopButton;
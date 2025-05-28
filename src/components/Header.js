// src/components/Header.js
import React from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver'; // Adjust path if needed

const Header = ({ t, language }) => {
    const [headerRef, isVisible] = useIntersectionObserver({ threshold: 0.1 });

    if (!t || !t.namePart1) {
        return <header className="header" ref={headerRef}>Loading header...</header>;
    }

    const cvLink = language === 'gr'
        ? "https://drive.google.com/uc?export=download&id=1b-GiyMU1D_6yxr70bmpufj_kIqKgW38A"
        : "https://drive.google.com/uc?export=download&id=1b-GiyMU1D_6yxr70bmpufj_kIqKgW38A";

    const gtagDownloadCV = () => {
        if (typeof gtag === 'function') {
            gtag('event', 'file_download', {
                'link_text': t.downloadCV,
                'link_url': cvLink,
                'language': language
            });
        }
    };

    return (
        <header 
            className={`header fade-in-section ${isVisible ? 'is-visible' : ''}`}
            ref={headerRef}
        >
            <h1><span>{t.namePart1}</span> <span>{t.namePart2}</span></h1>
            <div className="contact-info">
                <span><i className="fas fa-map-marker-alt"></i> {t.location}</span>
                <a href="tel:+306973453683"><i className="fas fa-phone"></i> {t.phone}</a>
                <a href="mailto:andrewfragkiadakis@gmail.com"><i className="fas fa-envelope"></i> {t.email}</a>
                <a href="https://linkedin.com/in/andreas-fragkiadakis" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-linkedin"></i> {t.linkedin}
                </a>
            </div>
            <a href={cvLink} className="download-btn" onClick={gtagDownloadCV}>
                <i className="fas fa-download"></i> {t.downloadCV}
            </a>
        </header>
    );
};

export default Header;
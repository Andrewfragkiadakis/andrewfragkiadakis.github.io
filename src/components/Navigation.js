// src/components/Navigation.js
import React, { useRef } from 'react'; // Removed useEffect if not directly used for observer here

const Navigation = ({ 
    navLinks, 
    theme, 
    language, 
    toggleTheme, 
    toggleLanguage, 
    themeStrings, 
    // langToggleString, // We'll derive text for mobile directly or use icons
    onNavClick, 
    activeSection,
    isMobileView,       // New prop from App.js
    showMobileControls  // New prop from App.js
}) => {
    const navRef = useRef(null); // For desktop nav, if needed for height calculations later

    // --- Mobile Floating Controls ---
    if (isMobileView) {
        return (
            <div className={`mobile-controls ${showMobileControls ? 'visible' : 'hidden'}`}>
                <button 
                    className="mobile-control-btn theme-toggle-mobile" 
                    onClick={toggleTheme} 
                    aria-label={theme === 'dark' ? (themeStrings?.lightMode || "Switch to Light Mode") : (themeStrings?.nightMode || "Switch to Dark Mode")}
                >
                    <i className={`fas ${theme === 'dark' ? 'fa-sun' : 'fa-moon'}`}></i>
                </button>
                <button 
                    className="mobile-control-btn lang-toggle-mobile" 
                    onClick={toggleLanguage} 
                    aria-label={`Switch to ${language === 'en' ? 'Greek' : 'English'}`}
                >
                    {/* Simple text icon for language, changes dynamically */}
                    <span>{language === 'en' ? 'GR' : 'EN'}</span>
                    {/* Alternative: Use a single globe icon that doesn't change
                        <i className="fas fa-globe"></i> 
                    */}
                </button>
            </div>
        );
    }

    // --- Desktop Navigation (Rendered if not isMobileView) ---
    // Fallback checks for desktop nav data
    if (!navLinks || typeof navLinks.about === 'undefined') {
        console.error("Navigation Component (Desktop): 'navLinks' prop is undefined or not structured as expected.", navLinks);
        return <nav id="main-nav" ref={navRef} style={{ padding: '10px', backgroundColor: 'red', color: 'white' }}>Error: Desktop navigation links data missing.</nav>; 
    }
    if (!themeStrings || typeof themeStrings.lightMode === 'undefined') {
        console.error("Navigation Component (Desktop): 'themeStrings' prop is undefined or not structured as expected.", themeStrings);
        themeStrings = { lightMode: "Light", nightMode: "Dark" }; // Basic fallback
    }

    return (
        <nav id="main-nav" ref={navRef}> {/* This whole nav will be hidden on mobile via CSS */}
            <div className="nav-content">
                <div className="nav-links">
                    <a href="#about-skills" className={`nav-item ${activeSection === 'about-skills' ? 'active' : ''}`} onClick={(e) => { e.preventDefault(); onNavClick('about-skills'); }}>
                        {navLinks.about} 
                    </a>
                    <a href="#education" className={`nav-item ${activeSection === 'education' ? 'active' : ''}`} onClick={(e) => { e.preventDefault(); onNavClick('education'); }}>
                        {navLinks.education}
                    </a>
                    <a href="#experience" className={`nav-item ${activeSection === 'experience' ? 'active' : ''}`} onClick={(e) => { e.preventDefault(); onNavClick('experience'); }}>
                        {navLinks.experience}
                    </a>
                    <a href="#projects" className={`nav-item ${activeSection === 'projects' ? 'active' : ''}`} onClick={(e) => { e.preventDefault(); onNavClick('projects'); }}>
                        {navLinks.projects}
                    </a>
                </div>
                <div className="nav-controls">
                    <button className="lang-toggle" onClick={toggleLanguage}>
                        <i className="fas fa-globe" style={{ color: 'var(--icon-color)' }}></i>
                        <span id="language-text">{language === 'en' ? 'GR/EN' : 'EN/GR'}</span> 
                    </button>
                    <button className="theme-toggle" onClick={toggleTheme}>
                        <i className={`fas ${theme === 'dark' ? 'fa-sun' : 'fa-moon'}`} style={{ color: 'var(--icon-color)' }}></i>
                        <span>{theme === 'dark' ? themeStrings.lightMode : themeStrings.nightMode}</span>
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;
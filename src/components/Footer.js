// src/components/Footer.js
import React from 'react';

const Footer = ({ t }) => {
    if (!t) {
        return <footer id="contact">Loading footer...</footer>;
    }
    return (
        <footer id="contact">
            <p>{t.copyright}</p>
        </footer>
    );
};

export default Footer;
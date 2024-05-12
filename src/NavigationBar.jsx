// NavigationBar.jsx

import React from 'react';

const NavigationBar = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const scrollToFooter = () => {
        const footer = document.getElementById('footer');
        footer.scrollIntoView({ behavior: 'smooth' });
    };

    const scrollToContactForm = () => {
        const contactForm = document.getElementById('contact-form'); // Correct the ID to match your ContactForm component
        contactForm.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="navbar">
            <div className="container">
                <div className="navbar-links">
                    <button className="nav-button" onClick={scrollToTop}>Home</button>
                    <button className="nav-button" onClick={scrollToFooter}>About</button>
                    <button className="nav-button" onClick={scrollToContactForm}>Contact</button>
                </div>
            </div>
        </div>
    );
};

export default NavigationBar;

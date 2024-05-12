// Footer.jsx

import React from 'react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer" id="footer">
      <div className="container">
        <div className="footer-links">
          <div className="footer-column">
            <p>MAIN OFFICE</p>
            <p>VICTOR HOUSE</p>
            <p>Moi avenue, near Ramtons main office</p>
            <p>11000-3600 NAIROBI</p>
          </div>
          <div className="footer-column">
            <p>Top Trending</p>
            <p>New movies</p>
            <p>Sizzling Hot</p>
            <p>Now in Cinema's</p>
            <p>Subscribe</p>
          </div>
          <div className="footer-column">
            <p>Terms and Conditions</p>
            <p>Privacy Policy</p>
            <p>Newsfeed</p>
            <p>Get In Touch</p>
          </div>
        </div>
        <button className="back-to-top" onClick={scrollToTop}>Back to Top</button>
      </div>
    </footer>
  );
};

export default Footer;

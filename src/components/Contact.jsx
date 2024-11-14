import React from 'react';
import '../css/contact.css';

export const Contact = () => {
    return (
        <div className="contact-container" id="contact">
          <h2>Let's Stay Connected!</h2>
          <div className="contact-links">
            <a href="https://www.linkedin.com/in/nidhi-sheth-3b454a210/" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href="https://github.com/shethnid" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href="shethnid@kean.edu" target="_blank" rel="noopener noreferrer">
              Email
            </a>
          </div>
          <footer>
            <p>All Rights Nidhi Sheth 2024</p>
          </footer>
        </div>
      );
};
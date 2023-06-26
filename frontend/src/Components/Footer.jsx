import React from 'react';
import './Footer.css';



const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h2>About Us</h2>
          <p>we are located at kenya and we offer best services you wish to have and we take you to your desired place of destination</p>
        </div>
        <div className="footer-section">
          <h2>Contact</h2>
          <ol className="contact-list">
            <li>Email: uberclassics254@gmail.com</li>
            <li>Phone: 0115049827</li>
            <li>Address: 123 Street, Nairobi, KENYA</li>
          </ol>
        </div>
        <div className="footer-section">
          <h2>Follow Us</h2>
          <div className="social-icons">
            <ol>
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Instagram</li>
            </ol>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Your Website. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
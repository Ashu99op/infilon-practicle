import React from 'react';
import './index.css';
import footerLogo from "../../assets/images/whitepace-logo.png";
import Button from '../common/button';
import fb from "../../assets/icons/Facebook.png";
import ln from "../../assets/icons/Linkedin.png";
import X from "../../assets/icons/Twitter.png"


function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section company-info">
          <img src={footerLogo} alt="Whitespace Logo" className="footer-logo" />
          <p>Whitespace was created for the new ways we live and work. We make a better workspace around the world.</p>
        </div>

        <div className="footer-section">
          <h4>Product</h4>
          <ul>
            <li><a href="#overview">Overview</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#stories">Customer stories</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Resources</h4>
          <ul>
            <li><a href="#blog">Blog</a></li>
            <li><a href="#guides">Guides & tutorials</a></li>
            <li><a href="#help">Help center</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Company</h4>
          <ul>
            <li><a href="#about">About us</a></li>
            <li><a href="#careers">Careers</a></li>
            <li><a href="#media">Media kit</a></li>
          </ul>
        </div>

        <div className="footer-section cta">
          <h4>Try It Today</h4>
          <p>Get started for free. Add your whole team as your needs grow.</p>
          <Button  text="Start today" textColor='#FFFFFF' isIcon/>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-links">
          <a href="#language">English</a>
          <a href="#terms">Terms & privacy</a>
          <a href="#security">Security</a>
          <a href="#status">Status</a>
          <span>©2021 Whitespace LLC.</span>
        </div>
        <div className="footer-socials">
          <img src={fb} alt="facebook" />
          <img src={ln} alt="LinkedIn" />
          <img src={X} alt="Twitter" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;

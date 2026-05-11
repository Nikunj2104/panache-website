import React from 'react';
import { MapPin, Phone, Mail, Droplet } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer id="contact" className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="logo mb-4">
              <div className="logo-icon">
                <Droplet size={24} />
              </div>
              <span className="logo-text" style={{ color: 'white' }}>Panache<span className="text-accent">Eng</span></span>
            </div>
            <p className="footer-desc">
              Delivering cutting-edge automation solutions that enhance productivity, ensure safety, and drive sustainable growth.
            </p>
          </div>

          <div className="footer-contact">
            <h4 className="footer-title">Contact Us</h4>
            <ul className="contact-list">
              <li>
                <MapPin size={20} className="text-accent" />
                <span>C-107, Gokuldham Housing Society, Manjalpur, GIDC Road, Vadodara 390 020, India.</span>
              </li>
              <li>
                <Phone size={20} className="text-accent" />
                <span>+91 9510909507</span>
              </li>
              <li>
                <Mail size={20} className="text-accent" />
                <span>panacheeng21@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Panache Engineering. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { MapPin, Phone, Mail } from 'lucide-react';
import logo from '../assets/pe-logo-new.png';
import './Footer.css';

const Footer = () => {
  return (
    <footer id="contact" className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="logo mb-4">
              <img src={logo} alt="Panache Engineering" className="footer-logo-img" />
            </div>
            <p className="footer-desc">
              Total engineering solutions: automation, instrumentation, electrical systems and on-site engineering support from Vadodara.
            </p>
          </div>

          <div className="footer-contact">
            <h4 className="footer-title">Start a plant conversation</h4>
            <ul className="contact-list">
              <li>
                <MapPin size={20} className="text-accent" />
                {/* <a 
                  href="https://www.google.com/maps/search/?api=1&query=Panache+Engineering+Vadodara" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="footer-link"
                > */}
                C-107, Gokuldham Housing Society, Manjalpur, GIDC Road, Vadodara 390 020, India.
                {/* </a> */}
              </li>
              <li>
                <Phone size={20} className="text-accent" />
                <a href="tel:+919510909507" className="footer-link" target="_blank" rel="noopener noreferrer">+91 9510909507</a>
              </li>
              <li>
                <Mail size={20} className="text-accent" />
                <a href="mailto:panacheeng21@gmail.com" className="footer-link" target="_blank" rel="noopener noreferrer">panacheeng21@gmail.com</a>
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

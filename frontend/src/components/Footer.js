import Map from "../assets/Map.png";
import Envelope from "../assets/Envelope.png";
import Call from "../assets/call.png";
import Whatsapp from "../assets/Whatsapp.png";
import LinkedIn from "../assets/Linkedin.png";
import Facebook from "../assets/Facebook.png";
import Instagram from "../assets/Instagram.png";
import Visa from "../assets/Visa.png";
import MasterCard from "../assets/Mastercard.png";
import Maestro from "../assets/Maestro.png";
import Amex from "../assets/Amex.png";
import "../css/Footer.css";

const Footer = () => {
    return (
      <footer className="footer">
        <div className="footer-container">
          {/* Contact Info */}
          <div>
            <h3 className="footer-heading">
              <img src={Map} alt="Map" className="icon" /> Find Us
            </h3>
            <p>371/5, Negombo Road, Seeduwa, Sri Lanka</p>

            <h3 className="footer-heading">
              <img src={Envelope} alt="Envelope" className="icon" /> Mail Us
            </h3>
            <p>info@srilankarentacar.com</p>

            <h3 className="footer-heading">
              <img src={Call} alt="Call" className="icon" /> Call Us
            </h3>
            <p>+94 77 778 0729</p>

            <h3 className="footer-heading">
              <img src={Whatsapp} alt="Whatsapp" className="icon" /> Chat with us on WhatsApp
            </h3>
            <p>+94 77 778 0729</p>
          </div>

          {/* About Section */}
          <div>
            <h3 className="footer-title">SR Rent A Car</h3>
            <p className="footer-text">
              “As a leading Sri Lanka car rental service provider, ‘SR Rent A Car’ offers one of the practical car rental choices for tourists, businessmen and locals who want to visit and explore the ‘Pearl of the Indian Ocean’. The company was established in 2004 and had been providing service like ever since.”
            </p>
          </div>

          {/* Useful Links & Subscribe */}
          <div>
            <h3 className="footer-title">Useful Links</h3>
            <ul className="footer-links">
              <li><a href="#">Airport Parking</a></li>
              <li><a href="#">9 Trees Boutique Villa</a></li>
              <li><a href="#">Explore Vacations (Sri Lanka)</a></li>
              <li><a href="#">Explore Vacations (Switzerland)</a></li>
              <li><a href="#">SR Transfers</a></li>
              <li><a href="#">Euro Motors</a></li>
            </ul>

            <h3 className="footer-title">Subscribe</h3>
            <p className="footer-text">Don't miss to subscribe to our new feeds, kindly fill the form below.</p>
            <div className="subscribe">
              <input type="email" placeholder="Email Address" className="subscribe-input" />
              <button className="subscribe-button">→</button>
            </div>
          </div>
        </div>

        {/* Follow Us Section */}
        <div className="social-media">
          <h3>Follow Us On</h3>
          <div className="social-icons">
            <img src={LinkedIn} alt="LinkedIn" className="social-icon" />
            <img src={Facebook} alt="Facebook" className="social-icon" />
            <img src={Instagram} alt="Instagram" className="social-icon" />
          </div>
        </div>

        {/* Payment Methods & Copyright */}
        <div className="footer-bottom">
          <div className="payment-methods">
            <img src={Visa} alt="Visa" className="payment-icon" />
            <img src={MasterCard} alt="MasterCard" className="payment-icon" />
            <img src={Maestro} alt="Maestro" className="payment-icon" />
            <img src={Amex} alt="American Express" className="payment-icon" />
          </div>
          <p className="copyright">Copyright © 2025, All Rights Reserved <span>SL Quick Ride</span></p>
        </div>
      </footer>
    );
};

export default Footer;

import '../Pages/Footer.css';
import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaLinkedinIn,
  FaYoutube
} from 'react-icons/fa6';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Section */}
        <div className="footer-left">
          <div className="logo">
            <img src="/Images/logo.png" alt="do List Logo" />
          </div>
          <p>Subscribe to our newsletter for the latest features and updates delivered to you.</p>
          <div className="newsletter">
            <input type="email" placeholder="Your email here" />
            <button>Join</button>
          </div>
          <small>
            By subscribing, you consent to our Privacy Policy and agree to receive updates.
          </small>
        </div>

        {/* Useful Links */}
        <div className="footer-links">
          <h4>Useful Links</h4>
          <ul>
            <li>Home Page</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Blog Posts</li>
            <li>FAQs</li>
          </ul>
        </div>

        {/* Resources */}
        <div className="footer-links">
          <h4>Resources</h4>
          <ul>
            <li>Help Center</li>
            <li>User Guide</li>
            <li>Community Forum</li>
            <li>Feedback</li>
            <li>Support</li>
          </ul>
        </div>

        {/* Connect with Us */}
        <div className="footer-links">
          <h4>Connect With Us</h4>
          <ul className="social-icons">
            <li><FaFacebookF /> Facebook</li>
            <li><FaInstagram /> Instagram</li>
            <li><FaXTwitter /> X</li>
            <li><FaLinkedinIn /> LinkedIn</li>
            <li><FaYoutube /> YouTube</li>
          </ul>
        </div>
      </div>

      <hr />

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>© 2024 Osumare. All rights reserved.</p>
        <div className="footer-policy">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Cookie Settings</a>
        </div>
      </div>
    </footer>
  );
}

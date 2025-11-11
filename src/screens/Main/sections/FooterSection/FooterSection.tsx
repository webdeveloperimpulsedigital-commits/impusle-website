import React, { useEffect, useState } from "react";
import "../FooterSection/FooterSection.css";
import { ArrowUp, Share2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../../../../components/ui/button";

export const FooterSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showConnectOptions, setShowConnectOptions] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="footer__panel" id="footer-border-sec">
        <div className="footer__grid">
          {/* Brand & Social */}
          <div className="footer__brand">
            <div className="footer__logo">
              <img
                className="footer-logo"
                alt="footer Logo"
                src="/impulse-website/footer-logo.png"
              />
            </div>
            <div className="footer__social">
              <a href="#" aria-label="Facebook" className="footer__socialBtn">
                <img src="/impulse-website/Facebook.png" alt="Facebook" />
              </a>
              <a href="#" aria-label="X" className="footer__socialBtn">
                <img src="/impulse-website/twitter.png" alt="Twitter" />
              </a>
              <a href="#" aria-label="Instagram" className="footer__socialBtn">
                <img src="/impulse-website/instagram.png" alt="Instagram" />
              </a>
              <a href="#" aria-label="LinkedIn" className="footer__socialBtn">
                <img src="/impulse-website/linkedin.png" alt="LinkedIn" />
              </a>
              <a href="#" aria-label="YouTube" className="footer__socialBtn">
                <img src="/impulse-website/youtube.png" alt="YouTube" />
              </a>
            </div>
          </div>

          {/* Links */}
          <nav className="footer__nav">
            <ul className="footer__col">
              <strong>Quick Links</strong>
              <li><a href="/impulse-website/">Home</a></li>
              <li><a href="/impulse-website/about-us">About Us</a></li>
              <li><a href="/impulse-website/services">Services</a></li>
            </ul>
            <ul className="footer__col">
              <strong>Resources</strong>
              <li><a href="/blog">Blog</a></li>
              <li><a href="/impulse-website/career">Career</a></li>
            </ul>
            <ul className="footer__col">
              <strong>Locations</strong>
              <li><a href="/impulse-website/digital-marketing-agency-in-india">India</a></li>
              <li><a href="/impulse-website/digital-marketing-agency-in-thane">Thane</a></li>
              <li><a href="/impulse-website/digital-marketing-agency-in-navi-mumbai">Navi Mumbai</a></li>
              <li><a href="/impulse-website/digital-marketing-agency-in-pune">Pune</a></li>
            </ul>
          </nav>

          {/* Contact */}
          <div className="footer__contact">
            <div className="footer__contactItem">
              <span className="footer__circleIcon">
                <img src="/impulse-website/footer-call.png" alt="Phone" />
              </span>
              <a href="tel:+919769285224">+91–9769285224</a>
            </div>

            <div className="footer__contactItem">
              <span className="footer__circleIcon">
                <img src="/impulse-website/sms.png" alt="Email" />
              </span>
              <a href="mailto:collabs@theimpulsedigital.com">
                collabs@theimpulsedigital.com
              </a>
            </div>

            <div className="footer__contactItem footer__address">
              <span className="footer__circleIcon">
                <img src="/impulse-website/footer-location.png" alt="Location" />
              </span>
              304 - 305, Chirag Infotech, Road No. 16/Z,
  Ambica Nagar, Wagle Industrial Estate,
  Thane, Mumbai 400604
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="footer__rule" />

        {/* Bottom Row */}
        <div className="footer__bottom">
          <div className="footer__copy">
            © 2025 Impulse Digital All rights reserved
          </div>
          <div className="footer__links">
            <a href="#">Privacy Policy</a>
            <span className="footer__dot">|</span>
            <a href="#">Terms & Conditions</a>
          </div>
        </div>
      </div>

      {/* === FIXED ACTION BUTTONS === */}
      <div className="fixedButtons">
        {/* Share toggle (mobile only) */}
        <button
          onClick={() => setShowConnectOptions(!showConnectOptions)}
          className="actionBtn mobileOnly"
          aria-label="Share or Connect"
        >
          <Share2 size={20} color="white" />
        </button>

        {/* WhatsApp + Call (mobile only) */}
        {showConnectOptions && (
          <div className="connectOptions mobileOnly">
            <a
              href="https://wa.me/919769285224"
              target="_blank"
              rel="noopener noreferrer"
              className="actionBtn"
              aria-label="Chat on WhatsApp"
            >
              <img src="/impulse-website/whatsapp.png" alt="WhatsApp" />
            </a>

            <a href="tel:+919769285224" className="actionBtn" aria-label="Call Impulse Digital">
              <img src="/impulse-website/footer-call.png" alt="Call" />
            </a>
          </div>
        )}

        {/* Scroll to Top (keeps working on desktop) */}
        {isVisible && (
          <button onClick={scrollToTop} className="actionBtn" aria-label="Back to Top">
            <ArrowUp size={18} color="white" />
          </button>
        )}
      </div>

      <style>{`
        .fixedButtons {
          position: fixed;
          right: 20px;
          bottom: 20px;
          display: flex;
          flex-direction: column-reverse;
          gap: 12px;
          z-index: 999;
        }

        .connectOptions {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-bottom: 10px;
          animation: fadeIn 0.3s ease-in-out;
        }

        .actionBtn {
          background-color: #543d98;
          border-radius: 50%;
          width: 50px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 3px 8px rgba(0,0,0,0.25);
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .actionBtn img {
          width: 22px;
          height: 22px;
          object-fit: contain;
        }

        .actionBtn:hover {
          transform: translateY(-3px);
          background-color: #6b4bc7;
        }

        /* Hide mobile-only stuff on desktop */
        .mobileOnly { display: none; }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 768px) {
          .fixedButtons {
            right: 15px;
            bottom: 15px;
            gap: 10px;
          }
          .actionBtn {
            width: 44px;
            height: 44px;
          }
          /* Show these only on mobile */
          .mobileOnly { display: flex; }
        }
      `}</style>
    </footer>
  );
};

export default FooterSection;

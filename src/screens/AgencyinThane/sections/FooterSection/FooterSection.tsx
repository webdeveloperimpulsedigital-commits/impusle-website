import React, { useEffect, useState } from "react";
import "../FooterSection/FooterSection.css";
import { ArrowUp } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../../../../components/ui/button";

export const FooterSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) setIsVisible(true);
      else setIsVisible(false);
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
              <li><a href="#">Home</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Clients & Work</a></li>
            </ul>
            <ul className="footer__col">
              <strong>Resources</strong>
              <li><a href="#">Case Studies</a></li>
              <li><a href="#">Blogs</a></li>
              <li><a href="#">Resources</a></li>
              <li><a href="#">Careers</a></li>
            </ul>
            <ul className="footer__col">
              <strong>Locations</strong>
              <li><a href="/impulse-website/digital-marketing-agency-in-india">India</a></li>
              <li><a href="/impulse-website/agency-in-thane">Thane</a></li>
              <li><a href="/impulse-website/agency-in-navi-mumbai">Navi Mumbai</a></li>
              <li><a href="/impulse-website/agency-in-pune">Pune</a></li>
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
              304 – 305, Chirag Infotech, Road No. 16/Z,
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
            <span className="footer__dot">•</span>
            <a href="#">Terms & Conditions</a>
          </div>
        </div>
      </div>

      {/* Scroll To Top */}
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="scrollToTopBtn"
          aria-label="Back to Top"
        >
          <ArrowUp size={18} />
        </button>
      )}

      {/* === MOBILE-ONLY STICKY CONTACT BAR === */}
      <div className="footerMobileBar" role="region" aria-label="Quick contact">
        <span className="footerMobileBar__text">
          Have a project in mind? Let’s talk.
        </span>
        <Button
            variant="outline"
            className="w-[150px] h-[44px] group sm:inline-flex items-center gap-2 px-4 py-5 bg-white rounded-xl hover:bg-[#543d98] hover:text-[#ffffff] text-[#543d98]"
          >
            <Link
              to="/contact"
              className="[font-family:'DM_Sans',Helvetica] font-bold text-sm md:text-base"
            >
              Contact Us
            </Link>
            <img
              src="/impulse-website/vector-1-3.svg"
              alt="Arrow"
              className="w-4 h-4 transition-all duration-300 group-hover:rotate-45 group-hover:brightness-0 group-hover:invert pointer-events-none"
            />
          </Button>
      </div>
      {/* === END MOBILE-ONLY STICKY CONTACT BAR === */}
    </footer>
  );
};

export default FooterSection;

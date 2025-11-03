import React from "react";
import "./ContactResourcesSection.css";

export const ContactResourcesSection = () => {
  return (
    <section className="contact-section" data-section="contact-resources">
      <div className="contact-container">
        {/* LEFT: heading + contact details */}
        <div className="contact-left">
          <p className="contact-subtitle">Let's put</p>
          <h2 className="contact-title">Your Auto-fill to Use!</h2>

          <ul className="contact-list">
            <img
                className="c-icon w-120"
                alt="Call Logo"
                src="/impulse-website/call.png"/>  
            <li>                        
              <a href="tel:+919769285224">+91-9769285224</a>
            </li>
            <img
                className="c-icon w-120"
                alt="Email Logo"
                src="/impulse-website/sms-1.png"/> 
            <li>
              
              <a href="mailto:collabs@theimpulsedigital.com">
                collabs@theimpulsedigital.com
              </a>
            </li>
            <img
                className="c-icon w-120"
                alt="location Logo"
                src="/impulse-website/location.png"/> 
            <li>
              
              <address>
                304 – 305, Chirag Infotech, Road No. 16/Z,<br />
                Ambica Nagar, Wagle Industrial Estate,<br />
                Thane, Mumbai 400604
              </address>
            </li>
          </ul>
        </div>

        {/* RIGHT: form */}
        <div className="contact-right-wrapper">
          <div className="contact-right">
            <form>
              <label>Company Name</label>
              <input type="text" placeholder="Company Name" />

              <label>Your Name</label>
              <input type="text" placeholder="Your Name" />

              <label>Email Address</label>
              <input type="email" placeholder="Email Address" />

              <label>Mobile Number</label>
              <input type="tel" placeholder="Mobile Number" />

              <label>Message</label>
              <textarea placeholder="Message"></textarea>

              <button type="submit">
                Submit <span className="">
                   <img
                className=""
                alt="location Logo"
                src="/impulse-website/button-icon.svg"/> 
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Divider line */}
      <div className="contact-divider" />
    </section>
  );
};

export default ContactResourcesSection;
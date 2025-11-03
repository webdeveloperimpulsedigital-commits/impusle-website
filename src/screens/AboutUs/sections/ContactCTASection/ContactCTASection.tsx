import "./ContactResourcesSection.css";
import { Button } from "../../../../components/ui/button";
import { Link } from "react-router-dom";
// ------------------- Contact & Resources Section -------------------
export const ContactCTASection = () => {
  return (
    <section className="contact-section" data-section="contact-resources">
      <div className="contact-container">
        {/* LEFT: heading + contact details */}
        <div className="contact-left">
          <p className="contact-subtitle">Let's put</p>
          <h2 className="contact-title">Your Auto-fill to Use!</h2>

          <ul className="contact-list">
            <img className="c-icon w-120" alt="Call Logo" src="call.png" />
            <li>
              <a href="tel:+919769285224">+91-9769285224</a>
            </li>

            <img className="c-icon w-120" alt="Email Logo" src="sms-1.png" />
            <li>
              <a href="mailto:collabs@theimpulsedigital.com">
                collabs@theimpulsedigital.com
              </a>
            </li>

            <img className="c-icon w-120" alt="location Logo" src="location.png" />
            <li>
              <address>
                304 – 305, Chirag Infotech, Road No. 16/Z,<br />
                Ambica Nagar, Wagle Industrial Estate,<br />
                Thane, Mumbai 400604
              </address>
            </li>
          </ul>
        </div>

        {/* RIGHT: Zoho form embed */}
        <div className="contact-right-wrapper">
          <div className="contact-right">
            <form
              action="https://forms.zohopublic.in/shwetaktheimpul1/form/ContactUs/formperma/1ZR0worZNTx7nrfxfhCz1fWCcDGQIu1u785yrDmO4Ac/htmlRecords/submit"
              name="form"
              id="form"
              method="POST"
              acceptCharset="UTF-8"
              encType="multipart/form-data"
            >
              {/* Company Name */}
              <label>
                Company Name
                <em>*</em>
              </label>
              <input
                type="text"
                name="SingleLine"
                fieldType={1}
                maxLength="255"
                placeholder="Company Name"
                pattern="[A-Za-z ]+"  // Allow only letters and spaces
                title="Only letters and spaces are allowed"
                required
              />

              {/* Name */}
              <label>
                Name
                <em>*</em>
              </label>
              <input
                type="text"
                name="SingleLine1"
                fieldType={1}
                maxLength="255"
                placeholder="Name"
                pattern="[A-Za-z ]+"  // Allow only letters and spaces
                title="Only letters and spaces are allowed"
                required
              />

              {/* Email */}
              <label>
                Email
                <em>*</em>
              </label>
              <input
                type="email"
                maxLength="255"
                name="Email"
                fieldType={9}
                placeholder="Email"
                required
              />

              {/* Phone Number */}
              <label>
                Phone
                <em>*</em>
              </label>
              <input
                type="tel"  // Changed to tel for proper phone number input
                name="PhoneNumber_countrycode"
                phoneFormat="1"
                isCountryCodeEnabled={false}
                maxLength="20"  // Restrict length if necessary
                pattern="[0-9]{10}"  // Restrict to exactly 10 digits
                placeholder="Phone"
                required
              />

              {/* Message */}
              <label>Message</label>
              <textarea
                name="MultiLine"
                maxLength="65535"
                placeholder="Message"
                required
              ></textarea>

              {/* Submit Button */}
              

                      <Button 
                        className="w-[240px] h-[44px] group sm:inline-flex items-center gap-2 px-4 py-6 bg-[#543d98] hover:bg-[#543d98]/90  rounded-xl  text-white">
                        <Link to="/contact" className="[font-family:'DM_Sans',Helvetica] font-bold text-white text-sm md:text-base">Submit</Link>
                        <img src="/impulse-website/button-icon.svg" alt="Arrow"
                          className="w-4 h-4 transition-transform duration-300 group-hover:rotate-45 pointer-events-none"/>
                      </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Divider line */}
      <div className="contact-divider" />
    </section>
  );
};


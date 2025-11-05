import "./ContactSection.css";
import { Button } from "../../../../components/ui/button";
// ------------------- Contact & Resources Section -------------------
export const ContactSection = () => {
  return (
    <section className="contact-section sm:pt-5 sm:pb-16 lg:pt-16 lg:pb-16"  id="contact-border-sec2">
      <div className="max-w-[1280px] mx-auto px-0 lg:px-0 contact-container1" data-section="contact-resources">
        {/* LEFT: heading + contact details */}
        <div className="contact-left1">
          
          

          <h2 className="[font-family:'DM_Sans',Helvetica] font-normal text-[20px] md:text-[34px] leading-tight">
            <span className="text-[#ffffff]  lg:text-[34px] sm:text-[16px]">
              Let's put
            </span>
            <br />
            <span className="font-bold text-[#ffffff] lg:text-[52px] md:text-[52px] sm:text-[20px]">
             Your Auto-fill to Use!
            </span>
          </h2><br></br>
         

          <ul className="contact-list lg:pt-16 hidden lg:block md:block">
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
              

                      
                     <Button className="w-[180px] h-[44px] group sm:inline-flex items-center gap-2 px-4 py-6 rounded-xl bg-[#543d98] text-white hover:bg-white hover:text-[#543d98] transition-colors duration-300 border-[#543d98] hover:border hover:border-[#543d98]">
            
                          <span className="[font-family:'DM_Sans',Helvetica] font-bold text-white text-sm md:text-base group-hover:text-[#543d98] transition-colors duration-300">
                            Submit
                          </span>
                          <img
                            src="/impulse-website/button-icon.svg"
                            alt="Arrow"
                            className="w-4 h-4 transition-all duration-300 group-hover:rotate-45 group-hover:brightness-0 group-hover:invert-0 group-hover:invert pointer-events-none"
                          />
                      </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Divider line */}
      
    </section>
  );
};

export default ContactSection;

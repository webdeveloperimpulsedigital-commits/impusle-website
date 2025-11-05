import "./ContactResourcesSection.css";
import { Button } from "../../../../components/ui/button";
 
export const ContactResourcesSection = () => {
  return (
    <section className="contact-section sm:pt-5 lg:pt-16" id="contact-border-sec">
      <div className="wrap-contact" data-section="contact-resources">
        {/* LEFT: heading + contact details */}
        <div className="contact-left0">
          <h2 className="[font-family:'DM_Sans',Helvetica] font-normal text-[20px] md:text-[34px] leading-tight">
            <span className="text-[#ffffff] lg:text-[34px] sm:text-[16px]">Let's put</span>
            <br />
            <span className="font-bold text-[#ffffff] lg:text-[52px] md:text-[52px] sm:text-[20px]">
              Your Auto-fill to Use!
            </span>
          </h2>
          <br />
 
          {/* ✅ Hide contact list on mobile; show on desktop */}
          <ul className="contact-list pt-16 hidden lg:block">
            <img className="c-icon w-120" alt="Call Logo" src="call.png" />
            <li><a href="tel:+919769285224">+91-9769285224</a></li>
 
            <img className="c-icon w-120" alt="Email Logo" src="sms-1.png" />
            <li><a href="mailto:collabs@theimpulsedigital.com">collabs@theimpulsedigital.com</a></li>
 
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
              action=""
              id="form"
              method="POST"
              acceptCharset="UTF-8"
              encType="multipart/form-data"
            >
              <label>Company Name<em>*</em></label>
              <input
                type="text"
                name="SingleLine"
                maxLength={255}
                placeholder="Company Name"
                pattern="[A-Za-z ]+"
                title="Only letters and spaces are allowed"
                required
              />
 
              <label>Name<em>*</em></label>
              <input
                type="text"
                name="SingleLine1"
                maxLength={255}
                placeholder="Name"
                pattern="[A-Za-z ]+"
                title="Only letters and spaces are allowed"
                required
              />
 
              <label>Email<em>*</em></label>
              <input
                type="email"
                name="Email"
                maxLength={255}
                placeholder="Email"
                required
              />
 
              <label>Phone<em>*</em></label>
              <input
                type="tel"
                name="PhoneNumber_countrycode"
                maxLength={20}
                pattern="[0-9]{10}"
                placeholder="Phone"
                required
              />
 
              <label>Message</label>
              <textarea
                name="MultiLine"
                maxLength={65535}
                placeholder="Message"
                required
              />
 
              

               <Button className="w-[150px] h-[44px] group inline-flex items-center gap-2 px-4 py-6 rounded-xl bg-[#543d98] text-white hover:bg-white hover:text-[#543d98] transition-colors duration-300 border-[#543d98] hover:border hover:border-[#543d98]">
              
               Submit
              
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
 
      {/* Divider */}
      <div className="contact-divider" />
 
      
    </section>
  );
};
 
export default ContactResourcesSection;
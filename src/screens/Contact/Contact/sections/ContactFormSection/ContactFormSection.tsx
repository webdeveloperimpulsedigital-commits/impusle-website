import React from "react";
import { Button } from "../../../../../components/ui/button";
import { Link } from "react-router-dom";

export const ContactFormSection = (): JSX.Element => {
 

  const contactInfo = [
    {
      icon: "/impulse-website/call.png",
      text: "+91-9769285224",
    },
    {
      icon: "/impulse-website/sms-1.png",
      text: "collabs@theimpulsedigital.com",
    },
    {
      icon: "/impulse-website/location.png",
      text: "304 - 305,Chirag Infotech, Road No. 16/Z, Ambica Nagar, Wagle Industrial Estate, \nThane, Mumbai 400604",
    },
  ];

  return (
    <section className="w-full bg-gray py-16 lg:py-24" data-section="contact-form">
      <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-16">
          <div className="flex flex-col flex-1 items-start gap-12">
             <h2 className="[font-family:'DM_Sans',Helvetica] font-normal text-[20px] md:text-[34px] leading-tight">
            <span className="text-[#030019]  lg:text-[34px] sm:text-[16px]">
              Let's put
            </span>
            <br />
            <span className="font-bold text-[#030019] lg:text-[52px] md:text-[52px] sm:text-[20px]">
             Your Auto-fill to Use!
            </span>
          </h2>

            <div className="flex flex-col items-start gap-12 w-full">
              {contactInfo.map((contact, index) => (
                <div
                  key={index}
                  className="flex flex-col items-start gap-4 w-full"
                >
                  <div className="inline-flex items-center gap-2.5 p-2.5 bg-[#000000] rounded-full">
                    <img
                      className="w-6 h-6"
                      alt="Contact icon"
                      src={contact.icon}
                    />
                  </div>

                  <div className="opacity-90 [font-family:'DM_Sans',Helvetica] font-medium text-black text-lg lg:text-[26px] tracking-[0] leading-7 lg:leading-10">
                    {contact.text.split("\n").map((line, lineIndex) => (
                      <React.Fragment key={lineIndex}>
                        {line}
                        {lineIndex < contact.text.split("\n").length - 1 && (
                          <br />
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

           <div className="contact-right-wrapper mt-20">
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
      </div>
    </section>
  );
};
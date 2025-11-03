import React from "react";

export const ContactInfoSection = (): JSX.Element => {
  return (
    <section className="w-full bg-white py-16 lg:py-24" data-section="contact-info">
      <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#543d98] text-3xl md:text-4xl lg:text-5xl leading-tight">
                Our Mumbai Office
              </h2>
              <p className="[font-family:'DM_Sans',Helvetica] font-normal text-[#030019] text-base leading-relaxed">
                Located in the heart of Mumbai's business district, our office is easily accessible and equipped 
                with modern facilities for client meetings and collaborative sessions.
              </p>
            </div>

            {/* Office Details */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#543d98]/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <img src="/location.png" alt="Location" className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#030019] text-lg mb-2">
                    Address
                  </h3>
                  <p className="[font-family:'DM_Sans',Helvetica] font-normal text-[#666] text-base leading-relaxed">
                    304 – 305, Chirag Infotech, Road No. 16/Z,<br />
                    Ambica Nagar, Wagle Industrial Estate,<br />
                    Thane, Mumbai 400604
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#543d98]/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <img src="/call.png" alt="Phone" className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#030019] text-lg mb-2">
                    Business Hours
                  </h3>
                  <p className="[font-family:'DM_Sans',Helvetica] font-normal text-[#666] text-base leading-relaxed">
                    Monday - Friday: 9:00 AM - 6:00 PM<br />
                    Saturday: 10:00 AM - 4:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#543d98]/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <img src="/sms.png" alt="Email" className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#030019] text-lg mb-2">
                    Response Time
                  </h3>
                  <p className="[font-family:'DM_Sans',Helvetica] font-normal text-[#666] text-base leading-relaxed">
                    We typically respond to all inquiries within 2-4 hours during business hours.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-lg">
              <img
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Modern office space with team collaboration"
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#543d98]/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
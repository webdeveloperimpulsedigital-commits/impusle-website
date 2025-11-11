import React from "react";
import { Card, CardContent } from "../../../../../components/ui/card";
import { Button } from "../../../../../components/ui/button";

export const ApplicationFormSection = (): JSX.Element => {
    const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Application submitted");

    // Redirect to the Thank You page after submission
    window.location.href = "/thank-you";  // Replace with your actual Thank You page URL
  };

  return (
    <section id="application-form" className="w-full bg-[#f8f9fa] py-16 lg:py-24" data-section="application-form">
      <div className="max-w-[800px] mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#030019] text-3xl md:text-4xl lg:text-5xl mb-6">
            Apply Now
          </h2>
          <p className="[font-family:'DM_Sans',Helvetica] font-normal text-[#666] text-base leading-relaxed">
            Ready to join our team? Fill out the form below and attach your resume. <br></br>
            We'll get back to you within 48 hours.
          </p>
        </div>

        {/* Application Form */}
        <Card className="bg-white rounded-2xl border-0 shadow-lg">
          <CardContent className="p-8 lg:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
            {/* Position Selection */}
            <div className="space-y-3">
              <label className="[font-family:'DM_Sans',Helvetica] font-medium text-[#030019] text-base">
                Position Applying For <em>*</em>
              </label>
              <select
                name="Dropdown"
                required
                className="w-full h-[50px] px-4 py-3 bg-[#f8f9fa] rounded-lg border border-gray-200 [font-family:'DM_Sans',Helvetica] font-normal text-[#030019] text-base focus:border-[#543d98] focus:outline-none transition-colors"
              >
                <option selected="true" value="-Select-">
                  Select the position
                </option>
                <option value="Digital Marketing Manager">
                  Digital Marketing Manager
                </option>
                <option value="Content Writer">Content Writer</option>
                <option value="SEO Specialist">SEO Specialist</option>
                <option value="Graphic Designer">Graphic Designer</option>
                <option value="Other Position">Other Position</option>
              </select>
            </div>

            {/* Name */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <label
                  htmlFor="firstName"
                  className="[font-family:'DM_Sans',Helvetica] font-medium text-[#030019] text-base"
                >
                  First Name <em>*</em>
                </label><br></br>
                <input
                  type="text"
                  id="firstName"
                  name="Name_First"
                  required
                  placeholder="Enter Your First Name"
                  maxLength="255"
                  className="w-full h-[50px] px-4 py-3 bg-[#f8f9fa] rounded-lg border border-gray-200 [font-family:'DM_Sans',Helvetica] font-normal text-[#030019] text-base focus:border-[#543d98] focus:outline-none transition-colors"
                />
              </div>

              <div className="space-y-3">
                <label
                  htmlFor="lastName"
                  className="[font-family:'DM_Sans',Helvetica] font-medium text-[#030019] text-base"
                >
                  Last Name <em>*</em>
                </label><br></br>
                <input
                  type="text"
                  id="lastName"
                  name="Name_Last"
                  required
                  placeholder="Enter Your Last Name"
                  maxLength="255"
                  className="w-full h-[50px] px-4 py-3 bg-[#f8f9fa] rounded-lg border border-gray-200 [font-family:'DM_Sans',Helvetica] font-normal text-[#030019] text-base focus:border-[#543d98] focus:outline-none transition-colors"
                />
              </div>
            </div>

            {/* Email */}
            <div className="space-y-3">
              <label
                htmlFor="email"
                className="[font-family:'DM_Sans',Helvetica] font-medium text-[#030019] text-base"
              >
                Email <em>*</em>
              </label><br></br>
              <input
                type="email"
                id="email"
                name="Email"
                required
                placeholder="Enter Your Email"
                maxLength="255"
                className="w-full h-[50px] px-4 py-3 bg-[#f8f9fa] rounded-lg border border-gray-200 [font-family:'DM_Sans',Helvetica] font-normal text-[#030019] text-base focus:border-[#543d98] focus:outline-none transition-colors"
              />
            </div>

            {/* Phone */}
            <div className="space-y-3">
              <label
                htmlFor="phone"
                className="[font-family:'DM_Sans',Helvetica] font-medium text-[#030019] text-base"
              >
                Phone <em>*</em>
              </label><br></br>
              <input
                type="tel"
                id="phone"
                name="PhoneNumber_countrycode"
                required
                placeholder="Enter Your Phone Number"
                maxLength="20"
                className="w-full h-[50px] px-4 py-3 bg-[#f8f9fa] rounded-lg border border-gray-200 [font-family:'DM_Sans',Helvetica] font-normal text-[#030019] text-base focus:border-[#543d98] focus:outline-none transition-colors"
              />
            </div>

            {/* Experience */}
            <div className="space-y-3">
              <label
                htmlFor="experience"
                className="[font-family:'DM_Sans',Helvetica] font-medium text-[#030019] text-base"
              >
                Years of Experience <em>*</em>
              </label><br></br>
              <select
                name="Dropdown1"
                required
                className="w-full h-[50px] px-4 py-3 bg-[#f8f9fa] rounded-lg border border-gray-200 [font-family:'DM_Sans',Helvetica] font-normal text-[#030019] text-base focus:border-[#543d98] focus:outline-none transition-colors"
              >
                <option selected="true" value="-Select-">
                  Select the experience level
                </option>
                <option value="0-1 years (Fresher)">0-1 years (Fresher)</option>
                <option value="1-2 years">1-2 years</option>
                <option value="3-5 years">3-5 years</option>
                <option value="5+ years">5+ years</option>
              </select>
            </div>

            {/* Resume Upload */}
            <div className="space-y-3">
              <label
                htmlFor="resume"
                className="[font-family:'DM_Sans',Helvetica] font-medium text-[#030019] text-base"
              >
                Upload Resume <em>*</em>
              </label><br></br>
              <input
                type="file"
                id="resume"
                name="FileUpload"
                accept=".pdf,.doc,.docx"
                required
                className="w-full h-[50px] px-4 py-3 bg-[#f8f9fa] rounded-lg border border-gray-200 [font-family:'DM_Sans',Helvetica] font-normal text-[#030019] text-base focus:border-[#543d98] focus:outline-none transition-colors"
              />
            </div>

            {/* Cover Letter */}
            <div className="space-y-3">
              <label
                htmlFor="coverLetter"
                className="[font-family:'DM_Sans',Helvetica] font-medium text-[#030019] text-base"
              >
                Cover Letter / Message
              </label><br></br>
              <textarea
                id="coverLetter"
                name="MultiLine"
                rows={6}
                placeholder="Tell us why you're interested in this position and what makes you a great fit for our team..."
                maxLength="65535"
                className="w-full h-[150px] px-4 py-3 bg-[#f8f9fa] rounded-lg border border-gray-200 [font-family:'DM_Sans',Helvetica] font-normal text-[#030019] text-base focus:border-[#543d98] focus:outline-none transition-colors resize-none"
              />
            </div>

            {/* Portfolio/LinkedIn */}
            <div className="space-y-3">
              <label
                htmlFor="portfolio"
                className="[font-family:'DM_Sans',Helvetica] font-medium text-[#030019] text-base"
              >
                Portfolio/LinkedIn URL (Optional)
              </label><br></br>
              <input
                type="url"
                id="portfolio"
                name="Website"
                placeholder="https://your-portfolio.com or LinkedIn profile"
                maxLength="2083"
                className="w-full h-[50px] px-4 py-3 bg-[#f8f9fa] rounded-lg border border-gray-200 [font-family:'DM_Sans',Helvetica] font-normal text-[#030019] text-base focus:border-[#543d98] focus:outline-none transition-colors"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-6">
            
              <center>
                <Button 
                        className="w-[160px] h-[44px] group sm:inline-flex items-center gap-2 px-4 py-6 bg-[#543d98] hover:bg-[#543d98]/90  rounded-xl  text-white">
                        <span to="/contact" className="[font-family:'DM_Sans',Helvetica] font-bold text-white text-sm md:text-base">Submit</span>
                        <img src="/impulse-website/button-icon.svg" alt="Arrow"
                          className="w-4 h-4 transition-transform duration-300 group-hover:rotate-45 pointer-events-none"/>
                </Button>
              </center>
                      
            </div>

            {/* Privacy Notice */}
            <div className="pt-4 text-center">
              <p className="text-xs text-[#666] leading-relaxed">
                By submitting this application, you agree to our privacy policy.
                We will only use your information for recruitment purposes.
              </p>
            </div>
          </form>
          </CardContent>
        </Card>

        {/* Contact Info */}
        <div className="mt-12 text-center">
          <p className="[font-family:'DM_Sans',Helvetica] font-normal text-[#666] text-base mb-4">
            Have questions about any position? Contact our HR team:
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="mailto:careers@theimpulsedigital.com"
              className="flex items-center gap-2 text-[#543d98] hover:text-[#543d98]/80 transition-colors"
            >
              <img src="/impulse-website/sms.png" alt="Email" className="w-4 h-4" />
              <span className="[font-family:'DM_Sans',Helvetica] font-medium">
                careers@theimpulsedigital.com
              </span>
            </a>
            <span className="hidden sm:block text-[#666]">|</span>
            <a 
              href="tel:+919769285224"
              className="flex items-center gap-2 text-[#543d98] hover:text-[#543d98]/80 transition-colors"
            >
              <img src="/impulse-website/footer-call.png" alt="Phone" className="w-4 h-4" />
              <span className="[font-family:'DM_Sans',Helvetica] font-medium">
                +91-8850234353
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
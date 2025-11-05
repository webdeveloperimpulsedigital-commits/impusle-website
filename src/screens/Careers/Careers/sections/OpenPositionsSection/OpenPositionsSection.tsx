import { Button } from "../../../../../components/ui/button";

interface JobPosition {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  description: string;
  requirements: string[];
}

export const OpenPositionsSection = (): JSX.Element => {
  const jobPositions: JobPosition[] = [
    {
      id: "digital-marketing-manager",
      title: "Digital Marketing Manager",
      department: "Marketing",
      location: "Mumbai, India",
      type: "Full-time",
      experience: "3-5 years",
      description: "Lead digital marketing campaigns and strategies for our diverse client portfolio. Drive growth through data-driven marketing initiatives.",
      requirements: [
        "Bachelor's degree in Marketing, Business, or related field",
        "3+ years of digital marketing experience",
        "Proficiency in Google Ads, Facebook Ads, and analytics tools",
        "Strong analytical and project management skills",
        "Experience with SEO and content marketing"
      ]
    },
    {
      id: "content-writer",
      title: "Content Writer",
      department: "Content",
      location: "Mumbai, India",
      type: "Full-time",
      experience: "2-4 years",
      description: "Create compelling content that drives engagement and conversions across various digital channels and client industries.",
      requirements: [
        "Bachelor's degree in English, Journalism, or related field",
        "2+ years of content writing experience",
        "Strong research and writing skills",
        "Knowledge of SEO best practices",
        "Experience with content management systems"
      ]
    },
    {
      id: "seo-specialist",
      title: "SEO Specialist",
      department: "SEO",
      location: "Mumbai, India",
      type: "Full-time",
      experience: "2-3 years",
      description: "Drive organic growth for clients through strategic SEO initiatives and technical optimization.",
      requirements: [
        "2+ years of SEO experience",
        "Knowledge of SEO tools (SEMrush, Ahrefs, Google Analytics)",
        "Understanding of technical SEO and website optimization",
        "Experience with keyword research and competitive analysis",
        "Basic knowledge of HTML and CSS"
      ]
    },
    {
      id: "graphic-designer",
      title: "Graphic Designer",
      department: "Creative",
      location: "Mumbai, India",
      type: "Full-time",
      experience: "1-3 years",
      description: "Create visually stunning designs that bring brand stories to life across digital and print media.",
      requirements: [
        "Bachelor's degree in Graphic Design or related field",
        "Proficiency in Adobe Creative Suite (Photoshop, Illustrator, InDesign)",
        "Strong portfolio showcasing diverse design work",
        "Understanding of brand guidelines and visual identity",
        "Knowledge of web design principles"
      ]
    }
  ];

  return (
    <section className="w-full bg-white lg:py-0" data-section="open-positions" id="open-position-sec-border">

      <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <p className="[font-family:'DM_Sans',Helvetica] font-normal text-[#030019] text-lg mb-2">
            Current Openings
          </p>
          <h2 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#543d98] text-3xl md:text-4xl lg:text-5xl mb-6">
            Join Our Growing Team
          </h2>
          <p className="[font-family:'DM_Sans',Helvetica] font-normal text-[#030019] text-base leading-relaxed max-w-3xl mx-auto">
            We're looking for talented individuals who share our passion for digital marketing and client success. 
            Explore our current openings below.
          </p>
        </div>

        {/* Job Listings */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {jobPositions.map((job) => (
            <div
              key={job.id}
              className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2 p-6 lg:p-8"
            >
              {/* Job Header */}
              <div className="mb-6">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-[#543d98]/10 text-[#543d98] rounded-full text-xs font-medium">
                    {job.department}
                  </span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium">
                    {job.type}
                  </span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium">
                    {job.experience}
                  </span>
                </div>
                
                <h3 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#030019] text-xl lg:text-2xl mb-3">
                  {job.title}
                </h3>
                
                <p className="[font-family:'DM_Sans',Helvetica] font-normal text-[#666] text-base leading-relaxed mb-4">
                  {job.description}
                </p>
                
                <div className="flex items-center gap-2 text-sm text-[#666] mb-6">
                  <img src="/impulse-website/footer-location.png" alt="Location" className="w-4 h-4" />
                  <span>{job.location}</span>
                </div>
              </div>

              {/* Requirements */}
              <div className="mb-6">
                <h4 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#030019] text-lg mb-3">
                  Requirements
                </h4>
                <ul className="space-y-2">
                  {job.requirements.slice(0, 3).map((req, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-[#543d98] mr-2 text-sm">•</span>
                      <span className="[font-family:'DM_Sans',Helvetica] font-normal text-[#666] text-sm">
                        {req}
                      </span>
                    </li>
                  ))}
                  {job.requirements.length > 3 && (
                    <li className="flex items-start">
                      <span className="text-[#543d98] mr-2 text-sm">•</span>
                      <span className="[font-family:'DM_Sans',Helvetica] font-normal text-[#666] text-sm">
                        +{job.requirements.length - 3} more requirements
                      </span>
                    </li>
                  )}
                </ul>
              </div>

              {/* Apply Button */}
              {/* <a 
                href="#application-form"
                className="w-full bg-[#543d98] hover:bg-[#543d98]/90 text-white py-3 px-6 rounded-xl font-bold transition-colors duration-300 text-center block"
              >
                Apply for this Position
              </a> */}
                      

                      <Button className="w-[250px] h-[44px] group sm:inline-flex items-center gap-2 px-4 py-6 rounded-xl bg-[#543d98] text-white hover:bg-white hover:text-[#543d98] transition-colors duration-300 border-[#543d98] hover:border hover:border-[#543d98]">
           
                         <a href="#application-form" className="[font-family:'DM_Sans',Helvetica] font-bold text-white text-sm md:text-base group-hover:text-[#543d98] transition-colors duration-300">
  Apply for this Position
</a>

                         <img
                           src="/impulse-website/button-icon.svg"
                           alt="Arrow"
                           className="w-4 h-4 transition-all duration-300 group-hover:rotate-45 group-hover:brightness-0 group-hover:invert-0 group-hover:invert pointer-events-none"
                         />
                     </Button><br></br>
            </div>
          ))}
        </div>

        {/* No Current Openings Message (if needed) */}
        {jobPositions.length === 0 && (
          <div className="text-center py-16">
            <div className="max-w-2xl mx-auto">
              <h3 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#030019] text-2xl mb-4">
                No Current Openings
              </h3>
              <p className="[font-family:'DM_Sans',Helvetica] font-normal text-[#666] text-base leading-relaxed mb-8">
                We don't have any open positions at the moment, but we're always interested in connecting with talented individuals. 
                Feel free to send us your resume and we'll keep it on file for future opportunities.
              </p>
              <a 
                href="#application-form"
                className="inline-block bg-[#543d98] hover:bg-[#543d98]/90 text-white px-8 py-4 rounded-xl font-bold transition-colors duration-300"
              >
                Send Your Resume
              </a>
            </div>
          </div>
        )}
      </div>
    </section>




  );
};
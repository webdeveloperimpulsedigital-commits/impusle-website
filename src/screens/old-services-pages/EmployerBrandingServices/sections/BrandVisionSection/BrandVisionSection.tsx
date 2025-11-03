export const BrandVisionSection = (): JSX.Element => {
  const stats = [
    {
      percentage: "50%",
      description: "Keywords ranked on first page of Google"
    },
    {
      percentage: "50%", 
      description: "Cumulative website visits for clients per month"
    },
    {
      percentage: "23%",
      description: "Avg. organic engagements on social for clients per month"
    }
  ];

  const services = [
    {
      title: "Research and Insights",
      description: "We assess perception through surveys, interviews, and data analysis."
    },
    {
      title: "Strategy and Positioning",
      description: "Your EVP, tone, and messaging pillars are defined to reflect your culture."
    },
    {
      title: "Creative Development",
      description: "We design campaigns, toolkits, and assets for internal and external use."
    },
    {
      title: "Monitoring and Impact",
      description: "Engagement, retention, and recruitment metrics guide ongoing refinement."
    }
  ];

  return (
    <section className="w-full bg-white py-16 lg:py-20" data-section="brand-vision">
      <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 mb-16">
          {/* Left Side - Image (40% width) */}
          <div className="lg:col-span-2">
            <div className="relative">
              <img
                src="/impulse-website/employee About service - 451 x 500.jpg"
                alt="Brand vision workspace"
                className="w-full h-[400px] lg:h-[500px] object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>

          {/* Right Side - Content (60% width) */}
          <div className="lg:col-span-3 space-y-8">
            {/* Header */}
            <div className="space-y-2">
              <p className="[font-family:'DM_Sans',Helvetica] font-normal text-[#030019] text-lg">
                Showcase Your Culture 
              </p>
              <h2 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#543d98] text-3xl md:text-4xl lg:text-5xl leading-tight">
                Strengthen Your Reputation
              </h2>
            </div>

            {/* Supporting Text Box */}
            <div className="bg-[#f8f9fa] rounded-xl p-6 border-l-4 border-[#543d98]">
              <p className="[font-family:'DM_Sans',Helvetica] font-medium text-[#030019] text-base leading-relaxed">
                 And for the ones already with you? You need to make them believe that they made the right choice. 
            This means communicating your values, what you have to offer, how you look after your employees, 
            and a lot more. It’s an ongoing effort that requires strategy, authenticity, and commitment because 
            your reputation as an employer and an organization is at stake here. Employer branding services help 
            you build and maintain an effective employer
              </p>
            </div>

            {/* Stats Grid (Hidden) */}
            {/* 
            <div className="grid-container">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="[font-family:'DM_Sans',Helvetica] font-black text-[#543d98] text-4xl lg:text-5xl mb-2">
                    {stat.percentage}
                  </div>
                  <p className="[font-family:'DM_Sans',Helvetica] font-normal text-[#666] text-sm leading-relaxed">
                    {stat.description}
                  </p>
                </div>
              ))}
            </div>
            */}
          </div>
        </div>

        {/* Body Paragraph */}
        {/* <div className="text-center mb-12">
          <p className="[font-family:'DM_Sans',Helvetica] font-normal text-[#030019] text-base leading-relaxed max-w-4xl mx-auto">
            And for the ones already with you? You need to make them believe that they made the right choice. 
            This means communicating your values, what you have to offer, how you look after your employees, 
            and a lot more. It’s an ongoing effort that requires strategy, authenticity, and commitment because 
            your reputation as an employer and an organization is at stake here. Employer branding services help 
            you build and maintain an effective employer
          </p>
        </div> */}

        {/* Service Blocks Grid (2x2) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-white rounded-xl p-6 border border-gray-200 hover:border-[#543d98]/30 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              {/* Icon placeholder */}
              <div className="w-12 h-12 bg-[#543d98]/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#543d98]/20 transition-colors duration-300">
                <div className="w-6 h-6 bg-[#543d98] rounded-sm"></div>
              </div>
              
              <h3 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#030019] text-lg mb-3 group-hover:text-[#543d98] transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="[font-family:'DM_Sans',Helvetica] font-normal text-[#666] text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .grid-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-template-rows: 1fr 1fr;
          gap: 25px;
          height: 240px;
          border: 0px solid #ccc;
          align-content: center;
          align-items: center;
        }
        .grid-container > .text-center:nth-child(2) {
          grid-column: 2;          
          grid-row: 1 / span 2;    
          align-self: center;      
          justify-self: center;    
        }
      `}</style>
    </section>
  );
};

export const WhyChooseSection = (): JSX.Element => {
  return (
    <section className="w-full bg-gray py-20 lg:py-24" data-section="why-choose">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="[font-family:'DM_Sans',Helvetica] font-normal text-[#030019] text-2xl md:text-3xl mb-4">
            Why Choose
          </h2>
          <h3 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#543d98] text-2xl md:text-3xl lg:text-4xl">
          Impulse Digital’s Social Media Video Production?
          </h3>
        </div>

        {/* Card 1: Image Left → Content Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16 lg:mb-20 items-center">
          {/* Left - Portrait Image */}
          <div className="order-1">
            <div className="relative overflow-hidden rounded-xl shadow-lg">
              <img
                src="https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Person working on laptop with CONTENT text visible on screen"
                className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          {/* Right - Content */}
          <div className="order-2 space-y-4">
            <h3 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#030019] text-xl lg:text-2xl">
              Video content for maximum engagement
            </h3>
            <p className="[font-family:'DM_Sans',Helvetica] font-normal text-[#666] text-base leading-relaxed">
            We are a niche social media video production agency with experienced strategists, designers, and executors. Our high-tech tools and teams ensure your social media videos
            </p>
          </div>
        </div>

        {/* Card 2: Content Left → Image Right (Reversed) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16 lg:mb-20 items-center">
          {/* Left - Content */}
          <div className="order-2 lg:order-1 space-y-4">
            <h3 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#030019] text-xl lg:text-2xl">
             Knowledge of social media algorithms and trends

            </h3>
            <p className="[font-family:'DM_Sans',Helvetica] font-normal text-[#666] text-base leading-relaxed">
             We are on the top of what’s happening in the social world with a knack for instantly hopping onto trends that align with your brand. Be it updates in platform.
            </p>
          </div>

          {/* Right - Single Portrait Image */}
          <div className="order-1 lg:order-2">
            <div className="relative overflow-hidden rounded-xl shadow-lg">
              <img
                src="https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Hands working on creative content with colorful sticky notes"
                className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>

        {/* Card 3: Full Width Image → Content Below */}
        <div className="space-y-8">
          {/* Full Width Landscape Image */}
          <div className="w-full">
            <div className="relative overflow-hidden rounded-2xl shadow-lg">
              <img
                src="https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Laptop showing content strategy planning with charts and graphs"
                className="w-full h-[300px] lg:h-[400px] object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          {/* Content Below Image */}
          <div className="max-w-7xl space-y-4">
            <h3 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#030019] text-xl lg:text-2xl">
              End-to-end video production
            </h3>
            <p className="[font-family:'DM_Sans',Helvetica] font-normal text-[#666] text-base leading-relaxed">
              We handle everything for you—from concept to final cut—to bring your vision to life. Our creative video agency boasts expert individuals, each specialized in scripting, shooting, editing, and post-production, ensuring professional execution at every stage.
            </p>
          </div>
        </div>



        {/* Card 1: Image Left → Content Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16 lg:mb-20 pt-16 items-center">
          {/* Left - Portrait Image */}
          <div className="order-1">
            <div className="relative overflow-hidden rounded-xl shadow-lg">
              <img
                src="https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Person working on laptop with CONTENT text visible on screen"
                className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          {/* Right - Content */}
          <div className="order-2 space-y-4">
            <h3 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#030019] text-xl lg:text-2xl">
              Creative storytelling
            </h3>
            <p className="[font-family:'DM_Sans',Helvetica] font-normal text-[#666] text-base leading-relaxed">
              The difference between a good and a great video is the story. Our creative storytelling approach ensures every video we produce describes a narrative that aligns

            </p>
          </div>
        </div>


        {/* Card 2: Image Left → Content Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16 lg:mb-20 pt-16 items-center">
         

          {/* Right - Content */}
          <div className="order-1 space-y-4">
            <h3 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#030019] text-xl lg:text-2xl">
              Optimized video content for multiple platforms
            </h3>
            <p className="[font-family:'DM_Sans',Helvetica] font-normal text-[#666] text-base leading-relaxed">
              The final cut is excellent. But how do you ensure maximum reach? Our optimized video content integrated with SEO keywords, adjusted aspect ratios

            </p>
          </div>


           {/* Left - Portrait Image */}
          <div className="order-2">
            <div className="relative overflow-hidden rounded-xl shadow-lg">
              <img
                src="https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Person working on laptop with CONTENT text visible on screen"
                className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>

        

       

        
      </div>
    </section>
  );
};
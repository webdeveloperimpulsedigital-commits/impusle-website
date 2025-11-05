import React from "react";
import { Button } from "../../../../components/ui/button";

export const ServicesCTASection = (): JSX.Element => {
  return (
    <section className="w-full bg-[#030019] py-16 lg:py-24" data-section="services-cta">
      <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
        <div className="text-center">
          <h2 className="[font-family:'DM_Sans',Helvetica] font-bold text-white text-3xl md:text-4xl lg:text-5xl mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="[font-family:'DM_Sans',Helvetica] font-normal text-white/80 text-lg leading-relaxed max-w-3xl mx-auto mb-8">
            Let's create a customized digital marketing strategy that drives real results for your business. 
            Get started with a free consultation and discover how we can help you achieve your goals.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button className="bg-[#543d98] hover:bg-[#543d98]/90 text-white px-8 py-4 rounded-xl text-lg font-bold">
              Get Free Consultation
              <img className="w-5 h-5 ml-2" alt="Arrow" src="/button-icon.svg" />
            </Button>
            
            <Button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#030019] px-8 py-4 rounded-xl text-lg font-bold transition-all duration-300">
              View Our Work
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-white/20">
            <div className="text-center">
              <div className="[font-family:'DM_Sans',Helvetica] font-black text-white text-3xl lg:text-4xl mb-2">
                100+
              </div>
              <div className="[font-family:'DM_Sans',Helvetica] font-normal text-white/80 text-sm">
                Happy Clients
              </div>
            </div>
            
            <div className="text-center">
              <div className="[font-family:'DM_Sans',Helvetica] font-black text-white text-3xl lg:text-4xl mb-2">
                300%
              </div>
              <div className="[font-family:'DM_Sans',Helvetica] font-normal text-white/80 text-sm">
                Avg. Growth
              </div>
            </div>
            
            <div className="text-center">
              <div className="[font-family:'DM_Sans',Helvetica] font-black text-white text-3xl lg:text-4xl mb-2">
                7+
              </div>
              <div className="[font-family:'DM_Sans',Helvetica] font-normal text-white/80 text-sm">
                Years Experience
              </div>
            </div>
            
            <div className="text-center">
              <div className="[font-family:'DM_Sans',Helvetica] font-black text-white text-3xl lg:text-4xl mb-2">
                24/7
              </div>
              <div className="[font-family:'DM_Sans',Helvetica] font-normal text-white/80 text-sm">
                Support
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
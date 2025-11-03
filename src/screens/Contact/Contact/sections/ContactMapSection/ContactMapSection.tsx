export const ContactMapSection = (): JSX.Element => {
  return (
    <section className="w-full bg-white py-16 lg:py-24" data-section="contact-map">
      <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#030019] text-3xl md:text-4xl lg:text-5xl mb-6">
            Find Us on the Map
          </h2>
          <p className="[font-family:'DM_Sans',Helvetica] font-normal text-[#666] text-base leading-relaxed max-w-2xl mx-auto">
            Located in Thane, Mumbai - easily accessible by public transport and with ample parking facilities.
          </p>
        </div>

        {/* Map Placeholder */}
        <div className="relative rounded-2xl overflow-hidden shadow-lg bg-gray-200 h-[400px] lg:h-[500px] flex items-center justify-center">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-[#543d98]/10 rounded-full flex items-center justify-center mx-auto">
              <img src="/impulse-website/location.png" alt="Location" className="w-8 h-8" />
            </div>
            <div>
              <h3 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#030019] text-xl mb-2">
                Impulse Digital Office
              </h3>
              
              <p className="[font-family:'DM_Sans',Helvetica] font-normal text-[#666] text-base">
                304 – 305, Chirag Infotech, Road No. 16/Z,<br />
                Ambica Nagar, Wagle Industrial Estate,<br />
                Thane, Mumbai 400604
              </p>
            </div>
            <button className="bg-[#543d98] hover:bg-[#543d98]/90 text-white px-6 py-3 rounded-xl font-medium transition-colors duration-300">
             <a href="https://maps.app.goo.gl/oXQwDdkzmrgxhkLT8" target="_blank"> Open in Google Maps </a>
            </button>
          </div>
        </div>

        {/* Directions */}
        
      </div>
    </section>
  );
};
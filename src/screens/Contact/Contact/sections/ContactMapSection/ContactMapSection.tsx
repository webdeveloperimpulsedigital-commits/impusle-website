export const ContactMapSection = (): JSX.Element => {
  const PLACE_URL = "https://www.google.com/maps?ll=19.203494,72.953999&z=14&t=m&hl=en-US&gl=US&mapclient=embed&cid=16179076680921522461"; // your verified Impulse Digital listing

  return (
    <section
      className="w-full bg-white py-16 lg:py-24 relative overflow-hidden"
      data-section="contact-map"
    >
      <div className="max-w-[1280px] mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#030019] text-3xl md:text-4xl lg:text-5xl mb-6">
            Find Us on the Map
          </h2>
          <p className="[font-family:'DM_Sans',Helvetica] font-normal text-[#666] text-base leading-relaxed max-w-2xl mx-auto">
            304 – 305, Chirag Infotech, Road No. 16/Z, Ambica Nagar, Wagle Industrial Estate, Thane, Mumbai 400604
          </p>
        </div>

        {/* Embedded Google Map */}
        <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-xl">
          <iframe
            title="Impulse Digital Pvt Ltd Location"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d30142.480967467654!2d72.953999!3d19.203494!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b9218eaaaaab%3A0xe087a0855822211d!2sImpulse%20Digital%20Pvt%20Ltd!5e0!3m2!1sen!2sus!4v1762946408599!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 w-full h-full"
          ></iframe>

          {/* Clickable overlay to open full Google Maps listing */}
          <a
            href={PLACE_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open Impulse Digital Pvt Ltd on Google Maps"
            className="absolute inset-0 z-[1]"
          />
        </div>
      </div>
    </section>
  );
};

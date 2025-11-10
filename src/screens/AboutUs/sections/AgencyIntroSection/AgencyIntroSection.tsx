import { useEffect, useRef, useState } from "react";

export const AgencyIntroSection = (): JSX.Element => {
  const introRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const root = introRef.current;
    if (!root) return;
    const sentinel = root.querySelector(".intro__sentinel") as HTMLElement | null;
    if (!sentinel) return;

    const io = new IntersectionObserver(
      ([entry]) => setRevealed(entry.isIntersecting),
      { threshold: 0.1, rootMargin: "0px 0px -20% 0px" }
    );
    io.observe(sentinel);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const scroller = sliderRef.current;
    if (!scroller) return;
    const onScroll = () => {
      const { scrollLeft, clientWidth } = scroller;
      const index = Math.round(scrollLeft / (clientWidth * 0.8));
      setActiveSlide(index);
    };
    scroller.addEventListener("scroll", onScroll, { passive: true });
    return () => scroller.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="w-full bg-white py-14 lg:py-24" id="abt-sec-border">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-0">
        {/* Heading + Paragraph */}
        <div className="intro__topcopy">
          <h2 className="intro__title">Creativity Is Our Business Plan.</h2>
         <p className="intro__subtitle">
  At Impulse Digital, we turn strategy into stories and caffeine into campaigns. 
  We don’t just market brands — we make them unforgettable.{" "}
  <span className="text-[#543d98] font-semibold">
    Scroll down to meet the two minds who turn “what ifs” into “wow!”
  </span>
</p>
        </div>

        <div ref={introRef} className={`intro ${revealed ? "intro--revealed" : ""}`}>
          {/* Logo */}
          <img
            src="/impulse-website/Impulse Logo.png"
            alt="Impulse Digital"
            className="intro__logo"
          />

          {/* Founders (desktop) */}
          <div className="intro__photos">
            <div className="intro__person">
              <img
                src="/impulse-website/adwait-sir.jpg"
                alt="Adwait Joshi"
                className="intro__photo"
              />
              <div className="intro__caption">
                <h4 className="intro__name">Adwait Joshi</h4>
                <p className="intro__role">Founder & Director</p>
              </div>
            </div>
            <div className="intro__person">
              <img
                src="/impulse-website/Abhishek Image.jpg"
                alt="Abhishek Arekar"
                className="intro__photo"
              />
              <div className="intro__caption">
                <h4 className="intro__name">Abhishek Arekar</h4>
                <p className="intro__role">Director</p>
              </div>
            </div>
          </div>

          {/* Mobile slider */}
          <div className="intro__sliderWrap">
            <div className="intro__slider" ref={sliderRef}>
              <div className="intro__slide">
                <img
                  src="/impulse-website/adwait-sir.jpg"
                  alt="Adwait Joshi"
                  className="intro__slidePhoto"
                />
                <div className="intro__slideCaption">
                  <h4 className="intro__name">Adwait Joshi</h4>
                  <p className="intro__role">Founder & Director</p>
                </div>
              </div>
              <div className="intro__slide">
                <img
                  src="/impulse-website/Abhishek Image.jpg"
                  alt="Abhishek Arekar"
                  className="intro__slidePhoto"
                />
                <div className="intro__slideCaption">
                  <h4 className="intro__name">Abhishek Arekar</h4>
                  <p className="intro__role">Director</p>
                </div>
              </div>
            </div>
            <div className="intro__dots">
              <span className={`intro__dot ${activeSlide === 0 ? "is-active" : ""}`} />
              <span className={`intro__dot ${activeSlide === 1 ? "is-active" : ""}`} />
            </div>
          </div>

          <div className="intro__sentinel" />
        </div>
      </div>

      <style>{`
        /* Top Copy */
        .intro__topcopy {
          text-align: center;
          margin: 0 auto 0.5rem auto;
          max-width: 880px;
          padding: 0 1rem;
        }
        .intro__title {
          font-family: 'DM Sans', Helvetica, sans-serif;
          font-weight: 800;
          font-size: clamp(30px, 4vw, 52px);
          color: #543d98;
          margin: 0 0 0.5rem 0;
          line-height: 1.1;
        }
        .intro__subtitle {
          font-family: 'DM Sans', Helvetica, sans-serif;
          font-size: clamp(16px, 1.5vw, 20px);
          color: #030019;
          opacity: 0.85;
          margin: 0;
        }

        /* Main Section */
        .intro {
          position: relative;
          width: 100%;
          min-height: 90vh;
          display: grid;
          place-items: center;
          overflow: visible;
          --photo-shift: 140px;
          padding-top: 0.25rem;
          padding-bottom: 10rem; /* space below photos */
          margin-bottom: 20rem;  /* gap before next section */
        }

        /* Logo */
        .intro__logo {
          width: min(60vw, 740px);
          max-width: 740px;
          opacity: 1;
          transform: scale(1);
          transition: opacity 0.8s ease, transform 1s ease;
          z-index: 2;
          filter: drop-shadow(0 10px 28px rgba(0,0,0,0.08));
        }

        /* Photos */
        .intro__photos {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: flex-start;
          justify-content: center;
          gap: 120px;
          padding: 13rem 4rem 8rem;
          opacity: 0;
          transform: translateY(calc(var(--photo-shift) + 10px));
          transition: opacity 0.8s ease, transform 1s ease;
          z-index: 1;
        }
        .intro__person {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 0.8rem;
        }
        .intro__photo {
          width: 22vw;
          max-width: 360px;
          border-radius: 18px;
          object-fit: cover;
          box-shadow: 0 16px 40px rgba(0,0,0,0.18);

          /* B/W by default */
          filter: grayscale(100%) saturate(0.9) contrast(1.05) brightness(0.9);
          transition: filter .35s ease, transform .35s ease;
          will-change: filter, transform;
        }
        /* Color on hover/focus (desktop pointer devices) */
        @media (hover:hover) and (pointer:fine) {
          .intro__person:hover .intro__photo,
          .intro__person:focus-within .intro__photo {
            filter: none;
            transform: scale(1.012);
          }
        }

        /* Caption */
        .intro__caption,
        .intro__slideCaption {
          font-family: 'DM Sans', Helvetica, sans-serif;
          text-align: center;
        }
        .intro__name {
          font-weight: 700;
          color: #030019;
          font-size: 1.4rem;
          margin: 0;
        }
        .intro__role {
          color: #543d98;
          font-size: 1rem;
          margin-top: 4px;
        }

        /* Animation states */
        .intro__sentinel {
          position: absolute;
          bottom: 0;
          width: 100%;
          height: 1px;
        }
        .intro--revealed .intro__logo {
          opacity: 0;
          transform: scale(0.9) translateY(-25px);
        }
        .intro--revealed .intro__photos,
        .intro--revealed .intro__sliderWrap {
          opacity: 1;
          transform: translateY(var(--photo-shift));
          z-index: 3;
        }

        /* Mobile slider */
        .intro__sliderWrap {
          display: none;
          position: absolute;
          inset: 0;
          opacity: 0;
          transition: opacity 0.8s ease, transform 1s ease;
          transform: translateY(calc(var(--photo-shift) + 10px));
          z-index: 1;
          padding-top: 7rem;
          padding-bottom: 5rem; /* space between slider and next section */
        }
        .intro__slider {
          display: flex;
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          -webkit-overflow-scrolling: touch;
          gap: 1rem;
          padding-left: 1rem;
        }
        .intro__slide {
          scroll-snap-align: start;
          flex: 0 0 80%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
        }
        .intro__slidePhoto {
          width: 100%;
          border-radius: 16px;
          object-fit: cover;
          box-shadow: 0 16px 40px rgba(0,0,0,0.18);

          /* B/W by default */
          filter: grayscale(100%) saturate(0.9) contrast(1.05) brightness(0.9);
          transition: filter .35s ease, transform .35s ease;
          will-change: filter, transform;
        }
        /* Color on hover/focus for devices that support it */
        @media (hover:hover) and (pointer:fine) {
          .intro__slide:hover .intro__slidePhoto,
          .intro__slide:focus-within .intro__slidePhoto {
            filter: none;
            transform: scale(1.01);
          }
        }

        /* Dots */
        .intro__dots {
          display: flex;
          justify-content: center;
          gap: 10px;
          margin-top: 12px;
        }
        .intro__dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #d8c8ff;
          transition: transform 0.25s ease, background 0.25s ease;
        }
        .intro__dot.is-active {
          background: #543d98;
          transform: scale(1.25);
        }

        /* Reduced motion */
        @media (prefers-reduced-motion: reduce) {
          .intro__photo,
          .intro__slidePhoto { transition: none; }
        }

        /* Mobile */
        @media (max-width: 768px) {
          .intro {
            min-height: 78vh;
            padding-top: 0.25rem;
            padding-bottom: 11rem; /* extra spacing below photos */
            --photo-shift: 110px;
            margin-bottom: 5rem;
          }
          .intro__logo { width: min(70vw, 420px); }
          .intro__photos { display: none; }
          .intro__sliderWrap { display: block; }
          .intro__name { font-size: 1.2rem; }
          .intro__role { font-size: 0.95rem; }
          .intro__subtitle { font-size: 15px; } /* fixed typo */
          .intro__topcopy { margin-bottom: 0.5rem; }
        }
      `}</style>
    </section>
  );
};

import { useEffect, useRef, useState } from "react";

export const AgencyIntroSection = (): JSX.Element => {
  const introRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);

  // Reveal toggle on scroll
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

  // Track active slide for dots
  useEffect(() => {
    const scroller = sliderRef.current;
    if (!scroller) return;

    const onScroll = () => {
      const { scrollLeft, clientWidth } = scroller;
      const index = Math.round(scrollLeft / (clientWidth * 0.8)); // adjusted for partial view
      setActiveSlide(index);
    };

    scroller.addEventListener("scroll", onScroll, { passive: true });
    return () => scroller.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="w-full bg-white py-20 lg:py-24" id="abt-sec-border">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-0">
        <div ref={introRef} className={`intro ${revealed ? "intro--revealed" : ""}`}>
          {/* Logo (initial view) */}
          <img
            src="/impulse-website/Impulse Logo.png"
            alt="Impulse Digital"
            className="intro__logo"
          />

          {/* Desktop photos */}
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
                src="/impulse-website/adwait-sir.jpg"
                alt="Abhishek Arekar"
                className="intro__photo"
              />
              <div className="intro__caption">
                <h4 className="intro__name">Abhishek Arekar</h4>
                <p className="intro__role">Director</p>
              </div>
            </div>
          </div>

          {/* Mobile Slider */}
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
                  src="/impulse-website/adwait-sir.jpg"
                  alt="Abhishek Arekar"
                  className="intro__slidePhoto"
                />
                <div className="intro__slideCaption">
                  <h4 className="intro__name">Abhishek Arekar</h4>
                  <p className="intro__role">Director</p>
                </div>
              </div>
            </div>

            {/* Dots */}
            <div className="intro__dots">
              <span className={`intro__dot ${activeSlide === 0 ? "is-active" : ""}`} />
              <span className={`intro__dot ${activeSlide === 1 ? "is-active" : ""}`} />
            </div>
          </div>

          {/* Scroll trigger */}
          <div className="intro__sentinel" />
        </div>
      </div>

      <style>{`
        /* Container */
        .intro {
          position: relative;
          width: 100%;
          min-height: 100vh;
          display: grid;
          place-items: center;
          overflow: visible;
          margin-bottom: 3rem;
          --photo-shift: 68px;
        }

        /* Logo */
        .intro__logo {
          width: min(68vw, 880px);
          max-width: 880px;
          opacity: 1;
          transform: scale(1);
          transition: opacity 0.8s ease, transform 1s ease;
          z-index: 2;
          filter: drop-shadow(0 10px 28px rgba(0,0,0,0.08));
        }

        /* Desktop Photos */
        .intro__photos {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: flex-start;
          justify-content: center;
          gap: 120px;
          padding: 10rem 6rem 4rem;
          opacity: 0;
          transform: translateY(calc(var(--photo-shift) + 16px));
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
          width: 24vw;
          max-width: 400px;
          border-radius: 20px;
          object-fit: cover;
          box-shadow: 0 16px 40px rgba(0,0,0,0.18);
        }

        .intro__caption,
        .intro__slideCaption {
          font-family: 'DM Sans', Helvetica, sans-serif;
          text-align: center;
        }

        .intro__name {
          font-weight: 700;
          color: #030019;
          font-size: 1.5rem;
          margin: 0;
        }

        .intro__role {
          color: #543d98;
          font-size: 1.1rem;
          margin-top: 4px;
        }

        .intro__sentinel {
          position: absolute;
          bottom: 0;
          width: 100%;
          height: 1px;
        }

        /* Reveal state */
        .intro--revealed .intro__logo {
          opacity: 0;
          transform: scale(0.9) translateY(-30px);
        }
        .intro--revealed .intro__photos {
          opacity: 1;
          transform: translateY(var(--photo-shift));
          z-index: 3;
        }
        .intro--revealed .intro__sliderWrap {
          opacity: 1;
          transform: translateY(var(--photo-shift));
          z-index: 3;
        }

        /* ===== Mobile Slider ===== */
        .intro__sliderWrap {
          display: none;
          position: absolute;
          inset: 0;
          opacity: 0;
          transition: opacity 0.8s ease, transform 1s ease;
          transform: translateY(calc(var(--photo-shift) + 16px));
          z-index: 1;
          padding-top: 6rem;
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
          flex: 0 0 80%; /* 👈 allows peek of next image */
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
        }

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

        /* Mobile */
        @media (max-width: 768px) {
          .intro {
            min-height: 88vh;
            margin-bottom: 2rem;
            --photo-shift: 48px;
          }
          .intro__logo { width: min(78vw, 520px); }

          /* hide desktop photos on mobile */
          .intro__photos { display: none; }
          .intro__sliderWrap { display: block; }

          .intro__name { font-size: 1.25rem; }
          .intro__role { font-size: 1rem; }
        }
      `}</style>
    </section>
  );
};

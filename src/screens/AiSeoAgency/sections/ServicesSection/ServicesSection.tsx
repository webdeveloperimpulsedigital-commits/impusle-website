// ServicesSection.jsx
import React, { useEffect, useRef, useState } from "react";
import { Button } from "../../../../components/ui/button";

const ServicesSection = () => {
  const services = [
    "Employer Branding",
    "SEO",
    "Website Development",
    "Branding",
    "Pay-Per-Click",
    "Content Writing Services",
  ];

  const stackRef = useRef(null);

  // Mobile slider refs
  const sliderRef = useRef(null);
  const trackRef = useRef(null);
  const prevBtnRef = useRef(null);
  const nextBtnRef = useRef(null);

  // 👉 added state for dots
  const [slide, setSlide] = useState(0);

  const data = [
  {
    n: "01",
    title: "AEO (Answer Engine Optimization)",
    points: [
      "At Impulse Digital, we optimize for the next era of search, ensuring your brand is discoverable across AI-driven engines and voice assistants through context-rich, conversational content.",
    ],
    img: "/impulse-website/aeo.jpg", // change if you have a different image
  },

  {
    n: "02",
    title: "GEO (Generative Engine Optimization)",
    points: [
      "We craft content that earns your brand a place in AI-generated answers, summaries, and recommendations—making sure you stay visible where audiences seek instant insights.",
    ],
    img: "/impulse-website/geo.jpg", // change if needed
  },

  {
    n: "03",
    title: "AI Platforms",
    points: [
      "Powered by leading AI tools and automation, we combine data intelligence with creativity to deliver SEO strategies that adapt, perform, and scale in real time.",
    ],
    img: "/impulse-website/ai-platforms.jpg", // change if needed
  },
];


  // Desktop: active sticky card
  useEffect(() => {
    const container = stackRef.current;
    if (!container) return;
    const cards = Array.from(container.querySelectorAll(".card"));

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        cards.forEach((c) => c.classList.remove("is-active"));
        if (visible) visible.target.classList.add("is-active");
      },
      { threshold: [0.55, 0.75] }
    );

    cards.forEach((c) => io.observe(c));
    return () => io.disconnect();
  }, []);

  // Mobile slider
  useEffect(() => {
    const slider = sliderRef.current;
    const track = trackRef.current;
    const prevBtn = prevBtnRef.current;
    const nextBtn = nextBtnRef.current;
    if (!slider || !track || !prevBtn || !nextBtn) return;

    let idx = 0;
    const slideW = () => slider.clientWidth;

    const go = (i) => {
      const max = data.length - 1;
      idx = Math.max(0, Math.min(i, max));
      track.style.transform = `translateX(${-idx * slideW()}px)`;
      prevBtn.disabled = idx === 0;
      nextBtn.disabled = idx === max;
      setSlide(idx);
    };

    const onResize = () => go(idx);
    window.addEventListener("resize", onResize);

    const onPrev = () => go(idx - 1);
    const onNext = () => go(idx + 1);
    prevBtn.addEventListener("click", onPrev);
    nextBtn.addEventListener("click", onNext);

    // swipe/drag
    let startX = 0,
      curX = 0,
      dragging = false;
    const onDown = (e) => {
      dragging = true;
      startX = e.clientX;
      track.style.transition = "none";
    };
    const onMove = (e) => {
      if (!dragging) return;
      curX = e.clientX;
      const dx = curX - startX;
      track.style.transform = `translateX(${ -idx * slideW() + dx }px)`;
    };
    const onUp = () => {
      if (!dragging) return;
      dragging = false;
      track.style.transition = "transform .35s ease";
      const dx = curX - startX;
      if (Math.abs(dx) > 60) go(idx + (dx < 0 ? 1 : -1));
      else go(idx);
      startX = 0;
      curX = 0;
    };

    track.addEventListener("pointerdown", onDown);
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);

    go(0);

    return () => {
      window.removeEventListener("resize", onResize);
      prevBtn.removeEventListener("click", onPrev);
      nextBtn.removeEventListener("click", onNext);
      track.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
    };
  }, [data.length]);

  // 👉 helper for dot click
  const goTo = (i) => {
    const slider = sliderRef.current;
    const track = trackRef.current;
    if (!slider || !track) return;
    const max = data.length - 1;
    const index = Math.max(0, Math.min(i, max));
    const w = slider.clientWidth;
    setSlide(index);
    track.style.transition = "transform .35s ease";
    track.style.transform = `translateX(${-index * w}px)`;
  };

  return (
    <>
      <style>{`
        *{box-sizing:border-box;margin:0;padding:0}
        img{display:block;max-width:100%;height:auto;}

        .wrap{max-width:100%;margin:auto;position:relative;background:var(--bg);padding:4rem 6rem}

        .eyebrow{font-size:20px;letter-spacing:.02em;color:#b7b9c9;margin-bottom:4px;opacity:.85}
        .h1{font-size:56px;font-weight:800;line-height:1.05;margin-bottom:36px}

        /* ---------- DESKTOP (sticky effect) ---------- */
        .stack{display:grid;grid-template-columns:1fr auto;gap:18px}
        .section{min-height:100vh;display:flex;align-items:center;justify-content:center}
        .card{
          min-height:600px; position:sticky; top:64px;
          display:flex; align-items:flex-start; justify-content:space-between; gap:42px;
          width:100%; background:#020018;
          border-radius:var(--radius); padding:180px 10px 0px; box-shadow:var(--shadow);
          transition:transform .25s ease, box-shadow .25s ease, border-color .25s ease;
        }
        .card.is-active{transform:scale(1.01);border:none;}
        .num{flex:0 0 72px;font-weight:700;font-size:42px;letter-spacing:.02em;line-height:1;color:#fff;margin-top:6px}
        .copy{flex:1 1 auto;width:300px;padding-right:10px}
        .copy h3{font-size:40px;font-weight:700;letter-spacing:.01em;margin-bottom:18px}
        .copy ul{list-style:none;display:grid;gap:16px}
        .copy li{font-size:18px;color:#e9eaf5;padding-left:0px;position:relative}
        .copy li::before{content:none;position:absolute;left:0;top:.68em;width:6px;height:6px;border-radius:50%;background:rgba(255,255,255,.8)}
        .visual{flex:0 0 420px;display:flex;justify-content:flex-end}
        .shot{width:420px;height:340px;overflow:hidden;border-radius:32px;position:relative;background:linear-gradient(180deg,rgba(255,255,255,.04),transparent)}
        .shot img{width:100%;height:100%;object-fit:cover;border-radius:32px}

        /* Sticky header */
        .wrap > .top-0{ position: sticky; top: 0; z-index: 99; background: #020018; }
        .wrap > .top-0::after{ content: ""; display:block; height:1px; width:100%; margin-top:40px; background: rgba(255,255,255,0.15); }
        .wrap > .top-0 span:first-child{ display:block; color: rgba(255,255,255,0.72) !important; margin-bottom:4px; }

        /* ---------- MOBILE SLIDER ---------- */
        .mobile-slider{display:none}
        @media (max-width:980px){
          .py-8{ padding-top:3rem; }
          .wrap{padding:2.8rem 1.25rem}
          .stack{display:none}
          .mobile-slider{display:block;position:relative;overflow:hidden}
          .track{display:flex;will-change:transform;transition:transform .35s ease}
          .mcard{
            flex:0 0 100%;
            background:var(--card);
            border-radius:var(--radius);
            padding: 45px 0px 20px 10px;
            min-height: calc(88vh - 190px);
            display:flex;flex-direction:column;gap:18px;
            box-shadow:var(--shadow);
          }
          .m-num{font-size:16px;font-weight:400; line-height: 0px;}
          .m-title{font-size:20px;font-weight:700}
          .m-list{list-style:none;display:grid;gap:12px}
          .m-list li{font-size:16px;color:#e9eaf5;padding-left:0px;position:relative}
          .m-list li::before{content:none;position:absolute;left:0;top:.58em;width:6px;height:6px;border-radius:50%;background:rgba(255,255,255,.8)}
          .m-shot{width:100%;border-radius:20px;overflow:hidden}
          .m-shot img{width:100%;height:auto;border-radius:20px}

          .mnav{
            position:relative;left:0;right:0;bottom:20px;
            display:flex;justify-content:center;gap:12px;pointer-events:none;
          }
          .navbtn{
            pointer-events:auto;
            width:50px;height:50px;border-radius:999px;border:1px solid rgba(255,255,255,.25);
            background:#ffffff;
            display:grid;place-items:center;backdrop-filter:blur(4px);
          }
          .navbtn svg{width:50px;height:50px}
          .navbtn.next{background:var(--accent);border-color:var(--accent)}
          .navbtn[disabled]{opacity:1}

          .wrap > .top-0{ position: relative; background: var(--bg); }
        }

        @media (max-width:1100px){
          .visual{flex:0 0 440px}
          .shot{width:440px;height:290px}
          .copy h3{font-size:34px}
        }
      `}</style>

      <section
        className="relative w-full bg-[#020018]"
        id="sec-border"
        data-section="services"
      >
        <div className="wrap">
          {/* Header */}
          <div className="top-0 w-full lg:py-8 sm:py-40 md:py-[60px] z-50">
            <div className="mx-auto relative">
              <h2 className="[font-family:'DM_Sans',Helvetica] font-normal text-[20px] md:text-[34px] leading-tight">
                <span className="text-[#ffffffb2]  lg:text-[34px] sm:text-[16px]">
                  Our AI SEO
                </span>
                <span className="font-bold text-[#ffffff] lg:text-[52px] md:text-[52px] sm:text-[26px]">
                 Services
                </span>
              </h2>
            </div>
          </div>

          {/* DESKTOP: sticky stack */}
          <div className="stack" id="stack" ref={stackRef}>
            {data.map((s, i) => (
              <React.Fragment key={s.n}>
                <article className="card mx-auto" data-index={i}>
                  <div className="num">{s.n}</div>
                  <div className="copy">
                    {/* removed anchor href -> span */}
                    <h3 className="w-full lg:w-[340px] [font-family:'Space Grotesk', sans-serif] font-semibold text-white text-[28px] lg:text-[35px] leading-[32px] lg:leading-[40px]">
                      <span>{s.title}</span>
                    </h3>
                    <ul>{s.points.map((p) => <li key={p}>{p}</li>)}</ul>
                  </div>

                  <div className="visual">
                    <div className="shot">
                      {/* removed anchor around image */}
                      <div>
                        <img src={s.img} alt={s.title} />
                      </div>
                    </div>
                  </div>

                  <div className="group flex w-60 items-start justify-center lg:justify-end pt-2 lg:pt-[7px]">
                    {/* removed anchor href -> button with no action */}
                    <button
                      type="button"
                      aria-label="decorative arrow"
                      className="pointer-events-none"
                      tabIndex={-1}
                    >
                      <img
                        src="/impulse-website/Arrow.png"
                        alt=""
                        aria-hidden="true"
                        className="w-[56px] lg:w-[80px] object-contain transition-transform duration-300 group-hover:rotate-45 pointer-events-none"
                      />
                    </button>
                  </div>
                </article>
                <div style={{ height: "1px", visibility: "hidden" }} />
              </React.Fragment>
            ))}
          </div>

          {/* MOBILE: horizontal slider */}
          <div className="mobile-slider" id="mobileSlider" ref={sliderRef}>
            <div className="track" id="mobileTrack" ref={trackRef}>
              {data.map((s) => (
                <div className="mcard" key={`m-${s.n}`}>
                  <div className="m-num text-white">{s.n}</div>
                  <div className="m-title text-white">{s.title}</div>
                  <ul className="m-list">
                    {s.points.map((p) => (
                      <li key={`m-${s.n}-${p}`}>{p}</li>
                    ))}
                  </ul>
                  <div className="m-shot">
                    <img src={s.img} alt={s.title} />
                  </div>
                </div>
              ))}
            </div>

            <center>
              <div className="flex items-center justify-center gap-2 mb-5">
                {data.map((_, i) => (
                  <button
                    key={i}
                    aria-label={`Go to slide ${i + 1}`}
                    onClick={() => goTo(i)}
                    className={`h-2 rounded-full transition-all ${
                      slide === i ? "w-5 bg-[#543d98]" : "w-2 bg-[#D1D5DB]"
                    }`}
                  />
                ))}
              </div>
            </center>
            <br />

            <div className="mnav">
              <Button
                className="navbtn prev group w-15 h-15 rounded-full border-2 border-[#543d98] bg-white flex items-center justify-center group transition-all duration-300 hover:bg-[#f5f5f5] hover:border-[#543d98]"
                id="prevBtn"
                ref={prevBtnRef}
                aria-label="Previous"
              >
                <img
                  src="/impulse-website/left-arrow.png"
                  alt="Previous"
                  className="w-9 transition-transform duration-300 group-hover:rotate-45 pointer-events-none"
                />
              </Button>

              <Button
                className="navbtn next group w-15 h-15 rounded-full border-2 border-[#EAEAEA] bg-[#543d98] flex items-center justify-center group transition-all duration-300"
                id="nextBtn"
                ref={nextBtnRef}
                aria-label="Next"
              >
                <img
                  src="/impulse-website/right-arrow.png"
                  alt="Next"
                  className="w-9 transition-transform duration-300 group-hover:rotate-45 pointer-events-none"
                />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesSection;
export { ServicesSection };

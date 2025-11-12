// ServicesSection.jsx
import React, { useEffect, useRef, useState } from "react";
import { Button } from "../../../../components/ui/button";

const ServicesSection = () => {
  const services = [
    "Employer Branding11",
    "SEO",
    "Website Development",
    "Branding",
    "Performance Marketing",
    "Content Writing Services",
    "Employer Branding11",
    "SEO",
    "Website Development",
    "Branding",
    "Performance Marketing",
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
      title: "SEO",
      points: [
        "Your prospects are searching, we make sure they find you first. We combine technical expertise with creative content strategies to boost your website’s visibility and ranking. Our SEO team optimizes every aspect of your online presence to attract, engage, and convert the right audience, ensuring your business grows where it matters most: search results.",
      ],
      img: "/impulse-website/06_SEO.jpg",
    },
    {
      n: "02",
      title: "Website Development & Design",
      points: [
        "Your website is more than just a digital address, it’s your brand’s first impression, storyteller, and salesperson, all rolled into one.  We design and develop websites that not only look stunning but also perform seamlessly. From intuitive navigation to engaging visuals and compelling content, we build experiences that keep visitors clicking and coming back for more. Every line of code and pixel is crafted to reflect your brand’s essence and purpose. In a world full of tabs and distractions, we make sure your website stands out and speaks volumes.",
      ],
      img: "/impulse-website/07_Website Development.jpg",
    },
    {
      n: "03",
      title: "Performance Marketing",
      points: [
        "Every campaign should perform, not just run, that’s where we come in. At Impulse Digital, our performance marketing approach ensures every click, impression and conversion drives measurable growth. We blend strategy, creativity and data to deliver results you can see and scale. From understanding audience behaviour to optimizing spends across channels, we focus on impact over noise. With us, your marketing doesn’t just reach people, it moves them to act.",
      ],
      img: "/impulse-website/01_Pay-Per-Click.jpg",
    },
    {
      n: "04",
      title: "Content Writing Services",
      points: [
        "Great content doesn’t just tell a story, it builds a connection. We craft narratives that resonate with your audience and reflect your brand’s true voice. Every word is designed with purpose, ensuring your message reaches the right people in the most meaningful way. From thought-provoking blogs to engaging campaign copy, our content marketing approach blends creativity with strategy. Because when your content speaks the language of your audience, it turns attention into trust.",
      ],
      img: "/impulse-website/02_Content Writing.jpg",
    },
    {
      n: "05",
      title: " Video Production",
      points: [
        "Transform Your Brands Online Communication with Social Media Video Production. Our Social Media Video Production service is specifically designed to elevate your brand's online presence with visually appealing and strategically crafted videos tailored to suit your brand and its target audience. From ideation, conceptualization, method storytelling to visually crafting a masterpiece, we handle every aspect of video production with the required ",
      ],
      img: "/impulse-website/03_Production.jpg",
    },
    {
      n: "06",
      title: "Social Media Marketing",
      points: [
        "Your audience is scrolling, now the question is, are they stopping for you? At Impulse Digital, we make sure your brand stands out in the endless feed. Our social media marketing services blend strategy, creativity and data to create conversations that matter. From relatable content to impactful campaigns, we help you build a community that listens, engages and grows with you. Because on social media, it’s not just about being seen, it’s about being remembered.",
      ],
      img: "/impulse-website/04_Social Media Marketing.jpg",
     
    },
    {
      n: "07",
      title: "Employer Branding",
      points: [
        "A strong employer brand doesn’t just attract talent, it inspires it. Our employer branding services help organizations shape how people see, feel and experience their workplace. From defining your EVP to building authentic storytelling that reflects your culture, we turn your employees into brand ambassadors and your company into a talent magnet. Through strategy, design and communication, we craft a brand narrative that resonates both inside and outside the organization. Because when people believe in where they work, they help the world believe in it too.",
      ],
      img: "/impulse-website/05_Employer Branding.jpg",
    },
    {
      n: "08",
      title: "Branding",
      points: [
        "A brand is more than just a logo, it is the feeling people associate with your name. Through our corporate branding services, we help you create that emotion by shaping how your audience perceives and connects with your business. From uncovering your core values to crafting a powerful visual and verbal identity, every detail is designed to make your brand stand apart. We blend strategy with creativity to build a consistent and lasting impression across every touchpoint. When your brand feels authentic, it does not just capture attention, it earns trust.",
      ],
      img: "/impulse-website/08_Branding.jpg",
    },
  ];

  // Desktop: active sticky card (same IntersectionObserver logic)
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

  // Mobile slider: arrows + swipe (same as your HTML) — only added setSlide to keep dots in sync
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
      setSlide(idx); // <-- keep dots in sync
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

  // 👉 helper for dot click — no layout changes
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
      {/* font (same as your HTML) */}

      {/* same CSS */}
      <style>{`
  
  *{box-sizing:border-box;margin:0;padding:0}
  img{display:block;max-width:100%;height:auto;}

  .wrap{max-width:100%;margin:auto;position:relative;background:var(--bg);padding:4rem 6rem}

  .eyebrow{font-size:20px;letter-spacing:.02em;color:#b7b9c9;margin-bottom:4px;opacity:.85}
  .h1{font-size:56px;font-weight:800;line-height:1.05;margin-bottom:36px}

  /* ---------- DESKTOP (unchanged sticky effect) ---------- */
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

  /* Make the title area sticky */
.wrap > .top-0{
  position: sticky;
  top: 0;                 /* adjust if you have a fixed site header */
  z-index: 99;
  background: #020018;  /* solid backdrop while stuck */
}

/* Draw a thin HR right under the title block */
.wrap > .top-0::after{
  content: "";
  display: block;
  height: 1px;
  width: 100%;
  margin-top: 40px;
  background: rgba(255,255,255,0.15);
}

/* Ensure the eyebrow line ("Every goal needs a roadmap") is visible */
.wrap > .top-0 span:first-child{
  display: block;
  color: rgba(255,255,255,0.72) !important;
  margin-bottom: 4px;
}

  /* ---------- MOBILE SLIDER (only on <= 980px) ---------- */
 
  .mobile-slider{display:none}

  @media (max-width:980px){
  .py-8{
  padding-top:3rem;}
    .wrap{padding:2.8rem 1.25rem}
    .stack{display:none}                 /* hide desktop stack */
    .mobile-slider{display:block;position:relative;overflow:hidden}
    .track{display:flex;will-change:transform;transition:transform .35s ease}
    .mcard{
      flex:0 0 100%;
      background:var(--card);
      border-radius:var(--radius);
      padding: 45px 0px 20px 10px;
      min-height: calc(85vh - 190px);   /* room for header + nav buttons */
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

    /* Bottom-center nav */
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

     /* Make the title area sticky */
.wrap > .top-0{
  position: relative;
  top: 0;                 /* adjust if you have a fixed site header */
  z-index: 99;
  background: var(--bg);  /* solid backdrop while stuck */
}
  }

  /* extra responsive tweaks */
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
          {/* Fixed/Sticky Header */}
          <div className="top-0 w-full lg:py-8 sm:py-40 md:py-[60px] z-50">
            <div className="mx-auto relative">
              <h2 className="[font-family:'DM_Sans',Helvetica] font-normal text-[20px] md:text-[34px] leading-tight">
                <span className="text-[#ffffffb2]  lg:text-[34px] sm:text-[16px]">
                  Every goal needs a roadmap
                </span>

                <span className="font-bold text-[#ffffff] lg:text-[52px] md:text-[52px] sm:text-[26px]">
                  We've got yours!
                </span>
              </h2>
            </div>
          </div>

          {/* DESKTOP: sticky stack */}
          <div className="stack" id="stack" ref={stackRef}>
            {data.map((s, i) => (
              <React.Fragment key={s.n}>
                {/* matching your HTML: card appended directly (no section wrapper) */}
                <article className="card  mx-auto" data-index={i}>
                  <div className="num">{s.n}</div>
                  <div className="copy">
                    <h3 className="w-full lg:w-[340px] [font-family:'Space Grotesk', sans-serif] font-semibold text-white text-[28px] lg:text-[35px] leading-[32px] lg:leading-[40px]">
                      <a href="">{s.title}</a>
                    </h3>
                    <ul>{s.points.map((p) => <li key={p}>{p}</li>)}</ul>
                  </div>
                  <div className="visual ">
                    <div className="shot">
                      <a href="#">
                        <img src={s.img} alt={s.title} />
                      </a>
                    </div>
                  </div>

                  <div className="group flex w-60 items-start justify-center lg:justify-end pt-2 lg:pt-[7px]">
                    <a href="">
                      <img
                        src="/impulse-website/Arrow.png"
                        alt="Arrow"
                        className="w-[56px] lg:w-[80px] object-contain transition-transform duration-300 group-hover:rotate-45 pointer-events-none"
                      />
                    </a>
                  </div>
                </article>
                {/* placeholder for second grid column */}
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
            </center> <br></br>

            <div className="mnav">
              {/* dots (kept exactly where you placed them) */}
              

              <Button
                className="navbtn prev group w-15 h-15 rounded-full border-2 border-[#543d98] bg-white flex items-center justify-center group transition-all duration-300 hover:bg-[#f5f5f5] hover:border-[#543d98]"
                id="prevBtn"
                ref={prevBtnRef}
                aria-label="Previous"
              >
                <img
                  src="/impulse-website/left-arrow.png"
                  alt="Next"
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

        <div className="relative h-[80px] md:h-[100px] w-full">
          {/* Purple Strip */}
          <div className="absolute sm:top-[30px] lg:top-[20px] left-0 w-[100%] h-[80px] md:h-[100px] bg-[#6A0DAD] transform -skew-y-3 origin-top-left overflow-hidden -translate-x-[10%] z-0">
            <div className="flex items-center h-full animate-marquee whitespace-nowrap">
              <div className="flex items-center gap-6 md:gap-8 md:px-8">
                {[...Array(3)].map((_, setIndex) => (
                  <React.Fragment key={`purple-set-${setIndex}`}>
                    {services.map((service, index) => (
                      <React.Fragment
                        key={`purple-${setIndex}-${index}`}
                      >
                        <span className="[font-family:'DM_Sans',Helvetica] font-semibold text-white text-2xl md:text-4xl lg:text-5xl whitespace-nowrap">
                          {service}
                        </span>
                        <img
                          className="w-[20px] h-[20px] md:w-[30px] md:h-[30px] lg:w-[40px] lg:h-[40px] mx-2 md:mx-4"
                          alt="Vector"
                          src="vector-6.png"
                        />
                      </React.Fragment>
                    ))}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>

          {/* Black Strip */}
        </div>
      </section>
    </>
  );
};

export default ServicesSection;
export { ServicesSection };

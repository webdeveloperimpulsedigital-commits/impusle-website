// ServicesSection.jsx
import React, { useEffect, useRef } from "react";

const ServicesSection = () => {
  const stackRef = useRef(null);

  // Mobile slider refs
  const sliderRef = useRef(null);
  const trackRef = useRef(null);
  const prevBtnRef = useRef(null);
  const nextBtnRef = useRef(null);

  const data = [
    { n:"01", title:"Video Editing",
      points:["Great content deserves seamless execution. Our social media video production services transform your raw footage into high-quality, visually compelling videos that turn your audience into fans. Be it color correction, sound design, smooth transitions or text overlays, we craft polish videos that tell a story."],
      img:"/impulse-website/video  service section 520 x 340 - Video editing.jpg" },
    { n:"02", title:"Video production",
      points:["Want us to take care of the entire process end-to-end? No problem, We will script, design, shoot, edit, and handle the post-production as well for you. Our high-tech equipment, creative strategists, and sound experience of creative shoots ensure that the final outcome is professional-grade videos tailored for your audience."],
      img:"/impulse-website/video  service section 520 x 340 - Video production.jpg" },
    {
      n:"03", title:"Content shoot",
      points:["With a team of skilled content photographers and videographers, our content shoots focus on creativity, lighting, and composition to create visuals that deliver emotions, your brand values, and engagement. Be it influencer collaborations, lifestyle content, every piece or behind-the-scenes, we promise to get you the best. "],
      img:"/impulse-website/video  service section 520 x 340 - Content shoot.jpg"},
      {
        n:"04", title:"Product shoot",
        points:["Our product shoot services are designed to make your product the HERO of your campaign. Our team carefully weaves the product into the scene, focusing on its key details, positioning, and lighting, ensuring every detail is well-suited for your eCommerce, lifestyle shots, and promotional videos."],
        img:"/impulse-website/video  service section 520 x 340 - Product shoot.jpg"},
      {
        n:"05", title:"Motion graphics",
        points:["Motion graphics bring your vision to life with engaging animations, dynamic typography and awesome visual effects. With every element that moves, your audience gets hooked and you get better engagement. Best for explainer videos, logo animations, and social media visuals, our services simplify complex ideas into memorable content."],
        img:"/impulse-website/video  service section 520 x 340 - Motion graphics.jpg"
      },
      {
        n:"06", title:"Television and OTT platform assets",
        points:["Promotional videos, ad spots, title sequences, show intros, trailer edits, and full-scale commercials—our expertise in video production and motion graphics ensure visually compelling content optimized for digital and broadcast audiences for maximum reach and viewer engagement. "],
        img:"/impulse-website/video  service section 520 x 340 - Television and OTT platform assets.jpg"
      }
    
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

  // Mobile slider: arrows + swipe (same as your HTML)
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
    };

    const onResize = () => go(idx);
    window.addEventListener("resize", onResize);

    const onPrev = () => go(idx - 1);
    const onNext = () => go(idx + 1);
    prevBtn.addEventListener("click", onPrev);
    nextBtn.addEventListener("click", onNext);

    // swipe/drag
    let startX = 0, curX = 0, dragging = false;
    const onDown = (e) => { dragging = true; startX = e.clientX; track.style.transition = "none"; };
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
      if (Math.abs(dx) > 60) go(idx + (dx < 0 ? 1 : -1)); else go(idx);
      startX = 0; curX = 0;
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

  return (
    <>
      {/* font (same as your HTML) */}
      
      {/* same CSS */}
     <style>{`
  :root{
    --bg:#0f0e26;
    --card:#0f0e26;
    --ink:#ffffff;
    --muted:#bfc1cf;
    --accent:#6B04FD;
    --radius:26px;
   
  }
  *{box-sizing:border-box;margin:0;padding:0}
  html,body{background:var(--bg);color:var(--ink);font-family:"DM Sans",system-ui,sans-serif}
  img{display:block;max-width:100%;height:auto;}

  .wrap{max-width:100%;margin:auto;position:relative;background:var(--bg);padding:4rem 2rem}

  .eyebrow{font-size:20px;letter-spacing:.02em;color:#b7b9c9;margin-bottom:4px;opacity:.85}
  .h1{font-size:56px;font-weight:800;line-height:1.05;margin-bottom:36px}

  /* ---------- DESKTOP (unchanged sticky effect) ---------- */
  .stack{display:grid;grid-template-columns:1fr auto;gap:18px}
  .section{min-height:100vh;display:flex;align-items:center;justify-content:center}
  .card{
    min-height:450px; position:sticky; top:64px;
    display:flex; align-items:flex-start; justify-content:space-between; gap:42px;
    width:100%; background:var(--card);
    border-radius:var(--radius); padding:44px 0px 0px; box-shadow:var(--shadow);
    transition:transform .25s ease, box-shadow .25s ease, border-color .25s ease;
  }
  .card.is-active{transform:scale(1.01);border:none;}
  .num{flex:0 0 72px;font-weight:700;font-size:42px;letter-spacing:.02em;line-height:1;color:#fff;margin-top:6px}
  .copy{flex:1 1 auto;min-width:0;padding-right:10px}
  .copy h3{font-size:32px;font-weight:700;letter-spacing:.01em;margin-bottom:18px;width:30rem;}
  .copy ul{list-style:none;display:grid;gap:16px;width:30rem;}
  .copy li{font-size:18px;color:#e9eaf5;padding-left:0px;position:relative}
  .copy li::before{display:none;content:"";position:absolute;left:0;top:.68em;width:6px;height:6px;border-radius:50%;background:rgba(255,255,255,.8)}
  .visual{flex:0 0 415px;display:flex;justify-content:flex-end}
  .shot{width:415px;height:340px;overflow:hidden;border-radius:32px;position:relative;background:linear-gradient(180deg,rgba(255,255,255,.04),transparent)}
  .shot img{width:100%;height:100%;object-fit:cover;border-radius:32px}

  /* ---------- MOBILE SLIDER (only on <= 980px) ---------- */
 
  .mobile-slider{display:none}

  @media (max-width:980px){
  .py-8{
  padding-top:3rem;}
    .wrap{padding:2rem 1.25rem}
    .stack{display:none}                 /* hide desktop stack */
    .mobile-slider{display:block;position:relative;overflow:hidden}
    .track{display:flex;will-change:transform;transition:transform .35s ease}
    .mcard{
      flex:0 0 100%;
      background:var(--card);
      border-radius:var(--radius);
      padding:28px;
      min-height: calc(100vh - 160px);   /* room for header + nav buttons */
      display:flex;flex-direction:column;gap:18px;
      box-shadow:var(--shadow);
    }
    .m-num{font-size:32px;font-weight:700}
    .m-title{font-size:28px;font-weight:700}
    .m-list{list-style:none;display:grid;gap:12px}
    .m-list li{font-size:16px;color:#e9eaf5;padding-left:16px;position:relative}
    .m-list li::before{content:"";position:absolute;left:0;top:.58em;width:6px;height:6px;border-radius:50%;background:rgba(255,255,255,.8)}
    .m-shot{width:100%;border-radius:20px;overflow:hidden}
    .m-shot img{width:100%;height:auto;border-radius:20px}

    /* Bottom-center nav */
    .mnav{
      position:relative;left:0;right:0;bottom:20px;
      display:flex;justify-content:center;gap:12px;pointer-events:none;
    }
    .navbtn{
      pointer-events:auto;
      width:44px;height:44px;border-radius:999px;border:1px solid rgba(255,255,255,.25);
      background:rgba(255,255,255,.06);
      display:grid;place-items:center;backdrop-filter:blur(4px);
    }
    .navbtn svg{width:18px;height:18px}
    .navbtn.next{background:var(--accent);border-color:var(--accent)}
    .navbtn[disabled]{opacity:.45}
  }

  /* extra responsive tweaks */
  @media (max-width:1100px){
    .visual{flex:0 0 440px}
    .shot{width:440px;height:290px}
    .copy h3{font-size:34px}
  }
      `}</style>
<section className="relative w-full bg-[#020018]" data-section="cw-service">
      <div className="wrap">
        
      {/* Fixed/Sticky Header */}
      <div className="top-0 w-full py-8 sm:py-100 md:py-[60px] z-50">
        <div className="max-w-[1290px] mx-auto relative">
          <div className="[font-family:'DM_Sans',Helvetica] font-normal text-[24px] md:text-[34px] leading-[28px] md:leading-[34px]">
            <span className="text-[#ffffffb2] font-medium leading-[40px] md:leading-[60px]">
              Our Social Media Video Production<br />
            </span>
            <span className="font-bold text-white text-[36px] md:text-[52px] leading-[40px] md:leading-[60px]">
              Services
            </span>
          </div>
        </div>
      </div>

        {/* DESKTOP: sticky stack */}
        <div className="stack" id="stack" ref={stackRef}>
          {data.map((s, i) => (
            <React.Fragment key={s.n}>
              {/* matching your HTML: card appended directly (no section wrapper) */}
              <article className="card group max-w-[1290px] mx-auto" data-index={i}>
                <div className="num">{s.n}</div>
                <div className="copy">
                  <h3 className="w-full lg:w-[344px] [font-family:'DM_Sans',Helvetica] font-semibold text-white text-[28px] lg:text-[35px] leading-[32px] lg:leading-[39px]">{s.title}</h3>
                  <ul>{s.points.map((p) => <li key={p}>{p}</li>)}</ul>
                </div>
                <div className="visual">
                  <div className="shot"><img src={s.img} alt={s.title} /></div>
                </div>
                <div className="flex w-60 items-start justify-center lg:justify-end pt-2 lg:pt-[7px]">           
                  <img src="/impulse-website/Arrow.png" alt="Arrow"
                  className="w-[56px] lg:w-[80px] object-contain transition-transform duration-300 group-hover:rotate-45 pointer-events-none"/>

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
                <ul className="m-list">{s.points.map((p) => <li key={`m-${s.n}-${p}`}>{p}</li>)}</ul>
                <div className="m-shot"><img src={s.img} alt={s.title} /></div>
              </div>
            ))}
          </div>

          <div className="mnav">
            <button className="navbtn prev" id="prevBtn" ref={prevBtnRef} aria-label="Previous">
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M15 6l-6 6 6 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button className="navbtn next" id="nextBtn" ref={nextBtnRef} aria-label="Next">
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M9 18l6-6-6-6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
</section>
    </>
  );
};

export default ServicesSection;
export { ServicesSection };

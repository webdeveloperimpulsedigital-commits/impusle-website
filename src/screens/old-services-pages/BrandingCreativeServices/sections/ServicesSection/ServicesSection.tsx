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
    { n:"01", title:"Social media creatives",
      points:["Capture attention with scroll-stopping creatives designed to engage your audience. From eye-catching visuals to compelling copies, our creatives are tailored to meet the unique needs of all platforms—Instagram, YouTube, Facebook, Linkedin, and Pinterest. They stop your audience, spark conversations, build connections, and drive conversations."],
      img:"https://images.unsplash.com/photo-1557800636-894a64c1696f?q=80&w=1600&auto=format&fit=crop" },
    { n:"02", title:"Branding",
      points:["Who are you, what do you do, and why should your audience buy from you? Your branding is your unique identity that tells your audience everything about you. We make sure it sets you apart rather than putting you on the list of ‘Oh this is just like brand XYZ.’"],
      img:"https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1600&auto=format&fit=crop" },
    { n:"03", title:"Logo identity",
      points:["Your logo is one aspect of your branding that’s going to be everywhere, quite literally—social media, website, packaging, gift notes. Our logo identity goes beyond aesthetics to capture your brand’s essence. Whether you want it to be sleek, modern, or timeless, our logos create instant recognition for you. "],
      img:"https://images.unsplash.com/photo-1485841890310-6a055c88698a?q=80&w=1600&auto=format&fit=crop" },
    { n:"04", title:"Emailers",
      points:["Email campaigns are seriously underrated because most brands don’t use it well. Our emailers, crafted with relevant visuals and actionable copies, ensure high click and open rates. Whether you are launching a new product, offering a special discount, or sending a newsletter, we deliver your message effectively."],
      img:"https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1600&auto=format&fit=crop" },
    { n:"05", title:"Website design",
      points:["Website is a platform that makes your brand accessible to your audience 24/7. It breaks geographical barriers and time zones. Our website design services ensure that your website looks appealing yet easy to navigate. Our custom web design services bring out the beauty of your brand via color, typography, and elements."],
      img:"https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop" },
    { n:"06", title:"Television and OTT platform assets",
      points:["Attention is a scarce resource and we help you capture it with visually stunning assets. Think show banners, thumbnails, and promo graphics. These creatives are optimized for screens, telling a lot in mere seconds in crowded digital spaces, driving views and engagements."],
      img:"https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1600&auto=format&fit=crop" },
    { n:"07", title:"Brand style guideline",
      points:["Imagine every communication in a different color scheme, font, or voice. One sounds like a friend, another like a grandmother. Pst! Your brand is lost. We create detailed guidelines that define your brand's tone, typography, color schemes, and imagery, ensuring all communication aligns with your identity at all touchpoints. Not one missed. "],
      img:"https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=1600&auto=format&fit=crop" },
    {
      n:"08", title:"OOH ads",
      points:["We never miss a chance to put your brand in front of your audience, even when they are out of the house. Our team ensures your brand is visible where your audience is, then be it on billboards, bus wraps, or transit ads. Why? Every message counts!"],
      img:"https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1600&auto=format&fit=crop"
    },
    
    {
      n:"09", title:"Paper ads",
      points:["A significant part of the world still reads newspapers, magazines, and brochures, believe it or not. In fact, every publication has its own credibility and we aim to get your brand featured in the best one, blending a traditional approach with modern visuals and messaging."],
      img:"https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=1600&auto=format&fit=crop"
    },
    {
      n:"10", title:"Brand lookbook",
      points:["Showcase your brand’s story, products, and journey with a well-crafted lookbook. With elegant, cohesive layouts that highlight your strengths and create an immersive experience for your audience, these lookbooks are perfect for client pitches, coffee tables, or product launches."],
      img:"https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=1600&auto=format&fit=crop"
    },
    {
      n:"11", title:"Product packaging",
      points:["Every touchpoint should reinforce your brand’s messaging and product packaging is a lot more than just words. There’s design thinking and consumer psychology in there. Our team designs innovative packaging that grabs the eye of the audience from the shelves, creates a memorable unboxing experience, and keeps your customer hooked. "],
      img:"https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=1600&auto=format&fit=crop"
    },
    {
      n:"12", title:"Branding collaterals",
      points:["Equip your band with professional collaterals that impress at every interaction. Be it a business card, brochure, presentation or custom stationary, we design collaterals that speak for your brand louder than words could, enhances your visibility, and engraves you in the mind of your audience."],
      img:"https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=1600&auto=format&fit=crop"
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
              Our Branding Creative<br />
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

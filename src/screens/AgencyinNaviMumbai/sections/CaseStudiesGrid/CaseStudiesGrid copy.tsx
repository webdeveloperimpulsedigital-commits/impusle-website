import React, { useEffect, useRef } from "react";
import { Button } from "../../../../components/ui/button";
const css = `
:root{
  --purple:#5e3cf6; --purple-600:#4b2ee4; --ink:#0f1020; --muted:#6b7280; --chip:#9aa0a6;
  --radius:16px; --gap:24px; --container:1120px;
}
*{box-sizing:border-box} html,body{margin:0}

#case-studies-grid{width:100%; padding: 0px 8rem;}
.wrap{ max-width:var(--container); margin:0 auto; padding:28px 16px 56px; }

.overline{ font-size:14px; line-height:1.2; color:var(--muted); margin-bottom:8px; }
.hdr{ display:flex; align-items:flex-start; justify-content:space-between; gap:16px; margin-bottom:28px; }
.title{ font-size:clamp(22px,3.2vw,36px); line-height:1.15; color:var(--purple); font-weight:700; margin:0; }
.btn{ display:inline-flex; align-items:center; gap:8px; padding:10px 14px; background:var(--purple); color:#fff; border-radius:999px; font-size:13px; font-weight:600; text-decoration:none; line-height:1; white-space:nowrap; margin-top:4px; transition:transform .12s ease, background .12s ease; }
.btn:hover{ background:var(--purple-600); transform:translateY(-1px) }
.btn svg{ width:16px; height:16px; }

/* Masonry grid (2 cols) */
#case-studies-grid .grid{
  display:grid;
  grid-template-columns:repeat(2,minmax(0,1fr));
  gap:var(--gap);
  grid-auto-rows: 8px;          /* tiny row units for masonry calc */
  grid-auto-flow: dense;        /* helps fill any micro gaps */
}
@media (max-width:820px){ .grid{ grid-template-columns:1fr; } }

.card{ display:block; text-decoration:none; color:inherit; }

.media{
  position:relative; border-radius:var(--radius); overflow:hidden; background:#eee;
  aspect-ratio:4 / 3;           /* default */
  box-shadow:0 8px 18px rgba(17,24,39,.08);
}
/* taller variant for 1 & 4 like screenshot */
.media--tall{ aspect-ratio: 5 / 6; }

.media img{ width:100%; height:100%; object-fit:cover; display:block; }

.media.corner::after{
  content:""; position:absolute; top:0; right:0; width:56px; height:56px; background:#23b26d;
  clip-path:polygon(0 0,100% 0,100% 100%);
}

.meta{ padding-top:10px; }
.brand{ margin:0 0 6px 0; font-size:18px; font-weight:700; letter-spacing:.1px; }

.tags{ display:flex; gap:10px; flex-wrap:wrap; color:var(--chip); font-size:11px; letter-spacing:.12em; text-transform:uppercase; font-weight:600; }
.tags span{ position: relative;
    border: 1px solid #ccc;
    padding: 7px 20px;
    text-align: center;
    border-radius: 20px;
    align-items: center;
    align-content: center;
    color: #141414; }
.tags span:first-of-type{ padding-left:0 } .tags span:first-of-type::before{ content:none }

.card .media img{ transition:transform .35s ease } .card:hover .media img{ transform:scale(1.02) }
`;

export const CaseStudiesGrid = (): JSX.Element => {
  const gridRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !gridRef.current) return;
    const grid = gridRef.current;

    const getNum = (prop: string) =>
      parseInt(getComputedStyle(grid).getPropertyValue(prop), 10) || 0;

    const spanItem = (card: HTMLElement) => {
      const rowH = getNum("grid-auto-rows");
      const gap = getNum("gap");

      const media = card.querySelector(".media") as HTMLElement | null;
      const meta = card.querySelector(".meta") as HTMLElement | null;
      if (!media || !meta) return;

      const total = media.offsetHeight + meta.offsetHeight + gap; // card content height
      const span = Math.ceil((total + gap) / (rowH + gap));
      card.style.gridRowEnd = `span ${span}`;
    };

    const resizeAll = () => {
      grid.querySelectorAll<HTMLElement>(".card").forEach(spanItem);
    };

    const onResize = () => resizeAll();

    // Initial layout
    resizeAll();

    // Recalc on image load (once)
    const imgs = Array.from(
      grid.querySelectorAll<HTMLImageElement>(".media img")
    );
    const handleImgLoad = () => resizeAll();
    imgs.forEach((img) => {
      if (img.complete) return;
      img.addEventListener("load", handleImgLoad, { once: true });
    });

    // Recalc on resize
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      imgs.forEach((img) => img.removeEventListener("load", handleImgLoad));
    };
  }, []);

  return (
    <>
      <section className="bg-gray pb-16 pt-16" id="case-studies-grid" data-section="case-studies">
        <div className="">
          <h2 className="[font-family:'DM_Sans',Helvetica] font-normal text-[#030019] text-xl md:text-2xl lg:text-[34px] mb-2">
                Case Studies 
              </h2></div>

        <div className="hdr">
          
              <h3 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#543d98] text-2xl md:text-3xl lg:text-[52px]">
                Demonstrating real-life results
              </h3>
          {/* Connect Now Button */}
                    <Button className="h-[40px] md:h-[50px] bg-[#543d98] hover:bg-[#543d98]/90 rounded-xl px-4 md:px-6 py-2 md:py-3 gap-2">
                      <span className="[font-family:'DM_Sans',Helvetica] font-bold text-white text-base">
                        Connect Now
                      </span>
                      <span className="">
                  <img
                className=""
                alt="location Logo"
                src="/impulse-website/button-icon.svg"/> 
              </span>
                    </Button>
        </div>

        <div className="grid" id="grid" ref={gridRef}>
          {/* 1 — TALL */}
          <a href="#" className="card">
            <div className="media media--tall">
              <img
                src="/impulse-website/project-1-jpg.png"
                alt="Mastercard Inc."
                loading="lazy"
              />
            </div>
            <div className="meta">
              <h3 className="brand">Mastercard Inc.</h3>
              <div className="tags">
                <span>Product Design</span>
                <span>Branding</span>
                <span>Creative</span>
              </div>
            </div>
          </a>

          {/* 2 */}
          <a href="#" className="card">
            <div className="media corner">
              <img
                src="/impulse-website/project-4-jpg.png"
                alt="Hindustan Unilever Limited"
                loading="lazy"
              />
            </div>
            <div className="meta">
              <h3 className="brand">Hindustan Unilever Limited</h3>
              <div className="tags">
                <span>Product Strategy</span>
                <span>Packaging</span>
                <span>Creative</span>
              </div>
            </div>
          </a>

          

          {/* 4 — TALL */}
          <a href="#" className="card">
            <div className="media media--tall corner">
              <img
                src="/impulse-website/project-5-jpg.png"
                alt="Avenue Supermarts/DMart"
                loading="lazy"
              />
            </div>
            <div className="meta">
              <h3 className="brand">Avenue Supermarts/DMart</h3>
              <div className="tags">
                <span>Market Research</span>
                <span>Branding</span>
                <span>Creative</span>
              </div>
            </div>
          </a>

          {/* 3 */}
          <a href="#" className="card">
            <div className="media">
              <img
                src="/impulse-website/project-2-jpg.png"
                alt="Vendiman"
                loading="lazy"
              />
            </div>
            <div className="meta">
              <h3 className="brand">Vendiman</h3>
              <div className="tags">
                <span>Product Design</span>
                <span>Branding</span>
                <span>Creative</span>
              </div>
            </div>
          </a>

          {/* 5 */}
          <a href="#" className="card">
            <div className="media">
              <img
                src="/impulse-website/project-3-jpg.png"
                alt="ElectroMech"
                loading="lazy"
              />
            </div>
            <div className="meta">
              <h3 className="brand">ElectroMech</h3>
              <div className="tags">
                <span>Product Design</span>
                <span>Branding</span>
                <span>Creative</span>
              </div>
            </div>
          </a>

          {/* 6 */}
          <a href="#" className="card">
            <div className="media">
              <img
                src="/impulse-website/project-6-jpg.png"
                alt="HEM Corporation"
                loading="lazy"
              />
            </div>
            <div className="meta">
              <h3 className="brand">HEM Corporation</h3>
              <div className="tags">
                <span>Product Strategy</span>
                <span>Packaging</span>
                <span>Creative</span>
              </div>
            </div>
          </a>
        </div>
      </section>

      {/* Inject styles locally */}
      <style>{css}</style>
    </>
  );
};
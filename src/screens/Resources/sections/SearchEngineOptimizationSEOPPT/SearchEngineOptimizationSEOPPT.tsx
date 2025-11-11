import { Link } from "react-router-dom";
import "./SearchEngineOptimizationSEOPPT.css"; // ← ensure file name EXACTLY matches

type Slide = { id: string; title: string; image: string; href: string };

const SLIDES: Slide[] = [
  { id: "1", title: "Embracing LGBTQ+ Pride in 2023", image: "/impulse-website/ppt1.jpg", href: "https://www.slideshare.net/theimpulsedigital/lgbtq-pride" },
  { id: "2", title: "How Emotions Drive Advertising", image: "/impulse-website/ppt2.jpg", href: "https://www.slideshare.net/theimpulsedigital/emotional-advertising" },
  { id: "3", title: "Why Employer Branding Matters", image: "/impulse-website/ppt3.jpg", href: "https://www.slideshare.net/theimpulsedigital/employer-branding-plan" },
  { id: "4", title: "Planning to Order from ONDC?", image: "/impulse-website/ppt4.jpg", href: "https://www.slideshare.net/theimpulsedigital/ondc-planning" },
  { id: "5", title: "Apple’s VR: What Changes for Marketers", image: "/impulse-website/ppt5.jpg", href: "https://www.slideshare.net/theimpulsedigital/apple-vr-marketing" },
  { id: "6", title: "Father’s Day: Brand Playbook", image: "/impulse-website/ppt6.jpg", href: "https://www.slideshare.net/theimpulsedigital/fathers-day-campaign" },
  { id: "7", title: "ONDC: Key Takeaways", image: "/impulse-website/ppt7.jpg", href: "https://www.slideshare.net/theimpulsedigital/ondc-report" },
  { id: "8", title: "Best AI Tools for India", image: "/impulse-website/ppt8.jpg", href: "https://www.slideshare.net/theimpulsedigital/ai-tools" },
  { id: "9", title: "B2B Entrepreneur’s Guide", image: "/impulse-website/ppt9.jpg", href: "https://www.slideshare.net/theimpulsedigital/b2b-guide" },
];

export const SlideSharePPT = (): JSX.Element => {
  return (
    <div className="slideshare-page py-5">
      <div className="container">
        <div className="row">
          {/* Left: content */}
          <div className="col-lg-9">
            {/* Header */}
        <div className="text-center mb-12 lg:mb-16 lg:mt-16">
          <p className="[font-family:'DM_Sans',Helvetica] font-normal text-[#030019] text-lg mb-2">
            Our Expertise
          </p>
          <h2 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#543d98] text-3xl md:text-4xl lg:text-5xl mb-6">
            Comprehensive Service Portfolio
          </h2>
        </div>

            {/* PURE GRID — no Bootstrap cols inside */}
            <div className="ppt-grid">
              {SLIDES.map((s) => (
                <article className="ppt-card" key={s.id}>
                  <a href={s.href} target="_blank" rel="noopener noreferrer" className="ppt-link">
                    <div className="ppt-thumb-wrap">
                      <img src={s.image} alt={s.title} loading="lazy" className="ppt-thumb" />
                      <span className="bracket tl" />
                      <span className="bracket tr" />
                      <span className="bracket bl" />
                      <span className="bracket br" />
                    </div>
                  </a>
                </article>
              ))}
            </div>
          </div>

          {/* Right: sidebar */}
          <aside className="col-lg-3 mt-5 mt-lg-0">
            <div className="ppt-sidebar">
              <div className="ppt-search">
                <input type="text" placeholder="Search" className="ppt-input" />
                <button className="ppt-search-btn">Search</button>
              </div>

              <div className="ppt-cats">
                <h5 className="ppt-cats__title">Categories</h5>
                <ul className="ppt-cats__list">
                  <li><Link to="#" className="ppt-cat">Search  Engine Optimization (SEO) PPT</Link></li>
                  <li><Link to="#" className="ppt-cat">Social Media PPT</Link></li>
                  <li><Link to="#" className="ppt-cat">Google Ads (SEM) PPT</Link></li>
                  <li><Link to="#" className="ppt-cat">Content Marketing PPT</Link></li>
                  <li><Link to="#" className="ppt-cat">Website Design & Development  PPT</Link></li>
                  <li><Link to="#" className="ppt-cat">Employer Branding</Link></li>
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

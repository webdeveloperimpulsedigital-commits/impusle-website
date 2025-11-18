import { Link } from "react-router-dom";
import "./GoogleAdsPPT.css"; // ← ensure file name EXACTLY matches

type Slide = { id: string; title: string; image: string; href: string };

const SLIDES: Slide[] = [

  {
    id: "PPT90",
    title: "Remarketing – A digital magnet",
    href: "https://www.theimpulsedigital.com/slideshare/remarketing-a-digital-magnet.pdf",
    image: "/impulse-website/slideshow/ppt90.png",
  },
  {
    id: "PPT48",
    title: "What is a lead magnet & how to use it effectively?",
    href: "https://www.theimpulsedigital.com/slideshare/what-is-a-lead-magnet-and-how-to-use-it-effectively.pdf",
    image: "/impulse-website/slideshow/ppt48.png",
  },
  {
    id: "PPT52",
    title: "Five best lead generation trends in 2021",
    href: "https://www.theimpulsedigital.com/slideshare/five-best-lead-generation-trends-in-2021.pdf",
    image: "/impulse-website/slideshow/ppt52.png",
  },
  {
    id: "PPT36",
    title: "More about Quora marketing – 5 detailed steps to Quora ads",
    href: "https://www.theimpulsedigital.com/slideshare/more-about-quora-marketing5-detailed-steps-to-quora-ads.pdf",
    image: "/impulse-website/slideshow/ppt36.png",
  },
  {
    id: "PPT54",
    title: "5 perks of Google’s Performance Max campaigns",
    href: "https://www.theimpulsedigital.com/slideshare/do-you-know-these-5-perks-of-google%E2%80%99s-performance-max-campaigns.pdf",
    image: "/impulse-website/slideshow/ppt54.png",
  },
  {
    id: "PPT59",
    title: "Why your brand needs to ace conversational marketing",
    href: "https://www.theimpulsedigital.com/slideshare/why-your-brand-needs-to-ace-the-conversational-marketing-strategy.pdf",
    image: "/impulse-website/slideshow/ppt59.png",
  },
  {
    id: "PPT60",
    title: "The ultimate guide to creating a perfect landing page for your business",
    href: "https://www.theimpulsedigital.com/slideshare/the-ultimate-guide-to-creating-a-perfect-landing-page-for-your-business.pdf",
    image: "/impulse-website/slideshow/ppt60.png",
  },
  {
    id: "PPT66",
    title: "Advertisements that have bowled us over – Top picks from IPL season",
    href: "https://www.theimpulsedigital.com/slideshare/advertisements-that-have-bowled-us-over-this-ipl-season.pdf",
    image: "/impulse-website/slideshow/ppt66.png",
  },
  {
    id: "PPT35",
    title: "All you need to know about programmatic advertising",
    href: "https://www.theimpulsedigital.com/slideshare/all-you-need-to-know-about-programmatic-advertising.pdf",
    image: "/impulse-website/slideshow/ppt35.png",
  }



];

export const GoogleAdsPPT = (): JSX.Element => {
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
          <aside className="col-lg-1 mt-5 mt-lg-0 pt-16">
            <div className="ppt-sidebar">
              {/* <div className="ppt-search">
                <input type="text" placeholder="Search" className="ppt-input" />
                <button className="ppt-search-btn">Search</button>
              </div> */}

              <div className="ppt-cats">
                <h5 className="ppt-cats__title">Categories</h5>
                <ul className="ppt-cats__list">
                  <li><Link to="/resources/search-engine-optimization-PPT" className="ppt-cat">Search Engine Optimization (SEO) PPT</Link></li>
                  <li><Link to="/resources/social-media-PPT" className="ppt-cat">Social Media PPT</Link></li>
                  <li><Link to="/resources/google-ads-PPT" className="ppt-cat">Google Ads (SEM) PPT</Link></li>
                  <li><Link to="/resources/content-marketing-PPT" className="ppt-cat">Content Marketing PPT</Link></li>
                  <li><Link to="/resources/website-design-development-PPT" className="ppt-cat">Website Design & Development  PPT</Link></li>
                  <li><Link to="/resources/employer-branding-PPT" className="ppt-cat">Employer Branding</Link></li>
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

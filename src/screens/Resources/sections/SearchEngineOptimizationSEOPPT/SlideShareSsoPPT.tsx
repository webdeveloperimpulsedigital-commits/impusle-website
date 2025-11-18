import { Link } from "react-router-dom";
import "./SlideShareSsoPPT.css"; // ← ensure file name EXACTLY matches

type Slide = { id: string; title: string; image: string; href: string };

const SLIDES: Slide[] = [
   
{
  id: "PPT31",
  title: "Why do internet users prefer only Google?",
  href: "https://www.theimpulsedigital.com/slideshare/why_do_internet_users_prefer_only_google.pdf",
  image: "/impulse-website/slideshow/ppt31.png",
},
{
  id: "PPT32",
  title: "Not to be missed – Top SEO strategies for D2C websites",
  href: "https://www.theimpulsedigital.com/slideshare/Not_To_Be_Missed_Top_SEO_Strategies_For_D2C_Websites.pdf",
  image: "/impulse-website/slideshow/ppt32.png",
},
{
  id: "PPT33",
  title: "Google Helpful Content Update – Avoid your website from getting penalized",
  href: "https://www.theimpulsedigital.com/slideshare/Google_Helpful_Content_Update_Avoid_Your_Website_From_Getting_Penalized.pdf",
  image: "/impulse-website/slideshow/ppt33.png",
},

{
  id: "PPT38",
  title: "All there is to hyperlocal SEO & how to leverage it",
  href: "https://www.theimpulsedigital.com/slideshare/all_there_is_to_hyperlocal_seo_and_how_to_leverage_it.pdf",
  image: "/impulse-website/slideshow/ppt38.png",
},

{
  id: "PPT43",
  title: "People Also Ask (PAA) and its significance for your SEO",
  href: "https://www.theimpulsedigital.com/slideshare/people_also_ask_(paa)_and_its_significance_for_your_seo.pdf",
  image: "/impulse-website/slideshow/ppt43.png",
},

{
  id: "PPT76",
  title: "Should you be worried about the new Google Core Update?",
  href: "https://www.theimpulsedigital.com/slideshare/should-you-be-worried-about-the-new-google-core-update-read-to-know.pdf",
  image: "/impulse-website/slideshow/ppt76.png",
},
{
  id: "PPT89",
  title: "Top 18 advanced Google search operators you must know",
  href: "https://www.theimpulsedigital.com/slideshare/top-18-google-advanced-search-operators-that-you-must-to-know.pdf",
  image: "/impulse-website/slideshow/ppt89.png",
},
{
  id: "PPT92",
  title: "SEO trends",
  href: "https://www.theimpulsedigital.com/slideshare/seo-trends.pdf",
  image: "/impulse-website/slideshow/ppt92.png",
},

{
  id: "PPT96",
  title: "Google’s Penguin update",
  href: "https://www.theimpulsedigital.com/slideshare/googlespenguinupdate.pdf",
  image: "/impulse-website/slideshow/ppt96.png",
},





];

export const SlideShareSsoPPT = (): JSX.Element => {
  return (
    <div className="slideshare-page py-16 pb-16">
      <div className="container">
        <div className="row">
          {/* Left: content */}
      <div className="col-lg-11">
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
                      {/* <span className="bracket tl" />
                      <span className="bracket tr" />
                      <span className="bracket bl" />
                      <span className="bracket br" /> */}
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

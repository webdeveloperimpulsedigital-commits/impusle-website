import { Link } from "react-router-dom";
import "./SocialMediaPPT.css"; // ← ensure file name EXACTLY matches

type Slide = { id: string; title: string; image: string; href: string };
const SLIDES: Slide[] = [
  {
    id: "PPT9",
    title: "Father’s Day – How brands cash in on celebrating dads",
    href: "https://www.theimpulsedigital.com/slideshare/father%E2%80%99s-day-how-brands-cash-in-on-celebrating-dads.pdf",
    image: "/impulse-website/slideshow/ppt9.png",
  },
 
{
  id: "PPT39",
  title: "Top 3 ways of using social media stories & Instagram Reels in marketing",
  href: "https://www.theimpulsedigital.com/slideshare/top_3_ways_of_using_social_media_stories_and_instagram_reels_in_your_marketing_strategy.pdf",
  image: "/impulse-website/slideshow/ppt39.png",
},
{
  id: "PPT40",
  title: "The complete guide to social listening in 2021",
  href: "https://www.theimpulsedigital.com/slideshare/the_complete_guide_to_social_listening_in_2021.pdf",
  image: "/impulse-website/slideshow/ppt40.png",
},

{
  id: "PPT44",
  title: "5 secrets to a great social media campaign",
  href: "https://www.theimpulsedigital.com/slideshare/5-Secrets-to-a-Great-Social-Media-Campagin.pdf",
  image: "/impulse-website/slideshow/ppt44.png",
},
{
  id: "PPT45",
  title: "All you need to know about social selling",
  href: "https://www.theimpulsedigital.com/slideshare/all-you-need-to-know-about-social-selling.pdf",
  image: "/impulse-website/slideshow/ppt45.png",
},

{
  id: "PPT49",
  title: "Top 5 things you should know about social media banter",
  href: "https://www.theimpulsedigital.com/slideshare/top-5-things-you-should-know-about-social-media-banter.pdf",
  image: "/impulse-website/slideshow/ppt49.png",
},

{
  id: "PPT53",
  title: "Top 5 social media marketing trends of 2021",
  href: "https://www.theimpulsedigital.com/slideshare/catch-up-with-these-top-5-social-media-marketing-trends-of-2021.pdf",
  image: "/impulse-website/slideshow/ppt53.png",
},

{
  id: "PPT68",
  title: "The Pinterest way of marketing your business digitally",
  href: "https://www.theimpulsedigital.com/slideshare/the-pinterest-way-of-marketing-your-business-digitally.pdf",
  image: "/impulse-website/slideshow/ppt68.png",
},

{
  id: "PPT70",
  title: "Have you begun discussing on Reddit yet?",
  href: "https://www.theimpulsedigital.com/slideshare/have-you-begun-discussing-on-reddit-yet.pdf",
  image: "/impulse-website/slideshow/ppt70.png",
},

{
  id: "PPT73",
  title: "Is Signal messenger the perfect alternative to WhatsApp?",
  href: "https://www.theimpulsedigital.com/slideshare/is-signal-messenger-app-the-perfect-alternative-to-whatsapp-1.pdf",
  image: "/impulse-website/slideshow/ppt73.png",
},
{
  id: "PPT72",
  title: "Social media privacy threats you need to keep an eye on in 2021",
  href: "https://www.theimpulsedigital.com/slideshare/social-media-privacy-threats-that-you-need-to-keep-an-eye-on-in-2021.pdf",
  image: "/impulse-website/slideshow/ppt72.png",
},
{
  id: "PPT87",
  title: "8 ways to use YouTube for business marketing",
  href: "https://www.theimpulsedigital.com/slideshare/8-ways-how-to-use-youtube-for-business-marketing.pdf",
  image: "/impulse-website/slideshow/ppt87.png",
},

{
  id: "PPT77",
  title: "All you need to know about the new WhatsApp Business features",
  href: "https://www.theimpulsedigital.com/slideshare/all-you-need-to-know-about-the-new-whatsapp-business-features.pdf",
  image: "/impulse-website/slideshow/ppt77.png",
},
{
  id: "PPT78",
  title: "Social media tools that help boost festive season sales",
  href: "https://www.theimpulsedigital.com/slideshare/social-media-tools-that-will-help-boost-sales-during-the-festive-period.pdf",
  image: "/impulse-website/slideshow/ppt78.png",
},
{
  id: "PPT79",
  title: "Social media marketing tips to boost festive season sales",
  href: "https://www.theimpulsedigital.com/slideshare/social-media-marketing-tips-to-boost-your-sales-during-the-festive-period.pdf",
  image: "/impulse-website/slideshow/ppt79.png",
},

{
  id: "PPT82",
  title: "YouTube vs IGTV – Who wins?",
  href: "https://www.theimpulsedigital.com/slideshare/youtube-vs-igtv-who-wins.pdf",
  image: "/impulse-website/slideshow/ppt82.png",
},

{
  id: "PPT84",
  title: "How Instagram Stories help businesses",
  href: "https://www.theimpulsedigital.com/slideshare/how-instagram-stories-help-businesses-impulse-digital.pdf",
  image: "/impulse-website/slideshow/ppt84.png",
},




];

export const SocialMediaPPT = (): JSX.Element => {
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

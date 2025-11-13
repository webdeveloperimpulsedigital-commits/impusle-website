import { Link } from "react-router-dom";
import "./SlideSharePPT.css"; // ← ensure file name EXACTLY matches

type Slide = { id: string; title: string; image: string; href: string };

const SLIDES: Slide[] = [
  { id: "1", title: "Embracing LGBTQ+ Pride in 2023", image: "/impulse-website/slideshow/ppt1.png", href: "https://www.theimpulsedigital.com/slideshare/evolution-of-workplace-perks-what-employers-are-doing-to-redefine-them.pdf" },
  { id: "2", title: "How Emotions Drive Advertising", image: "/impulse-website/slideshow/ppt2.png", href: "https://www.theimpulsedigital.com/slideshare/3-reasons-why-your-b2b-marketing-strategy-framework-is-not-generating-quality-leads.pdf" },
  { id: "3", title: "Why Employer Branding Matters", image: "/impulse-website/slideshow/ppt3.png", href: "https://www.theimpulsedigital.com/slideshare/transforming-your-traditional-B2B-business-into-a-thriving-online-enterprise-a-comprehensive-guide.pdf"},
  { id: "4", title: "Planning to Order from ONDC?", image: "/impulse-website/slideshow/ppt4.png", href: "https://www.theimpulsedigital.com/slideshare/embracing-lgbtq-pride-in-2023-employer-branding-encouraging-workplace-diversity-and-inclusion.pdf" },
  { id: "5", title: "Apple’s VR: What Changes for Marketers", image: "/impulse-website/slideshow/ppt5.png", href: "https://www.theimpulsedigital.com/slideshare/how-evoking-emotions-and-different-appeals-is-the-key-to-a-successful-advertising-strategy.pdf" },
  { id: "6", title: "Father’s Day: Brand Playbook", image: "/impulse-website/slideshow/ppt6.png", href: "https://www.theimpulsedigital.com/slideshare/why-employer-branding-should-be-an-essential-element-of-your-marketing-plan.pdf" },
  { id: "7", title: "ONDC: Key Takeaways", image: "/impulse-website/slideshow/ppt7.png", href: "https://www.theimpulsedigital.com/slideshare/planning-to-order-from-ondc-but-is-it-worth-it.pdf" },
  { id: "8", title: "Best AI Tools for India", image: "/impulse-website/slideshow/ppt8.png", href: "https://www.theimpulsedigital.com/slideshare/how-apple%E2%80%99s-vr-headset-is-going-to-change-the-game-for-marketers.pdf" },
  { id: "9", title: "B2B Entrepreneur’s Guide", image: "/impulse-website/slideshow/ppt9.png", href: "https://www.theimpulsedigital.com/slideshare/father%E2%80%99s-day-how-brands-cash-in-on-celebrating-dads.pdf" },
  { id: "10", title: "PPT10", image: "/impulse-website/slideshow/ppt10.png", href: "https://www.theimpulsedigital.com/slideshare/dissecting-the-key-takeaways-from-the-ondc-report.pdf"},
  { id: "11", title: "PPT111", image: "/impulse-website/slideshow/ppt11.png", href: "https://www.theimpulsedigital.com/slideshare/best-ai-tools-for-indian-audience-to-use.pdf"},
  { id: "12", title: "PPT12", image: "/impulse-website/slideshow/ppt12.png", href: "https://www.theimpulsedigital.com/slideshare/b2b-entrepreneur%E2%80%99s-guide-to-reach-your-high-hanging-fruits!.pdf"},
  { id: "13", title: "PPT13", image: "/impulse-website/slideshow/ppt13.png", href: "https://www.theimpulsedigital.com/slideshare/facebook-scam-alert-copyright-infringement-here%E2%80%99s-how-to-not-fall-for-one.pdf"},
  { id: "14", title: "PPT14", image: "/impulse-website/slideshow/ppt14.png", href: "https://www.theimpulsedigital.com/slideshare/april-fool%E2%80%99s-day-brand-ideas-gone-wrong.pdf"},
  { id: "15", title: "PPT15", image: "/impulse-website/slideshow/ppt15.png", href: "https://www.theimpulsedigital.com/slideshare/online-behavior-between-an-indian-and-usa-internet-user%20.pdf"},
  { id: "16", title: "PPT16", image: "/impulse-website/slideshow/ppt16.png", href: "https://www.theimpulsedigital.com/slideshare/linkedin-vs-facebook-what%E2%80%99s-a-better-platform-for-b2b-business.pdf"},
  { id: "17", title: "PPT17", image: "/impulse-website/slideshow/ppt17.png", href: "https://www.theimpulsedigital.com/slideshare/impactful-women%E2%80%99s-day-campaign-ideas-2023-with-examples.pdf"},
  { id: "18", title: "PPT18", image: "/impulse-website/slideshow/ppt18.png", href: "https://www.theimpulsedigital.com/slideshare/can-you-use-memes-in-advertising-perks-of-meme-marketing.pdf"},
  { id: "19", title: "PPT19", image: "/impulse-website/slideshow/ppt19.png", href: "https://www.theimpulsedigital.com/slideshare/transform-employer-branding-for-hybrid-&-remote-working-employees-know-how.pdf"},
  { id: "20", title: "PPT20", image: "/impulse-website/slideshow/ppt20.png", href: "https://www.theimpulsedigital.com/slideshare/how-can-you-use-emojis-in-advertising-to-drive-better-results.pdf"},
  { id: "21", title: "PPT21", image: "/impulse-website/slideshow/ppt21.png", href: "https://www.theimpulsedigital.com/slideshare/valentine%E2%80%99s-day-promotion-ideas-for-retail-make-profitable-sales.pdf"},
  { id: "22", title: "PPT22", image: "/impulse-website/slideshow/ppt22.png", href: "https://www.theimpulsedigital.com/slideshare/how_employer_branding_transforms_the%20future_of_your_organisation.pdf"},
  { id: "23", title: "PPT23", image: "/impulse-website/slideshow/ppt23.png", href: "https://www.theimpulsedigital.com/slideshare/did_you_know_how_much_and_what_google_knows_about_you.pdf"},
  { id: "24", title: "PPT24", image: "/impulse-website/slideshow/ppt24.png", href: "https://www.theimpulsedigital.com/slideshare/is_youtube_too_competitive_5_alternatives_you_must_know.pdf"},
  { id: "25", title: "PPT25", image: "/impulse-website/slideshow/ppt25.png", href: "https://www.theimpulsedigital.com/slideshare/why_do_internet_users_prefer_only_google.pdf"},
  { id: "26", title: "PPT6", image: "/impulse-website/slideshow/ppt26.png", href: "https://www.theimpulsedigital.com/slideshare/Not_To_Be_Missed_Top_SEO_Strategies_For_D2C_Websites.pdf"},
  { id: "27", title: "PPT27", image: "/impulse-website/slideshow/ppt27.png", href: "https://www.theimpulsedigital.com/slideshare/Google_Helpful_Content_Update_Avoid_Your_Website_From_Getting_Penalized.pdf"},
  { id: "28", title: "PPT28", image: "/impulse-website/slideshow/ppt28.png", href: "https://www.theimpulsedigital.com/slideshare/Top_5_Digital_Marketing_Trends_Of_2022.pdf"},
  { id: "29", title: "PPT29", image: "/impulse-website/slideshow/ppt29.png", href: "https://www.theimpulsedigital.com/slideshare/all-you-need-to-know-about-programmatic-advertising.pdf"},
  { id: "30", title: "PPT30", image: "/impulse-website/slideshow/ppt30.png", href: "https://www.theimpulsedigital.com/slideshare/more-about-quora-marketing5-detailed-steps-to-quora-ads.pdf"},
  { id: "31", title: "PPT31", image: "/impulse-website/slideshow/ppt31.png", href: "https://www.theimpulsedigital.com/slideshare/a_simple_guide_to_the_foundation_of_quora_marketing.pdf"},
  { id: "32", title: "PPT32", image: "/impulse-website/slideshow/ppt32.png", href: "https://www.theimpulsedigital.com/slideshare/all_there_is_to_hyperlocal_seo_and_how_to_leverage_it.pdf"},
  { id: "33", title: "PPT33", image: "/impulse-website/slideshow/ppt33.png", href: "https://www.theimpulsedigital.com/slideshare/top_3_ways_of_using_social_media_stories_and_instagram_reels_in_your_marketing_strategy.pdf"},
  { id: "34", title: "PPT34", image: "/impulse-website/slideshow/ppt34.png", href: "https://www.theimpulsedigital.com/slideshare/the_complete_guide_to_social_listening_in_2021.pdf"},
  { id: "35", title: "PPT35", image: "/impulse-website/slideshow/ppt35.png", href: "https://www.theimpulsedigital.com/slideshare/5_smart_tips_to_boost_your_year_end_digital_sales.pdf"},
  { id: "36", title: "PPT36", image: "/impulse-website/slideshow/ppt36.png", href: "https://www.theimpulsedigital.com/slideshare/implementing_digital_marketing_in_the_international_market.pdf"},
  { id: "37", title: "PPT37", image: "/impulse-website/slideshow/ppt37.png", href: "https://www.theimpulsedigital.com/slideshare/people_also_ask_(paa)_and_its_significance_for_your_seo.pdf"},
  { id: "38", title: "PPT38", image: "/impulse-website/slideshow/ppt38.png", href: "https://www.theimpulsedigital.com/slideshare/5-Secrets-to-a-Great-Social-Media-Campagin.pdf"},
  { id: "39", title: "PPT39", image: "/impulse-website/slideshow/ppt39.png", href: "https://www.theimpulsedigital.com/slideshare/all-you-need-to-know-about-social-selling.pdf"},
  { id: "40", title: "PPT40", image: "/impulse-website/slideshow/ppt40.png", href: "https://www.theimpulsedigital.com/slideshare/ecommerce-website.pdf"},
  { id: "41", title: "PPT41", image: "/impulse-website/slideshow/ppt41.png", href: "https://www.theimpulsedigital.com/slideshare/is-it-really-necessary-to-opt-for-festive-season-digital-marketing.pdf"},
  { id: "42", title: "PPT42", image: "/impulse-website/slideshow/ppt42.png", href: "https://www.theimpulsedigital.com/slideshare/what-is-a-lead-magnet-and-how-to-use-it-effectively.pdf"},
  { id: "43", title: "PPT43", image: "/impulse-website/slideshow/ppt43.png", href: "https://www.theimpulsedigital.com/slideshare/top-5-things-you-should-know-about-social-media-banter.pdf"},
  { id: "44", title: "PPT44", image: "/impulse-website/slideshow/ppt44.png", href: "https://www.theimpulsedigital.com/slideshare/moment-marketing.pdf"},
  { id: "45", title: "PPT45", image: "/impulse-website/slideshow/ppt45.png", href: "https://www.theimpulsedigital.com/slideshare/the-a-z-of-geofencing-marketing-for-your-business.pdf"},
  { id: "46", title: "PPT46", image: "/impulse-website/slideshow/ppt46.png", href: "https://www.theimpulsedigital.com/slideshare/five-best-lead-generation-trends-in-2021.pdf"},
  { id: "47", title: "PPT47", image: "/impulse-website/slideshow/ppt47.png", href: "https://www.theimpulsedigital.com/slideshare/catch-up-with-these-top-5-social-media-marketing-trends-of-2021.pdf"},
  { id: "48", title: "PPT48", image: "/impulse-website/slideshow/ppt48.png", href: "https://www.theimpulsedigital.com/slideshare/do-you-know-these-5-perks-of-google%E2%80%99s-performance-max-campaigns.pdf"},
  { id: "49", title: "PPT49", image: "/impulse-website/slideshow/ppt49.png", href: "https://www.theimpulsedigital.com/slideshare/is-cro-marketing-crucial-for-your-business.pdf"},
  { id: "50", title: "PPT50", image: "/impulse-website/slideshow/ppt50.png", href: "https://www.theimpulsedigital.com/slideshare/the-ultimate-guide-to-ui-ux-or-digital-marketing.pdf"},
  { id: "51", title: "PPT51", image: "/impulse-website/slideshow/ppt51.png", href: "https://www.theimpulsedigital.com/slideshare/creative-juices-flow-digitally-this-cannes-lions-2021-the-top-5-indian-ads-that-made-us-proud-in-the-past-decade.pdf"},
  { id: "52", title: "PPT52", image: "/impulse-website/slideshow/ppt52.png", href: "https://www.theimpulsedigital.com/slideshare/what%E2%80%99s-new-with-google-my-business-and-how-to-leverage-it-to-promote-your-business-effectively.pdf"},
  { id: "53", title: "PPT53", image: "/impulse-website/slideshow/ppt53.png", href: "https://www.theimpulsedigital.com/slideshare/why-your-brand-needs-to-ace-the-conversational-marketing-strategy.pdf"},
  { id: "54", title: "PPT54", image: "/impulse-website/slideshow/ppt54.png", href: "https://www.theimpulsedigital.com/slideshare/the-ultimate-guide-to-creating-a-perfect-landing-page-for-your-business.pdf"},
  { id: "55", title: "PPT55", image: "/impulse-website/slideshow/ppt55.png", href: "https://www.theimpulsedigital.com/slideshare/7-business-trends-to-look-out-for-in-the-post-covid-world.pdf"},
  { id: "56", title: "PPT56", image: "/impulse-website/slideshow/ppt56.png", href: "https://www.theimpulsedigital.com/slideshare/all-you-need-to-know-about-omnichannel-marketing.pdf"},
  { id: "57", title: "PPT57", image: "/impulse-website/slideshow/ppt57.png", href: "https://www.theimpulsedigital.com/slideshare/top-voice-technology-trends-in-2021-you-ought-to-know.pdf"},
  { id: "58", title: "PPT58", image: "/impulse-website/slideshow/ppt58.png", href: "https://www.theimpulsedigital.com/slideshare/how-to-use-augmented-reality-for-empowering-your-digital-marketing-strategy.pdf"},
  { id: "59", title: "PPT59", image: "/impulse-website/slideshow/ppt59.png", href: "https://www.theimpulsedigital.com/slideshare/white-and-orange-content-strategy-professional-presentation.pdf"},
  { id: "60", title: "PPT60", image: "/impulse-website/slideshow/ppt60.png", href: "https://www.theimpulsedigital.com/slideshare/advertisements-that-have-bowled-us-over-this-ipl-season.pdf"},
  { id: "61", title: "PPT61", image: "/impulse-website/slideshow/ppt61.png", href: "https://www.theimpulsedigital.com/slideshare/top-5-ways-cryptocurrency-is-taking-the-digital-marketing-world-by-storm.pdf"},
  { id: "62", title: "PPT62", image: "/impulse-website/slideshow/ppt62.png", href: "https://www.theimpulsedigital.com/slideshare/the-pinterest-way-of-marketing-your-business-digitally.pdf"},
  { id: "63", title: "PPT63", image: "/impulse-website/slideshow/ppt63.png", href: "https://www.theimpulsedigital.com/slideshare/digital-darwanism-is-your-business-surviving-the-digital-revolution.pdf"},
  { id: "64", title: "PPT64", image: "/impulse-website/slideshow/ppt64.png", href: "https://www.theimpulsedigital.com/slideshare/have-you-begun-discussing-on-reddit-yet.pdf"},
  { id: "65", title: "PPT65", image: "/impulse-website/slideshow/ppt65.png", href: "https://www.theimpulsedigital.com/slideshare/what-is-passion-economy-and-who-runs-it-2.pdf"},
  { id: "66", title: "PPT66", image: "/impulse-website/slideshow/ppt66.png", href: "https://www.theimpulsedigital.com/slideshare/social-media-privacy-threats-that-you-need-to-keep-an-eye-on-in-2021.pdf"},
  { id: "67", title: "PPT67", image: "/impulse-website/slideshow/ppt67.png", href: "https://www.theimpulsedigital.com/slideshare/is-signal-messenger-app-the-perfect-alternative-to-whatsapp-1.pdf"},
  { id: "68", title: "PPT68", image: "/impulse-website/slideshow/ppt68.png", href: "https://www.theimpulsedigital.com/slideshare/did-you-know-customer-experience-is-the-new-marketing-tool.pdf"},
  { id: "69", title: "PPT69", image: "/impulse-website/slideshow/ppt69.png", href: "https://www.theimpulsedigital.com/slideshare/five-points-you-need-to-keep-in-mind-while-choosing-a-digital-marketing-agency.pdf"},
  { id: "70", title: "PPT70", image: "/impulse-website/slideshow/ppt70.png", href: "https://www.theimpulsedigital.com/slideshare/should-you-be-worried-about-the-new-google-core-update-read-to-know.pdf"},
  { id: "71", title: "PPT71", image: "/impulse-website/slideshow/ppt71.png", href: "https://www.theimpulsedigital.com/slideshare/all-you-need-to-know-about-the-new-whatsapp-business-features.pdf"},
  { id: "72", title: "PPT72", image: "/impulse-website/slideshow/ppt72.png", href: "https://www.theimpulsedigital.com/slideshare/social-media-tools-that-will-help-boost-sales-during-the-festive-period.pdf"},
  { id: "73", title: "PPT73", image: "/impulse-website/slideshow/ppt73.png", href: "https://www.theimpulsedigital.com/slideshare/social-media-marketing-tips-to-boost-your-sales-during-the-festive-period.pdf"},
  { id: "74", title: "PPT74", image: "/impulse-website/slideshow/ppt74.png", href: "https://www.theimpulsedigital.com/slideshare/web-development-questionnaire.pdf"},
  { id: "75", title: "PPT75", image: "/impulse-website/slideshow/ppt75.png", href: "https://www.theimpulsedigital.com/slideshare/alternatives-to-banned-chinese-apps-that-were-always-overlooked.pdf"},
  { id: "76", title: "PPT76", image: "/impulse-website/slideshow/ppt76.png", href: "https://www.theimpulsedigital.com/slideshare/youtube-vs-igtv-who-wins.pdf"},
  { id: "77", title: "PPT77", image: "/impulse-website/slideshow/ppt77.png", href: "https://www.theimpulsedigital.com/slideshare/top-7-digital-marketing-trends-for-2020.pdf"},
  { id: "78", title: "PPT78", image: "/impulse-website/slideshow/ppt78.png", href: "https://www.theimpulsedigital.com/slideshare/how-instagram-stories-help-businesses-impulse-digital.pdf"},
  { id: "79", title: "PPT79", image: "/impulse-website/slideshow/ppt79.png", href: "https://www.theimpulsedigital.com/slideshare/seasonal-vs-evergreen-content-marketing-for-business.pdf"},
  { id: "80", title: "PPT80", image: "/impulse-website/slideshow/ppt80.png", href: "https://www.theimpulsedigital.com/slideshare/all-you-need-to-know-about-digital-marketing.pdf"},
  { id: "81", title: "PPT81", image: "/impulse-website/slideshow/ppt81.png", href: "https://www.theimpulsedigital.com/slideshare/8-ways-how-to-use-youtube-for-business-marketing.pdf"},
  { id: "82", title: "PPT82", image: "/impulse-website/slideshow/ppt82.png", href: "https://www.theimpulsedigital.com/slideshare/how-to-create-online-presence-for-your-business-impulse-digital.pdf"},
  { id: "83", title: "PPT83", image: "/impulse-website/slideshow/ppt83.png", href: "https://www.theimpulsedigital.com/slideshare/top-18-google-advanced-search-operators-that-you-must-to-know.pdf"},
  { id: "84", title: "PPT84", image: "/impulse-website/slideshow/ppt84.png", href: "https://www.theimpulsedigital.com/slideshare/remarketing-a-digital-magnet.pdf"},
  { id: "85", title: "PPT85", image: "/impulse-website/slideshow/ppt85.png", href: "https://www.theimpulsedigital.com/slideshare/content-marketing-trends.pdf"},
  { id: "86", title: "PPT86", image: "/impulse-website/slideshow/ppt86.png", href: "https://www.theimpulsedigital.com/slideshare/seo-trends.pdf"},
  { id: "87", title: "PPT87", image: "/impulse-website/slideshow/ppt87.png", href: "https://www.theimpulsedigital.com/slideshare/9-points-emailer-design-checklist.pdf"},
  { id: "88", title: "PPT88", image: "/impulse-website/slideshow/ppt88.png", href: "https://www.theimpulsedigital.com/slideshare/blogslideshare.pdf"},
  { id: "89", title: "PPT89", image: "/impulse-website/slideshow/ppt89.png", href: "https://www.theimpulsedigital.com/slideshare/international-womens-day.pdf"},
  { id: "90", title: "PPT90", image: "/impulse-website/slideshow/ppt90.png", href: "https://www.theimpulsedigital.com/slideshare/googlespenguinupdate.pdf"},
  { id: "91", title: "PPT91", image: "/impulse-website/slideshow/ppt91.png", href: "https://www.theimpulsedigital.com/slideshare/10-content-marketing-mistakes-that-can-be-easily-avoided.pdf"},
  
];

export const SlideSharePPT = (): JSX.Element => {
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

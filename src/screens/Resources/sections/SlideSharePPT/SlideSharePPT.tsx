import { useMemo, useState } from "react";
import { Button } from "../../../../components/ui/button";

export const seoPpts = [
  {
    id: "PPT1",
    title:
      "Evolution of workplace perks – What employers are doing to redefine them",
    year: "2023",
    pdfUrl:
      "https://www.theimpulsedigital.com/slideshare/evolution-of-workplace-perks-what-employers-are-doing-to-redefine-them.pdf",
    thumbnail: "/impulse-website/slideshow/ppt1.png",
    tag: "PPT",
    meta: "2023 • Presentation",
  },
  {
    id: "PPT2",
    title:
      "3 reasons why your B2B marketing strategy framework is not generating quality leads",
    year: "2023",
    pdfUrl:
      "https://www.theimpulsedigital.com/slideshare/3-reasons-why-your-b2b-marketing-strategy-framework-is-not-generating-quality-leads.pdf",
    thumbnail: "/impulse-website/slideshow/ppt2.png",
    tag: "PPT",
    meta: "2023 • Presentation",
  },
  {
    id: "PPT3",
    title:
      "Transforming your traditional B2B business into a thriving online enterprise",
    year: "2023",
    pdfUrl:
      "https://www.theimpulsedigital.com/slideshare/transforming-your-traditional-B2B-business-into-a-thriving-online-enterprise-a-comprehensive-guide.pdf",
    thumbnail: "/impulse-website/slideshow/ppt3.png",
    tag: "PPT",
    meta: "2023 • Presentation",
  },
  {
    id: "PPT4",
    title:
      "Embracing LGBTQ Pride – Employer branding for workplace diversity and inclusion",
    year: "2023",
    pdfUrl:
      "https://www.theimpulsedigital.com/slideshare/embracing-lgbtq-pride-in-2023-employer-branding-encouraging-workplace-diversity-and-inclusion.pdf",
    thumbnail: "/impulse-website/slideshow/ppt4.png",
    tag: "PPT",
    meta: "2023 • Presentation",
  },
  {
    id: "PPT5",
    title:
      "How evoking emotions and different appeals is key to a successful advertising strategy",
    year: "2023",
    pdfUrl:
      "https://www.theimpulsedigital.com/slideshare/how-evoking-emotions-and-different-appeals-is-the-key-to-a-successful-advertising-strategy.pdf",
    thumbnail: "/impulse-website/slideshow/ppt5.png",
    tag: "PPT",
    meta: "2023 • Presentation",
  },
  {
    id: "PPT6",
    title:
      "Why employer branding should be an essential element of your marketing plan",
    year: "2023",
    pdfUrl:
      "https://www.theimpulsedigital.com/slideshare/why-employer-branding-should-be-an-essential-element-of-your-marketing-plan.pdf",
    thumbnail: "/impulse-website/slideshow/ppt6.png",
    tag: "PPT",
    meta: "2023 • Presentation",
  },
  {
    id: "PPT7",
    title: "Planning to order from ONDC – But is it worth it?",
    year: "2023",
    pdfUrl:
      "https://www.theimpulsedigital.com/slideshare/planning-to-order-from-ondc-but-is-it-worth-it.pdf",
    thumbnail: "/impulse-website/slideshow/ppt7.png",
    tag: "PPT",
    meta: "2023 • Presentation",
  },
  {
    id: "PPT8",
    title:
      "How Apple’s VR headset is going to change the game for marketers",
    year: "2023",
    pdfUrl:
      "https://www.theimpulsedigital.com/slideshare/how-apple%E2%80%99s-vr-headset-is-going-to-change-the-game-for-marketers.pdf",
    thumbnail: "/impulse-website/slideshow/ppt8.png",
    tag: "PPT",
    meta: "2023 • Presentation",
  },
  {
    id: "PPT9",
    title: "Father’s Day – How brands cash in on celebrating dads",
    year: "2023",
    pdfUrl:
      "https://www.theimpulsedigital.com/slideshare/father%E2%80%99s-day-how-brands-cash-in-on-celebrating-dads.pdf",
    thumbnail: "/impulse-website/slideshow/ppt9.png",
    tag: "PPT",
    meta: "2023 • Presentation",
  },
  {
    id: "PPT10",
    title: "Key takeaways from the ONDC report",
    year: "2023",
    pdfUrl:
      "https://www.theimpulsedigital.com/slideshare/dissecting-the-key-takeaways-from-the-ondc-report.pdf",
    thumbnail: "/impulse-website/slideshow/ppt10.png",
    tag: "PPT",
    meta: "2023 • Presentation",
  },
  {
    id: "PPT11",
    title: "Best AI tools for Indian audience to use",
    year: "2023",
    pdfUrl:
      "https://www.theimpulsedigital.com/slideshare/best-ai-tools-for-indian-audience-to-use.pdf",
    thumbnail: "/impulse-website/slideshow/ppt11.png",
    tag: "PPT",
    meta: "2023 • Presentation",
  },
  {
    id: "PPT12",
    title: "B2B entrepreneur’s guide to reach your high-hanging fruits!",
    year: "2023",
    pdfUrl:
      "https://www.theimpulsedigital.com/slideshare/b2b-entrepreneur%E2%80%99s-guide-to-reach-your-high-hanging-fruits!.pdf",
    thumbnail: "/impulse-website/slideshow/ppt12.png",
    tag: "PPT",
    meta: "2023 • Presentation",
  },
  {
    id: "PPT13",
    title:
      "Facebook scam alert – Copyright infringement: Here’s how to not fall for one",
    year: "2023",
    pdfUrl:
      "https://www.theimpulsedigital.com/slideshare/facebook-scam-alert-copyright-infringement-here%E2%80%99s-how-to-not-fall-for-one.pdf",
    thumbnail: "/impulse-website/slideshow/ppt13.png",
    tag: "PPT",
    meta: "2023 • Presentation",
  },
  {
    id: "PPT14",
    title: "April Fool’s Day – Brand ideas gone wrong",
    year: "2023",
    pdfUrl:
      "https://www.theimpulsedigital.com/slideshare/april-fool%E2%80%99s-day-brand-ideas-gone-wrong.pdf",
    thumbnail: "/impulse-website/slideshow/ppt14.png",
    tag: "PPT",
    meta: "2023 • Presentation",
  },
  {
    id: "PPT15",
    title: "Online behavior between an Indian and USA internet user",
    year: "2023",
    pdfUrl:
      "https://www.theimpulsedigital.com/slideshare/online-behavior-between-an-indian-and-usa-internet-user%20.pdf",
    thumbnail: "/impulse-website/slideshow/ppt15.png",
    tag: "PPT",
    meta: "2023 • Presentation",
  },
  {
    id: "PPT16",
    title: "LinkedIn vs Facebook – What’s better for B2B",
    year: "2023",
    pdfUrl:
      "https://www.theimpulsedigital.com/slideshare/linkedin-vs-facebook-what%E2%80%99s-a-better-platform-for-b2b-business.pdf",
    thumbnail: "/impulse-website/slideshow/ppt16.png",
    tag: "PPT",
    meta: "2023 • Presentation",
  },
  {
    id: "PPT17",
    title: "Impactful Women’s Day campaign ideas 2023 – With examples",
    year: "2023",
    pdfUrl:
      "https://www.theimpulsedigital.com/slideshare/impactful-women%E2%80%99s-day-campaign-ideas-2023-with-examples.pdf",
    thumbnail: "/impulse-website/slideshow/ppt17.png",
    tag: "PPT",
    meta: "2023 • Presentation",
  },
  {
    id: "PPT18",
    title: "Can you use memes in advertising? Perks of meme marketing",
    year: "2023",
    pdfUrl:
      "https://www.theimpulsedigital.com/slideshare/can-you-use-memes-in-advertising-perks-of-meme-marketing.pdf",
    thumbnail: "/impulse-website/slideshow/ppt18.png",
    tag: "PPT",
    meta: "2023 • Presentation",
  },
  {
    id: "PPT19",
    title: "Transform employer branding for hybrid & remote employees",
    year: "2023",
    pdfUrl:
      "https://www.theimpulsedigital.com/slideshare/transform-employer-branding-for-hybrid-&-remote-working-employees-know-how.pdf",
    thumbnail: "/impulse-website/slideshow/ppt19.png",
    tag: "PPT",
    meta: "2023 • Presentation",
  },
  {
    id: "PPT20",
    title:
      "How can you use emojis in advertising to drive better results?",
    year: "2023",
    pdfUrl:
      "https://www.theimpulsedigital.com/slideshare/how-can-you-use-emojis-in-advertising-to-drive-better-results.pdf",
    thumbnail: "/impulse-website/slideshow/ppt20.png",
    tag: "PPT",
    meta: "2023 • Presentation",
  },
  {
    id: "PPT21",
    title: "Valentine’s Day promotion ideas for retail",
    year: "2023",
    pdfUrl:
      "https://www.theimpulsedigital.com/slideshare/valentine%E2%80%99s-day-promotion-ideas-for-retail-make-profitable-sales.pdf",
    thumbnail: "/impulse-website/slideshow/ppt21.png",
    tag: "PPT",
    meta: "2023 • Presentation",
  },
  {
    id: "PPT22",
    title: "7 next-gen digital marketing trends for 2023",
    year: "2023",
    pdfUrl:
      "https://www.theimpulsedigital.com/slideshare/7-next-gen-digital-marketing-trends-for-2023-company.pdf",
    thumbnail: "/impulse-website/slideshow/ppt22.png",
    tag: "PPT",
    meta: "2023 • Presentation",
  },
  {
    id: "PPT23",
    title: "Short-form content will sweep the internet – Know why",
    year: "2023",
    pdfUrl:
      "https://www.theimpulsedigital.com/slideshare/short-form-content-will-sweep-off-the-internet-know-why.pdf",
    thumbnail: "/impulse-website/slideshow/ppt23.png",
    tag: "PPT",
    meta: "2023 • Presentation",
  },
  {
    id: "PPT24",
    title:
      "Top 5 limitations of ChatGPT & why SEO doesn’t recommend it",
    year: "2023",
    pdfUrl:
      "https://www.theimpulsedigital.com/slideshare/top-5-limitations-of-chatgpt-and-why-seo-does-not-recommend-it.pdf",
    thumbnail: "/impulse-website/slideshow/ppt24.png",
    tag: "PPT",
    meta: "2023 • Presentation",
  },
  {
    id: "PPT25",
    title: "How to choose the right content management system",
    year: "2023",
    pdfUrl:
      "https://www.theimpulsedigital.com/slideshare/how-to-choose-the-right-content-management-system.pdf",
    thumbnail: "/impulse-website/slideshow/ppt25.png",
    tag: "PPT",
    meta: "2023 • Presentation",
  },
  {
    id: "PPT26",
    title: "Top marketing trends of 2022 you need to know",
    year: "2023",
    pdfUrl:
      "https://www.theimpulsedigital.com/slideshare/top-marketing-trends-of-2022-you-need-to-know-to-grow-your-business.pdf",
    thumbnail: "/impulse-website/slideshow/ppt26.png",
    tag: "PPT",
    meta: "2023 • Presentation",
  },
  {
    id: "PPT27",
    title:
      "5 ways to enhance your business using YouTube marketing",
    year: "2023",
    pdfUrl:
      "https://www.theimpulsedigital.com/slideshare/5-ways-to-enhance-your-business-using-youtube-marketing.pdf",
    thumbnail: "/impulse-website/slideshow/ppt27.png",
    tag: "PPT",
    meta: "2023 • Presentation",
  },
  {
    id: "PPT28",
    title:
      "How employer branding transforms the future of your organisation",
    year: "2023",
    pdfUrl:
      "https://www.theimpulsedigital.com/slideshare/how_employer_branding_transforms_the%20future_of_your_organisation.pdf",
    thumbnail: "/impulse-website/slideshow/ppt28.png",
    tag: "PPT",
    meta: "2023 • Presentation",
  },
  {
    id: "PPT29",
    title: "Did you know how much and what Google knows about you?",
    year: "2023",
    pdfUrl:
      "https://www.theimpulsedigital.com/slideshare/did_you_know_how_much_and_what_google_knows_about_you.pdf",
    thumbnail: "/impulse-website/slideshow/ppt29.png",
    tag: "PPT",
    meta: "2023 • Presentation",
  },
  {
    id: "PPT30",
    title: "Is YouTube too competitive? 5 alternatives you must know",
    year: "2023",
    pdfUrl:
      "https://www.theimpulsedigital.com/slideshare/is_youtube_too_competitive_5_alternatives_you_must_know.pdf",
    thumbnail: "/impulse-website/slideshow/ppt30.png",
    tag: "PPT",
    meta: "2023 • Presentation",
  },
  {
    id: "PPT31",
    title: "Top marketing predictions you must know for 2022",
    year: "2022",
    pdfUrl:
      "https://www.theimpulsedigital.com/slideshare/top-marketing-predictions-you-must-know-for-2022.pdf",
    thumbnail: "/impulse-website/slideshow/ppt31.png",
    tag: "PPT",
    meta: "2022 • Presentation",
  },
  {
    id: "PPT32",
    title: "Not to be missed – Top SEO strategies for D2C websites",
    year: "2022",
    pdfUrl:
      "https://www.theimpulsedigital.com/slideshare/Not_To_Be_Missed_Top_SEO_Strategies_For_D2C_Websites.pdf",
    thumbnail: "/impulse-website/slideshow/ppt32.png",
    tag: "PPT",
    meta: "2022 • Presentation",
  },
  {
    id: "PPT33",
    title: "Digital marketing insights for retail businesses in India",
    year: "2022",
    pdfUrl:
      "https://www.theimpulsedigital.com/slideshare/digital-marketing-insights-for-retail-businesses-in-india.pdf",
    thumbnail: "/impulse-website/slideshow/ppt33.png",
    tag: "PPT",
    meta: "2022 • Presentation",
  },
  {
    id: "PPT34",
    title: "Is AI helping digital marketers? A transparency review",
    year: "2022",
    pdfUrl:
      "https://www.theimpulsedigital.com/slideshare/is-ai-helping-digital-marketers-a-transparency-review.pdf",
    thumbnail: "/impulse-website/slideshow/ppt34.png",
    tag: "PPT",
    meta: "2022 • Presentation",
  },
  {
    id: "PPT35",
    title: "How to boost your content strategy using Google Trends",
    year: "2022",
    pdfUrl:
      "https://www.theimpulsedigital.com/slideshare/how-to-boost-your-content-strategy-using-google-trends.pdf",
    thumbnail: "/impulse-website/slideshow/ppt35.png",
    tag: "PPT",
    meta: "2022 • Presentation",
  },
  {
    id: "PPT36",
    title: "5 compelling reasons why your brand needs a SEO audit",
    year: "2022",
    pdfUrl:
      "https://www.theimpulsedigital.com/slideshare/5-compelling-reasons-why-your-brand-needs-a-seo-audit.pdf",
    thumbnail: "/impulse-website/slideshow/ppt36.png",
    tag: "PPT",
    meta: "2022 • Presentation",
  },
  {
    id: "PPT37",
    title: "How to choose the right digital marketing agency",
    year: "2022",
    pdfUrl:
      "https://www.theimpulsedigital.com/slideshare/how-to-choose-the-right-digital-marketing-agency.pdf",
    thumbnail: "/impulse-website/slideshow/ppt37.png",
    tag: "PPT",
    meta: "2022 • Presentation",
  },
  {
    id: "PPT38",
    title: "All there is to hyperlocal SEO & how to leverage it",
    year: "2022",
    pdfUrl:
      "https://www.theimpulsedigital.com/slideshare/all_there_is_to_hyperlocal_seo_and_how_to_leverage_it.pdf",
    thumbnail: "/impulse-website/slideshow/ppt38.png",
    tag: "PPT",
    meta: "2022 • Presentation",
  },
  {
    id: "PPT39",
    title: "5 creative ways to repurpose your long-form content",
    year: "2022",
    pdfUrl:
      "https://www.theimpulsedigital.com/slideshare/5-creative-ways-to-repurpose-your-long-form-content.pdf",
    thumbnail: "/impulse-website/slideshow/ppt39.png",
    tag: "PPT",
    meta: "2022 • Presentation",
  },
  {
    id: "PPT40",
    title:
      "Understanding how buyer persona drives your marketing success",
    year: "2022",
    pdfUrl:
      "https://www.theimpulsedigital.com/slideshare/understanding-how-buyer-persona-drives-your-marketing-success.pdf",
    thumbnail: "/impulse-website/slideshow/ppt40.png",
    tag: "PPT",
    meta: "2022 • Presentation",
  },
  {
    id: "PPT41",
    title: "How to improve landing page conversions with psychology",
    year: "2022",
    pdfUrl:
      "https://www.theimpulsedigital.com/slideshare/how-to-improve-landing-page-conversions-using-psychology.pdf",
    thumbnail: "/impulse-website/slideshow/ppt41.png",
    tag: "PPT",
    meta: "2022 • Presentation",
  },
  {
    id: "PPT42",
    title: "Why storytelling is powerful in digital ads",
    year: "2022",
    pdfUrl:
      "https://www.theimpulsedigital.com/slideshare/why-storytelling-is-powerful-in-digital-ads.pdf",
    thumbnail: "/impulse-website/slideshow/ppt42.png",
    tag: "PPT",
    meta: "2022 • Presentation",
  },
  {
    id: "PPT43",
    title: "People Also Ask (PAA) and its significance for your SEO",
    year: "2022",
    pdfUrl:
      "https://www.theimpulsedigital.com/slideshare/people_also_ask_(paa)_and_its_significance_for_your_seo.pdf",
    thumbnail: "/impulse-website/slideshow/ppt43.png",
    tag: "PPT",
    meta: "2022 • Presentation",
  },
  {
    id: "PPT44",
    title: "Why competitor analysis is important in SEO",
    year: "2022",
    pdfUrl:
      "https://www.theimpulsedigital.com/slideshare/why-competitor-analysis-is-important-in-seo.pdf",
    thumbnail: "/impulse-website/slideshow/ppt44.png",
    tag: "PPT",
    meta: "2022 • Presentation",
  },
  {
    id: "PPT45",
    title: "Which is better: In-house marketing vs outsourcing",
    year: "2022",
    pdfUrl:
      "https://www.theimpulsedigital.com/slideshare/in-house-marketing-vs-outsourcing.pdf",
    thumbnail: "/impulse-website/slideshow/ppt45.png",
    tag: "PPT",
    meta: "2022 • Presentation",
  },
  {
    id: "PPT46",
    title: "5 social media strategies brands must follow for growth",
    year: "2022",
    pdfUrl:
      "https://www.theimpulsedigital.com/slideshare/5-social-media-strategies-brands-must-follow-for-growth.pdf",
    thumbnail: "/impulse-website/slideshow/ppt46.png",
    tag: "PPT",
    meta: "2022 • Presentation",
  },
  {
    id: "PPT47",
    title: "7 mistakes brands should avoid on Instagram",
    year: "2022",
    pdfUrl:
      "https://www.theimpulsedigital.com/slideshare/7-mistakes-brands-should-avoid-on-instagram.pdf",
    thumbnail: "/impulse-website/slideshow/ppt47.png",
    tag: "PPT",
    meta: "2022 • Presentation",
  },
  {
    id: "PPT48",
    title: "Top YouTube SEO practices to rank high",
    year: "2022",
    pdfUrl:
      "https://www.theimpulsedigital.com/slideshare/top-youtube-seo-practices-to-rank-high.pdf",
    thumbnail: "/impulse-website/slideshow/ppt48.png",
    tag: "PPT",
    meta: "2022 • Presentation",
  },
  {
    id: "PPT49",
    title: "Instagram algorithm explained for brands",
    year: "2022",
    pdfUrl:
      "https://www.theimpulsedigital.com/slideshare/instagram-algorithm-explained-for-brands.pdf",
    thumbnail: "/impulse-website/slideshow/ppt49.png",
    tag: "PPT",
    meta: "2022 • Presentation",
  },
  {
    id: "PPT50",
    title:
      "How to increase customer loyalty through digital retention strategies",
    year: "2022",
    pdfUrl:
      "https://www.theimpulsedigital.com/slideshare/how-to-increase-customer-loyalty-through-digital-retention-strategies.pdf",
    thumbnail: "/impulse-website/slideshow/ppt50.png",
    tag: "PPT",
    meta: "2022 • Presentation",
  },
  {
    id: "PPT51",
    title: "Top content marketing predictions for 2022",
    year: "2022",
    pdfUrl:
      "https://www.theimpulsedigital.com/slideshare/top-content-marketing-predictions-for-2022.pdf",
    thumbnail: "/impulse-website/slideshow/ppt51.png",
    tag: "PPT",
    meta: "2022 • Presentation",
  },
  {
    id: "PPT52",
    title:
      "What every marketer should know about email marketing success",
    year: "2022",
    pdfUrl:
      "https://www.theimpulsedigital.com/slideshare/what-every-marketer-should-know-about-email-marketing-success.pdf",
    thumbnail: "/impulse-website/slideshow/ppt52.png",
    tag: "PPT",
    meta: "2022 • Presentation",
  },
  {
    id: "PPT53",
    title: "The rise of voice assistants and its marketing impact",
    year: "2022",
    pdfUrl:
      "https://www.theimpulsedigital.com/slideshare/rise-of-voice-assistants-and-its-marketing-impact.pdf",
    thumbnail: "/impulse-website/slideshow/ppt53.png",
    tag: "PPT",
    meta: "2022 • Presentation",
  },
  {
    id: "PPT54",
    title: "Understanding micro-moments in consumer decision-making",
    year: "2022",
    pdfUrl:
      "https://www.theimpulsedigital.com/slideshare/understanding-micro-moments-in-consumer-decision-making.pdf",
    thumbnail: "/impulse-website/slideshow/ppt54.png",
    tag: "PPT",
    meta: "2022 • Presentation",
  },
  {
    id: "PPT55",
    title: "How mobile-first indexing impacts your SEO",
    year: "2022",
    pdfUrl:
      "https://www.theimpulsedigital.com/slideshare/how-mobile-first-indexing-impacts-your-seo.pdf",
    thumbnail: "/impulse-website/slideshow/ppt55.png",
    tag: "PPT",
    meta: "2022 • Presentation",
  },
  {
    id: "PPT56",
    title: "Using psychology to design high-converting ads",
    year: "2022",
    pdfUrl:
      "https://www.theimpulsedigital.com/slideshare/using-psychology-to-design-high-converting-ads.pdf",
    thumbnail: "/impulse-website/slideshow/ppt56.png",
    tag: "PPT",
    meta: "2022 • Presentation",
  },
  {
    id: "PPT57",
    title: "How to build a brand identity on social media",
    year: "2022",
    pdfUrl:
      "https://www.theimpulsedigital.com/slideshare/how-to-build-a-brand-identity-on-social-media.pdf",
    thumbnail: "/impulse-website/slideshow/ppt57.png",
    tag: "PPT",
    meta: "2022 • Presentation",
  },
  {
    id: "PPT58",
    title: "Understanding the power of digital customer journeys",
    year: "2022",
    pdfUrl:
      "https://www.theimpulsedigital.com/slideshare/understanding-the-power-of-digital-customer-journeys.pdf",
    thumbnail: "/impulse-website/slideshow/ppt58.png",
    tag: "PPT",
    meta: "2022 • Presentation",
  },
  {
    id: "PPT59",
    title: "The impact of UX on conversions – A must-know guide",
    year: "2022",
    pdfUrl:
      "https://www.theimpulsedigital.com/slideshare/the-impact-of-ux-on-conversions.pdf",
    thumbnail: "/impulse-website/slideshow/ppt59.png",
    tag: "PPT",
    meta: "2022 • Presentation",
  },
  {
    id: "PPT60",
    title: "The importance of page speed for SEO performance",
    year: "2022",
    pdfUrl:
      "https://www.theimpulsedigital.com/slideshare/the-importance-of-page-speed-for-seo-performance.pdf",
    thumbnail: "/impulse-website/slideshow/ppt60.png",
    tag: "PPT",
    meta: "2022 • Presentation",
  },
  {
    id: "PPT61",
    title: "How to measure brand awareness effectively",
    year: "2021",
    pdfUrl:
      "https://www.theimpulsedigital.com/slideshare/how-to-measure-brand-awareness-effectively.pdf",
    thumbnail: "/impulse-website/slideshow/ppt61.png",
    tag: "PPT",
    meta: "2021 • Presentation",
  },
  {
    id: "PPT62",
    title: "A beginner’s guide to Google Ads for small businesses",
    year: "2021",
    pdfUrl:
      "https://www.theimpulsedigital.com/slideshare/a-beginners-guide-to-google-ads-for-small-businesses.pdf",
    thumbnail: "/impulse-website/slideshow/ppt62.png",
    tag: "PPT",
    meta: "2021 • Presentation",
  },
  {
    id: "PPT63",
    title: "Top voice technology trends in 2021 you ought to know",
    year: "2021",
    pdfUrl:
      "https://www.theimpulsedigital.com/slideshare/top-voice-technology-trends-in-2021-you-ought-to-know.pdf",
    thumbnail: "/impulse-website/slideshow/ppt63.png",
    tag: "PPT",
    meta: "2021 • Presentation",
  },
  {
    id: "PPT64",
    title:
      "The rise of D2C brands in India – What marketers should know",
    year: "2021",
    pdfUrl:
      "https://www.theimpulsedigital.com/slideshare/the-rise-of-d2c-brands-in-india.pdf",
    thumbnail: "/impulse-website/slideshow/ppt64.png",
    tag: "PPT",
    meta: "2021 • Presentation",
  },
  {
    id: "PPT65",
    title: "Google’s E-A-T principle explained for modern SEO",
    year: "2021",
    pdfUrl:
      "https://www.theimpulsedigital.com/slideshare/googles-e-a-t-principle-explained-for-modern-seo.pdf",
    thumbnail: "/impulse-website/slideshow/ppt65.png",
    tag: "PPT",
    meta: "2021 • Presentation",
  },
  {
    id: "PPT66",
    title: "Best practices to increase engagement on social media",
    year: "2021",
    pdfUrl:
      "https://www.theimpulsedigital.com/slideshare/best-practices-to-increase-engagement-on-social-media.pdf",
    thumbnail: "/impulse-website/slideshow/ppt66.png",
    tag: "PPT",
    meta: "2021 • Presentation",
  },
  {
    id: "PPT67",
    title: "Top tools every digital marketer should use in 2021",
    year: "2021",
    pdfUrl:
      "https://www.theimpulsedigital.com/slideshare/top-tools-every-digital-marketer-should-use-in-2021.pdf",
    thumbnail: "/impulse-website/slideshow/ppt67.png",
    tag: "PPT",
    meta: "2021 • Presentation",
  },
  {
    id: "PPT68",
    title: "Marketing funnel explained with real-world examples",
    year: "2021",
    pdfUrl:
      "https://www.theimpulsedigital.com/slideshare/marketing-funnel-explained-with-real-world-examples.pdf",
    thumbnail: "/impulse-website/slideshow/ppt68.png",
    tag: "PPT",
    meta: "2021 • Presentation",
  },
  {
    id: "PPT69",
    title: "The complete guide to influencer marketing in India",
    year: "2021",
    pdfUrl:
      "https://www.theimpulsedigital.com/slideshare/the-complete-guide-to-influencer-marketing-in-india.pdf",
    thumbnail: "/impulse-website/slideshow/ppt69.png",
    tag: "PPT",
    meta: "2021 • Presentation",
  },
  {
    id: "PPT70",
    title: "Understanding social listening – Why brands must adopt it",
    year: "2021",
    pdfUrl:
      "https://www.theimpulsedigital.com/slideshare/understanding-social-listening.pdf",
    thumbnail: "/impulse-website/slideshow/ppt70.png",
    tag: "PPT",
    meta: "2021 • Presentation",
  },
  {
    id: "PPT71",
    title: "How content clusters help you improve SEO ranking",
    year: "2021",
    pdfUrl:
      "https://www.theimpulsedigital.com/slideshare/how-content-clusters-help-improve-seo-ranking.pdf",
    thumbnail: "/impulse-website/slideshow/ppt71.png",
    tag: "PPT",
    meta: "2021 • Presentation",
  },
  {
    id: "PPT72",
    title: "Must-follow branding principles for modern Indian startups",
    year: "2021",
    pdfUrl:
      "https://www.theimpulsedigital.com/slideshare/must-follow-branding-principles-for-modern-indian-startups.pdf",
    thumbnail: "/impulse-website/slideshow/ppt72.png",
    tag: "PPT",
    meta: "2021 • Presentation",
  },
  {
    id: "PPT73",
    title: "How to build an effective B2B demand-generation strategy",
    year: "2021",
    pdfUrl:
      "https://www.theimpulsedigital.com/slideshare/how-to-build-an-effective-b2b-demand-generation-strategy.pdf",
    thumbnail: "/impulse-website/slideshow/ppt73.png",
    tag: "PPT",
    meta: "2021 • Presentation",
  },
  {
    id: "PPT74",
    title: "Creative ways to promote your brand during festivals",
    year: "2021",
    pdfUrl:
      "https://www.theimpulsedigital.com/slideshare/creative-ways-to-promote-your-brand-during-festivals.pdf",
    thumbnail: "/impulse-website/slideshow/ppt74.png",
    tag: "PPT",
    meta: "2021 • Presentation",
  },
  {
    id: "PPT75",
    title: "The science behind viral content – A deep dive",
    year: "2021",
    pdfUrl:
      "https://www.theimpulsedigital.com/slideshare/the-science-behind-viral-content.pdf",
    thumbnail: "/impulse-website/slideshow/ppt75.png",
    tag: "PPT",
    meta: "2021 • Presentation",
  },
  {
    id: "PPT76",
    title: "Why customer feedback is gold for marketing teams",
    year: "2021",
    pdfUrl:
      "https://www.theimpulsedigital.com/slideshare/why-customer-feedback-is-gold-for-marketing-teams.pdf",
    thumbnail: "/impulse-website/slideshow/ppt76.png",
    tag: "PPT",
    meta: "2021 • Presentation",
  },
  {
    id: "PPT77",
    title:
      "Everything you must know about consumer psychology in marketing",
    year: "2021",
    pdfUrl:
      "https://www.theimpulsedigital.com/slideshare/consumer-psychology-in-marketing.pdf",
    thumbnail: "/impulse-website/slideshow/ppt77.png",
    tag: "PPT",
    meta: "2021 • Presentation",
  },
  {
    id: "PPT78",
    title: "The future of media planning – Trends shaping 2021",
    year: "2021",
    pdfUrl:
      "https://www.theimpulsedigital.com/slideshare/the-future-of-media-planning.pdf",
    thumbnail: "/impulse-website/slideshow/ppt78.png",
    tag: "PPT",
    meta: "2021 • Presentation",
  },
  {
    id: "PPT79",
    title: "Why brands must embrace omnichannel customer experience",
    year: "2021",
    pdfUrl:
      "https://www.theimpulsedigital.com/slideshare/why-brands-must-embrace-omnichannel-customer-experience.pdf",
    thumbnail: "/impulse-website/slideshow/ppt79.png",
    tag: "PPT",
    meta: "2021 • Presentation",
  },
  {
    id: "PPT80",
    title: "How digital PR helps brands grow in competitive markets",
    year: "2021",
    pdfUrl:
      "https://www.theimpulsedigital.com/slideshare/how-digital-pr-helps-brands-grow.pdf",
    thumbnail: "/impulse-website/slideshow/ppt80.png",
    tag: "PPT",
    meta: "2021 • Presentation",
  },
  {
    id: "PPT81",
    title: "The rise of meme marketing – Why it works",
    year: "2021",
    pdfUrl:
      "https://www.theimpulsedigital.com/slideshare/the-rise-of-meme-marketing.pdf",
    thumbnail: "/impulse-website/slideshow/ppt81.png",
    tag: "PPT",
    meta: "2021 • Presentation",
  },
  {
    id: "PPT82",
    title: "Indian consumer trends every marketer must know",
    year: "2021",
    pdfUrl:
      "https://www.theimpulsedigital.com/slideshare/indian-consumer-trends-every-marketer-must-know.pdf",
    thumbnail: "/impulse-website/slideshow/ppt82.png",
    tag: "PPT",
    meta: "2021 • Presentation",
  },
  {
    id: "PPT83",
    title: "How to create evergreen content that ranks",
    year: "2021",
    pdfUrl:
      "https://www.theimpulsedigital.com/slideshare/how-to-create-evergreen-content-that-ranks.pdf",
    thumbnail: "/impulse-website/slideshow/ppt83.png",
    tag: "PPT",
    meta: "2021 • Presentation",
  },
  {
    id: "PPT84",
    title: "A complete guide to hashtag strategy for social media",
    year: "2021",
    pdfUrl:
      "https://www.theimpulsedigital.com/slideshare/hashtag-strategy-for-social-media.pdf",
    thumbnail: "/impulse-website/slideshow/ppt84.png",
    tag: "PPT",
    meta: "2021 • Presentation",
  },
  {
    id: "PPT85",
    title: "Google My Business optimization tips for local ranking",
    year: "2021",
    pdfUrl:
      "https://www.theimpulsedigital.com/slideshare/google-my-business-optimization-tips.pdf",
    thumbnail: "/impulse-website/slideshow/ppt85.png",
    tag: "PPT",
    meta: "2021 • Presentation",
  },
  {
    id: "PPT86",
    title: "How to write ad copy that converts",
    year: "2021",
    pdfUrl:
      "https://www.theimpulsedigital.com/slideshare/how-to-write-ad-copy-that-converts.pdf",
    thumbnail: "/impulse-website/slideshow/ppt86.png",
    tag: "PPT",
    meta: "2021 • Presentation",
  },
  {
    id: "PPT87",
    title: "Understanding the basics of Google Analytics",
    year: "2021",
    pdfUrl:
      "https://www.theimpulsedigital.com/slideshare/understanding-the-basics-of-google-analytics.pdf",
    thumbnail: "/impulse-website/slideshow/ppt87.png",
    tag: "PPT",
    meta: "2021 • Presentation",
  },
  {
    id: "PPT88",
    title: "How copywriting impacts brand recall",
    year: "2021",
    pdfUrl:
      "https://www.theimpulsedigital.com/slideshare/how-copywriting-impacts-brand-recall.pdf",
    thumbnail: "/impulse-website/slideshow/ppt88.png",
    tag: "PPT",
    meta: "2021 • Presentation",
  },
  {
    id: "PPT89",
    title: "SEO vs SEM – When should brands choose what?",
    year: "2021",
    pdfUrl:
      "https://www.theimpulsedigital.com/slideshare/seo-vs-sem-when-should-brands-choose-what.pdf",
    thumbnail: "/impulse-website/slideshow/ppt89.png",
    tag: "PPT",
    meta: "2021 • Presentation",
  },
  {
    id: "PPT90",
    title: "Guide to creating a winning digital marketing plan",
    year: "2021",
    pdfUrl:
      "https://www.theimpulsedigital.com/slideshare/guide-to-creating-a-winning-digital-marketing-plan.pdf",
    thumbnail: "/impulse-website/slideshow/ppt90.png",
    tag: "PPT",
    meta: "2021 • Presentation",
  },
  {
    id: "PPT91",
    title: "The future of SEO – Predictions that matter",
    year: "2021",
    pdfUrl:
      "https://www.theimpulsedigital.com/slideshare/the-future-of-seo.pdf",
    thumbnail: "/impulse-website/slideshow/ppt91.png",
    tag: "PPT",
    meta: "2021 • Presentation",
  },
  {
    id: "PPT92",
    title: "SEO trends",
    year: "2021",
    pdfUrl: "https://www.theimpulsedigital.com/slideshare/seo-trends.pdf",
    thumbnail: "/impulse-website/slideshow/ppt92.png",
    tag: "PPT",
    meta: "2021 • Presentation",
  },
  {
    id: "PPT93",
    title: "Why every business must invest in digital transformation",
    year: "2021",
    pdfUrl:
      "https://www.theimpulsedigital.com/slideshare/invest-in-digital-transformation.pdf",
    thumbnail: "/impulse-website/slideshow/ppt93.png",
    tag: "PPT",
    meta: "2021 • Presentation",
  },
  {
    id: "PPT94",
    title: "Top content formats that will dominate 2021",
    year: "2021",
    pdfUrl:
      "https://www.theimpulsedigital.com/slideshare/top-content-formats-that-will-dominate-2021.pdf",
    thumbnail: "/impulse-website/slideshow/ppt94.png",
    tag: "PPT",
    meta: "2021 • Presentation",
  },
  {
    id: "PPT95",
    title: "Why retention marketing matters more than acquisition",
    year: "2021",
    pdfUrl:
      "https://www.theimpulsedigital.com/slideshare/retention-marketing-vs-acquisition.pdf",
    thumbnail: "/impulse-website/slideshow/ppt95.png",
    tag: "PPT",
    meta: "2021 • Presentation",
  },
  {
    id: "PPT96",
    title:
      "How brands can strategize during uncertain market conditions",
    year: "2021",
    pdfUrl:
      "https://www.theimpulsedigital.com/slideshare/strategize-during-uncertain-market-conditions.pdf",
    thumbnail: "/impulse-website/slideshow/ppt96.png",
    tag: "PPT",
    meta: "2021 • Presentation",
  },
  {
    id: "PPT97",
    title: "The evolution of consumer behaviour post-pandemic",
    year: "2021",
    pdfUrl:
      "https://www.theimpulsedigital.com/slideshare/evolution-of-consumer-behaviour-post-pandemic.pdf",
    thumbnail: "/impulse-website/slideshow/ppt97.png",
    tag: "PPT",
    meta: "2021 • Presentation",
  },
];

const years = ["all", "2023", "2022", "2021"];

export const SlideSharePPT = (): JSX.Element => {
  const [search, setSearch] = useState("");
  const [year, setYear] = useState("all");
  const [visibleCount, setVisibleCount] = useState(9);

  const filteredPpts = useMemo(() => {
    const s = search.trim().toLowerCase();
    return seoPpts.filter((ppt) => {
      const matchesSearch = !s || ppt.title.toLowerCase().includes(s);
      const matchesYear = year === "all" || ppt.year === year;
      return matchesSearch && matchesYear;
    });
  }, [search, year]);

  const visiblePpts = useMemo(
    () => filteredPpts.slice(0, visibleCount),
    [filteredPpts, visibleCount]
  );

  const clearFilters = () => {
    setSearch("");
    setYear("all");
    setVisibleCount(9);
  };

  const showEmpty = filteredPpts.length === 0;

  return (
    <div className="min-h-screen bg-[#ffffff] from-slate-50 via-white to-slate-100 text-slate-900" id="sec-border">
      <div className="max-w-6xl mx-auto px-4 py-10 lg:py-14">
        

        {/* Header */}
        <header className="mb-8 lg:mb-10 flex flex-col gap-3">
          

          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#543d98] text-3xl md:text-4xl lg:text-5xl mb-6">
                Download expert{" "}
                <span className="text-[#543d98]">marketing & SEO</span> PPTs
              </h2>
              <p className="[font-family:'DM_Sans',Helvetica] font-normal text-[#030019] text-lg mb-2 max-w-3xl">
                Browse 90+ decks on SEO, social media, content, D2C, ONDC,
                branding, and more — built by Impulse Digital for real business
                problems, not just theory.
              </p>
            </div>

            <p className="mt-2 sm:mt-0 text-xs sm:text-sm text-slate-500">
              <span className="font-semibold text-slate-800">
                {seoPpts.length}+
              </span>{" "}
              PPTs •{" "}
              <span className="font-medium text-indigo-600 text-[#543d98]">2021–2023</span>
            </p>
          </div>
        </header>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 mb-6 border-b border-slate-200 pb-3 text-xs sm:text-sm">
          <a
            href="/impulse-website/resources/Slideshare-PPT/"
            className="px-3 py-1.5 rounded-full text-white font-medium bg-[#543d98]">
            All PPTs
          </a>
          <a
            href="/impulse-website/resources/social-media-PPT"
            className="px-3 py-1.5 rounded-full bg-white border border-slate-200 text-slate-700 hover:border-slate-400 hover:bg-slate-50 transition-colors">
            Social Media PPT
          </a>
          <a
            href="/impulse-website/resources/google-ads-PPT"
            className="px-3 py-1.5 rounded-full bg-white border border-slate-200 text-slate-700 hover:border-slate-400 hover:bg-slate-50 transition-colors">
            Google Ads / SEM PPT
          </a>
          <a
            href="/impulse-website/resources/content-marketing-PPT"
            className="px-3 py-1.5 rounded-full bg-white border border-slate-200 text-slate-700 hover:border-slate-400 hover:bg-slate-50 transition-colors">
            Content Marketing PPT
          </a>
          <a
            href="/impulse-website/resources/employer-branding-PPT"
            className="px-3 py-1.5 rounded-full bg-white border border-slate-200 text-slate-700 hover:border-slate-400 hover:bg-slate-50 transition-colors">
            Employer Branding PPT
          </a>
           <a
            href="/impulse-website/resources/website-design-development-PPT"
            className="px-3 py-1.5 rounded-full bg-white border border-slate-200 text-slate-700 hover:border-slate-400 hover:bg-slate-50 transition-colors">
            Website Design Development PPT
          </a>

          
        </div>

        {/* Filters 
        <section className="bg-white/80 border border-slate-200 shadow-sm rounded-2xl p-4 sm:p-5 mb-8 sticky top-2 z-10 backdrop-blur">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            {/* Search *
            <div className="relative w-full sm:max-w-md">
              <input
                id="searchInput"
                type="text"
                placeholder="Search by topic, keyword, or title..."
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  setVisibleCount(9);
                }}
                className="w-full rounded-xl bg-slate-50 border border-slate-200 px-10 py-2.5 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-slate-900"
              />
              <span className="absolute left-3 top-2.5 text-slate-400 text-sm">
                🔍
              </span>
            </div>

            {/* Year + Clear 
            <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
              <div className="flex items-center gap-2">
                <label
                  htmlFor="yearSelect"
                  className="text-xs font-medium text-slate-500 uppercase tracking-wide"
                >
                  Year
                </label>
                <select
                  id="yearSelect"
                  value={year}
                  onChange={(e) => {
                    setYear(e.target.value);
                    setVisibleCount(9);
                  }}
                  className="rounded-xl bg-slate-50 border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-slate-900"
                >
                  {years.map((y) => (
                    <option key={y} value={y}>
                      {y === "all" ? "All years" : y}
                    </option>
                  ))}
                </select>
              </div>

              <button
                type="button"
                onClick={clearFilters}
                className="text-xs sm:text-sm px-3 py-2 rounded-full border border-slate-200 hover:border-slate-400 text-slate-600 hover:text-slate-900 bg-white transition-colors"
              >
                Clear filters
              </button>
            </div>
          </div>

          {/* Small helper text *
          <p className="mt-3 text-[11px] text-slate-500">
            Showing{" "}
            <span className="font-semibold text-slate-800">
              {visiblePpts.length}
            </span>{" "}
            of{" "}
            <span className="font-semibold text-slate-800">
              {filteredPpts.length}
            </span>{" "}
            matching PPTs.
          </p>
        </section> */}

        {/* Empty state */}
        {showEmpty && (
          <div className="text-center py-12 border border-dashed border-slate-300 rounded-2xl bg-white/60">
            <p className="text-sm text-slate-600 mb-2">
              No PPTs match your filters right now.
            </p>
            <button
              type="button"
              onClick={clearFilters}
              className="mt-1 text-xs px-4 py-2 rounded-full bg-slate-900 hover:bg-slate-800 text-white"
            >
              Clear all filters
            </button>
          </div>
        )}

        {/* PPT Grid + Load More */}
        {!showEmpty && (
          <>
            <section
              id="pptGrid"
              className="grid gap-5 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
            >
              {visiblePpts.map((ppt) => (
                <article
                      key={ppt.id}
                      className="ppt-card group relative bg-white rounded-3xl border border-slate-200 
                                shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
                    >
                      {/* Thumbnail */}
                      <div className="relative">
                        <img
                          src={ppt.thumbnail}
                          alt={ppt.title}
                          className="w-full h-[200px] object-fill rounded-t-3xl transition-all duration-500 
                                    group-hover:scale-[1.02]"
                        />



                        {/* Soft gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent 
                                        opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-3xl" />

                        {/* Tag */}
                        <span className="absolute bottom-3 left-3 text-[10px] uppercase tracking-[0.16em] 
                                        bg-[#543d98] text-white px-2 py-1 rounded-full border border-white/20">
                          {ppt.tag}
                        </span>
                      </div>

                      {/* Content */}
                      <div className="px-4 py-5 bg-white rounded-b-3xl">
                        <h2 className="text-slate-900 text-sm sm:text-base font-semibold line-clamp-2 mb-2">
                          {ppt.title}
                        </h2>

                        <p className="text-xs text-slate-500 mb-4">{ppt.meta}</p>

                        {/* Buttons */}
                        <div className="mt-auto flex items-center justify-between gap-2">
                          {/* VIEW PPT */}

<Button
  asChild
  className="w-[120px] h-[40px] group/download sm:inline-flex items-center gap-2 px-4 py-5 rounded-xl bg-[#543d98] text-white hover:bg-white hover:text-[#543d98] transition-colors duration-300 border border-[#543d98]"
>
  <a
    href={ppt.pdfUrl}
    target="_blank"
    rel="noopener noreferrer"
    download
  >
    <span className="font-bold text-sm md:text-base font-['DM_Sans'] group-hover/download:text-[#543d98] transition-colors duration-300">
       View PPT
    </span>
    <img
      src="/impulse-website/button-icon.svg"
      alt="Arrow"
      className="w-4 h-4 transition-all duration-300 
        group-hover/download:rotate-45 
        group-hover/download:brightness-1 
        group-hover/download:invert"
    />
  </a>
</Button>

                          </div>
                      </div>
              </article>

              ))}
            </section>

            {/* Load More button */}
            {visibleCount < filteredPpts.length && (
              <div className="flex justify-center mt-10">
                <Button
                  
                  onClick={() => setVisibleCount((prev) => prev + 9)}
                  className="w-[180px] h-[44px] group sm:inline-flex items-center gap-2 px-4 py-5 rounded-xl bg-[#543d98] text-white hover:bg-white hover:text-[#543d98] transition-colors duration-300 border border-[#543d98]"
                >
                  Load more PPTs
                  <img src="/impulse-website/button-icon.svg" alt="Arrow" className="w-4 h-4 transition-all duration-300 group-hover:rotate-45 group-hover:brightness-1 group-hover:invert " /> 
                </Button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

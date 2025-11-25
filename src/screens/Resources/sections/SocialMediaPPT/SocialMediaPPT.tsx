import { useMemo, useState } from "react";
import { Button } from "../../../../components/ui/button";

export const seoPpts = [
 
  {
    id: "PPT9",
    year: "2023",
    title: "Father’s Day – How brands cash in on celebrating dads",
    pdfUrl: "https://www.theimpulsedigital.com/slideshare/father%E2%80%99s-day-how-brands-cash-in-on-celebrating-dads.pdf",
    thumbnail: "/impulse-website/slideshow/ppt9.png",
    tag: "PPT",
    meta: "2023 • Presentation",
  },
 
{
  id: "PPT39",
  year: "2023",
  title: "Top 3 ways of using social media stories & Instagram Reels in marketing",
  pdfUrl: "https://www.theimpulsedigital.com/slideshare/top_3_ways_of_using_social_media_stories_and_instagram_reels_in_your_marketing_strategy.pdf",
  thumbnail: "/impulse-website/slideshow/ppt39.png",
  tag: "PPT",
    meta: "2023 • Presentation",
},
{
  id: "PPT40",
  year: "2023",
  title: "The complete guide to social listening in 2021",
  pdfUrl: "https://www.theimpulsedigital.com/slideshare/the_complete_guide_to_social_listening_in_2021.pdf",
  thumbnail: "/impulse-website/slideshow/ppt40.png",
  tag: "PPT",
    meta: "2023 • Presentation",
},

{
  id: "PPT44",
  year: "2023",
  title: "5 secrets to a great social media campaign",
  pdfUrl: "https://www.theimpulsedigital.com/slideshare/5-Secrets-to-a-Great-Social-Media-Campagin.pdf",
  thumbnail: "/impulse-website/slideshow/ppt44.png",
  tag: "PPT",
    meta: "2023 • Presentation",
},
{
  id: "PPT45",
  year: "2023",
  title: "All you need to know about social selling",
  pdfUrl: "https://www.theimpulsedigital.com/slideshare/all-you-need-to-know-about-social-selling.pdf",
  thumbnail: "/impulse-website/slideshow/ppt45.png",
  tag: "PPT",
    meta: "2023 • Presentation",
},

{
  id: "PPT49",
  year: "2023",
  title: "Top 5 things you should know about social media banter",
  pdfUrl: "https://www.theimpulsedigital.com/slideshare/top-5-things-you-should-know-about-social-media-banter.pdf",
  thumbnail: "/impulse-website/slideshow/ppt49.png",
  tag: "PPT",
    meta: "2023 • Presentation",
},

{
  id: "PPT53",
  year: "2023",
  title: "Top 5 social media marketing trends of 2021",
  pdfUrl: "https://www.theimpulsedigital.com/slideshare/catch-up-with-these-top-5-social-media-marketing-trends-of-2021.pdf",
  thumbnail: "/impulse-website/slideshow/ppt53.png",
  tag: "PPT",
    meta: "2023 • Presentation",
},

{
  id: "PPT68",
  year: "2023",
  title: "The Pinterest way of marketing your business digitally",
  pdfUrl: "https://www.theimpulsedigital.com/slideshare/the-pinterest-way-of-marketing-your-business-digitally.pdf",
  thumbnail: "/impulse-website/slideshow/ppt68.png",
  tag: "PPT",
    meta: "2023 • Presentation",
},

{
  id: "PPT70",
  year: "2023",
  title: "Have you begun discussing on Reddit yet?",
  pdfUrl: "https://www.theimpulsedigital.com/slideshare/have-you-begun-discussing-on-reddit-yet.pdf",
  thumbnail: "/impulse-website/slideshow/ppt70.png",
  tag: "PPT",
    meta: "2023 • Presentation",
},

{
  id: "PPT73",
  year: "2023",
  title: "Is Signal messenger the perfect alternative to WhatsApp?",
  pdfUrl: "https://www.theimpulsedigital.com/slideshare/is-signal-messenger-app-the-perfect-alternative-to-whatsapp-1.pdf",
  thumbnail: "/impulse-website/slideshow/ppt73.png",
  tag: "PPT",
    meta: "2023 • Presentation",
},
{
  id: "PPT72",
  year: "2023",
  title: "Social media privacy threats you need to keep an eye on in 2021",
  pdfUrl: "https://www.theimpulsedigital.com/slideshare/social-media-privacy-threats-that-you-need-to-keep-an-eye-on-in-2021.pdf",
  thumbnail: "/impulse-website/slideshow/ppt72.png",
  tag: "PPT",
    meta: "2023 • Presentation",
},
{
  id: "PPT87",
  year: "2023",
  title: "8 ways to use YouTube for business marketing",
  pdfUrl: "https://www.theimpulsedigital.com/slideshare/8-ways-how-to-use-youtube-for-business-marketing.pdf",
  thumbnail: "/impulse-website/slideshow/ppt87.png",
  tag: "PPT",
    meta: "2023 • Presentation",
},

{
  id: "PPT77",
  year: "2023",
  title: "All you need to know about the new WhatsApp Business features",
  pdfUrl: "https://www.theimpulsedigital.com/slideshare/all-you-need-to-know-about-the-new-whatsapp-business-features.pdf",
  thumbnail: "/impulse-website/slideshow/ppt77.png",
},
{
  id: "PPT78",
  year: "2023",
  title: "Social media tools that help boost festive season sales",
  pdfUrl: "https://www.theimpulsedigital.com/slideshare/social-media-tools-that-will-help-boost-sales-during-the-festive-period.pdf",
  thumbnail: "/impulse-website/slideshow/ppt78.png",
  tag: "PPT",
    meta: "2023 • Presentation",
},
{
  id: "PPT79",
  year: "2023",
  title: "Social media marketing tips to boost festive season sales",
  pdfUrl: "https://www.theimpulsedigital.com/slideshare/social-media-marketing-tips-to-boost-your-sales-during-the-festive-period.pdf",
  thumbnail: "/impulse-website/slideshow/ppt79.png",
  tag: "PPT",
    meta: "2023 • Presentation",
},

{
  id: "PPT82",
  year: "2023",
  title: "YouTube vs IGTV – Who wins?",
  pdfUrl: "https://www.theimpulsedigital.com/slideshare/youtube-vs-igtv-who-wins.pdf",
  thumbnail: "/impulse-website/slideshow/ppt82.png",
  tag: "PPT",
    meta: "2023 • Presentation",
},

{
  id: "PPT84",
  year: "2023",
  title: "How Instagram Stories help businesses",
  pdfUrl: "https://www.theimpulsedigital.com/slideshare/how-instagram-stories-help-businesses-impulse-digital.pdf",
  thumbnail: "/impulse-website/slideshow/ppt84.png",
  tag: "PPT",
    meta: "2023 • Presentation",
},


];

const years = ["all", "2023", "2022", "2021"];

export const SocialMediaPPT = (): JSX.Element => {
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
        className="px-3 py-1.5 rounded-full bg-white border border-slate-200 text-slate-700 hover:border-slate-400 hover:bg-slate-50 transition-colors">

            All PPTs
          </a>
          <a
            href="/impulse-website/resources/SocialMediaPPTS"
        className="px-3 py-1.5 rounded-full text-white font-medium bg-[#543d98]">
            Social Media PPT
          </a>
          <a
            href="/impulse-website/resources/google-ads-PPT"
            className="px-3 py-1.5 rounded-full bg-white border border-slate-200 text-slate-700 hover:border-slate-400 hover:bg-slate-50 transition-colors"
          >
            Google Ads / SEM PPT
          </a>
          <a
            href="/impulse-website/resources/content-marketing-PPT"
            className="px-3 py-1.5 rounded-full bg-white border border-slate-200 text-slate-700 hover:border-slate-400 hover:bg-slate-50 transition-colors"
          >
            Content Marketing PPT
          </a>
          <a
            href="/impulse-website/resources/employer-branding-PPT"
            className="px-3 py-1.5 rounded-full bg-white border border-slate-200 text-slate-700 hover:border-slate-400 hover:bg-slate-50 transition-colors"
          >
            Employer Branding PPT
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

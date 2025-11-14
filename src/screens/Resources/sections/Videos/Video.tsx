import { FC } from "react";

interface VideoItem {
  id: string;
  title: string;
  description: string;
  embedUrl: string;
}

export const Video: FC = () => {
  const videos: VideoItem[] = [
    {
      id: "AI-Human",
      title:
        "AI v/s Human ? Can You Guess Who Wrote It?",
      description:
        "A fun battle between human creativity and AI precision. Read, compare, and make your call — who wrote it? Want it more witty, mysterious, or agency-style?",
      embedUrl: "https://www.youtube.com/embed/IeDjGzKeDcI",
    },
    {
  id: "social-media-video",
  title: "CHECK OUT WHAT'S TRENDING IN SOCIAL MEDIA MARKETING FOR 2018!",
  description:
    "Why has Snapchat usage dropped? How will Artificial Intelligence and Augmented Reality transform digital marketing? Will paid media continue its growth over organic? What does 2018 have in store for influencer marketing and live streaming? All this and more in our latest video on Social Media Trends 2018.",
  embedUrl: "https://www.youtube.com/embed/ddYmOMNZ3P0"
    },
    {
      id: "google-penguin-4",
      title:
        "GOOGLE PENGUIN 4.0 UPDATE IS HERE! WHAT ARE THE KEY FEATURES? WATCH THE VIDEO TO KNOW MORE.",
      description:
        "Watch our compilation of the key features of Google Penguin 4.0 update and understand how it will impact your SEO.",
      embedUrl: "https://www.youtube.com/embed/KqpzrMcAHU8",
    },
    
  ];

  return (
    <section
      className="w-full bg-[#f8f9fa] py-16 lg:py-24"
      id="sec-border"
      data-section="video-gallery"
    >
      <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-left mb-12 lg:mb-16">
          <p className="[font-family:'DM_Sans',Helvetica] font-normal text-[#030019] text-lg mb-2">
            Our Video Library
          </p>
          <h2 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#543d98] text-3xl md:text-4xl lg:text-5xl mb-6">
            Insights, Trends & Digital Learnings
          </h2>
        </div>

        {/* Videos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {videos.map((video) => (
            <article
              key={video.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
            >
              {/* Video */}
              <div className="relative w-full pb-[56.25%] bg-black">
                <iframe
                  src={video.embedUrl}
                  title={video.title}
                  className="absolute inset-0 w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              {/* Content - left aligned */}
              <div className="p-6 text-left">
                <h3 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#030019] text-lg md:text-xl mb-3 leading-snug text-left">
                  {video.title}
                </h3>

                <p className="[font-family:'DM_Sans',Helvetica] font-normal text-[#666] text-sm leading-relaxed text-left">
                  {video.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

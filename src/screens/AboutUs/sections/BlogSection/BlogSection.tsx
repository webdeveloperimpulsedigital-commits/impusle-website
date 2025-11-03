import { Button } from "../../../../components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRightIcon } from "lucide-react";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface BlogPost {
  id: string;
  author: string;
  date: string;
  title: string;
  description: string;
  image: string;
  category?: string;
}

export const BlogSection = (): JSX.Element => {
  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const blogPosts: BlogPost[] = [
    {
      id: "1",
      author: "Admin",
      date: "May 7, 2025",
      title:
        "How to Rank Your Brand on ChatGPT: Our Observations About Brand Visibility",
      description:
        "India's identity deeply vests in its diversity. The country is home to vast landscapes, rich cultures, and varied regions, each of these factors greatly shaping the mindset and lifestyle of its people. These factors contribute to the study and insight identification for businesses...",
      image: "/impulse-website/project-1-jpg.png",
    },
    {
      id: "2",
      author: "Admin",
      date: "May 16, 2025",
      title:
        "Authenticity Meets Aesthetic: Exploring the Power of Minimalism in Advertising",
      description:
        "There are multiple factors responsible for driving responses to an advertisement. The visual appeal, the messaging, the timing, and the platform all play crucial roles in determining success. When minimalism is used with intent, it focuses attention on what truly matters—clarity, emotion, and recall...",
      image: "/impulse-website/project-2-jpg.png",
    },
    {
      id: "3",
      author: "Admin",
      date: "Apr 24, 2025",
      title:
        "Mind to Cart: The 2025 E-Commerce Trends Reshaping Indian Retail and Consumption Patterns",
      description:
        "India's identity deeply vests in its diversity. The country is home to vast landscapes, rich cultures, and varied regions, each of these factors greatly shaping the mindset and lifestyle of its people. These factors contribute to the study and insight identification for businesses. This year, shifts in convenience, trust, and vernacular UX are redefining discovery and conversion paths across Bharat...",
      image: "/impulse-website/project-3-jpg.png",
    },
  ];

  const BlogCard = ({ post }: { post: BlogPost }) => (
    <article
      className="card group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm
                 h-full flex flex-col basis-0 grow
                 transition-[flex-basis] duration-500 ease-in-out"
    >
      {/* Fixed-height image so the row height never changes */}
      <div className="w-full h-[46%] md:h-[50%] overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>

      {/* Content area fills the remaining space; description can scroll on hover */}
      <div className="flex-1 p-4 md:p-5 flex flex-col min-h-0 overflow-hidden">
        {/* Meta */}
        <div className="flex items-center justify-between gap-3 mb-2 shrink-0">
          <span className="[font-family:'DM_Sans',Helvetica] font-medium text-[#030019] text-xs md:text-sm">
            By {post.author}
          </span>
          <span className="[font-family:'DM_Sans',Helvetica] font-normal text-[#666] text-xs md:text-sm">
            {post.date}
          </span>
        </div>

        {/* Title */}
        <h3 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#030019] text-sm md:text-base leading-snug mb-2
                       group-hover:text-[#543d98] transition-colors line-clamp-2">
          {post.title}
        </h3>

        {/* Description — scrolls on hover to reveal full text, height stays fixed */}
        <div
          className="desc flex-1 overflow-hidden group-hover:overflow-auto pr-0 group-hover:pr-1
                     text-[#666] text-xs md:text-sm leading-relaxed"
        >
          <p className="[font-family:'DM_Sans',Helvetica] whitespace-pre-line">
            {post.description}
          </p>
        </div>

        {/* Read more */}
        <div className="mt-3 flex items-center gap-2 text-[#543d98] opacity-1 -translate-x-1
                        transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
          <span className="[font-family:'DM_Sans',Helvetica] font-semibold text-sm">
            Read More
          </span>
          <ArrowRightIcon className="w-4 h-4" />
        </div>
      </div>
    </article>
  );

  // Mobile Slider Component
  const MobileSlider = () => (
    <div className="block md:hidden px-4">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        navigation={{
          nextEl: '.blog-button-next',
          prevEl: '.blog-button-prev',
        }}
        pagination={{
          clickable: true,
          bulletClass: 'blog-pagination-bullet',
          bulletActiveClass: 'blog-pagination-bullet-active',
        }}
        className="blog-swiper"
      >
        {blogPosts.map((post) => (
          <SwiperSlide key={post.id}>
            <div className="pb-4" style={{ height: '650px' }}>
              <BlogCard post={post} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Buttons */}
      <div className="flex justify-center items-center gap-4 mt-4 pb-8">
        <button className="blog-nav-button blog-button-prev">
          <svg viewBox="0 0 24 24" fill="none">
            <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2"/>
          </svg>
        </button>
        <button className="blog-nav-button blog-button-next">
          <svg viewBox="0 0 24 24" fill="none">
            <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2"/>
          </svg>
        </button>
      </div>
    </div>
  );

  // Desktop Grid Component
  const DesktopGrid = () => (
    <div className="hidden md:block">
      {/* Row: fixed height; only width changes when a card is hovered */}
      <div className="blog-row flex gap-4 md:gap-5 md:h-[620px] overflow-hidden pt-2">
        {blogPosts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );

  return (
    <section className="bg-gray mx-auto px-4 md:px-8 lg:px-20 py-20 pt-16 pb-16" id="blog" data-section="blog">
      <div className="mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="relative mb-6 md:mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="text-left max-w-2xl">
            <p className="[font-family:'DM_Sans',Helvetica] font-normal text-[#030019] text-lg md:text-xl mb-2">
              Sharing is
            </p>
            <h2 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#543d98] text-3xl md:text-4xl lg:text-5xl mb-6">
              How We Grow Together
            </h2>
          </div>
          <div className="flex-shrink-0">
          <Button className="w-[180px] h-[44px] group sm:inline-flex items-center gap-2 px-4 py-6 bg-[#543d98] hover:bg-[#543d98]/90  rounded-xl  text-white">
                        <Link to="/contact" className="[font-family:'DM_Sans',Helvetica] font-bold text-white text-sm md:text-base">See All Articles</Link>
                        <img src="/impulse-website/button-icon.svg" alt="Arrow"
                          className="w-4 h-4 transition-transform duration-300 group-hover:rotate-45 pointer-events-none"/>
          </Button>
          </div>
        </div>

        <MobileSlider />
        <DesktopGrid />
      </div>

      {/* Width-only behavior: hovered card expands; others shrink (height unchanged) */}
      <style>{`
        .blog-row .card {
          flex: 1 1 0%;
          transition: flex-basis 0.9s ease-in-out; /* Smooth expansion */
        }
        .blog-row:has(.card:hover) .card {
          flex-basis: 22.5%;
        }
        .blog-row:has(.card:hover) .card:hover {
          flex-basis: 45%;
        }
        /* Optional: cleaner thin scrollbar on hover */
        .desc::-webkit-scrollbar {
          width: 6px;
        }
        .desc::-webkit-scrollbar-thumb {
          background: #e5e7eb;
          border-radius: 9999px;
        }
        .desc {
          scrollbar-width: thin; /* Firefox */
        }
        #blog .w-full{
        height: 280px;
        border-radius: 13px;
        }
        .blog-row .card {
            flex: 1 1 0%;
            background: #fff;
            padding: 1rem;
            height: 690px;
        }
        
        /* Mobile Swiper Styles */
        .blog-swiper {
          overflow: hidden;
          padding-bottom: 60px !important;
        }
        
        .blog-swiper .swiper-pagination {
          bottom: 20px !important;
          position: relative !important;
          text-align: center;
          margin-top: 20px;
        }
        
        .blog-pagination-bullet {
          width: 8px;
          height: 8px;
          background: rgba(84, 61, 152, 0.3);
          border-radius: 50%;
          margin: 0 4px;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .blog-pagination-bullet-active {
          background: #543d98;
          transform: scale(1.2);
        }
        
        .blog-nav-button {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          border: 1px solid #e5e7eb;
          background: white;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          color: #666;
        }
        
        .blog-nav-button:hover {
          transform: scale(1.1);
          border-color: #543d98;
          background: #543d98;
          color: white;
        }
        
        .blog-nav-button svg {
          width: 20px;
          height: 20px;
          stroke-width: 2;
        }
        
        @media (max-width: 767px) {
          .blog-swiper .swiper-pagination {
            display: none !important;
          }
          .card{
          background: #ffffff;
          padding: 0px;
          }
        }
      `}</style>
    </section>
  );
};

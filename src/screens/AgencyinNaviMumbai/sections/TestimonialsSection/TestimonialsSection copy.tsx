import React from "react";
import { Avatar, AvatarImage } from "../../../../components/ui/avatar";

interface Testimonial {
  id: string;
  name: string;
  title: string;
  company: string;
  content: string;
  avatar: string;
}

export const TestimonialsSection = (): JSX.Element => {
  const testimonialsRow1: Testimonial[] = [
    {
      id: "1",
      name: "Rahul Shah",
      title: "Director, IBM Income Mumbai",
      company: "IBM",
      content: "The team at Impulse Digital has been exceptional in managing our digital satisfaction. From starting our new website until 5 year milestone, we've got assistance from an increase our organic traffic by 300% and increased our lead generation to 150 leads monthly. In addition, their well-focused work has benefited both of our B2B websites. Indeed a team of experts who are always ready to guide and assist you. Thank you, Team Impulse!",
      avatar: "/impulse-website/rectangle-411.png"
    },
    {
      id: "2",
      name: "Riddhi Merchant",
      title: "Partner, Lajpat & Co, Mumbai",
      company: "Lajpat & Co",
      content: "We have been working with Impulse Digital team for almost 2 years. They definitely take the customer's ideas and vision of into consideration and work them out. Great team to work with, no fuss!",
      avatar: "/impulse-website/rectangle-42.png"
    },
    {
      id: "3",
      name: "Kimari Gosrani",
      title: "Director of Communication and Strategy, Goma Engineering Pvt. Ltd, Mumbai",
      company: "Goma Engineering",
      content: "What I love about the Impulse Digital team is that they are enthusiastic. They are always coming up with genuine suggestions and honest feedback to improve our processes hence ensuring noteworthy results!",
      avatar: "/impulse-website/rectangle-433.png"
    }
  ];

  const testimonialsRow2: Testimonial[] = [
    {
      id: "4",
      name: "Rajesh Phadke",
      title: "Founder, Rhodius | Dental, Pune",
      company: "Rhodius Dental",
      content: "I have been working with Impulse Digital for almost 2 years on digital marketing strategies for us. The fact working with them not for the strict timelines and the brand values. Even in Pune and they are in Mumbai, communication and it never a problem and the work gets done efficiently.",
      avatar: "/impulse-website/rectangle-44.png"
    },
    {
      id: "5",
      name: "Riya Kothari",
      title: "Growth Engineer - Marketing Sales, Vendiman, Mumbai",
      company: "Vendiman",
      content: "Working with Impulse Digital has been an absolute delight. They have a good grasp of the briefs given and their agility, innovative creativity, and professionalism concerning deadlines is what sets them apart. The transformation in our SEO, PPC, and social media management has been incredible, our ranking to the first within three months with 90% of the keywords.",
      avatar: "/impulse-website/rectangle-41.png"
    },
    {
      id: "6",
      name: "Zia Khan",
      title: "Digital Marketing Manager, Rafter Group, Mumbai",
      company: "Rafter Group",
      content: "I have been working with Impulse Digital team for almost 3 years. They have always been ready to help and find solution for any challenge. The Word 'NO' does not exist in there dictionary which is rare to find in many agencies. I wish all good luck and ETA of future to Impulse!",
      avatar: "/impulse-website/rectangle-42.png"
    },
    {
      id: "7",
      name: "Zia Khan",
      title: "Digital Marketing Manager, Rafter Group, Mumbai",
      company: "Rafter Group",
      content: "I have been working with Impulse Digital team for almost 3 years. They have always been ready to help and find solution for any challenge. The Word 'NO' does not exist in there dictionary which is rare to find in many agencies. I wish all good luck and ETA of future to Impulse!",
      avatar: "/impulse-website/rectangle-42.png"
    }
  ];

  const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => (
    <div className="flex-shrink-0 rounded-2xl p-6 shadow-sm border border-gray-100" style={{ width: '500px', marginRight: '16px', height: '280px' }}>
      <div className="flex items-center mb-4" style={{ gap: '16px' }}>
        <span style={{ width: '20%' }}>
          <img 
            className="aspect-square h-full w-full" 
            alt={testimonial.name} 
            src={testimonial.avatar}
            style={{
              width: '70px',
              borderRadius: '100%',
              height: '70px'
            }}
          />
        </span>
        <div style={{ width: '70%' }}>
          <h4 className="[font-family:'DM_Sans',Helvetica] font-semibold text-[#030019] text-base leading-tight">
            {testimonial.name}
          </h4>
          <p className="[font-family:'DM_Sans',Helvetica] font-normal text-[#666] text-sm leading-tight mt-1">
            {testimonial.title}
          </p>
        </div>
        <div style={{ width: '10%' }}>
          <img src="/impulse-website/Vector 1.png" alt="Quote icon" />
        </div>
      </div>
      <p className="[font-family:'DM_Sans',Helvetica] font-normal text-[#030019] text-sm leading-relaxed">
        {testimonial.content}
      </p>
    </div>
  );

  return (
    <section className="relative w-full bg-[#ffffff] py-16 overflow-hidden pb-16" data-section="testimonials">
      {/* Header */}
      <div className="max-w-[1280px] mx-auto px-4 md:px-8 mb-12 mb-16">
        <div className="relative">
          <div className="text-center mx-auto">
            <p className="[font-family:'DM_Sans',Helvetica] font-normal text-[#030019] text-lg mb-2 testi-subtitle">
              Testimonial
            </p>
            <h2 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#543d98] text-4xl md:text-5xl mb-6 testi-title">
              Real Client Stories
            </h2>
            <p className="[font-family:'DM_Sans',Helvetica] font-normal text-[#030019] text-base leading-relaxed mx-auto testi-subtext">
              You've heard our side of the story. Only fair you hear our client's too. The truth is we have not worked for 
              them. Instead, we have worked with them—to create stories that audiences recall, campaigns they've 
              loved, and impact that can be measured. Here's to their stories in their words.
            </p>
          </div>
        </div>
      </div>

      {/* First Row - Scroll Left to Right */}
      <div className="relative mb-8">
        <div className="scroller" data-direction="right" style={{ ['--duration' as any]: '36s' }}>
          <div className="scroller__inner">
            {/* Track 1 */}
            {testimonialsRow1.map((t) => (
              <div className="px-2 md:px-2" key={`r1-${t.id}`}>
                <TestimonialCard testimonial={t} />
              </div>
            ))}
            {/* Track 2 (duplicate) */}
            {testimonialsRow1.map((t) => (
              <div className="px-2 md:px-2" key={`r1b-${t.id}`} aria-hidden>
                <TestimonialCard testimonial={t} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Second Row - Scroll Right to Left */}
      <div className="relative mb-8">
        <div className="scroller" data-direction="left" style={{ ['--duration' as any]: '38s' }}>
          <div className="scroller__inner">
            {/* Track 1 */}
            {testimonialsRow2.map((t) => (
              <div className="px-2 md:px-2" key={`r2-${t.id}`}>
                <TestimonialCard testimonial={t} />
              </div>
            ))}
            {/* Track 2 (duplicate) */}
            {testimonialsRow2.map((t) => (
              <div className="px-2 md:px-2" key={`r2b-${t.id}`} aria-hidden>
                <TestimonialCard testimonial={t} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
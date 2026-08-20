"use client";

import { Quote } from "lucide-react";

interface TestimonialItem {
  quote: string;
  author: string;
  role: string;
  location: string;
}

export default function Testimonials() {
  const reviews: TestimonialItem[] = [
    {
      quote: "Moving apartments used to mean buying new furniture. With BRIK, I just rebuilt what I already had. I converted my corner sofa into a two-seater sofa and side desk to fit my new layout.",
      author: "Maya R.",
      role: "Architectural Designer",
      location: "Brooklyn, NY"
    },
    {
      quote: "It feels less like furniture and more like a system for living. The build quality is incredibly solid, and snapping the magnetic connection pins feels satisfying. There is no wobbling.",
      author: "Daniel K.",
      role: "Product Designer",
      location: "San Francisco, CA"
    },
    {
      quote: "We changed our setup in an afternoon. When our family expanded, we just ordered two extra seats and snap-connected them to our existingsectional. Evolving furniture is a game-changer.",
      author: "Sofia M.",
      role: "Creative Director",
      location: "Austin, TX"
    }
  ];

  return (
    <section id="reviews" className="py-24 md:py-32 bg-brand-stone border-b border-brand-border/60 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="max-w-2xl mb-20">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-brand-accent block mb-3">
            VERIFIED EXPERIENCES
          </span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-brand-dark mb-4">
            PEOPLE ARE REBUILDING HOME.
          </h2>
          <p className="text-brand-muted text-base md:text-lg font-light leading-relaxed">
            Real feedback from architects, designers, and creatives who reimagined their living spaces with the BRIK system.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {reviews.map((rev, index) => (
            <div 
              key={index} 
              className="bg-brand-bg border border-brand-border/50 rounded-sm p-8 flex flex-col justify-between hover:border-brand-dark transition-all duration-300 relative"
            >
              {/* Quote Icon */}
              <div className="mb-8">
                <Quote className="w-8 h-8 text-brand-accent opacity-20" />
              </div>

              {/* Quote text */}
              <blockquote className="text-brand-dark text-lg font-light italic leading-relaxed mb-8 flex-grow">
                "{rev.quote}"
              </blockquote>

              {/* Author detail info */}
              <div className="border-t border-brand-border/60 pt-4 flex flex-col">
                <cite className="not-italic text-base font-bold text-brand-dark mb-0.5">
                  {rev.author}
                </cite>
                <span className="text-xs text-brand-muted font-medium">
                  {rev.role}
                </span>
                <span className="text-[10px] text-brand-accent font-mono tracking-wider mt-1">
                  {rev.location.toUpperCase()}
                </span>
              </div>

              {/* Top Tech Border Indicator */}
              <div className="absolute top-0 right-8 transform -translate-y-1/2 bg-brand-stone px-2 py-0.5 border border-brand-border text-[8px] font-mono text-brand-muted">
                VERIFIED // BRK_REV_0{index + 1}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

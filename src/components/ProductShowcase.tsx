"use client";

import Image from "next/image";

interface ShowcaseItem {
  title: string;
  subtitle: string;
  description: string;
  imageSrc: string;
  configCode: string;
}

export default function ProductShowcase() {
  const items: ShowcaseItem[] = [
    {
      title: "Small Apartment",
      subtitle: "Compact Modular Sofa",
      description: "Maximizing limited floor plans with smart, dual-purpose design. Recombines from a two-seater sofa to a chaise lounge in minutes.",
      imageSrc: "/brik_small_apartment.jpg",
      configCode: "CONFIG // BRK-APT-02"
    },
    {
      title: "Creative Studio",
      subtitle: "Sofa + Integrated Workspace",
      description: "Designed for hybrid working. Merge office desks and lounge modules into a singular, fluid architectural workspace.",
      imageSrc: "/brik_creative_studio.jpg",
      configCode: "CONFIG // BRK-STD-04"
    },
    {
      title: "Family Living",
      subtitle: "Large Configurable Sectional",
      description: "Make room for everyone. Easily expand your layout as your household grows by adding additional base and cushion modules.",
      imageSrc: "/brik_family_living.jpg",
      configCode: "CONFIG // BRK-FAM-07"
    }
  ];

  return (
    <section id="products" className="py-24 md:py-32 bg-brand-bg scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-brand-border/60 pb-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-brand-accent block mb-3">
              LIFESTYLE INSPIRATION
            </span>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-brand-dark">
              YOUR SPACE. YOUR RULES.
            </h2>
          </div>
          <p className="text-brand-muted text-base md:text-lg max-w-sm mt-4 md:mt-0 font-light leading-relaxed">
            The same system, tailored to three completely different lifestyles. Observe how one concept fits any room.
          </p>
        </div>

        {/* Big Editorial Showcases */}
        <div className="space-y-24">
          {items.map((item, index) => (
            <div 
              key={index} 
              className={`flex flex-col lg:flex-row gap-10 lg:gap-16 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              
              {/* Image Box */}
              <div className="w-full lg:w-[60%] aspect-[3/2] relative rounded-sm overflow-hidden border border-brand-border bg-brand-stone group shadow-sm hover:shadow-md transition-shadow duration-500">
                <Image
                  src={item.imageSrc}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-[1.5s] ease-out-quint group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  loading="lazy"
                />
                
                {/* Visual Technical Overlay */}
                <div className="absolute top-4 left-4 bg-brand-dark/80 text-brand-bg text-[9px] font-mono px-3 py-1.5 rounded-xs tracking-wider z-10">
                  {item.configCode}
                </div>
              </div>

              {/* Text details */}
              <div className="w-full lg:w-[40%] flex flex-col justify-center">
                <span className="text-[10px] font-mono font-bold text-brand-accent tracking-[0.2em] mb-3 uppercase">
                  SCENARIO 0{index + 1}
                </span>
                
                <h3 className="text-3xl font-black text-brand-dark tracking-tight mb-2 uppercase">
                  {item.title}
                </h3>
                
                <h4 className="text-sm font-semibold text-brand-muted uppercase tracking-wider mb-6">
                  {item.subtitle}
                </h4>

                <div className="w-12 h-[1px] bg-brand-accent mb-6" />

                <p className="text-brand-muted text-base font-light leading-relaxed mb-8">
                  {item.description}
                </p>

                {/* Technical Bullet points */}
                <div className="grid grid-cols-2 gap-4 text-xs font-semibold text-brand-muted/80 border-t border-brand-border/60 pt-6">
                  <div>
                    <span className="block text-[9px] text-brand-muted/60 uppercase">ADAPTABILITY:</span>
                    <span className="text-brand-dark">MAXIMUM</span>
                  </div>
                  <div>
                    <span className="block text-[9px] text-brand-muted/60 uppercase">ASSEMBLY TIME:</span>
                    <span className="text-brand-dark font-mono">10 MINS</span>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

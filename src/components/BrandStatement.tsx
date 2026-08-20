"use client";

import { useEffect, useRef, useState } from "react";

export default function BrandStatement() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="bg-brand-stone py-24 md:py-36 border-y border-brand-border/60 overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-6 md:px-12 text-center flex flex-col items-center">
        {/* Large Statement */}
        <h2 
          className={`text-4xl md:text-6xl font-light tracking-tight text-brand-dark max-w-4xl leading-tight mb-8 transition-all duration-[1000ms] ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Furniture shouldn't be <span className="font-extrabold italic text-brand-accent">fixed</span>.
        </h2>

        {/* Supporting text */}
        <p 
          className={`text-lg md:text-2xl text-brand-muted font-light leading-relaxed max-w-3xl transition-all duration-[1000ms] delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Your home changes. Your work changes. Your family changes. Your furniture should be designed to change with you—modular blocks that expand or recombine at your command.
        </p>

        {/* Small graphical layout details */}
        <div 
          className={`mt-12 flex items-center justify-center gap-2 transition-all duration-[1000ms] delay-500 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          <span className="w-8 h-[1px] bg-brand-border" />
          <div className="w-1.5 h-1.5 rounded-full bg-brand-accent/50" />
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-muted px-2">
            BRIK ARCHITECTURE
          </span>
          <div className="w-1.5 h-1.5 rounded-full bg-brand-accent/50" />
          <span className="w-8 h-[1px] bg-brand-border" />
        </div>
      </div>
    </section>
  );
}

"use client";

export default function ProductDetailStrip() {
  const items = [
    { num: "01", text: "Premium Materials" },
    { num: "02", text: "Tool-Free Assembly" },
    { num: "03", text: "Modular Architecture" },
    { num: "04", text: "Expandable System" }
  ];

  // Double the items to make it scroll seamlessly
  const scrollItems = [...items, ...items, ...items, ...items];

  return (
    <div className="w-full bg-brand-dark py-6 overflow-hidden border-y border-brand-border/20 flex items-center pointer-events-none">
      <div className="flex whitespace-nowrap animate-ticker">
        {scrollItems.map((item, index) => (
          <div 
            key={index}
            className="flex items-center text-brand-bg uppercase tracking-[0.25em] font-bold text-xs sm:text-sm mx-10 sm:mx-16"
          >
            <span className="text-brand-accent font-mono mr-3 text-sm sm:text-base font-black">
              {item.num}
            </span>
            <span className="opacity-80">
              {item.text}
            </span>
            <span className="ml-10 sm:ml-16 w-2 h-2 bg-brand-accent/40 rounded-full" />
          </div>
        ))}
      </div>
    </div>
  );
}

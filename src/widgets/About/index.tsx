'use client';

import ScrollHighlightText from '@/components/ui/scroll/ScrollHighlightText';

export default function About() {
  return (
    <section
      className="
        relative
        
        px-[6vw]
        py-[12vw] md:py-[10vw] lg:py-[8vw]
      "
    >
      {/* ===== Small Tagline ===== */}
      <p
        className="
    mb-[4vw]
    text-center
    text-[7vw] uppercase tracking-[0.35em]
    text-gray-500 dark:text-gray-400
    md:text-[3vw]
    lg:text-[1.8vw]
  "
      >
        BUILT ON STRATEGY. DRIVEN BY TRUST.
      </p>

      {/* ===== Main Scroll Text ===== */}
      <ScrollHighlightText
        text="The story of Pie Tech Solutions begins with trust. We believe in partnering with ambitious brands, building meaningful digital experiences, and delivering technology that drives real growth."
        className="
          mx-auto max-w-[1100px]
          text-center
          font-serif
          text-[6vw]
          leading-[1.2]
          text-gray-400 dark:text-gray-600
          md:text-[4vw]
          lg:text-[3vw]
        "
      />
    </section>
  );
}

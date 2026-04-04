'use client';

import ScrollHighlightText from '@/components/ui/scroll/ScrollHighlightText';

export default function About() {
  return (
    <section
      className="
        relative
        border-t
        border-gray-200 dark:border-white/10
        px-[6vw]
        py-[12vw] md:py-[10vw]
        bg-white dark:bg-bg-1
      "
    >
      {/* SMALL TAGLINE */}
      <p
        className="
          mb-[4vw]
          text-center
          text-[3.9vw] md:text-[2.4vw] lg:text-[4.4vw]
          tracking-[0.4em]
          uppercase
          text-gray-500 dark:text-gray-400
        "
      >
        BUILT ON STRATEGY. DRIVEN BY TRUST.
      </p>

      {/* MAIN SCROLL TEXT */}
      <ScrollHighlightText
        text={`
        The story of Pie Tech Solutions begins with trust.
        We believe in partnering with ambitious brands,
        building meaningful digital experiences,
        and delivering technology that drives real growth.
        `}
        className="
          font-serif
          text-center
          text-[6vw] md:text-[4.5vw] lg:text-[5.4vw]
          leading-[1.2]
          text-gray-600 dark:text-gray-500
        "
        highlightColor="text-black dark:text-white"
      />
    </section>
  );
}
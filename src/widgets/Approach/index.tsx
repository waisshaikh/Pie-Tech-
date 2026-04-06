'use client';

import { FC } from 'react';

import HoverCards from '@/components/ui/HoverCards';
import SectionOpacity from '@/components/ui/SectionOpacity';
import SectionTitle from '@/components/ui/SectionTitle';

import { APPROACH_CARDS } from '@/data';

interface Props {}

const Approach: FC<Props> = () => {
  return (
    <section
      id="approach"
      className="
        border-t
        border-gray-200 dark:border-gray-1
        bg-white dark:bg-bg-1
        py-[10vw] md:py-[8vw]
        pb-[14vw] md:pb-[10vw]
      "
    >
      <SectionOpacity>
        {/* SECTION TITLE */}
        <SectionTitle
          title="APPROACH."
          className="
            px-[6vw] md:px-[3vw]
            pt-[2.5vw]
            top-0
            z-20
            
          "
        />

        {/* CARDS */}
        <div className="px-[6vw] md:px-[3vw] pt-[2.5vw]">
          <HoverCards cards={APPROACH_CARDS} />
        </div>
      </SectionOpacity>
    </section>
  );
};

export default Approach;
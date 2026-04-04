'use client';

import clsx from 'clsx';
import {
  motion,
  useScroll,
  useTransform,
  MotionValue,
} from 'framer-motion';
import { useRef } from 'react';

interface Props {
  text: string;
  className?: string;
  highlightColor?: string;
}

export default function ScrollHighlightText({
  text,
  className,
  highlightColor = 'text-white',
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const words = text.trim().split(' ');

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.2'],
  });

  return (
    <div ref={ref} className="max-w-[1100px] mx-auto">
      <p
        className={clsx(
          'flex flex-wrap justify-center gap-x-2 leading-[1.35]',
          className
        )}
      >
        {words.map((word, index) => (
          <Word
            key={index}
            word={word}
            index={index}
            total={words.length}
            scrollYProgress={scrollYProgress}
            highlightColor={highlightColor}
          />
        ))}
      </p>
    </div>
  );
}

/* --------------------------------------------
   Child Component (HOOKS ARE VALID HERE)
--------------------------------------------- */

interface WordProps {
  word: string;
  index: number;
  total: number;
  scrollYProgress: MotionValue<number>;
  highlightColor: string;
}

function Word({
  word,
  index,
  total,
  scrollYProgress,
  highlightColor,
}: WordProps) {
  const start = index / total;
  const end = start + 1 / total;

  const opacity = useTransform(
    scrollYProgress,
    [start, end],
    [0.25, 1]
  );

  return (
    <motion.span
      style={{ opacity }}
      className={clsx(
        'transition-colors duration-200',
        highlightColor
      )}
    >
      {word}
    </motion.span>
  );
}

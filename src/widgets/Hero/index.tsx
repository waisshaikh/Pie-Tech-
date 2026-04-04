





'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';

import useFloatingImages from '@/composables/useFloatingImages';
import { main_1, main_2, main_3 } from './images';

const Hero = () => {
  const ref1 = useRef<HTMLDivElement | null>(null);
  const ref2 = useRef<HTMLDivElement | null>(null);
  const ref3 = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLElement | null>(null);

  const { manageMouseMove } = useFloatingImages(ref1, ref2, ref3);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const textOpacity = useTransform(scrollYProgress, [0, 0.35], [1, 0]);
  const textScale = useTransform(scrollYProgress, [0, 0.35], [1, 0.95]);
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '12%']);

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative h-screen md:h-[85vh] overflow-hidden bg-gradient-to-b"
    >
      {/* ================= CONTENT ================= */}
      <div
        onMouseMove={(e) => manageMouseMove(e)}
        className="relative z-20 flex h-full w-full flex-col items-center justify-center px-[6vw] text-center"
      >
        <motion.div
          style={{ opacity: textOpacity, scale: textScale }}
          className="flex max-w-[1100px] flex-col items-center"
        >
          {/* ========= AGENCY NAME ========= */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-[1.2vw] flex items-center gap-[0.8vw] md:mb-[3vw]"
          >
            <span className="h-[2px] w-[3vw] bg-text-1/40" />

            <span className="text-[1.1vw] font-semibold uppercase tracking-[0.35em] text-text-1/80 md:text-[3vw]">
              Pie
            </span>

            <span
              className="bg-gradient-to-r from-[#b08968] via-[#ddb892] to-[#b08968]
              bg-clip-text text-[1.3vw] font-extrabold tracking-wider text-transparent
              drop-shadow-md md:text-[3.4vw]"
            >
              Tech Solutions
            </span>

            <span className="h-[2px] w-[3vw] bg-text-1/40" />
          </motion.div>

          {/* ========= MAIN HEADING ========= */}
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="text-[4.5vw] font-extrabold leading-[1.15] text-text-1 md:text-[7vw]"
          >
            Building Digital Growth
            <br />
            For Modern Brands
          </motion.h1>

          {/* ========= SUB HEADING ========= */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mt-[1.8vw] text-[1.4vw] font-medium leading-[1.6] text-text-1/75
              md:mt-[3vw] md:text-[3.2vw]"
          >
            We help businesses grow with{' '}
            <span className="font-semibold">Digital Marketing</span>,{' '}
            <span className="font-semibold">Web & App Development</span>, and{' '}
            <span className="font-semibold">Creative Solutions</span> that convert.
          </motion.p>

          {/* ========= CTA BUTTONS ========= */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-[3vw] flex gap-[1.5vw] md:mt-[6vw] md:gap-[3vw]"
          >
            <Link href="/contact">
              <button
                className="rounded-full bg-text-1 px-[2.5vw] py-[1vw]
                text-[1.1vw] font-semibold text-black transition hover:scale-105
                md:px-[6vw] md:py-[2.5vw] md:text-[3vw]"
              >
                Get Free Consultation
              </button>
            </Link>

            <Link href="/services">
              <button
                className="rounded-full border border-text-1/30 px-[2.5vw] py-[1vw]
                text-[1.1vw] font-semibold text-text-1 transition hover:bg-text-1/10
                md:px-[6vw] md:py-[2.5vw] md:text-[3vw]"
              >
                View Services
              </button>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* ================= FLOATING BACKGROUND IMAGES ================= */}
      <motion.div ref={ref1} style={{ y: imageY }} className="absolute inset-0 z-[5]">
        <Image src={main_1} fill priority alt="digital marketing agency" className="object-cover" />
      </motion.div>

      <motion.div ref={ref2} style={{ y: imageY }} className="absolute inset-0 z-[3]">
        <Image src={main_2} fill alt="creative development" className="object-cover" />
      </motion.div>

      <motion.div ref={ref3} style={{ y: imageY }} className="absolute inset-0 z-[1]">
        <Image src={main_3} fill alt="technology solutions" className="object-cover" />
      </motion.div>

      {/* ================= OVERLAY ================= */}
      <div className="pointer-events-none absolute inset-0 z-[15] bg-black/40" />
    </section>
  );
};

export default Hero;







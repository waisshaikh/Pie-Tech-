



'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

import { main_1 } from './images';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden"
    >
      {/* ===== Background Image ===== */}
      <div className="absolute inset-0 z-0">
        <Image
          src={main_1}
          fill
          priority
          alt="digital marketing agency"
          className="object-cover"
          quality={85}
        />
      </div>

      {/* ===== Dark Overlay ===== */}
      <div className="absolute inset-0 z-10 bg-black/50" />

      {/* ===== Main Content ===== */}
      <div className="relative z-20 flex min-h-screen flex-col items-center justify-center px-6 text-center md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-5xl"
        >
          {/* Agency Name */}
          <div className="mb-6 flex items-center justify-center gap-3 md:mb-8">
            <span className="h-[2px] w-10 bg-white/40" />

            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-white/80 md:text-lg">
              Pie
            </span>

            <span className="bg-gradient-to-r from-[#b08968] via-[#ddb892] to-[#b08968] bg-clip-text text-lg font-extrabold tracking-wide text-transparent md:text-2xl">
              Tech Solutions
            </span>

            <span className="h-[2px] w-10 bg-white/40" />
          </div>

          {/* Heading */}
          <h1 className="text-4xl font-extrabold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Building Digital Growth
            <br />
            For Modern Brands
          </h1>

          {/* Subheading */}
          <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-white/80 sm:text-lg md:text-xl">
            We help businesses grow with{' '}
            <span className="font-semibold text-white">Digital Marketing</span>,{' '}
            <span className="font-semibold text-white">Web & App Development</span>, and{' '}
            <span className="font-semibold text-white">Creative Solutions</span> that convert.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="rounded-full bg-white px-8 py-3 text-sm font-semibold text-black transition-transform duration-300 hover:scale-105 md:px-10 md:py-4 md:text-base"
            >
              Get Free Consultation
            </Link>

            <Link
              href="/services"
              className="rounded-full border border-white/40 px-8 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-white/10 md:px-10 md:py-4 md:text-base"
            >
              View Services
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;


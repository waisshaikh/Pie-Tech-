'use client';

import { motion } from 'framer-motion';
import { Code2, Lightbulb, PenTool, Rocket, ShieldCheck, Star, TrendingUp, Zap } from 'lucide-react';
import Link from 'next/link';

/* ================= ANIMATION ================= */

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

/* ================= STEPS DATA ================= */

const STEPS = [
  {
    step: 'Step 01',
    title: 'Discovery & Strategy',
    icon: <Lightbulb />,
    desc: 'We begin by understanding your business model, goals, target audience, and competitors to build a strong strategic foundation.',
  },
  {
    step: 'Step 02',
    title: 'Design & Planning',
    icon: <PenTool />,
    desc: 'We craft intuitive user experiences and visually appealing designs while planning scalable and efficient system architecture.',
  },
  {
    step: 'Step 03',
    title: 'Development & Execution',
    icon: <Code2 />,
    desc: 'Our team develops high-performance digital solutions using modern technologies.',
  },
  {
    step: 'Step 04',
    title: 'Launch & Growth',
    icon: <TrendingUp />,
    desc: 'After launch, we continuously monitor, analyze, and optimize your product to scale your business.',
  },
];

/* ================= PAGE ================= */

export default function ApproachPage() {
  return (
    <section className="relative overflow-hidden bg-white dark:bg-black">
      {/* ===== BACKGROUND DECOR ===== */}
      <div className="absolute inset-0 -z-10 opacity-20 blur-3xl">
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-orange-400" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-amber-400" />
      </div>

      {/* ===== CONTAINER ===== */}
      <div className="mx-auto max-w-7xl px-4 pb-20 pt-24 sm:px-6 lg:px-8">
        {/* ===== HERO ===== */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6 }}
          className="mb-16 max-w-3xl"
        >
          {/* HEADING */}
          <h1 className="mb-6 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl md:text-5xl lg:text-6xl">
            Our Proven Approach to{' '}
            <span className="bg-gradient-to-r from-orange-500 to-amber-400 bg-clip-text text-transparent">
              Build & Scale Digital Products
            </span>
          </h1>

          {/* DESCRIPTION */}
          <p className="text-base text-gray-600 dark:text-gray-400 sm:text-lg md:text-xl">
            We combine strategy, design, and cutting-edge technology to create high-performance digital solutions that
            drive real business growth.
          </p>

          {/* BUTTONS */}
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="/contact"
              className="rounded-full bg-orange-500 px-6 py-3 text-center font-semibold text-white transition hover:scale-105 hover:bg-orange-600"
            >
              🚀 Get Free Consultation
            </a>

            <a
              href="/services"
              className="rounded-full border border-gray-300 px-6 py-3 text-center font-semibold text-black transition hover:bg-black hover:text-white dark:text-white dark:hover:bg-white dark:hover:text-black"
            >
              Explore Services
            </a>
          </div>
        </motion.div>

        {/* ===== STEPS GRID ===== */}
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {STEPS.map((step, i) => (
            <motion.div
              key={step.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8, scale: 1.03 }}
              className="group relative flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm backdrop-blur-lg transition-all duration-300 hover:shadow-2xl dark:border-white/10 dark:bg-white/5"
            >
              {/* GLOW EFFECT */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-orange-500/10 to-amber-400/10 opacity-0 transition group-hover:opacity-100" />

              {/* STEP NUMBER */}
              <div className="absolute right-5 top-5 text-4xl font-extrabold text-gray-200 dark:text-white/10">
                {String(i + 1).padStart(2, '0')}
              </div>

              {/* CONTENT */}
              <div className="relative z-10 flex flex-1 flex-col">
                {/* STEP LABEL */}
                <span className="text-xs font-medium text-gray-500 dark:text-gray-400">{step.step}</span>

                {/* ICON */}
                <div className="my-4 text-2xl text-orange-500">{step.icon}</div>

                {/* TITLE */}
                <h3 className="mb-3 text-lg font-semibold text-black dark:text-white sm:text-xl">{step.title}</h3>

                {/* DESC */}
                <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400 sm:text-base">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ===== CTA ===== */}

      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative  sm:mt-24 lg:mt-10"
      >
        {/* BACKGROUND GLOW */}
        <div className="absolute inset-0 -z-10 opacity-30 blur-3xl">
          <div className="absolute left-0 top-0 h-64 w-64 rounded-full bg-orange-400" />
          <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-amber-400" />
        </div>

        {/* MAIN BOX */}
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-orange-500 via-orange-400 to-amber-400 p-8 text-center shadow-xl sm:p-10 md:p-12 lg:p-14">
            {/* OVERLAY PATTERN */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,white,transparent)] opacity-10" />

            {/* CONTENT */}
            <div className="relative z-10">
              {/* HEADING */}
              <h3 className="text-xl font-bold leading-tight text-black sm:text-2xl md:text-3xl lg:text-4xl">
                Let’s Turn Your Idea Into a{' '}
                <span className="underline decoration-black/30">High-Growth Business 🚀</span>
              </h3>

              {/* DESCRIPTION */}
              <p className="mx-auto mt-4 max-w-2xl text-sm text-black/90 sm:text-base md:text-lg">
                Partner with a team focused on strategy, execution, and measurable results. We help you build, launch,
                and scale digital products that actually grow your business.
              </p>

              {/* BUTTONS */}
              <div className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link
                  href="/contact"
                  className="rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition hover:scale-105 hover:bg-black/90 sm:px-8 sm:py-3.5 sm:text-base"
                >
                  🚀 Get Free Consultation
                </Link>

                <Link
                  href="/services"
                  className="rounded-full border border-black px-6 py-3 text-sm font-semibold text-black transition hover:bg-black hover:text-white sm:px-8 sm:py-3.5 sm:text-base"
                >
                  Explore Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* ===== AFTER CTA (IMPORTANT) ===== */}

      <section className="mt-16 sm:mt-20 lg:mt-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          {/* GRID */}
          <div className="grid items-center gap-8 md:grid-cols-2">
            {/* LEFT CONTENT */}
            <div>
              <h4 className="text-2xl font-bold text-black dark:text-white sm:text-3xl">Why Our Approach Works 🚀</h4>

              <p className="mt-4 text-gray-600 dark:text-gray-400 sm:text-lg">
                We don’t just build products — we build scalable solutions that drive real business growth. Our process
                ensures clarity, speed, and long-term success.
              </p>

              {/* POINTS */}
              <ul className="mt-6 space-y-3 text-gray-700 dark:text-gray-300">
                <li>✅ Strategy-first execution</li>
                <li>✅ User-focused design</li>
                <li>✅ Scalable & high-performance development</li>
                <li>✅ Continuous improvement & growth</li>
              </ul>
            </div>

            {/* RIGHT CARD */}
            <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm backdrop-blur-md dark:border-white/10 dark:bg-white/5">
              <h5 className="text-xl font-semibold text-black dark:text-white">Ready to Build Something Great?</h5>
              <p className="mt-3 text-gray-600 dark:text-gray-400">
                Let’s collaborate and turn your idea into a high-performing digital product.
              </p>
              {/* BUTTONS */}
              import Link from "next/link";
              <div className="mt-6 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/contact"
                  className="rounded-full bg-orange-500 px-6 py-3 text-center font-semibold text-white transition hover:scale-105 hover:bg-orange-600"
                >
                  🚀 Get Free Consultation
                </Link>

                <Link
                  href="/services"
                  className="rounded-full border border-gray-300 px-6 py-3 text-center font-semibold text-black transition hover:bg-black hover:text-white dark:text-white"
                >
                  Explore Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="relative mt-20 sm:mt-24 lg:mt-28">
        {/* BACKGROUND GLOW */}
        <div className="absolute inset-0 -z-10 opacity-20 blur-3xl">
          <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-orange-400" />
          <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-amber-400" />
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* HEADER */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mx-auto mb-14 max-w-3xl text-center"
          >
            <h2 className="text-2xl font-bold text-black dark:text-white sm:text-3xl md:text-4xl">
              Results You Can Expect from{' '}
              <span className="bg-gradient-to-r from-orange-500 to-amber-400 bg-clip-text text-transparent">
                Pie Tech Solutions
              </span>
            </h2>

            <p className="mt-4 text-gray-600 dark:text-gray-400 sm:text-lg">
              Our approach is focused on delivering measurable outcomes that help your business grow faster, smarter,
              and stronger.
            </p>
          </motion.div>

          {/* GRID */}
          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: <Rocket className="text-orange-500" />,
                title: 'Faster Time to Market',
                desc: 'Launch your product quickly with our streamlined development and agile execution process.',
              },
              {
                icon: <TrendingUp className="text-amber-500" />,
                title: 'Increased Business Growth',
                desc: 'We build solutions focused on conversions, helping you grow users, revenue, and engagement.',
              },
              {
                icon: <Zap className="text-orange-500" />,
                title: 'High Performance',
                desc: 'Optimized applications that deliver lightning-fast performance across all devices.',
              },
              {
                icon: <ShieldCheck className="text-amber-500" />,
                title: 'Secure & Scalable',
                desc: 'Robust architecture that ensures security, reliability, and future scalability.',
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -8, scale: 1.03 }}
                className="group relative rounded-2xl border border-gray-200 bg-white p-6 shadow-sm backdrop-blur-lg transition-all duration-300 hover:shadow-2xl dark:border-white/10 dark:bg-white/5"
              >
                {/* ICON */}
                <div className="mb-4 text-3xl">{item.icon}</div>

                {/* TITLE */}
                <h3 className="mb-2 text-lg font-semibold text-black dark:text-white">{item.title}</h3>

                {/* DESC */}
                <p className="text-sm text-gray-600 dark:text-gray-400">{item.desc}</p>

                {/* HOVER GLOW */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-orange-500/10 to-amber-400/10 opacity-0 transition group-hover:opacity-100" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* ===== TESTIMONIALS ===== */}

      <section className="relative mt-20 overflow-hidden sm:mt-24 lg:mt-28">
        {/* BACKGROUND GLOW */}
        <div className="absolute inset-0 -z-10 opacity-30 blur-3xl">
          <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-orange-400" />
          <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-amber-400" />
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* HEADER */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mx-auto mb-12 max-w-3xl text-center"
          >
            <h2 className="text-2xl font-bold text-black dark:text-white sm:text-3xl md:text-4xl lg:text-5xl">
              What Our Clients Say about{' '}
              <span className="bg-gradient-to-r from-orange-500 to-amber-400 bg-clip-text text-transparent">
                Pie Tech Solutions
              </span>
            </h2>

            <p className="mt-4 text-sm text-gray-600 dark:text-gray-400 sm:text-base md:text-lg">
              Real feedback from clients who trusted us to build and scale their digital products.
            </p>
          </motion.div>

          {/* GRID */}
          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: 'Rahul Sharma',
                role: 'Startup Founder',
                feedback:
                  'Pie Tech Solutions transformed our idea into a powerful product. Their process is smooth and highly professional.',
              },
              {
                name: 'Anjali Mehta',
                role: 'Business Owner',
                feedback:
                  'Amazing experience! The team delivered exactly what we needed, and the performance exceeded expectations.',
              },
              {
                name: 'Vikram Patel',
                role: 'Product Manager',
                feedback:
                  'Their approach is strategic and results-driven. We saw real growth after launching our platform.',
              },
            ].map((item, i) => (
              <motion.div
                key={item.name}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative flex flex-col rounded-2xl border border-gray-200 bg-white/80 p-6 shadow-sm backdrop-blur-md transition-all duration-300 hover:shadow-2xl dark:border-white/10 dark:bg-white/5"
              >
                {/* STARS */}
                <div className="mb-3 flex gap-1 text-yellow-500">
                  {Array(5)
                    .fill(0)
                    .map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" />
                    ))}
                </div>

                {/* FEEDBACK */}
                <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400 sm:text-base">
                  “{item.feedback}”
                </p>

                {/* USER */}
                <div className="mt-6">
                  <h4 className="text-sm font-semibold text-black dark:text-white">{item.name}</h4>
                  <span className="text-xs text-gray-500 dark:text-gray-400">{item.role}</span>
                </div>

                {/* HOVER GLOW */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-orange-500/10 to-amber-400/10 opacity-0 transition group-hover:opacity-100" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* ===== FINAL CTA ===== */}
      <section className="relative  overflow-hidden sm:mt-24 lg:mt-10 mb-20">
        {/* BACKGROUND GLOW */}
        <div className="absolute inset-0 -z-10 opacity-30 blur-3xl">
          <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-orange-400" />
          <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-amber-400" />
        </div>

        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          {/* CARD */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-orange-500 via-orange-400 to-amber-400 p-8 text-center shadow-2xl sm:p-10 md:p-12 lg:p-14"
          >
            {/* OVERLAY */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,white,transparent)] opacity-10" />

            <div className="relative z-10">
              {/* HEADING */}
              <h2 className="text-xl font-bold leading-tight text-black sm:text-2xl md:text-3xl lg:text-4xl">
                Ready to Build Your Next Big Product? 🚀
              </h2>

              {/* TEXT */}
              <p className="mx-auto mt-4 max-w-2xl text-sm text-black/90 sm:text-base md:text-lg">
                Partner with <span className="font-semibold">Pie Tech Solutions</span> to turn your ideas into powerful,
                scalable digital products that drive real business growth.
              </p>

              {/* BUTTONS */}
              <div className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link
                  href="/contact"
                  className="rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition hover:scale-105 hover:bg-black/90 sm:px-8 sm:py-3.5 sm:text-base"
                >
                  🚀 Start Your Project
                </Link>

                <Link
                  href="/services"
                  className="rounded-full border border-black px-6 py-3 text-sm font-semibold text-black transition hover:bg-black hover:text-white sm:px-8 sm:py-3.5 sm:text-base"
                >
                  Explore Services
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </section>
  );
}

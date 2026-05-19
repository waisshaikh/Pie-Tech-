'use client';

import { motion } from 'framer-motion';
import { Code2, Globe, Megaphone, Rocket, Search, Share2, Shield, Smartphone, Users } from 'lucide-react';
import Link from 'next/link';

/* ================= ANIMATIONS ================= */

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

/* ================= SERVICES ================= */

const SERVICES = [
  {
    title: 'Digital Marketing',
    icon: <Megaphone className="text-orange-500 dark:text-orange-400" />,
    desc: 'We create data-driven digital marketing strategies that help you attract the right audience, generate quality leads, and increase conversions across multiple channels.',
    features: [
      'Google Ads & Meta Ads Campaigns',
      'Lead Generation & Funnel Optimization',
      'Conversion Rate Optimization (CRO)',
    ],
    outcome: 'More leads, better ROI, and consistent business growth',
  },
  {
    title: 'SEO Optimization',
    icon: <Search className="text-amber-500 dark:text-amber-400" />,
    desc: 'Boost your website’s visibility on search engines with advanced SEO strategies that drive long-term organic traffic and improve rankings.',
    features: [
      'On-page & Technical SEO',
      'Keyword Research & Competitor Analysis',
      'Content Strategy & Backlink Building',
    ],
    outcome: 'Higher Google rankings and sustainable organic traffic',
  },
  {
    title: 'Social Media Marketing',
    icon: <Share2 className="text-orange-500 dark:text-orange-400" />,
    desc: 'We build your brand presence on social media platforms through engaging content, targeted campaigns, and audience-focused strategies.',
    features: ['Content Creation & Reels Strategy', 'Paid Social Media Campaigns', 'Audience Engagement & Growth'],
    outcome: 'Stronger brand awareness and higher audience engagement',
  },
  {
    title: 'Web Development',
    icon: <Globe className="text-amber-500 dark:text-amber-400" />,
    desc: 'We design and develop fast, responsive, and SEO-friendly websites that convert visitors into customers and support your business growth.',
    features: ['Custom Websites (Next.js / React)', 'Landing Pages & Funnels', 'E-commerce Development'],
    outcome: 'High-converting website that drives sales and leads',
  },
  {
    title: 'App Development',
    icon: <Smartphone className="text-orange-500 dark:text-orange-400" />,
    desc: 'Build scalable and user-friendly mobile applications for Android and iOS with seamless performance and modern UI/UX.',
    features: ['Android & iOS App Development', 'UI/UX Design & Prototyping', 'API Integration & Backend Support'],
    outcome: 'Smooth user experience with scalable mobile solutions',
  },
  {
    title: 'Software Development',
    icon: <Code2 className="text-amber-500 dark:text-amber-400" />,
    desc: 'We create custom software solutions tailored to your business needs, helping you automate processes and improve efficiency.',
    features: ['Custom CRM & ERP Systems', 'Business Automation Tools', 'Dashboard & Analytics Systems'],
    outcome: 'Improved efficiency, automation, and business scalability',
  },
];

/* ================= PAGE ================= */

export default function ServicesPage() {
  return (
    <section className="mx-auto max-w-[1200px] px-6 pb-24 pt-32 ">
      {/* HERO */}

      <motion.div variants={fadeUp} initial="hidden" animate="visible" className="mb-24 max-w-4xl">
        <h1 className="mb-6 text-5xl font-bold leading-tight text-black dark:text-white md:text-6xl">
          We Help Businesses <span className="text-orange-500">Grow Faster</span> with Powerful Digital Solutions
        </h1>

        <p className="max-w-2xl text-lg text-gray-600 dark:text-gray-400">
          From high-converting websites to result-driven marketing strategies, we help startups and businesses attract
          more customers, increase revenue, and scale confidently in the digital world.
        </p>

        <div className="mt-6 flex flex-wrap gap-4">
          <a
            href="/contact"
            className="rounded-full bg-orange-500 px-6 py-3 font-semibold text-white transition hover:bg-orange-600"
          >
             Get Free Consultation
          </a>

          <a
            href="/portfolio"
            className="rounded-full border border-gray-300 px-6 py-3 font-semibold text-black transition hover:bg-black hover:text-white dark:text-white"
          >
            View Our Work
          </a>
        </div>
      </motion.div>

      {/* SERVICES GRID */}

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid gap-6 sm:grid-cols-2 md:grid-cols-3"
      >
        {SERVICES.map((service) => (
          <motion.div
            key={service.title}
            variants={fadeUp}
            whileHover={{ y: -10, scale: 1.03 }}
            className="group rounded-2xl border border-gray-200 bg-white p-8 transition hover:shadow-xl dark:border-white/10 dark:bg-white/5"
          >
            {/* ICON */}
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gray-100 transition group-hover:bg-orange-400/20 dark:bg-white/10">
              {service.icon}
            </div>

            {/* TITLE */}
            <h3 className="mb-3 text-xl font-semibold text-black dark:text-white">{service.title}</h3>

            {/* DESCRIPTION */}
            <p className="mb-4 text-sm leading-relaxed text-gray-600 dark:text-gray-400">{service.desc}</p>

            {/* FEATURES */}
            <ul className="mb-4 space-y-2">
              {service.features?.map((feature: string) => (
                <li key={feature} className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                  <span className="h-2 w-2 rounded-full bg-orange-500"></span>
                  {feature}
                </li>
              ))}
            </ul>

            {/* OUTCOME */}
            <p className="text-sm font-semibold text-orange-500">{service.outcome}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* WHY CHOOSE US */}

      <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-32">
        {/* SECTION HEADING */}
        <div className="mb-14 max-w-2xl">
          <h2 className="text-3xl font-bold text-black dark:text-white md:text-4xl">Why Choose Us?</h2>
          <p className="mt-3 text-gray-600 dark:text-gray-400">
            We don’t just deliver services — we build long-term partnerships focused on growth, performance, and real
            business results.
          </p>
        </div>

        {/* GRID */}
        <div className="grid gap-8 lg:grid-cols-2">
          {[
            {
              icon: <Shield />,
              title: 'Reliable & Secure',
              desc: 'We follow industry best practices to ensure your website, app, or software is secure, scalable, and performs seamlessly under all conditions.',
              points: [
                'Secure architecture & data protection',
                'High-performance optimized systems',
                'Scalable solutions for future growth',
              ],
            },
            {
              icon: <Rocket />,
              title: 'Growth Focused',
              desc: 'Every solution we build is aligned with your business goals — helping you generate leads, increase conversions, and maximize ROI.',
              points: [
                'Conversion-driven strategies',
                'Performance tracking & analytics',
                'Marketing + tech combined approach',
              ],
            },
            {
              icon: <Users />,
              title: 'Client-Centric Approach',
              desc: 'We work closely with you at every stage, ensuring transparency, collaboration, and solutions tailored to your needs.',
              points: [
                'Regular updates & communication',
                'Customized solutions (not templates)',
                'Dedicated support & guidance',
              ],
            },
            {
              icon: <Globe />,
              title: 'Modern & Innovative',
              desc: 'We use the latest technologies and trends to deliver modern digital experiences that stand out in the competitive market.',
              points: [
                'Latest tech stack (React, Next.js, AI)',
                'Modern UI/UX design standards',
                'Future-ready development approach',
              ],
            },
          ].map((item) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              className="group rounded-2xl border border-gray-200 bg-white p-8 transition hover:shadow-xl dark:border-white/10 dark:bg-black/60"
            >
              {/* ICON */}
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 text-orange-500 transition group-hover:bg-orange-500 group-hover:text-white">
                {item.icon}
              </div>

              {/* TITLE */}
              <h4 className="mb-2 text-lg font-semibold text-black dark:text-white">{item.title}</h4>

              {/* DESCRIPTION */}
              <p className="mb-4 text-sm text-gray-600 dark:text-gray-400">{item.desc}</p>

              {/* POINTS */}
              <ul className="space-y-2">
                {item.points.map((point) => (
                  <li key={point} className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                    <span className="h-2 w-2 rounded-full bg-orange-500"></span>
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* PROCESS */}

      <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-32">
        {/* HEADING */}
        <div className="mb-14 max-w-2xl">
          <h2 className="text-3xl font-bold text-black dark:text-white md:text-4xl">Our Proven Process</h2>
          <p className="mt-3 text-gray-600 dark:text-gray-400">
            We follow a structured and results-driven approach to ensure every project delivers maximum impact,
            performance, and long-term growth.
          </p>
        </div>

        {/* STEPS */}
        <div className="grid gap-8 md:grid-cols-2">
          {[
            {
              title: 'Understand Your Requirements',
              desc: 'We start by deeply understanding your business, goals, target audience, and challenges to create the right strategy.',
              points: ['Business & competitor analysis', 'Goal identification', 'Target audience research'],
            },
            {
              title: 'Plan & Design Strategy',
              desc: 'We create a clear roadmap and design user-focused experiences that align with your brand and business goals.',
              points: ['UI/UX design & wireframes', 'Technology & platform selection', 'Marketing strategy planning'],
            },
            {
              title: 'Develop & Optimize',
              desc: 'Our team builds high-performance solutions and continuously optimizes them for speed, SEO, and conversions.',
              points: ['Clean & scalable development', 'Performance optimization', 'SEO & conversion setup'],
            },
            {
              title: 'Launch & Scale',
              desc: 'After launch, we monitor performance, optimize campaigns, and help you scale your business efficiently.',
              points: ['Live deployment', 'Performance tracking', 'Growth & scaling strategies'],
            },
          ].map((step, i) => (
            <motion.div
              key={step.title}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              className="relative rounded-2xl border border-gray-200 bg-white p-8 transition hover:shadow-xl dark:border-white/10 dark:bg-white/5"
            >
              {/* STEP NUMBER */}
              <div className="absolute right-6 top-6 text-5xl font-extrabold text-gray-200 dark:text-white/10">
                0{i + 1}
              </div>

              {/* TITLE */}
              <h4 className="mb-2 text-lg font-semibold text-black dark:text-white">{step.title}</h4>

              {/* DESCRIPTION */}
              <p className="mb-4 text-sm text-gray-600 dark:text-gray-400">{step.desc}</p>

              {/* POINTS */}
              <ul className="space-y-2">
                {step.points.map((point) => (
                  <li key={point} className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                    <span className="h-2 w-2 rounded-full bg-orange-500"></span>
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* STATS */}

      <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-32">
        {/* HEADING */}
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-black dark:text-white md:text-4xl">Our Impact in Numbers</h2>
          <p className="mt-3 text-sm text-gray-600 dark:text-gray-400 md:text-base">
            We deliver measurable results that help businesses grow, scale, and succeed in the digital world.
          </p>
        </div>

        {/* STATS GRID */}
        <div className="grid gap-6 text-center sm:grid-cols-2 md:grid-cols-3">
          {[
            {
              value: '100+',
              label: 'Projects Delivered',
              desc: 'Completed projects across web, mobile & marketing domains.',
            },
            {
              value: '98%',
              label: 'Client Satisfaction',
              desc: 'Trusted by clients for quality work and timely delivery.',
            },
            {
              value: '24/7',
              label: 'Support & Assistance',
              desc: 'Always available to support and grow your business.',
            },
          ].map((stat) => (
            <motion.div
              key={stat.label}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              className="rounded-2xl border border-gray-200 bg-white p-8 transition hover:shadow-xl dark:border-white/10 dark:bg-white/5"
            >
              {/* VALUE */}
              <p className="text-3xl font-extrabold text-orange-500 sm:text-4xl md:text-5xl">{stat.value}</p>

              {/* LABEL */}
              <p className="mt-2 text-base font-semibold text-black dark:text-white md:text-lg">{stat.label}</p>

              {/* DESCRIPTION */}
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 md:text-base">{stat.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* FINAL CTA */}

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative mt-36 overflow-hidden rounded-3xl bg-gradient-to-r from-orange-500 to-amber-400 px-6 py-14 text-center md:px-12"
      >
        {/* BACKGROUND GLOW */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.2),transparent_60%)]" />

        {/* CONTENT */}
        <div className="relative z-10">
          {/* HEADING */}
          <h3 className="text-2xl font-bold leading-tight text-black sm:text-3xl md:text-4xl">
            Let&apos;s Turn Your Idea Into a <span className="underline decoration-black/70">High-Growth Business</span>
          </h3>

          {/* DESCRIPTION */}
          <p className="mx-auto mt-4 max-w-2xl text-base text-black/90 sm:text-lg">
            Whether you&apos;re launching a startup or scaling your business, we build high-performance digital solutions
            that attract customers, boost conversions, and accelerate your growth.
          </p>

          {/* BUTTONS */}
          <div className="mt-6 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="rounded-full bg-black px-6 py-3 text-center font-semibold text-white transition hover:scale-105 hover:bg-black/90"
            >
               Get Free Consultation
            </Link>

            <Link
              href="/services"
              className="rounded-full border border-gray-300 px-6 py-3 text-center font-semibold text-black transition hover:bg-black hover:text-white dark:text-white"
            >
              Explore Services
            </Link>
          </div>

          {/* TRUST LINE */}
          <p className="mt-5 text-xs text-black/80 sm:text-sm">
            No commitment • Free strategy call • Response within 24 hours
          </p>
        </div>
      </motion.div>
      {/* CONTACT INFO */}
      {/* <section className="mt-20 text-center">
        <h3 className="text-2xl font-semibold text-black dark:text-white">Still have questions?</h3>

        <p className="mt-2 text-gray-600 dark:text-gray-400">Talk to our team directly — we’re here to help you.</p>

        <div className="mt-6 flex flex-col justify-center gap-4 sm:flex-row">
          <a href="mailto:your@email.com" className="rounded-full border px-6 py-3">
            📧 Email Us
          </a>

          <a
            href="https://wa.me/91XXXXXXXXXX"
            target="_blank"
            className="rounded-full bg-green-500 px-6 py-3 text-white"
          >
            💬 WhatsApp Chat
          </a>
        </div>
      </section> */}
    </section>
  );
}

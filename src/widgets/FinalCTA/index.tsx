'use client';

import { useRouter } from 'next/navigation';
import { FC } from 'react';

import Button from '@/components/ui/Button';
import SectionOpacity from '@/components/ui/SectionOpacity';

const FinalCTA: FC = () => {
  const router = useRouter();

  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      {/* Gradient Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-black via-gray-900 to-black" />

      {/*  Glow Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-[-100px] top-[-100px] h-[300px] w-[300px] rounded-full bg-orange-500/20 blur-3xl" />
        <div className="absolute bottom-[-100px] right-[-100px] h-[300px] w-[300px] rounded-full bg-purple-500/20 blur-3xl" />
      </div>

      <SectionOpacity>
        <div className="mx-auto max-w-4xl px-6 text-center md:px-10">
          {/*  Brand Tag */}
          <p className="mb-4 text-sm uppercase tracking-widest text-gray-400">Pie Tech Solutions</p>

          {/*  Heading */}
          <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
            Let&apos;s work together
            <br />
            <span className="bg-gradient-to-r from-orange-400 to-amber-300 bg-clip-text text-transparent">
              A Powerful Digital Experience
            </span>
          </h2>

          {/*  Subtext (Meaningful + Sales Driven) */}
          <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-gray-300 sm:text-base md:text-lg">
            At <span className="font-semibold text-white">Pie Tech Solutions</span>, we don’t just build websites — we
            create scalable, high-performance digital solutions that help your business grow, attract customers, and
            stand out in today’s competitive market.
          </p>

          <p className="mx-auto mt-4 max-w-xl text-sm text-gray-400 sm:text-base">
            Whether you're launching a new idea or upgrading your existing product, our team is ready to bring your
            vision to life with modern design, clean code, and strategic thinking.
          </p>

          {/*  Buttons */}
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            {/*  Primary CTA */}
            <Button
              onClick={() => router.push('/contact')}
              title="Start Your Project"
              classes="
      px-8 py-4 text-base font-semibold
      rounded-xl
      bg-orange-400 text-black
      hover:bg-orange-500
      transition-all duration-300
      shadow-md hover:shadow-lg
    "
            />

            {/*  Secondary CTA */}
            <Button
              onClick={() => router.push('/about')}
              title="Learn More"
              classes="
      px-8 py-4 text-base font-semibold
      rounded-xl
      border border-orange-400
      text-orange-400
      hover:bg-orange-400/10
      transition-all duration-300
    "
            />
          </div>
        </div>
      </SectionOpacity>
    </section>
  );
};

export default FinalCTA;

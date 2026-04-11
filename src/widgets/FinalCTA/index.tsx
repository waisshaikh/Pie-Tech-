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
        <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-orange-500/20 blur-3xl rounded-full" />
        <div className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] bg-purple-500/20 blur-3xl rounded-full" />
      </div>

      <SectionOpacity>
        <div className="mx-auto max-w-4xl px-6 md:px-10 text-center">

          {/*  Brand Tag */}
          <p className="mb-4 text-sm tracking-widest text-gray-400 uppercase">
            Pie Tech Solutions
          </p>

          {/*  Heading */}
          <h2 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl lg:text-6xl leading-tight">
            Let’s Turn Your Vision Into
            <br />
            <span className="bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500 bg-clip-text text-transparent">
              A Powerful Digital Experience
            </span>
          </h2>

          {/*  Subtext (Meaningful + Sales Driven) */}
          <p className="mt-6 text-sm sm:text-base md:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            At <span className="text-white font-semibold">Pie Tech Solutions</span>, 
            we don’t just build websites — we create scalable, high-performance 
            digital solutions that help your business grow, attract customers, 
            and stand out in today’s competitive market.
          </p>

          <p className="mt-4 text-sm sm:text-base text-gray-400 max-w-xl mx-auto">
            Whether you're launching a new idea or upgrading your existing product, 
            our team is ready to bring your vision to life with modern design, 
            clean code, and strategic thinking.
          </p>

          {/*  Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">

            {/* Primary CTA */}
            <Button
              onClick={() => router.push('/contact')}
              title="Start Your Project"
              classes="
                px-8 py-4 text-base font-semibold
                rounded-xl
                bg-gradient-to-r from-orange-500 to-pink-500
                text-white
                hover:opacity-90
                transition-all duration-300
                shadow-lg shadow-orange-500/20
              "
            />

            {/* Secondary CTA */}
            <Button
              onClick={() => router.push('/about')}
              title="Learn More"
              classes="
                px-8 py-4 text-base font-semibold
                rounded-xl
                border border-white/20
                text-white
                hover:bg-white/10
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
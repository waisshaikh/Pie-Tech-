'use client';

import About from '@/widgets/About';
import Approach from '@/widgets/Approach';
import CallToAction from '@/widgets/CallToAction';
import Hero from '@/widgets/Hero';
import Services from '@/widgets/Services';
import FinalCTA from '@/widgets/FinalCTA';

export default function Home() {
  return (
    <main className="" >
      <Hero />
      <About />
      <Services />
      <Approach />
      <CallToAction />
      <FinalCTA />
    </main>
  );
}

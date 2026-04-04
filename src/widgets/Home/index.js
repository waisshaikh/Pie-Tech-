'use client';

import ShadowCursor from '@/components/ui/ShadowCursor';
import About from '@/widgets/About';
import Approach from '@/widgets/Approach';
import CallToAction from '@/widgets/CallToAction';
import Hero from '@/widgets/Hero';
import Services from '@/widgets/Services';

export default function HomeWidget() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Approach />
      <CallToAction />
      <ShadowCursor />
    </>
  );
}

'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const serviceCards = [
  {
    title: 'Design',
    services: [
      ['Web App', 'Branding'],
      ['Mobile App', 'Logo Design'],
    ],
    number: '01.',
  },
  {
    title: 'Fullstack Development',
    services: [
      ['Online Store', 'Web Application'],
      ['CMS', 'API Development'],
    ],
    number: '02.',
  },
  {
    title: 'Digital Marketing',
    services: [
      ['SEO', 'Meta Ads'],
      ['Google Ads', 'Lead Generation'],
    ],
    number: '03.',
  },
];

const ServicesSection = () => {
  return (
    <section
      id="services"
      className="relative border-t border-white/10 bg-black px-6 py-20 text-white md:px-12 lg:px-20"
    >
      {/* ===== Section Heading ===== */}
      <div className="mb-16 text-center md:mb-20">
        <p className="mb-3 text-sm uppercase tracking-[0.35em] text-orange-400 md:text-base">
          WHAT WE OFFER
        </p>

        <h2 className="text-4xl font-extrabold tracking-tight md:text-6xl lg:text-7xl">
          SERVICES.
        </h2>

        <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-gray-400 md:text-lg">
          We deliver design, development, and growth solutions that help ambitious businesses scale faster and build a
          stronger digital presence.
        </p>
      </div>

      {/* ===== Cards ===== */}
      <div className="space-y-12">
        {serviceCards.map((card) => (
          <ServiceCard key={card.title} card={card} />
        ))}
      </div>
    </section>
  );
};

interface ServiceCardProps {
  card: {
    title: string;
    services: string[][];
    number: string;
  };
}

const ServiceCard = ({ card }: ServiceCardProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });

  const getDescription = () => {
    switch (card.title) {
      case 'Design':
        return 'We create visually stunning and user-focused designs that strengthen your brand identity and deliver seamless experiences across web and mobile platforms.';
      case 'Fullstack Development':
        return 'We build scalable web applications, secure backend systems, and powerful APIs that help businesses grow faster and operate more efficiently.';
      case 'Digital Marketing':
        return 'Our data-driven marketing strategies help brands boost visibility, generate quality leads, and maximize ROI through SEO and paid campaigns.';
      default:
        return 'We provide innovative digital solutions tailored to your business growth.';
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="group rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:border-orange-400/40 hover:bg-white/[0.05] md:p-10"
    >
      {/* ===== Title ===== */}
      <h3 className="text-3xl font-light tracking-tight md:text-5xl">
        {card.title}
      </h3>

      {/* ===== Content ===== */}
      <div className="mt-8 grid gap-8 md:grid-cols-2">
        {/* Services */}
        <div className="space-y-4">
          {card.services.map((group, i) => (
            <ul
              key={i}
              className="flex flex-wrap gap-x-6 gap-y-4 text-base font-semibold md:text-lg"
            >
              {group.map((service) => (
                <li key={service} className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-orange-400" />
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          ))}
        </div>

        {/* Description */}
        <div className="relative">
          <p className="relative z-10 max-w-xl text-base leading-relaxed text-gray-300 md:text-lg">
            {getDescription()}
          </p>

          <span className="absolute bottom-0 right-0 z-0 text-7xl font-extrabold text-white/[0.04] md:text-9xl">
            {card.number}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default ServicesSection;



// 'use client';

// import type { FC } from 'react';

// import ServiceCard from '@/components/ServiceCard';
// import SectionTitle from '@/components/ui/SectionTitle';
// import { CARDS } from '@/data';

// interface Props {}

// const Index: FC<Props> = () => {
//   return (
//     <section
//       id="services"
//       className="relative border-t border-gray-200 py-[8vw] md:py-[5vw]"
//     >
//       {/* ===== Section Title ===== */}
//       <SectionTitle
//         title="SERVICES."
//         className="px-[6vw] pt-[3vw] text-right md:px-[4vw]"
//       />

//       {/* ===== Service Cards ===== */}
//       <div className="mt-[4vw] space-y-[2vw]">
//         {CARDS.map((card) => (
//           <ServiceCard key={card.title} card={card} />
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Index;
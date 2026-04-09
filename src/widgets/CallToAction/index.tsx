'use client';

import { Briefcase, CalendarDays, ThumbsUp } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { FC } from 'react';

import Button from '@/components/ui/Button';
import SectionOpacity from '@/components/ui/SectionOpacity';

const Index: FC = () => {
  const router = useRouter();

  const handleFormToggle = () => {
    router.push('/about');
  };

  return (
    <SectionOpacity className="relative flex min-h-screen items-center px-6 overflow-hidden">

      {/* 🔥 Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-orange-500/20 blur-3xl rounded-full" />
        <div className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] bg-purple-500/20 blur-3xl rounded-full" />
      </div>

      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-16 lg:grid-cols-2">

        {/* LEFT CONTENT */}
        <div className="flex flex-col justify-center text-center lg:text-left">

          {/* TAGLINE */}
          <span className="mb-6 inline-block text-xs sm:text-sm font-semibold tracking-[0.3em] text-gray-400">
            DIGITAL • DESIGN • DEVELOPMENT
          </span>

          {/* HEADING */}
          <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl xl:text-7xl">
            Let’s Build <br />
            <span className="bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500 bg-clip-text text-transparent">
              Something Remarkable
            </span>
          </h1>

          {/* DESCRIPTION */}
          <p className="mt-6 max-w-xl mx-auto lg:mx-0 text-base leading-relaxed text-gray-300 sm:text-lg">
            Partner with{' '}
            <span className="font-semibold text-white">
              Pie Tech Solutions
            </span>{' '}
            to create high-performance digital experiences that help your
            business grow, scale, and stand out.
          </p>

          <p className="mt-4 max-w-xl mx-auto lg:mx-0 text-sm text-gray-400 sm:text-base">
            We design modern websites, scalable applications, and
            conversion-focused digital strategies tailored to your goals.
          </p>

          {/* CTA */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button
              onClick={handleFormToggle}
              title="Get Free Consultation"
              classes="
                px-8 py-4 text-base font-semibold
                rounded-xl
                bg-gradient-to-r from-orange-500 to-pink-500
                hover:opacity-90
                transition-all duration-300
                sm:text-lg
              "
            />
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="flex flex-col justify-center items-center lg:items-start gap-10">

          {/* STATS */}
          <div className="grid w-full grid-cols-1 sm:grid-cols-3 gap-6">

            {/* CARD 1 */}
            <div className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 text-center transition-all duration-300 hover:scale-105 hover:bg-white/10">
              <Briefcase className="mx-auto mb-3 h-6 w-6 text-orange-400" />
              <p className="text-3xl font-bold text-white">50+</p>
              <p className="mt-1 text-sm text-gray-400">
                Projects Delivered
              </p>
            </div>

            {/* CARD 2 */}
            <div className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 text-center transition-all duration-300 hover:scale-105 hover:bg-white/10">
              <CalendarDays className="mx-auto mb-3 h-6 w-6 text-purple-400" />
              <p className="text-3xl font-bold text-white">5+</p>
              <p className="mt-1 text-sm text-gray-400">
                Years Experience
              </p>
            </div>

            {/* CARD 3 */}
            <div className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 text-center transition-all duration-300 hover:scale-105 hover:bg-white/10">
              <ThumbsUp className="mx-auto mb-3 h-6 w-6 text-pink-400" />
              <p className="text-3xl font-bold text-white">100%</p>
              <p className="mt-1 text-sm text-gray-400">
                Client Satisfaction
              </p>
            </div>

          </div>

          {/* TRUST TEXT */}
          <p className="max-w-sm text-center lg:text-left text-sm text-gray-500">
            Trusted by startups, entrepreneurs, and growing businesses to
            deliver impactful digital solutions.
          </p>
        </div>

      </div>
    </SectionOpacity>
  );
};

export default Index;



// 'use client';

// import { Briefcase, CalendarDays, ThumbsUp } from 'lucide-react';
// import { useRouter } from 'next/navigation';
// import { FC } from 'react';

// import Button from '@/components/ui/Button';
// import SectionOpacity from '@/components/ui/SectionOpacity';

// const Index: FC = () => {
//   const router = useRouter();

//   const handleFormToggle = () => {
//     router.push('/about');
//   };

//   return (
//     <SectionOpacity className="relative flex min-h-screen justify-center px-6">
//       <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-14 text-center lg:grid-cols-2 lg:text-left mt-10 mb-10">

//         {/* LEFT CONTENT */}
//         <div className="flex flex-col justify-center">
//           <span className="mb-4 inline-block text-xl text-center font-bold tracking-widest text-gray-400">
//             DIGITAL • DESIGN • DEVELOPMENT
//           </span>

//           <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl md:text-6xl xl:text-7xl">
//             Let&apos;s Build
//             <br />
//             <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
//               Something Remarkable
//             </span>
//           </h1>

//           <p className="mt-6 max-w-xl text-base leading-relaxed text-gray-300 sm:text-lg">
//             Partner with{' '}
//             <span className="font-semibold text-white">
//               Pie Tech Solutions
//             </span>{' '}
//             to create high-performance digital experiences that help your
//             business grow, scale, and stand out in a competitive market.
//           </p>

//           <p className="mt-4 max-w-xl text-sm text-gray-400 sm:text-base">
//             We design and develop modern websites, scalable applications,
//             and conversion-focused digital strategies tailored to your
//             business goals.
//           </p>

//           <div className="mt-10 flex flex-col gap-4 sm:flex-row">
//             <Button
//               onClick={handleFormToggle}
//               title="Get Free Consultation"
//               classes="
//                 px-8 py-4 text-base font-semibold
//                 bg-bg-1 hover:bg-bg-1/80
//                 sm:text-lg
//               "
//             />
//           </div>
//         </div>

//         {/* RIGHT CONTENT */}
//         <div className="flex flex-col items-center justify-center gap-8 lg:items-start">
//           <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-3">

//             <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center transition hover:bg-white/10">
//               <Briefcase className="mx-auto mb-3 h-6 w-6 text-white/80" />
//               <p className="text-3xl font-semibold text-white">50+</p>
//               <p className="mt-1 text-sm text-gray-400">
//                 Projects Delivered
//               </p>
//             </div>

//             <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center transition hover:bg-white/10">
//               <CalendarDays className="mx-auto mb-3 h-6 w-6 text-white/80" />
//               <p className="text-3xl font-semibold text-white">5+</p>
//               <p className="mt-1 text-sm text-gray-400">
//                 Years Experience
//               </p>
//             </div>

//             <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center transition hover:bg-white/10">
//               <ThumbsUp className="mx-auto mb-3 h-6 w-6 text-white/80" />
//               <p className="text-3xl font-semibold text-white">100%</p>
//               <p className="mt-1 text-sm text-gray-400">
//                 Client Satisfaction
//               </p>
//             </div>

//           </div>

//           <p className="max-w-sm text-center text-sm text-gray-500 lg:text-left">
//             Trusted by startups, entrepreneurs, and growing businesses to
//             deliver impactful digital solutions.
//           </p>
//         </div>
//       </div>
//     </SectionOpacity>
//   );
// };

// export default Index;






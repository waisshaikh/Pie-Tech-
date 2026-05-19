import type { Metadata } from 'next';

import ThemeProvider from '@/components/ThemeProvider';
import ShadowCursor from '@/components/ui/ShadowCursor';

import Footer from '@/widgets/Footer';
import Header from '@/widgets/Header';

import '@/shared/styles/globals.scss';

export const metadata: Metadata = {
  title: 'Pie Tech Solutions',
  description: 'Marketing and technology solutions for modern brands.',
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`
        bg-white text-black
        dark:bg-black dark:text-white 
        transition-colors duration-300`}
      >
        <ThemeProvider>
          <Header />

          <ShadowCursor />

          <main className="pt-[80px] min-h-screen">
            {children}
          </main>

          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}



// 'use client';

// import Lenis from 'lenis';
// import { Montserrat } from 'next/font/google';
// import { useEffect } from 'react';

// import ShadowCursor from '@/components/ui/ShadowCursor';
// import Footer from '@/widgets/Footer';
// import Header from '@/widgets/Header';

// import '@/shared/styles/globals.scss';

// const montserrat = Montserrat({
//   subsets: ['latin'],
//   weight: ['300', '400', '500', '600', '700'],
// });

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   useEffect(() => {
//     const lenis = new Lenis({
//       lerp: 0.08, // smoothness control (valid option)
//     });

//     let rafId: number;

//     const raf = (time: number) => {
//       lenis.raf(time);
//       rafId = requestAnimationFrame(raf);
//     };

//     rafId = requestAnimationFrame(raf);

//     return () => {
//       cancelAnimationFrame(rafId);
//       lenis.destroy();
//     };
//   }, []);

//   return (
//     <html lang="en">
//       <body className={montserrat.className}>
//         {/* GLOBAL HEADER */}
//         <Header />

//         {/* GLOBAL CURSOR */}
//         <ShadowCursor />

//         {/* PAGE CONTENT */}
//         <main className="pt-[80px] min-h-screen">
//           {children}
//         </main>

//         {/* GLOBAL FOOTER */}
//         <Footer />
//       </body>
//     </html>
//   );
// }

'use client';

import { LogoIcon } from '@/icons/ApproachIcons/LogoIcon';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

/* ================= NAV LINKS ================= */
const NAV_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Approach', href: '/approach' },
  { name: 'Contact', href: '/contact' },
];

/* ================= MOBILE SIDEBAR ================= */
function MobileSidebar({ onClose }: { onClose: () => void }) {
  const pathname = usePathname();

  return (
    <div className="fixed inset-0 z-[99999] md:hidden">
      {/* Overlay */}
      <motion.div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      />

      {/* Sidebar */}
      <motion.aside
        className="absolute right-0 top-0 h-full w-[280px] bg-black p-8 z-[100000]"
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ type: 'spring', stiffness: 260, damping: 25 }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="mb-10 h-10 w-10 flex items-center justify-center rounded-full bg-white/10 text-white"
        >
          ✕
        </button>

        {/* Links */}
        <nav className="flex flex-col gap-6 text-lg font-semibold">
          {NAV_LINKS.map((link) => {
            const isActive =
              pathname === link.href ||
              (link.href !== '/' && pathname.startsWith(link.href));

            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={onClose}
                className={`transition ${
                  isActive ? 'text-white' : 'text-white/60 hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
      </motion.aside>
    </div>
  );
}

/* ================= HEADER ================= */
export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  /* Lock scroll when sidebar open */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : 'auto';
  }, [menuOpen]);

  return (
    <>
      {/* HEADER */}
      <header className="fixed top-0 z-[3000] w-full bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-center justify-between h-[72px]">

            {/* LOGO */}
            <Link href="/" className="flex items-center gap-3">
              <LogoIcon className="h-10 w-10 text-white" />
              <span className="text-lg font-semibold text-white">
                Pie Tech Solutions
              </span>
            </Link>

            {/* DESKTOP NAV */}
            <nav className="hidden md:flex items-center gap-10">
              {NAV_LINKS.map((link) => {
                const isActive =
                  pathname === link.href ||
                  (link.href !== '/' && pathname.startsWith(link.href));

                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`
                      relative text-sm font-medium transition
                      ${
                        isActive
                          ? 'text-white'
                          : 'text-white/60 hover:text-white'
                      }
                    `}
                  >
                    {link.name}

                    {/* Active underline */}
                    {isActive && (
                      <span className="absolute left-0 -bottom-1 h-[2px] w-full bg-white" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* MOBILE MENU BUTTON */}
            <button
              onClick={() => setMenuOpen(true)}
              className="md:hidden h-11 w-11 flex flex-col justify-center items-center gap-1.5 rounded-full bg-white/10"
            >
              <span className="h-0.5 w-5 bg-white" />
              <span className="h-0.5 w-5 bg-white" />
              <span className="h-0.5 w-5 bg-white" />
            </button>

          </div>
        </div>
      </header>

      {/* MOBILE SIDEBAR */}
      <AnimatePresence>
        {menuOpen && <MobileSidebar onClose={() => setMenuOpen(false)} />}
      </AnimatePresence>
    </>
  );
}




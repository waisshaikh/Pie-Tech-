

'use client';

import { LogoIcon } from '@/icons/ApproachIcons/LogoIcon';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
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
  return (
    <div className="fixed inset-0 z-[5000] md:hidden">
      {/* Overlay */}
      <motion.div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      />

      {/* Sidebar */}
      <motion.aside
        role="dialog"
        aria-modal="true"
        className="absolute right-0 top-0 h-full w-[280px] bg-black p-8"
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ type: 'spring', stiffness: 260, damping: 25 }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          aria-label="Close menu"
          className="mb-10 flex h-10 w-10 items-center justify-center
          rounded-full bg-white/10 text-white"
        >
          ✕
        </button>

        {/* Links */}
        <nav className="flex flex-col gap-7 text-xl font-semibold text-white">
          {NAV_LINKS.map((link) => (
            <Link key={link.name} href={link.href} onClick={onClose}>
              {link.name}
            </Link>
          ))}
        </nav>
      </motion.aside>
    </div>
  );
}

/* ================= HEADER ================= */
export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  /* Lock scroll on mobile menu */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : 'auto';
  }, [menuOpen]);

  /* Close sidebar on ESC */
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    if (menuOpen) window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [menuOpen]);

  return (
    <>
      {/* HEADER */}
      <header className="fixed top-0 z-[3000] w-full bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="flex items-center justify-between h-[72px]">

            {/* LOGO */}
            <Link href="/" className="flex items-center gap-3 shrink-0">
              <LogoIcon className="h-10 w-10 text-white" />
              <span className="text-lg font-semibold text-white whitespace-nowrap">
                Pie Tech Solutions
              </span>
            </Link>

            {/* DESKTOP NAV */}
            <nav className="hidden md:flex items-center gap-10">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-white/70
                  hover:text-white transition whitespace-nowrap"
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* MOBILE MENU BUTTON */}
            <button
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              className="md:hidden flex h-11 w-11 flex-col
              items-center justify-center gap-1.5
              rounded-full bg-white/10"
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

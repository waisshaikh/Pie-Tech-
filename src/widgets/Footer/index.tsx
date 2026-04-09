'use client';

import { LogoIcon } from '@/icons/ApproachIcons/LogoIcon';
import { Facebook, Instagram, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

/* ================= NAV LINKS ================= */

const NAV_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Approach', href: '/approach' },
  { name: 'Contact', href: '/contact' },
];

export default function Footer() {
  const pathname = usePathname();

  return (
    <footer
      className="
      border-t
      border-gray-200 
      bg-gradient-to-br from-black via-gray-900 to-black
      "
    >
      <div
        className="
        mx-auto max-w-[1200px]
        px-6 py-14
        text-center
        text-gray-600 dark:text-gray-400
        "
      >
        {/* ================= LOGO ================= */}

        <div className="mb-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <LogoIcon className="h-12 w-12 text-black dark:text-white" />

          <span
            className="
            text-lg font-semibold
            text-black dark:text-white
            "
          >
            Pie Tech Solutions
          </span>
        </div>

        {/* ================= SOCIAL ICONS ================= */}

        <div className="mb-10 flex justify-center gap-5">
          {[
            {
              Icon: Mail,
              href: 'mailto:contact@pietechsolutions.com',
              label: 'Email',
            },
            {
              Icon: Instagram,
              href: 'https://www.instagram.com/pietechsolutions',
              label: 'Instagram',
            },
            {
              Icon: Facebook,
              href: 'https://www.facebook.com/pietechsolutions',
              label: 'Facebook',
            },
            {
              Icon: Linkedin,
              href: 'https://www.linkedin.com/company/pietechsolutions',
              label: 'LinkedIn',
            },
          ].map(({ Icon, href, label }, index) => (
            <Link
              key={index}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="
              flex h-10 w-10 items-center justify-center
              rounded-full
              border border-gray-200 text-gray-600
              transition-all duration-300
              hover:border-gray-400 hover:text-black
              dark:border-white/10 dark:text-gray-400
              dark:hover:border-white/30 dark:hover:text-white
              "
            >
              <Icon size={20} />
            </Link>
          ))}
        </div>

        {/* ================= NAV LINKS ================= */}

        <nav
          className="
          mb-10
          flex flex-wrap justify-center
          gap-x-10 gap-y-4
          text-lg font-semibold
          tracking-wide
          "
        >
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));

            return (
              <Link
                key={link.name}
                href={link.href}
                className={`
                relative transition-all duration-300
                ${
                  isActive
                    ? 'text-black after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full after:bg-black dark:text-white dark:after:bg-white'
                    : 'text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white'
                }
                `}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* ================= COPYRIGHT ================= */}

        <p className="text-sm text-gray-500 dark:text-gray-500">
          © {new Date().getFullYear()} Pie Tech Solutions. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

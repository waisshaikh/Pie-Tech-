'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="flex items-center justify-center
      h-10 w-10 rounded-full
      bg-black text-white
      dark:bg-white dark:text-black
      transition"
    >
      {theme === 'dark' ? '☀️' : '🌙'}
    </button>
  );
}
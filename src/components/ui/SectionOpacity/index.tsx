'use client';

import clsx from 'clsx';
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface SectionOpacityProps {
  children: ReactNode;
  className?: string;
}

export default function SectionOpacity({
  children,
  className,
}: SectionOpacityProps) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={clsx(className)}
    >
      {children}
    </motion.section>
  );
}




'use client';

import { ButtonHTMLAttributes, FC, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  variant?: 'primary' | 'secondary';
  loading?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  className?: string;
  classes?: string;
  btnClasses?: string;
}

const Button: FC<Props> = ({
  title,
  variant = 'primary',
  loading = false,
  leftIcon,
  rightIcon,
  className = '',
  classes = '',
  btnClasses = '',
  disabled,
  ...props
}) => {
  return (
    <button
      disabled={disabled || loading}
      className={twMerge(`
        relative inline-flex items-center justify-center
        rounded-xl p-[2px] overflow-hidden
        focus:outline-none focus:ring-2 focus:ring-orange-400/50
        disabled:opacity-60 disabled:cursor-not-allowed
        ${btnClasses}
      `)}
      {...props}
    >
      {/* 🔥 Animated Border */}
      <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#fb923c_0%,#ec4899_50%,#fb923c_100%)]" />

      {/* 🔥 Inner Button */}
      <span
        className={twMerge(`
          relative z-10 flex items-center gap-2
          px-6 py-3 rounded-xl
          font-semibold text-sm sm:text-base
          transition-all duration-300

          ${
            variant === 'primary'
              ? 'bg-black text-orange-400 hover:bg-neutral-900'
              : 'bg-transparent text-orange-400 border border-orange-400 hover:bg-orange-400/10'
          }

          ${className} ${classes}
        `)}
      >
        {/* Left Icon */}
        {leftIcon && !loading && <span>{leftIcon}</span>}

        {/* Text / Loader */}
        {loading ? (
          <span className="flex items-center gap-2">
            <span className="h-4 w-4 border-2 border-orange-400 border-t-transparent rounded-full animate-spin" />
            Loading...
          </span>
        ) : (
          title
        )}

        {/* Right Icon */}
        {rightIcon && !loading && <span>{rightIcon}</span>}
      </span>
    </button>
  );
};

export default Button;

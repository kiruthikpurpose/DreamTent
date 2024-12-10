import React from 'react';
import { cn } from '../../lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  glowing?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', glowing = false, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'rounded-full font-medium transition-all duration-200',
          {
            'bg-dream-red text-white hover:bg-dream-red-light': variant === 'primary',
            'bg-dream-purple text-white hover:bg-dream-purple-light': variant === 'secondary',
            'px-4 py-2 text-sm': size === 'sm',
            'px-6 py-3 text-base': size === 'md',
            'px-8 py-4 text-lg': size === 'lg',
            'animate-glow': glowing,
          },
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);
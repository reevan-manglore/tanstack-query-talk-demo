import type React from 'react';
import { cn } from '~/lib/utils';

interface ShimmerProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children?: React.ReactNode;
}

export function Shimmer({ className, children, ...props }: ShimmerProps) {
  return (
    <div
      className={cn(
        'animate-pulse relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1.5s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

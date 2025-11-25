'use client';
import React from 'react';
import { cn } from '@/lib/utils';

export interface ProgressiveBlurProps {
  className?: string;
  direction?: 'left' | 'right';
  blurIntensity?: number;
}

export function ProgressiveBlur({
  className,
  direction = 'left',
  blurIntensity = 1,
}: ProgressiveBlurProps) {
  const gradientDirection =
    direction === 'left'
      ? 'linear-gradient(to right, transparent, rgba(0, 0, 0, 0.8))'
      : 'linear-gradient(to left, transparent, rgba(0, 0, 0, 0.8))';

  return (
    <div
      className={cn('absolute inset-0', className)}
      style={{
        background: gradientDirection,
        backdropFilter: `blur(${blurIntensity * 4}px)`,
        WebkitBackdropFilter: `blur(${blurIntensity * 4}px)`,
        pointerEvents: 'none',
      }}
    />
  );
}


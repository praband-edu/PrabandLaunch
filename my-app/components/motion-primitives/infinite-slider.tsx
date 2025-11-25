'use client';
import React, { ReactNode, useRef, useState, useEffect } from 'react';
import { motion, useAnimationFrame } from 'motion/react';

export interface InfiniteSliderProps {
  children: ReactNode;
  speed?: number;
  speedOnHover?: number;
  gap?: number;
  className?: string;
}

export function InfiniteSlider({
  children,
  speed = 50,
  speedOnHover = 20,
  gap = 0,
  className = '',
}: InfiniteSliderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const currentSpeed = isHovered ? speedOnHover : speed;

  useAnimationFrame((time, delta) => {
    if (!containerRef.current) return;

    const scrollAmount = (delta / 16) * (currentSpeed / 100);
    containerRef.current.scrollLeft += scrollAmount;

    // Reset scroll position when reaching the end for seamless loop
    const maxScroll = containerRef.current.scrollWidth / 2;
    if (containerRef.current.scrollLeft >= maxScroll) {
      containerRef.current.scrollLeft = 0;
    }
  });

  // Duplicate children for seamless infinite scroll
  const childrenArray = React.Children.toArray(children);
  const duplicatedChildren = [...childrenArray, ...childrenArray, ...childrenArray];

  return (
    <div
      ref={containerRef}
      className={`flex overflow-x-hidden whitespace-nowrap [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        scrollBehavior: 'auto',
      }}
    >
      <div className="flex items-center h-full" style={{ gap: `${gap}px` }}>
        {duplicatedChildren.map((child, index) => (
          <span key={index} className="inline-flex items-center flex-shrink-0">
            {child}
          </span>
        ))}
      </div>
    </div>
  );
}


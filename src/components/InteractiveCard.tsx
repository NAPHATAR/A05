'use client';

import React, { useState } from 'react';

interface InteractiveCardProps {
  children: React.ReactNode;
}

export default function InteractiveCard({ children }: InteractiveCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const toggleHover = (hovering: boolean) => {
    if (hovering !== isHovered) {
      setIsHovered(hovering);
    }
  };

  return (
    <div
      className={`bg-white shadow-lg rounded-lg transition-transform duration-300 ease-in-out ${
        isHovered ? 'shadow-2xl bg-neutral-200 scale-105' : ''
      }`}
      onMouseEnter={() => toggleHover(true)}
      onMouseLeave={() => toggleHover(false)}
    >
      {children}
    </div>
  );
}

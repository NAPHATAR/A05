import React from 'react';
import Image from 'next/image';
import InteractiveCard from './InteractiveCard';

interface CardProps {
  hospitalName: string;
  imgSrc: string;
}

export default function Card({ hospitalName, imgSrc }: CardProps) {
  return (
    <InteractiveCard>
      <div className="rounded overflow-hidden relative">
        <Image className="inset-0 w-full h-full object-cover rounded-t-lg" src={imgSrc} alt={hospitalName} width={600} height={400} />
        <div className="px-6 py-4">
          <div className="font-bold text-xl">{hospitalName}</div>
        </div>
      </div>
    </InteractiveCard>
  );
}

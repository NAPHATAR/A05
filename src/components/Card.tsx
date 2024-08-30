import React from 'react';
import Image from 'next/image';

interface CardProps {
  hospitalName: string;
  imgSrc: string;
}

export default function Card({ hospitalName, imgSrc }: CardProps) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 transform transition-transform duration-300 hover:scale-105 hover:shadow-xl hover:underline">
      <Image className="w-full" src={imgSrc} alt={hospitalName} width={300} height={200}/>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{hospitalName}</div>
      </div>
    </div>
  );
}

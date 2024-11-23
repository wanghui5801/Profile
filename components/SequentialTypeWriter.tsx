"use client";

import { useEffect, useState } from 'react';
import TypeWriter from './TypeWriter';

interface SequentialTypeWriterProps {
  sentences: string[];
  speed?: number;
  delayBetweenSentences?: number;
}

export default function SequentialTypeWriter({ 
  sentences, 
  speed = 50, 
  delayBetweenSentences = 2000 
}: SequentialTypeWriterProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const [isErasing, setIsErasing] = useState(false);

  const handleTypingComplete = () => {
    setTimeout(() => {
      setIsErasing(true);
    }, delayBetweenSentences);
  };

  const handleEraseComplete = () => {
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % sentences.length);
      setIsErasing(false);
    }, delayBetweenSentences);
  };

  return (
    <div className="h-[0.6em] flex items-center leading-relaxed mt-4">
      <TypeWriter 
        text={sentences[currentIndex]}
        speed={speed}
        isErasing={isErasing}
        onComplete={handleTypingComplete}
        onEraseComplete={handleEraseComplete}
      />
    </div>
  );
} 
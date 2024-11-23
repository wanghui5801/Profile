"use client";

import { useEffect, useState } from 'react';

interface TypeWriterProps {
  text: string;
  speed?: number;
  delay?: number;
  onComplete?: () => void;
  isErasing?: boolean;
  onEraseComplete?: () => void;
}

export default function TypeWriter({ 
  text, 
  speed = 50, 
  delay = 0, 
  onComplete,
  isErasing = false,
  onEraseComplete
}: TypeWriterProps) {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);

    return () => clearInterval(cursorInterval);
  }, []);

  useEffect(() => {
    if (!isErasing) {
      if (currentIndex === 0) {
        const initialDelay = setTimeout(() => {
          setCurrentIndex(1);
        }, delay);
        return () => clearTimeout(initialDelay);
      }

      if (currentIndex > text.length) return;

      const timeout = setTimeout(() => {
        setDisplayText(text.slice(0, currentIndex));
        setCurrentIndex(currentIndex + 1);
      }, speed);

      return () => clearTimeout(timeout);
    } else {
      if (currentIndex === 0) {
        onEraseComplete?.();
        return;
      }

      const timeout = setTimeout(() => {
        setDisplayText(text.slice(0, currentIndex - 1));
        setCurrentIndex(currentIndex - 1);
      }, speed / 2);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, speed, delay, isErasing, onEraseComplete]);

  useEffect(() => {
    if (currentIndex === text.length && !isErasing) {
      onComplete?.();
    }
  }, [currentIndex, text.length, isErasing, onComplete]);

  return (
    <span className="inline-block font-inter text-lg md:text-xl text-gray-700 dark:text-gray-200">
      {displayText}
      {showCursor && (
        <span className="text-blue-500 dark:text-blue-400 font-normal">|</span>
      )}
    </span>
  );
} 
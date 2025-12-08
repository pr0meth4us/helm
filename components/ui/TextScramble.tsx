'use client';
import { useState, useEffect } from 'react';

const CHARS = "-_~=+*!@#%^&()[]{}|<>";

export const TextScramble = ({ text, className, trigger = true }: { text: string; className?: string, trigger?: boolean }) => {
  const [display, setDisplay] = useState(text.split('').map(() => CHARS[Math.floor(Math.random() * CHARS.length)]).join(''));

  useEffect(() => {
    if (!trigger) return;

    let iteration = 0;
    const interval = setInterval(() => {
      setDisplay(
        text
          .split("")
          .map((letter, index) => {
            if (index < iteration) return text[index];
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join("")
      );
      if (iteration >= text.length) clearInterval(interval);
      iteration += 1 / 2; // Speed of decryption
    }, 40);
    return () => clearInterval(interval);
  }, [text, trigger]);

  return <span className={className}>{display}</span>;
};
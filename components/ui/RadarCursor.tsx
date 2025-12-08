'use client';
import { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

export function RadarCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  // Smooth physics for the glow movement
  const springConfig = { damping: 25, stiffness: 150, mass: 0.5 };
  const glowX = useSpring(0, springConfig);
  const glowY = useSpring(0, springConfig);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      glowX.set(e.clientX);
      glowY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      if ((e.target as HTMLElement).closest('a, button, .group')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [glowX, glowY]);

  return (
    <>
      {/* === THE FLASHLIGHT GLOW === */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[-1] mix-blend-screen"
        style={{
          x: glowX,
          y: glowY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      >
        {/* Adjust the width/height (w-96 h-96) to change the size of the light */}
        <div className="w-[500px] h-[500px] bg-helm-cyan/10 rounded-full blur-[100px] opacity-50" />
      </motion.div>

      {/* === THE PRECISION CROSSHAIR === */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border border-helm-cyan/50 rounded-full pointer-events-none z-50 flex items-center justify-center mix-blend-difference"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: isHovering ? 1.5 : 1,
          borderColor: isHovering ? 'rgba(102, 252, 241, 1)' : 'rgba(102, 252, 241, 0.3)'
        }}
        transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      >
        <div className="w-1 h-1 bg-helm-cyan rounded-full" />
      </motion.div>

      {/* === TARGET LABEL === */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50 ml-6 mt-6"
        animate={{ x: mousePosition.x, y: mousePosition.y }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      >
        {isHovering && (
          <span className="text-[10px] font-mono text-helm-cyan bg-helm-dark/90 px-2 py-1 border border-helm-cyan/20 backdrop-blur-md">
            TARGET_LOCKED
          </span>
        )}
      </motion.div>
    </>
  );
}
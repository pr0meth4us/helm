'use client';
import { motion, useInView, Variants } from 'framer-motion';
import { useRef } from 'react';

// Animation variants for the words
const wordVariants: Variants = {
    hidden: { opacity: 0, filter: 'blur(10px)', y: 20 },
    visible: {
        opacity: 1,
        filter: 'blur(0px)',
        y: 0,
        transition: { duration: 0.4, ease: "easeOut" }
    }
};

const Keyword = ({ children, color = "text-helm-cyan" }: { children: React.ReactNode, color?: string }) => (
    <span className={`${color} font-bold relative inline-block`}>
    {children}
        {/* Underline decoration */}
        <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-current opacity-50" />
  </span>
);

export function Manifesto() {
    const ref = useRef(null);
    const isInView = useInView(ref, { amount: 0.3, once: true });

    // The new quote
    const textBlock1 = "If it doesn't fit,";
    const textBlock2 = "you must";

    return (
        <section className="py-40 px-6 relative border-t border-white/5 bg-helm-dark overflow-hidden">

            {/* Background Decor: A subtle vertical data line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-helm-cyan/20 to-transparent -translate-x-1/2" />

            <div ref={ref} className="max-w-4xl mx-auto text-center relative z-10">

                {/* Header: Goofy/Tired Dev Header */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    className="font-mono text-xs text-helm-cyan/50 mb-12 tracking-[0.5em] uppercase"
                >
                    {'// RUNTIME_LOGS'}
                </motion.div>

                {/* Main Text Block - Rendered Word by Word */}
                <div className="text-3xl md:text-5xl leading-tight font-light text-helm-silver/80 space-y-12">

                    {/* Paragraph 1 */}
                    <motion.p
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        transition={{ staggerChildren: 0.05 }}
                        className="flex flex-wrap justify-center gap-x-3 gap-y-1"
                    >
                        {textBlock1.split(" ").map((word, i) => (
                            <motion.span key={i} variants={wordVariants}>{word}</motion.span>
                        ))}
                    </motion.p>

                    {/* Paragraph 2 (Punchline) */}
                    <motion.p
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        transition={{ staggerChildren: 0.05, delayChildren: 1.5 }}
                        className="flex flex-wrap justify-center gap-x-3 gap-y-1"
                    >
                        {textBlock2.split(" ").map((word, i) => (
                            <motion.span key={i} variants={wordVariants}>{word}</motion.span>
                        ))}
                        <motion.span variants={wordVariants} className="font-bold text-white">
                            <Keyword>ACQUIT.</Keyword>
                        </motion.span>
                    </motion.p>

                    {/* Author Attribution */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : {}}
                        transition={{ delay: 3.0, duration: 1 }}
                        className="pt-8 text-sm md:text-base font-mono text-helm-cyan/60 uppercase tracking-widest"
                    >
                        — Johnnie Cochran
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
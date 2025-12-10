'use client';

import { projects } from '@/data/projects';
import { ProjectCard } from '@/components/ProjectCard';
import { BackgroundGrid } from '@/components/ui/BackgroundGrid';
import { Manifesto } from '@/components/Manifesto';
import { TextScramble } from '@/components/ui/TextScramble';
import { motion } from 'framer-motion';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.5 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function Home() {
  return (
    <main className="min-h-screen text-helm-silver selection:bg-helm-cyan selection:text-helm-dark overflow-x-hidden">
      <BackgroundGrid />

      {/* Boot Sequence / Hero */}
      <section className="relative pt-40 pb-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-start font-mono space-y-2 mb-8 text-sm md:text-base text-helm-cyan/70">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <TextScramble text="SYSTEM ONLINE // CONNECTION SECURE" />
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-7xl md:text-[10rem] font-black text-white mb-2 tracking-tighter leading-none mix-blend-overlay opacity-90">
              <TextScramble text="HELM" />
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="text-helm-cyan text-xl md:text-3xl font-mono tracking-[0.2em] mb-12 border-l-4 border-helm-cyan pl-6"
          >
            STEER TOWARD DIGITAL
          </motion.p>
        </div>
      </section>

      {/* The Gallery */}
      <section className="px-6 pb-32">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-16 border-b border-white/10 pb-6">
            <div>
              <h2 className="text-3xl text-white font-bold font-mono">
                <TextScramble text="ARCHIVE_ACCESS" />
              </h2>
              <p className="text-helm-silver/60 mt-2 font-mono text-xs">
                CLEARANCE LEVEL: PUBLIC
              </p>
            </div>
            <span className="text-helm-cyan font-mono text-xl">0{projects.length} ITEMS</span>
          </div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projects.map((project) => (
              <motion.div key={project.id} variants={item}>
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Manifesto */}
      <Manifesto />

      {/* Footer Terminal */}
      <footer className="border-t border-white/5 py-20 bg-black/40 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 font-mono text-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              {/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
              <h3 className="text-white font-bold mb-4">// COMM_UPLINK</h3>
              <a href="mailto:phearaneron.soeung@gmail.com" className="text-helm-cyan hover:bg-helm-cyan hover:text-helm-dark px-1 transition-colors block w-fit mb-2">
                {'>'} phearaneron.soeung@gmail.com
              </a>
              <a href="https://github.com/pr0meth4us" target="_blank" className="text-helm-cyan hover:bg-helm-cyan hover:text-helm-dark px-1 transition-colors block w-fit">
                {'>'} github.com/pr0meth4us
              </a>
            </div>
            <div className="text-helm-silver/40 text-right">
              <p>SYSTEM STATUS: OPTIMAL</p>
              <p>HELM v2.0 // BUILD 2025</p>
              <p>© PR0METH4US</p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
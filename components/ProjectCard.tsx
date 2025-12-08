'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Project } from '@/types'; // FIX: Point to correct type definition file
import { Badge } from '@/components/ui/Badge';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/projects/${project.slug}`} className="block h-full">
      <motion.div
        whileHover={{ y: -5 }}
        className="group relative h-full rounded-2xl overflow-hidden p-[1px]"
      >
        {/* === 1. THE BORDER RUNNER (Spinning Light) === */}
        <div className="absolute inset-[-1000%] bg-[conic-gradient(from_90deg_at_50%_50%,#0B0C10_0%,#66FCF1_50%,#0B0C10_100%)] animate-[spin_2s_linear_infinite] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* === CARD CONTENT CONTAINER === */}
        <div className="relative h-full bg-helm-dark rounded-2xl overflow-hidden border border-white/5 group-hover:border-transparent transition-colors">

          {/* Image Section */}
          <div className="relative h-64 w-full border-b border-white/5 overflow-hidden">
            <Image
              src={project.coverImage}
              alt={project.title}
              fill
              className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
            />

            {/* === 2. THE LIGHT ON THE PICTURE (Scanner Effect) === */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-helm-cyan/10 to-transparent translate-y-[-100%] group-hover:translate-y-[100%] transition-transform duration-1000 ease-in-out z-10" />
            <div className="absolute w-full h-[1px] bg-helm-cyan/50 top-0 shadow-[0_0_15px_rgba(102,252,241,1)] translate-y-[-100%] group-hover:translate-y-[256px] transition-transform duration-1000 ease-in-out z-20 delay-75" />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-helm-dark/40 group-hover:bg-transparent transition-colors duration-500" />
          </div>

          {/* Text Content */}
          <div className="p-6 flex flex-col flex-grow bg-gradient-to-b from-helm-gray/20 to-helm-dark">
            <div className="flex justify-between items-center mb-4">
              <Badge className="bg-helm-gray/50 border-white/10 text-helm-silver">
                {project.category}
              </Badge>
              {project.isCommercial && (
                <span className="text-helm-cyan text-[10px] font-bold tracking-widest uppercase px-2 py-1 bg-helm-cyan/10 rounded border border-helm-cyan/20 shadow-[0_0_10px_rgba(102,252,241,0.2)]">
                   Live System
                 </span>
              )}
            </div>

            <h3 className="text-2xl font-bold text-white mb-2 font-mono tracking-tight">
              {project.title}
            </h3>

            <p className="text-helm-silver/60 text-sm leading-relaxed mb-6 flex-grow font-light">
              {project.tagline}
            </p>

            <div className="mt-auto pt-4 border-t border-white/5 flex items-center justify-between text-helm-cyan text-sm font-medium tracking-wide">
              <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-mono text-xs">
                :: ACCESS_DATA
              </span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
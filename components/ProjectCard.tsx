import Image from 'next/image';
import Link from 'next/link';
import { Project } from '@/data/projects'; // Adjusted import path based on previous step
import { Badge } from '@/components/ui/Badge';
import { ArrowUpRight } from 'lucide-react';

export function ProjectCard({ project }: { project: Project }) {
    return (
        <Link
            href={`/projects/${project.slug}`}
            className="group card-glass relative flex flex-col h-full hover:border-helm-cyan/50 transition-colors duration-300"
        >
            {/* Image Container */}
            <div className="relative h-48 w-full overflow-hidden border-b border-white/5">
                <Image
                    src={project.coverImage}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-helm-dark/20 group-hover:bg-transparent transition-colors duration-300" />
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-2">
                    <Badge>{project.category}</Badge>
                    {project.isCommercial && (
                        <span className="text-helm-cyan text-xs font-bold tracking-widest uppercase animate-pulse">
               Commercial
             </span>
                    )}
                </div>

                <h3 className="text-xl text-white mb-2 group-hover:text-helm-cyan transition-colors">
                    {project.title}
                </h3>

                <p className="text-helm-silver text-sm line-clamp-2 mb-4 flex-grow">
                    {project.tagline}
                </p>

                <div className="flex items-center text-helm-cyan text-sm font-medium mt-auto">
                    View Exhibit <ArrowUpRight className="ml-1 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
            </div>
        </Link>
    );
}
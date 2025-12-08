import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { projects } from '@/data/projects';
import { Badge } from '@/components/ui/Badge';
import { ArrowLeft, Github, Globe, ExternalLink } from 'lucide-react';

export function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

export default async function ProjectPage({
                                              params,
                                          }: {
    params: Promise<{ slug: string }>
}) {
    const resolvedParams = await params;
    const project = projects.find((p) => p.slug === resolvedParams.slug);

    if (!project) {
        notFound();
    }

    return (
        <main className="min-h-screen py-12 px-6">
            <div className="max-w-5xl mx-auto">

                {/* Navigation */}
                <Link
                    href="/"
                    className="inline-flex items-center text-helm-silver hover:text-helm-cyan transition-colors mb-12 group"
                >
                    <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                    Back to Gallery
                </Link>

                {/* Header Content */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                    <div className="space-y-6">
                        <Badge className="text-sm px-3 py-1">{project.category}</Badge>
                        <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                            {project.title}
                        </h1>
                        <p className="text-xl text-helm-cyan font-light">
                            {project.tagline}
                        </p>

                        {/* Tech Stack */}
                        <div className="flex flex-wrap gap-2 pt-4">
                            {project.techStack.map((tech) => (
                                <span
                                    key={tech}
                                    className="px-3 py-1 text-xs border border-white/10 rounded-full text-helm-silver"
                                >
                  {tech}
                </span>
                            ))}
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-wrap gap-4 pt-8">
                            {project.links.map((link) => {
                                const isPrimary = project.isCommercial || link.type === 'demo' || link.type === 'dedicated-site';

                                return (
                                    <a
                                        key={link.url}
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={isPrimary ? 'btn-commercial' : 'btn-exhibit'}
                                    >
                                        {link.label}
                                        {link.type === 'github' && <Github className="w-4 h-4" />}
                                        {link.type === 'demo' && <Globe className="w-4 h-4" />}
                                        {link.type === 'dedicated-site' && <ExternalLink className="w-4 h-4" />}
                                    </a>
                                );
                            })}
                        </div>
                    </div>

                    {/* Cover Image */}
                    <div className="relative h-[300px] lg:h-[400px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                        <Image
                            src={project.coverImage}
                            alt={project.title}
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                </div>

                {/* Deep Dive Description */}
                <div className="border-t border-white/10 pt-16">
                    <h2 className="text-2xl text-white mb-8">Operational Briefing</h2>
                    <div className="prose prose-invert prose-lg max-w-none text-helm-silver/80">
                        <p>{project.description}</p>
                    </div>
                </div>

            </div>
        </main>
    );
}
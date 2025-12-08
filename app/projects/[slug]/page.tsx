import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { projects } from '@/data/projects';
import { Badge } from '@/components/ui/Badge';
import { ArrowLeft, Github, Globe, ExternalLink, Terminal, Cpu, Radio } from 'lucide-react';
import { TextScramble } from '@/components/ui/TextScramble';
import { BackgroundGrid } from '@/components/ui/BackgroundGrid';

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
    <main className="min-h-screen text-helm-silver selection:bg-helm-cyan selection:text-helm-dark pb-20">
      <BackgroundGrid />

      {/* Top Navigation Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 px-6 py-6 bg-helm-dark/80 backdrop-blur-md border-b border-white/5 flex justify-between items-center">
        <Link
          href="/"
          className="group inline-flex items-center text-xs font-mono text-helm-cyan hover:text-white transition-colors"
        >
          <ArrowLeft className="w-3 h-3 mr-2 group-hover:-translate-x-1 transition-transform" />
          // RETURN_TO_BASE
        </Link>
        <div className="text-[10px] font-mono text-helm-silver/50 tracking-widest">
          SECURE_CONNECTION :: ENCRYPTED
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-32">

        {/* Header Block */}
        <div className="mb-12 border-l-2 border-helm-cyan pl-6 relative">
          <div className="absolute top-0 left-0 w-2 h-2 bg-helm-cyan -translate-x-[5px] -translate-y-[1px] shadow-[0_0_10px_#66FCF1]" />
          <Badge className="mb-4 bg-helm-cyan/10 border-helm-cyan/30 text-helm-cyan font-mono tracking-widest">
            {project.category.toUpperCase()}
          </Badge>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-2 tracking-tight uppercase">
            <TextScramble text={project.title} />
          </h1>
          <p className="text-xl text-helm-silver/60 font-light font-mono">
            {project.tagline}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* LEFT COL: Visuals & Briefing */}
          <div className="lg:col-span-2 space-y-12">

            {/* The Screen (Image) */}
            <div className="relative rounded-xl overflow-hidden border border-white/10 bg-helm-dark shadow-2xl group">
              {/* Scanline Overlay */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-10 bg-[length:100%_2px,3px_100%] pointer-events-none" />
              <div className="relative h-[400px] w-full">
                <Image
                  src={project.coverImage}
                  alt={project.title}
                  fill
                  className="object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                  priority
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-helm-cyan/50" />
            </div>

            {/* The Briefing */}
            <div className="prose prose-invert prose-lg max-w-none text-helm-silver/80">
              <h3 className="text-helm-cyan font-mono text-sm tracking-widest border-b border-white/10 pb-2 mb-6">
                // OPERATIONAL_BRIEFING
              </h3>
              <p className="leading-relaxed">
                {project.description}
              </p>
            </div>
          </div>

          {/* RIGHT COL: Data Panel (Sticky) */}
          <div className="lg:col-span-1">
            <div className="sticky top-32 space-y-8 bg-white/5 backdrop-blur-sm border border-white/5 p-6 rounded-xl">

              {/* System Specs */}
              <div>
                <div className="flex items-center gap-2 text-helm-cyan mb-4 font-mono text-xs">
                  <Cpu className="w-4 h-4" /> SYSTEM_ARCHITECTURE
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 text-xs bg-helm-dark border border-white/10 text-helm-silver font-mono hover:border-helm-cyan/50 transition-colors cursor-crosshair"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Deployment Status */}
              <div>
                <div className="flex items-center gap-2 text-helm-cyan mb-4 font-mono text-xs">
                  <Radio className="w-4 h-4" /> STATUS_REPORT
                </div>
                <div className="flex items-center gap-3 p-3 bg-helm-dark border border-white/10 rounded-lg">
                  <div className={`w-2 h-2 rounded-full ${project.isCommercial ? 'bg-green-500 shadow-[0_0_8px_#22c55e]' : 'bg-yellow-500'}`} />
                  <span className="text-sm font-bold text-white uppercase">
                    {project.isCommercial ? 'Live // Commercial' : 'Prototype // Exhibit'}
                  </span>
                </div>
              </div>

              {/* Action Protocols */}
              <div className="pt-4 border-t border-white/10">
                <div className="flex items-center gap-2 text-helm-cyan mb-4 font-mono text-xs">
                  <Terminal className="w-4 h-4" /> EXECUTE_PROTOCOL
                </div>
                <div className="space-y-3">
                  {project.links.map((link) => {
                    const isPrimary = link.type === 'dedicated-site' || link.type === 'demo';
                    return (
                      <a
                        key={link.url}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`
                          flex items-center justify-between w-full px-4 py-3 text-sm font-bold tracking-wide transition-all duration-300 border
                          ${isPrimary
                          ? 'bg-helm-cyan text-helm-dark border-helm-cyan hover:bg-white hover:border-white'
                          : 'bg-transparent text-helm-silver border-white/20 hover:border-helm-cyan hover:text-helm-cyan'
                        }
                        `}
                      >
                        {link.label}
                        {link.type === 'github' && <Github className="w-4 h-4" />}
                        {(link.type === 'demo' || link.type === 'dedicated-site') && <ExternalLink className="w-4 h-4" />}
                      </a>
                    );
                  })}
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
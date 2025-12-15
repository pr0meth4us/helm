import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { projects } from '@/data/projects';
import { Badge } from '@/components/ui/Badge';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { ArrowLeft, Github, Globe, ExternalLink, Terminal, Cpu, Radio, Lock, ArrowRight } from 'lucide-react';
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

    // =====================================================================================
    // LAYOUT A: THE ACHE OF TIME (Abstract Art Vibe - HIGH READABILITY)
    // =====================================================================================
    if (project.slug === 'the-ache-of-time') {
        return (
            // A more abstract, dark canvas feel
            <main className="min-h-screen bg-helm-dark text-[#e5e5e5] relative overflow-hidden flex flex-col items-center py-24 px-6 selection:bg-[#cd5c27] selection:text-white">

                {/* Atmospheric Noise Grain (Using helm-dark and subtle opacity) */}
                <div className="fixed inset-0 opacity-[0.06] pointer-events-none z-0 mix-blend-lighten"
                     style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
                />

                {/* Ambient Glows (Subtler helm colors) */}
                <div className="fixed top-[-20%] right-[-10%] w-[800px] h-[800px] bg-helm-cyan/10 rounded-full blur-[150px] pointer-events-none" />
                <div className="fixed bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-helm-teal/10 rounded-full blur-[150px] pointer-events-none" />

                {/* Minimal Nav: Enhanced mix-blend to stand out on dark background */}
                <Link
                    href="/"
                    className="fixed top-8 left-8 text-[10px] uppercase tracking-[0.2em] text-white/50 hover:text-helm-cyan transition-colors z-50 mix-blend-exclusion"
                >
                    <ArrowLeft className="w-3 h-3 inline-block mr-2 -mt-[1px]" /> Return to Archive
                </Link>

                {/* Content Container */}
                <div className="max-w-4xl w-full relative z-10 space-y-16">

                    {/* Header Block: Abstracted from a vertical line to a data fragment */}
                    <div className="text-center space-y-6">
                        <p className="font-mono text-xs text-[#cd5c27] tracking-[0.3em] uppercase opacity-80">
                            Exhibit 04
                        </p>
                        <h1 className="text-6xl md:text-9xl font-serif italic text-white leading-tight opacity-90">
                            The Ache of Time
                        </h1>
                        {/* Abstracted Divider: A small fading fragment of data */}
                        <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-helm-cyan/50 to-transparent mx-auto animate-pulse"></div>
                    </div>

                    {/* The Essay / Description: Prosaic section with high readability preserved */}
                    <div className="prose prose-invert prose-xl mx-auto font-serif leading-loose text-white/70">

                        <p className="py-4">
                            <span className="text-white text-8xl float-left mr-4 mt-[-10px] font-serif italic font-light shadow-xl shadow-[#cd5c27]/10" style={{ lineHeight: '0.8' }}>T</span>here is a particular cruelty in how time treats experience. While we are inside a moment, we resist it. We complain about its slowness, its discomfort, its smallness. We want something else—later, elsewhere, better. Yet once the moment passes and becomes unreachable, it transforms. What was once irritating becomes tender. What was heavy becomes meaningful. What was ordinary becomes sacred. This is not because the past was better, but because distance edits it.
                        </p>

                        <p className="py-4">
                            Nostalgia is often mistaken for love of the past. In truth, it is a form of grief. It emerges not from joy, but from loss—from the recognition that something once lived and can no longer be entered. The mind responds to this loss not by preserving reality, but by softening it. It removes the sharp edges. It lowers the volume of discomfort. It rewrites boredom as anticipation, loneliness as freedom, scarcity as intimacy. This process is not malicious; it is protective. But it is dishonest.
                        </p>

                        <p className="py-4">
                            Memory is not an archive. It is a storyteller with an agenda. It does not aim for accuracy, but for coherence—for a version of the past that can live inside us without tearing us apart. Pain, when left raw, is unbearable. So memory processes it, much like grief processes death: slowly, selectively, and with embellishment. What remains is not the truth of what happened, but the feeling that something mattered.
                        </p>

                        {/* PULL QUOTE - High Contrast (REDESIGNED) */}
                        <div className="my-16">
                            <p className="font-mono text-xs text-helm-cyan tracking-widest mb-2 border-b border-helm-cyan/30 pb-1">
                                // MEMORY_FRAGMENT_RETRIEVED
                            </p>
                            <blockquote className="border-l-4 border-[#cd5c27] pl-8 text-3xl font-sans text-white/90 font-bold tracking-tight bg-white/5 p-4">
                                &#34;The mind smooths the past because jagged memories are too painful to hold continuously.&#34;
                            </blockquote>
                        </div>

                        <p className="py-4">
                            This is why nostalgia feels warm even when what it remembers was not. The warmth does not come from the event itself, but from the knowledge that the event is gone. Absence gives meaning retroactively. A small room becomes “cozy” only after you have left it forever. Silence becomes “peaceful” only once it can no longer surround you.
                        </p>

                        <p className="py-4">
                            Yet there is a quiet violence in this smoothing. By romanticizing what was, we turn the present into something that can never compete. The now is always incomplete, noisy, unresolved. It has not yet been edited. It has not yet been granted narrative closure. Compared to the polished memory of the past, the present feels dull, chaotic, and unsatisfying. We resent it for failing to feel the way the past does, forgetting that the past did not feel that way either.
                        </p>

                        <p className="py-4">
                            This creates a loop: dissatisfaction in the present, idealization of the past, longing for something that never truly existed as remembered. We chase ghosts—versions of people, places, and selves that only live in reconstruction. We search for old emotions in new faces. We try to recreate atmospheres without realizing that the atmosphere was never the point. Time was.
                        </p>

                        <p className="py-4">
                            There is a particular sorrow in realizing that memory was never meant to comfort us. In myth, Mnemosyne, the goddess of memory, does not offer escape. She offers clarity. Memory exists not to preserve happiness, but to mark loss. It reminds us that we had something, that it mattered, and that it is gone. This knowledge is what gives life weight—but it is also what hurts.
                        </p>

                        <p className="py-4">
                            Attachment intensifies this pain. To cling to memory is to grasp something already cooling. The tighter we hold, the more we burn ourselves. We convince ourselves that remembering keeps something alive, when in reality it often keeps us suspended—unable to fully inhabit the present, unable to release the past. The tragedy is not that we remember, but that we mistake remembrance for return.
                        </p>

                        <p className="py-4">
                            Time does not move evenly through us. Some years vanish without a trace; others linger unbearably. A single ordinary evening can outlive entire chapters of life, simply because it was the last of something. Often, we do not know a moment is ending while it is happening. One day, we put something down—a habit, a toy, a person—and never pick it up again. There is no ceremony. Meaning arrives only afterward.
                        </p>

                        <p className="py-4">
                            This is the paradox of time: it feels too fast when we look back, and too slow when we are inside it. Both perceptions are distortions. What actually hurts is not speed, but irreversibility. The door closes quietly, and we spend years listening for the sound.
                        </p>

                        <p className="py-4">
                            Perhaps the most painful realization is that nostalgia is not proof that the past was better, but proof that we survived it. What we miss is not the moment itself, but the version of ourselves who did not yet know it would end. That innocence cannot be recovered. It can only be mourned.
                        </p>

                        <p className="py-4">
                            And so we live with the ache of time: grateful for memory, burdened by it, softened by lies we need in order to go on. The past glows not because it was golden, but because it is unreachable. The present feels harsh not because it is empty, but because it is unfinished. One day, this moment too will be edited, warmed, and missed.
                        </p>

                        {/* FINAL QUOTE - Retained for impact */}
                        <p className="text-white text-3xl font-serif italic pt-12 border-t border-white/10 mt-16 leading-normal text-center">
                            And we will swear—incorrectly—that it was better back then.
                        </p>
                    </div>

                    {/* Call to Action: Minimalist, "classified" button style */}
                    <div className="flex flex-col items-center justify-center pt-12 space-y-6 pb-20">
                        <a
                            href="/ache.html"
                            className="group relative inline-flex items-center justify-center px-8 py-3 overflow-hidden rounded-md bg-helm-cyan/10 border border-helm-cyan/50 text-helm-cyan transition-all duration-500 hover:bg-helm-cyan hover:text-helm-dark hover:scale-105"
                        >
                            <span className="relative font-mono text-xs tracking-[0.2em] uppercase mr-3">
                                {'// ENTER_EXPERIENCE'}
                            </span>
                            <ArrowRight className="w-4 h-4 text-helm-cyan group-hover:text-helm-dark transition-transform duration-500 group-hover:translate-x-1" />
                        </a>

                        <p className="text-[10px] font-mono text-white/20 uppercase tracking-widest">
                            Audio Required • Non-Linear Narrative
                        </p>
                    </div>

                </div>
            </main>
        );
    }

    // =====================================================================================
    // LAYOUT B: STANDARD MISSION DOSSIER (For Savvify, LPR, Rachana, etc.)
    // =====================================================================================
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
                    {'// RETURN_TO_BASE'}
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
                                {'// OPERATIONAL_BRIEFING'}
                            </h3>
                            <p className="leading-relaxed whitespace-pre-wrap">
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
                                    <div className={`w-2 h-2 rounded-full ${project.isCommercial ?
                                        'bg-green-500 shadow-[0_0_8px_#22c55e]' : 'bg-yellow-500'}`} />
                                    <span className="text-sm font-bold text-white uppercase">
                    {project.isCommercial ?
                        'Live // Commercial' : 'Prototype // Exhibit'}
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

                                        // === PRIVATE / LOCKED BUTTON LOGIC ===
                                        if (link.type === 'private') {
                                            return (
                                                <div
                                                    key={link.label}
                                                    className="flex items-center justify-between w-full px-4 py-3 text-sm font-bold tracking-wide border border-white/5 bg-white/5 text-helm-silver/30 cursor-not-allowed rounded select-none"
                                                >
                          <span className="flex items-center gap-2">
                            {link.label}
                              <span className="text-[9px] bg-white/5 px-1.5 py-0.5 rounded tracking-wider border border-white/5">
                              CLASSIFIED
                            </span>
                          </span>
                                                    <Lock className="w-4 h-4" />
                                                </div>
                                            );
                                        }
                                        // =====================================

                                        return (
                                            <a
                                                key={link.url}
                                                href={link.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className={`
                          flex items-center justify-between w-full px-4 py-3 text-sm 
font-bold tracking-wide transition-all duration-300 border rounded
                          ${isPrimary
                                                    ? 'bg-helm-cyan text-helm-dark border-helm-cyan hover:bg-white hover:border-white shadow-[0_0_15px_rgba(102,252,241,0.2)]'
                                                    : 'bg-transparent text-helm-silver border-white/20 hover:border-helm-cyan hover:text-helm-cyan hover:bg-helm-cyan/10'
                                                }
                                                `}
                                            >
                                                {link.label}
                                                {link.type === 'github' && <Github className="w-4 h-4" />}
                                                {(link.type === 'demo' ||
                                                    link.type === 'dedicated-site') && <ExternalLink className="w-4 h-4" />}
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
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { projects } from '@/data/projects';
import { Badge } from '@/components/ui/Badge';
import { ArrowLeft, Github, ExternalLink, Terminal, Cpu, Lock, ArrowRight } from 'lucide-react';
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
    // LAYOUT A: THE ACHE OF TIME (Abstract Art Vibe - FULL ESSAY)
    // =====================================================================================
    if (project.slug === 'the-ache-of-time') {
        return (
            <main className="min-h-screen bg-[#1a1a1a] text-[#e8e6e1] relative overflow-hidden flex flex-col items-center py-24 px-6 selection:bg-[#cd5c27] selection:text-white">

                {/* --- FONTS INJECTION (Scoped) --- */}
                <style>{`
                    @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,400;1,600&family=Manrope:wght@200;300;400;600&display=swap');
                    .font-ache-serif { font-family: 'Cormorant Garamond', serif; }
                    .font-ache-sans { font-family: 'Manrope', sans-serif; }
                `}</style>

                {/* --- ATMOSPHERICS --- */}
                {/* Noise Overlay */}
                <div className="fixed inset-0 opacity-[0.07] pointer-events-none z-0 mix-blend-overlay"
                     style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
                />

                {/* Abstract Blobs */}
                <div className="fixed top-[-10%] right-[-10%] w-[600px] h-[600px] bg-[#cd5c27]/10 rounded-full blur-[120px] pointer-events-none animate-pulse" style={{ animationDuration: '8s' }} />
                <div className="fixed bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-200/5 rounded-full blur-[100px] pointer-events-none" />

                {/* Rosy Vignette */}
                <div className="fixed inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.6)_100%)] pointer-events-none z-10" />

                {/* --- NAVIGATION --- */}
                <Link
                    href="/"
                    className="fixed top-8 left-8 text-[10px] font-ache-sans uppercase tracking-[0.2em] text-[#e8e6e1]/40 hover:text-[#cd5c27] transition-colors z-50 group"
                >
                    <ArrowLeft className="w-3 h-3 inline-block mr-2 -mt-[1px] group-hover:-translate-x-1 transition-transform" />
                    Exhibit Collection
                </Link>

                {/* --- CONTENT CONTAINER --- */}
                <div className="max-w-3xl w-full relative z-20 space-y-20 mt-12">

                    {/* HEADER */}
                    <div className="text-center space-y-6">
                        <p className="font-ache-sans text-xs text-[#cd5c27] tracking-[0.5em] uppercase opacity-80">
                            Exhibit 01: Distortion
                        </p>
                        <h1 className="text-6xl md:text-8xl font-ache-serif italic text-[#e8e6e1] leading-none font-light opacity-90">
                            The Ache of Time
                        </h1>
                        <div className="w-px h-16 bg-gradient-to-b from-[#cd5c27] to-transparent mx-auto mt-8 opacity-50"></div>
                    </div>

                    {/* ESSAY BODY */}
                    <article className="font-ache-serif text-xl md:text-2xl leading-relaxed text-[#e8e6e1]/70 space-y-8 font-light">

                        <p>
                            <span className="text-[#cd5c27] text-7xl float-left mr-3 mt-[-15px] font-ache-serif italic">T</span>
                            here is a particular cruelty in how time treats experience. While we are inside a moment, we resist it. We complain about its slowness, its discomfort, its smallness. We want something else—later, elsewhere, better.
                        </p>

                        <p>
                            Yet once the moment passes and becomes unreachable, it transforms. What was once irritating becomes tender. What was heavy becomes meaningful. What was ordinary becomes sacred. This is not because the past was better, but because distance edits it.
                        </p>

                        <p>
                            Nostalgia is often mistaken for love of the past. In truth, it is a form of grief. It emerges not from joy, but from loss—from the recognition that something once lived and can no longer be entered.
                        </p>

                        {/* --- VISUAL BREAK: THE REWRITE --- */}
                        <div className="my-16 relative py-12 text-center group border-y border-white/5 bg-white/[0.02]">
                            <p className="font-ache-sans text-[10px] text-gray-500 uppercase tracking-widest mb-6">The Rewrite</p>
                            <div className="flex flex-col items-center gap-4">
                                <span className="text-2xl md:text-3xl text-gray-600 line-through decoration-[#cd5c27]/50 opacity-40 font-ache-serif italic">
                                    "It was boring and endless."
                                </span>
                                <span className="text-3xl md:text-5xl font-ache-serif italic text-[#e8e6e1]">
                                    "It was <span className="text-[#cd5c27]">magical</span>."
                                </span>
                            </div>
                        </div>

                        <p>
                            The mind responds to this loss not by preserving reality, but by softening it. It removes the sharp edges. It lowers the volume of discomfort. It rewrites boredom as anticipation, loneliness as freedom, scarcity as intimacy. This process is not malicious; it is protective. But it is dishonest.
                        </p>

                        <p>
                            Memory is not an archive. It is a storyteller with an agenda. It does not aim for accuracy, but for coherence—for a version of the past that can live inside us without tearing us apart. Pain, when left raw, is unbearable. So memory processes it, much like grief processes death: slowly, selectively, and with embellishment. What remains is not the truth of what happened, but the feeling that something mattered.
                        </p>

                        <p>
                            This is why nostalgia feels warm even when what it remembers was not. The warmth does not come from the event itself, but from the knowledge that the event is gone. Absence gives meaning retroactively. A small room becomes “cozy” only after you have left it forever. Silence becomes “peaceful” only once it can no longer surround you.
                        </p>

                        {/* --- VISUAL BREAK: DISTORTION IMAGE --- */}
                        <div className="relative w-full aspect-video my-16 border border-white/10 bg-black/20 overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent z-10 opacity-80"></div>
                            <Image
                                src={project.coverImage}
                                alt="Abstract conceptual art representing the distortion of memory and time"
                                fill
                                className="object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 scale-105 group-hover:scale-100"
                            />
                            <div className="absolute bottom-4 left-4 z-20">
                                <p className="font-ache-sans text-[9px] tracking-[0.3em] text-[#cd5c27] uppercase">
                                    Fig 4. Memory Distortion
                                </p>
                            </div>
                        </div>

                        <p>
                            Yet there is a quiet violence in this smoothing. By romanticizing what was, we turn the present into something that can never compete. The now is always incomplete, noisy, unresolved. It has not yet been edited. It has not yet been granted narrative closure. Compared to the polished memory of the past, the present feels dull, chaotic, and unsatisfying. We resent it for failing to feel the way the past does, forgetting that the past did not feel that way either.
                        </p>

                        <p>
                            This creates a loop: dissatisfaction in the present, idealization of the past, longing for something that never truly existed as remembered. We chase ghosts—versions of people, places, and selves that only live in reconstruction. We search for old emotions in new faces. We try to recreate atmospheres without realizing that the atmosphere was never the point. Time was.
                        </p>

                        <p>
                            There is a particular sorrow in realizing that memory was never meant to comfort us. In myth, Mnemosyne, the goddess of memory, does not offer escape. She offers clarity. Memory exists not to preserve happiness, but to mark loss. It reminds us that we had something, that it mattered, and that it is gone. This knowledge is what gives life weight—but it is also what hurts.
                        </p>

                        <p>
                            Attachment intensifies this pain. To cling to memory is to grasp something already cooling. The tighter we hold, the more we burn ourselves. We convince ourselves that remembering keeps something alive, when in reality it often keeps us suspended—unable to fully inhabit the present, unable to release the past. The tragedy is not that we remember, but that we mistake remembrance for return.
                        </p>

                        <div className="pl-6 border-l border-[#cd5c27] my-12 py-2">
                            <p className="text-xl md:text-2xl italic text-white/90">
                                "One day you put the toy down and never picked it up again. And you didn't even notice."
                            </p>
                        </div>

                        <p>
                            Time does not move evenly through us. Some years vanish without a trace; others linger unbearably. A single ordinary evening can outlive entire chapters of life, simply because it was the last of something. Often, we do not know a moment is ending while it is happening. There is no ceremony. Meaning arrives only afterward.
                        </p>

                        <p>
                            This is the paradox of time: it feels too fast when we look back, and too slow when we are inside it. Both perceptions are distortions. What actually hurts is not speed, but irreversibility. The door closes quietly, and we spend years listening for the sound.
                        </p>

                        <p>
                            Perhaps the most painful realization is that nostalgia is not proof that the past was better, but proof that we survived it. What we miss is not the moment itself, but the version of ourselves who did not yet know it would end. That innocence cannot be recovered. It can only be mourned.
                        </p>

                        <p>
                            And so we live with the ache of time: grateful for memory, burdened by it, softened by lies we need in order to go on. The past glows not because it was golden, but because it is unreachable. The present feels harsh not because it is empty, but because it is unfinished. One day, this moment too will be edited, warmed, and missed.
                        </p>

                        <p className="text-[#cd5c27] font-ache-serif italic text-3xl md:text-4xl text-center pt-16 pb-8 leading-tight opacity-90">
                            And we will swear—incorrectly—<br/>that it was better back then.
                        </p>

                    </article>

                    {/* --- CALL TO ACTION --- */}
                    <div className="flex flex-col items-center justify-center pt-16 pb-32 border-t border-white/5">
                        <p className="font-ache-sans text-[10px] text-gray-500 uppercase tracking-[0.3em] mb-8 animate-pulse">
                            Interactive Terminal Available
                        </p>
                        <a
                            href="/ache.html"
                            className="group relative px-12 py-4 bg-transparent border border-[#cd5c27]/30 hover:border-[#cd5c27] transition-all duration-500 overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-[#cd5c27]/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out"></div>
                            <span className="relative font-ache-serif text-xl italic text-[#e8e6e1] group-hover:text-white flex items-center gap-4">
                                Enter Mnemosyne <ArrowRight className="w-4 h-4 opacity-70 group-hover:translate-x-1 transition-transform" />
                            </span>
                        </a>
                    </div>

                </div>
            </main>
        );
    }

    // =====================================================================================
    // LAYOUT B: STANDARD MISSION DOSSIER (Unchanged for other projects)
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
                {/* Standard Project Header */}
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
                                        <span key={tech} className="px-3 py-1.5 text-xs bg-helm-dark border border-white/10 text-helm-silver font-mono hover:border-helm-cyan/50 transition-colors cursor-crosshair">
                                            {tech}
                                        </span>
                                    ))}
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
                                        if (link.type === 'private') {
                                            return (
                                                <div key={link.label} className="flex items-center justify-between w-full px-4 py-3 text-sm font-bold tracking-wide border border-white/5 bg-white/5 text-helm-silver/30 cursor-not-allowed rounded select-none">
                                                    <span className="flex items-center gap-2">
                                                        {link.label}
                                                        <span className="text-[9px] bg-white/5 px-1.5 py-0.5 rounded tracking-wider border border-white/5">CLASSIFIED</span>
                                                    </span>
                                                    <Lock className="w-4 h-4" />
                                                </div>
                                            );
                                        }
                                        return (
                                            <a
                                                key={link.url}
                                                href={link.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className={`flex items-center justify-between w-full px-4 py-3 text-sm font-bold tracking-wide transition-all duration-300 border rounded
                                                    ${isPrimary
                                                    ? 'bg-helm-cyan text-helm-dark border-helm-cyan hover:bg-white hover:border-white shadow-[0_0_15px_rgba(102,252,241,0.2)]'
                                                    : 'bg-transparent text-helm-silver border-white/20 hover:border-helm-cyan hover:text-helm-cyan hover:bg-helm-cyan/10'
                                                }`}
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
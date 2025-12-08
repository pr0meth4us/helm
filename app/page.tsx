import { projects } from '@/data/projects';
import { ProjectCard } from '@/components/ProjectCard';

export default function Home() {
    return (
        <main className="min-h-screen bg-helm-dark bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-helm-gray via-helm-dark to-helm-dark">

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 px-6">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-helm-silver via-white to-helm-silver mb-6 tracking-tight">
                        HELM
                    </h1>
                    <p className="text-helm-cyan text-xl md:text-2xl font-medium tracking-wide mb-8">
                        STEER TOWARD DIGITAL
                    </p>
                    <p className="max-w-2xl mx-auto text-helm-silver/80 text-lg leading-relaxed">
                        The technical portfolio and digital exhibition of <span className="text-white font-semibold">Prometheus</span>.
                        Exploring the intersection of Government tech, AI/ML tools, and high-fidelity web architecture.
                    </p>
                </div>
            </section>

            {/* Gallery Grid */}
            <section className="px-6 pb-32">
                <div className="max-w-7xl mx-auto">
                    <div className="flex items-center justify-between mb-12 border-b border-white/10 pb-4">
                        <h2 className="text-2xl text-white">Exhibits</h2>
                        <span className="text-helm-silver text-sm">{projects.length} Artifacts</span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t border-white/5 py-12 text-center text-helm-silver/40 text-sm">
                <p>© {new Date().getFullYear()} HELM. Designed & Developed by Prometheus.</p>
            </footer>
        </main>
    );
}
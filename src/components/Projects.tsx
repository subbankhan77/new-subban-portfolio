import { mobileProjects, webProjects } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="border-t border-zinc-100 bg-brand-soft">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeading
          eyebrow="Projects"
          title="Selected work"
          description="A mix of live web platforms and shipped mobile apps across mobility, real estate, travel, wellness and social."
        />

        <div className="mb-16">
          <h3 className="mb-6 flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-zinc-600">
            Web Applications
            <span className="h-px flex-1 bg-zinc-200" />
          </h3>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {webProjects.map((p) => (
              <ProjectCard key={p.name} project={p} />
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h3 className="mb-6 flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-zinc-600">
            Mobile Applications
            <span className="h-px flex-1 bg-zinc-200" />
          </h3>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {mobileProjects.map((p) => (
              <ProjectCard key={p.name} project={p} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

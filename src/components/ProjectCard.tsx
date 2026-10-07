import type { Project } from "@/data/portfolio";
import { AppleIcon, AndroidIcon, GlobeIcon, ArrowUpRightIcon } from "./icons";

const iconFor = {
  iOS: AppleIcon,
  Android: AndroidIcon,
  Web: GlobeIcon,
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group relative flex h-full flex-col rounded-2xl border border-zinc-200 bg-white p-6 transition-all hover:-translate-y-1 hover:border-brand/30 hover:bg-zinc-50">
      {project.featured && (
        <span className="absolute right-4 top-4 rounded-full bg-brand/15 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-brand">
          Featured
        </span>
      )}

      <h3 className="pr-16 text-lg font-semibold text-zinc-900">{project.name}</h3>

      {project.description && (
        <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-600">
          {project.description}
        </p>
      )}

      {project.period && (
        <p className="mt-2 text-xs text-zinc-500">{project.period}</p>
      )}

      <div className="mt-5 flex flex-wrap gap-2">
        {project.links.map((link) => {
          const Icon = iconFor[link.label];
          return (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-xs font-medium text-zinc-800 transition-colors hover:border-brand/40 hover:bg-brand/10 hover:text-brand"
            >
              <Icon className="h-3.5 w-3.5" />
              {link.label === "Web" ? "Visit Site" : link.label}
              <ArrowUpRightIcon className="h-3 w-3 opacity-60" />
            </a>
          );
        })}
      </div>
    </div>
  );
}

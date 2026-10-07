import { experience } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading eyebrow="Experience" title="Where I've worked" />

      <div className="mx-auto max-w-3xl">
        <ol className="relative border-l border-zinc-200">
          {experience.map((job) => (
            <li key={job.role + job.company} className="mb-12 ml-8 last:mb-0">
              <span className="absolute -left-[7px] mt-1.5 h-3 w-3 rounded-full border-2 border-white bg-brand" />
              <div className="rounded-2xl border border-zinc-200 bg-white p-6">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-lg font-semibold text-zinc-900">{job.role}</h3>
                  <span className="rounded-full border border-zinc-200 px-3 py-1 text-xs text-zinc-600">
                    {job.period}
                  </span>
                </div>
                <p className="mt-1 text-sm font-medium text-brand">{job.company}</p>
                <ul className="mt-4 space-y-2">
                  {job.points.map((point) => (
                    <li key={point} className="flex gap-2 text-sm leading-relaxed text-zinc-700">
                      <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-zinc-500" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

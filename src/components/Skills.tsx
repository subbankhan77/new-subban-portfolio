import { skills, currentlyExpanding } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";

export default function Skills() {
  return (
    <section id="skills" className="border-t border-zinc-100 bg-brand-soft">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeading
          eyebrow="Technical Skills"
          title="Tools & technologies I work with"
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group) => (
            <div
              key={group.category}
              className="rounded-2xl border border-zinc-200 bg-white p-6 transition-colors hover:border-brand/30"
            >
              <h3 className="text-sm font-semibold text-zinc-900">{group.category}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-zinc-50 px-2.5 py-1 text-xs text-zinc-700"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-2xl border border-brand/20 bg-brand/[0.06] p-6">
          <h3 className="text-sm font-semibold text-brand">Currently Expanding</h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {currentlyExpanding.map((item) => (
              <span
                key={item}
                className="rounded-full border border-brand/30 px-3 py-1 text-xs text-brand"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

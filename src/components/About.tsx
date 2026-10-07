import { profile, interests } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading eyebrow="About Me" title="Building end-to-end products, remotely" />

      <div className="grid gap-10 md:grid-cols-5">
        <div className="md:col-span-3">
          <p className="text-base leading-relaxed text-zinc-700">{profile.summary}</p>

          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
            <InfoItem label="Location" value={profile.location} />
            <InfoItem label="Email" value={profile.email} />
            <InfoItem label="Phone" value={profile.phone} />
          </div>
        </div>

        <div className="md:col-span-2">
          <div className="rounded-2xl border border-zinc-200 bg-white p-6">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-zinc-600">
              Interests
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {interests.map((i) => (
                <span
                  key={i}
                  className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-sm text-zinc-700"
                >
                  {i}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoItem({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-xs uppercase tracking-wide text-zinc-500">{label}</p>
      <p className="mt-1 break-words text-sm text-zinc-800">{value}</p>
    </div>
  );
}

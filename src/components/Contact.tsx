import { profile } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";
import { MailIcon, PhoneIcon, MapPinIcon, LinkedInIcon } from "./icons";

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/15 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something together"
          description="Open to freelance projects, full-time remote roles, and interesting collaborations."
        />

        <div className="mx-auto flex max-w-xl flex-col items-center gap-4">
          <a
            href={`mailto:${profile.email}`}
            className="flex w-full items-center gap-4 rounded-2xl border border-zinc-200 bg-white px-6 py-4 transition-colors hover:border-brand/30 hover:bg-zinc-50"
          >
            <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-brand/15 text-brand">
              <MailIcon className="h-5 w-5" />
            </span>
            <span>
              <span className="block text-xs uppercase tracking-wide text-zinc-500">
                Email
              </span>
              <span className="text-sm font-medium text-zinc-900">{profile.email}</span>
            </span>
          </a>

          <a
            href={`tel:${profile.phone.replace(/\s+/g, "")}`}
            className="flex w-full items-center gap-4 rounded-2xl border border-zinc-200 bg-white px-6 py-4 transition-colors hover:border-brand/30 hover:bg-zinc-50"
          >
            <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-brand/15 text-brand">
              <PhoneIcon className="h-5 w-5" />
            </span>
            <span>
              <span className="block text-xs uppercase tracking-wide text-zinc-500">
                Phone
              </span>
              <span className="text-sm font-medium text-zinc-900">{profile.phone}</span>
            </span>
          </a>

          <div className="flex w-full items-center gap-4 rounded-2xl border border-zinc-200 bg-white px-6 py-4">
            <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-brand/15 text-brand">
              <MapPinIcon className="h-5 w-5" />
            </span>
            <span>
              <span className="block text-xs uppercase tracking-wide text-zinc-500">
                Location
              </span>
              <span className="text-sm font-medium text-zinc-900">{profile.location}</span>
            </span>
          </div>

          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center gap-4 rounded-2xl border border-zinc-200 bg-white px-6 py-4 transition-colors hover:border-brand/30 hover:bg-zinc-50"
          >
            <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-brand/15 text-brand">
              <LinkedInIcon className="h-5 w-5" />
            </span>
            <span>
              <span className="block text-xs uppercase tracking-wide text-zinc-500">
                LinkedIn
              </span>
              <span className="text-sm font-medium text-zinc-900">Subban Khan</span>
            </span>
          </a>

          <a
            href={`mailto:${profile.email}`}
            className="mt-4 rounded-full bg-brand px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-brand/25 transition-colors hover:bg-brand-dark"
          >
            Say Hello
          </a>
        </div>
      </div>
    </section>
  );
}

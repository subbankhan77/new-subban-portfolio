import Image from "next/image";
import { profile } from "@/data/portfolio";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden pt-24"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-brand/25 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-accent/10 blur-[100px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.05)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,#000_40%,transparent_100%)]" />
      </div>

      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="mb-6 h-24 w-24 flex-shrink-0 overflow-hidden rounded-full border-2 border-zinc-200 shadow-lg shadow-brand/20 sm:h-28 sm:w-28">
          <Image
            src="/profile.png"
            alt={profile.name}
            width={112}
            height={112}
            priority
            className="h-full w-full object-cover"
          />
        </div>

        <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-50 px-4 py-1.5 text-xs font-medium text-brand">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          Available for freelance &amp; remote roles
        </p>

        <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight text-zinc-900 sm:text-6xl">
          {profile.name}
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-zinc-700 sm:text-xl">
          {profile.title} — <span className="text-zinc-600">{profile.tagline}</span>
        </p>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-zinc-600">
          {profile.summary}
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#projects"
            className="rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand/25 transition-colors hover:bg-brand-dark"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="rounded-full border border-zinc-200 px-6 py-3 text-sm font-semibold text-zinc-900 transition-colors hover:bg-zinc-50"
          >
            Get in Touch
          </a>
        </div>

        <div className="mt-14 flex flex-wrap gap-x-10 gap-y-4 text-sm text-zinc-600">
          <div>
            <span className="block text-2xl font-bold text-zinc-900">4+</span>
            Years Experience
          </div>
          <div>
            <span className="block text-2xl font-bold text-zinc-900">18+</span>
            Shipped Products
          </div>
          <div>
            <span className="block text-2xl font-bold text-zinc-900">MERN</span>
            Core Stack
          </div>
        </div>
      </div>
    </section>
  );
}

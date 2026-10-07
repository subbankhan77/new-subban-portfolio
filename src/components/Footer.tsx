import { profile } from "@/data/portfolio";
import { LinkedInIcon } from "./icons";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-100">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 py-8 text-center text-sm text-zinc-500 sm:flex-row sm:justify-between sm:text-left">
        <p>
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-zinc-500 transition-colors hover:text-brand"
          >
            <LinkedInIcon className="h-4 w-4" />
          </a>
          <p>Built with Next.js &amp; Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}

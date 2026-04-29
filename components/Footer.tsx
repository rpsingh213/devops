import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/content/profile";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/60 bg-background/60">
      <div className="container-prose flex flex-col items-center justify-between gap-4 py-10 sm:flex-row">
        <p className="text-sm text-muted-foreground">
          © {year} {profile.name}. Built with Next.js, Tailwind & deployed on Vercel.
        </p>
        <div className="flex items-center gap-3">
          {profile.social.linkedin && (
            <Link
              href={profile.social.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="rounded-full border border-border p-2 text-muted-foreground transition hover:border-primary/40 hover:text-foreground"
            >
              <Linkedin className="h-4 w-4" />
            </Link>
          )}
          {profile.social.github && (
            <Link
              href={profile.social.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="rounded-full border border-border p-2 text-muted-foreground transition hover:border-primary/40 hover:text-foreground"
            >
              <Github className="h-4 w-4" />
            </Link>
          )}
          {profile.social.email && (
            <Link
              href={profile.social.email}
              aria-label="Email"
              className="rounded-full border border-border p-2 text-muted-foreground transition hover:border-primary/40 hover:text-foreground"
            >
              <Mail className="h-4 w-4" />
            </Link>
          )}
        </div>
      </div>
    </footer>
  );
}

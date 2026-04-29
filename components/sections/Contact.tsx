import Link from "next/link";
import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/content/profile";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

export function Contact() {
  const channels = [
    {
      label: "LinkedIn",
      value: "/in/ravipsingh123",
      href: profile.social.linkedin,
      Icon: Linkedin,
    },
    profile.social.github
      ? { label: "GitHub", value: profile.social.github.replace("https://", ""), href: profile.social.github, Icon: Github }
      : null,
    {
      label: "Email",
      value: profile.email,
      href: profile.social.email,
      Icon: Mail,
    },
  ].filter(Boolean) as Array<{
    label: string;
    value: string;
    href: string;
    Icon: typeof Mail;
  }>;

  return (
    <SectionWrapper
      id="contact"
      eyebrow="Connect"
      title="Let's talk"
      subtitle="Always happy to discuss BSS modernization, Agile delivery, building high-performing teams, or just a good engineering problem."
    >
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {channels.map(({ label, value, href, Icon }) => (
          <Link
            key={label}
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noreferrer" : undefined}
            className="glass-card group flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-lg bg-primary/10 text-primary">
                <Icon className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  {label}
                </p>
                <p className="text-sm font-medium text-foreground">{value}</p>
              </div>
            </div>
            <ArrowUpRight className="h-4 w-4 text-muted-foreground transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
          </Link>
        ))}
      </div>
    </SectionWrapper>
  );
}

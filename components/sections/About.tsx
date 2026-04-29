import { profile, awards, languages } from "@/content/profile";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Award as AwardIcon, Globe2, Scale } from "lucide-react";

export function About() {
  return (
    <SectionWrapper
      id="about"
      eyebrow="About"
      title="Engineer-turned-Patent-Agent"
      subtitle="Where deep technical fluency meets sharp legal craft."
    >
      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <div className="space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            {profile.about.split("\n\n").map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>
        </div>

        <aside className="space-y-4">
          <div className="glass-card">
            <div className="mb-3 flex items-center gap-2 text-sm font-semibold">
              <Scale className="h-4 w-4 text-primary" />
              Registration
            </div>
            <p className="text-sm font-medium text-foreground">
              Indian Patent Agent — IN/PA 4365
            </p>
            <p className="mt-1 text-xs text-muted-foreground">
              Registered with the Indian Patent Office, Aug 2022.
            </p>
          </div>

          {awards.length > 0 && (
            <div className="glass-card">
              <div className="mb-3 flex items-center gap-2 text-sm font-semibold">
                <AwardIcon className="h-4 w-4 text-primary" />
                Honors & Awards
              </div>
              <ul className="space-y-3">
                {awards.map((award) => (
                  <li key={award.title} className="text-sm">
                    <p className="font-medium text-foreground">{award.title}</p>
                    <p className="text-xs text-muted-foreground">
                      {award.issuer} • {award.date}
                    </p>
                    {award.description && (
                      <p className="mt-1 text-xs text-muted-foreground">{award.description}</p>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="glass-card">
            <div className="mb-3 flex items-center gap-2 text-sm font-semibold">
              <Globe2 className="h-4 w-4 text-primary" />
              Languages
            </div>
            <div className="flex flex-wrap gap-2">
              {languages.map((lang) => (
                <span
                  key={lang}
                  className="rounded-full border border-border bg-muted/50 px-3 py-1 text-xs"
                >
                  {lang}
                </span>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </SectionWrapper>
  );
}

"use client";

import { motion } from "framer-motion";
import { Briefcase, MapPin } from "lucide-react";
import { experience } from "@/content/profile";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { formatDateRange } from "@/lib/utils";

export function Experience() {
  return (
    <SectionWrapper
      id="experience"
      eyebrow="Career"
      title="Experience"
      subtitle="Seven-plus years across IP boutiques — from research analyst to leading patent prosecution mandates for Indian and international clients."
    >
      <ol className="relative space-y-8 border-l border-border/70 pl-6 sm:pl-8">
        {experience.map((job, idx) => (
          <motion.li
            key={`${job.company}-${job.start}`}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, delay: idx * 0.05 }}
            className="relative"
          >
            <span
              className="absolute -left-[33px] grid h-6 w-6 place-items-center rounded-full border border-border bg-background text-primary sm:-left-[41px]"
              aria-hidden
            >
              <Briefcase className="h-3 w-3" />
            </span>

            <div className="glass-card">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-lg font-semibold text-foreground">{job.role}</h3>
                <span className="text-xs font-mono text-muted-foreground">
                  {formatDateRange(job.start, job.end)}
                </span>
              </div>

              <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
                <span className="font-medium text-primary">{job.company}</span>
                <span className="inline-flex items-center gap-1 text-muted-foreground">
                  <MapPin className="h-3 w-3" />
                  {job.location}
                </span>
                <span className="text-xs text-muted-foreground">• {job.duration}</span>
              </div>

              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {job.description}
              </p>

              {job.highlights && job.highlights.length > 0 && (
                <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                  {job.highlights.map((h) => (
                    <li key={h} className="flex gap-2">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" aria-hidden />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              )}

              {job.stack && job.stack.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {job.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded-md border border-border bg-muted/40 px-2 py-0.5 text-xs text-muted-foreground"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </motion.li>
        ))}
      </ol>
    </SectionWrapper>
  );
}

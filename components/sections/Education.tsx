"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { education } from "@/content/profile";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

export function Education() {
  return (
    <SectionWrapper
      id="education"
      eyebrow="Foundations"
      title="Education"
    >
      <div className="grid gap-4 md:grid-cols-2">
        {education.map((edu, idx) => (
          <motion.div
            key={edu.degree}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, delay: idx * 0.05 }}
            className="glass-card"
          >
            <div className="mb-3 flex items-center gap-2 text-primary">
              <GraduationCap className="h-5 w-5" />
              <span className="font-mono text-xs">
                {edu.start} — {edu.end}
              </span>
            </div>
            <h3 className="text-base font-semibold text-foreground">{edu.degree}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{edu.school}</p>
            <p className="text-xs text-muted-foreground">{edu.location}</p>
            {edu.notes && (
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{edu.notes}</p>
            )}
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}

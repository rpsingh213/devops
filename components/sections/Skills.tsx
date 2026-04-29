"use client";

import { motion } from "framer-motion";
import { skills } from "@/content/profile";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

export function Skills() {
  const groups = Object.entries(skills);

  return (
    <SectionWrapper
      id="skills"
      eyebrow="Toolbox"
      title="Skills & Practices"
      subtitle="Patent practice, search analytics, and the technical fluency to read claims like an engineer."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {groups.map(([group, items], idx) => (
          <motion.div
            key={group}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, delay: idx * 0.05 }}
            className="glass-card"
          >
            <h3 className="text-sm font-semibold text-primary">{group}</h3>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-border bg-muted/40 px-2.5 py-1 text-xs"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}

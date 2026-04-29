"use client";

import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";
import { publications } from "@/content/profile";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

export function Publications() {
  if (publications.length === 0) return null;

  return (
    <SectionWrapper
      id="publications"
      eyebrow="Research"
      title="Publications"
      subtitle="Peer-reviewed publications from my Master's research in computer networks and intelligent handover schemes."
    >
      <div className="grid gap-4 md:grid-cols-2">
        {publications.map((pub, idx) => (
          <motion.article
            key={pub.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, delay: idx * 0.05 }}
            className="glass-card"
          >
            <div className="mb-3 flex items-center gap-2 text-primary">
              <BookOpen className="h-5 w-5" />
              <span className="font-mono text-xs">{pub.date}</span>
            </div>
            <h3 className="text-base font-semibold text-foreground">{pub.title}</h3>
            <p className="mt-1 text-xs text-muted-foreground">{pub.venue}</p>
            {pub.description && (
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {pub.description}
              </p>
            )}
          </motion.article>
        ))}
      </div>
    </SectionWrapper>
  );
}

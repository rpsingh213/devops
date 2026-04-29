"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Quote } from "lucide-react";
import { testimonials } from "@/content/profile";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

export function Testimonials() {
  return (
    <SectionWrapper
      id="testimonials"
      eyebrow="Recommendations"
      title="What people say"
      subtitle="Recommendations from colleagues and peers — sourced from LinkedIn."
    >
      <div className="grid gap-4 md:grid-cols-2">
        {testimonials.map((t, idx) => (
          <motion.figure
            key={t.name}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, delay: idx * 0.05 }}
            className="glass-card relative"
          >
            <Quote className="absolute right-4 top-4 h-8 w-8 text-primary/15" />
            <blockquote className="text-sm leading-relaxed text-muted-foreground">
              &ldquo;{t.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-4 flex items-center gap-3">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-primary to-accent text-sm font-semibold text-primary-foreground">
                {t.name
                  .split(" ")
                  .map((n) => n[0])
                  .slice(0, 2)
                  .join("")}
              </span>
              <div>
                {t.link ? (
                  <Link
                    href={t.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-medium text-foreground hover:text-primary"
                  >
                    {t.name}
                  </Link>
                ) : (
                  <p className="text-sm font-medium text-foreground">{t.name}</p>
                )}
                {t.title && <p className="text-xs text-muted-foreground">{t.title}</p>}
              </div>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </SectionWrapper>
  );
}

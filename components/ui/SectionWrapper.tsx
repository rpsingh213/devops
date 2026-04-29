"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type Props = {
  id: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
};

export function SectionWrapper({ id, eyebrow, title, subtitle, children, className }: Props) {
  return (
    <section id={id} className={cn("section", className)}>
      <div className="container-prose">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          {eyebrow && (
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-primary">
              {eyebrow}
            </p>
          )}
          <h2 className="section-heading">{title}</h2>
          {subtitle && <p className="section-subheading">{subtitle}</p>}
        </motion.div>
        {children}
      </div>
    </section>
  );
}

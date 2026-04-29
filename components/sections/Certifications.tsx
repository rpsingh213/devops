"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { BadgeCheck, ExternalLink } from "lucide-react";
import { certifications } from "@/content/profile";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

export function Certifications() {
  return (
    <SectionWrapper
      id="certifications"
      eyebrow="Credentials"
      title="Certifications"
      subtitle="Registered with the Indian Patent Office to draft, file, and prosecute patent applications."
    >
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((cert, idx) => {
          const Card = (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: idx * 0.04 }}
              className="glass-card flex h-full flex-col"
            >
              <div className="flex items-start gap-3">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary">
                  <BadgeCheck className="h-4 w-4" />
                </span>
                <div className="min-w-0 flex-1">
                  <h3 className="text-sm font-semibold leading-snug text-foreground">
                    {cert.name}
                  </h3>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {cert.issuer} • {cert.issued}
                  </p>
                </div>
                {cert.url && (
                  <ExternalLink className="h-4 w-4 shrink-0 text-muted-foreground" />
                )}
              </div>
            </motion.div>
          );

          return cert.url ? (
            <Link
              key={cert.name}
              href={cert.url}
              target="_blank"
              rel="noreferrer"
              className="block"
            >
              {Card}
            </Link>
          ) : (
            <div key={cert.name}>{Card}</div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}

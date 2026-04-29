"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, MapPin, Sparkles } from "lucide-react";
import { profile } from "@/content/profile";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative isolate flex min-h-[92vh] items-center overflow-hidden pt-16"
    >
      <div className="absolute inset-0 -z-10 grid-bg opacity-60" aria-hidden />
      <div
        className="absolute left-1/2 top-0 -z-10 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-primary/20 blur-3xl"
        aria-hidden
      />

      <div className="container-prose">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground shadow-sm">
            <Sparkles className="h-3 w-3 text-primary" />
            Open to architectural discussions & technical leadership conversations
          </span>

          <h1 className="mt-6 text-balance text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
            Hi, I&apos;m <span className="gradient-text">{profile.name}</span>
          </h1>

          <p className="mt-4 text-lg font-medium text-foreground/90 sm:text-xl">
            {profile.headline}
          </p>

          <p className="mx-auto mt-6 max-w-2xl text-pretty text-base text-muted-foreground sm:text-lg">
            {profile.tagline}
          </p>

          <div className="mt-6 flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4" />
            <span>{profile.location}</span>
            <span aria-hidden>•</span>
            <span>{profile.totalExperience} of experience</span>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-sm transition hover:bg-primary/90"
            >
              Get in touch
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <a
              href={profile.mediumUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium text-foreground transition hover:border-primary/40"
            >
              <BookOpen className="h-4 w-4" />
              Link to Medium
            </a>
            <Link
              href={profile.social.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium text-muted-foreground transition hover:text-foreground"
            >
              View LinkedIn →
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

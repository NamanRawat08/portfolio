import { ArrowDown, FileText, Github, Linkedin, Mail, Code2 } from 'lucide-react';
import { personalData } from '../data/content';
import FadeIn from './common/FadeIn';

export default function Hero() {
  const { identity } = personalData;

  return (
    <section id="hero" className="relative pt-12 pb-16 md:pt-20 md:pb-24 border-b border-surface-border">
      {/* Subtle background grid pattern */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.03] dark:opacity-[0.07]"
        style={{
          backgroundImage: `radial-gradient(currentColor 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
        }}
        aria-hidden="true"
      />

      <FadeIn className="max-w-3xl space-y-6">
        {/* Role Subheading */}
        <div className="inline-flex items-center gap-2 rounded-full border border-surface-border bg-bg-secondary px-3 py-1 font-mono text-xs text-accent">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
          <span>{identity.title}</span>
        </div>

        {/* Name and Tagline */}
        <div className="space-y-3">
          <h1 className="text-4xl font-bold tracking-tight text-text-primary sm:text-5xl lg:text-6xl">
            {identity.name}
          </h1>
          <p className="text-xl sm:text-2xl font-medium text-text-secondary leading-relaxed">
            {identity.tagline}
          </p>
        </div>

        {/* Action CTAs */}
        <div className="flex flex-wrap items-center gap-4 pt-2">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-bg-primary hover:bg-accent-hover transition-colors shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            <span>View Projects</span>
            <ArrowDown className="h-4 w-4" />
          </a>

          <a
            href={identity.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-surface-border bg-surface-card px-5 py-2.5 text-sm font-semibold text-text-primary hover:border-accent hover:text-accent transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            <FileText className="h-4 w-4" />
            <span>Download Resume</span>
          </a>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-4 pt-4 text-text-secondary" aria-label="Social and Contact Profiles">
          <a
            href={identity.github}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg p-2 text-text-secondary hover:bg-surface-hover hover:text-accent transition-colors"
            aria-label="GitHub Profile"
          >
            <Github className="h-5 w-5" />
          </a>

          <a
            href={identity.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg p-2 text-text-secondary hover:bg-surface-hover hover:text-accent transition-colors"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="h-5 w-5" />
          </a>

          {identity.leetcode && identity.leetcode !== 'TODO' ? (
            <a
              href={identity.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg p-2 text-text-secondary hover:bg-surface-hover hover:text-accent transition-colors"
              aria-label="LeetCode Profile"
            >
              <Code2 className="h-5 w-5" />
            </a>
          ) : (
            <span
              className="rounded-lg p-2 text-text-muted cursor-not-allowed opacity-60"
              title="LeetCode profile link coming soon (TODO)"
              aria-label="LeetCode Profile (TODO)"
            >
              <Code2 className="h-5 w-5" />
            </span>
          )}

          <a
            href={`mailto:${identity.email}`}
            className="rounded-lg p-2 text-text-secondary hover:bg-surface-hover hover:text-accent transition-colors"
            aria-label="Send direct email"
          >
            <Mail className="h-5 w-5" />
          </a>
        </div>
      </FadeIn>
    </section>
  );
}

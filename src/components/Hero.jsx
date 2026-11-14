import { ArrowDown, FileText, Github, Linkedin, Mail, Code2 } from 'lucide-react';
import { personalData } from '../data/content';
import FadeIn from './common/FadeIn';
import { hasLink } from '../utils/links';

export default function Hero() {
  const { identity } = personalData;

  return (
    <section id="hero" className="relative pt-10 pb-16 md:pt-16 md:pb-24 border-b border-surface-border">
      {/* Subtle background grid pattern */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.03] dark:opacity-[0.07]"
        style={{
          backgroundImage: `radial-gradient(currentColor 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
        }}
        aria-hidden="true"
      />

      <FadeIn>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Main Info Column */}
          <div className="lg:col-span-8 space-y-6">
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
            <nav className="flex items-center gap-4 pt-2 text-text-secondary" aria-label="Social and contact profiles">
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

              {hasLink(identity.leetcode) && (
                <a
                  href={identity.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg p-2 text-text-secondary hover:bg-surface-hover hover:text-accent transition-colors"
                  aria-label="LeetCode Profile"
                >
                  <Code2 className="h-5 w-5" />
                </a>
              )}

              <a
                href={`mailto:${identity.email}`}
                className="rounded-lg p-2 text-text-secondary hover:bg-surface-hover hover:text-accent transition-colors"
                aria-label="Send direct email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </nav>
          </div>

          {/* Profile Picture Column */}
          {identity.avatar && (
            <div className="lg:col-span-4 flex justify-center lg:justify-end">
              <div className="relative group">
                {/* Subtle ambient halo glow */}
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-accent/30 to-accent/10 blur-lg opacity-40 group-hover:opacity-75 transition duration-500" />
                
                {/* Image frame */}
                <div className="relative h-56 w-56 sm:h-64 sm:w-64 lg:h-72 lg:w-72 rounded-2xl border-2 border-surface-border bg-surface-card p-1.5 shadow-2xl transition-all duration-300 group-hover:border-accent/60">
                  <img
                    src={identity.avatar}
                    alt={identity.name}
                    width={288}
                    height={288}
                    className="h-full w-full object-cover object-top rounded-xl filter saturate-[1.05]"
                  />
                  
                  {/* Subtle status tag badge */}
                  <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-surface-border bg-bg-secondary/95 backdrop-blur-md px-3 py-0.5 font-mono text-[10px] text-text-secondary shadow-md flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Open to SWE 2027 Roles</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </FadeIn>
    </section>
  );
}

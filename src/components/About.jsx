import { personalData } from '../data/content';
import FadeIn from './common/FadeIn';

export default function About() {
  const { summary, quickFacts, sections } = personalData;

  return (
    <section id="about" className="py-12 md:py-16 border-b border-surface-border">
      <FadeIn className="space-y-8">
        {/* Section Header */}
        <div className="space-y-1">
          <h2 className="text-xs font-mono font-semibold uppercase tracking-wider text-accent">
            {sections.about.title}
          </h2>
          <p className="text-2xl font-bold tracking-tight text-text-primary sm:text-3xl">
            {sections.about.subtitle}
          </p>
        </div>

        {/* Narrative Summary */}
        <div className="max-w-3xl">
          <p className="text-base sm:text-lg leading-relaxed text-text-secondary">
            {summary.paragraph}
          </p>
        </div>

        {/* Quick Facts Stat Strip */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 pt-4">
          {quickFacts.map((fact, index) => (
            <div
              key={index}
              className="rounded-xl border border-surface-border bg-surface-card p-4 transition-all duration-200 hover:border-accent/50 hover:-translate-y-0.5"
            >
              <div className="font-mono text-xl sm:text-2xl font-bold text-accent">
                {fact.value}
              </div>
              <div className="mt-1 text-xs font-semibold text-text-primary">
                {fact.label}
              </div>
              <div className="text-xs text-text-muted mt-0.5">
                {fact.detail}
              </div>
            </div>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}

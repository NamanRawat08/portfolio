import { personalData } from '../data/content';
import FadeIn from './common/FadeIn';

export default function Skills() {
  const { skills, sections } = personalData;

  return (
    <section id="skills" className="py-12 md:py-16 border-b border-surface-border">
      <FadeIn className="space-y-8">
        {/* Section Header */}
        <div className="space-y-1">
          <h2 className="text-xs font-mono font-semibold uppercase tracking-wider text-accent">
            {sections.skills.title}
          </h2>
          <p className="text-2xl font-bold tracking-tight text-text-primary sm:text-3xl">
            {sections.skills.subtitle}
          </p>
        </div>

        {/* Grouped Skills Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {skills.map((group) => (
            <div
              key={group.category}
              className="rounded-xl border border-surface-border bg-surface-card p-5 transition-all duration-200 hover:border-accent/40 hover:-translate-y-0.5"
            >
              <h3 className="text-sm font-semibold text-text-primary font-mono tracking-tight mb-3 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center rounded-md border border-surface-border bg-bg-secondary px-2.5 py-1 text-xs font-mono text-text-secondary hover:text-accent hover:border-accent/40 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}

import { GraduationCap, Award, CheckCircle2 } from 'lucide-react';
import { personalData } from '../data/content';
import FadeIn from './common/FadeIn';

export default function Education() {
  const { education, achievements, sections } = personalData;

  return (
    <section id="education" className="py-12 md:py-16 border-b border-surface-border">
      <FadeIn className="space-y-12">
        {/* Section Header */}
        <div className="space-y-1">
          <h2 className="text-xs font-mono font-semibold uppercase tracking-wider text-accent">
            {sections.education.title}
          </h2>
          <p className="text-2xl font-bold tracking-tight text-text-primary sm:text-3xl">
            {sections.education.subtitle}
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-2">
          {/* Education Timeline */}
          <div className="space-y-4">
            <h3 className="text-sm font-mono font-semibold text-text-primary flex items-center gap-2">
              <GraduationCap className="h-4 w-4 text-accent" />
              <span>Academic Background</span>
            </h3>

            <div className="relative pl-6 space-y-6 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-[2px] before:bg-surface-border">
              {education.map((item, index) => (
                <div key={index} className="relative space-y-1">
                  {/* Timeline bullet dot */}
                  <div className="absolute -left-6 top-1.5 h-3 w-3 rounded-full border-2 border-accent bg-bg-primary" />
                  
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h4 className="text-sm font-bold text-text-primary">
                      {item.degree}
                    </h4>
                    <span className="font-mono text-xs font-semibold text-accent">
                      {item.grade}
                    </span>
                  </div>

                  <p className="text-xs text-text-secondary">
                    {item.institution}
                  </p>
                  
                  <div className="flex items-center gap-2 pt-0.5">
                    <span className="font-mono text-[11px] text-text-muted">
                      {item.period}
                    </span>
                    <span className="rounded bg-bg-secondary px-1.5 py-0.5 font-mono text-[10px] text-text-muted">
                      {item.badge}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Key Achievements */}
          <div className="space-y-4">
            <h3 className="text-sm font-mono font-semibold text-text-primary flex items-center gap-2">
              <Award className="h-4 w-4 text-accent" />
              <span>Verified Engineering Milestones</span>
            </h3>

            <div className="space-y-4">
              {achievements.map((item, index) => (
                <div
                  key={index}
                  className="rounded-xl border border-surface-border bg-surface-card p-5 transition-all duration-200 hover:border-accent/40 hover:-translate-y-0.5 space-y-2"
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                    <div className="space-y-1">
                      <h4 className="text-sm font-bold text-text-primary">
                        {item.title}
                      </h4>
                      <p className="text-xs leading-relaxed text-text-secondary">
                        {item.description}
                      </p>
                      <div className="pt-1">
                        <span className="inline-block rounded bg-bg-secondary px-2 py-0.5 font-mono text-[11px] text-accent">
                          {item.highlight}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}

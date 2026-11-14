import { ShieldCheck, Gauge, Database } from 'lucide-react';
import { personalData } from '../data/content';
import FadeIn from './common/FadeIn';

export default function Principles() {
  const { principles, sections } = personalData;

  const iconMap = {
    concurrency: ShieldCheck,
    measure: Gauge,
    'schema-as-code': Database,
  };

  return (
    <section id="principles" className="py-12 md:py-16 border-b border-surface-border">
      <FadeIn className="space-y-8">
        {/* Section Header */}
        <div className="space-y-1">
          <h2 className="text-xs font-mono font-semibold uppercase tracking-wider text-accent">
            {sections.principles.title}
          </h2>
          <p className="text-2xl font-bold tracking-tight text-text-primary sm:text-3xl">
            {sections.principles.subtitle}
          </p>
        </div>

        {/* 3 Principles Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {principles.map((item) => {
            const Icon = iconMap[item.id] || ShieldCheck;
            return (
              <div
                key={item.id}
                className="flex flex-col justify-between rounded-xl border border-surface-border bg-surface-card p-6 transition-all duration-200 hover:border-accent/40 hover:-translate-y-1 hover:shadow-lg hover:shadow-accent/5"
              >
                <div className="space-y-3">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-accent-muted text-accent">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-text-primary">
                      {item.title}
                    </h3>
                    <p className="font-mono text-xs text-accent mt-0.5">
                      {item.subtitle}
                    </p>
                  </div>
                  <p className="text-sm leading-relaxed text-text-secondary">
                    {item.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-surface-border/50 text-[11px] font-mono text-text-muted flex items-center justify-between">
                  <span>Demonstrated in:</span>
                  <span className="font-semibold text-text-secondary">{item.appliedIn}</span>
                </div>
              </div>
            );
          })}
        </div>
      </FadeIn>
    </section>
  );
}

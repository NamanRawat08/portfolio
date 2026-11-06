import { Laptop, Server, Database, ArrowRight, ShieldCheck, GitCommit } from 'lucide-react';

export default function ThreeTierArchitectureDiagram() {
  const tiers = [
    {
      title: 'Presentation Tier',
      component: 'React + Tailwind CSS',
      icon: Laptop,
      details: 'Dark-themed trading dashboard, real-time charts, adaptive mobile & desktop layouts',
    },
    {
      title: 'Application Tier',
      component: 'Express REST API',
      icon: Server,
      details: 'Virtual ledger endpoints, validation layer, human-reviewed business logic',
    },
    {
      title: 'Persistence Tier',
      component: 'PostgreSQL (node-postgres)',
      icon: Database,
      details: 'node-pg-migrate schema migrations, ACID transactional fund accounting',
    },
  ];

  return (
    <div className="rounded-xl border border-surface-border bg-bg-secondary/70 p-5 space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-surface-border pb-3">
        <h4 className="font-mono text-xs font-semibold text-text-primary uppercase tracking-wide flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-accent" />
          Three-Tier System Architecture (Client → API → DB)
        </h4>
        <div className="inline-flex items-center gap-1.5 rounded-full bg-accent-muted px-2.5 py-0.5 text-[11px] font-mono text-accent">
          <GitCommit className="h-3 w-3" />
          <span>node-pg-migrate Versioned</span>
        </div>
      </div>

      {/* 3 Tiers Flow */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {tiers.map((tier, idx) => {
          const Icon = tier.icon;
          return (
            <div
              key={tier.title}
              className="relative flex flex-col justify-between rounded-lg border border-surface-border bg-surface-card p-4 transition-colors hover:border-accent"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex h-8 w-8 items-center justify-center rounded-md bg-accent-muted text-accent">
                    <Icon className="h-4 w-4" />
                  </div>
                  <span className="font-mono text-[11px] text-text-muted">Tier 0{idx + 1}</span>
                </div>
                <div>
                  <h5 className="text-xs font-mono font-semibold text-accent">
                    {tier.component}
                  </h5>
                  <div className="text-sm font-bold text-text-primary mt-0.5">
                    {tier.title}
                  </div>
                </div>
                <p className="text-xs leading-relaxed text-text-muted">
                  {tier.details}
                </p>
              </div>

              {idx < tiers.length - 1 && (
                <div className="hidden md:block absolute -right-3.5 top-1/2 -translate-y-1/2 z-10 text-accent bg-bg-secondary rounded-full p-1 border border-surface-border">
                  <ArrowRight className="h-3 w-3" />
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Engineering Discipline Callout */}
      <div className="rounded-lg border border-surface-border bg-surface-card p-3 flex items-start gap-3">
        <ShieldCheck className="h-5 w-5 text-accent shrink-0 mt-0.5" />
        <p className="text-xs text-text-secondary leading-relaxed font-mono">
          <span className="font-semibold text-text-primary">Schema as Code: </span>
          Database mutations are version-controlled via SQL migration scripts, ensuring deterministic rollouts and reproducible staging and production databases.
        </p>
      </div>
    </div>
  );
}


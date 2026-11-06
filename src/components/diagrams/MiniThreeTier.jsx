import { Laptop, Server, Database, ArrowRight } from 'lucide-react';

export default function MiniThreeTier() {
  const nodes = [
    { label: 'Client', tech: 'React', icon: Laptop },
    { label: 'API', tech: 'Express', icon: Server },
    { label: 'DB', tech: 'PostgreSQL', icon: Database },
  ];

  return (
    <div className="rounded-lg border border-surface-border bg-bg-secondary/60 p-3 transition-colors group-hover:border-accent/40">
      <div className="flex items-center justify-between pb-2 mb-2 border-b border-surface-border/50">
        <span className="font-mono text-[10px] text-accent font-semibold tracking-wider uppercase flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
          Three-Tier System
        </span>
        <span className="font-mono text-[10px] text-text-muted">
          node-pg-migrate
        </span>
      </div>

      <div className="flex items-center justify-between gap-1 pt-1">
        {nodes.map((node, idx) => {
          const Icon = node.icon;
          return (
            <div key={node.label} className="flex items-center flex-1 last:flex-none">
              <div className="flex flex-col items-center flex-1">
                <div className="flex h-7 w-7 items-center justify-center rounded-md border border-surface-border bg-surface-card text-accent transition-transform group-hover:scale-110 group-hover:border-accent/60">
                  <Icon className="h-3.5 w-3.5" />
                </div>
                <span className="mt-1 font-mono text-[10px] font-bold text-text-primary">
                  {node.label}
                </span>
                <span className="font-mono text-[9px] text-text-muted">
                  {node.tech}
                </span>
              </div>

              {idx < nodes.length - 1 && (
                <div className="text-text-muted group-hover:text-accent transition-colors px-1">
                  <ArrowRight className="h-3 w-3" />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

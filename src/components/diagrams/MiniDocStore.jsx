import { FileCode, Database, ArrowRightLeft } from 'lucide-react';

export default function MiniDocStore() {
  return (
    <div className="rounded-lg border border-surface-border bg-bg-secondary/60 p-3 transition-colors group-hover:border-accent/40">
      <div className="flex items-center justify-between pb-2 mb-2 border-b border-surface-border/50">
        <span className="font-mono text-[10px] text-accent font-semibold tracking-wider uppercase flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
          Document Store Service
        </span>
        <span className="font-mono text-[10px] text-text-muted">
          REST API Contract
        </span>
      </div>

      <div className="flex items-center justify-around gap-2 pt-1 font-mono text-[10px]">
        <div className="flex flex-col items-center">
          <div className="flex h-7 w-7 items-center justify-center rounded-md border border-surface-border bg-surface-card text-accent">
            <FileCode className="h-3.5 w-3.5" />
          </div>
          <span className="mt-1 font-semibold text-text-primary">React Client</span>
        </div>

        <ArrowRightLeft className="h-3.5 w-3.5 text-accent/70" />

        <div className="flex flex-col items-center">
          <div className="flex h-7 w-7 items-center justify-center rounded-md border border-surface-border bg-surface-card text-accent">
            <Database className="h-3.5 w-3.5" />
          </div>
          <span className="mt-1 font-semibold text-text-primary">MongoDB Store</span>
        </div>
      </div>
    </div>
  );
}

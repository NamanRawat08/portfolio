import { CheckCircle2, ArrowRight, ShieldAlert, Radio } from 'lucide-react';

export default function OrderStateMachineDiagram() {
  const states = [
    { name: 'PENDING', desc: 'Order initiated / Stock checked', active: true },
    { name: 'CONFIRMED', desc: 'Atomic stock decrement committed', active: true },
    { name: 'SHIPPED', desc: 'Dispatched to logistics carrier', active: true },
    { name: 'DELIVERED', desc: 'Terminal state: Customer received', active: true },
  ];

  return (
    <div className="rounded-xl border border-surface-border bg-bg-secondary/70 p-5 space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-surface-border pb-3">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-accent animate-ping" />
          <h4 className="font-mono text-xs font-semibold text-text-primary uppercase tracking-wide">
            Server-Enforced Order State Machine
          </h4>
        </div>
        <div className="inline-flex items-center gap-1.5 rounded-full bg-accent-muted px-2.5 py-0.5 text-[11px] font-mono text-accent">
          <Radio className="h-3 w-3 animate-pulse" />
          <span>Socket.IO Event Stream</span>
        </div>
      </div>

      {/* Horizontal State Flow */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 pt-1">
        {states.map((st, idx) => (
          <div key={st.name} className="relative flex flex-col justify-between rounded-lg border border-surface-border bg-surface-card p-3 transition-colors hover:border-accent">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs font-bold text-accent">
                0{idx + 1}. {st.name}
              </span>
              <CheckCircle2 className="h-3.5 w-3.5 text-accent" />
            </div>
            <p className="mt-1 text-[11px] leading-tight text-text-muted">
              {st.desc}
            </p>
            {idx < states.length - 1 && (
              <div className="hidden sm:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-accent bg-bg-secondary rounded-full p-0.5 border border-surface-border">
                <ArrowRight className="h-3 w-3" />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Concurrency & Transition Invariant Guards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2 text-xs font-mono">
        <div className="flex items-start gap-2.5 rounded-lg border border-accent/30 bg-accent-subtle p-2.5 text-text-secondary">
          <span className="rounded bg-accent/20 px-1 py-0.5 text-[10px] text-accent font-semibold shrink-0">
            TRANSACTION
          </span>
          <span className="text-[11px] leading-relaxed">
            Atomic Prisma isolation: Inventory decrement + order record locked together. Prevents overselling race condition.
          </span>
        </div>

        <div className="flex items-start gap-2.5 rounded-lg border border-red-500/30 bg-red-500/5 p-2.5 text-text-secondary">
          <ShieldAlert className="h-4 w-4 text-red-600 dark:text-red-400 shrink-0 mt-0.5" />
          <span className="text-[11px] leading-relaxed">
            Invariant: Out-of-sequence or backward transitions are rejected with HTTP 400 (Invalid Transition).
          </span>
        </div>
      </div>
    </div>
  );
}


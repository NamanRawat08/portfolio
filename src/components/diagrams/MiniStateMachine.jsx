export default function MiniStateMachine() {
  const steps = [
    { label: 'pending', id: '1' },
    { label: 'confirmed', id: '2' },
    { label: 'shipped', id: '3' },
    { label: 'delivered', id: '4' },
  ];

  return (
    <div className="h-[100px] flex flex-col justify-between rounded-lg border border-surface-border bg-bg-secondary/60 p-3 transition-colors group-hover:border-accent/40">
      <div className="flex items-center justify-between border-b border-surface-border/50 pb-1.5">
        <span className="font-mono text-[10px] text-accent font-semibold tracking-wider uppercase flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
          FSM Order Lifecycle
        </span>
        <span className="font-mono text-[10px] text-text-muted">
          Atomic Transaction
        </span>
      </div>

      {/* SVG / CSS State Machine Flow */}
      <div className="flex items-center justify-between gap-1">
        {steps.map((step, idx) => (
          <div key={step.id} className="flex items-center flex-1 last:flex-none">
            <div className="flex flex-col items-center">
              <div className="flex h-6 w-6 items-center justify-center rounded-full border border-accent/40 bg-accent-muted text-[10px] font-mono font-bold text-accent transition-transform group-hover:scale-110">
                {step.id}
              </div>
              <span className="mt-1 font-mono text-[9px] text-text-muted group-hover:text-text-primary transition-colors">
                {step.label}
              </span>
            </div>

            {idx < steps.length - 1 && (
              <div className="flex-1 mx-1 h-[2px] bg-surface-border relative overflow-hidden">
                <div className="absolute inset-0 bg-accent/60 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

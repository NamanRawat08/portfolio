import { ArrowRight, Globe, Server, FileCode2, ShieldCheck, Ban } from 'lucide-react';

const pipeline = [
  {
    title: 'Client Request',
    component: 'GET /api/*',
    icon: Globe,
    details: 'Keyed per client; a load balancer spreads requests across app servers',
  },
  {
    title: 'Express Middleware',
    component: 'rateLimit()',
    icon: Server,
    details: 'Wraps any limiter; fails open (or 503) if Redis is unreachable',
  },
  {
    title: 'Lua Script in Redis',
    component: 'EVALSHA',
    icon: FileCode2,
    details: 'Read → check → write runs atomically, timed with Redis TIME, keys expire via TTL',
  },
];

const algorithms = [
  {
    name: 'Token Bucket',
    structure: 'Hash { tokens, ts }, refilled lazily',
    memory: '94 B / client @ limit 1k',
    peak: 'up to 19 in any 10 s',
    note: 'Smooths output to the refill rate; forgiving to bursts',
  },
  {
    name: 'Sliding Window Log',
    structure: 'Sorted set, one member per request',
    memory: '108 KB / client @ limit 1k',
    peak: 'never more than 10 in 10 s',
    note: 'Strict guarantee; lets traffic through in waves',
  },
];

const results = [
  { label: 'Race: 100 concurrent requests, 5 connections', before: 'naive GET/SET: 100', after: 'Lua: 10' },
  { label: '3 app instances, 30 requests', before: 'in-memory: 30', after: 'Redis: 10' },
];

export default function RateLimiterDiagram() {
  return (
    <div className="rounded-xl border border-surface-border bg-bg-secondary/70 p-5 space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-surface-border pb-3">
        <h4 className="font-mono text-xs font-semibold text-text-primary uppercase tracking-wide flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-accent" />
          Request Path (Client → Middleware → Redis)
        </h4>
        <div className="inline-flex items-center gap-1.5 rounded-full bg-accent-muted px-2.5 py-0.5 text-[11px] font-mono text-accent">
          <Ban className="h-3 w-3" />
          <span>429 + Retry-After</span>
        </div>
      </div>

      {/* Pipeline */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {pipeline.map((step, idx) => {
          const Icon = step.icon;
          return (
            <div
              key={step.title}
              className="relative flex flex-col rounded-lg border border-surface-border bg-surface-card p-4 transition-colors hover:border-accent"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex h-8 w-8 items-center justify-center rounded-md bg-accent-muted text-accent">
                    <Icon className="h-4 w-4" />
                  </div>
                  <span className="font-mono text-[11px] text-text-muted">Step 0{idx + 1}</span>
                </div>
                <div>
                  <h5 className="text-xs font-mono font-semibold text-accent">{step.component}</h5>
                  <div className="text-sm font-bold text-text-primary mt-0.5">{step.title}</div>
                </div>
                <p className="text-xs leading-relaxed text-text-muted">{step.details}</p>
              </div>

              {idx < pipeline.length - 1 && (
                <div className="hidden md:block absolute -right-3.5 top-1/2 -translate-y-1/2 z-10 text-accent bg-bg-secondary rounded-full p-1 border border-surface-border">
                  <ArrowRight className="h-3 w-3" />
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Algorithm comparison: peak at a limit of 10 per 10 s, memory at a limit of 1,000 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {algorithms.map((algo) => (
          <div key={algo.name} className="rounded-lg border border-surface-border bg-surface-card p-3 space-y-2">
            <div className="flex items-center justify-between gap-2">
              <span className="font-mono text-xs font-bold text-accent">{algo.name}</span>
              <span className="rounded bg-bg-secondary px-1.5 py-0.5 font-mono text-[10px] text-text-secondary">
                {algo.memory}
              </span>
            </div>
            <dl className="grid grid-cols-[auto,1fr] gap-x-3 gap-y-1 text-[11px] font-mono">
              <dt className="text-text-muted">State</dt>
              <dd className="text-text-secondary">{algo.structure}</dd>
              <dt className="text-text-muted">Limit 10/10s</dt>
              <dd className="text-text-secondary">{algo.peak}</dd>
            </dl>
            <p className="text-[11px] leading-relaxed text-text-muted">{algo.note}</p>
          </div>
        ))}
      </div>

      {/* Measured results */}
      <div className="rounded-lg border border-accent/30 bg-accent-subtle p-3 space-y-2">
        <div className="flex items-center gap-2">
          <ShieldCheck className="h-4 w-4 text-accent shrink-0" />
          <span className="font-mono text-xs font-semibold text-text-primary">Measured with a limit of 10</span>
        </div>
        <ul className="space-y-1.5">
          {results.map((r) => (
            <li key={r.label} className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] font-mono">
              <span className="text-text-secondary">{r.label}:</span>
              <span className="rounded bg-red-500/10 px-1.5 py-0.5 text-red-600 dark:text-red-400">{r.before}</span>
              <ArrowRight className="h-3 w-3 text-text-muted" />
              <span className="rounded bg-accent-muted px-1.5 py-0.5 text-accent">{r.after}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

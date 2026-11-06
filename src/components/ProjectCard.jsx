import { motion, useReducedMotion } from 'framer-motion';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import MiniStateMachine from './diagrams/MiniStateMachine';
import MiniThreeTier from './diagrams/MiniThreeTier';
import MiniDocStore from './diagrams/MiniDocStore';

export default function ProjectCard({ project, onSelect }) {
  const shouldReduceMotion = useReducedMotion();
  const hasValidGithub = project.links.github && project.links.github !== 'TODO';
  const hasValidLive = project.links.live && project.links.live !== 'TODO';

  const CardWrapper = shouldReduceMotion ? 'article' : motion.article;
  const motionProps = shouldReduceMotion
    ? {}
    : {
        whileHover: { y: -4 },
        transition: { duration: 0.2, ease: 'easeOut' },
      };

  return (
    <CardWrapper
      {...motionProps}
      className="group flex flex-col justify-between rounded-xl border border-surface-border bg-surface-card p-6 transition-all hover:border-accent/50 hover:shadow-lg hover:shadow-accent/5 h-full"
    >
      <div className="flex flex-col flex-1">
        {/* Header: Title & Badges (consistent height) */}
        <div className="mb-3">
          <div className="h-6 flex items-center mb-2">
            {project.featured && (
              <span className="rounded-full border border-accent/40 bg-accent-muted px-2 py-0.5 font-mono text-[11px] font-semibold text-accent">
                Flagship Project
              </span>
            )}
            {project.teamNote && (
              <span className="rounded-full border border-surface-border bg-bg-secondary px-2 py-0.5 font-mono text-[11px] text-text-muted">
                {project.teamNote}
              </span>
            )}
          </div>
          <h3 className="text-xl font-bold tracking-tight text-text-primary group-hover:text-accent transition-colors min-h-[56px] flex items-start">
            {project.title}
          </h3>
        </div>

        {/* Short Description (consistent height) */}
        <p className="text-sm leading-relaxed text-text-secondary min-h-[80px] mb-4">
          {project.shortDescription}
        </p>

        {/* Mini Architecture Visual (exact 100px height across all cards) */}
        <div className="mb-4">
          {project.visualType === 'state-machine' && <MiniStateMachine />}
          {project.visualType === 'three-tier' && <MiniThreeTier />}
          {!project.visualType && <MiniDocStore />}
        </div>

        {/* Tech Stack Chips (aligned vertically across all cards) */}
        <div className="mt-auto pt-2 min-h-[64px] flex flex-wrap content-start gap-1.5">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="inline-flex items-center rounded-md border border-surface-border bg-bg-secondary/90 px-2.5 py-1 font-mono text-xs text-text-secondary hover:text-accent hover:border-accent/40 transition-colors shadow-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Footer Actions (aligned at the bottom across all cards) */}
      <div className="mt-6 pt-4 border-t border-surface-border/60 flex items-center justify-between">
        <button
          type="button"
          onClick={() => onSelect(project)}
          className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold text-accent hover:text-accent-hover transition-colors"
        >
          <span>View Details & Architecture</span>
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
        </button>

        <div className="flex items-center gap-3">
          {hasValidGithub ? (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-accent transition-colors"
              aria-label={`${project.title} GitHub repository`}
            >
              <Github className="h-4 w-4" />
            </a>
          ) : (
            <span
              className="text-text-muted cursor-not-allowed opacity-50 font-mono text-[11px]"
              title="Repository link pending (TODO)"
            >
              Repo [TODO]
            </span>
          )}

          {project.links.live && (
            hasValidLive ? (
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-accent transition-colors"
                aria-label={`${project.title} Live demo`}
              >
                <ExternalLink className="h-4 w-4" />
              </a>
            ) : (
              <span
                className="text-text-muted cursor-not-allowed opacity-50 font-mono text-[11px]"
                title="Live demo link pending (TODO)"
              >
                Demo [TODO]
              </span>
            )
          )}
        </div>
      </div>
    </CardWrapper>
  );
}

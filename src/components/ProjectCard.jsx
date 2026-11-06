import { motion, useReducedMotion } from 'framer-motion';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

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
      className="flex flex-col justify-between rounded-xl border border-surface-border bg-surface-card p-6 transition-colors hover:border-accent/50 hover:shadow-lg hover:shadow-accent/5"
    >
      <div className="space-y-4">
        {/* Header: Title & Badges */}
        <div>
          <div className="flex flex-wrap items-center gap-2 mb-2">
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
          <h3 className="text-xl font-bold tracking-tight text-text-primary">
            {project.title}
          </h3>
        </div>

        {/* Short Description */}
        <p className="text-sm leading-relaxed text-text-secondary">
          {project.shortDescription}
        </p>

        {/* Tech Stack Chips */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded bg-bg-secondary px-2 py-0.5 font-mono text-xs text-text-secondary"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Footer Actions */}
      <div className="mt-6 pt-4 border-t border-surface-border/60 flex items-center justify-between">
        <button
          type="button"
          onClick={() => onSelect(project)}
          className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold text-accent hover:text-accent-hover transition-colors"
        >
          <span>View Details & Architecture</span>
          <ArrowRight className="h-3.5 w-3.5" />
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

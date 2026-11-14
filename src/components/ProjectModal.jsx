import { useEffect, useRef } from 'react';
import { X, Github, ExternalLink, CheckCircle } from 'lucide-react';
import RateLimiterDiagram from './diagrams/RateLimiterDiagram';
import ThreeTierArchitectureDiagram from './diagrams/ThreeTierArchitectureDiagram';
import { hasLink } from '../utils/links';

export default function ProjectModal({ project, onClose }) {
  const modalRef = useRef(null);
  const previouslyFocusedElementRef = useRef(null);

  useEffect(() => {
    // Save previously focused element to restore focus on close
    previouslyFocusedElementRef.current = document.activeElement;

    // Prevent background scrolling while modal is open
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // Focus the modal container
    if (modalRef.current) {
      modalRef.current.focus();
    }

    // Keydown handler for Escape key and Tab focus trapping
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
        return;
      }

      if (e.key === 'Tab' && modalRef.current) {
        const focusableElements = modalRef.current.querySelectorAll(
          'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
        );
        if (focusableElements.length === 0) return;

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey) {
          // Shift + Tab
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          // Tab
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
      if (previouslyFocusedElementRef.current && typeof previouslyFocusedElementRef.current.focus === 'function') {
        previouslyFocusedElementRef.current.focus();
      }
    };
  }, [onClose]);

  if (!project) return null;

  const hasValidGithub = hasLink(project.links.github);
  const hasValidLive = hasLink(project.links.live);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-bg-primary/80 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div
        ref={modalRef}
        tabIndex={-1}
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl border border-surface-border bg-surface-card p-6 sm:p-8 shadow-2xl focus:outline-none"
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 inline-flex items-center gap-1 rounded-lg border border-surface-border bg-bg-secondary p-1.5 text-text-secondary hover:text-accent hover:border-accent transition-colors"
          aria-label="Close project details modal"
        >
          <span className="hidden sm:inline font-mono text-[10px] text-text-muted mr-1">ESC</span>
          <X className="h-5 w-5" />
        </button>

        <div className="space-y-6">
          {/* Header */}
          <div className="space-y-2 pr-12">
            <div className="flex flex-wrap items-center gap-2">
              {project.featured && (
                <span className="rounded-full border border-accent/40 bg-accent-muted px-2.5 py-0.5 font-mono text-xs font-semibold text-accent">
                  Flagship Architecture
                </span>
              )}
              {project.teamNote && (
                <span className="rounded-full border border-surface-border bg-bg-secondary px-2.5 py-0.5 font-mono text-xs text-text-muted">
                  {project.teamNote}
                </span>
              )}
            </div>

            <h3
              id="modal-project-title"
              className="text-2xl sm:text-3xl font-bold tracking-tight text-text-primary"
            >
              {project.title}
            </h3>

            <p className="text-sm leading-relaxed text-text-secondary">
              {project.shortDescription}
            </p>
          </div>

          {/* Tech Stack Chips */}
          <div className="space-y-2">
            <h4 className="font-mono text-xs font-semibold text-accent uppercase tracking-wider">
              Technology Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md border border-surface-border bg-bg-secondary px-2.5 py-1 font-mono text-xs text-text-secondary"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Architectural Visual / Diagram */}
          {project.visualType === 'rate-limiter' && (
            <div className="space-y-2">
              <h4 className="font-mono text-xs font-semibold text-accent uppercase tracking-wider">
                Atomic Rate Limiting & Algorithm Trade-offs
              </h4>
              <RateLimiterDiagram />
            </div>
          )}

          {project.visualType === 'three-tier' && (
            <div className="space-y-2">
              <h4 className="font-mono text-xs font-semibold text-accent uppercase tracking-wider">
                Three-Tier Architecture & Persistence
              </h4>
              <ThreeTierArchitectureDiagram />
            </div>
          )}

          {/* Detailed Engineering Bullets */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs font-semibold text-accent uppercase tracking-wider">
              Engineering Contributions & Key Metrics
            </h4>
            <ul className="space-y-3">
              {project.bullets.map((bullet, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-text-secondary leading-relaxed">
                  <CheckCircle className="h-4 w-4 text-accent shrink-0 mt-1" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Action Links & Pending Placeholders */}
          <div className="pt-4 border-t border-surface-border flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-3">
              {hasValidGithub && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2 font-mono text-xs font-semibold text-bg-primary hover:bg-accent-hover transition-colors"
                >
                  <Github className="h-4 w-4" />
                  <span>View GitHub Repository</span>
                </a>
              )}

              {hasValidLive && (
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-accent/40 bg-accent-muted px-4 py-2 font-mono text-xs font-semibold text-accent hover:bg-accent hover:text-bg-primary transition-colors"
                >
                  <ExternalLink className="h-4 w-4" />
                  <span>Launch Live Demo</span>
                </a>
              )}
            </div>

            <button
              type="button"
              onClick={onClose}
              className="rounded-lg border border-surface-border px-4 py-2 font-mono text-xs text-text-secondary hover:text-text-primary hover:bg-surface-hover transition-colors"
            >
              Close Window
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}


import { personalData } from '../data/content';

export default function Footer() {
  const { identity, footer } = personalData;

  return (
    <footer className="border-t border-surface-border py-8 text-center text-xs text-text-muted font-mono transition-colors">
      <div className="mx-auto max-w-content px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p>
          &copy; {new Date().getFullYear()} {identity.name}. All rights reserved.
        </p>
        <p className="text-text-secondary">
          {footer.builtWith}
        </p>
      </div>
    </footer>
  );
}

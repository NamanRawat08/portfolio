import { useState } from 'react';
import { Sun, Moon, Menu, X, FileText } from 'lucide-react';
import { personalData } from '../data/content';

export default function Navbar({ theme, toggleTheme }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { identity, navLinks } = personalData;

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-surface-border bg-bg-primary/90 backdrop-blur-md transition-colors">
      <div className="mx-auto flex h-16 max-w-content items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand / Logo */}
        <a
          href="#"
          className="flex items-center gap-2 font-mono text-base font-semibold tracking-tight text-text-primary hover:text-accent transition-colors"
          aria-label="Home"
        >
          <span className="text-accent">&gt;</span>
          <span>{identity.name.replace(' ', '_').toLowerCase()}</span>
          <span className="text-accent animate-pulse">_</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-text-secondary hover:text-accent transition-colors"
            >
              {link.label}
            </a>
          ))}

          {/* Resume Download CTA Button */}
          <a
            href={identity.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg border border-accent/40 bg-accent-muted px-3 py-1.5 text-xs font-mono font-medium text-accent hover:bg-accent hover:text-bg-primary transition-all"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Resume</span>
          </a>

          {/* Theme Toggle Button */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-surface-border bg-surface-card text-text-secondary hover:text-accent hover:border-accent/50 transition-colors"
          >
            {theme === 'dark' ? (
              <Sun className="h-4 w-4 text-accent" />
            ) : (
              <Moon className="h-4 w-4 text-accent" />
            )}
          </button>
        </nav>

        {/* Mobile Actions */}
        <div className="flex md:hidden items-center gap-2">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-surface-border bg-surface-card text-text-secondary hover:text-accent transition-colors"
          >
            {theme === 'dark' ? (
              <Sun className="h-4 w-4 text-accent" />
            ) : (
              <Moon className="h-4 w-4 text-accent" />
            )}
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-surface-border bg-surface-card text-text-primary hover:text-accent transition-colors"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-surface-border bg-bg-secondary px-4 py-4 space-y-3">
          <nav className="flex flex-col space-y-2" aria-label="Mobile Navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="rounded-md px-3 py-2 text-sm font-medium text-text-secondary hover:bg-surface-hover hover:text-accent transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href={identity.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="flex items-center justify-center gap-2 rounded-lg border border-accent/40 bg-accent-muted px-3 py-2 text-sm font-mono font-medium text-accent hover:bg-accent hover:text-bg-primary transition-all mt-2"
            >
              <FileText className="w-4 h-4" />
              <span>Download Resume</span>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

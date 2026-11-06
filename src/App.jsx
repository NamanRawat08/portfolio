import { useState } from 'react';
import { useTheme } from './hooks/useTheme';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import ProjectCard from './components/ProjectCard';
import ProjectModal from './components/ProjectModal';
import Principles from './components/Principles';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FadeIn from './components/common/FadeIn';
import { personalData } from './data/content';

export default function App() {
  const { theme, toggleTheme } = useTheme();
  const [selectedProject, setSelectedProject] = useState(null);
  const { projects, sections } = personalData;

  return (
    <div className="min-h-screen bg-bg-primary text-text-primary selection:bg-accent/20 selection:text-accent font-sans transition-colors duration-200 overflow-x-hidden">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 rounded-md bg-accent px-4 py-2 font-mono text-xs font-semibold text-bg-primary shadow-lg"
      >
        Skip to main content
      </a>

      <Navbar theme={theme} toggleTheme={toggleTheme} />

      <main id="main-content" className="mx-auto max-w-content px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Hero Section */}
        <Hero />

        {/* About Section & Stat Strip */}
        <About />

        {/* Technical Skills Grouped Chips */}
        <Skills />

        {/* Featured Projects Grid */}
        <section id="projects" className="py-12 md:py-16 border-b border-surface-border">
          <FadeIn className="space-y-8">
            <div className="space-y-1">
              <h2 className="text-xs font-mono font-semibold uppercase tracking-wider text-accent">
                {sections.projects.title}
              </h2>
              <p className="text-2xl font-bold tracking-tight text-text-primary sm:text-3xl">
                {sections.projects.subtitle}
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onSelect={(p) => setSelectedProject(p)}
                />
              ))}
            </div>
          </FadeIn>
        </section>

        {/* How I Build (Engineering Principles) */}
        <Principles />

        {/* Education Timeline & Verified Achievements */}
        <Education />

        {/* Contact Form & Direct Channels */}
        <Contact />
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Interactive Project Details Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
}

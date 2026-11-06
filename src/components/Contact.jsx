import { useState } from 'react';
import { Mail, Phone, Github, Linkedin, Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { personalData } from '../data/content';
import FadeIn from './common/FadeIn';

export default function Contact() {
  const { identity, sections } = personalData;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('');

  const validateField = (field, value) => {
    const trimmed = value.trim();
    if (field === 'name') {
      if (!trimmed) return 'Name is required.';
      if (trimmed.length < 2) return 'Name must be at least 2 characters.';
    }
    if (field === 'email') {
      if (!trimmed) return 'Email address is required.';
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(trimmed)) return 'Please enter a valid email address.';
    }
    if (field === 'message') {
      if (!trimmed) return 'Message cannot be empty.';
      if (trimmed.length < 10) return 'Message must be at least 10 characters.';
    }
    return '';
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (touched[name]) {
      const error = validateField(name, value);
      setErrors((prev) => ({ ...prev, [name]: error }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const error = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const createMailtoLink = () => {
    const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name || 'Candidate Contact'}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    return `mailto:${identity.email}?subject=${subject}&body=${body}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate all fields
    const newErrors = {
      name: validateField('name', formData.name),
      email: validateField('email', formData.email),
      message: validateField('message', formData.message),
    };

    setErrors(newErrors);
    setTouched({ name: true, email: true, message: true });

    if (newErrors.name || newErrors.email || newErrors.message) {
      return;
    }

    const endpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT;

    // Graceful fallback if endpoint is not set or contains default placeholder
    if (!endpoint || endpoint.includes('your_formspree_id_here') || endpoint.includes('your_form_id')) {
      // Trigger native mailto client dispatch
      window.location.href = createMailtoLink();
      setStatus('success');
      return;
    }

    setStatus('submitting');
    setErrorMessage('');

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          message: formData.message.trim(),
        }),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTouched({});
        setErrors({});
      } else {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || 'Submission failed. Service temporarily unavailable.');
      }
    } catch (err) {
      setStatus('error');
      setErrorMessage(
        err.message || 'Unable to deliver message over the web service. You can dispatch directly via mailto.'
      );
    }
  };

  const resetForm = () => {
    setStatus('idle');
    setFormData({ name: '', email: '', message: '' });
    setErrors({});
    setTouched({});
    setErrorMessage('');
  };

  return (
    <section id="contact" className="py-12 md:py-16">
      <FadeIn className="space-y-8">
        {/* Section Header */}
        <div className="space-y-1">
          <h2 className="text-xs font-mono font-semibold uppercase tracking-wider text-accent">
            {sections.contact.title}
          </h2>
          <p className="text-2xl font-bold tracking-tight text-text-primary sm:text-3xl">
            {sections.contact.subtitle}
          </p>
          <p className="text-sm text-text-secondary max-w-2xl pt-1">
            {sections.contact.intro}
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-12">
          {/* Direct Channels */}
          <div className="space-y-4 lg:col-span-5">
            <h3 className="text-sm font-mono font-semibold text-text-primary">
              Direct Contact Details
            </h3>

            <div className="space-y-3">
              <a
                href={`mailto:${identity.email}`}
                className="flex items-center gap-3 rounded-xl border border-surface-border bg-surface-card p-4 transition-colors hover:border-accent hover:text-accent group"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-bg-secondary text-accent group-hover:bg-accent-muted transition-colors">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-text-muted">Direct Email</div>
                  <div className="text-sm font-medium text-text-primary group-hover:text-accent transition-colors">
                    {identity.email}
                  </div>
                </div>
              </a>

              <a
                href={`tel:${identity.phone.replace(/[^0-9+]/g, '')}`}
                className="flex items-center gap-3 rounded-xl border border-surface-border bg-surface-card p-4 transition-colors hover:border-accent hover:text-accent group"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-bg-secondary text-accent group-hover:bg-accent-muted transition-colors">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-text-muted">Telephone</div>
                  <div className="text-sm font-medium text-text-primary group-hover:text-accent transition-colors">
                    {identity.phone}
                  </div>
                </div>
              </a>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <a
                  href={identity.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-xl border border-surface-border bg-surface-card p-3.5 text-xs font-medium text-text-secondary hover:border-accent hover:text-accent transition-colors"
                >
                  <Github className="h-4 w-4 shrink-0 text-accent" />
                  <span>GitHub Profile</span>
                </a>

                <a
                  href={identity.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-xl border border-surface-border bg-surface-card p-3.5 text-xs font-medium text-text-secondary hover:border-accent hover:text-accent transition-colors"
                >
                  <Linkedin className="h-4 w-4 shrink-0 text-accent" />
                  <span>LinkedIn Profile</span>
                </a>
              </div>
            </div>
          </div>

          {/* Interactive Form */}
          <div className="lg:col-span-7">
            <div className="rounded-xl border border-surface-border bg-surface-card p-6 sm:p-7">
              {status === 'success' ? (
                <div className="space-y-4 py-6 text-center">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-accent-muted text-accent">
                    <CheckCircle2 className="h-7 w-7" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-lg font-bold text-text-primary">Message Dispatched!</h3>
                    <p className="text-xs text-text-secondary max-w-md mx-auto">
                      Thank you for reaching out. I review all inquiries carefully and will respond shortly.
                    </p>
                  </div>
                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={resetForm}
                      className="rounded-lg border border-surface-border bg-bg-secondary px-4 py-2 font-mono text-xs font-semibold text-text-primary hover:border-accent hover:text-accent transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  {status === 'error' && (
                    <div
                      role="alert"
                      className="rounded-lg border border-red-500/30 bg-red-500/10 p-3.5 space-y-2 text-xs"
                    >
                      <div className="flex items-center gap-2 text-red-400 font-semibold font-mono">
                        <AlertCircle className="h-4 w-4 shrink-0" />
                        <span>Submission Notice</span>
                      </div>
                      <p className="text-text-secondary leading-relaxed">
                        {errorMessage}
                      </p>
                      <div className="pt-1">
                        <a
                          href={createMailtoLink()}
                          className="inline-flex items-center gap-1.5 rounded bg-accent px-3 py-1.5 font-mono text-xs font-semibold text-bg-primary hover:bg-accent-hover transition-colors"
                        >
                          <Mail className="h-3.5 w-3.5" />
                          <span>Dispatch via Mail Client (Pre-filled)</span>
                        </a>
                      </div>
                    </div>
                  )}

                  {/* Name field */}
                  <div className="space-y-1">
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-mono font-medium text-text-secondary"
                    >
                      Your Name <span className="text-accent">*</span>
                    </label>
                    <input
                      type="text"
                      id="contact-name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      aria-required="true"
                      aria-invalid={touched.name && !!errors.name}
                      aria-describedby={touched.name && errors.name ? 'contact-name-error' : undefined}
                      placeholder="e.g. Alex Sharma"
                      className={`w-full rounded-lg border bg-bg-primary px-3.5 py-2.5 text-sm text-text-primary placeholder:text-text-muted focus:outline-none transition-colors ${
                        touched.name && errors.name
                          ? 'border-red-500/80 focus:border-red-500'
                          : 'border-surface-border focus:border-accent'
                      }`}
                    />
                    {touched.name && errors.name && (
                      <p id="contact-name-error" className="text-[11px] font-mono text-red-400 pt-0.5">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email field */}
                  <div className="space-y-1">
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-mono font-medium text-text-secondary"
                    >
                      Your Email <span className="text-accent">*</span>
                    </label>
                    <input
                      type="email"
                      id="contact-email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      aria-required="true"
                      aria-invalid={touched.email && !!errors.email}
                      aria-describedby={touched.email && errors.email ? 'contact-email-error' : undefined}
                      placeholder="e.g. alex@company.com"
                      className={`w-full rounded-lg border bg-bg-primary px-3.5 py-2.5 text-sm text-text-primary placeholder:text-text-muted focus:outline-none transition-colors ${
                        touched.email && errors.email
                          ? 'border-red-500/80 focus:border-red-500'
                          : 'border-surface-border focus:border-accent'
                      }`}
                    />
                    {touched.email && errors.email && (
                      <p id="contact-email-error" className="text-[11px] font-mono text-red-400 pt-0.5">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Message field */}
                  <div className="space-y-1">
                    <label
                      htmlFor="contact-message"
                      className="block text-xs font-mono font-medium text-text-secondary"
                    >
                      Message <span className="text-accent">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      aria-required="true"
                      aria-invalid={touched.message && !!errors.message}
                      aria-describedby={touched.message && errors.message ? 'contact-message-error' : undefined}
                      placeholder="Tell me about your team, role opening, or question..."
                      className={`w-full rounded-lg border bg-bg-primary px-3.5 py-2.5 text-sm text-text-primary placeholder:text-text-muted focus:outline-none transition-colors resize-none ${
                        touched.message && errors.message
                          ? 'border-red-500/80 focus:border-red-500'
                          : 'border-surface-border focus:border-accent'
                      }`}
                    />
                    {touched.message && errors.message && (
                      <p id="contact-message-error" className="text-[11px] font-mono text-red-400 pt-0.5">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Action */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-bg-primary hover:bg-accent-hover disabled:opacity-60 disabled:cursor-not-allowed transition-colors shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                    >
                      {status === 'submitting' ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin" />
                          <span>Transmitting Message...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <Send className="h-4 w-4" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}

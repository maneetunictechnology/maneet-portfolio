'use client';

import { useState } from 'react';
import { Mail, Github, Send, CheckCircle2, AlertCircle, Loader2, Sparkles, MessageSquare } from 'lucide-react';
import { contactInfo, personalInfo } from '@/lib/portfolio-data';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    _gotcha: '', // Honeypot field for bot spam prevention
  });

  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');
    setSuccessMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.error || 'Failed to send message. Please try email.');
      }

      setStatus('success');
      setSuccessMessage(data.message || 'Your inquiry has been received! Thank you.');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        _gotcha: '',
      });
    } catch (err) {
      setStatus('error');
      setErrorMessage(
        err.message || 'An error occurred while transmitting your message. Please use direct email.'
      );
    }
  };

  const mailtoLink = `mailto:${contactInfo.email}?subject=${encodeURIComponent(
    formData.subject || 'Inquiry regarding Web Development / Freelance'
  )}&body=${encodeURIComponent(
    `Hello Maneet,\n\nName: ${formData.name || ''}\nEmail: ${formData.email || ''}\n\nMessage:\n${formData.message || ''}`
  )}`;

  return (
    <section id="contact" className="py-20 bg-background relative" aria-label="Contact & Inquiries">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#151A24] border border-border text-xs font-mono uppercase tracking-wider text-accent mb-3">
            <MessageSquare className="w-3.5 h-3.5 text-secondaryAccent" />
            <span>Connect &amp; Collaborate</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-primary tracking-tight">
            {contactInfo.heading}
          </h2>
          <p className="text-secondary text-sm sm:text-base mt-3 max-w-xl mx-auto">
            {contactInfo.supportingText}
          </p>
          <div className="w-12 h-1 bg-accent mx-auto mt-4 rounded-full" />
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start max-w-6xl mx-auto">
          {/* Left Column: Direct Info & Invitation (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-card rounded-2xl p-7 border border-border space-y-6 shadow-card-subtle">
              <h3 className="text-xl font-bold text-primary">Let&apos;s Build Together</h3>
              <p className="text-sm text-secondary leading-relaxed">
                {contactInfo.invitationText}
              </p>

              <div className="space-y-4 pt-4 border-t border-border/70">
                {/* Email Direct */}
                <div className="p-4 rounded-xl bg-[#11151D] border border-border/80 flex items-start space-x-3.5">
                  <div className="p-2.5 rounded-lg bg-accent/10 text-accent flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-xs font-mono text-secondary uppercase">Email Directly</div>
                    <a
                      href={`mailto:${contactInfo.email}`}
                      className="text-sm font-semibold text-primary hover:text-accent truncate block mt-0.5 transition-colors"
                    >
                      {contactInfo.email}
                    </a>
                    <div className="text-[11px] text-secondaryAccent mt-1">{contactInfo.responseTime}</div>
                  </div>
                </div>

                {/* GitHub Direct */}
                <div className="p-4 rounded-xl bg-[#11151D] border border-border/80 flex items-start space-x-3.5">
                  <div className="p-2.5 rounded-lg bg-accent/10 text-accent flex-shrink-0">
                    <Github className="w-5 h-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-xs font-mono text-secondary uppercase">GitHub Profile</div>
                    <a
                      href={contactInfo.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-primary hover:text-accent truncate block mt-0.5 transition-colors"
                    >
                      maneetunictechnology
                    </a>
                    <div className="text-[11px] text-secondary mt-1">Explore open-source repositories</div>
                  </div>
                </div>
              </div>

              {/* Note on honest contact */}
              <div className="p-4 rounded-xl bg-[#0F131C] border border-border/60 text-xs text-secondary leading-relaxed">
                <span className="font-semibold text-primary">Direct Fallback:</span> Prefer your email client? Click the mailto link anytime:{' '}
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-accent underline font-mono ml-1"
                >
                  Send via Mailto &rarr;
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form (7 cols) */}
          <div className="lg:col-span-7 bg-card rounded-2xl p-7 border border-border shadow-card-subtle">
            <h3 className="text-xl font-bold text-primary mb-1">Send a Direct Message</h3>
            <p className="text-xs sm:text-sm text-secondary mb-6">
              Fill in your inquiry details below. Protected with rate limiting and automated spam filters.
            </p>

            {/* Status Messages */}
            {status === 'success' && (
              <div
                className="mb-6 p-4 rounded-xl bg-secondaryAccent/10 border border-secondaryAccent/30 text-secondaryAccent flex items-start space-x-3 text-sm"
                role="alert"
              >
                <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold">Message Transmitted Successfully</div>
                  <div className="text-xs mt-0.5">{successMessage}</div>
                </div>
              </div>
            )}

            {status === 'error' && (
              <div
                className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-300 flex items-start space-x-3 text-sm"
                role="alert"
              >
                <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold">Submission Failed</div>
                  <div className="text-xs mt-0.5">{errorMessage}</div>
                  <div className="mt-2">
                    <a
                      href={mailtoLink}
                      className="inline-flex items-center text-xs font-mono text-accent hover:underline font-semibold"
                    >
                      Click here to send via your local email app &rarr;
                    </a>
                  </div>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              {/* Bot Honeypot hidden input */}
              <div className="hidden" aria-hidden="true">
                <label htmlFor="_gotcha">Leave this field empty</label>
                <input
                  type="text"
                  name="_gotcha"
                  id="_gotcha"
                  value={formData._gotcha}
                  onChange={handleChange}
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-xs font-mono uppercase text-secondary mb-1.5">
                    Your Name <span className="text-accent">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Alex Morgan"
                    disabled={status === 'loading'}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#11151D] border border-border text-primary placeholder-secondary/50 text-sm focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-colors disabled:opacity-50"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-xs font-mono uppercase text-secondary mb-1.5">
                    Your Email <span className="text-accent">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="alex@example.com"
                    disabled={status === 'loading'}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#11151D] border border-border text-primary placeholder-secondary/50 text-sm focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-colors disabled:opacity-50"
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-xs font-mono uppercase text-secondary mb-1.5">
                  Subject / Opportunity Type <span className="text-accent">*</span>
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="e.g. Junior Web Developer Opening / Freelance Project"
                  disabled={status === 'loading'}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#11151D] border border-border text-primary placeholder-secondary/50 text-sm focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-colors disabled:opacity-50"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-xs font-mono uppercase text-secondary mb-1.5">
                  Message Details <span className="text-accent">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your team, project requirements, or question..."
                  disabled={status === 'loading'}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#11151D] border border-border text-primary placeholder-secondary/50 text-sm focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-colors resize-y disabled:opacity-50"
                />
              </div>

              {/* Submit Button */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="inline-flex items-center space-x-2 px-7 py-3 rounded-full bg-white text-[#0B0D12] text-sm font-bold hover:bg-[#F2F4F8] disabled:opacity-60 transition-all shadow-xl shadow-white/10 hover:shadow-white/20 focus-visible:ring-2 focus-visible:ring-accent"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Transmitting...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>

                <a
                  href={mailtoLink}
                  className="text-xs font-mono text-secondary hover:text-accent transition-colors flex items-center space-x-1"
                >
                  <span>Or open mail client</span>
                  <span>&rarr;</span>
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

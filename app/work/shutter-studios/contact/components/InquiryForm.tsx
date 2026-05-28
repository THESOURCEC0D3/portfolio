"use client";

import { useState } from "react";

export default function InquiryForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section
      id="inquiry-form"
      className="py-20 md:py-28 px-6 md:px-10 bg-[var(--color-dark-elevated)]"
    >
      <div className="max-w-3xl mx-auto">
        <p className="font-mono text-xs text-[var(--color-gold)] mb-6">
          Inquiry Form
        </p>
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[var(--color-cream)] leading-[1.1] tracking-tight mb-12">
          Tell us about your <span className="italic">day.</span>
        </h2>

        {submitted ? (
          <div className="border-t border-[var(--color-cream)]/20 pt-8">
            <p className="font-mono text-xs text-[var(--color-gold)] mb-4">
              Message Received
            </p>
            <h3 className="font-serif text-3xl md:text-4xl text-[var(--color-cream)] leading-tight mb-4">
              Thanks for reaching out.
            </h3>
            <p className="text-[var(--color-muted)] text-base md:text-lg leading-relaxed">
              We've received your inquiry and will come back to you within one
              business day with a detailed response.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-8">
            <div>
              <label
                htmlFor="name"
                className="block font-mono text-xs text-[var(--color-muted)] mb-3"
              >
                Your name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full bg-transparent border-b border-[var(--color-cream)]/30 py-3 text-[var(--color-cream)] focus:outline-none focus:border-[var(--color-gold)] transition-colors"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block font-mono text-xs text-[var(--color-muted)] mb-3"
              >
                Email address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full bg-transparent border-b border-[var(--color-cream)]/30 py-3 text-[var(--color-cream)] focus:outline-none focus:border-[var(--color-gold)] transition-colors"
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block font-mono text-xs text-[var(--color-muted)] mb-3"
              >
                Phone or WhatsApp number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                className="w-full bg-transparent border-b border-[var(--color-cream)]/30 py-3 text-[var(--color-cream)] focus:outline-none focus:border-[var(--color-gold)] transition-colors"
              />
            </div>

            <div>
              <label
                htmlFor="service"
                className="block font-mono text-xs text-[var(--color-muted)] mb-3"
              >
                What kind of project
              </label>
              <select
                id="service"
                name="service"
                required
                className="w-full bg-transparent border-b border-[var(--color-cream)]/30 py-3 text-[var(--color-cream)] focus:outline-none focus:border-[var(--color-gold)] transition-colors"
              >
                <option value="" className="bg-[var(--color-dark)]">
                  Select one
                </option>
                <option value="wedding" className="bg-[var(--color-dark)]">
                  Wedding
                </option>
                <option value="portrait" className="bg-[var(--color-dark)]">
                  Portrait session
                </option>
                <option value="brand" className="bg-[var(--color-dark)]">
                  Brand or editorial
                </option>
                <option value="other" className="bg-[var(--color-dark)]">
                  Something else
                </option>
              </select>
            </div>

            <div>
              <label
                htmlFor="date"
                className="block font-mono text-xs text-[var(--color-muted)] mb-3"
              >
                Date of the event (if known)
              </label>
              <input
                type="text"
                id="date"
                name="date"
                placeholder="e.g. June 2026, or not sure yet"
                className="w-full bg-transparent border-b border-[var(--color-cream)]/30 py-3 text-[var(--color-cream)] placeholder:text-[var(--color-cream)]/30 focus:outline-none focus:border-[var(--color-gold)] transition-colors"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block font-mono text-xs text-[var(--color-muted)] mb-3"
              >
                Tell us about your project
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="w-full bg-transparent border-b border-[var(--color-cream)]/30 py-3 text-[var(--color-cream)] focus:outline-none focus:border-[var(--color-gold)] transition-colors resize-none"
              />
            </div>

            <div className="pt-4">
              <button
                type="submit"
                className="font-mono text-xs px-8 py-4 bg-[var(--color-gold)] text-[var(--color-dark)] rounded-full hover:bg-[var(--color-cream)] transition-colors"
              >
                Send the Inquiry
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}

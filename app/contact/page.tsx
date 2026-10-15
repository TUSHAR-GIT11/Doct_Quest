
"use client";

import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import Link from "next/link";

type FormValues = {
  name: string;
  email: string;
  company: string;
  service: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

const initialValues: FormValues = {
  name: "",
  email: "",
  company: "",
  service: "",
  message: "",
};

const allowedServices = [
  "lead-management",
  "property-inventory",
  "follow-ups",
  "sales-pipeline",
  "reports-analytics",
  "other",
];

function validateForm(values: FormValues): FormErrors {
  const errors: FormErrors = {};

  const name = values.name.trim();
  const email = values.email.trim();
  const company = values.company.trim();
  const message = values.message.trim();

  // Full Name validation
  if (!name) {
    errors.name = "Full name is required.";
  } else if (name.length < 2) {
    errors.name = "Full name must contain at least 2 characters.";
  } else if (name.length > 80) {
    errors.name = "Full name cannot exceed 80 characters.";
  } else if (!/^[\p{L}][\p{L}\p{M}\s.'’-]*$/u.test(name)) {
    errors.name =
      "Use letters, spaces, hyphens, or apostrophes only.";
  }

  // Email validation
  if (!email) {
    errors.email = "Work email is required.";
  } else if (
    email.length > 254 ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)
  ) {
    errors.email = "Please enter a valid email address.";
  }

  // Company name is optional
  if (company.length > 100) {
    errors.company = "Company name cannot exceed 100 characters.";
  } else if (
    company &&
    !/^[\p{L}\p{M}\p{N}\s&.,'()/-]+$/u.test(company)
  ) {
    errors.company = "Please enter a valid company name.";
  }

  // Service validation
  if (!values.service) {
    errors.service = "Please select a service.";
  } else if (!allowedServices.includes(values.service)) {
    errors.service = "Please select a valid service.";
  }

  // Message validation
  if (!message) {
    errors.message = "Your message is required.";
  } else if (message.length < 20) {
    errors.message = "Message must contain at least 20 characters.";
  } else if (message.length > 1000) {
    errors.message = "Message cannot exceed 1,000 characters.";
  }

  return errors;
}

export default function ContactPage() {
  const [formValues, setFormValues] =
    useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    event: ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    const { name, value } = event.target;
    const field = name as keyof FormValues;

    setFormValues((previous) => ({
      ...previous,
      [field]: value,
    }));

    setErrors((previous) => ({
      ...previous,
      [field]: undefined,
    }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const validationErrors = validateForm(formValues);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      const firstInvalidField = Object.keys(
        validationErrors
      )[0];

      document.getElementById(firstInvalidField)?.focus();
      return;
    }

    // Test mode: validation succeeded, but nothing is sent or stored.
    setSubmitted(true);
  }

  function resetForm() {
    setFormValues(initialValues);
    setErrors({});
    setSubmitted(false);
  }

  const inputClass = (field: keyof FormValues) =>
    `w-full min-w-0 rounded-xl border bg-white px-3 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:ring-4 focus:ring-blue-500/10 min-[480px]:px-4 min-[480px]:py-3.5 ${
      errors[field]
        ? "border-red-500 focus:border-red-500"
        : "border-slate-300 focus:border-blue-500"
    }`;

  const labelClass =
    "mb-2 block text-sm font-semibold text-slate-700";

  function ErrorMessage({
    field,
  }: {
    field: keyof FormValues;
  }) {
    if (!errors[field]) return null;

    return (
      <p
        id={`${field}-error`}
        role="alert"
        className="mt-2 text-sm leading-5 text-red-600"
      >
        {errors[field]}
      </p>
    );
  }

  return (
    <main className="w-full overflow-x-clip bg-white text-slate-900">
      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-950 px-4 py-16 text-white min-[480px]:px-6 sm:px-8 sm:py-20 lg:py-28">
        <div className="pointer-events-none absolute -right-24 -top-20 h-56 w-56 rounded-full bg-blue-600/20 blur-3xl sm:h-80 sm:w-80" />

        <div className="relative mx-auto w-full max-w-7xl">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-400 min-[480px]:text-sm sm:tracking-[0.2em]">
            Contact Us
          </p>

          <h1 className="mt-4 max-w-4xl break-words text-3xl font-extrabold leading-tight tracking-tight min-[375px]:text-4xl min-[480px]:text-5xl sm:mt-5 lg:text-7xl">
            Let&apos;s Start a{" "}
            <span className="text-blue-400">Conversation.</span>
          </h1>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-300 min-[480px]:mt-7 min-[480px]:text-base min-[480px]:leading-8 sm:text-lg">
            Have questions about organizing your business workflows?
            Tell us what you need, and let&apos;s explore the next
            steps together.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="px-4 py-12 min-[480px]:px-6 min-[480px]:py-16 sm:px-8 lg:py-24">
        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-10 min-[480px]:gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 xl:gap-20">
          {/* Contact Information */}
          <aside className="min-w-0">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-600 min-[480px]:text-sm min-[480px]:tracking-[0.18em]">
              Get in Touch
            </p>

            <h2 className="mt-4 text-2xl font-bold tracking-tight min-[480px]:text-3xl sm:text-4xl">
              How can we help your business?
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-600 min-[480px]:mt-5 min-[480px]:text-base min-[480px]:leading-8">
              Share your requirements, ask a question, or tell us about
              the challenges your team faces. We&apos;d be happy to hear
              from you.
            </p>

            <div className="mt-7 space-y-4 min-[480px]:mt-9 min-[480px]:space-y-5">
              <div className="flex min-w-0 items-start gap-3 rounded-2xl border border-slate-200 p-4 min-[480px]:gap-4 min-[480px]:p-5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-xl text-blue-600 min-[480px]:h-12 min-[480px]:w-12">
                  ✉
                </span>

                <div className="min-w-0 flex-1">
                  <h3 className="font-bold">Email Enquiries</h3>
                  <p className="mt-2 break-words text-sm leading-6 text-slate-500">
                    Contact us by email for business enquiries and
                    questions.
                  </p>
                  <p className="mt-2 break-words text-xs font-medium leading-5 text-slate-400 min-[480px]:text-sm">
                    Add your official company email here.
                  </p>
                </div>
              </div>

              <div className="flex min-w-0 items-start gap-3 rounded-2xl border border-slate-200 p-4 min-[480px]:gap-4 min-[480px]:p-5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-xl text-blue-600 min-[480px]:h-12 min-[480px]:w-12">
                  ◷
                </span>

                <div className="min-w-0 flex-1">
                  <h3 className="font-bold">Business Enquiries</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    Tell us about your requirements and the workflows
                    you want to improve.
                  </p>
                </div>
              </div>
            </div>

            {/* Explore Links */}
            <div className="mt-6 rounded-2xl bg-slate-50 p-4 min-[480px]:mt-8 min-[480px]:p-6">
              <h3 className="font-bold">Explore DoctQuest</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Learn more about our services and how we approach
                business workflow organization.
              </p>

              <div className="mt-4 flex flex-wrap gap-x-4 gap-y-3 text-sm font-semibold text-blue-600">
                <Link href="/about" className="transition hover:text-blue-800">
                  About Us ↗
                </Link>
                <Link href="/services" className="transition hover:text-blue-800">
                  Our Services ↗
                </Link>
                <Link href="/approach" className="transition hover:text-blue-800">
                  Our Approach ↗
                </Link>
              </div>
            </div>
          </aside>

          {/* Contact Form */}
          <div className="min-w-0 rounded-2xl border border-slate-200 bg-white p-4 shadow-xl shadow-slate-900/5 min-[480px]:rounded-3xl min-[480px]:p-6 sm:p-9 lg:p-10">
            <h2 className="text-xl font-bold tracking-tight min-[480px]:text-2xl">
              Send Us a Message
            </h2>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              Fill in the details below so we can understand your
              enquiry.
            </p>

            {submitted ? (
              <div
                role="status"
                className="mt-6 rounded-2xl border border-green-200 bg-green-50 p-4 min-[480px]:mt-8 min-[480px]:p-6"
              >
                <div className="flex items-start gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-100 text-xl text-green-700">
                    ✓
                  </span>

                  <div className="min-w-0 flex-1">
                    <h3 className="text-lg font-bold text-green-900">
                      Enquiry Submitted Successfully!
                    </h3>

                    <p className="mt-2 text-sm leading-7 text-green-800">
                      Thank you, {formValues.name.trim()}! Your form
                      has passed validation successfully.
                    </p>

                    <p className="mt-2 text-sm leading-6 text-green-700">
                      This is a test submission. No email has been sent
                      and your enquiry has not been saved.
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={resetForm}
                  className="mt-5 w-full rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-500/30 min-[420px]:w-auto"
                >
                  Submit Another Enquiry
                </button>
              </div>
            ) : (
              <form
                noValidate
                onSubmit={handleSubmit}
                className="mt-6 space-y-5 min-[480px]:mt-8 min-[480px]:space-y-6"
              >
                {/* Full Name and Email */}
                <div className="grid grid-cols-1 gap-5 min-[600px]:grid-cols-2 min-[600px]:gap-6">
                  <div className="min-w-0">
                    <label htmlFor="name" className={labelClass}>
                      Full Name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={formValues.name}
                      onChange={handleChange}
                      autoComplete="name"
                      minLength={2}
                      maxLength={80}
                      required
                      aria-invalid={Boolean(errors.name)}
                      aria-describedby={errors.name ? "name-error" : undefined}
                      placeholder="Enter your full name"
                      className={inputClass("name")}
                    />
                    <ErrorMessage field="name" />
                  </div>

                  <div className="min-w-0">
                    <label htmlFor="email" className={labelClass}>
                      Work Email *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formValues.email}
                      onChange={handleChange}
                      autoComplete="email"
                      maxLength={254}
                      required
                      aria-invalid={Boolean(errors.email)}
                      aria-describedby={errors.email ? "email-error" : undefined}
                      placeholder="you@company.com"
                      className={inputClass("email")}
                    />
                    <ErrorMessage field="email" />
                  </div>
                </div>

                {/* Company and Service */}
                <div className="grid grid-cols-1 gap-5 min-[600px]:grid-cols-2 min-[600px]:gap-6">
                  <div className="min-w-0">
                    <label htmlFor="company" className={labelClass}>
                      Company Name
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      value={formValues.company}
                      onChange={handleChange}
                      autoComplete="organization"
                      maxLength={100}
                      aria-invalid={Boolean(errors.company)}
                      aria-describedby={errors.company ? "company-error" : undefined}
                      placeholder="Your company"
                      className={inputClass("company")}
                    />
                    <ErrorMessage field="company" />
                  </div>

                  <div className="min-w-0">
                    <label htmlFor="service" className={labelClass}>
                      What Are You Interested In? *
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formValues.service}
                      onChange={handleChange}
                      required
                      aria-invalid={Boolean(errors.service)}
                      aria-describedby={errors.service ? "service-error" : undefined}
                      className={inputClass("service")}
                    >
                      <option value="">Select a service</option>
                      <option value="lead-management">Lead Management</option>
                      <option value="property-inventory">Property Inventory</option>
                      <option value="follow-ups">Follow-up Management</option>
                      <option value="sales-pipeline">Sales Pipeline</option>
                      <option value="reports-analytics">Reports &amp; Analytics</option>
                      <option value="other">Other Enquiry</option>
                    </select>
                    <ErrorMessage field="service" />
                  </div>
                </div>

                {/* Message */}
                <div className="min-w-0">
                  <label htmlFor="message" className={labelClass}>
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formValues.message}
                    onChange={handleChange}
                    rows={5}
                    minLength={20}
                    maxLength={1000}
                    required
                    aria-invalid={Boolean(errors.message)}
                    aria-describedby={
                      errors.message ? "message-error" : "message-count"
                    }
                    placeholder="Tell us about your requirements..."
                    className={`${inputClass("message")} resize-y`}
                  />
                  <ErrorMessage field="message" />

                  {!errors.message && (
                    <p
                      id="message-count"
                      className="mt-2 text-right text-xs text-slate-500"
                    >
                      {formValues.message.length}/1000 characters
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3.5 text-sm font-bold text-white transition hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-500/30 min-[420px]:w-auto min-[420px]:px-6 min-[480px]:py-4 min-[480px]:text-base"
                >
                  Submit Enquiry <span aria-hidden="true">↗</span>
                </button>

                <p className="text-xs leading-6 text-slate-500">
                  Fields marked with * are required. This is a frontend
                  test form; no information is sent or stored.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}


import Link from "next/link";

const steps = [
  {
    number: "01",
    title: "Understand Your Workflow",
    description:
      "Identify how your team currently manages leads, property information, customer interactions, and sales activities.",
    tags: ["Business needs", "Current processes"],
  },
  {
    number: "02",
    title: "Organize Your Information",
    description:
      "Structure important business information so that customer details, property records, and opportunities are easier to manage.",
    tags: ["Lead records", "Property data"],
  },
  {
    number: "03",
    title: "Manage Daily Activities",
    description:
      "Keep follow-ups, customer interactions, and opportunity updates organized to support consistent day-to-day operations.",
    tags: ["Follow-ups", "Activity tracking"],
  },
  {
    number: "04",
    title: "Review and Improve",
    description:
      "Review your business activities and pipeline to understand progress, identify gaps, and make more informed decisions.",
    tags: ["Progress reviews", "Performance insights"],
  },
];

const principles = [
  {
    icon: "◎",
    title: "Clarity First",
    description:
      "Keep essential information organized and accessible so teams can focus on their priorities.",
  },
  {
    icon: "↗",
    title: "Practical Solutions",
    description:
      "Focus on workflows that support real business activities instead of adding unnecessary complexity.",
  },
  {
    icon: "◇",
    title: "Continuous Improvement",
    description:
      "Use regular reviews and feedback to identify opportunities to improve everyday processes.",
  },
];

const overview = [
  ["01", "Understand"],
  ["02", "Organize"],
  ["03", "Improve"],
];

export default function ApproachPage() {
  return (
    <main className="w-full overflow-x-clip bg-white text-slate-900">
      {/* Hero Section */}
      <section className="relative isolate overflow-hidden bg-slate-950 px-4 py-16 text-white min-[375px]:px-5 sm:px-8 sm:py-20 md:py-24 lg:px-10 lg:py-32">
        <div className="pointer-events-none absolute -right-20 -top-20 -z-10 h-64 w-64 rounded-full bg-blue-600/20 blur-3xl sm:h-96 sm:w-96" />
        <div className="pointer-events-none absolute -bottom-24 -left-16 -z-10 h-56 w-56 rounded-full bg-indigo-600/10 blur-3xl sm:h-80 sm:w-80" />

        <div className="mx-auto w-full max-w-7xl">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-400 sm:text-sm sm:tracking-[0.2em]">
            Our Approach
          </p>

          <h1 className="mt-4 max-w-4xl text-3xl font-extrabold leading-[1.15] tracking-tight min-[375px]:text-4xl sm:mt-5 sm:text-5xl md:text-6xl lg:text-7xl">
            A Clearer Path to{" "}
            <span className="text-blue-400">Smarter Workflows.</span>
          </h1>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-300 sm:mt-7 sm:text-base sm:leading-8 md:text-lg">
            Our approach focuses on understanding your processes, organizing
            information, managing activities, and reviewing progress to help
            real estate teams work in a more structured way.
          </p>

          <div className="mt-7 flex flex-col gap-3 min-[480px]:flex-row min-[480px]:flex-wrap sm:mt-10 sm:gap-4">
            <Link
              href="#our-process"
              className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-500 min-[480px]:w-fit sm:px-6 sm:py-3.5"
            >
              Explore Our Process <span aria-hidden="true">↓</span>
            </Link>

            <Link
              href="/contact"
              className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-lg border border-slate-600 px-5 py-3 text-sm font-semibold text-white transition hover:border-blue-400 hover:bg-white/5 min-[480px]:w-fit sm:px-6 sm:py-3.5"
            >
              Talk to Our Team <span aria-hidden="true">↗</span>
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-3 min-[480px]:grid-cols-3 sm:mt-16 sm:gap-4">
            {overview.map(([number, title]) => (
              <div
                key={number}
                className="min-w-0 rounded-xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur-sm sm:rounded-2xl sm:p-5"
              >
                <span className="text-sm font-bold text-blue-400">
                  {number}
                </span>
                <p className="mt-2 text-base font-semibold sm:mt-3 sm:text-lg">
                  {title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section
        id="our-process"
        className="scroll-mt-20 px-4 py-14 min-[375px]:px-5 sm:px-8 sm:py-20 md:py-24 lg:px-10 lg:py-28"
      >
        <div className="mx-auto w-full max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600 sm:text-sm">
              How We Work
            </p>

            <h2 className="mt-3 text-2xl font-bold leading-tight tracking-tight sm:mt-4 sm:text-3xl lg:text-4xl">
              Four steps toward more organized operations.
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-600 sm:mt-5 sm:text-base">
              A structured process helps teams understand their needs and
              bring greater consistency to everyday business activities.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-4 min-[600px]:grid-cols-2 sm:mt-12 sm:gap-5 lg:gap-6">
            {steps.map((step) => (
              <article
                key={step.number}
                className="group min-w-0 rounded-2xl border border-slate-200 p-5 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-950/5 sm:p-7 lg:p-9"
              >
                <div className="flex items-start justify-between gap-3 sm:gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-base font-extrabold text-blue-700 transition group-hover:bg-blue-600 group-hover:text-white sm:h-14 sm:w-14 sm:rounded-2xl sm:text-lg">
                    {step.number}
                  </span>

                  <span className="text-2xl text-slate-300 transition group-hover:text-blue-500 sm:text-3xl">
                    ↗
                  </span>
                </div>

                <h3 className="mt-5 break-words text-lg font-bold leading-snug sm:mt-7 sm:text-xl lg:text-2xl">
                  {step.title}
                </h3>

                <p className="mt-3 break-words text-sm leading-7 text-slate-600 sm:mt-4 sm:text-base">
                  {step.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2 sm:mt-6">
                  {step.tags.map((tag) => (
                    <span
                      key={tag}
                      className="max-w-full rounded-full bg-slate-100 px-3 py-1.5 text-xs font-semibold leading-5 text-slate-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Principles Section */}
      <section className="bg-slate-50 px-4 py-14 min-[375px]:px-5 sm:px-8 sm:py-20 md:py-24 lg:px-10">
        <div className="mx-auto w-full max-w-7xl">
          <div className="mx-auto max-w-2xl text-left md:text-center">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600 sm:text-sm">
              Our Principles
            </p>

            <h2 className="mt-3 text-2xl font-bold leading-tight tracking-tight sm:mt-4 sm:text-3xl lg:text-4xl">
              Built around what matters.
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-600 sm:mt-5 sm:text-base">
              Our approach prioritizes clarity, practical workflows, and
              ongoing improvement.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-4 min-[600px]:grid-cols-2 sm:mt-12 sm:gap-5 md:grid-cols-3 lg:gap-6">
            {principles.map((principle) => (
              <article
                key={principle.title}
                className="min-w-0 rounded-2xl border border-slate-200 bg-white p-5 sm:p-7 lg:p-8"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-2xl text-blue-600 sm:h-12 sm:w-12">
                  {principle.icon}
                </span>

                <h3 className="mt-5 break-words text-lg font-bold sm:mt-6 sm:text-xl">
                  {principle.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {principle.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="px-4 py-14 min-[375px]:px-5 sm:px-8 sm:py-20 md:py-24 lg:px-10">
        <div className="mx-auto w-full max-w-7xl rounded-2xl bg-blue-600 p-5 text-white min-[375px]:p-6 sm:rounded-3xl sm:p-10 md:p-12 lg:p-16">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center md:gap-8">
            <div className="min-w-0">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-100 sm:text-sm">
                Let&apos;s Get Started
              </p>

              <h2 className="mt-3 max-w-2xl text-2xl font-bold leading-tight tracking-tight sm:mt-4 sm:text-3xl lg:text-4xl">
                Ready to organize your business workflows?
              </h2>

              <p className="mt-3 max-w-xl text-sm leading-7 text-blue-100 sm:mt-4 sm:text-base">
                Connect with our team to discuss your requirements and next
                steps.
              </p>
            </div>

            <Link
              href="/contact"
              className="inline-flex min-h-12 w-full shrink-0 items-center justify-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-bold text-blue-700 transition hover:bg-blue-50 min-[420px]:w-fit sm:px-6 sm:py-3.5"
            >
              Contact Us <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

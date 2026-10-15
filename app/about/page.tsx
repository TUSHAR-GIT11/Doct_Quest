
import Link from "next/link";

const values = [
  {
    number: "01",
    title: "Simplicity",
    description:
      "We make complex real estate workflows easier to manage through clear and organized digital solutions.",
  },
  {
    number: "02",
    title: "Efficiency",
    description:
      "We help teams organize leads, manage follow-ups, and keep important business activities on track.",
  },
  {
    number: "03",
    title: "Visibility",
    description:
      "We bring important information together so teams can understand their pipeline and make informed decisions.",
  },
];

const workflowItems = [
  "Organized lead information",
  "Structured property records",
  "Consistent customer follow-ups",
  "Clearer sales pipeline visibility",
];

export default function AboutPage() {
  return (
    <main className="w-full overflow-x-clip bg-white text-slate-900">
      {/* Hero Section */}
      <section className="relative isolate overflow-hidden bg-slate-950 px-4 py-16 text-white min-[375px]:px-5 sm:px-8 sm:py-20 md:py-24 lg:px-10 lg:py-32">
        <div className="pointer-events-none absolute -right-20 -top-20 -z-10 h-56 w-56 rounded-full bg-blue-600/20 blur-3xl sm:h-80 sm:w-80" />

        <div className="mx-auto w-full max-w-7xl">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-blue-400 sm:mb-5 sm:text-sm sm:tracking-[0.2em]">
            About DoctQuest
          </p>

          <h1 className="max-w-4xl text-3xl font-extrabold leading-[1.15] tracking-tight min-[375px]:text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
            Helping Real Estate Teams Work{" "}
            <span className="text-blue-400">Smarter.</span>
          </h1>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-300 sm:mt-7 sm:text-base sm:leading-8 md:text-lg">
            DoctQuest focuses on simplifying real estate operations with
            organized workflows for lead management, property inventory,
            follow-ups, and sales tracking.
          </p>

          <Link
            href="/contact"
            className="mt-7 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-500 min-[420px]:w-fit sm:mt-9 sm:px-6 sm:py-3.5"
          >
            Connect With Us <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>

      {/* Who We Are */}
      <section className="px-4 py-14 min-[375px]:px-5 sm:px-8 sm:py-20 md:py-24 lg:px-10 lg:py-28">
        <div className="mx-auto grid w-full max-w-7xl min-w-0 gap-8 sm:gap-10 md:grid-cols-2 md:items-center md:gap-8 lg:gap-14">
          <div className="min-w-0">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600 sm:text-sm">
              Who We Are
            </p>

            <h2 className="mt-3 text-2xl font-bold leading-tight tracking-tight sm:mt-4 sm:text-3xl lg:text-4xl">
              Bringing clarity to everyday business operations.
            </h2>

            <p className="mt-5 text-sm leading-7 text-slate-600 sm:mt-6 sm:text-base sm:leading-8">
              Managing leads, property information, customer conversations,
              and sales activities across different tools can make everyday
              work difficult. DoctQuest is designed around a more organized
              approach to these workflows.
            </p>

            <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
              Our focus is on helping teams keep information accessible,
              maintain consistent follow-ups, and get a clearer view of their
              ongoing business activities.
            </p>
          </div>

          {/* Connected Workflows Card */}
          <div className="min-w-0 rounded-2xl border border-slate-200 bg-slate-50 p-3 min-[375px]:p-4 sm:rounded-3xl sm:p-6 lg:p-8">
            <div className="rounded-xl bg-white p-4 shadow-sm min-[375px]:p-5 sm:rounded-2xl sm:p-7 lg:p-8">
              <div className="flex items-center justify-between gap-3 border-b border-slate-100 pb-4 sm:pb-5">
                <div className="min-w-0">
                  <p className="text-xs text-slate-500 sm:text-sm">
                    Our focus
                  </p>
                  <h3 className="mt-1 text-base font-bold leading-snug sm:text-lg md:text-xl">
                    Connected Workflows
                  </h3>
                </div>

                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-xl text-blue-600 sm:h-12 sm:w-12 sm:text-2xl">
                  ↗
                </span>
              </div>

              <div className="mt-1">
                {workflowItems.map((item) => (
                  <div
                    key={item}
                    className="flex min-w-0 items-start gap-3 border-b border-slate-100 py-3.5 last:border-0 last:pb-0 sm:py-4"
                  >
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-blue-700">
                      ✓
                    </span>

                    <span className="min-w-0 break-words text-sm font-medium leading-6 text-slate-700">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="bg-slate-50 px-4 py-14 min-[375px]:px-5 sm:px-8 sm:py-20 md:py-24 lg:px-10">
        <div className="mx-auto w-full max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600 sm:text-sm">
              What Guides Us
            </p>

            <h2 className="mt-3 text-2xl font-bold leading-tight tracking-tight sm:mt-4 sm:text-3xl lg:text-4xl">
              The principles behind our approach.
            </h2>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-4 min-[600px]:grid-cols-2 md:mt-12 md:grid-cols-3 md:gap-5 lg:gap-6">
            {values.map((value) => (
              <article
                key={value.number}
                className="min-w-0 rounded-2xl border border-slate-200 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-950/5 sm:p-7 lg:p-8"
              >
                <span className="text-sm font-extrabold text-blue-600">
                  {value.number}
                </span>

                <h3 className="mt-4 text-lg font-bold sm:mt-5 sm:text-xl">
                  {value.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600 sm:mt-4">
                  {value.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="px-4 py-14 min-[375px]:px-5 sm:px-8 sm:py-20 md:py-24 lg:px-10">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-start justify-between gap-6 rounded-2xl bg-blue-600 p-5 text-white min-[375px]:p-6 sm:gap-8 sm:rounded-3xl sm:p-10 md:flex-row md:items-center lg:p-12">
          <div className="min-w-0">
            <h2 className="text-2xl font-bold leading-tight tracking-tight sm:text-3xl lg:text-4xl">
              Let&apos;s build better workflows.
            </h2>

            <p className="mt-3 max-w-xl text-sm leading-7 text-blue-100 sm:mt-4 sm:text-base">
              Explore how DoctQuest can help organize your business operations.
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex min-h-12 w-full shrink-0 items-center justify-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-bold text-blue-700 transition hover:bg-blue-50 min-[420px]:w-fit sm:px-6 sm:py-3.5"
          >
            Contact Us <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>
    </main>
  );
}

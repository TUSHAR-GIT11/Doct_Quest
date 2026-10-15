
import Link from "next/link";

const services = [
  {
    number: "01",
    title: "Lead Management",
    description:
      "Organize customer enquiries and manage prospects from one place.",
    icon: "↗",
  },
  {
    number: "02",
    title: "Property Inventory",
    description:
      "Keep property listings and important details organized.",
    icon: "⌂",
  },
  {
    number: "03",
    title: "Follow-up Management",
    description:
      "Keep track of customer interactions and pending follow-ups.",
    icon: "◷",
  },
  {
    number: "04",
    title: "Sales Tracking",
    description:
      "Get a clearer view of opportunities and deal progress.",
    icon: "▥",
  },
];

const pipeline = [
  { label: "New Leads", value: "90%", width: "w-[90%]" },
  { label: "Site Visits", value: "65%", width: "w-[65%]" },
  { label: "Negotiations", value: "42%", width: "w-[42%]" },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative isolate overflow-hidden bg-gradient-to-br from-blue-50 via-white to-sky-50">
        <div className="pointer-events-none absolute -right-24 -top-24 -z-10 h-72 w-72 rounded-full bg-blue-200/40 blur-3xl sm:h-96 sm:w-96" />

        <div className="mx-auto grid w-full max-w-7xl items-center gap-10 px-4 py-14 sm:gap-14 sm:px-6 sm:py-20 md:py-24 lg:grid-cols-2 lg:gap-12 lg:px-10 lg:py-28">
          <div className="min-w-0">
            <span className="inline-flex max-w-full items-center gap-2 rounded-full border border-blue-100 bg-white px-3 py-2 text-[10px] font-bold uppercase tracking-wider text-blue-700 shadow-sm sm:px-4 sm:text-xs sm:tracking-widest">
              <span className="h-2 w-2 shrink-0 rounded-full bg-blue-600" />
              Real Estate CRM Solutions
            </span>

            <h1 className="mt-6 text-3xl font-extrabold leading-[1.15] tracking-tight text-slate-950 min-[375px]:text-4xl sm:mt-7 sm:text-5xl lg:text-6xl">
              Manage Every Lead.
              <span className="mt-2 block text-blue-600">
                Close More Deals.
              </span>
            </h1>

            <p className="mt-5 max-w-xl text-sm leading-7 text-slate-600 sm:mt-6 sm:text-base sm:leading-8 lg:text-lg">
              Simplify your real estate operations with organized customer
              enquiries, property information, follow-ups, and sales tracking
              in one connected workflow.
            </p>

            <div className="mt-7 flex flex-col gap-3 min-[480px]:flex-row sm:mt-9 sm:gap-4">
              <Link
                href="/contact"
                className="inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-xl bg-blue-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-1 hover:bg-blue-700 min-[480px]:w-auto sm:px-6 sm:py-4"
              >
                Get Started <span aria-hidden="true">↗</span>
              </Link>

              <Link
                href="/services"
                className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-bold text-slate-800 transition hover:border-blue-300 hover:text-blue-700 min-[480px]:w-auto sm:px-6 sm:py-4"
              >
                Explore Services <span aria-hidden="true">→</span>
              </Link>
            </div>

            <div className="mt-7 flex flex-col gap-3 text-sm text-slate-600 min-[400px]:flex-row min-[400px]:flex-wrap min-[400px]:gap-x-5 sm:mt-8 sm:gap-x-6">
              <span className="flex items-center gap-2">
                <span className="font-bold text-blue-600">✓</span>
                Organized enquiries
              </span>
              <span className="flex items-center gap-2">
                <span className="font-bold text-blue-600">✓</span>
                Clear deal tracking
              </span>
            </div>
          </div>

          {/* Illustrative Dashboard Preview */}
          <div className="mx-auto w-full min-w-0 max-w-xl">
            <div className="relative">
              <div className="pointer-events-none absolute -inset-2 rounded-3xl bg-blue-200/40 blur-2xl sm:-inset-3" />

              <div className="relative min-w-0 rounded-2xl border border-white bg-white p-3 shadow-2xl shadow-blue-950/10 min-[375px]:p-4 sm:rounded-3xl sm:p-7">
                <div className="flex min-w-0 items-center justify-between gap-2 border-b border-slate-100 pb-4 sm:gap-3 sm:pb-5">
                  <div className="min-w-0">
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400 sm:text-xs">
                      Dashboard Preview
                    </p>
                    <h2 className="mt-1.5 text-base font-bold text-slate-900 sm:mt-2 sm:text-lg">
                      Business Overview
                    </h2>
                  </div>

                  <span className="shrink-0 rounded-full bg-blue-50 px-2.5 py-1.5 text-[10px] font-bold text-blue-700 sm:px-3 sm:py-2 sm:text-xs">
                    Demo UI
                  </span>
                </div>

                <div className="mt-4 grid grid-cols-2 gap-2.5 sm:mt-5 sm:gap-4">
                  <div className="min-w-0 rounded-xl border border-slate-100 bg-slate-50 p-3 sm:rounded-2xl sm:p-4">
                    <p className="text-xs leading-5 text-slate-500 sm:text-sm">
                      Total Leads
                    </p>
                    <p className="mt-2 text-2xl font-extrabold text-slate-900 sm:mt-3 sm:text-3xl">
                      128
                    </p>
                    <p className="mt-2 text-[10px] text-blue-600 sm:text-xs">
                      Sample figure
                    </p>
                  </div>

                  <div className="min-w-0 rounded-xl border border-slate-100 bg-slate-50 p-3 sm:rounded-2xl sm:p-4">
                    <p className="text-xs leading-5 text-slate-500 sm:text-sm">
                      Active Deals
                    </p>
                    <p className="mt-2 text-2xl font-extrabold text-slate-900 sm:mt-3 sm:text-3xl">
                      36
                    </p>
                    <p className="mt-2 text-[10px] text-blue-600 sm:text-xs">
                      Sample figure
                    </p>
                  </div>
                </div>

                <div className="mt-3 rounded-xl border border-slate-100 p-3.5 sm:mt-5 sm:rounded-2xl sm:p-5">
                  <h3 className="text-sm font-bold text-slate-900 sm:text-base">
                    Opportunity Pipeline
                  </h3>

                  <div className="mt-4 space-y-4 sm:mt-5 sm:space-y-5">
                    {pipeline.map((item) => (
                      <div key={item.label} className="min-w-0">
                        <div className="mb-2 flex items-center justify-between gap-2 text-xs sm:text-sm">
                          <span className="min-w-0 text-slate-600">
                            {item.label}
                          </span>
                          <span className="shrink-0 font-bold text-slate-800">
                            {item.value}
                          </span>
                        </div>

                        <div className="h-2 overflow-hidden rounded-full bg-slate-100">
                          <div
                            className={`h-full rounded-full bg-gradient-to-r from-blue-500 to-blue-700 ${item.width}`}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <p className="mt-3 text-center text-[10px] leading-5 text-slate-400 sm:mt-4 sm:text-xs">
                  Illustrative preview — not live business data.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="bg-white py-14 sm:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="flex flex-col justify-between gap-5 sm:gap-6 md:flex-row md:items-end">
            <div className="min-w-0 max-w-2xl">
              <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-blue-600">
                What We Offer
              </p>

              <h2 className="mt-3 text-2xl font-extrabold leading-tight tracking-tight text-slate-950 sm:mt-4 sm:text-3xl lg:text-4xl">
                Simplify Your Daily Real Estate Operations
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                Essential tools and workflows to help keep your property
                business organized.
              </p>
            </div>

            <Link
              href="/services"
              className="inline-flex min-h-11 w-fit shrink-0 items-center gap-2 py-2 text-sm font-bold text-blue-700 transition hover:gap-3 sm:text-base"
            >
              View All Services <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-4 min-[640px]:grid-cols-2 sm:mt-10 lg:grid-cols-4 lg:gap-5">
            {services.map((service) => (
              <article
                key={service.number}
                className="group min-w-0 rounded-2xl border border-slate-200 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-950/5 sm:p-6"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-xl font-bold text-blue-700 transition group-hover:bg-blue-600 group-hover:text-white sm:h-12 sm:w-12">
                    {service.icon}
                  </span>

                  <span className="text-xs font-bold text-slate-300">
                    {service.number}
                  </span>
                </div>

                <h3 className="mt-5 text-base font-bold leading-6 text-slate-900 sm:mt-6 sm:text-lg">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {service.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="px-4 pb-14 sm:px-6 sm:pb-20 lg:px-10 lg:pb-24">
        <div className="relative mx-auto w-full max-w-7xl overflow-hidden rounded-2xl bg-gradient-to-br from-blue-700 to-indigo-800 px-5 py-9 text-white sm:rounded-3xl sm:px-8 sm:py-12 md:px-12 md:py-14 lg:px-16 lg:py-16">
          <div className="pointer-events-none absolute -right-16 -top-20 h-48 w-48 rounded-full border-[25px] border-white/10 sm:h-64 sm:w-64 sm:border-[35px]" />

          <div className="relative flex min-w-0 flex-col items-start justify-between gap-6 md:flex-row md:items-center md:gap-8">
            <div className="min-w-0 max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-200">
                Let&apos;s Connect
              </p>

              <h2 className="mt-4 text-2xl font-extrabold leading-tight sm:text-3xl md:text-4xl">
                Let&apos;s Find the Right Solution for Your Business
              </h2>

              <p className="mt-4 text-sm leading-7 text-blue-100 sm:text-base">
                Share your requirements with us and start a conversation
                about your real estate operations.
              </p>
            </div>

            <Link
              href="/contact"
              className="inline-flex min-h-12 w-full shrink-0 items-center justify-center gap-3 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-blue-700 transition hover:-translate-y-1 hover:bg-blue-50 md:w-auto"
            >
              Contact Us <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

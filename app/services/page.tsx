
import Link from "next/link";

const services = [
  {
    number: "01",
    icon: "◎",
    title: "Lead Management",
    description:
      "Keep potential customers organized in one place. Track lead details, monitor progress, and help your team manage opportunities more effectively.",
    features: [
      "Centralized lead records",
      "Lead status tracking",
      "Organized customer details",
    ],
  },
  {
    number: "02",
    icon: "⌂",
    title: "Property Inventory",
    description:
      "Maintain structured property information so your team can access important listing details and manage inventory more efficiently.",
    features: [
      "Property information",
      "Listing organization",
      "Quick access to records",
    ],
  },
  {
    number: "03",
    icon: "↻",
    title: "Follow-up Management",
    description:
      "Organize customer follow-ups and upcoming activities to help your team maintain consistent communication with potential buyers.",
    features: [
      "Follow-up scheduling",
      "Activity tracking",
      "Customer communication",
    ],
  },
  {
    number: "04",
    icon: "⇄",
    title: "Sales Pipeline",
    description:
      "Get a clearer view of opportunities as they move through different stages, from initial inquiry to deal closure.",
    features: [
      "Opportunity tracking",
      "Deal stage visibility",
      "Sales workflow organization",
    ],
  },
  {
    number: "05",
    icon: "▥",
    title: "Reports & Analytics",
    description:
      "Bring business activity into focus with organized reporting that helps teams review progress and identify areas for improvement.",
    features: [
      "Activity summaries",
      "Performance visibility",
      "Data-informed decisions",
    ],
  },
  {
    number: "06",
    icon: "♧",
    title: "Team Coordination",
    description:
      "Help team members stay aligned by keeping business information and ongoing activities organized in a shared workflow.",
    features: [
      "Shared information",
      "Workflow coordination",
      "Improved visibility",
    ],
  },
];

const workflow = [
  ["Lead received", "Capture customer information"],
  ["Follow-up", "Keep the next action organized"],
  ["Opportunity", "Track deal progress"],
  ["Review", "Understand business activity"],
];

export default function ServicesPage() {
  return (
    <main className="w-full overflow-x-clip bg-white text-slate-900">
      {/* Hero Section */}
      <section className="relative isolate overflow-hidden bg-slate-950 px-4 py-16 text-white min-[375px]:px-5 sm:px-8 sm:py-20 md:py-24 lg:px-10 lg:py-32">
        <div className="pointer-events-none absolute -right-20 -top-20 -z-10 h-64 w-64 rounded-full bg-blue-600/20 blur-3xl sm:h-80 sm:w-80" />

        <div className="mx-auto w-full max-w-7xl">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-400 sm:text-sm sm:tracking-[0.2em]">
            Our Services
          </p>

          <h1 className="mt-4 max-w-4xl text-3xl font-extrabold leading-[1.15] tracking-tight min-[375px]:text-4xl sm:mt-5 sm:text-5xl md:text-6xl lg:text-7xl">
            Tools to Simplify Your{" "}
            <span className="text-blue-400">Business Workflows.</span>
          </h1>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-300 sm:mt-7 sm:text-base sm:leading-8 md:text-lg">
            Explore solutions designed to help real estate teams organize
            leads, manage properties, coordinate follow-ups, and track sales
            activities more effectively.
          </p>

          <Link
            href="/contact"
            className="mt-7 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-500 min-[420px]:w-fit min-[420px]:px-6 sm:mt-9 sm:py-3.5"
          >
            Discuss Your Requirements <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>

      {/* Services Grid */}
      <section className="px-4 py-14 min-[375px]:px-5 sm:px-8 sm:py-20 md:py-24 lg:px-10 lg:py-28">
        <div className="mx-auto w-full max-w-7xl">
          <div className="mx-auto max-w-2xl text-left md:text-center">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600 sm:text-sm">
              What We Offer
            </p>

            <h2 className="mt-3 text-2xl font-bold leading-tight tracking-tight sm:mt-4 sm:text-3xl lg:text-4xl">
              Everything organized around your workflow.
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-600 sm:mt-5 sm:text-base">
              Explore the core capabilities that can support everyday real
              estate operations.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-4 min-[600px]:grid-cols-2 sm:mt-12 sm:gap-5 lg:grid-cols-3 lg:gap-6">
            {services.map((service) => (
              <article
                key={service.number}
                className="group min-w-0 rounded-2xl border border-slate-200 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-950/5 sm:p-7 lg:p-8"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-2xl text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white sm:h-14 sm:w-14 sm:rounded-2xl sm:text-3xl">
                    {service.icon}
                  </span>

                  <span className="text-xs font-bold text-slate-300 sm:text-sm">
                    {service.number}
                  </span>
                </div>

                <h2 className="mt-5 break-words text-lg font-bold leading-snug sm:mt-7 sm:text-xl">
                  {service.title}
                </h2>

                <p className="mt-3 break-words text-sm leading-7 text-slate-600 sm:mt-4">
                  {service.description}
                </p>

                <ul className="mt-5 space-y-3 sm:mt-6">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex min-w-0 items-start gap-2.5 text-sm leading-6 text-slate-600 sm:gap-3"
                    >
                      <span className="mt-0.5 shrink-0 font-bold text-blue-600">
                        ✓
                      </span>
                      <span className="min-w-0">{feature}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Connected Approach */}
      <section className="bg-slate-50 px-4 py-14 min-[375px]:px-5 sm:px-8 sm:py-20 md:py-24 lg:px-10 lg:py-24">
        <div className="mx-auto grid w-full max-w-7xl min-w-0 gap-8 md:grid-cols-2 md:items-center md:gap-10 lg:gap-16">
          <div className="min-w-0">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600 sm:text-sm">
              A Connected Approach
            </p>

            <h2 className="mt-3 text-2xl font-bold leading-tight tracking-tight sm:mt-4 sm:text-3xl lg:text-4xl">
              Less scattered information. More organized work.
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-600 sm:mt-5 sm:text-base sm:leading-8">
              A well-organized workflow helps teams access information,
              understand current priorities, and keep track of business
              activities without losing sight of important opportunities.
            </p>
          </div>

          <div className="min-w-0 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200 sm:rounded-3xl sm:p-7 lg:p-9">
            {workflow.map(([title, description], index) => (
              <div key={title} className="flex min-w-0 gap-3 sm:gap-4">
                <div className="flex shrink-0 flex-col items-center">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-blue-700 sm:h-10 sm:w-10">
                    {index + 1}
                  </span>

                  {index < workflow.length - 1 && (
                    <span className="my-1 h-7 w-px bg-blue-200 sm:h-8" />
                  )}
                </div>

                <div className="min-w-0 pb-4 sm:pb-5">
                  <h3 className="text-sm font-bold sm:text-base">
                    {title}
                  </h3>
                  <p className="mt-1 text-xs leading-6 text-slate-500 sm:text-sm">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="px-4 py-14 min-[375px]:px-5 sm:px-8 sm:py-20 lg:px-10">
        <div className="mx-auto w-full max-w-7xl rounded-2xl bg-blue-600 px-5 py-9 text-white min-[375px]:px-6 sm:rounded-3xl sm:px-10 sm:py-12 md:px-12 md:py-16">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center md:gap-8">
            <div className="min-w-0">
              <h2 className="text-2xl font-bold leading-tight tracking-tight sm:text-3xl lg:text-4xl">
                Looking for a better workflow?
              </h2>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-blue-100 sm:text-base">
                Tell us about your business requirements and explore the right
                approach for your team.
              </p>
            </div>

            <Link
              href="/contact"
              className="inline-flex min-h-12 w-full shrink-0 items-center justify-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-bold text-blue-700 transition hover:bg-blue-50 min-[420px]:w-fit sm:px-6 sm:py-3.5"
            >
              Contact Our Team <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

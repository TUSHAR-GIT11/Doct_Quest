
import Link from "next/link";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Our Approach", href: "/approach" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300">
      <div className="mx-auto grid w-full max-w-7xl gap-12 px-5 py-14 sm:px-8 md:grid-cols-2 lg:grid-cols-3 lg:px-10 lg:py-16">
        <div>
          <Link
            href="/"
            aria-label="DoctQuest home"
            className="inline-flex items-center gap-2.5 text-2xl font-extrabold tracking-tight text-white"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-xl text-white">
              D
            </span>
            <span>
              Doct<span className="text-blue-400">Quest</span>
            </span>
          </Link>

          <p className="mt-5 max-w-sm text-sm leading-7 text-slate-400">
            Smarter real estate operations through connected workflows,
            organized leads, and actionable insights.
          </p>
        </div>

        <div>
          <h2 className="mb-5 text-base font-bold text-white">Explore</h2>

          <nav aria-label="Footer navigation" className="flex flex-col gap-3">
            {footerLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="w-fit text-sm text-slate-400 transition-colors duration-200 hover:text-blue-400"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div>
          <h2 className="text-base font-bold text-white">Let&apos;s Connect</h2>

          <p className="mt-4 max-w-xs text-sm leading-7 text-slate-400">
            Have a question about our solutions? Get in touch with our team.
          </p>

          <Link
            href="/contact"
            className="mt-5 inline-flex items-center gap-2 rounded-lg border border-blue-400/30 bg-blue-500/10 px-4 py-3 text-sm font-semibold text-blue-300 transition-colors duration-200 hover:bg-blue-500/20 hover:text-white"
          >
            Talk to our team <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </div>

      <div className="border-t border-slate-800">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-3 px-5 py-5 text-xs text-slate-500 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-10">
          <p>© 2026 DoctQuest. All rights reserved.</p>
          <p>Built for smarter business operations.</p>
        </div>
      </div>
    </footer>
  );
}

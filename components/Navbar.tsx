
"use client";

import { useState } from "react";
import Link from "next/link";

const navigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Our Approach", href: "/approach" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-md">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-10 lg:py-4"
      >
        <Link
          href="/"
          aria-label="DoctQuest home"
          onClick={closeMenu}
          className="flex shrink-0 items-center gap-2 text-xl font-extrabold tracking-tight text-slate-900 sm:text-2xl"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-xl text-white">
            D
          </span>
          <span>
            Doct<span className="text-blue-600">Quest</span>
          </span>
        </Link>

        <div className="hidden items-center gap-5 lg:flex xl:gap-7">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="whitespace-nowrap text-sm font-semibold text-slate-600 transition-colors hover:text-blue-600"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <Link
          href="/contact"
          className="hidden shrink-0 items-center gap-2 rounded-lg bg-blue-600 px-4 py-3 text-sm font-bold text-white transition hover:bg-blue-700 xl:inline-flex"
        >
          Get in Touch <span aria-hidden="true">↗</span>
        </Link>

        <button
          type="button"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMenuOpen((open) => !open)}
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-slate-200 text-slate-700 transition hover:bg-slate-100 lg:hidden"
        >
          {isMenuOpen ? (
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-6 w-6"
              aria-hidden="true"
            >
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          ) : (
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-6 w-6"
              aria-hidden="true"
            >
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          )}
        </button>
      </nav>

      {isMenuOpen && (
        <div
          id="mobile-navigation"
          className="border-t border-slate-200 bg-white px-4 pb-5 pt-3 shadow-lg lg:hidden sm:px-6"
        >
          <div className="mx-auto flex max-w-7xl flex-col gap-1">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="rounded-lg px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-blue-50 hover:text-blue-600"
              >
                {item.label}
              </Link>
            ))}

            <Link
              href="/contact"
              onClick={closeMenu}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-3 font-bold text-white transition hover:bg-blue-700"
            >
              Get in Touch <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

 "use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Supplements", href: "/supplements" },
  { label: "Exercises", href: "/exercises" },
  { label: "Nutrition", href: "/nutrition" },
  { label: "Recovery", href: "/recovery" },
];

export function SiteHeader() {
  const [visible, setVisible] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const current = window.scrollY;
      if (current < 12) {
        setVisible(true);
      } else if (current < lastY.current - 4) {
        setVisible(true);
      } else if (current > lastY.current + 4) {
        setVisible(false);
      }
      lastY.current = current;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-30 border-b border-[var(--color-border)] bg-[color-mix(in_srgb,var(--color-surface)_95%,transparent)] backdrop-blur transition-transform duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--color-surface)] ring-1 ring-[var(--color-border)] shadow-sm">
            <span className="text-lg font-semibold text-[var(--color-primary)]">HH</span>
          </div>
          <div className="hidden flex-col sm:flex">
            <span className="text-sm font-semibold text-[var(--color-foreground)]">Health Hub</span>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium text-[var(--color-muted)] md:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="transition hover:text-[var(--color-foreground)]">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/#newsletter"
            className="hidden sm:inline-flex items-center justify-center rounded-full bg-[var(--color-primary)] px-4 py-2 text-sm font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:shadow-lg"
          >
            Subscribe
          </Link>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="inline-flex items-center justify-center rounded-lg p-2 text-[var(--color-foreground)] transition hover:bg-[var(--color-surface-alt)] md:hidden"
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="border-t border-[var(--color-border)] bg-[var(--color-surface)] md:hidden">
          <nav className="flex flex-col px-6 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="border-b border-[var(--color-border)]/50 py-3 text-sm font-medium text-[var(--color-foreground)] transition hover:text-[var(--color-primary)] last:border-b-0"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/#newsletter"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-4 inline-flex items-center justify-center rounded-full bg-[var(--color-primary)] px-4 py-2 text-sm font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              Subscribe
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

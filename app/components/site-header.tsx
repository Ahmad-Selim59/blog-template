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
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--color-surface)] ring-1 ring-[var(--color-border)] shadow-sm">
            <span className="text-lg font-semibold text-[var(--color-primary)]">HH</span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-[var(--color-foreground)]">Health Hub</span>
            <span className="text-xs text-[var(--color-muted)]">Reusable blog kit</span>
          </div>
        </div>

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
            className="inline-flex items-center justify-center rounded-full bg-[var(--color-primary)] px-4 py-2 text-sm font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:shadow-lg"
          >
            Subscribe
          </Link>
        </div>
      </div>
    </header>
  );
}

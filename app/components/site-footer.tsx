export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-surface)]">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-8 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--color-surface)] ring-1 ring-[var(--color-border)]">
            <span className="text-sm font-semibold text-[var(--color-primary)]">HH</span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-[var(--color-foreground)]">Health Hub Template</span>
            <span className="text-xs text-[var(--color-muted)]">Built with Next.js 16 + Tailwind CSS v4</span>
          </div>
        </div>
        <div className="flex flex-wrap gap-3 text-xs font-semibold text-[var(--color-muted)]">
          <span className="rounded-full bg-[var(--color-surface)] px-3 py-1 ring-1 ring-[var(--color-border)]">
            Duplicate sections
          </span>
        </div>
      </div>
    </footer>
  );
}

"use client";

type HeroButtonProps = {
  label: string;
  targetId: string;
  variant?: "light" | "dark";
};

export function HeroButton({ label, targetId, variant = "light" }: HeroButtonProps) {
  const handleClick = () => {
    const el = document.getElementById(targetId);
    if (el) {
      const headerOffset = 72;
      const rect = el.getBoundingClientRect();
      const scrollTop = window.pageYOffset + rect.top - headerOffset;
      window.scrollTo({ top: scrollTop, behavior: "smooth" });
    }
  };

  const base =
    "rounded-full px-6 py-2.5 text-sm font-semibold transition hover:-translate-y-0.5";
  const light =
    "bg-white text-slate-900 shadow-[0_16px_45px_rgba(0,0,0,0.35)] ring-1 ring-slate-200 hover:shadow-[0_20px_60px_rgba(0,0,0,0.45)]";
  const dark =
    "bg-slate-900 text-white shadow-[0_16px_45px_rgba(0,0,0,0.35)] ring-1 ring-white/30 hover:bg-black hover:shadow-[0_20px_60px_rgba(0,0,0,0.45)]";

  return (
    <button type="button" onClick={handleClick} className={`${base} ${variant === "light" ? light : dark}`}>
      {label}
    </button>
  );
}

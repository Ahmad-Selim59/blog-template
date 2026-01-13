import Link from "next/link";
import {
  featuredHomePosts,
  healthCategories,
  type HealthPost,
} from "./health-data";
import { HeroButton } from "./components/hero-button";

const heroImage =
  "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=1500&q=80";

const categoryImages: Record<string, string> = {
  Supplements:
    "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80",
  Exercises:
    "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80",
  Nutrition:
    "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
  Recovery:
    "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=800&q=80",
};

const SectionTitle = ({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
}) => (
  <div className="flex flex-col gap-2">
    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-muted)]">
      {eyebrow}
    </p>
    <h2 className="text-3xl font-semibold tracking-tight text-[var(--color-foreground)] md:text-4xl">
      {title}
    </h2>
    <p className="max-w-2xl text-[var(--color-muted)]">{subtitle}</p>
  </div>
);

const Card = ({ post }: { post: HealthPost }) => (
  <article className="flex h-full flex-col gap-3 rounded-[var(--radius)] border border-[var(--color-border)] bg-[var(--color-surface)] p-5 shadow-[0_10px_40px_rgba(0,0,0,0.04)] transition hover:-translate-y-1 hover:shadow-[0_16px_50px_rgba(0,0,0,0.08)]">
    <div className="flex items-center justify-between text-xs font-semibold text-[var(--color-muted)]">
      <span>{post.category}</span>
      <span>{post.readTime}</span>
    </div>
    <div className="space-y-2">
      <h3 className="text-xl font-semibold text-[var(--color-foreground)] transition hover:text-[var(--color-primary)]">
        {post.title}
      </h3>
      <p className="text-sm text-[var(--color-muted)]">{post.excerpt}</p>
    </div>
    <div className="mt-auto flex flex-wrap gap-2 text-xs font-semibold text-[var(--color-muted)]">
      {post.tags.map((tag) => (
        <span key={tag} className="rounded-full bg-[var(--color-surface-alt)] px-3 py-1">
          {tag}
        </span>
      ))}
    </div>
    <div className="pt-1 text-xs font-semibold text-[var(--color-muted)]">{post.date}</div>
  </article>
);

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-foreground)]">
      <main className="mx-auto flex max-w-6xl flex-col gap-16 px-6 pb-16 pt-10">
        <section className="overflow-hidden rounded-[var(--radius)] border border-[var(--color-border)] bg-[var(--color-surface)] shadow-[0_14px_60px_rgba(0,0,0,0.08)]">
          <div
            className="relative h-[55vh] min-h-[420px] w-full overflow-hidden"
            style={{ backgroundImage: `url(${heroImage})`, backgroundSize: "cover", backgroundPosition: "center" }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/25 to-black/45" />
            <div className="relative mx-auto flex h-full max-w-4xl flex-col items-center justify-center gap-3 px-6 text-center text-white">
              <p className="text-sm font-semibold uppercase tracking-[0.24em]">Health Blog</p>
              <h1 className="text-4xl font-semibold leading-tight md:text-5xl">Going Strong</h1>
              <p className="max-w-2xl text-base text-white/90 md:text-lg">
                Evidence-based guides on supplements, training, nutrition, and recovery — written to be skinned for any niche.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                <HeroButton label="Read latest" targetId="articles" variant="light" />
                <HeroButton label="Browse topics" targetId="sections" variant="dark" />
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-4xl text-center text-[var(--color-muted)]">
          <p>
            Welcome to your health hub. Swap colors, imagery, and logos per niche, then drop your own posts or imports.
            Each category page includes an intro paragraph and links to its latest articles so visitors can explore easily.
          </p>
        </section>

        <section id="sections" className="space-y-8">
          <SectionTitle
            eyebrow="Topics"
            title="Health categories"
            subtitle="Supplements, exercises, nutrition, and recovery — ready to duplicate for any niche."
          />
          <div className="grid gap-6 md:grid-cols-2">
            {healthCategories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/${cat.slug}`}
                className="group overflow-hidden rounded-[var(--radius)] border border-[var(--color-border)] bg-[var(--color-surface)] shadow-[0_12px_50px_rgba(0,0,0,0.06)] transition hover:-translate-y-1 hover:shadow-[0_16px_60px_rgba(0,0,0,0.08)]"
              >
                <div
                  className="h-40 w-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${categoryImages[cat.name]})` }}
                />
                <div className="flex items-center justify-between px-5 py-4">
                  <div className="space-y-1">
                    <h3 className="text-lg font-semibold text-[var(--color-foreground)]">{cat.name}</h3>
                    <p className="text-sm text-[var(--color-muted)] line-clamp-2">{cat.intro}</p>
                  </div>
                  <span className="text-sm font-semibold text-[var(--color-primary)] transition group-hover:translate-x-1">
                    View →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section id="articles" className="space-y-8">
          <SectionTitle
            eyebrow="Latest"
            title="Recent posts"
            subtitle="Fresh reads across supplements, training, nutrition, and recovery."
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {healthCategories
              .flatMap((c) => c.posts.map((p) => ({ ...p, category: c.name })))
              .slice(0, 6)
              .map((post) => (
                <Card key={post.title} post={post} />
              ))}
          </div>
        </section>

        <section id="featured" className="space-y-6">
          <SectionTitle
            eyebrow="Featured"
            title="Spotlight"
            subtitle="Highlighted reads to pin at the top of your homepage."
          />
          <div className="grid gap-6 md:grid-cols-2">
            {featuredHomePosts.map((post) => (
              <Card key={post.title} post={post} />
            ))}
        </div>
        </section>

        <section
          id="newsletter"
          className="overflow-hidden rounded-[var(--radius)] border border-[var(--color-border)] bg-[var(--color-surface)] p-8 shadow-[0_14px_60px_rgba(0,0,0,0.06)]"
        >
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-muted)]">
                Newsletter
              </p>
              <h3 className="text-3xl font-semibold text-[var(--color-foreground)]">
                Weekly health roundup
              </h3>
              <p className="max-w-xl text-[var(--color-muted)]">
                Get supplement guides, workout templates, and nutrition frameworks ready to rebrand for your niche.
              </p>
            </div>

            <form className="space-y-4">
              <label className="block text-sm font-semibold text-[var(--color-foreground)]">
                Join the list
              </label>
              <input
                type="email"
                placeholder="you@niche.com"
                className="w-full rounded-[12px] border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3 text-sm text-[var(--color-foreground)] ring-2 ring-transparent transition focus:border-[var(--color-primary)] focus:ring-[var(--color-ring)]"
              />
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center rounded-[12px] bg-[var(--color-primary)] px-4 py-3 text-sm font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:shadow-lg"
              >
                Subscribe now
              </button>
              <p className="text-xs text-[var(--color-muted)]">No spam. Unsubscribe anytime.</p>
            </form>
        </div>
        </section>
      </main>

    </div>
  );
}

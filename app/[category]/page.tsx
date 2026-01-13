import Link from "next/link";
import {
  categorySlugs,
  getCategoryBySlug,
  healthCategories,
  type HealthPost,
} from "../health-data";

export function generateStaticParams() {
  return categorySlugs.map((slug) => ({ category: slug }));
}

const heroImages: Record<string, string> = {
  supplements:
    "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1600&q=80",
  exercises:
    "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1600&q=80",
  nutrition:
    "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1600&q=80",
  recovery:
    "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1600&q=80",
};

const PostCard = ({ post }: { post: HealthPost }) => (
  <Link
    href={`/${post.category.toLowerCase()}/${post.slug}`}
    className="group block overflow-hidden rounded-[var(--radius)] border border-[var(--color-border)] bg-[var(--color-surface)] shadow-[0_12px_40px_rgba(0,0,0,0.1)] transition hover:-translate-y-1 hover:shadow-[0_16px_50px_rgba(0,0,0,0.14)]"
  >
    <div className="aspect-[16/9] w-full overflow-hidden bg-[var(--color-surface-alt)]">
      <img
        src={
          post.image ??
          "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=1600&q=80"
        }
        alt={post.title}
        className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.02]"
      />
    </div>
    <div className="flex flex-col gap-3 px-5 py-4">
      <div className="flex items-center justify-between text-xs font-semibold text-[var(--color-muted)]">
        <span className="rounded-full bg-[var(--color-surface-alt)] px-3 py-1 capitalize ring-1 ring-[var(--color-border)]/70">
          {post.category}
        </span>
        <span className="rounded-full bg-[var(--color-surface-alt)] px-3 py-1 ring-1 ring-[var(--color-border)]/70">
          {post.readTime}
        </span>
      </div>
      <div className="space-y-1">
        <h3 className="text-xl font-semibold text-[var(--color-foreground)]">{post.title}</h3>
        <p className="text-sm text-[var(--color-muted)]">{post.excerpt}</p>
      </div>
      <div className="flex flex-wrap gap-2 text-xs font-semibold text-[var(--color-muted)]">
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-[var(--color-surface-alt)] px-3 py-1 ring-1 ring-[var(--color-border)]/70"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="pt-1 text-xs font-semibold text-[var(--color-muted)]">{post.date}</div>
    </div>
  </Link>
);

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category: categorySlug } = await params;
  const category = getCategoryBySlug(categorySlug);

  if (!category) {
    return (
      <div className="mx-auto flex min-h-screen max-w-4xl flex-col items-center justify-center gap-4 px-6 text-center">
        <p className="text-sm font-semibold text-[var(--color-muted)]">Not found</p>
        <h1 className="text-3xl font-semibold text-[var(--color-foreground)]">
          Category does not exist
        </h1>
        <Link
          href="/"
          className="rounded-full bg-[var(--color-primary)] px-4 py-2 text-sm font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:shadow-lg"
        >
          Back to home
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[var(--color-background)]">
      <div className="overflow-hidden border-b border-[var(--color-border)]">
        <div
          className="relative h-[45vh] min-h-[320px] w-full bg-cover bg-center"
          style={{
            backgroundImage: `url(${
              heroImages[category.slug] ??
              "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=1600&q=80"
            })`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/25 to-black/45" />
          <div className="relative mx-auto flex h-full max-w-4xl flex-col items-center justify-center gap-2 px-6 text-center text-white">
            <p className="text-sm font-semibold uppercase tracking-[0.22em]">{category.name}</p>
            <h1 className="text-4xl font-semibold md:text-5xl">{category.name} Guides</h1>
            <p className="max-w-2xl text-white/90">{category.intro}</p>
          </div>
        </div>
      </div>

      <div className="mx-auto flex max-w-4xl flex-col gap-8 px-6 pb-16 pt-10">
        <div className="space-y-4 text-[var(--color-muted)]">
          <p>
            Below are the latest posts for {category.name.toLowerCase()}. Duplicate these cards, swap imagery, and add
            your links. Keep safety and sourcing notes where relevant.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg font-semibold text-[var(--color-foreground)]">
            Recent {category.name} blogs
          </h3>
          <div className="space-y-6">
            {category.posts.map((post) => (
              <PostCard key={post.slug} post={{ ...post, category: category.slug }} />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

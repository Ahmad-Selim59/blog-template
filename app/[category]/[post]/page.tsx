import Link from "next/link";
import {
  getCategoryBySlug,
  getPostBySlug,
  healthCategories,
} from "../../health-data";

export function generateStaticParams() {
  return healthCategories.flatMap((cat) =>
    cat.posts.map((post) => ({ category: cat.slug, post: post.slug })),
  );
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ category: string; post: string }>;
}) {
  const { category: categorySlug, post: postSlug } = await params;
  const category = getCategoryBySlug(categorySlug);
  const post = getPostBySlug(categorySlug, postSlug);

  if (!category || !post) {
    return (
      <div className="mx-auto flex min-h-screen max-w-4xl flex-col items-center justify-center gap-4 px-6 text-center">
        <p className="text-sm font-semibold text-[var(--color-muted)]">Not found</p>
        <h1 className="text-3xl font-semibold text-[var(--color-foreground)]">
          Post does not exist
        </h1>
        <Link
          href="/"
          className="rounded-full bg-[var(--color-primary)] px-4 py-2 text-sm font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:shadow-lg"
        >
          Back home
        </Link>
      </div>
    );
  }

  const heroImage =
    post.image ??
    "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=1600&q=80";

  const related = category.posts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-foreground)]">
      {/* Header Area */}
      <article className="mx-auto max-w-3xl px-6 pb-20 pt-12">
        <header className="mb-10 flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <Link
              href={`/${category.slug}`}
              className="rounded-full bg-[var(--color-surface-alt)] px-3 py-1 text-xs font-bold uppercase tracking-wider text-[var(--color-primary)] ring-1 ring-[var(--color-border)] transition hover:bg-[var(--color-primary)] hover:text-white"
            >
              {category.name}
            </Link>
            <span className="text-xs font-semibold text-[var(--color-muted)]">
              {post.readTime}
            </span>
          </div>

          <h1 className="text-4xl font-bold leading-tight tracking-tight text-[var(--color-foreground)] md:text-5xl lg:text-6xl">
            {post.title}
          </h1>

          <div className="flex items-center gap-4 border-y border-[var(--color-border)]/50 py-6">
            <div className="h-12 w-12 shrink-0 overflow-hidden rounded-full bg-[var(--color-surface-alt)] ring-1 ring-[var(--color-border)]">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&q=80"
                alt="Author"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <p className="text-sm font-bold">Health Hub Editorial</p>
              <p className="text-xs text-[var(--color-muted)]">
                Published on {post.date} • {post.readTime}
              </p>
            </div>
          </div>
        </header>

        {/* Feature Image */}
        <div className="mb-12 aspect-[16/9] w-full overflow-hidden rounded-2xl border border-[var(--color-border)] shadow-xl">
          <img src={heroImage} alt={post.title} className="h-full w-full object-cover" />
        </div>

        {/* Content Area */}
        <div className="max-w-none space-y-8 text-lg leading-relaxed text-[var(--color-muted)]">
          {post.content.map((block, idx) => {
            switch (block.type) {
              case "p":
                return <p key={idx}>{block.text}</p>;
              case "h2":
                return (
                  <h2 key={idx} className="text-3xl font-bold pt-4 text-[var(--color-foreground)]">
                    {block.text}
                  </h2>
                );
              case "h3":
                return (
                  <h3 key={idx} className="text-2xl font-bold pt-2 text-[var(--color-foreground)]">
                    {block.text}
                  </h3>
                );
              case "quote":
                return (
                  <p
                    key={idx}
                    className="text-xl font-medium italic text-[var(--color-foreground)] border-l-4 border-[var(--color-primary)] pl-6 py-2"
                  >
                    "{block.text}"
                  </p>
                );
              case "callout":
                return (
                  <div
                    key={idx}
                    className="mt-12 rounded-2xl bg-[var(--color-surface-alt)] p-8 ring-1 ring-[var(--color-border)]"
                  >
                    <h3 className="mb-4 text-xl font-bold text-[var(--color-primary)]">
                      Safety Disclaimer
                    </h3>
                    <p className="text-sm">{block.text}</p>
                  </div>
                );
              default:
                return null;
            }
          })}
        </div>

        {/* Footer Area */}
        <footer className="mt-16 border-t border-[var(--color-border)] pt-12">
          <div className="flex flex-wrap items-center gap-4">
            <span className="text-sm font-bold text-[var(--color-muted)]">Tags:</span>
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-[var(--color-surface-alt)] px-3 py-1 text-xs font-semibold ring-1 ring-[var(--color-border)]"
              >
                {tag}
              </span>
            ))}
          </div>
        </footer>
      </article>

      {/* Related Posts Section */}
      <section className="bg-[var(--color-surface-alt)]/30 border-t border-[var(--color-border)]">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <div className="mb-10 flex items-center justify-between">
            <h3 className="text-2xl font-bold text-[var(--color-foreground)]">
              More from {category.name}
            </h3>
            <Link
              href={`/${category.slug}`}
              className="text-sm font-bold text-[var(--color-primary)] transition hover:opacity-80"
            >
              View all category posts →
            </Link>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {related.map((item) => (
              <Link
                key={item.slug}
                href={`/${category.slug}/${item.slug}`}
                className="group flex flex-col gap-4 overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="aspect-[16/10] w-full overflow-hidden bg-[var(--color-surface-alt)]">
                  <img
                    src={
                      item.image ??
                      "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=1200&q=80"
                    }
                    alt={item.title}
                    className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-col gap-2 px-5 pb-6">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-primary)]">
                    {category.name}
                  </p>
                  <h4 className="text-lg font-bold leading-tight text-[var(--color-foreground)] line-clamp-2">
                    {item.title}
                  </h4>
                  <p className="text-sm text-[var(--color-muted)] line-clamp-2">
                    {item.excerpt}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

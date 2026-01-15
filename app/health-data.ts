import supplementsData from "../data/supplements.json";
import exercisesData from "../data/exercises.json";
import nutritionData from "../data/nutrition.json";
import recoveryData from "../data/recovery.json";
import featuredData from "../data/featured.json";

export type ContentBlock = {
  type: "p" | "h2" | "h3" | "callout" | "quote";
  text: string;
};

export type HealthPost = {
  title: string;
  slug: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  category: string;
  image?: string;
  content: ContentBlock[];
};

export type HealthCategory = {
  slug: string;
  name: string;
  intro: string;
  heroNote?: string;
  posts: HealthPost[];
};

// Load data from JSON files
export const healthCategories: HealthCategory[] = [
  supplementsData,
  exercisesData,
  nutritionData,
  recoveryData,
] as HealthCategory[];

export const featuredHomePosts: HealthPost[] = featuredData as HealthPost[];

export const getCategoryBySlug = (slug: string) =>
  healthCategories.find((cat) => cat.slug === slug);

export const categorySlugs = healthCategories.map((c) => c.slug);

export const getPostBySlug = (categorySlug: string, postSlug: string) => {
  const category = getCategoryBySlug(categorySlug);
  if (!category) return undefined;
  return category.posts.find((p) => p.slug === postSlug);
};

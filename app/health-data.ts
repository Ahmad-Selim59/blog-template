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

export const healthCategories: HealthCategory[] = [
  {
    slug: "supplements",
    name: "Supplements",
    intro:
      "Evidence-informed stacks, dosing, and safety notes you can copy-paste into any niche site. Always cross-check with a medical professional.",
    heroNote: "Builder-friendly: swap brand names and CTAs per niche.",
    posts: [
      {
        title: "Foundational stack that works for most people",
        slug: "foundational-stack",
        excerpt:
          "Multivitamin, omega-3, magnesium, and vitamin D — how to position them responsibly.",
        date: "Jan 2025",
        readTime: "5 min read",
        tags: ["Basics", "Safety"],
        category: "Supplements",
        image:
          "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1600&q=80",
        content: [
          {
            type: "quote",
            text: "A foundational supplement stack isn't meant to replace a good diet, but to fill the gaps created by soil depletion, stress, and lifestyle factors.",
          },
          {
            type: "p",
            text: "In the modern world, getting every nutrient from whole foods alone can be a challenge. A foundational supplement stack isn't meant to replace a good diet, but to fill the gaps created by soil depletion, stress, and lifestyle factors.",
          },
          { type: "h2", text: "1. The High-Quality Multivitamin" },
          {
            type: "p",
            text: "Think of this as your nutritional insurance policy. A good multi provides a broad spectrum of vitamins and minerals in their most bioavailable forms. Look for brands that use methyl-folate instead of folic acid and avoid synthetic fillers.",
          },
          { type: "h2", text: "2. Omega-3 Fatty Acids (Fish Oil)" },
          {
            type: "p",
            text: "Essential for brain health, heart function, and reducing systemic inflammation. Most people have a high ratio of Omega-6 to Omega-3; supplementing with a clean, third-party tested fish oil can help restore this balance.",
          },
          { type: "h2", text: "3. Vitamin D3 + K2" },
          {
            type: "p",
            text: "Often called the 'sunshine vitamin,' D3 is crucial for immune function and bone density. Pairing it with K2 ensures that calcium is directed to your bones rather than accumulating in your arteries.",
          },
          {
            type: "callout",
            text: "Always consult with a healthcare professional before starting a new supplement regimen. Individual needs vary based on age, health status, and existing medications.",
          },
        ],
      },
      {
        title: "Creatine: benefits, dosing, and hydration callouts",
        slug: "creatine-benefits-dosing",
        excerpt: "Template section for strength, cognition, and cycling guidance.",
        date: "Dec 2024",
        readTime: "4 min read",
        tags: ["Performance", "Energy"],
        category: "Supplements",
        image:
          "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=1600&q=80",
        content: [
          {
            type: "p",
            text: "Creatine monohydrate is one of the most well-researched supplements in existence. While primarily known for its role in strength and power output, its benefits extend far into cognitive health and cellular energy management.",
          },
          { type: "h2", text: "Why Creatine Matters" },
          {
            type: "p",
            text: "It helps regenerate ATP, the primary energy currency of your cells. This allows for higher intensity during workouts and faster recovery between sets. Beyond the gym, research shows creatine may support memory and focus in sleep-deprived individuals.",
          },
        ],
      },
      {
        title: "Adaptogens you can theme per audience",
        slug: "adaptogens-for-audiences",
        excerpt: "Ashwagandha, rhodiola, and L-theanine — angles for stress, focus, and sleep.",
        date: "Dec 2024",
        readTime: "6 min read",
        tags: ["Stress", "Sleep"],
        category: "Supplements",
        image:
          "https://images.unsplash.com/photo-1470173274384-c4e8e2f9e8c1?auto=format&fit=crop&w=1600&q=80",
        content: [
          {
            type: "p",
            text: "Adaptogens are a unique class of herbs that help the body manage stress by modulating the HPA axis. Depending on your niche (busy executives, parents, or athletes), you can frame these herbs differently.",
          },
          { type: "h2", text: "Ashwagandha for Cortisol Control" },
          {
            type: "p",
            text: "Renowned for its ability to lower serum cortisol levels, Ashwagandha is the 'heavy hitter' for stress-prone populations. It's best taken in the evening to support restful sleep.",
          },
        ],
      },
    ],
  },
  {
    slug: "exercises",
    name: "Exercises",
    intro:
      "Modular workouts with warmups, main sets, and regressions. Swap imagery and rep ranges per demographic.",
    heroNote: "Design tokens keep buttons and CTAs on-brand for any gym niche.",
    posts: [
      {
        title: "Beginner full-body routine with progressions",
        slug: "beginner-full-body",
        excerpt: "3-day template with push/pull/legs, RPE guidance, and rest timers.",
        date: "Jan 2025",
        readTime: "7 min read",
        tags: ["Strength", "Beginner"],
        category: "Exercises",
        image:
          "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1600&q=80",
        content: [
          {
            type: "p",
            text: "Starting a fitness journey can be overwhelming. This 3-day full-body routine is designed to build a strong foundation of movements while allowing for maximum recovery.",
          },
          { type: "h2", text: "The Routine" },
          {
            type: "p",
            text: "Focus on compound movements like squats, presses, and rows. Perform 3 sets of 8-12 repetitions for each exercise, keeping an 'effort' level of 7 out of 10.",
          },
        ],
      },
      {
        title: "Mobility primer for desk workers",
        slug: "mobility-primer-desk",
        excerpt: "10-minute flows for hips, T-spine, and wrists you can embed in any article.",
        date: "Dec 2024",
        readTime: "4 min read",
        tags: ["Mobility", "Recovery"],
        category: "Exercises",
        image:
          "https://images.unsplash.com/photo-1554344058-8d1d1bc9c837?auto=format&fit=crop&w=1600&q=80",
        content: [
          {
            type: "p",
            text: "Prolonged sitting can lead to tight hip flexors and a rounded upper back. These three simple flows can be done in your office chair or standing up to reset your posture.",
          },
        ],
      },
      {
        title: "Interval templates for fat loss or conditioning",
        slug: "interval-templates",
        excerpt: "Zone 2, 30/30s, and hill sprints with clear safety constraints.",
        date: "Nov 2024",
        readTime: "5 min read",
        tags: ["Cardio", "Conditioning"],
        category: "Exercises",
        image:
          "https://images.unsplash.com/photo-1506224774225-0f946d17d66f?auto=format&fit=crop&w=1600&q=80",
        content: [
          {
            type: "p",
            text: "Interval training is a powerful tool for improving cardiovascular health and metabolic flexibility. Here's how to structure your sessions for maximum effectiveness.",
          },
        ],
      },
    ],
  },
  {
    slug: "nutrition",
    name: "Nutrition",
    intro:
      "Meal frameworks, grocery lists, and macro targets that travel well between niches and geos.",
    heroNote: "Use the tokens to theme recipe cards, buttons, and labels.",
    posts: [
      {
        title: "High-protein plate method anyone can follow",
        slug: "high-protein-plate",
        excerpt: "Quartered plate visual + protein swaps for vegetarian, vegan, and budget.",
        date: "Jan 2025",
        readTime: "5 min read",
        tags: ["Macros", "Protein"],
        category: "Nutrition",
        image:
          "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1600&q=80",
        content: [
          {
            type: "p",
            text: "Visualizing your nutrition is often more effective than counting every gram. The plate method ensures you're getting adequate protein and fiber without the stress of tracking apps.",
          },
        ],
      },
      {
        title: "Meal prep kits for busy people",
        slug: "meal-prep-kits",
        excerpt: "Batch-cook template with storage times, reheating, and portion cues.",
        date: "Dec 2024",
        readTime: "4 min read",
        tags: ["Prep", "Time-saving"],
        category: "Nutrition",
        image:
          "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1600&q=80&sat=-25",
        content: [
          {
            type: "p",
            text: "The key to consistency is preparation. Spend two hours on Sunday setting yourself up for success during the work week.",
          },
        ],
      },
      {
        title: "Electrolytes and hydration made simple",
        slug: "electrolytes-made-simple",
        excerpt: "Ratios, timing, and when to add carbs for long sessions.",
        date: "Nov 2024",
        readTime: "3 min read",
        tags: ["Hydration", "Performance"],
        category: "Nutrition",
        image:
          "https://images.unsplash.com/photo-1510626176961-4b37d0b4e904?auto=format&fit=crop&w=1600&q=80",
        content: [
          {
            type: "p",
            text: "Hydration isn't just about water. Electrolytes like sodium, potassium, and magnesium are critical for maintaining fluid balance and nerve transmission.",
          },
        ],
      },
    ],
  },
  {
    slug: "recovery",
    name: "Recovery",
    intro:
      "Sleep, deloads, and stress reduction protocols packaged as reusable blocks with caution notes.",
    posts: [
      {
        title: "Sleep stack + hygiene checklist",
        slug: "sleep-stack-checklist",
        excerpt: "Wind-down sequence, light rules, and supplement caveats per audience.",
        date: "Jan 2025",
        readTime: "6 min read",
        tags: ["Sleep", "Routine"],
        category: "Recovery",
        image:
          "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1600&q=80",
        content: [
          {
            type: "p",
            text: "Quality sleep is the bedrock of recovery. This checklist covers the physical, environment, and biological components of a perfect night's rest.",
          },
        ],
      },
      {
        title: "Deload weeks and RPE adjustments",
        slug: "deload-weeks-rpe",
        excerpt: "How to communicate intensity drops without hurting motivation.",
        date: "Dec 2024",
        readTime: "4 min read",
        tags: ["Programming", "Fatigue"],
        category: "Recovery",
        image:
          "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1600&q=80",
        content: [
          {
            type: "p",
            text: "Recovery isn't just about what happens after a workout—it's about how you manage your training intensity over time.",
          },
        ],
      },
      {
        title: "Breathwork for stress and HRV",
        slug: "breathwork-stress-hrv",
        excerpt: "Box breathing, 4-7-8, and nasal-only training snippets.",
        date: "Nov 2024",
        readTime: "5 min read",
        tags: ["Stress", "Breathwork"],
        category: "Recovery",
        image:
          "https://images.unsplash.com/photo-1523419400524-f60a6f365fbe?auto=format&fit=crop&w=1600&q=80",
        content: [
          {
            type: "p",
            text: "Your breath is the only part of your autonomic nervous system you can consciously control. These techniques allow you to flip the switch from 'fight or flight' to 'rest and digest' in minutes.",
          },
        ],
      },
    ],
  },
];

export const featuredHomePosts: HealthPost[] = [
  {
    title: "Health sites you can skin per niche in minutes",
    slug: "health-sites-you-can-skin",
    excerpt:
      "Swap colors, logos, and imagery via CSS variables. Duplicate sections, update tokens, and publish fast.",
    date: "Updated today",
    readTime: "5 min read",
    tags: ["Template", "Tokens"],
    category: "System",
    content: [
      {
        type: "p",
        text: "This template was built for speed and niche flexibility. By using CSS variables for colors, borders, and spacing, you can reskin the entire site without touching a single React component.",
      },
    ],
  },
  {
    title: "Safety-forward content blocks",
    slug: "safety-forward-content-blocks",
    excerpt:
      "Reusable disclaimers, consult-your-doctor callouts, and sourcing notes you can toggle on or off.",
    date: "Jan 2025",
    readTime: "4 min read",
    tags: ["Compliance", "Trust"],
    category: "Framework",
    content: [
      {
        type: "p",
        text: "In the health niche, trust is everything. This system includes pre-styled callout blocks for safety notes, medical disclaimers, and sourcing citations to ensure your content is both helpful and compliant.",
      },
    ],
  },
];

export const getCategoryBySlug = (slug: string) =>
  healthCategories.find((cat) => cat.slug === slug);

export const categorySlugs = healthCategories.map((c) => c.slug);

export const getPostBySlug = (categorySlug: string, postSlug: string) => {
  const category = getCategoryBySlug(categorySlug);
  if (!category) return undefined;
  return category.posts.find((p) => p.slug === postSlug);
};

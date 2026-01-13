import CategoryPage from "../[category]/page";

export default async function NutritionPage() {
  return <CategoryPage params={Promise.resolve({ category: "nutrition" })} />;
}

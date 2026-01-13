import CategoryPage from "../[category]/page";

export default async function ExercisesPage() {
  return <CategoryPage params={Promise.resolve({ category: "exercises" })} />;
}

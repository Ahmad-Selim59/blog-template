import CategoryPage from "../[category]/page";

export default async function SupplementsPage() {
  return <CategoryPage params={Promise.resolve({ category: "supplements" })} />;
}

import CategoryPage from "../[category]/page";

export default async function RecoveryPage() {
  return <CategoryPage params={Promise.resolve({ category: "recovery" })} />;
}

import RecipeCard from "./components/RecipeCard";
import { recipes } from "./data/recipes";

export default function Home() {
  return (
    <main className="max-w-6xl w-full mx-auto px-8 py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Find your next bite.</h1>
        <p className="text-gray-600 mt-1">
          Explore quick, delicious recipes curated for every craving.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </main>
  );
}
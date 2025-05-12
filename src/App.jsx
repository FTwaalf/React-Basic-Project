import { useState } from "react";
import { RecipeListPage } from "./pages/RecipeListPage";
import { RecipePage } from "./pages/RecipePage"; // Create or use a placeholder

export const App = () => {
  // Add state to track selected recipe
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  // Function to update state when a recipe is clicked
  const handleRecipeSelect = (recipe) => {
    setSelectedRecipe(recipe);
  };

  return (
    <>
      {selectedRecipe ? (
        // Show RecipePage when a recipe is selected
        <RecipePage recipe={selectedRecipe} onBack={() => setSelectedRecipe(null)} />
      ) : (
        //  Show RecipeListPage when no recipe is selected
        <RecipeListPage onRecipeSelect={handleRecipeSelect} />
      )}
    </>
  );
};
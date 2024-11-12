import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../context/GlobalState";

function Recipe() {
  const { id } = useParams();
  const { recipeData, setRecipeData, favoriteList, addToFavorite } =
    useContext(GlobalContext);

  useEffect(() => {
    const getRecipeData = async () => {
      const response = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
      );
      const data = await response.json();
      console.log(data);
      if (data?.data) {
        setRecipeData(data?.data);
      }
    };

    getRecipeData();
  }, []);
  return (
    <div className="container mx-auto py-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
      <div className="row-start-1 lg:row-start-auto">
        <div className="h-96 overflow-hidden rounded-xl group">
          <img
            src={recipeData?.recipe?.image_url}
            alt={recipeData?.title}
            className="w-full h-full object-cover block group-hover:scale-105 duration-300"
          />
        </div>
      </div>
      <div className="flex flex-col gap-3 mx-8 my-2">
        <span className="text-sm text-cyan-700 font-medium">
          {recipeData?.recipe?.publisher}
        </span>
        <p className="font-bold text-2xl truncate text-black">
          {recipeData?.recipe?.title}
        </p>
        <div>
          <span className="text-2xl font-semibold text-black">Ingredients</span>
          <ul className="flex flex-col gap-3 list-disc">
            {recipeData?.recipe?.ingredients.map((ingredient) => {
              return (
                <li
                  key={`${ingredient.quantity} ${ingredient.unit} ${ingredient.description}`}
                >
                  <span className="text-xl text-black">
                    {ingredient.quantity} {ingredient.unit}
                  </span>
                  <span className="text-xl text-black">
                    {ingredient.description}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
        <div>
          <button
            onClick={() => addToFavorite(recipeData?.recipe)}
            className="py-3 px-8 rounded-lg text-sm uppercase font-medium tracking-wider mt-3 incline-block shadow-md bg-black text-white"
          >
            {favoriteList && favoriteList.length && favoriteList.findIndex(
              (item) => item.id === recipeData?.recipe?.id
            ) !== -1
              ? "Remove from favorites"
              : "Add to favorites"}
          </button>
        </div>
      </div>
    </div>
  );
}
export default Recipe;

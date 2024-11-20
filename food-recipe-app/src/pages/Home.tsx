import { useContext, useMemo } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Link } from "react-router-dom";

function Home() {
  const { recipeList, loading } = useContext(GlobalContext);

  const renderedRecipes = useMemo(()=>{
    const recipes = recipeList.map((recipe : object)=>{
        return(
            <div key={recipe.id} className="flex flex-col w-80 overflow-hidden p-5 bg-white/75 shadow-xl gap-5 border-2 rounded-2xl border-white">
                <div className="h-40 flex justify-center overflow-hidden items-center rounded-xl">
                    <img src={recipe?.image_url} alt="recipe item" className="block w-full"/>
                </div>
                <div>
                    <span className="text-sm text-cyan-700 font-medium">{recipe?.publisher}</span>
                    <p className="font-bold text-2xl truncate text-black">{recipe?.title}</p>
                    <Link to={`/recipe/${recipe?.id}`} className="text-sm mt-2 py-3 px-8 rounded-lg uppercase font-medium tracking-wider inline-block shadow-md bg-black text-white">
                        Recipe Details
                    </Link>
                </div>
            </div>
        )
    });

    return recipes;
  },[recipeList]);

  return (
    <>
      {loading ? (
        <div className="m-8 flex justify-center items-center">
          <p className="text-3xl font-bold">Loading recipes, please wait...</p>
        </div>
      ) : recipeList.length ? (
        <div className="m-4 flex flex-wrap justify-evenly items-start gap-10">
            {renderedRecipes}
        </div>
      ) : (
        <div className="m-8 flex justify-center items-center">
          <p className="text-3xl font-extrabold">Nothing to show. Please search something...</p>
        </div>
      )}
    </>
  );
}
export default Home;

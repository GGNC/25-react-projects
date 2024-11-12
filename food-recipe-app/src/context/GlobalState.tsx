import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const GlobalContext = createContext(null);

type GlobalStateProps = {
  children: React.ReactNode;
};

function GlobalState({ children }: GlobalStateProps) {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [recipeList, setRecipeList] = useState<object>([]);
  const [recipeData, setRecipeData] = useState<object>([]);
  const [favoriteList, setFavoriteList] = useState<object[]>([]);

  const navigate = useNavigate();

  const handleSearch = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchTerm}`
      );
      const data = await response.json();
      if (data?.data?.recipes) {
        setRecipeList(data?.data?.recipes);
        setLoading(false);
        setSearchTerm("");
        navigate("/");
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
      setSearchTerm("");
    }
  };

  const addToFavorite = (currentItem : object)=>{
    const tempFavoriteList = [...favoriteList];
    const index = tempFavoriteList.findIndex(item => item.id === currentItem.id)
    if(index === -1){
        tempFavoriteList.push(currentItem)
    }else{
        tempFavoriteList.splice(index);
    }

    setFavoriteList(tempFavoriteList);
  }

  console.log(favoriteList);
  return (
    <GlobalContext.Provider
      value={{
        favoriteList,
        setFavoriteList,
        searchTerm,
        setSearchTerm,
        loading,
        recipeList,
        handleSearch,
        recipeData,
        setRecipeData,
        addToFavorite
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
export default GlobalState;

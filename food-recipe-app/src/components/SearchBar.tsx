import { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalState";

function SearchBar() {
  const {searchTerm, setSearchTerm, handleSearch } = useContext(GlobalContext);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    handleSearch();
  };
  return (
    <form
      className="min-w-96 w-1/2 flex flex-row justify-center"
      onSubmit={(event) => handleSubmit(event)}
    >
      <input
        value={searchTerm}
        placeholder="Enter items..."
        onChange={(event) => setSearchTerm(event.target.value)}
        className="w-full bg-white/75 py-3 px-8 rounded-full outline-none shadow-lg shadow-red-100 focus:shadow-red-200"
      />
    </form>
  );
}

export default SearchBar;

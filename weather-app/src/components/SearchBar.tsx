import { useState } from "react";
import { FaSearchLocation } from "react-icons/fa";

type SearchBarProps = {
  onSearch: (searchParameter: string) => void;
};
function SearchBar({ onSearch }: SearchBarProps) {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSearchTerm("");
    onSearch(searchTerm);
  };
  return (
    <form
      onSubmit={(event) => handleSubmit(event)}
      className="w-full m-2 flex flex-nowrap items-center justify-center gap-4"
    >
      <input
        type="text"
        maxLength={20}
        value={searchTerm}
        placeholder="Enter a city name"
        onChange={(event) => setSearchTerm(event.target.value)}
        className="py-2 px-6 w-1/2 min-w-96 border rounded-xl text-2xl font-medium"
      />
      <button type="submit">
        <FaSearchLocation size={35} />
      </button>
    </form>
  );
}

export default SearchBar;

import { useEffect, useMemo, useState } from "react";
import productData from "../data";

function SearchBar({ onChoose }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearchTerm, setDebouncedearchTerm] = useState(searchTerm);
  const [showDropdown, setShowDropdown] = useState(false);
  const [dropdownData, setDropDownData] = useState([]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedearchTerm(searchTerm);
    }, 350);

    return () => {
      clearTimeout(timeout);
    };
  }, [searchTerm]);

  useEffect(() => {
    if (debouncedSearchTerm.trim()) {
      setShowDropdown(true);
    } else {
      setShowDropdown(false);
    }
    const data = productData.filter(
      (product) => product.title.toLowerCase().indexOf(debouncedSearchTerm.toLowerCase()) >-1
    );
    setDropDownData(data);
  }, [debouncedSearchTerm]);

  const dropdown = useMemo(() => {
    if (!dropdownData.length) return null;
    const handleProductClick = (product) => {
      setDropDownData([]);
      setSearchTerm("");
      onChoose(product);
    };
    const data = dropdownData.map((data) => {
      return (
        <li
          key={data.id}
          className="m-1 px-4 cursor-pointer"
          onClick={() => handleProductClick(data)}
        >
          {data.title}
        </li>
      );
    });
    return (
      <ul
        className="absolute w-full min-w-96 mt-2 border shadow-lg rounded-3xl z-10 bg-white items-center"
        style={{ top: "80%", left: 0 }}
      >
        {data}
      </ul>
    );
  }, [dropdownData]);

  return (
    <div className="relative w-2/5 m-3 flex flex-col flex-nowrap justify-center items-center">
      <input
        className="w-full border rounded-3xl py-2 px-4 z-20 font-medium"
        type="text"
        placeholder="search"
        value={searchTerm || ""}
        onChange={(event) => setSearchTerm(event.target.value)}
      />
      {showDropdown ? dropdown : null}
    </div>
  );
}

export default SearchBar;

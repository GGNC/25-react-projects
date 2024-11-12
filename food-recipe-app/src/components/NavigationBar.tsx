import { NavLink } from "react-router-dom";
import SearchBar from "./SearchBar";

function NavigationBar() {
  return (
    <nav className="mx-auto py-2 flex flex-col lg:flex-row justify-between items-center gap-5 lg:gap-0 container ">
      <p className="text-2xl font-semibold">
        <NavLink
          to={"/"}
          className="text-black hover:text-gray-700 duration-300"
        >
          Food Recipe
        </NavLink>
      </p>
      <SearchBar />
      <ul className="flex gap-5">
        <li>
          <NavLink
            to={"/"}
            className="text-black hover:text-gray-700 duration-300"
          >
            Home
          </NavLink>
        </li>
        <li>
        <NavLink
            to={"/favorites"}
            className="text-black hover:text-gray-700 duration-300"
          >
            Favorites
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
export default NavigationBar;

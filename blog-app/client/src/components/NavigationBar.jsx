import { Link } from "react-router-dom";

function NavigationBar() {
  return (
    <div className="flex p-7 justify-center items-center">
      <h1 className="m-0 flex-1 inline-block font-extrabold text-4xl text-transparent bg-gradient-to-r from-blue-500 via-green-500 to-yellow-500 bg-clip-text">
        My Awsome Blog
      </h1>
      <ul className="flex list-none gap-5">
        <Link to={"/"}>
          <li className="text-xl font-bold cursor-pointer">Home</li>
        </Link>
        <Link to={"/blog"}>
          <li className="text-xl font-bold cursor-pointer">Add Blog</li>
        </Link>
      </ul>
    </div>
  );
}

export default NavigationBar;

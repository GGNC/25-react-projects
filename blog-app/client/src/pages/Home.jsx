import { useContext, useEffect, useMemo } from "react";
import { GlobalContext } from "../context";
import axios from "axios";
import BlogTile from "../components/BlogTile";

function Home() {
  const { blogList, setBlogList, pending, setPending } =
    useContext(GlobalContext);
  const fetchBlogs = async () => {
    setPending(true);
    const response = await axios.get("http://localhost:5000/api/blogs");
    const data = await response.data;

    if (data) {
      setBlogList(data);
    }
    setPending(false);
  };
  useEffect(() => {
    fetchBlogs();
  }, []);
  const renderedBlogs = useMemo(() => {
    if (blogList.length === 0) return null;
    const blogs = blogList.map((blog) => {
      return <BlogTile key={blog._id} blog={blog} />;
    });
    return blogs;
  }, [blogList]);
  return (
    <div>
      {pending ? (
        <div className="flex justify-center items-center">
          <p className="m-8 font-extrabold text-4xl">
            Loading blogs, please wait...
          </p>
        </div>
      ) : blogList.length === 0 ? (
        <div className="flex justify-center items-center">
          <p className="m-8 font-extrabold text-4xl">
            There is no blog to show.
          </p>
        </div>
      ) : (
        <div className="m-4">
          <h1 className="m-4 font-bold text-4xl">Blog List</h1>
          <div className="m-4 flex flex-wrap justify-start gap-4">
            {renderedBlogs}
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;

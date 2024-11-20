const express = require("express");
const blogRouter = express.Router();
const {
  fetchAllBlogs,
  addBlog,
  deleteBlog,
  updateBlog,
} = require("../controller/blog-controller");

blogRouter.get("/", fetchAllBlogs);
blogRouter.post("/add", addBlog);
blogRouter.delete("/delete/:id", deleteBlog);
blogRouter.put("/update/:id", updateBlog);

module.exports = blogRouter;

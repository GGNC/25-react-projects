const mongoose = require("mongoose");
const Blog = require("../model/Blog");

const fetchAllBlogs = async (req, res) => {
  let blogList;
  try {
    blogList = await Blog.find();
  } catch (e) {
    console.log(e);
  }

  if (!blogList) return res.status(404).json({ message: "No blog found" });

  return res.status(200).json(blogList);
};

const addBlog = async (req, res) => {
  const { title, description } = req.body;
  const currentDate = new Date();

  const newBlog = new Blog({
    title,
    description,
    date: currentDate,
  });

  try {
    await newBlog.save();
  } catch (e) {
    console.log(e);
  }

  try {
    const session = await mongoose.startSession();
    session.startTransaction();
    await newBlog.save(session);
    session.commitTransaction();
  } catch (e) {
    return res.send(500).json({ message: e });
  }

  return res.status(200).json(newBlog);
};

const deleteBlog = async (req, res) => {
  const id = req.params.id;

  try {
    const findCurrentId = await Blog.findByIdAndDelete(id);
    if (!findCurrentId)
      return res.status(404).json({ message: "Blog not found." });

    return res.status(200).json({ message: "Blog successfully deleted!" });
  } catch (e) {
    console.log(e);
    return res
      .status(500)
      .json({ message: "Unable to delete! Please try again..." });
  }
};

const updateBlog = async (req, res) => {
  const id = req.params.id;
  const { title, description } = req.body;
  let currentBlogForUpdate;

  try {
    currentBlogForUpdate = await Blog.findByIdAndUpdate(id, {
      title,
      description,
    });
  } catch (e) {
    console.log(e);
    return res.status(500).json({
      message: "Something went wrong while updating. Please try again.",
    });
  }

  if (!currentBlogForUpdate)
    return res.status(500).json({ message: "Unable to update." });

  return res.status(200).json(currentBlogForUpdate);
};

module.exports = { fetchAllBlogs, addBlog, deleteBlog, updateBlog };

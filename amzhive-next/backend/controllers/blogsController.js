import Blog from "../models/blogModel.js";

const getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find({}).sort({ createdAt: -1 });
    res.json({ status: "success", message: "Blogs retrieved!", data: blogs });
  } catch (error) {
    res.status(500).json({ status: "fail", message: "Failed to retrieve blogs", error });
  }
};

const getBlogBySlug = async (req, res) => {
  try {
    const blog = await Blog.findOne({ slug_url: req.params.slug });
    if (!blog) return res.status(404).json({ status: "fail", message: "Blog not found" });
    res.json({ status: "success", data: blog });
  } catch (error) {
    res.status(500).json({ status: "fail", message: "Failed to get blog", error });
  }
};

const getBlogById = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).json({ status: "fail", message: "Blog not found" });
    res.json({ status: "success", data: blog });
  } catch (error) {
    res.status(500).json({ status: "fail", message: "Failed to get blog", error });
  }
};

const createBlog = async (req, res) => {
  try {
    const blog_object = req.body;
    if (!blog_object || Object.keys(blog_object).length === 0)
      return res.status(400).json({ status: "fail", message: "Required fields missing" });

    const lastBlog = await Blog.findOne().sort({ blog_id: -1 });
    const nextId = lastBlog ? lastBlog.blog_id + 1 : 1;

    const newBlog = new Blog({ blog_id: nextId, ...blog_object });
    await newBlog.save();

    res.status(201).json({ status: "success", message: "Blog created!", data: newBlog });
  } catch (error) {
    res.status(500).json({ status: "fail", message: "Failed to create blog", error });
  }
};

const updateBlog = async (req, res) => {
  try {
    const updated = await Blog.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ status: "fail", message: "Blog not found" });
    res.json({ status: "success", message: "Blog updated!", data: updated });
  } catch (error) {
    res.status(500).json({ status: "fail", message: "Failed to update blog", error });
  }
};

const deleteBlog = async (req, res) => {
  try {
    const deleted = await Blog.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ status: "fail", message: "Blog not found" });
    res.json({ status: "success", message: "Blog deleted!" });
  } catch (error) {
    res.status(500).json({ status: "fail", message: "Failed to delete blog", error });
  }
};

export { getBlogs, getBlogBySlug, getBlogById, createBlog, updateBlog, deleteBlog };

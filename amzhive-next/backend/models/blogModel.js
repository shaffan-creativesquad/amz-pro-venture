import mongoose from "mongoose";

const blogSchema = mongoose.Schema(
  {
    blog_id: { type: Number },
    title: { type: String, required: true },
    slug_url: { type: String, required: true, unique: true },
    metaTitle: { type: String },
    metaDescription: { type: String },
    brief_paragraph: { type: String, required: true },
    blog_image: { type: String, required: true },
    published_date: { type: String, required: true },
    category: { type: String, default: "General" },
    tags: [{ type: String }],
    author: { type: String, default: "AMZ Pro Venture Team" },
    featured: { type: Boolean, default: false },
    blogs_content: [
      {
        heading: { type: String, required: true },
        paragraph: { type: String, required: true },
      },
    ],
  },
  { timestamps: true }
);

const Blog = mongoose.model("Blog", blogSchema);
export default Blog;

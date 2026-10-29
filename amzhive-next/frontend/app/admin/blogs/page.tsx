"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

interface Blog {
  _id: string;
  title: string;
  slug_url: string;
  category: string;
  author: string;
  featured: boolean;
  createdAt: string;
}

export default function AdminBlogs() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState<string | null>(null);

  const fetchBlogs = () => {
    setLoading(true);
    fetch("http://localhost:5000/api/blogs")
      .then((r) => r.json())
      .then((d) => setBlogs(d.data || []))
      .finally(() => setLoading(false));
  };

  useEffect(() => { fetchBlogs(); }, []);

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this blog?")) return;
    setDeleting(id);
    const token = localStorage.getItem("adminToken");
    await fetch(`http://localhost:5000/api/blogs/${id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` },
    });
    fetchBlogs();
    setDeleting(null);
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold" style={{ color: "#000000" }}>All Blogs</h1>
        <Link
          href="/admin/blogs/create"
          className="px-5 py-2.5 rounded-lg text-sm font-semibold text-white"
          style={{ backgroundColor: "#ff9900" }}
        >
          + New Blog
        </Link>
      </div>

      <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
        {loading ? (
          <p className="p-8 text-center text-sm" style={{ color: "#67768e" }}>Loading...</p>
        ) : blogs.length === 0 ? (
          <p className="p-8 text-center text-sm" style={{ color: "#67768e" }}>No blogs yet. Create your first one!</p>
        ) : (
          <table className="w-full text-sm">
            <thead>
              <tr style={{ backgroundColor: "#f4f4f4" }}>
                <th className="text-left px-5 py-3 font-semibold" style={{ color: "#000000" }}>Title</th>
                <th className="text-left px-5 py-3 font-semibold" style={{ color: "#000000" }}>Category</th>
                <th className="text-left px-5 py-3 font-semibold" style={{ color: "#000000" }}>Author</th>
                <th className="text-left px-5 py-3 font-semibold" style={{ color: "#000000" }}>Date</th>
                <th className="text-left px-5 py-3 font-semibold" style={{ color: "#000000" }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {blogs.map((blog, i) => (
                <tr key={blog._id} style={{ borderTop: i > 0 ? "1px solid #f0f0f0" : undefined }}>
                  <td className="px-5 py-4">
                    <p className="font-medium" style={{ color: "#000000" }}>{blog.title}</p>
                    <p className="text-xs mt-0.5" style={{ color: "#67768e" }}>{blog.slug_url}</p>
                  </td>
                  <td className="px-5 py-4" style={{ color: "#67768e" }}>{blog.category}</td>
                  <td className="px-5 py-4" style={{ color: "#67768e" }}>{blog.author}</td>
                  <td className="px-5 py-4" style={{ color: "#67768e" }}>
                    {new Date(blog.createdAt).toLocaleDateString()}
                  </td>
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">
                      <Link
                        href={`/admin/blogs/${blog._id}/edit`}
                        className="text-xs font-semibold"
                        style={{ color: "#ff9900" }}
                      >
                        Edit
                      </Link>
                      <button
                        onClick={() => handleDelete(blog._id)}
                        disabled={deleting === blog._id}
                        className="text-xs font-semibold"
                        style={{ color: deleting === blog._id ? "#ccc" : "#e53e3e" }}
                      >
                        {deleting === blog._id ? "Deleting..." : "Delete"}
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

"use client";
import { useEffect, useState } from "react";

export default function AdminDashboard() {
  const [blogCount, setBlogCount] = useState<number | null>(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/blogs")
      .then((r) => r.json())
      .then((d) => setBlogCount(d.data?.length ?? 0))
      .catch(() => setBlogCount(0));
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6" style={{ color: "#000000" }}>Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <p className="text-sm font-medium" style={{ color: "#67768e" }}>Total Blogs</p>
          <p className="text-4xl font-bold mt-2" style={{ color: "#ff9900" }}>
            {blogCount === null ? "..." : blogCount}
          </p>
        </div>
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <p className="text-sm font-medium" style={{ color: "#67768e" }}>Admin</p>
          <p className="text-xl font-bold mt-2" style={{ color: "#000000" }}>AMZ Pro Venture Admin</p>
        </div>
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <p className="text-sm font-medium mb-3" style={{ color: "#67768e" }}>Quick Actions</p>
          <a
            href="/admin/blogs/create"
            className="inline-block px-4 py-2 rounded-lg text-sm font-semibold text-white"
            style={{ backgroundColor: "#ff9900" }}
          >
            + New Blog Post
          </a>
        </div>
      </div>
    </div>
  );
}

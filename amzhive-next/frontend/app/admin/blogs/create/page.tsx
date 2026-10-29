"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import BlogForm from "../_components/BlogForm";

export default function CreateBlog() {
  const router = useRouter();
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (formData: object) => {
    setSaving(true);
    setError("");
    try {
      const token = localStorage.getItem("adminToken");
      const res = await fetch("http://localhost:5000/api/blogs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Failed to create blog");
      router.push("/admin/blogs");
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Error");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6" style={{ color: "#000000" }}>Create New Blog</h1>
      {error && <div className="mb-4 p-3 rounded-lg text-sm text-white bg-red-500">{error}</div>}
      <BlogForm onSubmit={handleSubmit} saving={saving} />
    </div>
  );
}

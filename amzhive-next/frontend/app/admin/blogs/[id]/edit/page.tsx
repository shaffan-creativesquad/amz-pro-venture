"use client";
import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import BlogForm from "../../_components/BlogForm";

export default function EditBlog() {
  const router = useRouter();
  const params = useParams();
  const id = params.id as string;
  const [blog, setBlog] = useState(null);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(`http://localhost:5000/api/blogs/${id}`)
      .then((r) => r.json())
      .then((d) => setBlog(d.data));
  }, [id]);

  const handleSubmit = async (formData: object) => {
    setSaving(true);
    setError("");
    try {
      const token = localStorage.getItem("adminToken");
      const res = await fetch(`http://localhost:5000/api/blogs/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Failed to update blog");
      router.push("/admin/blogs");
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Error");
    } finally {
      setSaving(false);
    }
  };

  if (!blog) return <p className="p-8 text-sm" style={{ color: "#67768e" }}>Loading blog...</p>;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6" style={{ color: "#000000" }}>Edit Blog</h1>
      {error && <div className="mb-4 p-3 rounded-lg text-sm text-white bg-red-500">{error}</div>}
      <BlogForm onSubmit={handleSubmit} saving={saving} initialData={blog} />
    </div>
  );
}

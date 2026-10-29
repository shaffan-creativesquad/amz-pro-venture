"use client";
import { useState, useEffect } from "react";

interface ContentBlock { heading: string; paragraph: string; }
interface BlogData {
  title?: string; slug_url?: string; metaTitle?: string; metaDescription?: string;
  brief_paragraph?: string; blog_image?: string; published_date?: string;
  category?: string; tags?: string[]; author?: string; featured?: boolean;
  blogs_content?: ContentBlock[];
}

interface Props {
  onSubmit: (data: object) => void;
  saving: boolean;
  initialData?: BlogData | null;
}

export default function BlogForm({ onSubmit, saving, initialData }: Props) {
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [metaTitle, setMetaTitle] = useState("");
  const [metaDesc, setMetaDesc] = useState("");
  const [brief, setBrief] = useState("");
  const [image, setImage] = useState("");
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
  const [category, setCategory] = useState("General");
  const [author, setAuthor] = useState("AMZ Pro Venture Team");
  const [tags, setTags] = useState("");
  const [featured, setFeatured] = useState(false);
  const [content, setContent] = useState<ContentBlock[]>([{ heading: "", paragraph: "" }]);
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    if (!initialData) return;
    setTitle(initialData.title || "");
    setSlug(initialData.slug_url || "");
    setMetaTitle(initialData.metaTitle || "");
    setMetaDesc(initialData.metaDescription || "");
    setBrief(initialData.brief_paragraph || "");
    setImage(initialData.blog_image || "");
    setDate(initialData.published_date || new Date().toISOString().split("T")[0]);
    setCategory(initialData.category || "General");
    setAuthor(initialData.author || "AMZ Pro Venture Team");
    setTags((initialData.tags || []).join(", "));
    setFeatured(initialData.featured || false);
    setContent(initialData.blogs_content?.length ? initialData.blogs_content : [{ heading: "", paragraph: "" }]);
  }, [initialData]);

  const autoSlug = (val: string) => {
    setTitle(val);
    if (!initialData) setSlug(val.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, ""));
  };

  const addBlock = () => setContent([...content, { heading: "", paragraph: "" }]);
  const removeBlock = (i: number) => setContent(content.filter((_, idx) => idx !== i));
  const updateBlock = (i: number, field: keyof ContentBlock, val: string) => {
    const updated = [...content];
    updated[i] = { ...updated[i], [field]: val };
    setContent(updated);
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    const formData = new FormData();
    formData.append("image", file);
    const token = localStorage.getItem("adminToken");
    try {
      const res = await fetch("http://localhost:5000/api/upload", {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
        body: formData,
      });
      const data = await res.json();
      setImage(`http://localhost:5000${data.url}`);
    } catch {
      alert("Image upload failed");
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      title, slug_url: slug, metaTitle, metaDescription: metaDesc,
      brief_paragraph: brief, blog_image: image, published_date: date,
      category, author, featured,
      tags: tags.split(",").map((t) => t.trim()).filter(Boolean),
      blogs_content: content.filter((b) => b.heading || b.paragraph),
    });
  };

  const inputCls = "w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-[#ff9900]";
  const labelCls = "block text-sm font-semibold mb-1.5";

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="bg-white rounded-2xl shadow-sm p-6 space-y-5">
        <h2 className="font-bold text-base" style={{ color: "#000000" }}>Basic Info</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className={labelCls} style={{ color: "#000000" }}>Title *</label>
            <input className={inputCls} value={title} onChange={(e) => autoSlug(e.target.value)} required />
          </div>
          <div>
            <label className={labelCls} style={{ color: "#000000" }}>Slug URL *</label>
            <input className={inputCls} value={slug} onChange={(e) => setSlug(e.target.value)} required />
          </div>
          <div>
            <label className={labelCls} style={{ color: "#000000" }}>Category</label>
            <input className={inputCls} value={category} onChange={(e) => setCategory(e.target.value)} />
          </div>
          <div>
            <label className={labelCls} style={{ color: "#000000" }}>Author</label>
            <input className={inputCls} value={author} onChange={(e) => setAuthor(e.target.value)} />
          </div>
          <div>
            <label className={labelCls} style={{ color: "#000000" }}>Published Date</label>
            <input type="date" className={inputCls} value={date} onChange={(e) => setDate(e.target.value)} />
          </div>
          <div>
            <label className={labelCls} style={{ color: "#000000" }}>Tags (comma separated)</label>
            <input className={inputCls} value={tags} onChange={(e) => setTags(e.target.value)} placeholder="Amazon, FBA, PPC" />
          </div>
        </div>

        <div>
          <label className={labelCls} style={{ color: "#000000" }}>Brief Paragraph (Excerpt) *</label>
          <textarea className={inputCls} rows={3} value={brief} onChange={(e) => setBrief(e.target.value)} required />
        </div>

        <div className="flex items-center gap-3">
          <input type="checkbox" id="featured" checked={featured} onChange={(e) => setFeatured(e.target.checked)} className="w-4 h-4 accent-[#ff9900]" />
          <label htmlFor="featured" className="text-sm font-medium" style={{ color: "#000000" }}>Featured Post</label>
        </div>
      </div>

      {/* SEO */}
      <div className="bg-white rounded-2xl shadow-sm p-6 space-y-4">
        <h2 className="font-bold text-base" style={{ color: "#000000" }}>SEO</h2>
        <div>
          <label className={labelCls} style={{ color: "#000000" }}>Meta Title</label>
          <input className={inputCls} value={metaTitle} onChange={(e) => setMetaTitle(e.target.value)} />
        </div>
        <div>
          <label className={labelCls} style={{ color: "#000000" }}>Meta Description</label>
          <textarea className={inputCls} rows={2} value={metaDesc} onChange={(e) => setMetaDesc(e.target.value)} />
        </div>
      </div>

      {/* Image */}
      <div className="bg-white rounded-2xl shadow-sm p-6 space-y-4">
        <h2 className="font-bold text-base" style={{ color: "#000000" }}>Featured Image</h2>
        <div>
          <label className={labelCls} style={{ color: "#000000" }}>Upload Image</label>
          <input type="file" accept="image/*" onChange={handleImageUpload} className="text-sm" />
          {uploading && <p className="text-xs mt-1" style={{ color: "#ff9900" }}>Uploading...</p>}
        </div>
        <div>
          <label className={labelCls} style={{ color: "#000000" }}>Or paste Image URL</label>
          <input className={inputCls} value={image} onChange={(e) => setImage(e.target.value)} placeholder="https://..." />
        </div>
        {image && <img src={image} alt="preview" className="w-full max-w-xs rounded-lg object-cover mt-2" style={{ maxHeight: 200 }} />}
      </div>

      {/* Content Blocks */}
      <div className="bg-white rounded-2xl shadow-sm p-6 space-y-5">
        <div className="flex items-center justify-between">
          <h2 className="font-bold text-base" style={{ color: "#000000" }}>Content Blocks</h2>
          <button type="button" onClick={addBlock} className="text-sm font-semibold" style={{ color: "#ff9900" }}>
            + Add Block
          </button>
        </div>
        {content.map((block, i) => (
          <div key={i} className="border border-gray-100 rounded-xl p-4 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider" style={{ color: "#67768e" }}>Block {i + 1}</span>
              {content.length > 1 && (
                <button type="button" onClick={() => removeBlock(i)} className="text-xs" style={{ color: "#e53e3e" }}>Remove</button>
              )}
            </div>
            <div>
              <label className={labelCls} style={{ color: "#000000" }}>Heading</label>
              <input className={inputCls} value={block.heading} onChange={(e) => updateBlock(i, "heading", e.target.value)} />
            </div>
            <div>
              <label className={labelCls} style={{ color: "#000000" }}>Paragraph</label>
              <textarea className={inputCls} rows={4} value={block.paragraph} onChange={(e) => updateBlock(i, "paragraph", e.target.value)} />
            </div>
          </div>
        ))}
      </div>

      {/* Submit */}
      <div className="flex items-center gap-4">
        <button
          type="submit"
          disabled={saving}
          className="px-8 py-3 rounded-lg font-semibold text-white text-sm"
          style={{ backgroundColor: "#ff9900", opacity: saving ? 0.7 : 1 }}
        >
          {saving ? "Saving..." : initialData ? "Update Blog" : "Publish Blog"}
        </button>
        <a href="/admin/blogs" className="text-sm font-medium" style={{ color: "#67768e" }}>Cancel</a>
      </div>
    </form>
  );
}

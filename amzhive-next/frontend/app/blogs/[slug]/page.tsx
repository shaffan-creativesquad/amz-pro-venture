"use client";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import AnnouncementBar from "../../components/AnnouncementBar";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

interface ContentBlock { heading: string; paragraph: string; }
interface Blog {
  _id: string;
  title: string;
  slug_url: string;
  brief_paragraph: string;
  blog_image: string;
  published_date: string;
  category: string;
  author: string;
  tags: string[];
  blogs_content: ContentBlock[];
}

export default function BlogDetailPage() {
  const { slug } = useParams();
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    if (!slug) return;
    fetch(`http://localhost:5000/api/blogs/slug/${slug}`)
      .then((r) => r.json())
      .then((data) => {
        if (data.status === "success") setBlog(data.data);
        else setNotFound(true);
      })
      .catch(() => setNotFound(true))
      .finally(() => setLoading(false));
  }, [slug]);

  if (loading) {
    return (
      <>
        <AnnouncementBar />
        <Navbar />
        <div className="min-h-screen flex items-center justify-center bg-white">
          <div className="w-12 h-12 border-4 border-[#ff9900] border-t-transparent rounded-full animate-spin" />
        </div>
        <Footer />
      </>
    );
  }

  if (notFound || !blog) {
    return (
      <>
        <AnnouncementBar />
        <Navbar />
        <div className="min-h-screen flex flex-col items-center justify-center gap-4 bg-white">
          <div className="w-16 h-16 bg-[#fff8f0] rounded-full flex items-center justify-center mb-2">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ff9900" strokeWidth="2">
              <circle cx="12" cy="12" r="10" /><path d="M12 8v4m0 4h.01" />
            </svg>
          </div>
          <p className="font-bold text-xl" style={{ color: "#000000" }}>Blog not found</p>
          <Link href="/blogs" className="text-[#ff9900] font-semibold hover:underline text-sm flex items-center gap-1">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
            Back to Blogs
          </Link>
        </div>
        <Footer />
      </>
    );
  }

  const formatDate = (d: string) =>
    new Date(d).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });

  return (
    <main className="min-h-screen bg-white">

      {/* ── Top Bar ── */}
      <div className="bg-[#000000] border-b border-white/10">
        <div className="max-w-[860px] mx-auto px-6 py-4">
          <Link href="/blogs" className="text-gray-400 hover:text-[#ff9900] text-sm font-medium flex items-center gap-2 w-fit transition-colors">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Back to Blogs
          </Link>
        </div>
      </div>

      {/* ── Hero ── */}
      <section className="bg-[#000000] pb-14 pt-8 px-6">
        <div className="max-w-[860px] mx-auto">
          {blog.category && (
            <span className="inline-block bg-[#ff9900] text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-5">
              {blog.category}
            </span>
          )}
          <h1 className="text-3xl md:text-[2.6rem] font-bold leading-tight mb-5" style={{ color: "#ffffff" }}>
            {blog.title}
          </h1>
          <div className="flex items-center gap-3 flex-wrap">
            {blog.author && (
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[#ff9900] flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                  {blog.author.charAt(0).toUpperCase()}
                </div>
                <span className="text-white text-sm font-semibold">{blog.author}</span>
              </div>
            )}
            {blog.published_date && (
              <>
                <span className="text-gray-600">·</span>
                <span className="text-gray-400 text-sm">{formatDate(blog.published_date)}</span>
              </>
            )}
          </div>
        </div>
      </section>

      {/* ── Featured Image ── */}
      {blog.blog_image && (
        <div className="max-w-[860px] mx-auto px-6">
          <div className="relative -mt-0 rounded-2xl overflow-hidden shadow-xl" style={{ marginTop: "-1px" }}>
            <img
              src={blog.blog_image}
              alt={blog.title}
              className="w-full object-cover"
              style={{ maxHeight: "460px" }}
            />
          </div>
        </div>
      )}

      {/* ── Article Body ── */}
      <article className="max-w-[860px] mx-auto px-6 py-12">

        {/* Brief / Lead paragraph */}
        <div className="mb-10 p-6 bg-[#fff8f0] rounded-2xl border-l-4 border-[#ff9900]">
          <p className="text-[#000000] text-lg leading-relaxed font-medium">{blog.brief_paragraph}</p>
        </div>

        {/* Content blocks */}
        <div className="space-y-10">
          {blog.blogs_content?.filter((b) => b.heading || b.paragraph).map((block, i) => (
            <div key={i}>
              {block.heading && (
                <h2 className="text-xl md:text-2xl font-bold mb-3" style={{ color: "#000000" }}>
                  {block.heading}
                </h2>
              )}
              {block.paragraph && (
                <p className="text-[#67768e] leading-[1.85] whitespace-pre-line text-base">
                  {block.paragraph}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* ── Tags ── */}
        {blog.tags?.length > 0 && (
          <div className="mt-12 pt-8 border-t border-gray-100">
            <p className="text-xs font-bold uppercase tracking-widest text-[#67768e] mb-3">Tags</p>
            <div className="flex flex-wrap gap-2">
              {blog.tags.map((tag, i) => (
                <span key={i} className="bg-[#fff8f0] text-[#ff9900] text-xs font-semibold px-4 py-1.5 rounded-full border border-[#ff9900]/20">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* ── CTA ── */}
        <div className="mt-14 bg-[#000000] rounded-2xl p-8 md:p-10 text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-[#ff9900] mb-3">Ready to Scale?</p>
          <h3 className="text-2xl font-bold mb-3" style={{ color: "#ffffff" }}>
            Let Our Experts Handle Your Amazon Growth
          </h3>
          <p className="text-gray-400 text-sm mb-6 max-w-md mx-auto">
            From listing optimization to full account management — we've got you covered.
          </p>
          <Link
            href="/contact-us"
            className="inline-block bg-[#ff9900] text-white font-bold text-sm px-8 py-3 rounded-lg hover:bg-white hover:text-[#000000] transition-colors"
          >
            Get a Free Consultation
          </Link>
        </div>

        {/* ── Back link ── */}
        <div className="mt-10">
          <Link href="/blogs" className="text-[#ff9900] font-semibold hover:underline text-sm flex items-center gap-2 w-fit">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Back to All Blogs
          </Link>
        </div>
      </article>
    </main>
  );
}

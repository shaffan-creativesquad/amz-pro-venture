"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import AnnouncementBar from "../components/AnnouncementBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

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
  featured?: boolean;
}

export default function BlogsPage() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/api/blogs")
      .then((r) => r.json())
      .then((data) => setBlogs(Array.isArray(data) ? data : data.data || []))
      .catch(() => setBlogs([]))
      .finally(() => setLoading(false));
  }, []);

  const featured = blogs.find((b) => b.featured) || blogs[0];
  const rest = blogs.filter((b) => b._id !== featured?._id);

  const formatDate = (d: string) =>
    d ? new Date(d).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" }) : "";

  return (
    <>
    <AnnouncementBar />
    <Navbar />
    <main className="min-h-screen bg-white">

      {/* ── Hero Banner ── */}
      <section className="relative bg-[#000000] overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: "radial-gradient(circle at 70% 50%, #ff9900 0%, transparent 60%)" }} />
        <div className="relative max-w-[1200px] mx-auto px-6 py-20 md:py-28 text-center">
          <span className="inline-block bg-[#ff9900] text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">
            AMZ Pro Venture Blog
          </span>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-5" style={{ color: "#ffffff" }}>
            Insights to Scale Your<br />
            <span style={{ color: "#ff9900" }}>Amazon Business</span>
          </h1>
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
            Expert strategies, platform updates, and growth tips from our team of Amazon specialists.
          </p>
        </div>
      </section>

      <div className="max-w-[1200px] mx-auto px-6 py-16">

        {loading ? (
          <div className="flex justify-center items-center py-32">
            <div className="w-12 h-12 border-4 border-[#ff9900] border-t-transparent rounded-full animate-spin" />
          </div>
        ) : blogs.length === 0 ? (
          <div className="text-center py-32">
            <div className="w-16 h-16 bg-[#fff8f0] rounded-full flex items-center justify-center mx-auto mb-4">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ff9900" strokeWidth="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
              </svg>
            </div>
            <p className="text-[#000000] font-bold text-xl mb-2">No blogs yet</p>
            <p className="text-[#67768e]">Check back soon for expert Amazon insights.</p>
          </div>
        ) : (
          <>
            {/* ── Featured Post ── */}
            {featured && (
              <div className="mb-14">
                <p className="text-xs font-bold uppercase tracking-widest text-[#ff9900] mb-4">Featured Post</p>
                <Link href={`/blogs/${featured.slug_url}`} className="group block">
                  <div className="grid md:grid-cols-2 gap-0 rounded-2xl overflow-hidden shadow-md border border-gray-100 hover:shadow-xl transition-shadow">
                    <div className="relative h-64 md:h-auto bg-[#fff8f0] overflow-hidden">
                      {featured.blog_image ? (
                        <img
                          src={featured.blog_image}
                          alt={featured.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <span className="text-[#ff9900] font-bold text-7xl opacity-20">A</span>
                        </div>
                      )}
                    </div>
                    <div className="bg-white p-8 md:p-10 flex flex-col justify-center">
                      {featured.category && (
                        <span className="inline-block bg-[#fff8f0] text-[#ff9900] text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-4 w-fit">
                          {featured.category}
                        </span>
                      )}
                      <h2 className="text-2xl md:text-3xl font-bold leading-snug mb-4 group-hover:text-[#ff9900] transition-colors" style={{ color: "#000000" }}>
                        {featured.title}
                      </h2>
                      <p className="text-[#67768e] text-sm leading-relaxed mb-6 line-clamp-3">{featured.brief_paragraph}</p>
                      <div className="flex items-center justify-between">
                        <div className="text-xs text-[#67768e]">
                          {featured.author && <span className="font-semibold text-[#000000]">{featured.author}</span>}
                          {featured.published_date && <span className="ml-2">{formatDate(featured.published_date)}</span>}
                        </div>
                        <span className="text-[#ff9900] text-sm font-bold flex items-center gap-1 group-hover:gap-2 transition-all">
                          Read More
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            )}

            {/* ── All Posts Grid ── */}
            {rest.length > 0 && (
              <>
                <p className="text-xs font-bold uppercase tracking-widest text-[#67768e] mb-6">All Posts</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                  {rest.map((blog) => (
                    <Link
                      key={blog._id}
                      href={`/blogs/${blog.slug_url}`}
                      className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all overflow-hidden flex flex-col"
                    >
                      <div className="relative h-48 bg-[#fff8f0] overflow-hidden">
                        {blog.blog_image ? (
                          <img
                            src={blog.blog_image}
                            alt={blog.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center">
                            <span className="text-[#ff9900] font-bold text-5xl opacity-20">A</span>
                          </div>
                        )}
                        {blog.category && (
                          <span className="absolute top-3 left-3 bg-[#ff9900] text-white text-[11px] font-bold uppercase px-2.5 py-1 rounded-full">
                            {blog.category}
                          </span>
                        )}
                      </div>

                      <div className="p-5 flex flex-col flex-1">
                        <div className="text-xs text-[#67768e] mb-2 flex items-center gap-1.5">
                          {blog.author && <span className="font-semibold text-[#000000]">{blog.author}</span>}
                          {blog.author && blog.published_date && <span>·</span>}
                          {blog.published_date && <span>{formatDate(blog.published_date)}</span>}
                        </div>
                        <h2
                          className="font-bold text-base leading-snug mb-2 line-clamp-2 group-hover:text-[#ff9900] transition-colors"
                          style={{ color: "#000000" }}
                        >
                          {blog.title}
                        </h2>
                        <p className="text-[#67768e] text-sm leading-relaxed line-clamp-3 flex-1">
                          {blog.brief_paragraph}
                        </p>
                        <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
                          {blog.tags?.length > 0 && (
                            <span className="text-[11px] text-[#67768e] bg-gray-50 px-2 py-0.5 rounded-full">
                              {blog.tags[0]}
                            </span>
                          )}
                          <span className="text-[#ff9900] text-xs font-bold flex items-center gap-1 ml-auto">
                            Read More
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                              <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                          </span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </>
            )}
          </>
        )}
      </div>
    </main>
    <Footer />
    </>
  );
}

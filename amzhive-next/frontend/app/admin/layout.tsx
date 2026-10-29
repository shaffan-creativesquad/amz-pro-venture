"use client";
import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (pathname === "/admin/login") { setReady(true); return; }
    const token = localStorage.getItem("adminToken");
    if (!token) router.push("/admin/login");
    else setReady(true);
  }, [pathname, router]);

  const logout = () => {
    localStorage.removeItem("adminToken");
    localStorage.removeItem("adminUser");
    router.push("/admin/login");
  };

  if (!ready) return null;
  if (pathname === "/admin/login") return <>{children}</>;

  return (
    <div className="min-h-screen flex" style={{ backgroundColor: "#f4f4f4" }}>
      {/* Sidebar */}
      <aside className="w-60 flex-shrink-0 min-h-screen flex flex-col" style={{ backgroundColor: "#000000" }}>
        <div className="px-6 py-6 border-b border-white/10">
          <h2 className="text-white font-bold text-lg">AMZ Pro Venture</h2>
          <p className="text-white/40 text-xs mt-0.5">Admin Panel</p>
        </div>
        <nav className="flex-1 px-4 py-6 space-y-1">
          {[
            { label: "Dashboard", href: "/admin" },
            { label: "All Blogs", href: "/admin/blogs" },
            { label: "Create Blog", href: "/admin/blogs/create" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center px-3 py-2.5 rounded-lg text-sm font-medium transition-colors"
              style={{
                color: pathname === item.href ? "#000000" : "#ffffff99",
                backgroundColor: pathname === item.href ? "#ff9900" : "transparent",
              }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="px-4 py-4 border-t border-white/10">
          <button
            onClick={logout}
            className="w-full px-3 py-2.5 rounded-lg text-sm font-medium text-white/60 hover:text-white hover:bg-white/10 transition-colors text-left"
          >
            Logout
          </button>
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 p-8 overflow-auto">{children}</main>
    </div>
  );
}

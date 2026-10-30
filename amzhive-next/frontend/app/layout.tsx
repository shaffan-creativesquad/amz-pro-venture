import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans, Poppins } from "next/font/google";
import "./globals.css";
import ScrollAnimations from "./components/ScrollAnimations";
import ScrollToTop from "./components/ScrollToTop";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["400", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "AMZ Pro Venture - E-Commerce Growth Experts",
  description:
    "AMZ Pro Venture is your trusted partner for Amazon automation, Shopify stores, creative services, and digital growth strategies.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${plusJakartaSans.variable} ${poppins.variable} overflow-x-clip max-w-full`}>
      <head>
        <style
          dangerouslySetInnerHTML={{
            __html: `
              html, body, :root, * {
                scrollbar-width: thin !important;
                scrollbar-color: #ff9900 #f1f3f5 !important;
              }
              ::-webkit-scrollbar {
                width: 12px !important;
                height: 12px !important;
              }
              ::-webkit-scrollbar-track {
                background: #f1f3f5 !important;
              }
              ::-webkit-scrollbar-thumb {
                background-color: #ff9900 !important;
                border-radius: 9999px !important;
                border: 2px solid #f1f3f5 !important;
              }
              ::-webkit-scrollbar-thumb:hover {
                background-color: #e68a00 !important;
              }
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col antialiased overflow-x-clip max-w-full w-full">
        <ScrollAnimations />
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}

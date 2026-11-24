import type { Metadata } from "next";
import { Suspense } from "react";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Arturo Romero | Portfolio",
  description:
    "Portfolio of Arturo Romero, Software Developer. Explore my projects and experience.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-[#E8EEF5] text-slate-900">
        <Suspense
          fallback={
            <header className="bg-blue-950 px-6 py-5 text-white shadow-lg">
              <div className="mx-auto max-w-6xl">
                <span className="text-2xl font-bold tracking-wide">
                  Arturo Romero<span className="text-indigo-400">.</span>
                </span>
              </div>
            </header>
          }
        >
          <Header />
        </Suspense>

        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

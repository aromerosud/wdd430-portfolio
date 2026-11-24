import type { Metadata } from "next";
import { Suspense } from "react";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: 'Arturo Romero | Project Portfolio',
    template: '%s | Project Portfolio',
  },
   description:
    'A portfolio of web development projects.',
  metadataBase: new URL('https://wdd430-portfolio-9xv6jk7jb-arturos-projects-5dc924b0.vercel.app/'),
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

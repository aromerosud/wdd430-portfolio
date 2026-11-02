import { cacheLife } from "next/cache";

async function getCurrentYear() {
  "use cache";
  cacheLife("days");

  return new Date().getFullYear();
}

export default async function Footer() {
  const currentYear = await getCurrentYear();

  return (
    <footer className="bg-blue-950 text-slate-300 py-6 mt-auto">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="text-sm">
          Copyright &copy; {currentYear} | Arturo Romero | All rights reserved
        </p>
        <p className="text-xs text-slate-100 mt-2">
          Designed and developed with Next.js and Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}

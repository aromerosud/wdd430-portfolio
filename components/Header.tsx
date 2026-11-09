import Link from "next/link";
import NavLinks from "./NavLinks";

export default function Header() {
  return (
    <header className="bg-blue-950 text-white shadow-lg">
      <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col sm:flex-row justify-between items-center gap-4">
        <Link
          href="/"
          className="text-2xl font-bold tracking-wide hover:text-indigo-300 transition"
        >
          Arturo Romero<span className="text-indigo-400">.</span>
        </Link>

        <NavLinks />
      </div>
    </header>
  );
}
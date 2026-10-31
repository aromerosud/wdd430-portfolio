import Link from "next/link";

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

        <nav>
          <ul className="flex items-center gap-3">
            <li>
              <Link
                href="/"
                className="bg-indigo-600 hover:bg-indigo-500 px-5 py-2 rounded-lg font-medium transition duration-200"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="border border-slate-500 hover:bg-slate-700 px-5 py-2 rounded-lg font-medium transition duration-200"
              >
                About
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

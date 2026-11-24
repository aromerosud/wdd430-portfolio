import Link from "next/link";
import { connection } from "next/server";
import { auth } from "@/auth";
import NavLinks from "./NavLinks";
import { SignOutButton } from "./sign-out-button";

export default async function Header() {
  await connection();
  const session = await auth();
  const isLoggedIn = !!session?.user;

  return (
    <header className="bg-blue-950 text-white shadow-lg">
      <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col sm:flex-row justify-between items-center gap-4">
        <Link
          href="/"
          className="text-2xl font-bold tracking-wide hover:text-indigo-300 transition"
        >
          Arturo Romero<span className="text-indigo-400">.</span>
        </Link>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <NavLinks isLoggedIn={isLoggedIn} />

          {isLoggedIn && <SignOutButton />}
        </div>
      </div>
    </header>
  );
}

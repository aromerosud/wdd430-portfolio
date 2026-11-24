"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinksProps {
  isLoggedIn: boolean;
}

export default function NavLinks({ isLoggedIn }: NavLinksProps) {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
    ...(isLoggedIn
      ? [{ href: "/dashboard", label: "Dashboard" }]
      : [{ href: "/login", label: "Sign In" }]),
  ];

  return (
    <nav>
      <ul className="flex flex-wrap items-center justify-center gap-3">
        {links.map((link) => {
          const isActive =
            link.href === "/"
              ? pathname === "/"
              : pathname === link.href || pathname.startsWith(`${link.href}/`);

          return (
            <li key={link.href}>
              <Link
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={`px-5 py-2 rounded-lg font-medium transition duration-200 ${
                  isActive
                    ? "bg-indigo-800 text-white"
                    : "border border-slate-500 hover:bg-slate-700"
                }`}
              >
                {link.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

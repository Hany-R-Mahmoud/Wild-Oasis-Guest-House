"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();
  // console.log(pathname);
  console.log(Link.default);
  return (
    <nav className="z-10 text-xl">
      <ul className="flex gap-16 items-center">
        <li>
          <Link
            href="/cabins"
            className={`hover:text-accent-400 transition-colors ${
              href === pathname ? "text-accent-400" : ""
            }`}
          >
            Cabins
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className={`hover:text-accent-400 transition-colors ${
              href === pathname ? "text-accent-400" : ""
            }`}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="/account"
            className={`hover:text-accent-400 transition-colors ${
              href === pathname ? "text-accent-400" : ""
            }`}
          >
            Guest area
          </Link>
        </li>
      </ul>
    </nav>
  );
}

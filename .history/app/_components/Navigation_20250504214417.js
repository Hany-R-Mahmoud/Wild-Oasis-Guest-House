"use client";
import Link from "next/link";
import { useParams, usePathname, useSearchParams } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();

  const params = useParams();
  console.log(params);

  return (
    <nav className="z-10 text-xl">
      <ul className="flex gap-16 items-center">
        <li>
          <Link
            href="/cabins"
            className={`hover:text-accent-400 transition-colors ${
              pathname.startsWith("/cabins") ? "text-accent-400" : ""
            }`}
          >
            Cabins
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className={`hover:text-accent-400 transition-colors ${
              pathname.startsWith("/about") ? "text-accent-400" : ""
            }`}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="/account"
            className={`hover:text-accent-400 transition-colors ${
              pathname.startsWith("/account") ? "text-accent-400" : ""
            }`}
          >
            Guest area
          </Link>
        </li>
      </ul>
    </nav>
  );
}

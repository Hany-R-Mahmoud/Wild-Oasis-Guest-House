"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import NavLink from "./NavLink";

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="z-10 text-xl">
      <ul className="flex gap-16 items-center">
        <li>
          <NavLink
            href="/cabins"
            className={`hover:text-accent-400 transition-colors `}
            activeClassName="text-accent-400"
          >
            Cabins
          </NavLink>
        </li>
        <li>
          <NavLink
            href="/about"
            className="hover:text-accent-400 transition-colors"
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            href="/account"
            className="hover:text-accent-400 transition-colors"
          >
            Guest area
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

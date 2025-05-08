// "use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default async function Navigation() {
  const session = await auth();

  // const pathname = usePathname();
  const pathname = "";

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
          {session?.user?.image ? (
            <Link
              href="/account"
              className={`hover:text-accent-400 transition-colors ${
                pathname.startsWith("/account") ? "text-accent-400" : ""
              }`}
            >
              <img src={session.user.image} className="rounded-full" />
              <span>Guest area</span>
            </Link>
          ) : (
            <Link
              href="/account"
              className={`hover:text-accent-400 transition-colors ${
                pathname.startsWith("/account") ? "text-accent-400" : ""
              }`}
            >
              Guest area
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
}

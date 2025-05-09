// "use client";
import Link from "next/link";
import { auth } from "../_lib/auth";
// import { usePathname } from "next/navigation";

export default async function Navigation() {
  const session = await auth();

  // used to make the active link distinguished
  // const pathname = usePathname();
  const pathname = "";

  return (
    <nav className="z-10 text-xl">
      <ul className="flex justify-between items-center max-w-7xl mx-auto gap-8">
        {/* <ul className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto gap-16"> */}
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
              className={`hover:text-accent-400 transition-colors flex items-center gap-4 ${
                pathname.startsWith("/account") ? "text-accent-400" : ""
              }`}
            >
              <img
                src={session.user.image}
                alt={session.user.name}
                className=" h-8 rounded-full"
                referrerPolicy="no-referrer"
              />
              <span>{session.user.name}</span>
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

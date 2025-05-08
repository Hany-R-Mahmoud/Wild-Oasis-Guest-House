import Link from "next/link";
import { useRouter } from "next/router";

const NavLink = ({ href, children, activeClassName }) => {
  const router = useRouter();
  const isActive = router.pathname === href;

  return (
    <Link href={href}>
      <a className={`${isActive ? activeClassName : ""}`}>{children}</a>
    </Link>
  );
};
export default NavLink;

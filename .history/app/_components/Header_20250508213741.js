// "use client";
import Navigation from "@/app/_components/Navigation";
import Logo from "@/app/_components/Logo";
import { useMediaQuery } from "react-responsive";
function Header() {
  const isTabletorMobile = useMediaQuery({ query: "(max-width:991px)" });

  console.log(isTabletorMobile);
  return (
    <header className="border-b border-primary-900 px-8 py-5">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <Logo />
        <Navigation />
      </div>
    </header>
  );
}

export default Header;

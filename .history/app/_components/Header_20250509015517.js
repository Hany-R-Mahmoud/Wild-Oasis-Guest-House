import Navigation from "@/app/_components/Navigation";
import Logo from "@/app/_components/Logo";

function Header({ isMobile }) {
  return (
    <header className="border-b border-primary-900 px-8 py-5">
      <div className="flex  flex-col gap-6 justify-between items-center max-w-7xl mx-auto">
        <Logo />
        <Navigation />
      </div>
    </header>
  );
}
``;
export default Header;

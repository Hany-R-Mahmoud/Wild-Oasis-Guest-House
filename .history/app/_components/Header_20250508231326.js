import Navigation from "@/app/_components/Navigation";
import Logo from "@/app/_components/Logo";

function Header({ isMobile }) {
  return (
    <header className="border-b border-primary-900 px-8 py-5">
      <div className="flex  justify-between items-center max-w-7xl mx-auto">
        {/* <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto"> */}
        <Logo />
        <Navigation />
      </div>
    </header>
    // <header className="border-b border-primary-900 px-8 py-5">
    //   {isMobile ? (
    //     <div>Hi</div>
    //   ) : (
    //     <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto">
    //       <Logo />
    //       <Navigation />
    //     </div>
    //   )}
    // </header>
  );
}
``;
export default Header;

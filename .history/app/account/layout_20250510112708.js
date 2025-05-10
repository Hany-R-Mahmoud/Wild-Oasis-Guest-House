import SideNavigation from "../_components/SideNavigation";

export default function Layout({ children }) {
  return (
    <div className=" flex  flex-col lg:flex-row   h-full gap-12">
      {/* <div className=" flex flex-col lg:grid grid-cols-[16rem_1fr] h-full gap-12"> */}
      <SideNavigation />
      <div className="py-1">{children}</div>
    </div>
  );
}

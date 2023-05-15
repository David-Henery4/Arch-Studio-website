import { useState } from "react";
import { Outlet } from "react-router-dom"
import { Navbar, Footer, Sidebar, OverlayCover } from "../components";


const SharedLayout = () => {
  const [isSidebarActive, setIsSidebarActive] = useState(false);
  //
  return (
    <main className="relative overflow-hidden font-spartan text-veryDarkBlue grid grid-cols-mob mdTab:grid-cols-mdTab tab:grid-cols-tab lgDesk:grid-cols-desk lgDesk:max-w-[1440px] lgDesk:mx-auto">
      <Navbar sidebarInfo={{ isSidebarActive, setIsSidebarActive }} />
      <Sidebar sidebarInfo={{ isSidebarActive, setIsSidebarActive }} />
      <OverlayCover sidebarInfo={{ isSidebarActive, setIsSidebarActive }} />
      <Outlet />
      <Footer />
    </main>
  );
}

export default SharedLayout
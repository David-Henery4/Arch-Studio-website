import { useState, useLayoutEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Navbar, Footer, Sidebar, OverlayCover, PageLabel } from "../components";

// SCROLL TO TOP AFTER NAVIGATION
const Wrapper = ({ children }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children;
};


const SharedLayout = () => {
  const [isSidebarActive, setIsSidebarActive] = useState(false);
  //
  return (
    <main className="relative overflow-hidden font-spartan text-veryDarkBlue grid grid-cols-mob mdTab:grid-cols-mdTab tab:grid-cols-tab lgDesk:grid-cols-desk lgDesk:max-w-[1440px] lgDesk:mx-auto">
      <PageLabel/>
      <Wrapper>
        <Navbar sidebarInfo={{ isSidebarActive, setIsSidebarActive }} />
        <Sidebar sidebarInfo={{ isSidebarActive, setIsSidebarActive }} />
        <OverlayCover sidebarInfo={{ isSidebarActive, setIsSidebarActive }} />
        <Outlet />
        <Footer />
      </Wrapper>
    </main>
  );
}

export default SharedLayout
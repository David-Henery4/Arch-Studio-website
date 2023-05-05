import { Outlet } from "react-router-dom"
import {Navbar, Footer} from "../components";

const SharedLayout = () => {
  return (
    <main className="font-spartan grid grid-cols-mob mdTab:grid-cols-mdTab tab:grid-cols-tab lgDesk:grid-cols-desk lgDesk:max-w-[1440px] lgDesk:mx-auto">
      <Navbar />
      <Outlet />
      <Footer />
    </main>
  );
}

export default SharedLayout
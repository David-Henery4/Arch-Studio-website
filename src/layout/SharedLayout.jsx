import { Outlet } from "react-router-dom"
import {Navbar, Footer} from "../components";

const SharedLayout = () => {
  return (
    <main className="font-spartan grid grid-cols-mob">
      <Navbar />
      <Outlet />
      <Footer/>
    </main>
  );
}

export default SharedLayout
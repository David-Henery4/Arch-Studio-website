import { Outlet } from "react-router-dom"
import {Navbar} from "../components";

const SharedLayout = () => {
  return (
    <main className="font-spartan grid grid-cols-mob">
      <Navbar />
      <Outlet />
      <footer className="col-start-1 col-end-13 bg-veryLightGrey">
        Footer
      </footer>
    </main>
  );
}

export default SharedLayout
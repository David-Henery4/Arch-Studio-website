import { Logo, BurgerIcon } from "../assets/icons";

const Navbar = () => {
  return (
    <nav className="col-start-2 col-end-12 pt-8 flex justify-between items-center">
      <Logo />
      <BurgerIcon />
    </nav>
  );
};

export default Navbar;

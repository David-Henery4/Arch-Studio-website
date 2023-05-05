import { Logo, BurgerIcon } from "../../assets/icons";
import navigationData from "../../miscData/navigationData";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="col-start-2 col-end-12 py-8 flex justify-between items-center mdTab:justify-start mdTab:gap-12 tab:py-14">
      <Logo className="fill-veryDarkBlue" />
      <ul className="hidden mdTab:flex justify-center items-end gap-12 text-bodyText leading-[25px] font-bold text-mediumGrey">
        {navigationData.map((nav) => {
          return (
            <li key={nav?.id}>
              <Link>{nav?.name}</Link>
            </li>
          );
        })}
      </ul>
      <BurgerIcon className="mdTab:hidden" />
    </nav>
  );
};

export default Navbar;

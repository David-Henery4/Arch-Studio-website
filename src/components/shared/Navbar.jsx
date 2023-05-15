import { Logo, BurgerIcon } from "../../assets/icons";
import navigationData from "../../miscData/navigationData";
import { Link } from "react-router-dom";

const Navbar = ({ sidebarInfo }) => {
  const { setIsSidebarActive, isSidebarActive } = sidebarInfo;
  // () => {}
  return (
    <nav className="col-start-2 col-end-12 py-8 flex justify-between items-center mdTab:justify-start mdTab:gap-12 tab:py-14 tab:gap-20 smLap:gap-[95px]">
      <Link to="/" onClick={() => {
        setIsSidebarActive(false)
      }}>
        <Logo className="fill-veryDarkBlue" />
      </Link>
      <ul className="hidden mdTab:flex justify-center items-end gap-12 text-bodyText leading-[25px] font-bold text-mediumGrey">
        {navigationData.map((nav) => {
          return (
            <li key={nav?.id} className="hover:text-veryDarkBlue">
              <Link to={nav?.link}>{nav?.name}</Link>
            </li>
          );
        })}
      </ul>
      <BurgerIcon
        className="mdTab:hidden hover:cursor-pointer"
        onClick={() => {
          setIsSidebarActive(!isSidebarActive);
        }}
      />
    </nav>
  );
};

export default Navbar;

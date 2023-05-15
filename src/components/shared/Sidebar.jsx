import { Link } from "react-router-dom";
import navigationData from "../../miscData/navigationData";

const Sidebar = ({ sidebarInfo }) => {
  const { setIsSidebarActive, isSidebarActive } = sidebarInfo;
  //
  return (
    <aside
      className={`absolute w-full z-50 top-[104px] left-8 px-12 py-[42px] bg-veryLightGrey transition-all mdTab:hidden ${
        isSidebarActive ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <ul className="text-smHeading leading-smHeading font-bold flex flex-col gap-4">
        {navigationData.map((nav) => {
          return (
            <li key={nav?.id}>
              <Link to={nav?.link} onClick={() => {
                setIsSidebarActive(false)
              }}>
                {nav?.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default Sidebar;

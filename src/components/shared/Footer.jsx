import { Logo } from "../../assets/icons";
import { Link } from "react-router-dom";
import { PortfolioCTA } from "../../components";
import navigationData from "../../miscData/navigationData";

const Footer = () => {
  return (
    <footer className="w-full col-start-1 col-end-13 grid grid-rows-footerMob tab:grid-cols-footerTab tab:grid-rows-[auto] lap:col-start-2 lap:col-end-12">
      <div className="w-full h-full row-start-2 row-end-3 col-start-1 col-end-2 bg-veryLightGrey tab:col-start-1 tab:col-end-2 tab:row-start-1 tab:row-end-2"></div>
      <div className="w-full row-start-1 row-end-3 col-start-1 col-end-2 flex flex-col justify-center items-center gap-8 pb-12 tab:flex-row tab:justify-between tab:p-0 tab:col-start-1 tab:col-end-3 tab:row-start-1 tab:row-end-2">
        <div className="w-[120px] h-[120px] bg-veryDarkBlue grid place-items-center">
          <Logo className="fill-white" />
        </div>
        <ul className="flex flex-col justify-center items-center gap-8 text-mediumGrey text-bodyText leading-[25px] font-bold tab:flex-row">
          {navigationData.map(nav => {
            return (
              <li key={nav?.id}>
                <Link to={nav?.link} >{nav?.name}</Link>
              </li>
            );
          })}
        </ul>
        <PortfolioCTA />
      </div>
    </footer>
  );
};

export default Footer;

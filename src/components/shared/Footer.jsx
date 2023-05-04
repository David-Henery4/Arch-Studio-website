import { Logo } from "../../assets/icons";
import { Link } from "react-router-dom";
import { PortfolioCTA } from "../../components";
import navigationData from "../../miscData/navigationData";

const Footer = () => {
  return (
    <footer className="w-full col-start-1 col-end-13 grid grid-rows-footerMob">
      <div className="w-full h-full row-start-2 row-end-3 col-start-1 col-end-2 bg-veryLightGrey"></div>
      <div className="w-full row-start-1 row-end-3 col-start-1 col-end-2 flex flex-col justify-center items-center gap-8 pb-12">
        <div className="w-[120px] h-[120px] bg-veryDarkBlue grid place-items-center">
          <Logo className="fill-white" />
        </div>
        <ul className="flex flex-col justify-center items-center gap-8 text-mediumGrey text-bodyText leading-[25px] font-bold">
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

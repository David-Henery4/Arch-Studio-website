import { ArrowIcon } from "../../assets/icons";
import { Link } from "react-router-dom";

const PortfolioCTA = () => {
  return (
    <Link to="portfolio" className="text-white px-6 py-5 bg-veryDarkBlue flex justify-center items-center gap-6 text-lg font-bold hover:bg-darkGrey active:bg-veryDarkBlue">
      See Our Portfolio
      <span>
        <ArrowIcon className="stroke-white" />
      </span>
    </Link>
  );
}

export default PortfolioCTA
import { Link } from "react-router-dom";
import { ArrowIcon } from "../../assets/icons";

const AllProjectsBtn = ({isMob, isPortfolio}) => {
  //
  return (
    <Link 
      to="portfolio"
      className={`h-[72px] inline-flex justify-center items-center bg-veryDarkBlue text-white gap-6  text-bodyText leading-bodyText font-bold hover:bg-darkGrey active:bg-veryDarkBlue 
      ${isPortfolio && "hidden"}
      ${
        isMob ? "w-full tab:hidden" : "hidden w-[169px] tab:inline-flex"
      }
      `}
    >
      See All
      <span>
        <ArrowIcon className="stroke-white" />
      </span>
    </Link>
  );
}

// // fixes linting issue
// AllProjectsBtn.propTypes = {
//   isMob: PropTypes.string.isRequired,
// };

export default AllProjectsBtn
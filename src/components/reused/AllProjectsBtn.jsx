import { ArrowIcon } from "../../assets/icons";

const AllProjectsBtn = ({isMob}) => {
  //
  return (
    <button
      className={`h-[72px] inline-flex justify-center items-center bg-veryDarkBlue text-white gap-6  text-bodyText leading-bodyText font-bold hover:bg-darkGrey ${
        isMob ? "w-full tab:hidden" : "hidden w-[169px] tab:inline-flex"
      }
      `}
    >
      See All
      <span>
        <ArrowIcon className="stroke-white" />
      </span>
    </button>
  );
}

// // fixes linting issue
// AllProjectsBtn.propTypes = {
//   isMob: PropTypes.string.isRequired,
// };

export default AllProjectsBtn
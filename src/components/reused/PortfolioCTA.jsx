import { ArrowIcon } from "../../assets/icons";

const PortfolioCTA = () => {
  return (
    <button className="text-white px-6 py-5 bg-veryDarkBlue flex justify-center items-center gap-6 text-lg font-bold">
      See Our Portfolio
      <span>
        <ArrowIcon className="stroke-white" />
      </span>
    </button>
  );
}

export default PortfolioCTA
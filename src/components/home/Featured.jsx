import { ArrowIcon } from "../../assets/icons";
import featuredData from "../../miscData/featuredProjectsData";

const Featured = () => {
  return (
    <section className="w-full col-start-2 col-end-12 grid gap-11 py-[72px]">
      <h3 className="text-xtraLrgHeadingMob leading-lrgHeadingMob tracking-lrgMedHeadingMob font-bold smTab:text-medHeading smTab:leading-medHeading smTab:tracking-lrgMedHeading">
        Featured
      </h3>
      {/* THUMB CONTAINER */}
      <div className="w-full grid gap-6">
        {/* Thumb Item */}
        {featuredData.map((item) => {
          return (
            <div
              key={item?.id}
              className="relative w-full h-60 flex flex-col justify-end items-start"
            >
              <div className="absolute w-full h-full top-0 left-0 bg-gradient-to-b from-black/10 to-black/60 z-10"></div>
              <picture>
                <source srcSet="" media="" />
                <source srcSet={item?.image?.tab} media="(min-width:25em)" />
                <img
                  className="absolute top-0 left-0 h-full w-full object-cover object-top"
                  src={item?.image?.mob}
                  alt="featured project thumbnail"
                  srcSet={item?.image?.mob}
                />
              </picture>
              <div className="relative p-6 text-white z-20">
                <h4 className="text-smHeading font-bold leading-10">
                  {item?.name}
                </h4>
                <a
                  href="#"
                  className="text-bodyText leading-bodyText font-medium text-white/75"
                >
                  {item?.label}
                </a>
              </div>
            </div>
          );
        })}
        <button
          className="w-full inline-flex justify-center items-center bg-veryDarkBlue text-white gap-6 py-5 text-bodyText leading-bodyText font-bold
      "
        >
          See All
          <span>
            <ArrowIcon className="stroke-white" />
          </span>
        </button>
      </div>
    </section>
  );
};

export default Featured;

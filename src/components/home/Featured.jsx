import { ArrowIcon } from "../../assets/icons";
import featuredData from "../../miscData/featuredProjectsData";
import { AllProjectsBtn } from "../../components";

const Featured = () => {
  return (
    <section className="w-full col-start-2 col-end-12 grid gap-11 py-[72px] tab:py-[200px]">
      <div className="flex justify-between items-center">
        <h3 className="text-xtraLrgHeadingMob leading-lrgHeadingMob tracking-lrgMedHeadingMob font-bold smTab:text-medHeading smTab:leading-medHeading smTab:tracking-lrgMedHeading">
          Featured
        </h3>
        <AllProjectsBtn isMob={false} />
      </div>
      {/* THUMB CONTAINER */}
      <div className="w-full grid gap-6">
        {/* Thumb Item */}
        {featuredData.map((item) => {
          return (
            <div
              key={item?.id}
              className="relative w-full h-60 flex flex-col justify-end items-start overflow-hidden"
            >
              <div className="absolute w-full h-full top-0 left-0 bg-gradient-to-b from-black/10 to-black/60 z-10"></div>
              <p className="hidden absolute top-8 right-4 z-20 text-xtraLrgHeading leading-xtraLrgHeading text-white/50 font-bold tracking-xtraLrgHeading tab:block">{item?.id}</p>
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
        <AllProjectsBtn isMob={true} />
      </div>
    </section>
  );
};

export default Featured;

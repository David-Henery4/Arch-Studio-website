import {AllProjectsBtn} from "../../components"

const ProjectsGallery = ({projects, isPortfolio = false}) => {
  return (
    <div className="w-full grid gap-6 lap:grid-cols-featuredLap lap:gap-[30px]">
      {/* Thumb Item */}
      {projects.map((item) => {
        return (
          <div
            key={item?.id}
            className="relative w-full h-60 flex flex-col justify-end items-start overflow-hidden lap:h-[560px]"
          >
            <div className="absolute w-full h-full top-0 left-0 bg-gradient-to-b from-black/10 to-black/60 z-10"></div>
            <p
              className={`absolute top-8 right-4 z-20 text-xtraLrgHeading leading-xtraLrgHeading text-white/50 font-bold tracking-xtraLrgHeading lap:right-0 ${
                isPortfolio ? "hidden" : "hidden tab:block"
              }`}
            >
              {item?.id}
            </p>
            <picture>
              <source srcSet={item?.image?.desk} media="(min-width: 64.37em)" />
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
      <AllProjectsBtn isMob={true} isPortfolio={isPortfolio}/>
    </div>
  );
};

export default ProjectsGallery;

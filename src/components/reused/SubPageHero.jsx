import {aboutHeroDesk,aboutHeroMob,aboutHeroTab} from "../../assets/about";

const SubPageHero = () => {
  return (
    <section className="col-start-1 col-end-13 mdTab:col-start-2 mdTab:col-end-12 tab:grid tab:max-h-[740px] tab:grid-rows-subTab tab:grid-cols-subTab lap:grid-cols-subDesk lap:grid-rows-subDesk">
      <picture className="tab:col-start-1 tab:col-end-3 tab:row-start-1 tab:row-end-[13] lap:row-start-1 lap:row-end-3 lap:col-start-1 lap:col-end-3">
        <source media="(min-width: 56.25em)" srcSet={aboutHeroDesk} />
        <source media="(min-width: 46.25em)" srcSet={aboutHeroTab} />
        <img
          className="w-full object-cover tab:h-full"
          src={aboutHeroMob}
          alt="Image showing representing the hero section of this page"
          srcSet={aboutHeroMob}
        />
      </picture>
      <div className="bg-white w-full relative py-5 px-8 grid gap-5 justify-center tab:px-[60px] tab:pr-0 tab:pb-0 tab:content-end tab:col-start-2 tab:col-end-4 tab:row-start-6 tab:row-end-[13] tab:gap-9 lap:row-start-2 lap:row-end-3">
        <div className="absolute h-11 w-11/12 bg-white -top-11 left-0 tab:hidden"></div>
        <h3 className="hidden absolute -top-24 right-0 text-veryLightGrey text-9xl font-bold leading-xtraLrgHeading -tracking-[3px] tab:block lap:left-0 lap:text-[175px] XtraLgDesk:text-[250px]">
          About
        </h3>
        <h2 className="text-lrgHeadingMob leading-lrgHeadingMob -tracking-[1.2px] font-bold max-w-md smTab:text-medHeading smTab:leading-medHeading smTab:tracking-lrgMedHeading">
          Your team of professionals
        </h2>
        <p className="text-bodyText leading-bodyText font-medium text-darkGrey max-w-md">
          Our small team of world-class professionals will work with you every
          step of the way. Strong relationships are at the core of everything we
          do. This extends to the relationship our projects have with their
          surroundings.
        </p>
      </div>
    </section>
  );
}

export default SubPageHero
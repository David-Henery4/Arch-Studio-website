import {aboutHeroDesk,aboutHeroMob,aboutHeroTab} from "../../assets/about";

const SubPageHero = () => {
  return (
    <section className="col-start-1 col-end-13 mdTab:col-start-2 mdTab:col-end-12 mdTab:grid mdTab:max-h-[740px] mdTab:grid-rows-subTab mdTab:grid-cols-subTab lap:grid-cols-subDesk lap:grid-rows-subDesk">
      <picture className="mdTab:col-start-1 mdTab:col-end-3 mdTab:row-start-1 mdTab:row-end-[13] lap:row-start-1 lap:row-end-3 lap:col-start-1 lap:col-end-3">
        <source media="(min-width: 56.25em)" srcSet={aboutHeroDesk} />
        <source media="(min-width: 39.06em)" srcSet={aboutHeroTab} />
        <img
          className="w-full object-cover mdTab:h-full"
          src={aboutHeroMob}
          alt="Image showing representing the hero section of this page"
          srcSet={aboutHeroMob}
        />
      </picture>
      <div className="bg-white w-full relative py-5 px-8 grid gap-5 justify-start mdTab:px-[60px] mdTab:pr-0 mdTab:pb-0 mdTab:justify-end mdTab:content-end mdTab:col-start-2 mdTab:col-end-4 mdTab:row-start-6 mdTab:row-end-[13] mdTab:gap-9 lap:row-start-2 lap:row-end-3">
        <div className="absolute h-11 w-11/12 bg-white -top-11 left-0 mdTab:hidden"></div>
        <h3 className="hidden absolute -top-24 right-0 text-veryLightGrey text-9xl font-bold leading-xtraLrgHeading -tracking-[3px] mdTab:block lap:left-0 lap:text-[175px] XtraLgDesk:text-[250px]">
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
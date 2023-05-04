import {
  paramourMobHeroImg,
  paramourTabHeroImg,
  paramourDeskHeroImg,
} from "../../assets/home";
import { ArrowIcon } from "../../assets/icons";
import {PortfolioCTA} from "../../components"

const Hero = () => {
  // use project data objects to display,
  // different projects text & images
  // with index being used to select the
  // correct one.
  return (
    <section className="col-start-1 col-end-13 w-full min-h-[560px] p-8 relative text-white smTab:min-h-[720px] mdTab:col-start-2 mdTab:col-end-12 ">
      <div className="absolute top-0 left-0 w-full h-full bg-[#000000] opacity-[.35] z-10"></div>
      <picture>
        <source srcSet={paramourTabHeroImg} />
        <source srcSet={paramourDeskHeroImg} />
        <img
          className="absolute top-0 left-0
        w-full h-full object-cover"
          srcSet={paramourMobHeroImg}
          src={paramourMobHeroImg}
          alt="hero showing a company project"
        />
      </picture>
      <div className="relative z-20 h-full w-full flex flex-col justify-center items-start gap-20">
        <div className="grid gap-3 ">
          <h1 className="text-xtraLrgHeadingMob leading-xtraLrgHeadingMob tracking-xtraLrgHeadingMob font-semibold smTab:text-lrgHeading smTab:leading-lrgHeading smTab:tracking-lrgMedHeading">
            Project Paramour
          </h1>
          <p className="text-bodyText leading-bodyText max-w-md font-medium">
            Project made for an art museum near Southwest London. Project
            Paramour is a statement of bold, modern architecture.
          </p>
        </div>
        <PortfolioCTA />
      </div>
    </section>
  );
};

export default Hero;

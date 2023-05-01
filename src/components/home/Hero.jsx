import {
  paramourMobHeroImg,
  paramourTabHeroImg,
  paramourDeskHeroImg,
} from "../../assets/home";
import { ArrowIcon } from "../../assets/icons";

const Hero = () => {
  // use project data objects to display,
  // different projects text & images
  // with index being used to select the
  // correct one.
  return (
    <section className="col-start-1 col-end-13 w-full min-h-[560px] p-8 relative text-white">
      <div className="absolute top-0 left-0 w-full h-full bg-[#000000] opacity-[.35] z-10"></div>
      <picture>
        <source srcSet={paramourTabHeroImg} />
        <source srcSet={paramourDeskHeroImg} />
        <img
          className="absolute top-0 left-0
        w-full h-full"
          srcSet={paramourMobHeroImg}
          src={paramourMobHeroImg}
          alt="hero showing a company project"
        />
      </picture>
      <div className="relative z-20 h-full w-full flex flex-col justify-center items-start gap-20">
        <div className="grid gap-3 ">
          <h1 className="text-xtraLrgHeadingMob leading-xtraLrgHeadingMob tracking-xtraLrgHeadingMob font-semibold">
            Project Paramour
          </h1>
          <p className="text-bodyText leading-bodyText">
            Project made for an art museum near Southwest London. Project
            Paramour is a statement of bold, modern architecture.
          </p>
        </div>
        <button className="px-6 py-5 bg-veryDarkBlue flex justify-center items-center gap-6 text-lg font-bold">
          See Our Portfolio
          <span>
            <ArrowIcon className="stroke-white"/>
          </span>
        </button>
      </div>
    </section>
  );
};

export default Hero;

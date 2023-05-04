import { ArrowIcon } from "../../assets/icons";

const AboutCTA = () => {
  return (
    <section className="relative w-full p-8 col-start-1 col-end-13 min-h-[560px] bg-aboutCTAMob bg-no-repeat bg-cover flex flex-col justify-center items-start gap-6 mdTab:col-start-2 mdTab:col-end-12">
      <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>
      <h3 className="relative text-lrgHeadingMob text-white font-bold leading-lrgHeadingMob tracking-lrgMedHeadingMob smTab:text-medHeading smTab:leading-medHeading smTab:tracking-lrgMedHeading">Small team, big ideas</h3>
      <a
        href="#"
        className="relative px-8 py-6 bg-veryDarkBlue text-white font-bold text-bodyText inline-flex justify-center items-center gap-6"
      >
        About Us
        <span>
          <ArrowIcon className="stroke-white" />
        </span>
      </a>
    </section>
  );
};

export default AboutCTA;

import { ArrowIcon } from "../../assets/icons";

const AboutCTA = () => {
  return (
    <section className="relative w-full p-8 col-start-1 col-end-13 min-h-[560px] bg-aboutCTAMob bg-no-repeat bg-cover flex flex-col justify-center items-start gap-6 mdTab:col-start-2 mdTab:col-end-12 tab:p-14 tab:bg-aboutCTATab smLap:bg-aboutCTALap desk:px-[190px]">
      <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>
      <h3 className="max-w-[300px] relative text-lrgHeadingMob text-white font-bold leading-lrgHeadingMob tracking-lrgMedHeadingMob smTab:max-w-[400px] smTab:text-medHeading smTab:leading-medHeading smTab:tracking-lrgMedHeading">
        Small team, big ideas
      </h3>
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

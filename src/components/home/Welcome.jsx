import {welcomeDeskImg} from "../../assets/home"

const Welcome = () => {
  return (
    <section className="relative w-full col-start-2 col-end-12 pt-36 pb-28 tab:pt-[248px] tab:pb-[233px] lap:py-[195px] lgLap:flex lgLap:flex-row-reverse lgLap:justify-start lgLap:items-center lgLap:gap-[125px]">
      <img className="hidden lgLap:block" src={welcomeDeskImg} alt="welcome image section image showing a recent building project" />
      <div className="grid gap-6 smLap:justify-center">
        <h2 className="hidden absolute top-24 left-0 tab:block text-veryLightGrey text-[130px] tracking-[3px] font-bold leading-xtraLrgHeading smLap:text-[175px] lap:top-[55px] lgLap:top-[105px] desk:top-[85px] desk:text-[250px] desk:tracking-xtraLrgHeading">
          Welcome
        </h2>
        <h2 className="max-w-[325px] smTab:max-w-[495px] text-veryDarkBlue text-lrgHeadingMob leading-lrgHeadingMob tracking-lrgMedHeadingMob font-bold smTab:text-medHeading smTab:leading-medHeading smTab:tracking-lrgMedHeading">
          Welcome to Arch Studio
        </h2>
        <p className="inline-flex flex-col justify-center items-start gap-5 text-bodyText leading-bodyText font-medium text-darkGrey max-w-[572px]">
          <span>
            We have a unique network and skillset to help bring your projects to
            life. Our small team of highly skilled individuals combined with our
            large network put us in a strong position to deliver exceptional
            results.
          </span>
          <span>
            Over the past 10 years, we have worked on all kinds of projects.
            From stations to high-rise buildings, we create spaces that inspire
            and delight.
          </span>
          <span>
            We work closely with our clients so that we understand the
            intricacies of each project. This allows us to work in harmony the
            surrounding area to create truly stunning projects that will stand
            the test of time.
          </span>
        </p>
      </div>
    </section>
  );
}

export default Welcome
import {heritageImg} from "../../assets/about"

const AboutInfo = () => {
  return (
    <section className="col-start-2 col-end-12 pt-20 pb-28 flex flex-col mdTab:py-52 lgLap:flex-row lgLap:items-center lgLap:gap-[124px]">
      <div className="grid gap-6 smTab:gap-16">
        <h3 className="text-lrgHeadingMob leading-lrgHeadingMob tracking-lrgMedHeadingMob font-bold smTab:text-medHeading max-w-[390px]">
          Our Heritage
        </h3>
        <p className="inline-flex flex-col gap-5 text-bodyText leading-bodyText font-medium text-darkGrey max-w-xl">
          <span>
            Founded in 2007, we started as a trio of architects. Our
            complimentary skills and relentless attention to detail turned Arch
            into one of the most sought after boutique firms in the country.
          </span>
          <span>
            Speciliazing in Urban Design allowed us to focus on creating
            exceptional structures that live in harmony with their surroundings.
            We consider every detail from every surrounding element to inform
            our designs.{" "}
          </span>
          <span>
            Our small team of world-class professionals provides input on every
            project.
          </span>
        </p>
      </div>
      <img
        className="hidden w-1/2 h-full object-cover max-h-[568px] lgLap:block"
        src={heritageImg}
        alt="Image of a project showcasing the companies quality and heritage"
      />
    </section>
  );
}

export default AboutInfo
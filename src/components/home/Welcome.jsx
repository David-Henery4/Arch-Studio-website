
const Welcome = () => {
  return (
    <section className="w-full col-start-2 col-end-12 pt-36 pb-28">
      <div className="grid gap-6">
        <h2 className="text-veryDarkBlue text-lrgHeadingMob leading-lrgHeadingMob tracking-lrgMedHeadingMob font-bold">Welcome to Arch Studio</h2>
        <p className="inline-flex flex-col justify-center items-start gap-5 text-bodyText leading-bodyText font-medium text-darkGrey">
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
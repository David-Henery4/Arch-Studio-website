
const SubPageHero = ({heading,title,text,imgs}) => {
  return (
    <section className="col-start-1 col-end-13 mdTab:col-start-2 mdTab:col-end-12 mdTab:grid mdTab:max-h-[740px] mdTab:grid-rows-subTab mdTab:grid-cols-subTab smLap:grid-cols-subDesk smLap:grid-rows-subDesk smLap:min-h-[600px]">
      <picture className="relative mdTab:col-start-1 mdTab:col-end-3 mdTab:row-start-1 mdTab:row-end-[13] smLap:row-start-1 smLap:row-end-3 smLap:col-start-1 smLap:col-end-3">
        <source media="(min-width: 56.25em)" srcSet={imgs?.desk} />
        <source media="(min-width: 39.06em)" srcSet={imgs?.tab} />
        <div className="absolute left-0 top-0 w-full h-full bg-black/40"></div>
        <img
          className="w-full object-cover mdTab:h-full"
          src={imgs?.mob}
          alt="Image showing representing the hero section of this page"
          srcSet={imgs?.mob}
        />
      </picture>
      <div className="bg-white w-full relative py-5 px-8 grid gap-5 justify-start mdTab:px-[60px] mdTab:pr-0 mdTab:pb-0 mdTab:justify-end mdTab:content-end mdTab:col-start-2 mdTab:col-end-4 mdTab:row-start-6 mdTab:row-end-[13] mdTab:gap-9 smLap:row-start-2 smLap:row-end-3">
        <div className="absolute h-11 w-11/12 bg-white -top-11 left-0 mdTab:hidden"></div>
        <h3 className="hidden absolute -top-20 right-0 text-veryLightGrey text-9xl font-bold leading-xtraLrgHeading -tracking-[3px] mdTab:block smLap:text-[175px] desk:text-[210px] XtraLgDesk:text-[250px]">
          {title}
        </h3>
        <h2 className="text-lrgHeadingMob leading-lrgHeadingMob -tracking-[1.2px] font-bold max-w-md smTab:text-medHeading smTab:leading-medHeading smTab:tracking-lrgMedHeading">
          {heading}
        </h2>
        <p className="text-bodyText leading-bodyText font-medium text-darkGrey max-w-md">
          {text}
        </p>
      </div>
    </section>
  );
}

export default SubPageHero
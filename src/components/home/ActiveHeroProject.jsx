import {PortfolioCTA} from "../../components"


const ActiveHeroProject = ({id,name,desc,img}) => {
  const {mob,tab,desk} = img
  return (
    <>
      <picture>
        <source srcSet={desk} media="(min-width: 56.25em)" />
        <source srcSet={tab} media="(min-width: 46.25em)" />
        <img
          className="absolute top-0 left-0
        w-full h-full object-cover"
          srcSet={mob}
          src={mob}
          alt="hero showing a company project"
        />
      </picture>
      <div className="relative z-20 h-full w-full flex flex-col justify-center items-start gap-20">
        <div className="grid gap-3 ">
          <h1 className="max-w-[455px] text-xtraLrgHeadingMob leading-xtraLrgHeadingMob tracking-xtraLrgHeadingMob font-semibold smTab:text-lrgHeading smTab:leading-lrgHeading smTab:tracking-lrgMedHeading">
            {name}
          </h1>
          <p className="text-bodyText leading-bodyText max-w-md font-medium">
            {desc}
          </p>
        </div>
        <PortfolioCTA />
      </div>
    </>
  );
}

export default ActiveHeroProject
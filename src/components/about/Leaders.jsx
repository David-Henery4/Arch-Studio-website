import leadersData from "../../miscData/leadersData";
import { LinkedInIcon, TwitterIcon } from "../../assets/icons";

const Leaders = () => {
  return (
    <section className="col-start-2 col-end-12 pb-28 flex flex-col justify-start items-start gap-14 smTab:gap-12 smLap:flex-row lap:gap-[140px]">
      <h3 className="text-lrgHeadingMob leading-lrgHeadingMob tracking-lrgMedHeadingMob font-bold max-w-[230px] smTab:text-medHeading smTab:max-w-[240px]">
        The Leaders
      </h3>
      <div className="grid gap-20 w-full lrgMob:grid-cols-2 lrgMob:gap-x-[11px] mdTab:gap-x-[30px]">
        {leadersData.map((leader) => {
          return (
            <div
              key={leader?.id}
              className="w-full grid gap-4 grid-rows-leadersCard"
            >
              <div className="relative group">
                <div className="hidden absolute top-0 left-0 w-full h-full bg-black/50 group-hover:block"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hidden justify-center items-center gap-8 group-hover:flex">
                  <TwitterIcon className="fill-white hover:cursor-pointer" />
                  <LinkedInIcon className="fill-white hover:cursor-pointer" />
                </div>
                <img
                  className="w-full object-cover"
                  src={leader?.img}
                  alt={`avatar of ${leader?.name}, who is one of the leaders of the comapny`}
                />
              </div>
              <div>
                <h4 className="text-smHeading leading-smHeading font-bold">
                  {leader?.name}
                </h4>
                <p className="text-bodyText leading-bodyText font-medium">
                  {leader?.role}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Leaders;

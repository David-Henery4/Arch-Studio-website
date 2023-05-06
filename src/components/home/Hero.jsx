import heroProjectData from "../../miscData/heroProjectData";
import { ActiveHeroProject } from "../../components";
import { useState } from "react";

const Hero = () => {
  const [activeProjectId, setActiveProjectId] = useState(1);
  const [activeProject, setActiveProject] = useState(heroProjectData[0]);
  //
  return (
    <section className="col-start-1 col-end-13 w-full min-h-[560px] p-8 relative text-white smTab:min-h-[720px] mdTab:col-start-2 mdTab:col-end-12 tab:p-14 desk:px-[190px]">
      <div className="absolute top-0 left-0 w-full h-full bg-[#000000] opacity-[.35] z-10"></div>
      <ActiveHeroProject {...activeProject} />
      <div className="hidden absolute bottom-0 -left-20 justify-center items-center z-40 lap:flex">
        {heroProjectData.map((pro, i) => {
          return (
            <div
              key={pro?.id}
              className={`w-20 h-20 grid place-items-center text-bodyText leading-[25px] font-bold hover:cursor-pointer ${
                activeProjectId === pro?.id
                  ? "bg-veryDarkBlue text-white"
                  : "bg-white text-mediumGrey hover:bg-veryLightGrey"
              }`}
              onClick={() => {
                setActiveProject(heroProjectData[i]);
                setActiveProjectId(pro?.id);
              }}
            >
              <p>0{pro?.id}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Hero;

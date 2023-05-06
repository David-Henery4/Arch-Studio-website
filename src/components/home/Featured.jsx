import featuredData from "../../miscData/featuredProjectsData";
import { AllProjectsBtn, ProjectsGallery } from "../../components";

const Featured = () => {
  return (
    <section className="w-full col-start-2 col-end-12 grid gap-11 py-[72px] tab:py-[200px] tab:gap-[85px] lap:gap-16">
      <div className="flex justify-between items-center">
        <h3 className="text-xtraLrgHeadingMob leading-lrgHeadingMob tracking-lrgMedHeadingMob font-bold smTab:text-medHeading smTab:leading-medHeading smTab:tracking-lrgMedHeading">
          Featured
        </h3>
        <AllProjectsBtn isMob={false} />
      </div>
      {/* THUMB CONTAINER */}
      <ProjectsGallery projects={featuredData} />
    </section>
  );
};

export default Featured;

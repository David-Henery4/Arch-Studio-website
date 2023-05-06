import {ProjectsGallery} from "../components"
import portfolioData from "../miscData/portfolioData"


const Portfolio = () => {
  return (
    <section className="col-start-2 col-end-12 py-[72px] tab:pb-[200px] tab:pt-0 lap:pb-[160px]">
      <ProjectsGallery projects={portfolioData} isPortfolio={true} />
    </section>
  );
}

export default Portfolio
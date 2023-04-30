import {
  paramourMobHeroImg,
  paramourTabHeroImg,
  paramourDeskHeroImg,
} from "../assets/home";

const Home = () => {
  return (
    <div className="col-start-2 col-end-12 pt-8 pb-[72px]">
      <section className="w-full">
        <picture>
          <source srcSet={paramourTabHeroImg} />
          <source srcSet={paramourDeskHeroImg} />
          <img
            srcSet={paramourMobHeroImg}
            src={paramourMobHeroImg}
            alt="hero showing a company project"
          />
        </picture>
      </section>
    </div>
  );
};

export default Home;

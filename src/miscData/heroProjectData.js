import {
  federalDeskHeroImg,
  federalMobHeroImg,
  federalTabHeroImg,
  //
  paramourDeskHeroImg,
  paramourMobHeroImg,
  paramourTabHeroImg,
  //
  seraphDeskHeroImg,
  seraphMobHeroImg,
  seraphTabHeroImg,
  //
  trinityDeskHeroImg,
  trinityMobHeroImg,
  trinityTabHeroImg
} from "../assets/home";

const heroProjectData = [
  {
    id: 1,
    name: "Project Paramour",
    desc: "Project made for an art museum near Southwest London. Project Paramour is a statement of bold, modern architecture.",
    img: {
      mob: paramourMobHeroImg,
      tab: paramourTabHeroImg,
      desk: paramourDeskHeroImg,
    },
  },
  {
    id: 2,
    name: "Seraph Station",
    desc: "The Seraph Station project challenged us to design a unique station that would transport people through time. The result is a fresh and futuristic model inspired by space stations.",
    img: {
      mob: seraphMobHeroImg,
      tab: seraphTabHeroImg,
      desk: seraphDeskHeroImg,
    },
  },
  {
    id: 3,
    name: "Federal II Tower",
    desc: "A sequel theme project for a tower originally built in the 1800s. We achieved this with a striking look of brutal minimalism with modern touches.",
    img: {
      mob: federalMobHeroImg,
      tab: federalTabHeroImg,
      desk: federalDeskHeroImg,
    },
  },
  {
    id: 4,
    name: "Trinity Bank Tower",
    desc: "Trinity Bank challenged us to make a concept for a 84 story building located in the middle of a city with a high earthquake frequency. For this project we used curves to blend design and stability to meet our objectives.",
    img: {
      mob: trinityMobHeroImg,
      tab: trinityTabHeroImg,
      desk: trinityDeskHeroImg,
    },
  },
];

export default heroProjectData;

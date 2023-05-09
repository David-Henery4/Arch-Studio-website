import { useState } from "react";
import {SubPageHero, AboutInfo, Leaders} from "../components"
import {aboutSubHeroData} from "../miscData/subHeroData";

const About = () => {
  const [aboutHeroData,setAboutHeroData] = useState(aboutSubHeroData)
  return (
    <>
      <SubPageHero {...aboutHeroData}/>
      <AboutInfo/>
      <Leaders/>
    </>
  )
}

export default About
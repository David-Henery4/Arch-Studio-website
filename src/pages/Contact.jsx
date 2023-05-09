import { useState } from "react"
import {SubPageHero} from "../components"
import {contactSubHeroData} from "../miscData/subHeroData"

const Contact = () => {
  const [contactData,setContact] = useState(contactSubHeroData)
  //
  return (
    <>
      <SubPageHero {...contactData}/>
      
    </>
  )
}

export default Contact
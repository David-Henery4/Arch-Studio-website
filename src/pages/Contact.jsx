import { useState } from "react"
import {SubPageHero, ContactDetails, Map} from "../components"
import {contactSubHeroData} from "../miscData/subHeroData"

// testing

const Contact = () => {
  const [contactData,setContact] = useState(contactSubHeroData)
  //
  return (
    <>
      <SubPageHero {...contactData}/>
      <ContactDetails/>
      <Map/>
    </>
  )
}

export default Contact
import { useState } from "react"
import {SubPageHero, ContactDetails, Map, ContactForm} from "../components"
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
      <ContactForm/>
    </>
  )
}

export default Contact
import { useState } from "react"
import {SubPageHero, ContactDetails} from "../components"
import {contactSubHeroData} from "../miscData/subHeroData"

const Contact = () => {
  const [contactData,setContact] = useState(contactSubHeroData)
  //
  return (
    <>
      <SubPageHero {...contactData}/>
      <ContactDetails/>
    </>
  )
}

export default Contact
import { useState } from "react"
import {SubPageHero, ContactDetails, Map, ContactForm} from "../components"
import {contactSubHeroData} from "../miscData/subHeroData"

// testing

const Contact = () => {
  const [contactData,setContact] = useState(contactSubHeroData)
  const [centerCoords, setCenterCoords] = useState([
    33.9394323155343, -89.97502623815191,
  ]);
  const [activeZoomLevel,setActiveZoomLevel] = useState(5)
  //
  return (
    <>
      <SubPageHero {...contactData} />
      <ContactDetails
        setCenterCoords={setCenterCoords}
        setActiveZoomLevel={setActiveZoomLevel}
      />
      <Map
        centerCoords={centerCoords}
        activeZoomLevel={activeZoomLevel}
      />
      <ContactForm />
    </>
  );
}

export default Contact
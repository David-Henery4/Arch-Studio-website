import { aboutHeroDesk, aboutHeroMob, aboutHeroTab } from "../assets/about";
import {contactHeroDesk, contactHeroMob, contactHeroTab} from "../assets/contact";

const aboutSubHeroData = {
  id: 4497,
  heading: "Your team of professionals",
  title: "About",
  text: "Our small team of world-class professionals will work with you every step of the way. Strong relationships are at the core of everything we do. This extends to the relationship our projects have with their surroundings.",
  imgs: {
    mob: aboutHeroMob,
    tab: aboutHeroTab,
    desk: aboutHeroDesk,
  },
};
//
const contactSubHeroData = {
  id: 4498,
  heading: "Tell us about your project",
  title: "Contact",
  text: "We’d love to hear more about your project. Please, leave a message below or give us a call. We have two offices, one in Texas and one in Tennessee. If you find yourself nearby, come say hello!",
  imgs: {
    mob: contactHeroMob,
    tab: contactHeroTab,
    desk: contactHeroDesk,
  },
};

export { aboutSubHeroData, contactSubHeroData };

import {projectDelSolDesk, projectDelSolMob, projectDelSolTab, projectPrototypeDesk, projectPrototypeMob, projectPrototypeTab, project228bDesk, project228bMob, project228bTab} from "../assets/portfolio";

const featuredProjectsData = [
  {
    id: 1,
    name: "Project Del Sol",
    label: "View All Projects",
    image: {
      mob: projectDelSolMob,
      tab: projectDelSolTab,
      desk: projectDelSolDesk,
    },
  },
  {
    id: 2,
    name: "228B Tower",
    label: "View All Projects",
    image: {
      mob: project228bMob,
      tab: project228bTab,
      desk: project228bDesk,
    },
  },
  {
    id: 3,
    name: "Le Prototype",
    label: "View All Projects",
    image: {
      mob: projectPrototypeMob,
      tab: projectPrototypeTab,
      desk: projectPrototypeDesk,
    },
  },
];

export default featuredProjectsData
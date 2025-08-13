"use strict";

type Project = {
  title: string;
  technologies: string[];
  description: string;
  images: string[];
  github: string;
  link: string;
};

// Define the projects array with type annotations
type Projects = Project[];

                     

let projects: Projects = [
  {
    title: "The Abduction Game",
    technologies: ["JavaScript", "HTML5 Canvas", "CSS3"],
    description:
      "A fast-paced browser game where you pilot a UFO and abduct creatures while dodging obstacles. Includes audio feedback, difficulty progression, and multilingual support.",
    images: [
      "https://github.com/hugolomba/abduction-game/raw/master/img/README-images/demo-img.png",
      "https://raw.githubusercontent.com/hugolomba/abduction-game/master/img/README-images/keys.png",
      "https://raw.githubusercontent.com/hugolomba/abduction-game/master/img/README-images/demo.gif",
    ],
    github: "https://github.com/hugolomba/abduction-game",
    link: "https://hugolomba.github.io/abduction-game/",
  },
  {
    title: "The Solar System",
    technologies: ["React", "NASA API", "API Solar System"],
    description:
      "A responsive React app that provides information about planets in the solar system. Features age/weight calculations and dynamic image galleries from NASA's API.",
    images: [
      "https://github.com/hugolomba/the-solar-system/raw/master/src/img/print.gif",
    ],
    github: "https://github.com/hugolomba/the-solar-system",
    link: "https://the-solarsystem.netlify.app/",
  },
  {
    title: "Catalog",
    technologies: ["React", "Node.js", "MongoDB", "Express", "MUI", "Axios"],
    description:
      "A full-stack app where companies can register, list products/services, and manage offers. Users can also register and browse services.",
    images: [
      "https://github.com/hugolomba/final-project-frontend/blob/main/src/img/banner.gif?raw=true",
      "https://raw.githubusercontent.com/hugolomba/final-project-frontend/main/src/img/mobile1.png",
      "https://raw.githubusercontent.com/hugolomba/final-project-frontend/main/src/img/mobilegif.gif",
      "https://raw.githubusercontent.com/hugolomba/final-project-frontend/main/src/img/home.png",
    ],
    github: "https://github.com/hugolomba/final-project-frontend",
    link: "https://catalog.hugomiranda.me/",
  },
  {
    title: "Bankist App",
    technologies: ["JavaScript", "HTML", "CSS"],
    description:
      "A fictional online banking app that simulates transfers, loans, account summary, and logout timer.",
    images: [
      "https://github.com/hugolomba/bankist-app/raw/main/images/screenshot.png",
    ], // adicione um screenshot se desejar
    github: "https://github.com/hugolomba/bankist-app",
    link: "https://hugolomba.github.io/bankist-app/",
  },
    {
    title: "The Abduction Game",
    technologies: ["JavaScript", "HTML5 Canvas", "CSS3"],
    description:
      "A fast-paced browser game where you pilot a UFO and abduct creatures while dodging obstacles. Includes audio feedback, difficulty progression, and multilingual support.",
    images: [
      "https://github.com/hugolomba/abduction-game/raw/master/img/README-images/demo-img.png",
      "https://raw.githubusercontent.com/hugolomba/abduction-game/master/img/README-images/keys.png",
      "https://raw.githubusercontent.com/hugolomba/abduction-game/master/img/README-images/demo.gif",
    ],
    github: "https://github.com/hugolomba/abduction-game",
    link: "https://hugolomba.github.io/abduction-game/",
  },
  {
    title: "The Solar System",
    technologies: ["React", "NASA API", "API Solar System"],
    description:
      "A responsive React app that provides information about planets in the solar system. Features age/weight calculations and dynamic image galleries from NASA's API.",
    images: [
      "https://github.com/hugolomba/the-solar-system/raw/master/src/img/print.gif",
    ],
    github: "https://github.com/hugolomba/the-solar-system",
    link: "https://the-solarsystem.netlify.app/",
  },
  {
    title: "Catalog",
    technologies: ["React", "Node.js", "MongoDB", "Express", "MUI", "Axios"],
    description:
      "A full-stack app where companies can register, list products/services, and manage offers. Users can also register and browse services.",
    images: [
      "https://github.com/hugolomba/final-project-frontend/blob/main/src/img/banner.gif?raw=true",
      "https://raw.githubusercontent.com/hugolomba/final-project-frontend/main/src/img/mobile1.png",
      "https://raw.githubusercontent.com/hugolomba/final-project-frontend/main/src/img/mobilegif.gif",
      "https://raw.githubusercontent.com/hugolomba/final-project-frontend/main/src/img/home.png",
    ],
    github: "https://github.com/hugolomba/final-project-frontend",
    link: "https://catalog.hugomiranda.me/",
  },
  {
    title: "Bankist App",
    technologies: ["JavaScript", "HTML", "CSS"],
    description:
      "A fictional online banking app that simulates transfers, loans, account summary, and logout timer.",
    images: [
      "https://github.com/hugolomba/bankist-app/raw/main/images/screenshot.png",
    ], // adicione um screenshot se desejar
    github: "https://github.com/hugolomba/bankist-app",
    link: "https://hugolomba.github.io/bankist-app/",
  },
];

export default projects;
"use strict";

type Project = {
  id: string;
  title: string;
  technologies: string[];
  shortDescription: string;
  longDescription: string;
  images: string[];
  github: string;
  link: string;
};


type Projects = Project[];

                     

let projects: Projects = [
  {
    id: "1",
    title: "The Abduction Game",
    technologies: ["JavaScript", "HTML5 Canvas", "CSS3"],
    shortDescription:
      "A fast-paced browser game where you pilot a UFO and abduct creatures while dodging obstacles. Includes audio feedback, difficulty progression, and multilingual support.",
    longDescription: `

Take control of a UFO and embark on a fast-paced mission to abduct creatures while dodging obstacles in this browser-based arcade game.

## Features
- **Audio Feedback**: Immersive sound effects enhance the gameplay experience.
- **Difficulty Progression**: Levels become more challenging as you advance.
- **Multilingual Support**: Play the game in multiple languages for a broader reach.
`,
    images: [
      "https://github.com/hugolomba/abduction-game/raw/master/img/README-images/demo-img.png",
      "https://raw.githubusercontent.com/hugolomba/abduction-game/master/img/README-images/keys.png",
      "https://raw.githubusercontent.com/hugolomba/abduction-game/master/img/README-images/demo.gif",
    ],
    github: "https://github.com/hugolomba/abduction-game",
    link: "https://hugolomba.github.io/abduction-game/",
  },
  {
    id: "6",
    title: "The Solar System",
    technologies: ["React", "NASA API", "API Solar System"],
    shortDescription:
      "A responsive React app that provides information about planets in the solar system. Features age/weight calculations and dynamic image galleries from NASA's API.",
    longDescription:
      `

**The Solar System** is an interactive React application I built to practice and improve my skills in working with APIs. I chose this theme because space has always fascinated me, and combining something I enjoy with learning made the development process much more engaging.

In addition to the frontend, I also developed the **Solar System API**: a simple RESTful API that provides information about celestial objects such as planets, dwarf planets, asteroids, and galaxies. The API is built with **Node.js** and **Express**, and it powers the data used in this app.

## Features

- Detailed information about all the planets in our solar system, including the Sun and Pluto.
- Fun interactions to calculate your **weight** and **age** on each planet based on gravity and orbital period values from the **Solar System API**.
- Dynamic image gallery integrated with the **NASA Image and Video Library** for an immersive visual experience.
- Fully responsive design that adapts seamlessly to different screen sizes.

This project demonstrates my ability to **consume and build real-world APIs with React and Node.js**, transform data into interactive features, and create **user-friendly interfaces** that combine learning with exploration.`,
    images: [
      "https://github.com/hugolomba/the-solar-system/raw/master/src/img/print.gif",
    ],
    github: "https://github.com/hugolomba/the-solar-system",
    link: "https://the-solarsystem.netlify.app/",
  },
  {
    id: "7",
    title: "Catalog",
    technologies: ["React", "Node.js", "MongoDB", "Express", "MUI", "Axios"],
    shortDescription:
      "A full-stack app where companies can register, list products/services, and manage offers. Users can also register and browse services.",
    longDescription:
      `

Catalog is a full-stack application designed for companies and users to seamlessly connect. Companies can register, list their products or services, and manage special offers, while users can sign up to browse and discover available services.

## Features
- **Company Registration**: Businesses can create an account and manage their profile.
- **Product/Service Listing**: Companies can add, edit, or remove products and services.
- **Offers Management**: Create and manage special offers to attract customers.
- **Responsive Design**: Optimized for both desktop and mobile devices.
`,
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
    id: "8",
    title: "Bankist App",
    technologies: ["JavaScript", "HTML", "CSS"],
    shortDescription:
      "A fictional online banking app that simulates transfers, loans, account summary, and logout timer.",
    longDescription:
      `

Bankist is a fictional online banking application that simulates essential banking features in a user-friendly interface.

## Features
- **Simulated Transfers**: Transfer funds between accounts.
- **Loans**: Request and receive simulated loans.
- **Account Summary**: View your transaction history and account balance.
- **Logout Timer**: Automatic logout for enhanced security.
`,
    images: [
      "https://github.com/hugolomba/bankist-app/raw/main/images/screenshot.png",
    ],
    github: "https://github.com/hugolomba/bankist-app",
    link: "https://hugolomba.github.io/bankist-app/",
  },
];

export default projects;
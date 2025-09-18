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
  title: "The Solar System 2",
  technologies: ["React", "TypeScript", "Tailwind CSS"],
  shortDescription:
    "An interactive project displaying information about celestial bodies in the solar system. Fully developed from scratch with a custom API and interactive animations.",
  longDescription: `

**The Solar System 2** is an interactive full-stack project I rebuilt to enhance my skills in React, TypeScript, and full-stack development. The project displays information about celestial bodies including planets, dwarf planets, asteroids, and galaxies. I focused on creating a custom API, improving the design, and adding interactive animations to make the project more complete.

## Features
- **List of Celestial Bodies**: Browse a comprehensive list of planets, dwarf planets, asteroids, and galaxies.
- **Custom API**: Backend built with Node.js, Express, and TypeScript providing data about celestial bodies.
- **Interactive Frontend**: Developed with React, TypeScript, and Tailwind CSS for a responsive and engaging user experience.
`,
  images: [
    "https://res.cloudinary.com/dck0d5qwp/image/upload/v1758065239/Screenshot_2025-09-17_at_00.24.58_lu1elj.png",
    "https://res.cloudinary.com/dck0d5qwp/image/upload/v1758062560/Screenshot_2025-09-16_at_23.42.06_makbgr.png",
    "https://res.cloudinary.com/dck0d5qwp/image/upload/v1758062560/Screenshot_2025-09-16_at_23.42.20_tujg1y.png",
    "https://res.cloudinary.com/dck0d5qwp/image/upload/v1758062560/Screenshot_2025-09-16_at_23.42.13_jfckcx.png"
  ],
  github: "https://github.com/hugolomba/the-solar-system-2",
  link: "https://the-solarsystem.netlify.app/",
},
{
  id: "2",
  title: "React Blog",
  technologies: [
    "React",
    "Tailwind CSS",
    "TinyMCE",
    "Axios"
  ],
  shortDescription:
    "A full-featured blog built with React and Tailwind CSS. Users can read, like, save, and comment on posts, and signed-up users can create, edit, or delete their own posts.",
  longDescription: `

**React Blog** is a blog application developed with React and Tailwind CSS. It allows users to read posts, like and save their favourites, and join discussions by commenting. Registered users can create their own posts, edit them, or delete them.

The backend API handles data storage and retrieval, providing a smooth full-stack experience.

## Features
- **User Interaction**: Read, like, save, and comment on posts.
- **Post Management**: Registered users can create, edit, and delete posts.
- **Rich Text Editing**: Using TinyMCE and Quill for an enhanced writing experience.
- **Modern Frontend**: Built with React 19, Tailwind CSS, and DaisyUI for styling.
- **Routing and Data Management**: React Router for navigation and React Query for data fetching and state management.
- **HTTP Requests**: Managed with Axios for API communication.
`,
  images: [
    "https://res.cloudinary.com/dck0d5qwp/image/upload/v1758222018/Screenshot_2025-09-18_at_19.58.01_iqrr1z.png",
    "https://res.cloudinary.com/dck0d5qwp/image/upload/v1758222727/Screenshot_2025-09-18_at_20.11.18_i1vc4w.png",
    "https://res.cloudinary.com/dck0d5qwp/image/upload/v1758222728/Screenshot_2025-09-18_at_20.10.50_sd4nnx.png",
    "https://res.cloudinary.com/dck0d5qwp/image/upload/v1758222727/Screenshot_2025-09-18_at_20.11.37_wiw0zp.png"
  ],
  github: "https://github.com/hugolomba/blog",
  link: "https://react-blog-example.netlify.app/",
},
{
  id: "3",
  title: "Weather App",
  technologies: ["HTML5", "CSS3", "JavaScript (ES6)", "Visual Crossing Weather API"],
  shortDescription:
    "A responsive weather web app that displays current weather based on geolocation or city search, with search history and dynamic interactions.",
  longDescription: `

**Weather App** is a responsive web application powered by the Visual Crossing Weather API. Users can view the current weather for their location or search for any city worldwide. The app features dynamic content updates, responsive design, and interactive elements to improve user experience.

## Features
- **Automatic Geolocation**: Displays weather automatically based on user's location.
- **City Search**: Fetch live weather data for any city.
- **Local Time Display**: Shows time based on the selected city's timezone.
- **Search History**: Saves and displays previous searches, with clickable items to reload weather data.
- **Highlight Last Search**: The most recent search is automatically highlighted.
- **Responsive Design**: Built with Flexbox and media queries for mobile and desktop.
- **Dynamic Interactions**: Handles user events, conditional styling, form validation, and DOM updates.
`,
  images: [
    "https://github.com/hugolomba/weather-app/raw/main/assets/screenshot.jpeg"
  ],
  github: "https://github.com/hugolomba/weather-app",
  link: "https://weather-app.hugo-miranda.dev",
},

{
  id: "4",
  title: "Blog API",
  technologies: [
    "Node.js 18+",
    "Express 5",
    "Prisma",
    "PostgreSQL",
    "JWT",
    "Multer",
    "Cloudinary",
    "Joi",
    "bcrypt/bcryptjs"
  ],
  shortDescription:
    "A full-featured blog API built with Node.js, Express, and Prisma, supporting JWT authentication, image uploads, data validation, and endpoints for users, posts, and comments.",
  longDescription: `

**Blog API** is a backend application built with Node.js, Express, and Prisma. It provides all necessary endpoints for managing users, posts, and comments in a blog application. The API supports JWT authentication, image upload using Multer + Cloudinary, data validation with Joi, and password hashing with bcrypt/bcryptjs.

## Features
- **Authentication**: JWT-based login and registration with optional avatar upload.
- **User Management**: CRUD operations for users, password changes, profile editing, and admin-only routes.
- **Post Management**: Create, edit, delete, like, save, and search posts with optional cover images.
- **Comment Management**: CRUD operations for comments and ability to like comments.
- **Validation & Security**: Input validation with Joi, password hashing, and protected routes with JWT.
- **Error Handling**: Centralized error handling with JSON responses for unknown routes and errors.
`,
  images: [],
  github: "https://github.com/hugolomba/blog-api",
  link: "https://blog-y5wb.onrender.com",
},
{
  id: "5",
  title: "Solar System API",
  technologies: ["Node.js", "Express"],
  shortDescription:
    "A simple RESTful API providing information about celestial objects such as planets, dwarf planets, asteroids, and galaxies.",
  longDescription: `

**Solar System API** is a RESTful backend application built with Node.js and Express. It provides endpoints to retrieve detailed information about celestial objects including planets, dwarf planets, asteroids, stars, and galaxies.

## Available Routes
- **GET /**: Welcome message and available routes
- **GET /all**: Retrieve the complete dataset
- **GET /planets**: List all planets
- **GET /planets/:name**: Get detailed information about a specific planet
- **GET /stars/**: Get all stars
- **GET /stars/:name**: Get detailed information about a specific star
- **GET /dwarf-planets**: List all dwarf planets
- **GET /dwarf-planets/:name**: Get detailed information about a specific dwarf planet
- **GET /planets-and-dwarfs**: List all planets and dwarf planets together
- **GET /asteroids**: List all asteroids
- **GET /galaxies**: List all galaxies
- **GET /find/:tag**: Search for objects by tag (supports partial search)
`,
  images: [],
  github: "https://github.com/hugolomba/solar-system-api",
  link: "https://solar-system-api-hepy.onrender.com",
},
{
  id: "6",
  title: "Dublin Pub Inventory",
  technologies: ["Node.js", "Express", "PostgreSQL", "EJS", "CSS"],
  shortDescription:
    "A personal project to manage a complete inventory of Dublin pubs, including drinks and events, with secure admin authentication for destructive actions.",
  longDescription: `

**Dublin Pub Inventory** is a full-stack project designed to practice backend and frontend development. Users can browse, search, create, and delete records of pubs, drinks, and events, with admin authentication required for destructive actions.

## Key Features
- **Backend**: PostgreSQL database with multiple related tables (pubs, drinks, events, categories) and foreign key constraints.
- **API and Routing**: RESTful routes for CRUD operations, search functionality, and secure deletion with admin authentication.
- **Templating and Views**: Dynamic views built with EJS for listing, creating, updating, and viewing pub details.
- **Frontend and UX**: Styled with CSS, responsive layouts, a navbar, and interactive elements for a user-friendly experience.
- **Data Management**: Seed scripts populate the database with realistic Dublin pub data for testing and demonstration.
`,
  images: [
    "https://github.com/hugolomba/dublin-pub-inventory/raw/main/public/images/screenshot.png",
    "https://github.com/hugolomba/dublin-pub-inventory/raw/main/public/images/screenshot.png",
    "https://github.com/hugolomba/dublin-pub-inventory/raw/main/public/images/screenshot.png"
  ],
  github: "https://github.com/hugolomba/dublin-pub-inventory",
  link: "https://dublin-pub-inventory-example.netlify.app/",
}, 
{
  id: "7",
  title: "Bankist App",
  technologies: ["HTML5", "CSS3", "JavaScript (ES6+)"],
  shortDescription:
    "A fictional digital banking app built with JavaScript, simulating real-world operations like login, transfers, loans, and account management.",
  longDescription: `

**Bankist App** is a fictional online banking application developed to practise modern JavaScript concepts. It simulates real-world banking operations while showcasing array methods, DOM manipulation, and event handling.

## Features
- **Login**: Authenticate using username and PIN.
- **Dynamic UI**: Balance, transactions, and summaries update based on user actions.
- **Transfers**: Money transfers between accounts with validation.
- **Loans**: Eligibility-checked loan requests.
- **Account Closure**: Secure account deletion with username and PIN.
- **Financial Summary**: Overview of incomes, expenses, and interest.
- **Sorting**: Transactions sorted in ascending or descending order.
- **Logout Timer**: Automatic logout for security (in progress).

## Technologies and Skills Demonstrated
- **HTML & CSS**: Semantic structure, responsive layout, and styled UI with navigation and operation sections.
- **JavaScript (ES6+)**: DOM manipulation, event handling, array methods (*map, filter, reduce, find, some, every, sort*), modular helper functions, form validation, and dynamic username generation.
- **Business Logic**: Realistic constraints for transfers, loans, and account closures tied to user input and balance.
`,
  images: [
    "https://github.com/hugolomba/bankist-app/raw/main/images/screenshot.png"
  ],
  github: "https://github.com/hugolomba/bankist-app",
  link: "https://bankist-app.hugo-miranda.dev",
},
{
  id: "8",
  title: "Bankist Website",
  technologies: ["HTML5", "CSS3", "JavaScript (ES6+)", "Intersection Observer API"],
  shortDescription:
    "A modern and responsive banking landing page built with HTML, CSS, and JavaScript, featuring smooth animations, lazy loading, and interactive components.",
  longDescription: `

**Bankist Website** is a modern, responsive, and interactive landing page simulating a real-world financial product. Built as part of an advanced JavaScript course, it demonstrates DOM manipulation, event handling, and performance-focused techniques to enhance user experience.

## Features
- **Smooth Navigation**: Scroll-based navigation with sticky header.
- **Tabbed Component**: Switch between sections seamlessly.
- **Section Reveal**: Animated reveal on scroll for dynamic interaction.
- **Lazy Loading**: Optimised image loading for performance.
- **Modal Form**: Interactive modal to simulate account opening.
- **Content Slider**: Fully functional slider with arrows, dots, and keyboard support.

## What I Learned & Applied
- **JavaScript (ES6+)**: DOM manipulation, event handling, delegation, bubbling, capturing, and modular reusable code.
- **Intersection Observer API**: Implemented for sticky navigation, lazy loading, and reveal animations.
- **HTML & CSS**: Semantic structure, responsive design with Flexbox and Grid, CSS custom properties, transitions, and animations.

This project highlights practical application of modern JavaScript patterns with a strong focus on clean UI, UX, and performance.
`,
  images: [
    "https://github.com/hugolomba/bankist-website/raw/main/img/screenshot1.png",
    "https://github.com/hugolomba/bankist-website/raw/main/img/screenshot2.png"
  ],
  github: "https://github.com/hugolomba/bankist-website",
  link: "https://bankist-website.hugo-miranda.dev",
},

  {
    id: "6",
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
//   {
//     id: "6",
//     title: "The Solar System",
//     technologies: ["React", "NASA API", "API Solar System"],
//     shortDescription:
//       "A responsive React app that provides information about planets in the solar system. Features age/weight calculations and dynamic image galleries from NASA's API.",
//     longDescription:
//       `

// **The Solar System** is an interactive React application I built to practice and improve my skills in working with APIs. I chose this theme because space has always fascinated me, and combining something I enjoy with learning made the development process much more engaging.

// In addition to the frontend, I also developed the **Solar System API**: a simple RESTful API that provides information about celestial objects such as planets, dwarf planets, asteroids, and galaxies. The API is built with **Node.js** and **Express**, and it powers the data used in this app.

// ## Features

// - Detailed information about all the planets in our solar system, including the Sun and Pluto.
// - Fun interactions to calculate your **weight** and **age** on each planet based on gravity and orbital period values from the **Solar System API**.
// - Dynamic image gallery integrated with the **NASA Image and Video Library** for an immersive visual experience.
// - Fully responsive design that adapts seamlessly to different screen sizes.

// This project demonstrates my ability to **consume and build real-world APIs with React and Node.js**, transform data into interactive features, and create **user-friendly interfaces** that combine learning with exploration.`,
//     images: [
//       "https://github.com/hugolomba/the-solar-system/raw/master/src/img/print.gif",
//     ],
//     github: "https://github.com/hugolomba/the-solar-system",
//     link: "https://the-solarsystem.netlify.app/",
//   },
//   {
//     id: "7",
//     title: "Catalog",
//     technologies: ["React", "Node.js", "MongoDB", "Express", "MUI", "Axios"],
//     shortDescription:
//       "A full-stack app where companies can register, list products/services, and manage offers. Users can also register and browse services.",
//     longDescription:
//       `

// Catalog is a full-stack application designed for companies and users to seamlessly connect. Companies can register, list their products or services, and manage special offers, while users can sign up to browse and discover available services.

// ## Features
// - **Company Registration**: Businesses can create an account and manage their profile.
// - **Product/Service Listing**: Companies can add, edit, or remove products and services.
// - **Offers Management**: Create and manage special offers to attract customers.
// - **Responsive Design**: Optimized for both desktop and mobile devices.
// `,
//     images: [
//       "https://github.com/hugolomba/final-project-frontend/blob/main/src/img/banner.gif?raw=true",
//       "https://raw.githubusercontent.com/hugolomba/final-project-frontend/main/src/img/mobile1.png",
//       "https://raw.githubusercontent.com/hugolomba/final-project-frontend/main/src/img/mobilegif.gif",
//       "https://raw.githubusercontent.com/hugolomba/final-project-frontend/main/src/img/home.png",
//     ],
//     github: "https://github.com/hugolomba/final-project-frontend",
//     link: "https://catalog.hugomiranda.me/",
//   },
//   {
//     id: "8",
//     title: "Bankist App",
//     technologies: ["JavaScript", "HTML", "CSS"],
//     shortDescription:
//       "A fictional online banking app that simulates transfers, loans, account summary, and logout timer.",
//     longDescription:
//       `

// Bankist is a fictional online banking application that simulates essential banking features in a user-friendly interface.

// ## Features
// - **Simulated Transfers**: Transfer funds between accounts.
// - **Loans**: Request and receive simulated loans.
// - **Account Summary**: View your transaction history and account balance.
// - **Logout Timer**: Automatic logout for enhanced security.
// `,
//     images: [
//       "https://github.com/hugolomba/bankist-app/raw/main/images/screenshot.png",
//     ],
//     github: "https://github.com/hugolomba/bankist-app",
//     link: "https://hugolomba.github.io/bankist-app/",
//   },
];

export default projects;
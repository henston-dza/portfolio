import svg from "./svg";
import CulinaryDelights from "../Assets/Projects/culinarydelights.png";
import SwatchhCity from "../Assets/Projects/SwatchhCity.png";
import portfolio from "../Assets/Projects/Portfolio.png";
import TradeLegends from "../Assets/Projects/tradelegends.png";
import nexora from "../Assets/Projects/QA.png"
import olavinahalli from "../Assets/Projects/olavinahalli.png"


const Projects = [
  {
    Id: 1,
    Title: "Olavinahalli",
    Description:
      "A full-stack community website developed for Olavina Halli to showcase its mission, history, activities, residents, and social impact. The platform provides an engaging digital presence for the organization while featuring galleries, events, and updates, along with an admin panel for managing website content and uploading photos.",
    oneLineDescription:
      "A full-stack community website developed for Olavina Halli to showcase its mission, history, activities, residents, and social impact.",
    Icon: [
      {
        id: 1,
        name: "React",
        purpose: "Frontend UI library",
        image: svg.react,
      },
      {
        id: 2,
        name: "PHP",
        purpose: "Backend language",
        image: svg.php,
      },
      {
        id: 3,
        name: "MySQL",
        purpose: "Relational Database",
        image: svg.mysql,
      },
      {
        id: 4,
        name: "XAMPP",
        purpose: "Local server environment",
        image: svg.xampp,
      },
      {
        id: 5,
        name: "Hostinger",
        purpose: "Web hosting platform",
        image: svg.hostinger,
      },
    ],
    Image: olavinahalli,
    DemoLink: "https://www.olavinahalli.com/",
    ProjectLink: "",
  },
  {
    Id: 2,
    Title: "Nexora-QA",
    Description:
      "An AI-powered software testing platform that automatically analyzes web applications, generates relevant test cases, executes functional and security tests using browser automation, and collects screenshots and test evidence. Built with FastAPI, React, Playwright, and AI-driven test planning to simplify the QA process and provide clear testing reports through a centralized dashboard.",
    oneLineDescription:
      "A comprehensive AI-powered test case management platform designed for quality assurance teams.",
    Icon: [
      {
        id: 1,
        name: "Python",
        purpose: "Programming language",
        image: svg.python,
      },
      {
        id: 2,
        name: "FastAPI",
        purpose: "Backend framework",
        image: svg.fastapi,
      },
      {
        id: 3,
        name: "React",
        purpose: "Frontend UI library",
        image: svg.react,
      },
      {
        id: 4,
        name: "Playwright",
        purpose: "Browser automation",
        image: svg.playwright,
      },
      {
        id: 5,
        name: "SQLite",
        purpose: "Database",
        image: svg.sqlite,
      },
      {
        id: 6,
        name: "OpenAI API",
        purpose: "AI capabilities",
        image: svg.openai,
      },
    ],
    Image: nexora,
    DemoLink: " /",
    ProjectLink: "https://github.com/henston-dza/Culinary-Delights",
  },
  {
    Id: 3,
    Title: "Swatchh City",
    Description:
      "SwatchhCity is a web and mobile platform that empowers citizens to report waste problems and incentivizes sustainable practices. The system leverages AI to categorize waste, forecast trends, and provide real-time insights to both citizens and city officials.",
    oneLineDescription:
      "A waste management system that helps to manage waste in a safe and efficient way.",
    Icon: [
      {
        id: 1,
        name: "Javascript",
        purpose: "Programming language",
        image: svg.javascript,
      },
      {
        id: 2,
        name: "React.js",
        purpose: "UI library",
        image: svg.react,
      },
      {
        id: 3,
        name: "Gemini API",
        purpose: "AI capabilities",
        image: svg.gemini,
      },
      {
        id: 4,
        name: "Firebase",
        purpose: "Backend as a Service",
        image: svg.firebase,
      },
      {
        id: 5,
        name: "MongoDB",
        purpose: "NoSQL Database",
        image: svg.mongodb,
      },
      {
        id: 6,
        name: "Tailwind CSS",
        purpose: "Utility-first CSS framework",
        image: svg.tailwind,
      },
    ],
    Image: SwatchhCity,
    DemoLink: " ",
    ProjectLink: "https://github.com/henston-dza/swatchhcity",
  },

  {
    Id: 4,
    Title: "Culinary-Delights",
    Description:
      "A modern full-stack restaurant web application that combines an elegant user experience with secure backend functionality. The platform allows users to explore menus, create personalized culinary plans, register/login securely, and make table reservations with booking history tracking.",
    oneLineDescription:
      "A modern full-stack restaurant web application that combines an elegant user experience with secure backend functionality.",
    Icon: [
      {
        id: 1,
        name: "Vanilla JavaScript",
        purpose: "Programming language",
        image: svg.javascript,
      },
      {
        id: 2,
        name: "Bootstrap 5",
        purpose: "CSS framework",
        image: svg.bootstrap,
      },
      {
        id: 3,
        name: "Express.js",
        purpose: "Backend framework",
        image: svg.express,
      },
      {
        id: 4,
        name: "MongoDB",
        purpose: "NoSQL Database",
        image: svg.mongodb,
      },
      {
        id: 5,
        name: "JWT Authentication",
        purpose: "Security token",
        image: svg.jwt,
      },
    ],
    Image: CulinaryDelights,
    DemoLink: " /",
    ProjectLink: "https://github.com/henston-dza/Culinary-Delights",
  },
  {
    Id: 5,
    Title: "Portfolio",
    Description:
      "Next Level Portfolio is a modern web portfolio crafted using Next.js, featuring a sleek design and interactive elements to highlight professional skills and showcase various projects.",
    oneLineDescription:
      "A stylish and interactive portfolio website built with Next.js showcasing skills and projects.",
    Icon: [
      {
        id: 1,
        name: "Nextjs",
        purpose: "Superset of React",
        image: svg.nextJs,
      },
      {
        id: 2,
        name: "Typescript",
        purpose: "Superset of JavaScript",
        image: svg.typeScript,
      },
      {
        id: 3,
        name: "Tailwind CSS",
        purpose: "Utility-first CSS framework",
        image: svg.tailwind,
      },
      {
        id: 4,
        name: "Javascript",
        purpose: "Programming language",
        image: svg.javascript,
      },
      {
        id: 5,
        name: "Framer Motion",
        purpose: "Production-ready motion library",
        image: svg.framer,
      },
      {
        id: 6,
        name: "Html",
        purpose: "Markup language",
        image: svg.html,
      },
      {
        id: 7,
        name: "css",
        purpose: "Styling language",
        image: svg.css,
      },
    ],
    Image: portfolio,
    DemoLink: "https://henston-dza.vercel.app/",
    ProjectLink: "https://github.com/henston-dza/portfolio",
  },
  {
    Id: 5,
    Title: "Trade-Legends",
    Description:
      "A gamified virtual trading platform for students that simulates real-world market trading in a competitive league-based environment. The goal is to help students learn trading, risk management, and market behavior through hands-on experience — without real money.",
    oneLineDescription: "Gamified virtual trading platform for students.",
    Icon: [
      {
        id: 1,
        name: "React.js",
        purpose: "Web application",
        image: svg.react,
      },
      {
        id: 2,
        name: "React Native",
        purpose: "Mobile application",
        image: svg.react,
      },
      {
        id: 3,
        name: "FastAPI",
        purpose: "Backend/API layer",
        image: svg.fastapi,
      },
      {
        id: 4,
        name: "PostgreSQL",
        purpose: "Database",
        image: svg.postgresql,
      },
      {
        id: 5,
        name: "WebSockets",
        purpose: "Real-time trading updates",
        image: svg.websockets,
      },
    ],
    Image: TradeLegends,
    DemoLink: " ",
    ProjectLink: "https://github.com/henston-dza/Student-trading-league",
  }
];

export default Projects;

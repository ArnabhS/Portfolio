
import music from "@/public/music.png";
import fluxion from "@/public/fluxion.png";
import medmi from "@/public/medmi.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
 
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;


export const projectsData = [
  {
    title: "Music School Website",
    description:
      "This website offers a user-friendly experience for both prospective students and music enthusiasts. Visitors can explore the various instruments offered, browse class schedules, and learn about the talented faculty.",
    tags: ["React", "Next.js", "Tailwind" ],
    imageUrl: music ,
  },
  {
    title: "Fluxion",
    description:
      "Fluxion is an online platform designed to streamline drainage complaints, providing users with a convenient way to report and address drainage issues in their communities. Our platform is built with efficiency and user-friendliness in mind, utilizing Vite for the frontend, MongoDB for the database, and Node.js for the backend.",
    tags: ["React.js", "Node.js","Express.js", "Tailwind", "MongoDB"],
    imageUrl: fluxion,
  },
  {
    title: "MediMind-AI",
    description:
      "This platform is dedicated to providing users with accurate information and insights about various skin diseases, powered by cutting-edge artificial intelligence technology. Our website is built using Vite for front-end development, Node.js for backend, and MongoDB as the database.",
    tags: ["React.js", "Tailwind", "Node","Express", "MongoDB"],
    imageUrl: medmi,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Express",
  "Java",
  "C",
  "Python"
  
] as const;

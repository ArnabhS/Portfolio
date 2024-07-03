
import music from "@/public/music.png";
import IncogNote from "@/public/IncogNote.png";
import seo from "@/public/seo.png";

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
    title: "Incog Note",
    description:
      "Incog Note is a full-stack web application where users can ask anything they want anonymously.",
    tags: ["Next.js", "ZOD","Shad CN","Open AI API","Typescript", "MongoDB"],
    imageUrl: IncogNote,
  },
  {
    title: "SEO Rank Tracker",
    description:
      "Built with Next.js and leveraging the BrightData API, I've developed a powerful tool to track SEO performance in real-time.",
    tags: ["React.js", "Next.js","Brightdata API","Tailwind", "Recharts", "MongoDB"],
    imageUrl: seo,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React.js",
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

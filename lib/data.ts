
import React from "react";
import music from "@/public/music.png";
import IncogNote from "@/public/IncogNote.png";
import seo from "@/public/seo.png";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
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
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Nextjs Developer Intern",
    location: "Achintya Solutions",
    description:
      "Developed and maintained the Achintya Solutions website using Next.js for the company’s services. Worked with Salesforce API on the backend, and integrated WordPress API to fetch dynamic data.",
    icon:  React.createElement(CgWorkAlt),
    date: "May 2024 - Aug 2024",
  },
  {
    title: "Full Stack Developer Intern",
    location: "ByteLyst AI",
    description:
      "Developed complex server-side API logic using Node.js to support platform functionalities.Integrated third-party APIs and payment processing with Stripe.Managed and designed MongoDB database schemas. Built responsive web interfaces using Next.js, focusing on scalability and performance.",
    icon: React.createElement(CgWorkAlt),
    date: "Aug 2024- June 2024",
  },
  {
    title: " Full Stack Developer Intern",
    location: "Hyggex World",
    description:
      " Designed and developed an AI chatbot using Azure AI services with native speech recognition.Integrated natural language processing for generating outputs in native languages and text formats.Managed database schemas using MongoDB.Developed responsive, user-friendly web interfaces with React.js, following Figma designs.",
    icon: React.createElement(CgWorkAlt),
    date: "Aug 2024 - Present",
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

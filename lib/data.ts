
import React from "react";
import warline from "@/public/warline.png";
import LS from "@/public/LS.png";
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
    title: " Full Stack Developer Intern",
    location: "Daphnis Labs",
    description:
      "  Design, develop, and maintain scalable and high-performance backend systems using Node.jsCreate and manage RESTful APIs to integrate with front-end applications and third-party services.Develop and optimize database schemas, queries, and indexing strategies using MongoDB",
    icon: React.createElement(CgWorkAlt),
    date: "October 2024 - Jan 2025",
  },
  {
    title: "Full Stack Developer Intern",
    location: "True Mentor",
    description:
      " Constructed a full-stack platform sustaining 2000+ users with consistent reliability.Implemented a live messaging feature using WebSockets in Node.js, minimizing API latency by 50%.Enhanced UI performance by creating responsive React.js interfaces, accelerating load times by 40%.",
    icon:  React.createElement(CgWorkAlt),
    date: "Jan 2025 - Present",
  },
  {
    title: "Full Stack Developer Intern",
    location: "Unimad.ai",
    description:
      "Designed scalable backend APIs in Django for AI-driven interview preparation, managing session storage and real-time updates.Partnered with prompt engineers to incorporate LLM workflows for optimized interview responses.Engineered front-end functionalities with React Query and Zustand, enhancing data synchronization.",
    icon:  React.createElement(CgWorkAlt),
    date: "April 2025 - Present",
  },
] as const;
export const projectsData = [
  {
    title: "WarlineNews",
    description:
      "Developed a MERN-stack web app to counter misinformation during the India-Pakistan conflict using Gemini API.Integrated AI agents to filter and display verified news from trusted sources, reducing misinformation spread. Implemented a real-time red zone heatmap using Google Maps and AI analysis of regional risk data.",
    tags: ["React.js", "Node.js", "MongoDB","Gemini AI"],
    imageUrl: warline,
    link: "https://crisis-info-platform.vercel.app/",
  },
  {
    title: "LearnSync",
    description:
      "An adaptive education assistant built for giving personalized responses targeting disorders like ADHD, Autism, Dyslexia, etc. Built with React.js, Node.js, Express.js, Cohere AI API, and MongoDB.",
    tags: ["React.js", "Cohere AI API", "Nodejs", "MongoDB"],
    imageUrl: LS,
    link: "https://learn-sync-v1.vercel.app/",
  },
  {
    title: "SEO Rank Tracker",
    description:
      "Built with Next.js and leveraging the BrightData API, I've developed a powerful tool to track SEO performance in real-time.",
    tags: ["React.js", "Next.js", "Brightdata API", "Tailwind", "Recharts", "MongoDB"],
    imageUrl: seo,
    link: "https://arnabh-seo-tracker.vercel.app/",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
   "Java",
  "React.js",
  "Next.js",
  "Node.js",
  "Express",
  "Tailwind",
  "SpringBoot",
  "Django",
  "Git",
  "Docker",
  "MongoDB",
  "Postgres", 
] as const;

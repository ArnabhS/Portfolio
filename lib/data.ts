import React from "react";

import stocky from "@/public/stocku.png";
import tts from "@/public/TextToSpeech.png";
import prompt from "@/public/Promptpal.png"

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
    title: "Stocky",
    description:
      "Stocky utilizes advanced machine learning techniques, specifically a Linear Regression model, to forecast stock market trends accurately.I developed the Frontend of this project",
    tags: ["React", "Next.js", "Firebase", "Tailwind", ],
    imageUrl: stocky,
  },
  {
    title: "Promptpal",
    description:
      "PromptPal is a cutting-edge web application designed to ignite your creativity and streamline your writing process. Whether you're a novelist, poet, blogger, or student, PromptPal is your go-to tool for generating endless prompts tailored to your preferences and interests.",
    tags: ["React", "JavaScript", "Next.js", "Tailwind"],
    imageUrl:prompt ,
  },
  {
    title: "Text To Voice Converter",
    description:
      "A web app which converts your text to an voice.",
    tags: ["HTML", "CSS", "JavaScript", "Tailwind"],
    imageUrl: tts,
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

export * from "./contactData";
export * from "./highlightsList";
export * from "./projectList";
export * from "./technologyIconList";
export * from "./whoAmIData";

import { FaAws, FaLinux, FaMicrosoft } from "react-icons/fa";
import {
    SiDocker,
    SiExpress,
    SiFlask,
    SiGit,
    SiGithub,
    SiJavascript,
    SiKubernetes,
    SiMongodb,
    SiNextdotjs,
    SiOpenai,
    SiPostgresql,
    SiPostman,
    SiPython,
    SiReact,
    SiTailwindcss,
    SiTypescript,
    SiVercel,
    SiVuedotjs
} from "react-icons/si";

export const techonologyIconList = [
  // Frontend
  { name: "React", icon: SiReact, color: "text-blue-400" },
  { name: "Next.js", icon: SiNextdotjs, color: "text-black dark:text-white" },
  { name: "Vue.js", icon: SiVuedotjs, color: "text-green-500" },
  { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
  { name: "TypeScript", icon: SiTypescript, color: "text-blue-500" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-500" },

  // Backend
  { name: "Python", icon: SiPython, color: "text-blue-500" },
  { name: "Flask", icon: SiFlask, color: "text-black dark:text-white" },
  { name: "Express", icon: SiExpress, color: "text-gray-800 dark:text-white" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-400" },
  { name: "MongoDB", icon: SiMongodb, color: "text-green-500" },
  { name: "RESTful API", icon: SiPostman, color: "text-orange-500" },

  // DevOps & Tools
  { name: "Git", icon: SiGit, color: "text-orange-500" },
  { name: "GitHub", icon: SiGithub, color: "text-gray-900 dark:text-white" },
  { name: "Docker", icon: SiDocker, color: "text-blue-500" },
  { name: "Kubernetes", icon: SiKubernetes, color: "text-blue-500" },
  { name: "Linux", icon: FaLinux, color: "text-black dark:text-white" },
  { name: "Postman", icon: SiPostman, color: "text-orange-500" },

  // Cloud & Deployment
  { name: "AWS", icon: FaAws, color: "text-orange-500" },
  { name: "Azure", icon: FaMicrosoft, color: "text-blue-500" },
  { name: "Vercel", icon: SiVercel, color: "text-black dark:text-white" },

  // AI & ML
  { name: "Gen AI", icon: SiOpenai, color: "text-green-500" }
];


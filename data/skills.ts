import {
  Code2,
  Star,
  Folder,
  Zap,
  Monitor,
  Server,
  Cloud,
  Sparkles,
  Network,
  BrainCircuit,
  Workflow,
  Cpu,
  Bot
} from "lucide-react";
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiHtml5,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiDocker,
  SiPrisma,
  SiPostman,
  SiVercel,
  SiJavascript,
  SiCplusplus,
  SiPython,
  SiGit,
  SiEslint,
  SiJsonwebtokens,
  SiCloudinary
} from "react-icons/si";
import { FaJava, FaGithub, FaBolt } from "react-icons/fa";
import { TbApi } from "react-icons/tb";

export const skillsHeader = {
  badge: "MY SKILLS",
  heading: "Technologies",
  highlight: "I work",
  headingEnd: "with",
  description:
    "I use modern technologies and tools to design, build and scale robust, high-performance applications.",
};

export const skillStats = [
  { id: 1, icon: Code2, value: "5+", label: "Technologies" },
  { id: 2, icon: Star, value: "1+", label: "Years of Coding" },
  { id: 3, icon: Folder, value: "20+", label: "Projects Built" },
  { id: 4, icon: Zap, value: "Daily", label: "Learning" },
];

export const skillCategories = [
  {
    title: "Frontend",
    icon: Monitor,
    skills: [
      { name: "Next.js", icon: SiNextdotjs, color: "text-foreground" },
      { name: "React", icon: SiReact, color: "text-cyan-400" },
      { name: "TypeScript", icon: SiTypescript, color: "text-blue-500" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-sky-400" },
      { name: "HTML / CSS", icon: SiHtml5, color: "text-orange-500" },
    ],
  },
  {
    title: "Backend",
    icon: Server,
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "text-green-500" },
      { name: "Express.js", icon: SiExpress, color: "text-foreground" },
      { name: "REST APIs", icon: TbApi, color: "text-foreground" },
      { name: "MongoDB", icon: SiMongodb, color: "text-green-600" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-400" },
    ],
  },
  {
    title: "Tools & DevOps",
    icon: Cloud,
    skills: [
      { name: "Git & GitHub", icon: FaGithub, color: "text-foreground" },
      { name: "Docker", icon: SiDocker, color: "text-blue-500" },
      { name: "Prisma", icon: SiPrisma, color: "text-foreground" },
      { name: "Postman", icon: SiPostman, color: "text-orange-500" },
      { name: "Vercel", icon: SiVercel, color: "text-foreground" },
    ],
  },
  {
    title: "Programming",
    icon: Code2,
    skills: [
      { name: "JavaScript (ES6+)", icon: SiJavascript, color: "text-yellow-400" },
      { name: "TypeScript", icon: SiTypescript, color: "text-blue-500" },
      { name: "Java", icon: FaJava, color: "text-red-500" },
      { name: "C++", icon: SiCplusplus, color: "text-blue-600" },
      { name: "Python (Basics)", icon: SiPython, color: "text-yellow-500" },
    ],
  },
  {
    title: "Other Skills",
    icon: Sparkles,
    skills: [
      { name: "Data Structures", icon: Network, color: "text-primary" },
      { name: "Problem Solving", icon: BrainCircuit, color: "text-primary" },
      { name: "System Design", icon: Workflow, color: "text-primary" },
      { name: "API Integration", icon: Cpu, color: "text-primary" },
      { name: "AI Integration", icon: Bot, color: "text-primary" },
    ],
  },
];

export const otherTools = [
  { name: "Git", icon: SiGit, color: "text-orange-500" },
  { name: "ESLint", icon: SiEslint, color: "text-purple-500" },
  { name: "Thunder Client", icon: FaBolt, color: "text-purple-400" },
  { name: "JWT", icon: SiJsonwebtokens, color: "text-pink-600" },
  { name: "Cloudinary", icon: SiCloudinary, color: "text-blue-400" },
];
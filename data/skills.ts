import {
  FaReact,
  FaNodeJs,
  FaDocker,
  FaGitAlt,
  FaGithub,
  FaJava,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
} from "react-icons/fa";
import { RiOpenaiFill } from "react-icons/ri";
import {
  SiNextdotjs,
  SiExpress,
  SiPrisma,
  SiPostgresql,
  SiMongodb,
  SiTailwindcss,
  SiTypescript,
  SiJavascript,
   
  SiGooglegemini,
  SiPostman,
  SiVercel,
  SiRender,
  SiMui,
  SiCloudinary,
  SiJsonwebtokens,
  SiZod,
} from "react-icons/si";

export const skillCategories = [
  {
    title: "Frontend",
    description: "Building modern, responsive and interactive user interfaces.",
    skills: [
      { name: "HTML5", icon: FaHtml5, color: "text-orange-500" },
      { name: "CSS3", icon: FaCss3Alt, color: "text-blue-500" },
      { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
      { name: "TypeScript", icon: SiTypescript, color: "text-blue-600" },
      { name: "React", icon: FaReact, color: "text-sky-500" },
      { name: "Next.js", icon: SiNextdotjs, color: "text-black" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-500" },
      { name: "Material UI", icon: SiMui, color: "text-blue-500" },
      { name: "Bootstrap", icon: FaBootstrap, color: "text-purple-600" },
    ],
  },

  {
    title: "Backend",
    description: "Developing scalable backend services and APIs.",
    skills: [
      { name: "Node.js", icon: FaNodeJs, color: "text-green-600" },
      { name: "Express.js", icon: SiExpress, color: "text-slate-700" },
      { name: "REST API", icon: SiJsonwebtokens, color: "text-orange-500" },
      { name: "JWT Auth", icon: SiJsonwebtokens, color: "text-pink-500" },
      { name: "Prisma ORM", icon: SiPrisma, color: "text-indigo-600" },
      { name: "Zod", icon: SiZod, color: "text-blue-600" },
      { name: "Cloudinary", icon: SiCloudinary, color: "text-blue-500" },
    ],
  },

  {
    title: "Database",
    description: "Working with SQL and NoSQL databases.",
    skills: [
      { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-600" },
      { name: "MongoDB", icon: SiMongodb, color: "text-green-600" },
      { name: "SQL", icon: SiPostgresql, color: "text-indigo-500" },
    ],
  },

  {
    title: "AI & Integrations",
    description: "Building AI-powered applications using modern APIs.",
    skills: [
      { name: "Gemini API", icon: SiGooglegemini, color: "text-blue-500" },
      { name: "OpenAI API", icon: RiOpenaiFill, color: "text-emerald-600" },
      { name: "Prompt Engineering", icon: RiOpenaiFill, color: "text-violet-600" },
      { name: "AI Integration", icon: SiGooglegemini, color: "text-sky-500" },
    ],
  },

  {
    title: "Programming Languages",
    description: "Languages I use for development and problem solving.",
    skills: [
      { name: "Java", icon: FaJava, color: "text-red-500" },
      { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
      { name: "TypeScript", icon: SiTypescript, color: "text-blue-600" },
      { name: "Python", icon: FaPython, color: "text-blue-500" },
    ],
  },

  {
    title: "Tools & DevOps",
    description: "Tools I use during development and deployment.",
    skills: [
      { name: "Git", icon: FaGitAlt, color: "text-orange-600" },
      { name: "GitHub", icon: FaGithub, color: "text-slate-800" },
      { name: "Docker", icon: FaDocker, color: "text-blue-500" },
      { name: "Postman", icon: SiPostman, color: "text-orange-500" },
      { name: "Vercel", icon: SiVercel, color: "text-black" },
      { name: "Render", icon: SiRender, color: "text-indigo-500" },
    ],
  },
];
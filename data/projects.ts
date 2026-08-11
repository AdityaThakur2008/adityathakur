import {
  Box,
  Star,
  Rocket,
  Users,
  Globe,
  Lock,
  Video,
  Bed,
} from "lucide-react";
import {
  SiNextdotjs,
  SiTypescript,
  SiPrisma,
  SiPostgresql,
  SiTailwindcss,
  SiMongodb,
  SiNodedotjs,
  SiExpress,
} from "react-icons/si";

export const projectsHeader = {
  badge: "MY PROJECTS",
  heading: "Projects that",
  highlight: "solve",
  highlight2: "problems.",
  description:
    "Here are some of the projects I've built that demonstrate my skills and passion for creating impactful solutions.",
};

export const projectStats = [
  { id: 1, icon: Box, value: "20+", label: "Projects Built" },
  { id: 2, icon: Star, value: "10+", label: "Full Stack Apps" },
  { id: 3, icon: Rocket, value: "5+", label: "In Production" },
];

export const projectCategories = [
  "All",
  "Web Apps",
  "AI / ML",
  "Full Stack",
  "Tools",
  "Others",
];

export const featuredProject = {
  title: "SmartSpend",
  description:
    "AI-powered expense tracker that analyzes spending patterns and provides smart insights to help users save more.",
  image: "/images/smartspend-mockup.png", 
  tags: [
    { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
    { name: "TypeScript", icon: SiTypescript, color: "text-blue-500" },
    { name: "Prisma", icon: SiPrisma, color: "text-white" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-400" },
    { name: "Gemini AI", icon: Star, color: "text-green-400" },
  ],
  links: {
    view: "https://smart-spend-zeta.vercel.app",
    github: "https://github.com/AdityaThakur2008/smartSpend",
  },
};

export const smallProjects = [
  {
    id: 4,
    title: "SkillShare",
    description:
      "A LinkedIn clone platform to connect, share and grow together.",
    logoIcon: "S",
    logoBg: "bg-primary",
    categories: ["Web Apps", "Full Stack"],
    tags: [
      { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-sky-400" },
      { name: "MongoDB", icon: SiMongodb, color: "text-green-500" },
      { name: "Node.js", icon: SiNodedotjs, color: "text-green-500" },
    ],
    links: {
      demo: " https://skill-share-linked-in-clone-full-st.vercel.app/",
      github:
        " https://github.com/AdityaThakur2008/Skill_share_linkedIn_clone_FULL_STACK_PROJECT",
    },
  },
  {
    id: 3,
    title: "Talk Sphere",
    description:
      "Real-time video conferencing platform with secure calls and chat.",
    logoIcon: Video,
    logoBg: "bg-blue-500",
    categories: ["Web Apps", "Full Stack", "Tools"],
    tags: [
      { name: "WebRTC", icon: Globe, color: "text-red-400" },
      { name: "Socket.io", icon: Globe, color: "text-white" },
      { name: "Node.js", icon: SiNodedotjs, color: "text-green-500" },
    ],
    links: {
      demo: "https://talk-sphere-p8s5.onrender.com",
      github:
        "https://github.com/AdityaThakur2008/Talk-Sphere-Conferencing-App",
    },
  },
  {
    id: 2,
    title: "AI Sustainable Commerce",
    description:
      "AI-based product categorization and proposal generation for e-commerce.",
    logoIcon: Lock,
    logoBg: "bg-green-500",
    categories: ["AI / ML", "Full Stack"],
    tags: [
      { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
      { name: "Gemini API", icon: Star, color: "text-blue-400" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-500" },
    ],
    links: {
      github: "https://github.com/AdityaThakur2008/ai-sustainable-commerce",
    },
  },
  {
    id: 1,
    title: "WanderLust",
    description: "Airbnb clone with listing, booking and reviews.",
    logoIcon: Bed,
    logoBg: "bg-orange-500",
    categories: ["Web Apps", "Full Stack"],
    tags: [
      { name: "Node.js", icon: SiNodedotjs, color: "text-green-500" },
      { name: "Express.js", icon: SiExpress, color: "text-white" },
      { name: "MongoDB", icon: SiMongodb, color: "text-green-500" },
    ],
    links: {
      demo: "https://wonderlust-h12v.onrender.com/listings",
      github: "https://github.com/AdityaThakur2008/first_fullstack_project",
    },
  },
];

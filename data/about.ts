import {
  Code2,
  Lightbulb,
  UserCircle,
  Calendar,
  MapPin,
  GraduationCap,
  Terminal,
  FolderDot,
  
} from "lucide-react";
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiNodedotjs,
  SiJavascript,
  SiTailwindcss,
  SiPostgresql,
  SiPrisma,
  SiDocker,
} from "react-icons/si";
import { FaGithub } from "react-icons/fa";

export const aboutContent = {
  heading: "Get to know",
  highlight: "me better",
  description1:
    "I'm Aditya Thakur, a passionate Full Stack Developer who loves building scalable web applications and AI-powered solutions that solve real-world problems.",
  description2:
    "I enjoy turning ideas into meaningful products through clean code, modern technologies, and great user experiences.",
};

export const features = [
  {
    id: 1,
    icon: Code2,
    title: "Clean Code",
    description: "I write maintainable, scalable and efficient code following best practices.",
  },
  {
    id: 2,
    icon: Lightbulb,
    title: "Problem Solver",
    description: "I love solving complex problems and building solutions that create real impact.",
  },
  {
    id: 3,
    icon: UserCircle,
    title: "Always Learning",
    description: "I'm constantly exploring new technologies and improving my craft everyday.",
  },
];

export const quickFacts = [
  { id: 1, icon: Calendar, value: "18", label: "Years Old" },
  { id: 2, icon: MapPin, value: "Harda, MP", label: "Location" },
  { id: 3, icon: GraduationCap, value: "B.Sc. CS", label: "2024 - 2027" },
  { id: 4, icon: Terminal, value: "1+", label: "Years of Coding" },
  { id: 5, icon: FolderDot, value: "10+", label: "Projects Completed" },
  { id: 6, icon: FaGithub, value: "50+", label: "GitHub Commits" },
];

export const techStack = [
  { id: 1, name: "Next.js", icon: SiNextdotjs },
  { id: 2, name: "React", icon: SiReact },
  { id: 3, name: "TypeScript", icon: SiTypescript },
  { id: 4, name: "Node.js", icon: SiNodedotjs },
  { id: 5, name: "JavaScript", icon: SiJavascript },
  { id: 6, name: "Tailwind CSS", icon: SiTailwindcss },
  { id: 7, name: "PostgreSQL", icon: SiPostgresql },
  { id: 8, name: "Prisma", icon: SiPrisma },
  { id: 9, name: "Git & GitHub", icon: FaGithub },
  { id: 10, name: "Docker", icon: SiDocker },
];
import {
  Calendar,
  GraduationCap,
  Mail,
  MapPin,
  Globe,
  Brain,
  HelpCircle,
  Code,
  Layers,
  Code2,
  Terminal,
  Cpu,
  Heart,
  Target,
  Lightbulb,
  BookOpen,
} from "lucide-react";
import { FaGithub } from "react-icons/fa6";

export const personalInfo = [
  {
    icon: Calendar,
    title: "Born",
    value: "26 January 2008",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Harda, Madhya Pradesh",
  },
  {
    icon: GraduationCap,
    title: "Education",
    value: "B.Sc. Computer Science (2024–present)",
    subtitle: "Barkatullah University, Bhopal",
  },
  {
    icon: Mail,
    title: "Email",
    value: "adityathakur89362@gmail.com",
    href: "mailto:adityathakur89362@gmail.com",
  },
];

export const traits = [
  {
    icon: Heart,
    title: "Full Stack Development",
    desc: "Building modern web applications with React, Next.js and Node.js.",
  },
  {
    icon: Target,
    title: "AI Development",
    desc: "Creating AI-powered applications using LLM APIs and automation.",
  },
  {
    icon: Lightbulb,
    title: "Problem Solving",
    desc: "Turning real-world ideas into practical software solutions.",
  },
  {
    icon: BookOpen,
    title: "Continuous Learning",
    desc: "Always exploring new technologies and improving every day.",
  },
];

export const quickFacts = [
  {
    icon: Code2,
    color: "text-blue-600",
    value: "10+",
    label: "Projects Completed",
  },
  {
    icon: Terminal,
    color: "text-emerald-600",
    value: "20K+",
    label: "Lines of Code",
  },
  {
    icon: Calendar,
    color: "text-amber-600",
    value: "1+",
    label: "Years of Coding",
  },
  {
    icon: FaGithub,
    color: "text-indigo-600",
    value: "200+",
    label: "GitHub Commits",
  },
  {
    icon: Cpu,
    color: "text-rose-600",
    value: "5+",
    label: "Technologies",
  },
];

export const interests = [
  {
    icon: Globe,
    color: "text-blue-500",
    label: "Web Development",
  },
  {
    icon: Brain,
    color: "text-indigo-500",
    label: "AI / Machine Learning",
  },
  {
    icon: HelpCircle,
    color: "text-purple-500",
    label: "Problem Solving",
  },
  {
    icon: Code,
    color: "text-sky-500",
    label: "Open Source",
  },
  {
    icon: Layers,
    color: "text-blue-400",
    label: "UI/UX Design",
  },
];

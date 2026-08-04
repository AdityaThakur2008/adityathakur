import { Mail,  Code2, Layers, Rocket, Star } from "lucide-react";
import {FaGithub, FaLinkedin} from "react-icons/fa";

export const heroData = {
  badge: "Available for opportunities",
  greeting: "Hi, I'm",
  firstName: "Aditya",
  lastName: "Thakur.",
  roles: ["Full Stack Developer", "AI Enthusiast"],
  description: "I build scalable web applications and AI-powered solutions that solve real-world problems and create impact.",
};

export const socialLinks = [
  { name: "github", url: "https://github.com/adityathakur2008", icon: FaGithub },
  { name: "linkedin", url: "https://www.linkedin.com/in/aditya-thakur08", icon: FaLinkedin },
  { name: "mail", url: "mailto:adityathakur89362@gmail.com", icon: Mail },
];

export const heroStats = [
  { id: 1, icon: Code2, value: "10+", label: "Projects Completed" },
  { id: 2, icon: Layers, value: "20K+", label: "Lines of Code" },
  { id: 3, icon: Rocket, value: "1+", label: "Years of Coding" },
  { id: 4, icon: Star, value: "100+", label: "GitHub Commits" },
];
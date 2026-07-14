import { Mail, Phone, MapPin, Calendar, FileText } from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

export const contactHeader = {
  badge: "GET IN TOUCH",
  heading: "Let's build",
  highlight: "something",
  highlight2: "amazing",
  description: "Have a project in mind or just want to say hi?\nFeel free to reach out. I'll get back to you as soon as possible.",
};

export const contactCards = [
  { id: "email", icon: Mail, title: "Email", value: "adityathakur.dev@gmail.com" },
  { id: "phone", icon: Phone, title: "Phone", value: "+91 97536 06781" },
  { id: "location", icon: MapPin, title: "Location", value: "Harda, Madhya Pradesh, India" },
  { id: "availability", icon: Calendar, title: "Availability", value: "Open for opportunities", isStatus: true },
];

export const socialLinks = [
  { id: "github", icon: FaGithub, name: "GitHub", handle: "@adityathakur2008", link: "https://github.com/adityathakur2008" },
  { id: "linkedin", icon: FaLinkedin, name: "LinkedIn", handle: "Aditya Thakur", link: "https://www.linkedin.com/in/aditya-thakur08" },
  { id: "email", icon: Mail, name: "Email", handle: "Say Hello", link: "mailto:adityathakur89362@gmail.com" },
  { id: "resume", icon: FileText, name: "Resume", handle: "Download", link: "/resume/Aditya_Thakur_Resume.pdf" },
];
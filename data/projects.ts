import type { ComponentType, SVGProps } from "react";

export interface Tech {
  name: string;
  color: string;
  icon?: ComponentType<SVGProps<SVGSVGElement>>;
}

export interface ProjectImage {
  desktop: string;
  mobile: string;
}

export interface Project {
  id: number;

  slug: string;

  featured: boolean;

  title: string;
  tagline: string;

  shortDescription: string;
  description: string;

  image: ProjectImage;

  category: string[];

  tags: string[];

  tech: Tech[];

  features: string[];

  github: string;
  live: string;

  status: "Completed" | "In Progress";

  type: "Personal" | "Client";

  difficulty: "Beginner" | "Intermediate" | "Advanced";

  duration: string;

  team: string;

  year: string;
}

export const projectCategories = [
  "All",
  "Full Stack",
  "Frontend",
  "Backend",
  "AI",
  "API",
] as const;

export const projects: Project[] = [
  {
    id: 1,

    slug: "smartspend-ai",

    featured: true,

    title: "SmartSpend.ai",

    tagline: "AI Powered Expense Tracker",

    shortDescription:
      "Manage your finances with AI-powered insights and analytics.",

    description:
      "A modern AI-powered expense tracker that helps users manage income and expenses using intelligent insights, analytics dashboards and monthly reports.",

    image: {
      desktop: "/images/project-desktop.png",
      mobile: "/images/project-mobile.png",
    },

    category: ["Full Stack", "AI"],

    tags: ["Finance", "Dashboard", "Analytics", "Authentication"],

    tech: [
      { name: "Next.js", color: "bg-black text-white" },
      { name: "React", color: "bg-cyan-100 text-cyan-700" },
      { name: "TypeScript", color: "bg-blue-100 text-blue-700" },
      { name: "Node.js", color: "bg-green-100 text-green-700" },
      { name: "Express", color: "bg-slate-100 text-slate-700" },
      { name: "Prisma", color: "bg-indigo-100 text-indigo-700" },
      { name: "PostgreSQL", color: "bg-sky-100 text-sky-700" },
      { name: "Docker", color: "bg-blue-100 text-blue-700" },
      { name: "Gemini API", color: "bg-violet-100 text-violet-700" },
      { name: "Tailwind", color: "bg-cyan-100 text-cyan-700" },
    ],

    features: [
      "AI Insights",
      "Expense Analytics",
      "Monthly Reports",
      "Authentication",
      "Interactive Dashboard",
      "Responsive UI",
    ],

    github: "#",

    live: "#",

    status: "In Progress",

    type: "Personal",

    difficulty: "Advanced",

    duration: "2 Months",

    team: "Solo",

    year: "2026",
  },

  {
    id: 2,

    slug: "talksphere",

    featured: false,

    title: "TalkSphere",

    tagline: "Video Conferencing Platform",

    shortDescription: "Real-time meetings powered by WebRTC and Socket.io.",

    description:
      "A video conferencing platform supporting video meetings, screen sharing and real-time messaging.",

    image: {
      desktop: "/images/project-desktop.png",
      mobile: "/images/project-mobile.png",
    },

    category: ["Full Stack"],

    tags: ["WebRTC", "Socket.io", "Video Calling"],

    tech: [
      { name: "React", color: "bg-cyan-100 text-cyan-700" },
      { name: "Node.js", color: "bg-green-100 text-green-700" },
      { name: "Express", color: "bg-slate-100 text-slate-700" },
      { name: "MongoDB", color: "bg-green-100 text-green-700" },
      { name: "Socket.io", color: "bg-gray-100 text-gray-700" },
      { name: "WebRTC", color: "bg-orange-100 text-orange-700" },
    ],

    features: [
      "Video Calling",
      "Meeting Rooms",
      "Chat",
      "Authentication",
      "Screen Sharing",
    ],

    github: "#",

    live: "#",

    status: "Completed",

    type: "Personal",

    difficulty: "Advanced",

    duration: "1 Month",

    team: "Solo",

    year: "2026",
  },

  {
    id: 3,

    slug: "linkedin-clone",

    featured: false,

    title: "LinkedIn Clone",

    tagline: "Professional Networking Platform",

    shortDescription: "A social networking platform inspired by LinkedIn.",

    description:
      "Users can create profiles, upload posts, connect with others, like, comment and manage professional profiles.",

    image: {
      desktop: "/images/project-desktop.png",
      mobile: "/images/project-mobile.png",
    },

    category: ["Full Stack"],

    tags: ["Social Media", "Cloudinary", "Authentication"],

    tech: [
      { name: "React", color: "bg-cyan-100 text-cyan-700" },
      { name: "Node.js", color: "bg-green-100 text-green-700" },
      { name: "Express", color: "bg-slate-100 text-slate-700" },
      { name: "MongoDB", color: "bg-green-100 text-green-700" },
      { name: "JWT", color: "bg-pink-100 text-pink-700" },
      { name: "Cloudinary", color: "bg-blue-100 text-blue-700" },
    ],

    features: ["Authentication", "Posts", "Comments", "Likes", "Media Upload"],

    github: "#",

    live: "#",

    status: "Completed",

    type: "Personal",

    difficulty: "Intermediate",

    duration: "3 Weeks",

    team: "Solo",

    year: "2026",
  },

  {
    id: 4,

    slug: "expense-tracker-api",

    featured: false,

    title: "Expense Tracker API",

    tagline: "REST API Backend",

    shortDescription: "Secure backend API built with Express and Prisma.",

    description:
      "RESTful backend with JWT authentication, validation, PostgreSQL and clean architecture.",

    image: {
      desktop: "/images/project-desktop.png",
      mobile: "/images/project-mobile.png",
    },

    category: ["Backend", "API"],

    tags: ["REST API", "JWT", "Prisma"],

    tech: [
      { name: "Node.js", color: "bg-green-100 text-green-700" },
      { name: "Express", color: "bg-slate-100 text-slate-700" },
      { name: "Prisma", color: "bg-indigo-100 text-indigo-700" },
      { name: "PostgreSQL", color: "bg-sky-100 text-sky-700" },
      { name: "JWT", color: "bg-pink-100 text-pink-700" },
      { name: "Zod", color: "bg-violet-100 text-violet-700" },
    ],

    features: [
      "CRUD API",
      "Authentication",
      "Validation",
      "Error Handling",
      "PostgreSQL",
    ],

    github: "#",

    live: "#",

    status: "Completed",

    type: "Personal",

    difficulty: "Intermediate",

    duration: "2 Weeks",

    team: "Solo",

    year: "2026",
  },
];

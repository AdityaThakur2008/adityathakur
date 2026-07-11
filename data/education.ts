export interface FocusItem {
  label: string;
  icon: string;
}

export interface TechItem {
  name: string;
  icon: string;
}

export interface EducationData {
  degree: string;
  university: string;
  duration: string;
  status: string;
  description: string;
  coursework: string[];
  focus: FocusItem[];
  techStack: TechItem[];
}

export const education: EducationData = {
  degree: "B.Sc Computer Science",
  university: "Barkatullah University , Bhopal",
  duration: "2024 - 2027",
  status: "Currently Pursuing",
  description:
    "Pursuing Bachelor of Science in Computer Science with a strong foundation in programming, data structures, algorithms, and software development principles.",
  coursework: [
    "Object Oriented Programming (Java)",
    "Computer Networks",
    "Data Structures & Algorithms",
    "Operating Systems",
    "Database Management Systems",
    "Software Engineering",
    "Web Development (PHP & MySQL)",
    "Discrete Mathematics",
  ],
  focus: [
    { label: "Full Stack Development", icon: "code" },
    { label: "AI & Machine Learning", icon: "ai" },
    { label: "Data Structures & Algorithms", icon: "dsa" },
    { label: "System Design", icon: "system" },
    { label: "Cloud & DevOps", icon: "cloud" },
  ],
  techStack: [
    { name: "Java", icon: "java" },
    { name: "React", icon: "react" },
    { name: "Next.js", icon: "nextjs" },
    { name: "Node.js", icon: "nodejs" },
    { name: "TypeScript", icon: "typescript" },
    { name: "MongoDB", icon: "mongodb" },
    { name: "Docker", icon: "docker" },
    { name: "PostgreSQL", icon: "postgresql" },
    { name: "Git & GitHub", icon: "git" },
    { name: "AI/ML", icon: "aiml" },
  ],
};
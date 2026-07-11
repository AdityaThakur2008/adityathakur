import { Project } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import MoreProjectsCard from "./MoreProjectsCard";

interface ProjectGridProps {
  projects: Project[];
}

export default function ProjectGrid({ projects }: ProjectGridProps) {
  return (
    <div className="grid gap-6 xl:grid-cols-3 lg:grid-cols-2">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
      <MoreProjectsCard />
    </div>
  );
}

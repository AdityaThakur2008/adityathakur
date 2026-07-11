"use client";

import { useState } from "react";
import ProjectsHeader from "./ProjectsHeader";
import ProjectFilterTabs from "./ProjectFilterTabs";
import { FeaturedProjectCard } from "./FeaturedProjectCard";
import ProjectGrid from "./ProjectGrid";
import GithubCTA from "./GithubCTA";

import { projects } from "@/data/projects";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category.includes(activeFilter));

  const featuredProject = filteredProjects.find((project) => project.featured);

  const remainingProjects = filteredProjects.filter(
    (project) => !project.featured,
  );

  return (
    <section
      id="projects"
      className="relative w-full py-24 px-6 md:px-12 lg:px-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white/95 p-8 shadow-[0_35px_80px_rgba(15,23,42,0.08)] dark:border-slate-800 dark:bg-slate-950/90">
          <ProjectsHeader />
          <ProjectFilterTabs
            activeFilter={activeFilter}
            setActiveFilter={setActiveFilter}
          />
        </div>

        {featuredProject && <FeaturedProjectCard project={featuredProject} />}

        <ProjectGrid projects={remainingProjects} />

        <GithubCTA />
      </div>
    </section>
  );
}

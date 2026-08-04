"use client";

import { useState, useMemo } from "react";
import { Code2, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectsHeader from "./ProjectsHeader";
import ProjectsFilter from "./ProjectsFilter";
import FeaturedCard from "./FeaturedCard";
import SmallCard from "./SmallCard";
import { smallProjects } from "@/data/projects";

export default function Projects() {
  // 1. States for Filtering & Sorting
  const [activeCategory, setActiveCategory] = useState("All");
  const [sortOrder, setSortOrder] = useState<"latest" | "oldest">("latest");

  // 2. Logic to filter and sort projects
  const filteredProjects = useMemo(() => {
    let filtered = smallProjects;

    // Filter by Category
    if (activeCategory !== "All") {
      filtered = filtered.filter((project) =>
        project.categories?.includes(activeCategory)
      );
    }

    // Sort by ID (Assuming higher ID = Latest project)
    return filtered.sort((a, b) => {
      if (sortOrder === "latest") {
        return b.id - a.id;
      } else {
        return a.id - b.id;
      }
    });
  }, [activeCategory, sortOrder]);

  return (
    <section id="projects" className="w-full py-16 md:py-24 px-4 md:px-8 flex flex-col items-center">
      <div className="w-full max-w-7xl mx-auto flex flex-col">
        
        <ProjectsHeader />
        
        {/* Pass states to Filter component */}
        <ProjectsFilter 
          activeCategory={activeCategory} 
          setActiveCategory={setActiveCategory}
          sortOrder={sortOrder}
          setSortOrder={setSortOrder}
        />

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-10">
          
          {/* Featured Project (Hides if a specific category is selected so we can focus on filtered ones) */}
          <AnimatePresence>
            {activeCategory === "All" && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95, display: "none" }}
                transition={{ duration: 0.3 }}
                className="lg:col-span-5 h-full"
              >
                <FeaturedCard />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Filtered Small Projects Grid */}
          <motion.div 
            layout // This makes the cards reshuffle smoothly!
            className={`${activeCategory === "All" ? "lg:col-span-7" : "lg:col-span-12"} grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-${activeCategory === "All" ? "2" : "3"} gap-6`}
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                >
                  <SmallCard project={project} />
                </motion.div>
              ))}
            </AnimatePresence>
            
            {/* Show message if no projects match */}
            {filteredProjects.length === 0 && (
              <div className="col-span-full py-10 flex flex-col items-center justify-center text-muted-foreground border border-dashed border-border/60 rounded-3xl">
                <p>No projects found in this category yet.</p>
              </div>
            )}
          </motion.div>

        </div>

        {/* Bottom CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full bg-card border border-border/60 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6"
        >
         
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 rounded-2xl bg-secondary/50 border border-border/50 flex items-center justify-center shrink-0">
              <Code2 size={24} className="text-primary" />
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-bold text-foreground mb-1">Have an idea in mind?</h3>
              <p className="text-sm text-muted-foreground">I&apos;m always open to discussing new projects and creative ideas.</p>
            </div>
          </div>
          
          <button onClick={() =>
            document.getElementById("contact")?.scrollIntoView({
              behavior: "smooth",
            })
          }className="w-full md:w-auto flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3.5 rounded-xl text-sm font-medium transition-all shadow-[0_0_15px_rgba(124,108,251,0.2)]">
            Let&apos;s Build Together <ArrowUpRight size={18} />
          </button>
        </motion.div>

      </div>
    </section>
  );
}
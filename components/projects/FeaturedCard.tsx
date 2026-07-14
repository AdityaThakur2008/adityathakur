"use client";

import { ArrowUpRight, Star } from "lucide-react";
import {FaGithub} from "react-icons/fa";
import { featuredProject } from "@/data/projects";

export default function FeaturedCard() {
  return (
    <div className="group flex flex-col bg-card border border-border/60 rounded-3xl overflow-hidden hover:border-primary/50 transition-colors h-full">
    
      <div className="relative w-full h-70 bg-linear-to-br from-[#1E1F2E] to-[#0A0A0F] border-b border-border/50 p-6 flex items-center justify-center overflow-hidden">
        <div className="absolute top-4 right-4 bg-primary/20 border border-primary/30 text-primary text-[10px] font-semibold px-3 py-1.5 rounded-full flex items-center gap-1.5 backdrop-blur-md z-10">
          <Star size={12} className="fill-primary" /> Featured
        </div>
        
     
        <div className="w-[110%] h-[110%] rounded-xl bg-secondary/20 border border-border/30 rotate-2 translate-y-4 shadow-2xl flex items-center justify-center text-muted-foreground/50 text-sm">
          <img src={featuredProject.image} alt={featuredProject.title} className="w-full h-full object-cover rounded-xl" />
        </div>
      </div>

      
      <div className="flex flex-col p-6 flex-1 justify-between gap-6">
        <div>
          <h3 className="text-2xl font-bold text-foreground mb-3">{featuredProject.title}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {featuredProject.description}
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {featuredProject.tags.map((tag, i) => {
            const Icon = tag.icon;
            return (
              <span key={i} className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-secondary/50 border border-border/50 text-[10px] font-medium text-muted-foreground">
                <Icon size={12} className={tag.color} /> {tag.name}
              </span>
            );
          })}
        </div>

        <div className="flex items-center gap-4 mt-2">
          <a 
            href={featuredProject.links.view ? featuredProject.links.view : featuredProject.links.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-primary/10 hover:bg-primary/20 text-primary border border-primary/20 px-4 py-2.5 rounded-xl text-sm font-medium transition-colors"
          >
            View Project <ArrowUpRight size={16} />
          </a>
          <a 
            href={featuredProject.links.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
          >
            GitHub <FaGithub size={16} />
          </a>
        </div>
      </div>
    </div>
  );
}
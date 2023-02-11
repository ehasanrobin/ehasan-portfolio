import React, { useEffect, useState } from "react";
import ProjectCard from "../ProjectCard/ProjectCard";
import "./ProjectsSection.css";
const ProjectsSection = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("./projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  return (
    <div className="projects__section section__padding">
      <div className="text-center">
        <h2>
          Port<span>f</span>olio
        </h2>
        <p className="text-white text-xl">Latest Projects</p>
      </div>
      <div className="container mt-12 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
          {projects.map((project, index) => (
            <ProjectCard project={project} key={index}></ProjectCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;

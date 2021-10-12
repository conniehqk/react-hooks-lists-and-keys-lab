import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);
  const pjItem = projects.map((project)=>{
    const id = project.id.toString()
    return <ProjectItem key={id} name={project.name} about={project.about} technologies={project.technologies} />
  })
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
        {pjItem}
      </div>
    </div>
  );
}

export default ProjectList;

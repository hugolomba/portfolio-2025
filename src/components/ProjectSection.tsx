import { useState } from "react";
import projects from "../projects";
import ProjectCard from "./ProjectCard";
import style from "./ProjectSection.module.css";
import Button from "./Button";


const ProjectSection = () => {
  // Simulated list
  const items = projects;

  console.log(items);

  const [visibleCount, setVisibleCount] = useState(6);

  const handleShowMore = () => {
    setVisibleCount(prevCount => prevCount + 6);
  };

  return (
    <section id="projects" className={style.projectsSection}>
      <div className={style.projectsHeader}>
        <h2 className={style.projectsTitle}>PROJECTS</h2>
        <p className={style.projectsDescription}>
          Here are some of my projects. Click on the buttons to see more details or visit the live demos.
        </p>
      </div>

      {/* List of items for the current page */}
      <div className={style.projectsContainer}>
        {items.slice(0, visibleCount).map((item, index) => (
          <ProjectCard key={index} project={item} />
        ))}
      </div>

      {/* Show more button */}
      {visibleCount < items.length && (
        <div className={style.paginationContainer}>
          <Button btnType="button" onClick={handleShowMore} variant="secondary">
            View all projects
          </Button>
        </div>
      )}
    </section>
  );
};

export default ProjectSection;
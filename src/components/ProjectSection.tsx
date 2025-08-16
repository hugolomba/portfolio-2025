import React, { useState } from "react";
import projects from "../projects";
import ProjectCard from "./ProjectCard";
import style from "./ProjectSection.module.css";
import Button from "./Button";

const ProjectSection = () => {
  // Simulated list
  const items = projects;

  console.log(items);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  // Calculate the start and end index
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

  // Total number of pages
  const totalPages = Math.ceil(items.length / itemsPerPage);

  // Change page
  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <section className={style.projectsSection}>
      <div className={style.projectsHeader}>
        <h2 className={style.projectsTitle}>PROJECTS</h2>
        <p className={style.projectsDescription}>
          Here are some of my projects. Click on the buttons to see more details or visit the live demos.
        </p>
      </div>

      {/* List of items for the current page */}
      <div className={style.projectsContainer}>
        {currentItems.map((item, index) => (
          <ProjectCard key={index} project={item} />
        ))}
      </div>

      {/* Pagination controls */}
      <div className={style.paginationContainer}>
        <button className={style.paginationButton} onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
          Previous  
        </button>

    

        {/* Page numbers */}
        <div className={style.paginationNumbers}>
             {Array.from({ length: totalPages }, (_, i) => (
          <button className={style.paginationNumber}
            key={i}
            onClick={() => handlePageChange(i + 1)}
            style={{
              fontWeight: currentPage === i + 1 ? "bold" : "normal"
            }}
          >
            {i + 1}
          </button>
      
      ))}
        </div>
       

        <button className={style.paginationButton} onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
          Next
        </button>
    
      </div>
    </section>
  );
};

export default ProjectSection;
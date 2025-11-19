import styles from "./ProjectDetail.module.css";
import { useParams } from "react-router-dom";
import projects from "../projects";
import ReactMarkdown from "react-markdown";
import Button from "./Button";
import type { FC } from "react";
import MoreProjects from "./MoreProjects";
import ProjectCarousel from "./ProjectCarousel";

interface ProjectType {
  title: string;
  images: string[];
  technologies: string[];
  longDescription: string;
  github: string;
  link: string;
}

const ProjectDetail: FC = () => {
  const { id } = useParams<{ id: string }>();
  console.log("ProjectDetail id:", id); // Debugging line
  const project = projects.find((p) => p.id === id);

  const techColors: string[] = [
    "jsColor",
    "reactColor",
    "nodeColor",
    "mongoColor",
    "expressColor",
    "htmlColor",
    "cssColor",
    "muiColor",
    "axiosColor",
  ];

  function getTechColor(project: ProjectType, tech: string): string {
    const index = project.technologies.indexOf(tech);
    return index !== -1
      ? techColors[index % techColors.length]
      : "defaultColor";
  }

  if (!project) {
    return <h2>Project not found</h2>;
  }

  return (
    <div className={styles.projectDetailContainer}>
      <h1>{project.title}</h1>

      <ProjectCarousel projectImages={project.images} />

      <div className={styles.technologies}>
        {project.technologies.map((tech, index) => (
          <span
            key={index}
            className={`${styles.technology} ${
              styles[getTechColor(project, tech)]
            }`}
          >
            {`#${tech} `}
          </span>
        ))}
      </div>

      <ReactMarkdown>{project.longDescription}</ReactMarkdown>

      <div className={styles.linksContainer}>
        <Button btnType="link" href={project.github} target="_blank">
          View on GitHub
        </Button>
        <Button btnType="link" href={project.link} target="_blank">
          Live Demo
        </Button>
      </div>
      {/*
            <Button btnType='link' href={`/project/${nextProject.id}`}>Next Project: {nextProject.title}</Button>
            */}
      <div className={styles.moreProjectsContainer}>
        <h2>More Projects</h2>
        <div className={styles.moreProjectsCards}>
          {projects.map(
            (p) =>
              p.id !== project.id && (
                <MoreProjects
                  key={p.id}
                  id={p.id}
                  title={p.title}
                  image={p.images[0]}
                />
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;

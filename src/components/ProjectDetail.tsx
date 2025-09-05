import styles from './ProjectDetail.module.css'
import { useParams } from "react-router-dom";
import projects from "../projects";
import ReactMarkdown from "react-markdown";
import Button from './Button';
import type { FC } from "react";

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
const project: ProjectType | undefined = id ? projects[parseInt(id, 10)] : undefined;

    const techColors: string[] = [
        "jsColor",
        "reactColor",
        "nodeColor",
        "mongoColor",
        "expressColor",
        "htmlColor",
        "cssColor",
        "muiColor",
        "axiosColor"
    ];

    function getTechColor(project: ProjectType, tech: string): string {
        const index = project.technologies.indexOf(tech);
        return index !== -1 ? techColors[index % techColors.length] : "defaultColor";
    }

    if (!project) {
        return <h2>Project not found</h2>;
    }

    return (
        <div className={styles.projectDetailContainer}>
            <h1>{project.title}</h1>
            
            <div className={styles.imagesContainer}>
                {project.images.map((image, index) => (
                    <img
                        className={styles.image}
                        key={index}
                        src={image}
                        alt={`Screenshot ${index + 1}`}
                    />
                ))}
            </div>

            <div className={styles.technologies}>
                {project.technologies.map((tech, index) => (
                    <span
                        key={index}
                        className={`${styles.technology} ${styles[getTechColor(project, tech)]}`}
                    >
                        {`#${tech} `}
                    </span>
                ))}
            </div>

            <ReactMarkdown>{project.longDescription}</ReactMarkdown>

            <div className={styles.linksContainer}>
                <Button btnType='link' href={project.github}>View on GitHub</Button>
                <Button btnType='link' href={project.link}>Live Demo</Button>
            </div>
        </div>
    );
};

export default ProjectDetail;
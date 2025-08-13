import Button from './Button'
import styles from './ProjectCard.module.css'
import { FaGithub } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";


type Project = {
  title: string;
  technologies: string[];
  description: string;
  images: string[];
  github: string;
  link: string;
};

type ProjectCardProps = {
    project: Project;
}




export default function ProjectCard({ project }: ProjectCardProps) {

    const backgroundColors: string[] = [
    "pinkBackground",
    "blueBackground",
    "redBackground",
    "greenBackground",
    "orangeBackground"
]
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

    function getTechColor(tech: string): string {
        const index = project.technologies.indexOf(tech);
        return index !== -1 ? techColors[index % techColors.length] : "defaultColor";
    }

    console.log("here", getTechColor(project.technologies[0]));

const backgroundColor = backgroundColors[Math.floor(Math.random() * backgroundColors.length)];
  

  return (
    <div className={`${styles.cardContainer} ${styles[backgroundColor]}`}>
        <p className={styles.title}>{project.title}</p>
        <div className={styles.imageContainer}>
        <img src={project.images[0]} alt={project.title} className={styles.image} />
        </div>
           <div className={`${styles.technologies}`}>
            {project.technologies.map((tech, index) => (
                <span key={index} className={`${styles.technology} ${styles[getTechColor(tech)]}`}>{`#${tech} `}</span>
            ))}
        </div>
        <p className={styles.description}>{project.description}</p>
     
        <div className={styles.links}>
            <Button variant="cardButton" href={project.github} ><FaGithub /> GitHub</Button>
            <Button variant="cardButton" href={project.link} ><TbWorld /> Demo</Button>
        </div>
        <Button variant="cardButton" href={project.link} target="">See More</Button>
    </div>
  )
}
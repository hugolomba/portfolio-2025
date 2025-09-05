import Button from './Button'
import styles from './ProjectCard.module.css'
import { FaGithub } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";


type Project = {
  title: string;
  technologies: string[];
  shortDescription: string;
  id: number;
  longDescription: string;
  images: string[];
  github: string;
  link: string;
};

type ProjectCardProps = {
    project: Project;
}

let colorQueue: string[] = [];
const backgroundColors: string[] = [
  "burntOrangeBackground",
  "fadedPinkBackground",
  "turquoiseBackground",
  "redBackground",
  "greenBackground",
  "petrolBlueBackground",
  "softPurpleBackground"
];

function shuffle<T>(array: T[]): T[] {
  return [...array].sort(() => Math.random() - 0.5);
}

function getNextBackgroundColor(): string {
  if (colorQueue.length === 0) {
    colorQueue = shuffle(backgroundColors);
  }
  return colorQueue.shift() as string;
}




export default function ProjectCard({ project }: ProjectCardProps) {

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

    const backgroundColor = getNextBackgroundColor();

  return (
    <div className={`${styles.cardContainer} ${styles[backgroundColor]}`}>
        <p className={styles.title}>{project.title}</p>
        <div className={styles.imageContainer}>
        <img src={project.images[0]} alt={project.title} className={styles.image} />
        </div>
           <div className={`${styles.technologies}`}>
            {project.technologies.map((tech, index) => (
                //
                <span key={index} className={`${styles.technology} ${styles[getTechColor(tech)]}`}>{`#${tech} `}</span>
            ))}
        </div>
        <p className={styles.description}>{project.shortDescription}</p>
     
        <div className={styles.links}>
            <Button btnType='link' variant="cardButton" href={project.github} ><FaGithub /> GitHub</Button>
            <Button btnType='link' variant="cardButton" href={project.link} ><TbWorld /> Demo</Button>
        </div>
        <Button btnType="link" variant="cardButton" href={`/project/${project.id}`} target="">See More</Button>
    </div>
  )
}
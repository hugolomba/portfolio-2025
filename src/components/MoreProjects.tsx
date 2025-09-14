import type { FC } from "react";
import styles from "./MoreProjects.module.css";
import { Link } from "react-router-dom";

interface MoreProjectsProps {
  id: string;
  title: string;
  image: string;
}

const handleClick = () => {
    window.scrollTo(0, 0); // scroll para o topo
  };

const MoreProjects: FC<MoreProjectsProps> = ({ title, image, id }) => {
  return (
    <Link  to={`/project/${id}`} className={styles.moreProjects} onClick={handleClick}>
      
        <img className={styles.cardImage} src={image} alt={title} />
        <h4>{title}</h4>
  
    </Link>
  );
};

export default MoreProjects;
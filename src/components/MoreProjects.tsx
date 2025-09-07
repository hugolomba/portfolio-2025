import type { FC } from "react";
import styles from "./MoreProjects.module.css";

interface MoreProjectsProps {
  id: string;
  title: string;
  image: string;
}

const MoreProjects: FC<MoreProjectsProps> = ({ title, image }) => {
  return (
    <div className={styles.moreProjects}>
        
      <img className={styles.cardImage} src={image} alt={title} />
      <h4>{title}</h4>
      {/* <Button variant="moreProjects" btnType="link" href={`/project/${id}`}>
        See Project
      </Button> */}
    </div>
  );
};

export default MoreProjects;
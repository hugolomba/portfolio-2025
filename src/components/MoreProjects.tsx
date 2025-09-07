import type { FC } from "react";
import Button from "./Button";
import styles from "./MoreProjects.module.css";

interface MoreProjectsProps {
  id: string;
  title: string;
  image: string;
}

const MoreProjects: FC<MoreProjectsProps> = ({ id, title, image }) => {
  return (
    <div className={styles.MoreProjects}>
      <img className={styles.cardImage} src={image} alt={title} />
      <h4>{title}</h4>
      <Button btnType="link" href={`/project/${id}`}>
        See Project
      </Button>
    </div>
  );
};

export default MoreProjects;
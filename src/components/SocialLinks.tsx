import { FaLinkedin, FaEnvelope, FaGithub } from "react-icons/fa";
import styles from './SocialLinks.module.css';

export default function SocialLinks() {
  return (
    <div className={styles.container}>
        <a className={styles.link} href="https://www.linkedin.com/in/hugo-lomba/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className={styles.icon} size={24} />
        </a>
        <a className={styles.link} href="mailto:hmlomba@gmail.com">
            <FaEnvelope className={styles.icon} size={24} />
        </a>
        <a className={styles.link} href="https://github.com/hugolomba" target="_blank" rel="noopener noreferrer">
            <FaGithub className={styles.icon} size={24} />
        </a>
    </div>
  );
}
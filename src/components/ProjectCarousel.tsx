import { useState } from "react";
import styles from "./ProjectCarousel.module.css";

export default function ProjectCarousel( { projectImages }: { projectImages: string[] }) {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % projectImages.length);
  const prev = () =>
    setCurrent((prev) => (prev - 1 + projectImages.length) % projectImages.length);

  return (
    <div className={styles.sliderContainer}>
      <div
        className={styles.sliderTrack}
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {projectImages.map((img, i) => (
          <img key={i} src={img} alt={`Slide ${i}`} className={styles.slide} />
        ))}
      </div>

      <button className={`${styles.arrow} ${styles.left}`} onClick={prev}>
        {"<"}
      </button>
      <button className={`${styles.arrow} ${styles.right}`} onClick={next}>
        {">"}
      </button>
    </div>
  );
}
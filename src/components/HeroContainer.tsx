
// components/HeroContainer.tsx
import React from 'react';
import styles from './HeroContainer.module.css';
import Button from './Button';
import mainPic from '../assets/main-pic.svg'; // Adjust the path as necessary

const HeroContainer: React.FC = () => {
  return (
    <section className={styles.heroContainer}>
     <div className={styles.heroInfo}>
      <div>
          <span className={styles.heroGreeting}>Hello, I am</span>
          <h1 className={styles.heroName}>Hugo Miranda</h1>
      </div>
          <p className={styles.heroDescription}>
        a developer and Science Computing student based in Dublin. I build engaging web experiences with JavaScript, TypeScript, React, Next.js, HTML, and CSS frameworks. I also have some back-end experience with Node.js, Express, databases, and cloud technologies like AWS. This is my portfolio, showcasing my projects, my story, and how we can work together.
        </p>
          <Button href='#aboutMe'>MORE INFO</Button>
        </div>

        <div className={styles.heroImageWrapper}>
          <img className={styles.heroImage} src={mainPic} alt="" />
        </div>  
    </section>
  );
};

export default HeroContainer;
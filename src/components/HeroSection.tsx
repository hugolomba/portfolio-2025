
// components/HeroContainer.tsx
import React from 'react';
import styles from './HeroSection.module.css';
import Button from './Button';
import mainPic from '../assets/main-pic.svg';

import comp1 from "../assets/hero/Component-1.svg"    
import comp2 from "../assets/hero/Component.svg"
import test from "../assets/aboutme1.png"

const HeroSection: React.FC = () => {
  return (
    <section className={styles.heroContainer}>
      <img className={styles.heroComponent1} src={comp1} alt="Component 1" />
     <div className={styles.heroInfo}>
      
      <div className={styles.heroText}>
          <span className={styles.heroGreeting}>Hello, my name is</span>
          <h1 className={styles.heroName}>Hugo Miranda</h1>
          
      

      </div>
          <p className={styles.heroDescription}>
        a developer and Science Computing student based in Dublin. I build engaging web experiences with JavaScript, TypeScript, React, Next.js, HTML, and CSS frameworks. I also have some back-end experience with Node.js, Express, databases, and cloud technologies like AWS. This is my portfolio, showcasing my projects, my story, and how we can work together.
        </p>
          <Button btnType='link' href='#aboutMe'>MORE INFO</Button>
        </div>

        <div className={styles.heroImageWrapper}>
          <img className={styles.heroImage} src={mainPic} alt="" />
        </div>  
    </section>
  );
};

export default HeroSection;
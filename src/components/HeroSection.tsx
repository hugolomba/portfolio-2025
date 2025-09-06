
// components/HeroContainer.tsx
import React from 'react';
import styles from './HeroSection.module.css';
import Button from './Button';
import mainPic from '../assets/main-pic.svg';
import profilePic from '../assets/hero.png';
import profilePic2 from '../assets/hugohero2.png';
import comp1 from "../assets/hero/Component-1.svg"    
import decBottom from "../assets/dec-bottom.png"
import decTop from "../assets/dec-top.png"
import decTopOne from "../assets/dec-top-1.png"


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
        a developer and Science Computing student based in Dublin. This is my portfolio, showcasing my projects, my story, and how we can work together.
        </p>
          <Button btnType='link' href='#aboutMe'>MORE INFO</Button>
          <img className={styles.heroDecTopOne} src={decTopOne} alt="Decoration Top" />
        </div>

        <div className={styles.heroImageWrapper}>
          <img className={styles.heroImage} src={profilePic2} alt="" />
          <img className={styles.heroDecBottom} src={decBottom} alt="Main Illustration" />

        </div>
    </section>
  );
};

export default HeroSection;
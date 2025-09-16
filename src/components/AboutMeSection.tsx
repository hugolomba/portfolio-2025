import styles from "./AboutmeSection.module.css"
import Button from './Button';
import InfoCard from './InfoCard';
import { useState } from 'react';

import aboutMeOne from "../assets/1.png"
import aboutMeTwo from "../assets/2.png"
import aboutMeThree from "../assets/3.png"
import starDecoration from "../assets/decorations/dec-star.png"
import faceDecoration from "../assets/decorations/face-decoration.png"



export default function AboutMeSection() {

    const skillsData = [
  {
    title: 'Frontend',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    items: ['JavaScript', 'TypeScript', 'React', 'Next.js', 'HTML', 'CSS (Tailwind, MUI)'],
  },
  {
    title: 'Backend',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    items: ['Node.js', 'Express', 'REST APIs', 'MongoDB', 'PostgreSQL'],
  },
  {
    title: 'Tools & Others',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
    items: ['Git/GitHub', 'Prisma', 'Docker', 'AWS basics', 'CI/CD'],
  },
  {
    title: 'Soft Skills',
    icon: 'https://cdn-icons-png.flaticon.com/512/1946/1946429.png',
    items: ['Problem-solving', 'Teamwork', 'Adaptability', 'Customer-focused mindset'],
  },
];

    const [activeCard, setActiveCard] = useState<number>(1);

    function handleCardChange(cardNumber: number): void {
        setActiveCard(cardNumber)
    }

  return (
    <section id="aboutMe" className={styles.aboutMeSection}>
  
    <div className={styles.aboutMeHeader}>   
      <h2 className={styles.aboutMeTitle}>Who I am</h2>
    </div>
        
    
   
        <div className={styles.aboutMeColumns}>
          <div className={styles.divider}>
            <div className={styles.controlButtons}>
            <Button btnType='button' onMouseOver={() => handleCardChange(1)}>About Me</Button>
            <Button btnType='button' onMouseOver={() => handleCardChange(2)}>Skills</Button>
            <Button btnType='button' onMouseOver={() => handleCardChange(3)}>Experiences</Button>
        </div>

        <div className={styles.aboutMeImagesMobile}>
        <img src={activeCard === 1 ? aboutMeOne : activeCard === 2 ? aboutMeTwo : aboutMeThree} alt="About Me Image" />
        </div>
        </div>
    


        <div className={styles.aboutMeCards}>
            <img src={starDecoration} alt="Star Decoration" className={styles.starDecoration} />
            <img src={faceDecoration} alt="Face Decoration" className={styles.faceDecoration} />
            <InfoCard activeCard={activeCard} />
        </div>
        <div className={styles.aboutMeImages}>
        <img src={activeCard === 1 ? aboutMeOne : activeCard === 2 ? aboutMeTwo : aboutMeThree} alt="About Me Image" />

 
        </div>
        
      </div>
    </section>
  );
}

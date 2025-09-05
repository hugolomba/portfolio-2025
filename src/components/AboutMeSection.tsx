import styles from './AboutMeSection.module.css';
import Button from './Button';
import InfoCard from './InfoCard';
import { useState } from 'react';

import aboutMeOne from "../assets/1.png"
import aboutMeTwo from "../assets/2.png"
import aboutMeThree from "../assets/3.png"


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
      {/* <p className={styles.aboutMeDescription}>
        And what I can do for you!
      </p> */}
    </div>
        
    
     
        <div className={styles.aboutMeColumns}>

            <div className={styles.controlButtons}>
            <Button btnType='button' onMouseOver={() => handleCardChange(1)}>About Me</Button>
            <Button btnType='button' onMouseOver={() => handleCardChange(2)}>Skills</Button>
            <Button btnType='button' onMouseOver={() => handleCardChange(3)}>Experiences</Button>
        </div>
<div className={styles.aboutMeCards}>
                {activeCard === 1 && (
                    <InfoCard title="About Me" cardState={activeCard}>
                  
<>
<p>
  I’m a curious and adaptable person with a strong interest in technology. I started my career in customer service and banking, where I developed valuable skills in <strong>communication, leadership, and problem-solving</strong>. These experiences taught me how to work with people, manage challenges, and stay organised under pressure.
</p>

<p>
  I’ve always been passionate about understanding how things work, which led me to explore technology and coding. In 2022, I completed a <strong>web development bootcamp</strong> and started building projects that allowed me to put theory into practice and learn by doing.
</p>

<p>
  In 2023, I made a decisive move to <strong>Ireland</strong> to improve my English and fully focus on a career in tech. I’m now pursuing a <strong>Higher Diploma in Science in Computing</strong>, continuously developing projects and improving my skills as a software developer every day.
</p>
</>
        </InfoCard>
   
                )}  
                {activeCard === 2 && (
                    <InfoCard title="Skills" cardState={activeCard}>
                        <>
                        {skillsData.map((skill, index) => (
        <div key={index} className={styles.skillCard}>
          <img src={skill.icon} alt={skill.title} className={styles.icon} />
          <h3>{skill.title}</h3>
          <ul>
            {skill.items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
                        </>
                    </InfoCard>
                )} 
                {activeCard === 3 && (
                    <InfoCard title="Experiences" cardState={activeCard}>
                         <>
         <p>
  I worked for seven years in banking at <strong>Itaú Unibanco (Brazil)</strong>, progressing from Cashier and Business Agent to Operational Supervisor and Treasury & Services Leader, where I developed strong skills in <strong>discipline, leadership, problem-solving, and communication</strong>. I’ve always been passionate about technology, which led me to pursue a career in this field.
</p>

<p>
  In 2022, I completed a <strong>web development bootcamp</strong> and began building projects. In 2023, I made a decisive change: I left my job, moved to <strong>Ireland</strong> to improve my English, and fully committed myself to a career in tech.
</p>

<p>
  After a year and a half dedicated to improving my English, I am now pursuing a <strong>Higher Diploma in Science in Computing</strong> while continuing to study independently and develop projects that you can explore in my portfolio.
</p>
  </>
                    </InfoCard>
                )}     
            </div>
       <div className={styles.aboutMeImages}>
        <img src={activeCard === 1 ? aboutMeOne : activeCard === 2 ? aboutMeTwo : aboutMeThree} alt="About Me Image 1" />

 
        </div>
        
      </div>
    </section>
  );
}

import style from './AboutMeSection.module.css';
import Button from './Button';
import InfoCard from './InfoCard';
import { useState } from 'react';

import aboutMeOne from "../assets/1.png"
import aboutMeTwo from "../assets/2.png"
import aboutMeThree from "../assets/3.png"


export default function AboutMeSection() {

    const [activeCard, setActiveCard] = useState<number>(1);

    function handleCardChange(cardNumber: number): void {
        setActiveCard(cardNumber)
    }

  return (
    <section className={style.aboutMeSection} id="aboutMe">
    <div className={style.aboutMeHeader}>   
      <h2 className={style.aboutMeTitle}>Who I am</h2>
      <p className={style.aboutMeDescription}>
        And what I can do for you!
      </p>
    </div>
        <div className={style.controlButtons}>
            <Button btnType='button' onClick={() => handleCardChange(1)}>About Me</Button>
            <Button btnType='button' onClick={() => handleCardChange(2)}>Skills</Button>
            <Button btnType='button' onClick={() => handleCardChange(3)}>Experiences</Button>
        </div>
    
     
        <div className={style.aboutMeColumns}>
            <div className={style.aboutMeCards}>
                {activeCard === 1 && (
                    <InfoCard title="About Me" cardState={activeCard}>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere nemo ut labore vel veniam tempore dignissimos eveniet cupiditate esse autem consequatur iste libero, odio est asperiores natus odit earum recusandae.
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto aut sapiente porro. Hic, ducimus! Beatae repellendus vero, consectetur repellat quia voluptate. Corrupti repudiandae atque magnam? Id atque ratione hic mollitia!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi eos, quaerat amet harum, iure in consequuntur autem soluta obcaecati odio ullam magni consequatur perspiciatis iusto laudantium hic. Praesentium, earum odit.
                    </InfoCard>
                )}  
                {activeCard === 2 && (
                    <InfoCard title="Skills" cardState={activeCard}>
                        <ul>
                            <li>HTML, CSS, and JavaScript</li>
                            <li>React and TypeScript</li>
                            <li>Responsive Web Design</li>
                            <li>Version Control (Git)</li>
                            <li>RESTful APIs</li>
                            <li>Testing and Debugging</li>
                            <li>Performance Optimization</li>
                            <li>Accessibility (a11y)</li>
                            <li>UI/UX Principles</li>
                            <li>Deployment and Hosting</li>
                        </ul>
                    </InfoCard>
                )} 
                {activeCard === 3 && (
                    <InfoCard title="Experiences" cardState={activeCard}>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere nemo ut labore vel veniam tempore dignissimos eveniet cupiditate esse autem consequatur iste libero, odio est asperiores natus odit earum recusandae.
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit dignissimos cupiditate at! Reiciendis explicabo eaque, ut qui blanditiis dolores unde sit modi soluta dicta deserunt enim sunt laudantium cum amet.
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur, neque. Quod assumenda iusto aliquam aperiam quam ea odio architecto commodi ratione, excepturi possimus ipsa. Voluptate impedit amet eos temporibus est.
                    </InfoCard>
                )}     
            </div>
       <div className={style.aboutMeImages}>
        <img src={activeCard === 1 ? aboutMeOne : activeCard === 2 ? aboutMeTwo : aboutMeThree} alt="About Me Image 1" />

 
        </div>
        
      </div>
    </section>
  );
}

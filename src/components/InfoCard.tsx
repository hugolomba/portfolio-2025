import style from './InfoCard.module.css';
import type { JSX } from 'react';
import { IoLogoReact, IoLogoJavascript, IoLogoHtml5 } from "react-icons/io5";
import { IoLogoCss3 } from "react-icons/io";

import { SiTypescript, SiExpress, SiMongodb, SiPostgresql, SiTailwindcss } from "react-icons/si";
import { DiNodejs } from "react-icons/di";







export default function InfoCard({activeCard}: {activeCard: number}): JSX.Element {

  // activeCard === 1 ? aboutMeOne : activeCard === 2 ? aboutMeTwo : aboutMeThree



  return (
    <div className={style.infoCardContainer}>
      
      {/* <h3 className={style.infoCardTitle}>{title}</h3>
      <p className={style.aboutMe}>{children}</p> */}

      {activeCard === 1 && (
    <div className={style.aboutMeContent}>
    <h3 className={style.infoCardTitle}>About Me</h3>
<p>
    I started my career in customer service and banking, where I developed skills in <strong>communication, leadership, and problem-solving</strong>. These experiences taught me how to work with people and handle challenges in different situations.
</p>

<p>
    In 2022, I completed a <strong>web development bootcamp</strong> and began building projects to practise coding and gain real experience. This was the start of my journey into technology.
</p>

<p>
    In 2023, I moved to <strong>Ireland</strong> to improve my English and focus on a career in tech. I am now studying for a <strong>Higher Diploma in Science in Computing</strong> and keep developing projects to grow my skills as a software developer.
</p>
</div>
      )}

      {activeCard === 2 && (
        <div className={style.skillsContent}>
          <h3 className={style.infoCardTitle}>Skills</h3>
          <ul className={style.skillsList}>
            <li className={style.skillItem}><IoLogoReact className={style.skillItemReact} /> React</li>
            <li className={style.skillItem}><IoLogoJavascript className={style.skillItemJavascript} /> JavaScript</li>
            <li className={style.skillItem}><SiTypescript className={style.skillItemTypescript} /> TypeScript</li>
            <li className={style.skillItem}><DiNodejs className={style.skillItemNodejs} /> Node.js</li>
            <li className={style.skillItem}><SiExpress className={style.skillItemExpress} /> Express.js</li>
            <li className={style.skillItem}><IoLogoHtml5 className={style.skillItemHtml} /> HTML</li>
            <li className={style.skillItem}><IoLogoCss3 className={style.skillItemCss} /> CSS</li>
            <li className={style.skillItem}><SiTailwindcss className={style.skillItemTailwind} /> Tailwind</li>
            <li className={style.skillItem}><SiMongodb className={style.skillItemMongodb} /> MongoDB</li>
            <li className={style.skillItem}><SiPostgresql className={style.skillItemPostgresql} /> PostgreSQL</li>
            {/* <li className={style.skillItem}>Problem-solving</li>
            <li className={style.skillItem}>Teamwork</li>
            <li className={style.skillItem}>Adaptability</li>
            <li className={style.skillItem}>Customer-focused mindset</li> */}
          </ul>
        </div>
      )}

      {activeCard === 3 && (
        <div className={style.experiencesContent}>
          <h3 className={style.infoCardTitle}>Experiences</h3>
          <p>
    I worked for seven years at <strong>Itaú Unibanco</strong> in Brazil, starting as a Cashier and later becoming Treasury & Services Leader. In this time, I learned a lot about <strong>communication, leadership, problem-solving, and working under pressure</strong>.
</p>

<p>
    In 2022, I joined a <strong>web development bootcamp</strong> and started building projects to practise coding and improve my skills. That’s when I decided to focus on a career in technology.
</p>

<p>
    In 2023, I moved to <strong>Ireland</strong> to improve my English and dedicate myself to tech. I am now studying for a <strong>Higher Diploma in Science in Computing</strong> and continue to develop projects that you can see in my portfolio.
</p>
        </div>
      )}

    </div>
  );
}









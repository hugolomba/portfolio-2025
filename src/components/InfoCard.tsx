import style from './InfoCard.module.css';
import type { JSX } from 'react';



export default function InfoCard({children, title }: {children: string | JSX.Element, title: string}): JSX.Element {
  return (
    <div className={style.infoCardContainer}>
      
      <h3 className={style.infoCardTitle}>{title}</h3>
      <p className={style.aboutMe}>{children}</p>

    </div>
  );
}

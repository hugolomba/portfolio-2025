import style from './InfoCard.module.css';
import type { JSX } from 'react';

import cardOne from "../assets/card1.svg"
import cardTwo from "../assets/card2.svg"
import cardThree from "../assets/card3.svg"

export default function InfoCard({children, title, cardState, ...rest}: {children: string, title: string, cardState: number}): JSX.Element {
  return (
    <div className={style.infoCardContainer}>
    <img className={style.infoCardImage} src={cardState === 1 ? cardOne : cardState === 2 ? cardTwo : cardThree} alt="Info Card" />
      <h3 className={style.infoCardTitle}>{title}</h3>
      <p className={style.infoCardDescription}>{children}</p>
    </div>
  );
}

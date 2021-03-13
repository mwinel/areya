import { FC } from "react";
import s from "./Card.module.css";

interface CardProps {
  title: string;
  description: string;
  href?: string;
  onClick?: any;
  ref?: any;
}

const Card: FC<CardProps> = ({ title, description, href, onClick, ref }) => {
  return (
    <a href={href} onClick={onClick} ref={ref} className={s.bg}>
      <div className={s.card}>
        <h3 className={s.title}>{title} &rarr;</h3>
        <p className={s.description}>{description}</p>
      </div>
    </a>
  );
};

export default Card;

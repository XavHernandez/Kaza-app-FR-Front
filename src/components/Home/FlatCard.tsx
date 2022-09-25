import React from "react";
import { useNavigate } from "react-router-dom";
import type Flat from "../../entities/Flat.interface";
import styles from "./FlatCard.module.scss";

type FlatCardDetails = Pick<Flat, "id" | "title" | "cover">;

const FlatCard: React.FunctionComponent<FlatCardDetails> = ({ id, title, cover }) => {
  const navigate = useNavigate();
  function goToFlat(): void {
    navigate(`/${id}`);
  }

  return (
    <div className={styles.card} onClick={goToFlat}>
      <picture>
        <img src={cover} alt={title} className={styles.card_cover} />
      </picture>
      <p className={styles.card_title}>{title}</p>
    </div>
  );
};

export default FlatCard;

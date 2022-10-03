import React from "react";
import { useNavigate } from "react-router-dom";
import type Flat from "../../entities/Flat.interface";
import styles from "./FlatCard.module.scss";

type FlatCardDetails = Pick<Flat, "id" | "title" | "cover">;

const FlatCard: React.FunctionComponent<FlatCardDetails> = (props: FlatCardDetails) => {
  const navigate = useNavigate();
  function goToFlat(): void {
    navigate(`/${props.id}`);
  }

  return (
    <div className={styles.card} onClick={goToFlat}>
      <picture>
        <img src={props.cover} alt={props.title} className={styles.card_cover} />
      </picture>
      <p className={styles.card_title}>{props.title}</p>
    </div>
  );
};

export default FlatCard;

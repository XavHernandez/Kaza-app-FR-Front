import type Flat from "../../entities/Flat.interface";
import React from "react";
import styles from "./Rating.module.scss";

type Rating = Pick<Flat, "rating">;

const Rating: React.FunctionComponent<Rating> = (props: Rating) => {
  const ratings = new Array(5).fill("");

  function isActive(index: number): string {
    return index + 1 <= Number(props?.rating) ? "#FF6060" : "#E3E3E3";
  }

  return (
    <div className={styles.ratings}>
      {ratings.map((_, index) => {
        return (
          <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill={isActive(index)}>
            <path d="M9.8225 6.5L8 0.5L6.1775 6.5H0.5L5.135 9.8075L3.3725 15.5L8 11.9825L12.635 15.5L10.8725 9.8075L15.5 6.5H9.8225Z" />
          </svg>
        );
      })}
    </div>
  );
};

export default Rating;

import type Flat from "../../entities/Flat.interface";
import React from "react";
import styles from "./Rating.module.scss";

type Rating = Pick<Flat, "rating">;

const Rating: React.FunctionComponent<Rating> = ({ rating }) => {
  return <h2>Rating</h2>;
};

export default Rating;

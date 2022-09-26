import type Flat from "../../entities/Flat.interface";
import React from "react";
import styles from "./Carroussel.module.scss";

type CarrousselImages = Pick<Flat, "pictures">;

const Carroussel: React.FunctionComponent<CarrousselImages> = ({ pictures }) => {
  return <h2>Carroussel</h2>;
};

export default Carroussel;

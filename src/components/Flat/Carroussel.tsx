import type Flat from "../../entities/Flat.interface";
import React, { useState } from "react";
import styles from "./Carroussel.module.scss";

type CarrousselImages = Pick<Flat, "pictures">;

const Carroussel: React.FunctionComponent<CarrousselImages> = (props: CarrousselImages) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  function forward() {
    if (activeIndex + 1 === props.pictures.length) {
      setActiveIndex(0);
      return;
    }
    setActiveIndex(activeIndex + 1);
  }

  function backward() {
    if (activeIndex - 1 < 0) {
      setActiveIndex(props.pictures.length - 1);
      return;
    }
    setActiveIndex(activeIndex - 1);
  }

  return (
    <section className={styles.carrousel}>
      <picture className={styles.carrousel_picture}>
        <div className={styles.carrousel_backward} onClick={backward}>
          <svg viewBox="0 0 48 80" xmlns="http://www.w3.org/2000/svg">
            <path d="M47.04 7.78312L39.92 0.703125L0.359985 40.3031L39.96 79.9031L47.04 72.8231L14.52 40.3031L47.04 7.78312Z" />
          </svg>
        </div>
        <img
          src={props.pictures[activeIndex]}
          alt={`Prise de vue ${activeIndex + 1}`}
          className={styles.carrousel_img}></img>
        <div className={styles.carrousel_forward} onClick={forward}>
          <svg viewBox="0 0 48 80" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.960022 72.3458L8.04002 79.4258L47.64 39.8258L8.04002 0.22583L0.960022 7.30583L33.48 39.8258L0.960022 72.3458Z" />
          </svg>
        </div>
      </picture>
    </section>
  );
};

export default Carroussel;

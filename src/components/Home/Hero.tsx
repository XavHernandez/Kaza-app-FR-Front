import React from "react";
import styles from "./Hero.module.scss";
import background from "../../assets/background.jpg";

const Hero: React.FunctionComponent = () => {
  return (
    <section className={styles.hero}>
      <picture className={styles.hero_picture}>
        <img src={background} alt="Paysage decoratif" className={styles.hero_img}></img>
      </picture>
      <h1 className={styles.hero_title}>Chez vous, partout et ailleurs</h1>
    </section>
  );
};

export default Hero;

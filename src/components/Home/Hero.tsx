import React from "react";
import styles from "./Hero.module.scss";

type HeroProps = {
  imageUrl: string;
  title: boolean;
};

const Hero: React.FunctionComponent<HeroProps> = ({ imageUrl, title }) => {
  return (
    <section className={styles.hero}>
      <picture className={styles.hero_picture}>
        <img src={imageUrl} alt="Paysage decoratif" className={styles.hero_img}></img>
      </picture>
      {title && <h1 className={styles.hero_title}>Chez vous, partout et ailleurs</h1>}
    </section>
  );
};

export default Hero;

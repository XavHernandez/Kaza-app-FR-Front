import type Flat from "../entities/Flat.interface";
import React from "react";
import { useLoaderData } from "react-router-dom";
import getFlatsData from "../api/getFlatsData";
import Hero from "../components/Home/Hero";
import FlatCard from "../components/Home/FlatCard";
import background from "../assets/hero_home.jpg";
import styles from "./Home.module.scss";

const Home: React.FunctionComponent = () => {
  const flatsData = useLoaderData() as Flat[];

  return (
    <React.Fragment>
      <Hero imageUrl={background} title={true} />
      <section className={styles.flats}>
        <div className={styles.flats_grid}>
          {flatsData.map((flat) => {
            return <FlatCard id={flat.id} title={flat.title} cover={flat.cover} key={flat.id} />;
          })}
        </div>
      </section>
    </React.Fragment>
  );
};

export function loader() {
  return getFlatsData();
}

export default Home;
